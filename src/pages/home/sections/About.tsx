import SectionTitle from "../../../components/ui/SectionTitle";
import styles from "../../style/About.module.css";
import Info from "../../../components/ui/Info";
import person from "../../../assets/image/person.png";
import calendar from "../../../assets/image/calendar.png";
import location from "../../../assets/image/location.png";
import call from "../../../assets/image/call.png";
import mail from "../../../assets/image/mail.png";
import pencil from "../../../assets/image/pencil.png";

const About = () => {
  const infos = [
    { imgSrc: person, category: "이름", content: "임유리" },
    { imgSrc: calendar, category: "생년월일", content: "01.06.07" },
    { imgSrc: location, category: "위치", content: "가산동" },
    { imgSrc: call, category: "연락처", content: "010-1234-5678" },
    { imgSrc: mail, category: "이메일", content: "dladbfl67@example.com" },
    { imgSrc: pencil, category: "학력", content: "오토에버대학교(백엔드학과)" },
  ];
  return (
    <div className={styles.body}>
      <SectionTitle title="ABOUT ME" />
      <div className={styles.grid}>
        {infos.map((info) => (
          <Info
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
