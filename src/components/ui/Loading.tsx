import styles from "./style/Loading.module.css";
import loadingImg from "../../assets/icon/loading.png";

const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderContent}>
        <img src={loadingImg} alt="로딩 중" className={styles.loadingImg} />
        <p className={styles.loadingText}>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
