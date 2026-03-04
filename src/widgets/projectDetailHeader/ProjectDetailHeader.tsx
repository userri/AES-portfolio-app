import styles from "./ProjectDetailHeader.module.css";
import back from "../../assets/icon/back.png";
import { Link } from "react-router-dom";
interface ProjectDetailHeaderProps {
  title?: string;
  intro?: string;
}
const ProjectDetailHeader = ({ title, intro }: ProjectDetailHeaderProps) => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={back} className={styles.back} />
      </Link>
      <div className={styles.headerTitle}>{title}</div>
      <div className={styles.headerSubtitle}>{intro}</div>
    </div>
  );
};
export default ProjectDetailHeader;
