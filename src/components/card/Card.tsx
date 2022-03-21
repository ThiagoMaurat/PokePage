import { PokemonProps } from "../../interface/Interfaces";
import { ColorType, ColorType2, Informacoes, LiContent, Pokeimg } from "./styles";

interface Props {
  pokemon: PokemonProps;
  img: string;
}

export const Card = ({ img, pokemon }: Props) => {
  return (
    <LiContent>
      <Pokeimg src={img} />
      <Informacoes>
        <p>
          #{pokemon.id < 10 ? "0" + pokemon.id : pokemon.id}-{" "}
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </p>
        <ColorType pokemon={pokemon}>
          Tipo:{" "}
          {pokemon.types[0].type.name.charAt(0).toUpperCase() +
            pokemon.types[0].type.name.slice(1)}
        </ColorType>
        <ColorType2 pokemon={pokemon}>
           {pokemon.types[1] && pokemon.types[1].type.name.charAt(0).toUpperCase() +
            pokemon.types[1].type.name.slice(1)}
        </ColorType2>
      </Informacoes>
    </LiContent>
  );
};

{
  /* <ColorType pokemon={pokemon}>
          Tipo:{" "}
          {pokemon.types
            .map(
              (type) =>
                type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)                 
            )
            .join(" ")}
        </ColorType> */
}