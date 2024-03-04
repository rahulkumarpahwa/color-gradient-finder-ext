import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
const App = () => {
  return (
    <div className="app">
      <Body />
      <Footer />
    </div>
  );
};

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
