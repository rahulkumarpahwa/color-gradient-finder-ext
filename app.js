import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
const App = () => {
  return (
    <div className="app">
      <Header/>
      <Body />
      <Footer />
    </div>
  );
};

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
