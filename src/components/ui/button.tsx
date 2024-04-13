interface Props {
	children: React.ReactNode
	size?: "default" | "icon"
	variant?: "default" | "outline"
}

export default function Button({
	size = "default",
	variant = "default",
	children,
}: Props) {
	return (
		<button
			className={`bg-yellow-400 rounded-md py-2 px-5 font-semibold hover:bg-yellow-400/70 duration-200 flex gap-2 hover:gap-3 border-2 border-yellow-400 ${
				size === "icon" ? "px-3" : "px-5"
			}
    ${
			variant === "outline"
				? "bg-transparent border-yellow-400 text-yellow-400 hover:bg-yellow-400/20"
				: "bg-yellow-400"
		}
    `}
		>
			{children}
		</button>
	)
}
