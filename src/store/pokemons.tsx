import { create } from "zustand"
import { devtools } from "zustand/middleware"

interface State {
	lastPokemonSelected: string
	setLastPokemonSelected: (name: string) => void
}

export const usePokemonsStore = create<State>()(
	devtools((set) => ({
		lastPokemonSelected: "",
		setLastPokemonSelected: (name: string) =>
			set({ lastPokemonSelected: name }),
	}))
)
