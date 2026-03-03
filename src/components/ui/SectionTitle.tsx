import styles from "./style/SectionTitle.module.css";
import chainImage from "../../assets/icon/black-link.webp";

interface SectionTitleProps {
  img?: string;
  title: string;
  white?: boolean;
}

const SectionTitle = ({
  img = chainImage,
  title,
  white = false,
}: SectionTitleProps) => {
  return (
    <div className={`${styles.container} ${white ? styles.whiteMode : ""}`}>
      <img className={styles.img} src={img} alt="링크 이미지" />

      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.line} />
      </div>
      <div className={styles.blank}></div>
    </div>
  );
};
SectionTitle.defaultProps = {
  img: chainImage,
  title: "SectionTitle",
};

export default SectionTitle;
