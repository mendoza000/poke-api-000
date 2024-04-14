import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/routes/home"
// Supports weights 100-900
import "@fontsource-variable/chivo"
import ErrorPage from "./components/routes/error-page"
import Pokemon from "./components/routes/pokemon"

const queryClient = new QueryClient()

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: "pokemon/:pokeName",
		element: <Pokemon />,
		errorElement: <ErrorPage />,
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
