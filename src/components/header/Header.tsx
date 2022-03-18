import Image from "next/image";
import Link from "next/link";
import React from "react";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import image from "../../assets/pokebola.png";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image width="65px" height="65px" src={image} alt="pokelogo" />
      <div className={styles.content}>
        <span>Página Inicial</span>
        <span>Pokedex</span>
        <span>Sobre</span>
      </div>
      <div className={styles.redesSociais}>
        <Link href="https://github.com/ThiagoMaurat">
          <Image
            className={styles.github}
            width="65px"
            height="65px"
            src={github}
            alt="github"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/thiago-maurat-477a041b9/">
          <Image
            className={styles.linkedinho}
            width="65px"
            height="65px"
            src={linkedin}
            alt="Linkedinho"
          />
        </Link>
      </div>
    </header>
  );
}
