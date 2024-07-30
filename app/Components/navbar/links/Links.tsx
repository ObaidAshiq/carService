"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"




const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Links = ({session}:any) => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  // const session = true;
  // const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {/* {console.log('session Navbar-',session)} */}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            {!(session.user?.isAdmin) && <NavLink item={{ title: "Appointment", path: "/appointments" }} />}
            <DropdownMenu>
  <DropdownMenuTrigger>
    <Avatar>
  <AvatarImage src={session.user.image} />
  <AvatarFallback>{session.user.name?.split(/\s/).reduce((response:any,word:any)=> response+=word.slice(0,1),'')}</AvatarFallback>
</Avatar>
</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    
    <DropdownMenuItem>
      <form action={handleLogout}>
           
           <button className={styles.logout}>Logout</button>
         </form></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

            
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;