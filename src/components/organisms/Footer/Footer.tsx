import React from "react";
import Typography from "../../atoms/typography/Typography";
import styles from "./footer.module.css";
interface Props {}

const Footer = (props: Props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footertext}>
        <div className={styles.footertextColumn}>
          <Typography>Restez en Contact</Typography>
          <div>
            <Typography>restez en contact</Typography>
          </div>
          <div>
            <Typography>À propos de nous</Typography>
          </div>
        </div>
        <div className={styles.footertextColumn}>
          <Typography>Connections</Typography>
          <div>
            <Typography>Facebook</Typography>
          </div>
          <div>
            <Typography>Twitter</Typography>
          </div>
        </div>
        <div className={styles.footertextColumn}>
          <Typography>Compte</Typography>
          <div>
            <Typography>Compte</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
