import Button from "../ui/button"
import {
	IconChevronsRight,
	IconBrandGithub,
	IconBrandLinkedin,
} from "@tabler/icons-react"

export default function Header() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-purple-700 to-purple-900 relative flex  justify-center rounded-b-[5rem] md:rounded-b-[10rem] pt-44 md:pt-10 lg:pt-0 overflow-hidden">
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
					<span className="font-semibold text-white/70">
						Become a Pokémon Master
					</span>

					<p className="text-4xl font-bold text-white">
						Welcome to our Pokémon Hub! Dive into the Fascinating World of
						Pokémon Trainers, Battles, and Legendary Creatures
					</p>

					<div className="z-20 flex flex-col gap-3 md:flex-row">
						<a href="#pokemons">
							<Button>
								<IconChevronsRight className="w-6 h-6" />
								Explore now
							</Button>
						</a>

						<div className="flex gap-5">
							<a
								href="https://github.com/mendoza000/poke-api-000"
								target="_blank"
							>
								<Button variant="outline" size="icon">
									<IconBrandGithub className="w-6 h-6" />
								</Button>
							</a>
							<a href="https://linkdin/in/mendoza000" target="_blank">
								<Button variant="outline" size="icon">
									<IconBrandLinkedin className="w-6 h-6" />
								</Button>
							</a>
						</div>
					</div>
				</div>

				<div className="relative flex flex-col justify-center min-h-full">
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
