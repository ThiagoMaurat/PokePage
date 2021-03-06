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
      <div className={styles.logo}>
      <Image width="57px" height="57px" src={image} alt="pokelogo" />
      </div>
      <div className={styles.content}>
        <Link href="/">
          <a className={styles.PagInicial}>Home</a>
        </Link>
        <Link href="/Pokedex/about">
          <a className={styles.About}>About</a>
        </Link>
        <Link href="/Pokedex/1">
          <a className={styles.Pokedex}>Pokedex</a>
        </Link>
      </div>
      <div className={styles.redesSociais}>
        <Link href="https://github.com/ThiagoMaurat">
          <Image
            className={styles.github}
            width="57px"
            height="57px"
            src={github}
            alt="github"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/thiago-maurat-477a041b9/">
          <Image
            className={styles.linkedinho}
            width="57px"
            height="57px"
            src={linkedin}
            alt="Linkedinho"
          />
        </Link>
      </div>
    </header>
  );
}
