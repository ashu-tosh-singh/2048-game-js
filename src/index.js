import React from "react";
import ReactDOM from "react-dom";
import BoardView from "./components/Board";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/footer.scss";
import "./styles/header.scss";
import "./main.scss";
import "./styles.scss";

const App = () => {
  return (
    <>
      <Header />
      <BoardView />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
