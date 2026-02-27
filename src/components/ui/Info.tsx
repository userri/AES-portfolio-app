import img from "../../assets/icon/person.png";
import styles from "../ui/style/Info.module.css";

interface InfoProps {
  imgSrc: string;
  category: string;
  content: string;
}

const Info = ({
  imgSrc = img,
  category = "이름",
  content = "홍길동",
}: InfoProps) => {
  return (
    <div className={styles.body}>
      <img className={styles.img} src={imgSrc} alt="" />
      <div className={styles.text}>
        <div className={styles.category}>{category}</div>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
};

export default Info;
