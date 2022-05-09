const AboutMe = () => {
	return (
		<div className="aboutMe">
			<h1 className="aboutMe__name">I'm Chris</h1>
			<p className="aboutMe__title">Full-Stack Developer</p>
			<p className="aboutMe__description">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
				beatae aliquid porro aperiam amet praesentium perspiciatis, illo,
				voluptatum mollitia at voluptas, fuga temporibus consequatur suscipit
				quae animi? Excepturi, doloremque ratione?
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
