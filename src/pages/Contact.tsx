const Contact = () => {
	return (
		<div className="contact">
			<p className="contact__header">Get in touch</p>
			<form className="form" onSubmit={(e) => e.preventDefault}>
				<div className="form__inputs">
					<input type="text" placeholder="Name" />
					<input type="email" placeholder="Email" />
				</div>
				<input className="form__subject" type="text" placeholder="Subject" />
				<textarea className="form__textarea" placeholder="Message" />
				<button className="form__button">Send message</button>
			</form>
		</div>
	);
};

export default Contact;
