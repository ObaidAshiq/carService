import Image from "next/image";
import styles from "./contact.module.css";
import { Suspense } from "react";
import ContactForm from "../Components/contact/ContactForm";
import LoadingSkelton from "../Components/contact/LoadingSkelton";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <Suspense fallback={<LoadingSkelton/>}>
        <ContactForm/>
        </Suspense>
      </div>
    </div>
  );
};

export default ContactPage;