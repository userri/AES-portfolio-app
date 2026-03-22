import Header from "../../../widgets/header/Header";
import styles from "../../style/Intro.module.css";
const Intro = () => {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.name}>-임유리-</div>
      <div className={styles.name}>
        <span>백엔드</span> <span>개발자</span> <span>포트폴리오</span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.intro}>안녕하세요.</div>
      <div className={styles.intro}>
        기능 구현을 넘어, 시스템의 지속 가능한 안정성과 배포 흐름을 설계하는
        개발자
      </div>
      <div className={styles.intro}>임유리입니다.</div>
      <div className={styles.more}>더 알아보기 ↓</div>
    </div>
  );
};
export default Intro;
