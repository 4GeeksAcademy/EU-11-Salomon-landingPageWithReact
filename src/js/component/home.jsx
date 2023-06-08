import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="d-inline-flex container-fluid">
				<a className="navbar-brand" href="#">Start Bootstrap</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav d-flex">
						<li className="nav-item">
							<a className="nav-link active justify-content-end" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Services</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

const Jumbotron = () => {
	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">Special title treatment</h5>
				<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
				<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	);
};

const PresetCard = () => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src="./img/rigo-baby.jpg" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	);
};

export { Navbar, Jumbotron, PresetCard};
