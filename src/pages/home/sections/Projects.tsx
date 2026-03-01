import ProjectCard from "../../../components/ui/ProjectCard";
import styles from "../../style/Projects.module.css";
import { useQuery } from "@tanstack/react-query";
import type { Project } from "../../../types/Project";
import { supabase } from "../../../api/supabase";
import readingGlass from "../../../assets/icon/돋보기.png";
import SkillTag from "../../../components/ui/SkillTag";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import SectionTitle from "../../../components/ui/SectionTitle";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // 프로젝트 데이터 가져오기
  const {
    data: projects = [],
    isLoading,
    error,
  } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select(
          `*
          , project_skills(
          skill_id,
          skills(name)
        )`,
        )
        .order("start_date", { ascending: false });
      if (error) throw error;
      return (data ?? []) as Project[];
    },
  });

  // 검색 가능한 기술 스택 생성
  const searchSkills = useMemo(() => {
    const skillSet = new Set<string>();
    projects.forEach((project) => {
      project.project_skills?.forEach((ps) => {
        if (ps.skills?.name) {
          skillSet.add(ps.skills.name);
        }
      });
    });
    return Array.from(skillSet).sort();
  }, [projects]);

  // 검색어에 따라 필터링된 프로젝트 생성
  const filteredProjects = useMemo(() => {
    const lowerSearch = searchTerm.toLowerCase().trim();
    if (!lowerSearch) return projects;
    return projects.filter((project) => {
      const hasTitle = project.title.toLowerCase().includes(lowerSearch);
      const hasSkill = project.project_skills?.some((ps) =>
        ps.skills?.name.toLowerCase().includes(lowerSearch),
      );
      return hasTitle || hasSkill;
    });
  }, [searchTerm, projects]);

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러가 발생했습니다.</p>;

  return (
    <div className={styles.body}>
      <SectionTitle title="PROJECTS" />
      <div className={styles.searchBox}>
        <input
          className={styles.search}
          type="text"
          placeholder="프로젝트명 또는 기술 스택 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img className={styles.icon} src={readingGlass} alt="검색" />
      </div>
      <div className={styles.searchTags}>
        {searchSkills.map((skill) => (
          <div
            key={skill}
            style={{ cursor: "pointer" }}
            onClick={() => setSearchTerm(skill)}
          >
            <SkillTag
              key={skill}
              text={skill}
              bgColor="black"
              textColor="white"
            />
          </div>
        ))}
      </div>
      <div className={styles.skills}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Link to={`/project/${project.slug}`} key={project.id}>
              <ProjectCard
                iconImg={project.logo_url}
                memberCnt={project.member_count}
                title={project.title}
                serviceLink={project.service_link}
                skills={project.project_skills.map((item) => item.skills.name)}
              />
            </Link>
          ))
        ) : (
          <p className={styles.noResult}>검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
