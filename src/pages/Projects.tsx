import { useState, useEffect } from "react";
import { ReactComponent as ReactImg } from "../assets/react.svg";
import { ReactComponent as ReactNativeImg } from "../assets/react-native.svg";
import { ReactComponent as NodeJSImg } from "../assets/nodejs.svg";
import { ReactComponent as GoImg } from "../assets/golang.svg";
import { ReactComponent as PythonImg } from "../assets/python.svg";
import { ReactComponent as SwiftImg } from "../assets/swift.svg";
import { ReactComponent as AngularImg } from "../assets/angular.svg";
import { ReactComponent as VueImg } from "../assets/vue.svg";
import { ReactComponent as KotlinImg } from "../assets/kotlin.svg";

const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [selectedLanguage, setSelectedLanguage] = useState("React");

	useEffect(() => {
		getGithubProjects();
	}, []);

	const pinnedProjects = [
		"React-Alpha-Suite",
		"Swift-Pokedex",
		"React-Travel-app",
		"React-Covid-Dashboard",
	];

	const programLanguages = [
		{
			name: "React",
			image: <ReactImg className="projects__image" />,
			learned: true,
		},
		{
			name: "React Native",
			image: <ReactNativeImg className="projects__image" />,
			learned: true,
		},
		{
			name: "Node.js",
			image: <NodeJSImg className="projects__image" />,
			learned: true,
		},
		{
			name: "Golang",
			image: <GoImg className="projects__image" />,
			learned: true,
		},
		{
			name: "Python",
			image: <PythonImg className="projects__image" />,
			learned: true,
		},
		{
			name: "Swift",
			image: <SwiftImg className="projects__image" />,
			learned: false,
		},
		{
			name: "Angular",
			image: <AngularImg className="projects__image" />,
			learned: false,
		},
		{
			name: "Vue",
			image: <VueImg className="projects__image" />,
			learned: false,
		},
		{
			name: "Kotlin",
			image: <KotlinImg className="projects__image" />,
			learned: false,
		},
	];

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
			setProjects(data);
		} catch (error) {
			console.log("error:", error);
		}
	};

	console.log("projects", projects[0]);
	return (
		<div className="projects">
			<h2>My Projects</h2>
			<div className="projects__container" style={{ color: "white" }}>
				<div className="projects__sidebar">
					{programLanguages.map((tech: any, key) => (
						<div
							className={`projects__language${
								selectedLanguage === tech.name ? "--selected" : ""
							}`}
							onClick={() => setSelectedLanguage(tech.name)}
							key={key}>
							{tech.image}
							<p>{`${tech.name} ${tech.learned ? "" : "(Learning Soon)"}`}</p>
						</div>
					))}
				</div>
				<div className="projects__main">
					{projects
						.filter((project: any) => pinnedProjects.includes(project.name))
						.sort((a: number, b: number) => a - b)
						.map((project: any, key) => (
							<div className="projects__featured" key={key}>
								<div className="projects__featured--overlay">
									<a
										href={project.html_url}
										target="_blank"
										rel="noopener noreferrer">
										<img
											src={
												process.env.PUBLIC_URL +
												`assets/${project.name.slice(6).toLowerCase()}.webp`
											}
											alt={project.name}
										/>
										<p>{project.name.slice(6).split("-").join(" ")}</p>
										<p className="projects__capsule">
											{project.name.slice(0, 5)}
										</p>
									</a>
								</div>
							</div>
						))}
				</div>
				<div className="projects__content"></div>
			</div>
		</div>
	);
};

export default Projects;
