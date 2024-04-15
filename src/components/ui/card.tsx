import {
	IconBolt,
	IconBug,
	IconEggCracked,
	IconFlame,
	IconFlask2,
	IconPlant2,
	IconRipple,
} from "@tabler/icons-react"
import { Link } from "react-router-dom"
import useGetPokemon from "../../hooks/useGetPokemon"
import useSetColors from "../../hooks/useSetColors"
import { usePokemonsStore } from "../../store/pokemons"

interface Props {
	name: string
	url: string
}

export default function Card(props: Props) {
	const { query } = useGetPokemon(props)
	const { colors } = useSetColors({ query })
	const { lastPokemonSelected, setLastPokemonSelected } = usePokemonsStore(
		(state) => state
	)

	return (
		<Link
			to={"/pokemon/" + props.name}
			onClick={() => setLastPokemonSelected(props.name)}
		>
			<div
				className={`cursor-pointer bg-gradient-to-b from-zinc-800  to-zinc-900 md:min-h-[18rem] rounded-xl px-3 pb-5 shadow-xl relative overflow-hidden flex flex-col items-center group mx-auto border-2 min-w-[17rem] md:min-w-min border-transparent duration-200 ${
					colors.hoverBorder
				} ${lastPokemonSelected === props.name ? "opacity-30" : ""}`}
			>
				<img
					src={query.data?.sprites.other["official-artwork"].front_default}
					alt={props.name}
					className="w-[13rem] z-20"
				/>

				<h4 className="z-20 text-xl font-bold text-white underline capitalize">
					{props.name}
				</h4>

				<p
					className={`
          px-3 py-1 rounded-lg z-20 mt-2 capitalize min-w-[6rem]  text-center font-semibold flex items-center justify-center gap-1 text-white border-2 bg-transparent
        ${colors.border}`}
				>
					{query.data?.types[0].type.name === "fire" && (
						<IconFlame className="w-5 h-5" />
					)}
					{query.data?.types[0].type.name === "water" && (
						<IconRipple className="w-5 h-5" />
					)}
					{query.data?.types[0].type.name === "bug" && (
						<IconBug className="w-5 h-5" />
					)}
					{query.data?.types[0].type.name === "grass" && (
						<IconPlant2 className="w-5 h-5" />
					)}
					{query.data?.types[0].type.name === "electric" && (
						<IconBolt className="w-5 h-5" />
					)}
					{query.data?.types[0].type.name === "ground" && (
						<IconEggCracked className="w-5 h-5" />
					)}
					{query.data?.types[0].type.name === "poison" && (
						<IconFlask2 className="w-5 h-5" />
					)}
					{query.data?.types[0].type.name}
				</p>

				<div className="z-20 flex gap-5 mt-3 font-semibold text-white uppercase">
					<p className={`border-b-2 ${colors.border}`}>
						{query.data?.height / 10}mts
					</p>
					<p className={`border-b-2 ${colors.border}`}>
						{query.data?.weight / 10}kgs
					</p>
				</div>

				<div
					className={`h-[7rem] w-[13rem]  -bottom-20 left-1/2 -translate-x-1/2 absolute blur-3xl group-hover:h-[20rem] duration-200 ${colors.bgBlur}`}
				></div>

				<img
					src="/images/pokeball.svg"
					alt="Pokeball"
					className="absolute rotate-45 opacity-20 -left-32"
				/>
			</div>
		</Link>
	)
}
