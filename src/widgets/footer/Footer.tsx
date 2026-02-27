import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>© 2026 IM YURI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
