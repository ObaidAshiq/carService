import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About US</h2>
        <h1 className={styles.title}>
          We offer automotive services that are transparent, efficient, daring,
          and superior.
        </h1>
        <p className={styles.desc}>
          We believe in the flexibility and precision of good ideas. As your
          premier car care destination, we offer world-class services including
          car washing, oil changes, and interior cleaning. Trust our Special
          Team for all your automotive needs
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>100%</h1>
            <p>Customer retention</p>
          </div>
          <div className={styles.box}>
            <h1>100 K+</h1>
            <p>Satisfied customers</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
