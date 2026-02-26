import SectionTitle from "../../../components/ui/SectionTitle";
import styles from "../../style/Archiving.module.css";
import githubImg from "../../../assets/image/github.png";

const Archiving = () => {
  return (
    <div className={styles.body}>
      <SectionTitle title="ARCHIVING" />
      <div className={styles.boxes}>
        <div className={styles.box}>
          <img className={styles.img} src={githubImg} alt="" />
          <a className={styles.link} href="https://github.com/userri">
            https://github.com/userri
          </a>
          <div className={styles.description}>소스 코드 저장소</div>
        </div>
        <div className={styles.box}>
          <img className={styles.img} src={githubImg} alt="" />
          <a className={styles.link} href="https://github.com/userri">
            https://github.com/userri
          </a>
          <div className={styles.description}>소스 코드 저장소</div>
        </div>
      </div>
    </div>
  );
};
export default Archiving;
