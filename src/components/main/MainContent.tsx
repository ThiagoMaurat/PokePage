import Image from "next/image";
import React from "react";
import pokeBanner from "../../assets/PokeBanner.jpg";
import { Content, Main } from "./styles";
import styles from "./styles.module.css";

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

export const MainContent = ({ children }: Props): JSX.Element => {
  return (
    <>
      <div className={styles.banner}>
        <Image src={pokeBanner} alt="PokeBanner" layout="responsive" />
      </div>
      <Main>
        <Content>{children}</Content>
      </Main>
    </>
  );
};
