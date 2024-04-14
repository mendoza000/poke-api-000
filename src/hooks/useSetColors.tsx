import { UseQueryResult } from "@tanstack/react-query"

interface Props {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	query: UseQueryResult<any, Error>
}

export default function useSetColors({ query }: Props) {
	const colors = {
		bg:
			query.data?.types[0].type.name === "fire"
				? "bg-red-400"
				: query.data?.types[0].type.name === "water"
				? "bg-blue-400"
				: query.data?.types[0].type.name === "bug"
				? "bg-yellow-600"
				: query.data?.types[0].type.name === "normal"
				? "bg-zinc-700"
				: query.data?.types[0].type.name === "poison"
				? "bg-purple-700"
				: query.data?.types[0].type.name === "ground"
				? "bg-amber-700"
				: query.data?.types[0].type.name === "bug"
				? "bg-cyan-700"
				: "bg-green-700",

		border:
			query.data?.types[0].type.name === "fire"
				? "border-red-400"
				: query.data?.types[0].type.name === "water"
				? "border-blue-400"
				: query.data?.types[0].type.name === "electric"
				? "border-yellow-600"
				: query.data?.types[0].type.name === "normal"
				? "border-zinc-700"
				: query.data?.types[0].type.name === "poison"
				? "border-purple-700"
				: query.data?.types[0].type.name === "ground"
				? "border-amber-700"
				: query.data?.types[0].type.name === "bug"
				? "border-cyan-700"
				: "border-green-700",

		hoverBorder:
			query.data?.types[0].type.name === "fire"
				? "hover:border-red-400"
				: query.data?.types[0].type.name === "water"
				? "hover:border-blue-400"
				: query.data?.types[0].type.name === "electric"
				? "hover:border-yellow-600"
				: query.data?.types[0].type.name === "normal"
				? "hover:border-zinc-700"
				: query.data?.types[0].type.name === "poison"
				? "hover:border-purple-700"
				: query.data?.types[0].type.name === "ground"
				? "hover:border-amber-700"
				: query.data?.types[0].type.name === "bug"
				? "hover:border-cyan-700"
				: "hover:border-green-700",

		bgBlur:
			query.data?.types[0].type.name === "fire"
				? "bg-red-700/50"
				: query.data?.types[0].type.name === "water"
				? "bg-blue-700/50"
				: query.data?.types[0].type.name === "electric"
				? "bg-yellow-700/50"
				: query.data?.types[0].type.name === "normal"
				? "bg-zinc-700/50"
				: query.data?.types[0].type.name === "poison"
				? "bg-purple-700/50"
				: query.data?.types[0].type.name === "ground"
				? "bg-amber-700/50"
				: query.data?.types[0].type.name === "bug"
				? "bg-cyan-700/50"
				: "bg-green-700/50",

		iconColor:
			query.data?.types[0].type.name === "fire"
				? "text-red-400"
				: query.data?.types[0].type.name === "water"
				? "text-blue-400"
				: query.data?.types[0].type.name === "electric"
				? "text-yellow-600"
				: query.data?.types[0].type.name === "normal"
				? "text-zinc-700"
				: query.data?.types[0].type.name === "poison"
				? "text-purple-700"
				: query.data?.types[0].type.name === "ground"
				? "text-amber-700"
				: query.data?.types[0].type.name === "bug"
				? "text-cyan-700"
				: "text-green-700",
	}

	return { colors }
}
