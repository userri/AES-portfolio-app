import styles from "./ProjectDetailHeader.module.css";
import back from "../../assets/icon/back.png";
import { Link, useNavigate } from "react-router-dom";
interface ProjectDetailHeaderProps {
  title?: string;
  intro?: string;
}
const ProjectDetailHeader = ({ title, intro }: ProjectDetailHeaderProps) => {
  const navigate = useNavigate(); //변수 할당시켜서 사용
  const onClickBtn = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };
  return (
    <div className={styles.header}>
      <img src={back} onClick={onClickBtn} className={styles.back} />

      <div className={styles.headerTitle}>{title}</div>
      <div className={styles.headerSubtitle}>{intro}</div>
    </div>
  );
};
export default ProjectDetailHeader;
