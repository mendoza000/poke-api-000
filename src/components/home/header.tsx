import Button from "../ui/button"
import {
	IconChevronsRight,
	IconBrandGithub,
	IconBrandLinkedin,
} from "@tabler/icons-react"

export default function Header() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-purple-700 to-purple-900 relative flex  justify-center rounded-b-[10rem] pt-44 md:pt-10 lg:pt-0 overflow-hidden">
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
			<div className="lg:mx-32 px-5 md:mx-10 mx-0 grid grid-cols-1 md:grid-cols-2 gap-3 min-h-screen">
				<div className="justify-center flex flex-col min-h-full gap-5">
					<span className="text-white/70 font-semibold">
						Become a Pokémon Master
					</span>

					<p className="text-4xl font-bold text-white">
						Welcome to our Pokémon Hub! Dive into the Fascinating World of
						Pokémon Trainers, Battles, and Legendary Creatures
					</p>

					<div className="flex gap-3">
						<Button>
							<IconChevronsRight className="h-6 w-6" />
							Explore now
						</Button>

						<Button variant="outline" size="icon">
							<IconBrandGithub className="h-6 w-6" />
						</Button>
						<Button variant="outline" size="icon">
							<IconBrandLinkedin className="h-6 w-6" />
						</Button>
					</div>
				</div>

				<div className="flex flex-col min-h-full justify-center relative">
					<img
						src="/images/gengar.png"
						alt="Gengar"
						draggable={false}
						className="ml-auto w-[30rem] z-20 absolute right-0 blur-2xl"
					/>
					<img
						src="/images/gengar.png"
						alt="Gengar"
						draggable={false}
						className="ml-auto w-[30rem] z-20"
					/>
				</div>
			</div>
		</div>
	)
}
