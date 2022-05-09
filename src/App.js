import "./App.css";
import { MyToast, Sidebar } from "./components";
import { NavigationRoutes } from "./routes/NavigationRoutes";

function App() {
	return (
		<div className="App">
			<MyToast />
			<NavigationRoutes />
		</div>
	);
}

export default App;
