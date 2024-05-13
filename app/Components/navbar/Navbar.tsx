import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth";
import Image from "next/image";
import carServiceLogo from "@/public/carServiceLogo.jpg"

const Navbar = async () => {

  const session = await auth();
  

  return (
    <div className={`${styles.container} sm:px-8`}>
      <Link href="/" className={styles.logo}><Image src={carServiceLogo} alt="AutoService Logo" width={120} height={50} className="object-bottom invert"  /></Link>
      <div>
        <Links session={session}/>
        {/* <Links /> */}
      </div>
    </div>
  )
}

export default Navbar