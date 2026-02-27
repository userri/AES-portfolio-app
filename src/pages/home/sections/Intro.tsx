import styles from "../../style/Intro.module.css";
const Intro = () => {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <div className={styles.title}>IYR's Portfolio</div>
        <div className={styles.nav}>
          <div>About me</div>
          <div>Skills</div>
          <div>Archiving</div>
          <div>Projects</div>
          <div>Career</div>
        </div>
      </div>
      <div className={styles.name}>-임유리-</div>
      <div className={styles.name}>백엔드 개발자 포트폴리오</div>
      <div className={styles.line}></div>
      <div className={styles.intro}>안녕하세요.</div>
      <div className={styles.intro}>본질에 충실한 백엔드 개발자</div>
      <div className={styles.intro}>임유리입니다.</div>
      <div className={styles.more}>더 알아보기 ↓</div>
    </div>
  );
};
export default Intro;
