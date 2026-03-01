import ProjectCard from "../../../components/ui/ProjectCard";
import styles from "../../style/Projects.module.css";
import { useQuery } from "@tanstack/react-query";
import type { Project } from "../../../types/Project";
import { supabase } from "../../../api/supabase";
import readingGlass from "../../../assets/icon/돋보기.png";
import SkillTag from "../../../components/ui/SkillTag";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import SectionTitle from "../../../components/ui/SectionTitle";
const Projects = () => {
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

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러가 발생했습니다.</p>;

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

  return (
    <div className={styles.body}>
      <SectionTitle title="PROJECTS" />
      <form className={styles.search} action="">
        <input
          className={styles.placeholder}
          type="text"
          placeholder="검색어를 입력하세요"
        />
        <img className={styles.icon} src={readingGlass} alt="" />
      </form>
      <div className={styles.searchTags}>
        {searchSkills.map((skill) => (
          <SkillTag
            key={skill}
            text={skill}
            bgColor="black"
            textColor="white"
          />
        ))}
      </div>
      <div className={styles.skills}>
        {projects.map((project) => (
          <Link to={`/project/${project.slug}`} key={project.id}>
            <ProjectCard
              iconImg={project.logo_url}
              memberCnt={project.member_count}
              title={project.title}
              serviceLink={project.service_link}
              // project_skills를 string 배열로 바꿔서 전달하기
              skills={project.project_skills.map((item) => item.skills.name)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Projects;
