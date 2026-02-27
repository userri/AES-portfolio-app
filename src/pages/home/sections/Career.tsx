import SectionTitle from "../../../components/ui/SectionTitle";
import styles from "../../style/Career.module.css";
import logo from "../../../assets/icon/carrot.svg";
import SkillTag from "../../../components/ui/SkillTag";
const Career = () => {
  return (
    <div className={styles.body}>
      <SectionTitle title="CAREER" />
      <div className={styles.totalBox}>
        <div className={styles.vertical} />
        <div className={styles.careers}>
          <div className={styles.careerBox}>
            <img className={styles.logo} src={logo} alt="" />
            <div className={styles.texts}>
              <div className={styles.companyName}>오토에버스쿨 3기</div>
              <div className={styles.companyDuration}>2024.11 - (재직 중)</div>
              <div className={styles.companyIntro}>
                "풀스택 개발자로 거듭나다"
              </div>
              <div className={styles.role}>
                <SkillTag
                  text="Frontend 개발"
                  bgColor="black"
                  textColor="white"
                />{" "}
                <SkillTag
                  text="Backend 개발"
                  bgColor="black"
                  textColor="white"
                />
              </div>
              <div className={styles.projectList}>
                <div className={styles.projectItem}>
                  <div className={styles.titleGroup}>
                    <div className={styles.titleHead}></div>
                    <div className={styles.projectTitle}>웹 기초</div>
                  </div>
                  <div className={styles.projectDuration}>
                    2025년 12월 중순 - 1월 초
                  </div>
                  <div className={styles.projectSummary}>
                    Figma, JavaScript, React 등 웹 기초
                  </div>
                </div>
                <div className={styles.line} />
                <div className={styles.projectItem}>
                  <div className={styles.titleGroup}>
                    <div className={styles.titleHead}></div>
                    <div className={styles.projectTitle}>서버 기초</div>{" "}
                  </div>
                  <div className={styles.projectDuration}>2026년 1월</div>
                  <div className={styles.projectSummary}>
                    Spring Boot, Java, Supabase
                  </div>
                </div>
                <div className={styles.line} />
                <div className={styles.projectItem}>
                  <div className={styles.titleGroup}>
                    <div className={styles.titleHead}></div>
                    <div className={styles.projectTitle}>서버 기초</div>
                  </div>
                  <div className={styles.projectDuration}>2026년 1월</div>
                  <div className={styles.projectSummary}>
                    Spring Boot, Java, Supabase
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.careerBox}>
            <img className={styles.logo} src={logo} alt="" />
            <div className={styles.texts}>
              <div className={styles.companyName}>오토에버스쿨</div>
              <div className={styles.companyDuration}>2024.11 - (재직 중)</div>
              <div className={styles.companyIntro}>
                "풀스택 개발자로 거듭나다"
              </div>
              <div className={styles.role}>
                <SkillTag
                  text="Frontend 개발"
                  bgColor="black"
                  textColor="white"
                />{" "}
                <SkillTag
                  text="Backend 개발"
                  bgColor="black"
                  textColor="white"
                />
              </div>
              <div className={styles.projectList}>
                <div className={styles.projectItem}>
                  <div className={styles.titleGroup}>
                    <div className={styles.titleHead}></div>
                    <div className={styles.projectTitle}>웹 기초</div>
                  </div>
                  <div className={styles.projectDuration}>
                    2025년 12월 중순 - 1월 초
                  </div>
                  <div className={styles.projectSummary}>
                    Figma, JavaScript, React 등 웹 기초
                  </div>
                </div>
                <div className={styles.line} />
                <div className={styles.projectItem}>
                  <div className={styles.titleGroup}>
                    <div className={styles.titleHead}></div>
                    <div className={styles.projectTitle}>서버 기초</div>
                  </div>
                  <div className={styles.projectDuration}>2026년 1월</div>
                  <div className={styles.projectSummary}>
                    Spring Boot, Java, Supabase
                  </div>
                </div>
                <div className={styles.line} />
                <div className={styles.projectItem}>
                  <div className={styles.titleGroup}>
                    <div className={styles.titleHead}></div>
                    <div className={styles.projectTitle}>서버 기초</div>
                  </div>
                  <div className={styles.projectDuration}>2026년 1월</div>
                  <div className={styles.projectSummary}>
                    Spring Boot, Java, Supabase
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Career;
