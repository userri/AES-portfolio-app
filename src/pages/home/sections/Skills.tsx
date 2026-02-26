import SectionTitle from "../../../components/ui/SectionTitle";
import styles from "../../style/Skills.module.css";
import sampleImg from "../../../assets/image/calendar.png";
import SkillTag from "../../../components/ui/SkillTag";
const Skills = () => {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")}`;

  return (
    <div className={styles.body}>
      <SectionTitle title="SKILLS" />
      <div className={styles.box}>
        <div className={styles.skillBox}>
          {/* TODO: map으로 넣기 */}
          <div className={styles.iconTitle}>
            <img className={styles.icon} src={sampleImg} alt="" />
            <div className={styles.category}>Language</div>
          </div>
          <div className={styles.skillContents}>
            <SkillTag
              text="Typescript"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
            <SkillTag
              text="JavaScript"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
            <SkillTag
              text="Python"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
            <SkillTag
              text="Kotlin"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
          </div>
        </div>

        <div className={styles.skillBox}>
          {/* TODO: map으로 넣기 */}
          <div className={styles.iconTitle}>
            <img className={styles.icon} src={sampleImg} alt="" />
            <div className={styles.category}>Frontend</div>
          </div>
          <div className={styles.skillContents}>
            <SkillTag
              text="Next.js / React"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
            <SkillTag
              text="React-Query"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
            <SkillTag
              text="Vite"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
          </div>
        </div>
        <div className={styles.skillBox}>
          {/* TODO: map으로 넣기 */}
          <div className={styles.iconTitle}>
            <img className={styles.icon} src={sampleImg} alt="" />
            <div className={styles.category}>Backend</div>
          </div>
          <div className={styles.skillContents}>
            <SkillTag
              text="Spring (Boot)"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
            <SkillTag
              text="Gradle"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
            <SkillTag
              text="Firebase"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
            <SkillTag
              text="Supabase"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
            <SkillTag
              text="Spring (Boot)"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
            <SkillTag
              text="Gradle"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
            <SkillTag
              text="Firebase"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
            <SkillTag
              text="Supabase"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
          </div>
        </div>

        <div className={styles.skillBox}>
          {/* TODO: map으로 넣기 */}
          <div className={styles.iconTitle}>
            <img className={styles.icon} src={sampleImg} alt="" />
            <div className={styles.category}>DevOps</div>
          </div>
          <div className={styles.skillContents}>
            <SkillTag
              text="Docker"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
            <SkillTag
              text="AWS (ECS, EB)"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
            <SkillTag
              text="Kubernetes"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
            <SkillTag
              text="Redis"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
            <SkillTag
              text="Vercel"
              bgColor={getRandomColor()}
              textColor={getRandomColor()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
