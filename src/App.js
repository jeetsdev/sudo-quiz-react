import "./App.css";
import { Footer, MyToast } from "./components";
import { NavigationRoutes } from "./routes/NavigationRoutes";

function App() {
	return (
		<div className="App">
			<MyToast />
			<NavigationRoutes />
			<Footer />
		</div>
	);
}

export default App;
