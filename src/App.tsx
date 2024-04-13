import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/views/home"
// Supports weights 100-900
import "@fontsource-variable/chivo"

const queryClient = new QueryClient()

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
])

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<RouterProvider router={router} />
		</QueryClientProvider>
	)
}

export default App
