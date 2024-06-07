import { Menubar } from "primereact/menubar";
import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import logoImg from "../public/logo.png";
import SignUp from "./signup";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const modalRef = useRef();

  const items = [
    {
      label: "Menu",
      command: () => router.push("/menu"),
    },
    {
      label: "Blog",
      command: () => router.push("/blog"),
    },
    {
      label: "About",
      command: () => router.push("/about"),
    },
    {
      label: "Join",
      icon: "pi pi-user",
      command: () => {
        modalRef.current.toggleModal();
      },
    },
  ];

  return (
    <>
      <SignUp ref={modalRef} />
      <Menubar
        model={items}
        start={
          <Link href="/">
            <Image
              src={logoImg}
              width={50}
              height={40}
              alt="Journey Beans logo"
            />
          </Link>
        }
      />
    </>
  );
};

export default Navbar;
