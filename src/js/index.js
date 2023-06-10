import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./component/navigation.jsx";
import { Jumbotron } from "./component/jumbotron.jsx";
import { PresetCard } from "./component/card.jsx";
import { Footer } from "./component/footer.jsx";

function App() {
  return (
    <div>
    <Navbar />  
    <div className="container">
    <Jumbotron />  
      <div className="row">
        <div className="col">
        <PresetCard />
        </div>
        <div className="col">
        <PresetCard />
        </div>
        <div className="col">
        <PresetCard />
        </div>
        <div className="col">
        <PresetCard />
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
