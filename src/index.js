import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import "./styles.scss";
import BoardView from "./components/Board";
import Footer from "./components/Footer";
import "./styles/footer.scss";

const App = () => {
  return (
    <>
      <BoardView />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
