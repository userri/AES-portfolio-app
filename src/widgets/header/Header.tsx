import { useEffect, useState } from "react";
import styles from "./Header.module.css";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* 모바일용 버튼 */}
      <button
        className={styles.hamburger}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span
          className={`${styles.bar} ${isMenuOpen ? styles.bar1 : ""}`}
        ></span>
        <span
          className={`${styles.bar} ${isMenuOpen ? styles.bar2 : ""}`}
        ></span>
        <span
          className={`${styles.bar} ${isMenuOpen ? styles.bar3 : ""}`}
        ></span>
      </button>
      {/* 내비게이션 바 */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ""}`}>
        {menuItems.map((item) => (
          <a
            key={item.target}
            href={`#${item.target}`}
            className={styles.navItem}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};
export default Header;
