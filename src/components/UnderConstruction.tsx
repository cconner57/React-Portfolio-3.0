import { useState } from "react";

const UnderConstruction = () => {
	const [modalOpen, setModalOpen] = useState(true);
	return (
		<>
			{modalOpen ? (
				<div
					className="modal"
					style={{
						color: "white",
						position: "fixed",
						top: "50%",
						left: "50%",
						zIndex: "100",
						transform: "translate(-50%,-50%)",
						backgroundColor: "hsl(0,0%,50%)",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						padding: "1rem",
						borderRadius: "1rem",
						width: "40%",
						boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.5)",
					}}>
					<p
						className="modal__close"
						style={{ margin: "0rem .5rem .5rem auto", cursor: "pointer" }}
						onClick={() => setModalOpen(false)}>
						X
					</p>
					<p
						className="moda__message"
						style={{
							width: "80%",
							textAlign: "center",
							fontSize: "1.25rem",
						}}>
						Site is currently undergoing a refresh
					</p>
					<hr
						style={{
							backgroundColor: "white",
							height: "1px",
							width: "40%",
							margin: "2rem 0",
						}}
					/>
					<p
						className="moda__message"
						style={{
							width: "80%",
							textAlign: "center",
							fontSize: "1.25rem",
							marginBottom: "2rem",
						}}>
						Layout/features may be missing or unavailable
					</p>
				</div>
			) : null}
		</>
	);
};

export default UnderConstruction;
