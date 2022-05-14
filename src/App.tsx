import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import UnderConstruction from "./components/UnderConstruction";

const App = () => {
	const AboutMe = lazy(() => import("./pages/AboutMe"));
	const Projects = lazy(() => import("./pages/Projects"));
	const History = lazy(() => import("./pages/History"));
	const Contact = lazy(() => import("./pages/Contact"));

	return (
		<div>
			<Navbar />
			<UnderConstruction />
			<Suspense fallback={<div>Loading...</div>}>
				<AboutMe />
				<Projects />
				<History />
				<Contact />
			</Suspense>
		</div>
	);
};

export default App;
