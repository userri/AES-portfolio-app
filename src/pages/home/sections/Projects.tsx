import ProjectCard from "../../../components/ui/ProjectCard";
import SectionTitle from "../../../components/ui/SectionTitle";
import styles from "../../style/Projects.module.css";
import img1 from "../../../assets/image/black-link.webp";
import img2 from "../../../assets/image/calendar.png";
import img3 from "../../../assets/image/call.png";
import img4 from "../../../assets/image/location.png";
import img5 from "../../../assets/image/mail.png";
import img6 from "../../../assets/image/pencil.png";
import img7 from "../../../assets/image/person.png";
const Projects = () => {
  const projects = [
    {
      iconimg: img1,
      memberCnt: 1,
      title: "1차 포트폴리오",
      serviceLink: "https://naver.com",
      skills: ["React", "JavaScript", "TypeScript", "React-Query", "Supabase"],
    },
    {
      iconimg: img2,
      memberCnt: 4,
      title: "1차 포트폴리오",
      serviceLink: "https://naver.com",
      skills: ["React", "Spring Boot"],
    },
    {
      iconimg: img3,
      memberCnt: 1,
      title: "2차 웹 서버",
      serviceLink: "https://google.com",
      skills: ["React", "JavaScript", "TypeScript", "React-Query", "Supabase"],
    },
    {
      iconimg: img4,
      memberCnt: 1,
      title: "3차 안드로이드",
      serviceLink: "https://naver.com",
      skills: ["React", "JavaScript", "TypeScript", "React-Query", "Supabase"],
    },
    {
      iconimg: img5,
      memberCnt: 1,
      title: "4차 통합",
      serviceLink: "https://github.com/userri/",
      skills: ["React", "JavaScript", "TypeScript", "React-Query", "Supabase"],
    },
    {
      iconimg: img6,
      memberCnt: 1,
      title: "0차 피그마",
      serviceLink: "https://naver.com",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "React-Query",
        "Supabase",
        "Figma",
        "QueryDSL",
        "PostgreSQL",
      ],
    },
    {
      iconimg: img7,
      memberCnt: 1,
      title: "1차 포트폴리오",
      serviceLink: "https://naver.com",
      skills: ["React", "JavaScript", "TypeScript", "React-Query", "Supabase"],
    },
  ];
  return (
    <div className={styles.body}>
      <SectionTitle title="PROJECTS" />
      <div>검색어를 입력해보세요</div>
      <div>태그 들어갈 자리</div>
      <div className={styles.skills}>
        {projects.map((project) => (
          <ProjectCard
            iconImg={project.iconimg}
            memberCnt={project.memberCnt}
            title={project.title}
            serviceLink={project.serviceLink}
            skills={project.skills}
          />
        ))}
      </div>
    </div>
  );
};
export default Projects;
