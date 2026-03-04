import SectionTitle from "../../../components/ui/SectionTitle";
import styles from "../../style/About.module.css";
import Info from "../../../components/ui/Info";
import person from "../../../assets/icon/person.png";
import calendar from "../../../assets/icon/calendar.png";
import location from "../../../assets/icon/location.png";
import call from "../../../assets/icon/call.png";
import mail from "../../../assets/icon/mail.png";
import pencil from "../../../assets/icon/pencil.png";
import certificate from "../../../assets/icon/certificate.png";

const About = () => {
  const infos = [
    { imgSrc: person, category: "이름", content: "임유리" },
    { imgSrc: calendar, category: "생년월일", content: "01.06.07" },
    { imgSrc: location, category: "위치", content: "경기도 의정부시" },
    { imgSrc: call, category: "연락처", content: "010-5936-8694" },
    { imgSrc: mail, category: "이메일", content: "dladbfl67@naver.com" },
    {
      imgSrc: pencil,
      category: "학력",
      content: "건국대학교 생물공학과 (컴퓨터공학부 부전공)",
    },
    {
      imgSrc: certificate,
      category: "자격증",
      content: "정보처리기사, SQLD, ADsP",
    },
  ];
  return (
    <div className={styles.body}>
      <SectionTitle title="ABOUT ME" />
      <div className={styles.grid}>
        {infos.map((info) => (
          <Info
            key={info.category}
            imgSrc={info.imgSrc}
            category={info.category}
            content={info.content}
          />
        ))}
      </div>
    </div>
  );
};
export default About;
