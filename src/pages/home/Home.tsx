import About from "./sections/About";
import Skills from "./sections/Skills";
import Archiving from "./sections/Archiving";
import Projects from "./sections/Projects";
import Footer from "../../widgets/footer/Footer";
import Intro from "./sections/Intro";
import Careers from "./sections/Careers";

import styles from "../style/Home.module.css";
import { useEffect, useState } from "react";
import Loading from "../../components/ui/Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
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
