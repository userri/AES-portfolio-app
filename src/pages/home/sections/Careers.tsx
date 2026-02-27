import SectionTitle from "../../../components/ui/SectionTitle";
import styles from "../../style/Careers.module.css";
// import logo from "../../../assets/icon/carrot.svg";
import SkillTag from "../../../components/ui/SkillTag";
import { useQuery } from "@tanstack/react-query";
import type { Career } from "../../../types/Career";
import { supabase } from "../../../api/supabase";
const Careers = () => {
  const {
    data: careers = [],
    isLoading,
    error,
  } = useQuery<Career[]>({
    queryKey: ["careers"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("careers")
        .select(
          `
          *, companies(company_name:name, intro, logo_url),
          skills: career_skills(
          skill_id,
            skill_name:skills (name)
          )
          ,career_descriptions(description_id:id, title, detail, duration)`,
        )
        .order("start_date", { ascending: false })
        // .order("career_descriptions")
        .order("id", {
          referencedTable: "career_descriptions",
          ascending: true,
        });
      if (error) throw error;
      return (data ?? []) as Career[];
    },
  });
  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러가 발생했습니다.</p>;
  return (
    <div className={styles.body}>
      <SectionTitle title="CAREER" />
      <div className={styles.totalBox}>
        <div className={styles.vertical} />
        <div className={styles.careers}>
          {careers.map((career) => (
            <div key={career.company_id} className={styles.careerBox}>
              <img
                className={styles.logo}
                src={career.companies?.logo_url ?? ""}
                alt=""
              />
              <div className={styles.texts}>
                <div className={styles.companyName}>
                  {career.companies?.company_name ?? ""}
                </div>
                <div className={styles.companyDuration}>
                  {career.start_date} - {career.end_date ?? "(재직 중)"}
                </div>
                <div className={styles.companyIntro}>
                  {career.companies?.intro ?? ""}
                </div>
                <div className={styles.role}>
                  {career.skills.map((skill) => (
                    <SkillTag
                      key={skill.skill_id}
                      // 객체면 문자열로 들어가게
                      text={skill.skill_name?.name ?? ""}
                      bgColor="black"
                      textColor="white"
                    />
                  ))}
                </div>
                <div className={styles.projectList}>
                  {career.career_descriptions.map((project, index) => (
                    <div key={index} className={styles.projectWithLine}>
                      <div
                        key={project.description_id}
                        className={styles.projectItem}
                      >
                        <div className={styles.titleGroup}>
                          <div className={styles.titleHead} />
                          <div className={styles.projectTitle}>
                            {project.title}
                          </div>
                        </div>
                        <div className={styles.projectDuration}>
                          {project.duration}
                        </div>
                        <div className={styles.projectSummary}>
                          {project.detail}
                        </div>
                      </div>
                      {index !== career.career_descriptions.length - 1 && (
                        <div className={styles.line}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* 맵안쓴부분 */}
          {/* <div className={styles.careerBox}>
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
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Careers;
