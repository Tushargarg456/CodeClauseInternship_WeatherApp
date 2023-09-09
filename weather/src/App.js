import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";
// import footer from "./footer";

function App() {
  return (
    <>
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
      <h1>Made with ❤️</h1>
      </div>
    </React.Fragment>
    <footer/>
    </>
  );
}

export default App;
