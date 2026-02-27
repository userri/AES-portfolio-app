import About from "./sections/About";
import Skills from "./sections/Skills";
import Archiving from "./sections/Archiving";
import Projects from "./sections/Projects";
import Footer from "../../widgets/footer/Footer";
import Intro from "./sections/Intro";
import Careers from "./sections/Careers";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈 화면입니다</h1>
      <Link to="/project-detail">
        <button>프로젝트 상세 화면으로 이동</button>
      </Link>{" "}
      <Intro />
      <About />
      <Skills />
      <Archiving />
      <Projects />
      <Careers />
      <Footer />
    </div>
  );
};
export default Home;
