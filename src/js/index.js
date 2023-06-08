import React from "react";
import ReactDOM from "react-dom";
import { Navbar, Jumbotron, PresetCard } from "./component/home.jsx";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <PresetCard />
    </div>
  );
}

ReactDOM.render(<LandingPage />, document.querySelector("#app"));

