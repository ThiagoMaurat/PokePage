import axios from "axios";
import type { GetStaticProps } from "next";
import { Card } from "../components/card/Card";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { MainContent } from "../components/main/MainContent";
import SeeAllPokemonsButtom from "../components/SeeAllPokemonsButton";
import { nameAndUrl, PokemonstaticProps } from "../interface/Interfaces";
import Image from "next/image";
import pokeBanner from "../assets/PokeBanner.jpg";
import { Divhomestyle } from "../styles/homestyles";

function Home(pokemonstaticprops: PokemonstaticProps) {
  return (
    <>
      <Header />
      <div style={{overflow: "hidden"}}>
        <Image src={pokeBanner} alt="PokeBanner" layout="responsive" />
      </div>
      <Divhomestyle>
      <SeeAllPokemonsButtom />
      </Divhomestyle>
      <MainContent>
        {pokemonstaticprops.pokemonstaticprops.map(
          (pokemonstaticprops, index) => (
            console.log(pokemonstaticprops),
            <Card
              pokemon={pokemonstaticprops}
              key={index}
              img={pokemonstaticprops.sprites.other.dream_world.front_default}
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

/* 
home:
front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png"
front_female: null
front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/8.png"
front_shiny_female: null
[[Prototype]]: Object
official-artwork:
front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
[[Prototype]]: Object */