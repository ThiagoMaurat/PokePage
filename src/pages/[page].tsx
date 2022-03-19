import axios from "axios";
import { GetStaticProps } from "next";
import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { nameAndUrl } from "../interface/Interfaces";

export default function Pokedex() {
  return (
    <>
      <Header />
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
    console.log(paths);
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
