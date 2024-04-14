import Header from "../home/header"
import PokemonList from "../home/pokemon-list"

export default function Home() {
	return (
		<div className="animate-fade">
			<Header />
			<PokemonList />
		</div>
	)
}
