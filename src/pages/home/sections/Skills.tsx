import SectionTitle from "../../../components/ui/SectionTitle";
import styles from "../../style/Skills.module.css";
import sampleImg from "../../../assets/image/calendar.png";
import SkillTag from "../../../components/ui/SkillTag";
import { useQuery } from "@tanstack/react-query";
import type { Skill } from "../../../types/Skill";
import { supabase } from "../../../api/supabase";
const Skills = () => {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")}`;

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
    { skillName: "LANGUAGE", skillIcon: sampleImg },
    { skillName: "FRONTEND", skillIcon: sampleImg },
    { skillName: "BACKEND", skillIcon: sampleImg },
    { skillName: "DEV_OPS", skillIcon: sampleImg },
  ];
  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러가 발생했습니다.</p>;

  return (
    <div className={styles.body}>
      <SectionTitle title="SKILLS" />
      <div className={styles.box}>
        {skillCategory.map((skillKind) => (
          <div className={styles.skillBox}>
            <div className={styles.iconTitle}>
              <img src={skillKind.skillIcon} alt="" />
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
