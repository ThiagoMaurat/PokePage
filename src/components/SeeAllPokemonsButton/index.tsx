import Image from "next/image";
import Link from "next/link";
import React from "react";
import PokeButtomSVG from "../../assets/pokebolas.png";
import { SeeAllPokemonsButton } from "./style";

export default function SeeAllPokemonsButtom() {
  return (
    <Link href="/Pokedex/1">
      <SeeAllPokemonsButton>
        <Image
          width={30}
          height={30}
          src={PokeButtomSVG}
          alt="PokeBolaButtom"
        />
    See All Pokemons
      </SeeAllPokemonsButton>
    </Link>
  );
}
