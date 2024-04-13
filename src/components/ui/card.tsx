import { IconBug, IconFlame, IconPlant2, IconRipple } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"

interface Props {
	name: string
	url: string
}

export default function Card(props: Props) {
	const query = useQuery({
		queryKey: [props.name],
		queryFn: () => fetch(props.url).then((res) => res.json()),
	})

	const colors = {
		bg:
			query.data?.types[0].type.name === "fire"
				? "bg-red-400"
				: query.data?.types[0].type.name === "water"
				? "bg-blue-400"
				: query.data?.types[0].type.name === "bug"
				? "bg-yellow-600"
				: "bg-green-700",

		border:
			query.data?.types[0].type.name === "fire"
				? "border-red-400"
				: query.data?.types[0].type.name === "water"
				? "border-blue-400"
				: query.data?.types[0].type.name === "bug"
				? "border-yellow-600"
				: "border-green-700",

		hoverBorder:
			query.data?.types[0].type.name === "fire"
				? "hover:border-red-400"
				: query.data?.types[0].type.name === "water"
				? "hover:border-blue-400"
				: query.data?.types[0].type.name === "bug"
				? "hover:border-yellow-600"
				: "hover:border-green-700",

		bgType:
			query.data?.types[0].type.name === "fire"
				? "border-red-400"
				: query.data?.types[0].type.name === "water"
				? "border-blue-400"
				: query.data?.types[0].type.name === "bug"
				? "border-yellow-600"
				: "border-green-700",

		bgBlur:
			query.data?.types[0].type.name === "fire"
				? "bg-red-700/50"
				: query.data?.types[0].type.name === "water"
				? "bg-blue-700/50"
				: query.data?.types[0].type.name === "bug"
				? "bg-yellow-700/50"
				: "bg-green-700/50",
	}

	return (
		<div
			className={`cursor-pointer bg-gradient-to-b from-zinc-800  to-zinc-900 md:min-h-[18rem] rounded-xl px-3 pb-5 shadow-xl relative overflow-hidden flex flex-col items-center group mx-auto border-2 min-w-[17rem] md:min-w-min border-transparent duration-200 ${colors.hoverBorder}`}
		>
			<img
				src={query.data?.sprites.front_default}
				alt={props.name}
				className="w-[13rem] z-20 -mt-4 -mb-4"
			/>

			<h4 className="z-20 text-xl font-bold text-white underline capitalize">
				{props.name}
			</h4>

			<p
				className={`
          px-3 py-1 rounded-lg z-20 mt-2 capitalize min-w-[6rem]  text-center font-semibold flex items-center justify-center gap-1 text-white
        ${colors.bg}`}
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
				{query.data?.types[0].type.name}
			</p>

			<div className="z-20 flex gap-5 mt-3 font-semibold text-white uppercase">
				<p className={`border-b-2 ${colors.border}`}>
					{query.data?.height / 10}mts
				</p>
				<p className={`border-b-2 ${colors.bgType}`}>
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
	)
}
