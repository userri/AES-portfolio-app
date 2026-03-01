import About from "./sections/About";
import Skills from "./sections/Skills";
import Archiving from "./sections/Archiving";
import Projects from "./sections/Projects";
import Footer from "../../widgets/footer/Footer";
import Intro from "./sections/Intro";
import Careers from "./sections/Careers";
// import { Link } from "react-router-dom";
import styles from "../style/Home.module.css";

const Home = () => {
  return (
    <div>
      {/* <h1>홈 화면입니다</h1>
      <Link to="/project-detail">
        <button>프로젝트 상세 화면으로 이동</button>
      </Link>{" "} */}
      <Intro />
      <section className={styles.section} id="about">
        <About />
      </section>
      <section className={styles.section} id="skills">
        <Skills />
      </section>
      <section className={styles.section} id="archiving">
        <Archiving />
      </section>
      <section className={styles.section} id="projects">
        <Projects />
      </section>
      <section className={styles.section} id="careers">
        <Careers />
      </section>
      <Footer />
    </div>
  );
};
export default Home;
