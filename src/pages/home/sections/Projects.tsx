import ProjectCard from "../../../components/ui/ProjectCard";
import SectionTitle from "../../../components/ui/SectionTitle";
import styles from "../../style/Projects.module.css";
import { useQuery } from "@tanstack/react-query";
import type { Project } from "../../../types/Project";
import { supabase } from "../../../api/supabase";
import readingGlass from "../../../assets/icon/돋보기.png";
import SkillTag from "../../../components/ui/SkillTag";
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

  const skills = ["JAVA", "JavaScript", "SpringBoot", "JPA", "MySQL"];

  // TODO: project에서 기술 추출해서 set으로 만들기

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
        {skills.map((skill) => (
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
          <ProjectCard
            key={project.id}
            iconImg={project.logo_url}
            memberCnt={project.member_count}
            title={project.title}
            serviceLink={project.service_link}
            // project_skills를 string 배열로 바꿔서 전달하기
            skills={project.project_skills.map((item) => item.skills.name)}
          />
        ))}
      </div>
    </div>
  );
};
export default Projects;
