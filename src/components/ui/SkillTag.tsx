import styles from "./style/SkillTag.module.css";
interface SkillTagProps {
  text: string;
  bgColor: string;
  textColor: string;
}
const SkillTag = ({
  text,
  bgColor = "#e0e0e0",
  textColor = "#333",
}: SkillTagProps) => {
  return (
    <span
      className={styles.body}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {text}
    </span>
  );
};
export default SkillTag;
