import axios from "axios";
import type { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { Card } from "../components/card/Card";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { MainContent } from "../components/main/MainContent";
import { nameAndUrl, PokemonstaticProps } from "../interface/Interfaces";

function Home(pokemonstaticprops: PokemonstaticProps) {
  const [pokemon, setPokemon] = useState<PokemonstaticProps[]>([]);


  return (
    <>
      <Header />
      <MainContent>
        {pokemonstaticprops.pokemonstaticprops.map(
          (pokemonstaticprops, index) => (
            <Card
              pokemon={pokemonstaticprops}
              key={index}
              img={pokemonstaticprops.sprites.front_default}
            />
          )
        )}
      </MainContent>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const api = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
  const data = await api.data.results;
  const urls = data.map((pokemon: nameAndUrl) => pokemon.url);
  const pokemonstaticprops = await Promise.all(
    urls.map(async (element: string) => {
      const Poke = await axios.get(element);
      const poke = Poke.data;
      return poke;
    })
  );
  return {
    props: { pokemonstaticprops },
  };
};

export default Home;

/* useEffect(() => {
  console.log(pokemonstaticprops);
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
}, []); */
