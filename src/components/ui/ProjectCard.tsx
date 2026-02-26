import SkillTag from "./SkillTag";
import styles from "./style/ProjectCard.module.css";
import iconImgSample from "../../assets/image/black-link.webp";

interface ProjectCardProps {
  iconImg?: string;
  memberCnt?: number;
  title: string;
  serviceLink?: string;
  skills?: string[];
}

const ProjectCard = ({
  iconImg = iconImgSample,
  memberCnt = 1,
  title,
  serviceLink = "https://github.com/userri/",
  skills = ["Java", "JavaScript", "Spring Boot", "JPA", "MySQL", "Redis"],
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
      <div className={styles.duration}>2026-02-24 ~ 2026-03-04</div>
    </div>
  );
};

export default ProjectCard;
