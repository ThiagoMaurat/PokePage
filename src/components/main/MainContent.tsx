import Image from "next/image";
import React from "react";
import pokeBanner from "../../assets/PokeBanner.jpg";
import { Content, Main } from "./styles";


type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

export const MainContent = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Main>
        <Content>{children}</Content>
      </Main>
    </>
  );
};
