import { useQuery } from "@tanstack/react-query"
import Card from "../ui/card"
import { Pokemon } from "../../types"

export default function PokemonList() {
	const query = useQuery({
		queryKey: ["pokemons"],
		queryFn: () =>
			fetch("https://pokeapi.co/api/v2/pokemon?limit=15&offset=0").then((res) =>
				res.json()
			),
	})

	return (
		<div className="px-5 mx-0 py-36 lg:mx-32 md:mx-10">
			{query.isLoading && <p>Loading...</p>}
			{query.isError && <p>Error</p>}

			<div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
				{query.isSuccess &&
					query.data.results.map((pokemon: Pokemon) => (
						<Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
					))}
			</div>
		</div>
	)
}
