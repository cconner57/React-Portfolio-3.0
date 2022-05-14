const AboutMe = () => {
	return (
		<div className="aboutMe">
			<h1 className="aboutMe__name">I'm Chris</h1>
			<p className="aboutMe__title">Full-Stack Developer</p>
			<p className="aboutMe__description">
				I enjoy building software that makes peoples' lives easier by writing
				elegant, performant, and maintainable frontend code. 
			</p>
			<button className="aboutMe__resume">Download Resume</button>
			<div className="aboutMe__links">
				<div className="aboutMe__links__github">
					<img
						alt="Github"
						src={process.env.PUBLIC_URL + "/assets/github.png"}
					/>
				</div>
				<div className="aboutMe__links__linkedin">
					<img
						alt="LinkedIn"
						src={process.env.PUBLIC_URL + "/assets/linkedin.png"}
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
