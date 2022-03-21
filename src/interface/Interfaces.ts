interface nameAndUrl {
  name: string;
  url: string;
}

interface Url {
  url: string;
}

interface PokemonTypes {
  [key: string]: string;
}

interface PokemonProps {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: [
    {
      type: {
        name: string;
      };
    },
    {
      type: {
        name: string;
      };
    }
  ];
}

interface PokemonstaticProps {
  pokemonstaticprops: PokemonProps[];
}

export type { nameAndUrl, Url, PokemonProps, PokemonTypes, PokemonstaticProps };
