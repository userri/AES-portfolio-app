import SkillTag from "./SkillTag";
import styles from "./style/ProjectCard.module.css";

const ProjectCard = () => {
  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <img className={styles.icon} src="" alt="아이콘" />
        <span className={styles.memberCount}>3인 프로젝트</span>
      </div>
      <div className={styles.title}>프로젝트 제목</div>
      <div className={styles.serviceLink}>
        <img src="" alt="" />
        <div className={styles.serviceLink}>프로젝트 실제 서비스 링크</div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.subtitle}>프로젝트 한줄소개</div>
      <div className={styles.description}>프로젝트 설명 1</div>
      <div className={styles.description}>프로젝트 설명 2</div>
      <div className={styles.description}>프로젝트 설명 3</div>
      <div className={styles.subtitle}>기술스택</div>
      <div className={styles.line}></div>
      <div></div>
      <div className={styles.skills}>
        <SkillTag text="Java" bgColor="black" textColor="white" />
        <SkillTag text="JavaScript" bgColor="black" textColor="white" />
        <SkillTag text="PortgreSQL" bgColor="black" textColor="white" />
      </div>{" "}
      <div className={styles.duration}>2026-02-24 ~ 2026-03-04</div>
    </div>
  );
};

export default ProjectCard;
