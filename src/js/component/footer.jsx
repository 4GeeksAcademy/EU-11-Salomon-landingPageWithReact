import React from "react";

const Footer = () => {
	return (
      <footer class="py-3 my-4 bg-dark">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3 text-light">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-light">About</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Services</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Contact</a></li>
      </ul>
      <p class="text-center text-light">Copyright © Your Website 2023</p>
    </footer>
	);
};

export { Footer };