import axios from "axios";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Card } from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { MainContent } from "../../components/main/MainContent";
import Pagination from "../../components/pagination";
import { nameAndUrl, PokemonProps } from "../../interface/Interfaces";
import Image from "next/image";
import pokeBanner from "../../assets/PokeBanner.jpg";

interface pokAndTotalPages {
  pokemonstaticprops: PokemonProps[];
  totalPages: number;
}

export default function Pokedex(pokemonstaticprops: pokAndTotalPages) {
  const router = useRouter();
  const { page } = router.query;
  const currentPage = Number(page);
  const pages: number[] = [];  
  for (var i = 0; i < pokemonstaticprops.totalPages; i++) {
    pages.push(i);
  }

  return (
    <>
      <Header />
      <div style={{overflow: "hidden"}}>
        <Image src={pokeBanner} alt="PokeBanner" layout="responsive" />
      </div>
      <MainContent>
        {pokemonstaticprops.pokemonstaticprops.map((content) => (
          <Card
            pokemon={content}
            key={content.id}
            img={content.sprites.front_default}
          />
        ))}
      </MainContent>
      <Pagination currentPage={currentPage} pages={pages}></Pagination>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?limit=1126"
  );
  const data = await response.data;
  const pages = Math.ceil(data.count / 20);
  const paths = [];
  for (let i = 0; i < pages; i++) {
    paths.push({ params: { page: `${i + 1}` } });
  }
  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = Number(params?.page ?? 0);
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?offset=${page * 20}&limit=20`
  );
  const totalPages = Math.ceil(response.data.count / 20);
  const data = await response?.data.results;
  const urls = data.map((pokemon: nameAndUrl) => pokemon.url);
  const pokemonstaticprops = await Promise.all(
    urls.map(async (element: string) => {
      const Poke = await axios.get(element);
      const poke = Poke.data;
      return poke;
    })
  );

  return {
    props: { pokemonstaticprops, totalPages },
  };
};
