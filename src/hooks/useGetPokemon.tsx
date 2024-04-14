import { useQuery } from "@tanstack/react-query"
import { Pokemon } from "../types"

export default function useGetPokemon(props: Pokemon) {
	const query = useQuery({
		queryKey: [props.name],
		queryFn: () => fetch(props.url).then((res) => res.json()),
	})

	return { query }
}
