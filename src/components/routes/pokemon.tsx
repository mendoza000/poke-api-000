import { useParams } from "react-router-dom"
import useSetColors from "../../hooks/useSetColors"
import {
	IconBolt,
	IconBrandSpeedtest,
	IconBug,
	IconChartArrowsVertical,
	IconEggCracked,
	IconFlame,
	IconFlask2,
	IconHeart,
	IconPlant2,
	IconRipple,
	IconShield,
	IconSword,
} from "@tabler/icons-react"
import useGetPokemon from "../../hooks/useGetPokemon"

export default function Header() {
	const { pokeName = "charizard" } = useParams()
	const { query } = useGetPokemon({
		name: pokeName,
		url: `https://pokeapi.co/api/v2/pokemon/${pokeName}`,
	})

	const { colors } = useSetColors({ query })

	return (
		<div className="min-h-screen bg-gradient-to-b from-zinc-700 to-zinc-900 relative flex  justify-center rounded-b-[10rem] pt-44 md:pt-10 lg:pt-0 overflow-hidden">
			<img
				src="/images/pokemon-white.svg"
				alt="Pokemon-logo"
				draggable={false}
				className="w-[20rem] absolute top-5"
			/>

			<img
				src="/images/pokeball.svg"
				alt="Pokeball"
				draggable={false}
				className="w-[15rem] absolute top-1/2 -right-20 transform -translate-y-1/2 opacity-20 rotate-45"
			/>

			<img
				src="/images/pokeball.svg"
				alt="Pokeball"
				draggable={false}
				className="w-[15rem] absolute top-0 -left-20 transform  opacity-20 "
			/>

			<img
				src="/images/pokeball.svg"
				alt="Pokeball"
				draggable={false}
				className="w-[15rem] absolute -bottom-32 left-1/2 transform  -translate-x-1/2 opacity-20 rotate-90"
			/>
			<div className="grid min-h-screen grid-cols-1 gap-3 px-5 mx-0 lg:mx-32 md:mx-10 md:grid-cols-2">
				<div className="flex flex-col justify-center min-h-full gap-5">
					<span className="font-semibold uppercase text-white/70">
						{pokeName}
					</span>

					<div className="flex flex-col gap-2">
						<p className="flex items-center gap-1 font-bold text-white">
							<IconHeart className="w-6 h-6" />
							HP: {query.data?.stats[0].base_stat}
						</p>
						<p className="flex items-center gap-1 font-bold text-white">
							<IconSword className="w-6 h-6" />
							Attack: {query.data?.stats[1].base_stat}
						</p>
						<p className="flex items-center gap-1 font-bold text-white">
							<IconShield className="w-6 h-6" />
							Defense: {query.data?.stats[2].base_stat}
						</p>
						<p className="flex items-center gap-1 font-bold text-white">
							<IconBrandSpeedtest className="w-6 h-6" />
							Speed: {query.data?.stats[5].base_stat}
						</p>
						<p className="flex items-center gap-1 font-bold text-white">
							<IconChartArrowsVertical className="w-6 h-6" />
							Base Experience: {query.data?.base_experience}
						</p>
					</div>

					<div className="flex">
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
					</div>
				</div>

				<div className="relative flex flex-col justify-center min-h-full">
					<img
						src={query.data?.sprites.other["official-artwork"].front_default}
						alt={pokeName}
						draggable={false}
						className="ml-auto w-[30rem] z-20 absolute right-0 blur-2xl"
					/>
					<img
						src={query.data?.sprites.other["official-artwork"].front_default}
						alt={pokeName}
						draggable={false}
						className="ml-auto w-[30rem] z-20"
					/>
				</div>
			</div>
		</div>
	)
}
