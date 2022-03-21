import styled from "styled-components";
import { PokemonProps } from "../../interface/Interfaces";

interface PokeTypes {
  grass: string;
  poison: string;
  fire: string;
  flying: string;
  bug: string;
  normal: string;
  electric: string;
  ground: string;
  fairy: string;
  fighting: string;
  psychic: string;
  rock: string;
  water: string;
  ice: string;
  dragon: string;
  ghost: string;
  dark: string;
  steel: string;
  unknown: string;
  shadow: string;
}

export const LiContent = styled.li`
  list-style: none;
  background-color: #f2f2f2;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  width: 12rem;
`;

export const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0 auto;
  background-color: #ffffff;
  max-height: 4.1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  margin-bottom: 1rem;
  width: 100%;
`;

export const Pokeimg = styled.img`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

export const ColorType = styled.p<{ pokemon: PokemonProps }>`
  border-radius: 4px;
  background-color: ${(props) =>
    props.pokemon.types[0].type.name === "grass"
      ? "#7cb342"
      : props.pokemon.types[0].type.name === "poison"
      ? "#6C2DC8"
      : props.pokemon.types[0].type.name === "fire"
      ? "#f44336"
      : props.pokemon.types[0].type.name === "flying"
      ? "#1976d2"
      : props.pokemon.types[0].type.name === "bug"
      ? "#c8a2c8"
      : props.pokemon.types[0].type.name === "normal"
      ? "#a8a878"
      : props.pokemon.types[0].type.name === "electric"
      ? "#ffeb3b"
      : props.pokemon.types[0].type.name === "ground"
      ? "#8a89a6"
      : props.pokemon.types[0].type.name === "fairy"
      ? "#f4b0e5"
      : props.pokemon.types[0].type.name === "fighting"
      ? "#d50000"
      : props.pokemon.types[0].type.name === "psychic"
      ? "#f8a4c2"
      : props.pokemon.types[0].type.name === "rock"
      ? "#8d6e63"
      : props.pokemon.types[0].type.name === "water"
      ? "#03a9f4"
      : props.pokemon.types[0].type.name === "ice"
      ? "#81d4fa"
      : props.pokemon.types[0].type.name === "dragon"
      ? "#7e57c2"
      : props.pokemon.types[0].type.name === "ghost"
      ? "#7b1fa2"
      : props.pokemon.types[0].type.name === "dark"
      ? "#424242"
      : props.pokemon.types[0].type.name === "steel"
      ? "#b0bec5"
      : props.pokemon.types[0].type.name === "unknown"
      ? "#9e9e9e"
      : props.pokemon.types[0].type.name === "shadow"
      ? "#000000"
      : "#ffffff"};
`;

export const ColorType2 = styled.p<{ pokemon: PokemonProps }>`
  border-radius: 4px;
  background-color: ${(props) =>
    props.pokemon.types[1]?.type.name === "grass"
      ? "#7cb342"
      : props.pokemon.types[1]?.type.name === "poison"
      ? "#6C2DC8"
      : props.pokemon.types[1]?.type.name === "fire"
      ? "#f44336"
      : props.pokemon.types[1]?.type.name === "flying"
      ? "#1976d2"
      : props.pokemon.types[1]?.type.name === "bug"
      ? "#c8a2c8"
      : props.pokemon.types[1]?.type.name === "normal"
      ? "#a8a878"
      : props.pokemon.types[1]?.type.name === "electric"
      ? "#ffeb3b"
      : props.pokemon.types[1]?.type.name === "ground"
      ? "#8a89a6"
      : props.pokemon.types[1]?.type.name === "fairy"
      ? "#f4b0e5"
      : props.pokemon.types[1]?.type.name === "fighting"
      ? "#d50000"
      : props.pokemon.types[1]?.type.name === "psychic"
      ? "#f8a4c2"
      : props.pokemon.types[1]?.type.name === "rock"
      ? "#8d6e63"
      : props.pokemon.types[1]?.type.name === "water"
      ? "#03a9f4"
      : props.pokemon.types[1]?.type.name === "ice"
      ? "#81d4fa"
      : props.pokemon.types[1]?.type.name === "dragon"
      ? "#7e57c2"
      : props.pokemon.types[1]?.type.name === "ghost"
      ? "#7b1fa2"
      : props.pokemon.types[1]?.type.name === "dark"
      ? "#424242"
      : props.pokemon.types[1]?.type.name === "steel"
      ? "#b0bec5"
      : props.pokemon.types[1]?.type.name === "shadow"
      ? "#000000"
      : "#ffffff"};
`;

export const PokeName = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  margin: 0.5rem;
  color: #000000;
`;

export const PokeId = styled.p`
  font-weight: bold;
`;
