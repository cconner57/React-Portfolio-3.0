import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";

const App = () => {
	const AboutMe = lazy(() => import("./pages/AboutMe"));
	const Projects = lazy(() => import("./pages/Projects"));
	const History = lazy(() => import("./pages/History"));
	const Contact = lazy(() => import("./pages/Contact"));

	return (
		<>
			<Navbar />
			<Suspense fallback={<div>Loading...</div>}>
				<AboutMe />
				<Projects />
				<History />
				<Contact />
			</Suspense>
		</>
	);
};

export default App;
