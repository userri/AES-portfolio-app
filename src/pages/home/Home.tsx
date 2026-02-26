import { Link } from "react-router-dom";
import SectionTitle from "../../components/ui/SectionTitle";
import SkillTag from "../../components/ui/SkillTag";
import ProjectCard from "../../components/ui/ProjectCard";
import Info from "../../components/ui/Info";
import person from "../../assets/image/person.png";
import calendar from "../../assets/image/calendar.png";
import location from "../../assets/image/location.png";
import call from "../../assets/image/call.png";
import mail from "../../assets/image/mail.png";
import pencil from "../../assets/image/pencil.png";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Archiving from "./sections/Archiving";
import Projects from "./sections/Projects";
import Career from "./sections/Career";

const Home = () => {
  return (
    <div>
      <h1>홈 화면입니다</h1>
      <Link to="/projects">
        <button>프로젝트 상세 화면으로 이동</button>
      </Link>
      <SectionTitle title="ABOUT ME" />
      <SectionTitle title="SKILLS" />
      <SectionTitle title="ARCHIVING" />
      <SectionTitle title="PROJECTS" />
      <SectionTitle title="CAREER" />
      <SkillTag text="React" bgColor="red" textColor="#ffffff" />
      <SkillTag text="React" bgColor="blue" textColor="orange" />
      <SkillTag text="Javascript" bgColor="#0f5f0f" textColor="#ffffff" />
      <br />
      <br />
      <br />
      <ProjectCard title="내 프로젝트" />
      <br />
      <br />
      <br />
      <Info imgSrc={person} category="이름" content="임유리" />
      <br />
      <Info imgSrc={calendar} category="생년월일" content="01.06.07" />
      <br />
      <Info imgSrc={location} category="위치" content="가산동" />
      <br />
      <Info imgSrc={call} category="연락처" content="010-1234-5678" />
      <br />
      <Info imgSrc={mail} category="이메일" content="dladbfl67@example.com" />
      <br />
      <Info
        imgSrc={pencil}
        category="학력"
        content="오토에버대학교(백엔드학과)"
      />
      <br />
      <br />
      <About />
      <Skills />
      <Archiving />
      <Projects />
      <Career />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default Home;
