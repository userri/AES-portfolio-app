import styles from "./ProjectDetailHeader.module.css";
import back from "../../assets/icon/back.png";
import { Link } from "react-router-dom";
const ProjectDetailHeader = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={back} className={styles.back} />
      </Link>
      <img src={back} className={styles.back}></img>
      <div className={styles.headerTitle}>IT 엘도라도</div>
      <div className={styles.headerSubtitle}>지식의 보물창고</div>
    </div>
  );
};
export default ProjectDetailHeader;
