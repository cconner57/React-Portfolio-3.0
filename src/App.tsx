import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";

const App = () => {
	const AboutMe = lazy(() => import("./pages/AboutMe"));
	const Projects = lazy(() => import("./pages/Projects"));
	const Skills = lazy(() => import("./pages/Skills"));
	const History = lazy(() => import("./pages/History"));
	const Contact = lazy(() => import("./pages/Contact"));
	const Footer = lazy(() => import("./components/Footer"));

	return (
		<>
			<Navbar />
			<Suspense fallback={<div>Loading...</div>}>
				<AboutMe />
				<Projects />
				<Skills />
				<History />
				<Contact />
				<Footer />
			</Suspense>
		</>
	);
};

export default App;
