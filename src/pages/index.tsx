import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Card } from "../components/card/Card";
import Header from "../components/header/Header";
import { MainContent } from "../components/main/MainContent";
import { nameAndUrl, PokemonProps } from "../interface/Interfaces";
import pokeBanner from "../assets/PokeBanner.jpg";
import Image from "next/image";


const Home: NextPage = () => {
  const [pokemon, setPokemon] = useState<PokemonProps[]>([]);

  // Load data from API
  useEffect(() => {
    async function LoadData(): Promise<void> {
      const api = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
      const data = api.data.results;
      const urls = data.map((pokemon: nameAndUrl) => pokemon.url);
      urls.forEach(async (element: string) => {
        const Poke = await axios.get(element);
        const poke = Poke.data;
        setPokemon((prevState) => [...prevState, poke]);
      });
    }
    LoadData();
  }, []);

  return (
    <>
    <Header />
    <MainContent>
      {pokemon.map(
        (pokemon: PokemonProps, index) => (
          console.log(pokemon),
          (
            <Card
              pokemon={pokemon}
              key={pokemon.id}
              img={pokemon.sprites.front_default}
            />
          )
        )
      )}
    </MainContent>
    </>
  );
};

export default Home;
