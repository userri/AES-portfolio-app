import { Link } from "react-router-dom";
import SectionTitle from "../../components/ui/SectionTitle";
import SkillTag from "../../components/ui/SkillTag";

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
      <SkillTag text="React" bgColor="#988976" textColor="#ffffff" />
      <SkillTag text="React" bgColor="#773733" textColor="#aaaaaa" />
      <SkillTag text="Javascript" bgColor="#0f0f0f" textColor="#ffffff" />
      <br />
    </div>
  );
};
export default Home;
