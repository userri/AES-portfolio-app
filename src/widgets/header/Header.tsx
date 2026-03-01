import { useEffect, useState } from "react";
import styles from "./Header.module.css";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const menuItems = [
    { name: "About me", target: "about" },
    { name: "Skills", target: "skills" },
    { name: "Archiving", target: "archiving" },
    { name: "Projects", target: "projects" },
    { name: "Careers", target: "careers" },
  ];
  return (
    <div className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.title} onClick={() => window.scrollTo(0, 0)}>
        IYR's Portfolio
      </div>
      <div className={styles.nav}>
        {menuItems.map((item) => (
          <a
            key={item.target}
            href={`#${item.target}`}
            className={styles.navItem}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};
export default Header;
