import SkillTag from "./SkillTag";
import styles from "./style/ProjectCard.module.css";
import iconImgSample from "../../assets/image/black-link.webp";

interface ProjectCardProps {
  iconImg?: string;
  memberCnt?: number;
  title: string;
  serviceLink?: string;
  skills?: string[];
  start_date?: string;
  end_date?: string;
}

const ProjectCard = ({
  iconImg = iconImgSample,
  memberCnt = 1,
  title,
  serviceLink = "https://github.com/userri/",
  skills = ["Java", "JavaScript", "Spring Boot", "JPA", "MySQL", "Redis"],
  start_date = "2026.01.01",
  end_date = "2026.01.02",
}: ProjectCardProps) => {
  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <img className={styles.icon} src={iconImg} alt="아이콘" />
        <span className={styles.memberCount}>{memberCnt}인 프로젝트</span>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.serviceLink}>
        <img src={iconImg} alt="" />
        <div className={styles.serviceLink}>{serviceLink}</div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.subtitle}>프로젝트 한줄소개</div>
      <div className={styles.description}>- 프로젝트 설명 1</div>
      <div className={styles.description}>- 프로젝트 설명 2</div>
      <div className={styles.description}>- 프로젝트 설명 3</div>
      <div className={styles.subtitle}>기술스택</div>
      <div className={styles.line}></div>
      <div></div>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <SkillTag text={skill} bgColor="black" textColor="white" />
        ))}
      </div>{" "}
      <div className={styles.duration}>
        <div>{start_date}</div>
        <div> ~ </div>
        <div>{end_date}</div>{" "}
      </div>
    </div>
  );
};

export default ProjectCard;
