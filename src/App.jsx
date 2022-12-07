import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Pages/Main";
import Nav from "./Components/Nav/Nav";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div
        className="container 
            d-flex 
            mt-2 
            justify-content-around"
      >
        <div className="col-3">
          <Nav />
        </div>
        <div className="col-7 main">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default App;
