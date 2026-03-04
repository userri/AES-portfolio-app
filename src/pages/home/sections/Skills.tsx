import SectionTitle from "../../../components/ui/SectionTitle";
import styles from "../../style/Skills.module.css";
import language from "../../../assets/icon/language.svg";
import frontend from "../../../assets/icon/frontend.svg";
import backend from "../../../assets/icon/backend.svg";
import dev_ops from "../../../assets/icon/dev-ops.svg";
import SkillTag from "../../../components/ui/SkillTag";
import { useQuery } from "@tanstack/react-query";
import type { Skill } from "../../../types/Skill";
import { supabase } from "../../../api/supabase";
const Skills = () => {
  // const getRandomColor = () =>
  //   `#${Math.floor(Math.random() * 0xffffff)
  //     .toString(16)
  //     .padStart(6, "0")}`;

  const {
    data: skills = [],
    isLoading,
    error,
  } = useQuery<Skill[]>({
    queryKey: ["skills"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("skills")
        .select("*")
        .order("name");
      if (error) throw error;
      return (data ?? []) as Skill[];
    },
  });
  const skillCategory = [
    { skillName: "LANGUAGE", skillIcon: language },
    { skillName: "FRONTEND", skillIcon: frontend },
    { skillName: "BACKEND", skillIcon: backend },
    { skillName: "DEV_OPS", skillIcon: dev_ops },
  ];
  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러가 발생했습니다.</p>;

  return (
    <div className={styles.body}>
      <SectionTitle title="SKILLS" />
      <div className={styles.box}>
        {skillCategory.map((skillKind) => (
          <div key={skillKind.skillName} className={styles.skillBox}>
            <div className={styles.iconTitle}>
              <img src={skillKind.skillIcon} className={styles.icon} alt="" />
              <div className={styles.category}>{skillKind.skillName}</div>
            </div>
            <div className={styles.skillContents}>
              {skills
                .filter((skill) => skill.category === skillKind.skillName)
                .map((skill) => (
                  <SkillTag
                    key={skill.id}
                    text={skill.name}
                    bgColor={skill.background_color}
                    textColor={skill.text_color}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};
export default Skills;
