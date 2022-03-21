import Link from 'next/link'
import React from 'react'
import { SeeAllPokemonsButton } from './style'

export default function SeeAllPokemonsButtom() {
  return (
    <Link href="/Pokedex/1">
    <SeeAllPokemonsButton>
        See All Pokemons
    </SeeAllPokemonsButton>
    </Link>
  )
}
