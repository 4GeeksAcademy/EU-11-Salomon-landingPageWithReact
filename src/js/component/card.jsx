import React from "react";

const PresetCard = () => {
	return (
			<div className="card text-center mb-3" style={{ width: "18rem" }}>
				<img src="https://avtopilot1.ru/static/img/386x386.png" className="card-img-top" alt="..." />
				<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
				<a href="#" className="btn btn-primary">Find Out More!</a>
				</div>
			</div>
	);
};

export { PresetCard };