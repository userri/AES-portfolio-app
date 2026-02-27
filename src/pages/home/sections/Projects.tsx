import ProjectCard from "../../../components/ui/ProjectCard";
import SectionTitle from "../../../components/ui/SectionTitle";
import styles from "../../style/Projects.module.css";
import img1 from "../../../assets/icon/black-link.webp";
import img2 from "../../../assets/icon/calendar.png";
import img3 from "../../../assets/icon/call.png";
import img4 from "../../../assets/icon/location.png";
import img5 from "../../../assets/icon/mail.png";
import img6 from "../../../assets/icon/pencil.png";
import img7 from "../../../assets/icon/person.png";
import { useQuery } from "@tanstack/react-query";
import type { Project } from "../../../types/Project";
import { supabase } from "../../../api/supabase";
import readingGlass from "../../../assets/icon/돋보기.png";
import SkillTag from "../../../components/ui/SkillTag";
const Projects = () => {
  // const projects1 = [
  //   {
  //     iconimg: img1,
  //     memberCnt: 1,
  //     title: "1차 포트폴리오",
  //     serviceLink: "https://naver.com",
  //     skills: ["React", "JavaScript", "TypeScript", "React-Query", "Supabase"],
  //   },
  //   {
  //     iconimg: img2,
  //     memberCnt: 4,
  //     title: "1차 포트폴리오",
  //     serviceLink: "https://naver.com",
  //     skills: ["React", "Spring Boot"],
  //   },
  //   {
  //     iconimg: img3,
  //     memberCnt: 1,
  //     title: "2차 웹 서버",
  //     serviceLink: "https://google.com",
  //     skills: ["React", "JavaScript", "TypeScript", "React-Query", "Supabase"],
  //   },
  //   {
  //     iconimg: img4,
  //     memberCnt: 1,
  //     title: "3차 안드로이드",
  //     serviceLink: "https://naver.com",
  //     skills: ["React", "JavaScript", "TypeScript", "React-Query", "Supabase"],
  //   },
  //   {
  //     iconimg: img5,
  //     memberCnt: 1,
  //     title: "4차 통합",
  //     serviceLink: "https://github.com/userri/",
  //     skills: ["React", "JavaScript", "TypeScript", "React-Query", "Supabase"],
  //   },
  //   {
  //     iconimg: img6,
  //     memberCnt: 1,
  //     title: "0차 피그마",
  //     serviceLink: "https://naver.com",
  //     skills: [
  //       "React",
  //       "JavaScript",
  //       "TypeScript",
  //       "React-Query",
  //       "Supabase",
  //       "Figma",
  //       "QueryDSL",
  //       "PostgreSQL",
  //     ],
  //   },
  //   {
  //     iconimg: img7,
  //     memberCnt: 1,
  //     title: "1차 포트폴리오",
  //     serviceLink: "https://naver.com",
  //     skills: ["React", "JavaScript", "TypeScript", "React-Query", "Supabase"],
  //   },
  // ];

  const {
    data: projects = [],
    isLoading,
    error,
  } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
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
          <SkillTag text={skill} bgColor="black" textColor="white" />
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
            // skills={project.skills}
          />
        ))}
      </div>
    </div>
  );
};
export default Projects;
