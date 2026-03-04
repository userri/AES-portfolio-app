import type { Career } from "../../types/Career";
import SkillTag from "./SkillTag";
import styles from "./style/CareerBox.module.css";

interface CareerBoxProps {
  career: Career;
}

const CareerBox = ({ career }: CareerBoxProps) => {
  return (
    <div className={styles.careerBox}>
      {/* 왼쪽 로고 영역 */}
      <img
        className={styles.logo}
        src={career.companies?.logo_url || ""}
        alt="로고"
      />

      {/* 오른쪽 상세 내용 영역 */}
      <div className={styles.texts}>
        <div className={styles.companyName}>
          {career.companies?.company_name}
        </div>
        <div className={styles.companyDuration}>
          {career.start_date} ~ {career.end_date || "현재"}
        </div>
        <div className={styles.companyIntro}>{career.companies?.intro}</div>

        <div className={styles.role}>
          {career.skills.map((skill) => (
            <SkillTag
              key={skill.skill_id}
              text={skill.skill_name?.name ?? ""}
              bgColor="black"
              textColor="white"
            />
          ))}
        </div>

        <div className={styles.projectList}>
          {career.career_descriptions.map((project, index) => (
            <div key={index} className={styles.projectWithLine}>
              <div className={styles.projectItem}>
                <div className={styles.titleGroup}>
                  <div className={styles.titleHead} />
                  <div className={styles.projectTitle}>{project.title}</div>
                </div>
                <div className={styles.projectDuration}>{project.duration}</div>
                <div className={styles.projectSummary}>{project.detail}</div>
              </div>
              {index !== career.career_descriptions.length - 1 && (
                <div className={styles.line}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerBox;
