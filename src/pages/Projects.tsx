import { useState, useEffect } from "react";

const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [techList, setTechList] = useState<string[]>([]);

	const pinnedProjects = [
		"React-Alpha-Suite",
		"Swift-Pokedex",
		"React-Invoice-App",
		"React-Travel-app",
		"React-Covid-Dashboard",
		"Portfolio-3.0",
	];

	useEffect(() => {
		getGithubProjects();
	}, []);

	const getGithubProjects = async () => {
		try {
			const response = await fetch(
				"https://api.github.com/users/cconner57/repos?per_page=100"
			);
			const data = await response.json();
			let techStackList: string[] = [];
			data.forEach((project: any) => {
				if (!techStackList.includes(project.name.split("-")[0])) {
					if (
						[
							"NodeJS",
							"Python",
							"React",
							"ReactNative",
							"Swift",
							"Go",
							"Kotlin",
						].includes(project.name.split("-")[0])
					) {
						techStackList.push(project.name.split("-")[0]);
					}
				}
			});
			setTechList(techStackList);
			setProjects(data);
		} catch (error) {
			console.log("error:", error);
		}
	};

	console.log("projects", projects[0]);
	return (
		<div className="projects">
			<p>My Projects</p>
			<div className="projects-container" style={{ color: "white" }}>
				{techList.map((tech: string, key) => (
					<p key={key}>{tech}</p>
				))}
			</div>
		</div>
	);
};

export default Projects;
