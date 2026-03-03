import SkillTag from "./SkillTag";
import styles from "./style/ProjectCard.module.css";
import iconImgSample from "../../assets/icon/black-link.webp";
import type React from "react";
import type { Project } from "../../types/Project";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleCardClick = () => {
    navigate(`/project/${project.slug}`);
  };
  return (
    <div className={styles.body} onClick={handleCardClick}>
      <div className={styles.top}>
        <img
          className={styles.icon}
          src={project.logo_url || iconImgSample}
          alt="아이콘"
        />
        <span className={styles.memberCount}>
          {project.member_count}인 프로젝트
        </span>
      </div>
      <div className={styles.title}>{project.title}</div>
      <div className={styles.intro}>{project.project_intro}</div>
      <a
        href={project.service_link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleLinkClick}
        className={styles.serviceLink}
      >
        {project.service_link}
      </a>
      <div className={styles.line}></div>
      <div className={styles.subtitle}>프로젝트 한줄소개</div>
      {project.project_details.map((detail) => (
        <div key={detail.project_detail_id} className={styles.description}>
          {detail.summary}
        </div>
      ))}
      <div className={styles.subtitle}>기술스택</div>
      <div className={styles.line}></div>
      <div></div>
      <div className={styles.skills}>
        {project.project_skills.map((skill) => (
          <SkillTag
            key={skill.skill_id}
            text={skill.skills.name}
            bgColor="black"
            textColor="white"
          />
        ))}
      </div>{" "}
      <div className={styles.duration}>
        <div>{project.start_date}</div>
        <div> ~ </div>
        <div>{project.end_date}</div>{" "}
      </div>
    </div>
  );
};

export default ProjectCard;
