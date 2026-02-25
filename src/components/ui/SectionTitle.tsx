import styles from "./style/SectionTitle.module.css";
import chainImage from "../../assets/image/black-link.webp";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={chainImage} alt="링크 이미지" />

      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.line} />
      </div>
    </div>
  );
};

export default SectionTitle;
