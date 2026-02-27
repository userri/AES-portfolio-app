import About from "./sections/About";
import Skills from "./sections/Skills";
import Archiving from "./sections/Archiving";
import Projects from "./sections/Projects";
import Career from "./sections/Career";
import Footer from "../../widgets/footer/Footer";
import Intro from "./sections/Intro";

const Home = () => {
  return (
    <div>
      {/* <h1>홈 화면입니다</h1>
      <Link to="/projects">
        <button>프로젝트 상세 화면으로 이동</button>
      </Link>{" "} */}
      <Intro />
      <About />
      <Skills />
      <Archiving />
      <Projects />
      <Career />
      <Footer />
    </div>
  );
};
export default Home;
