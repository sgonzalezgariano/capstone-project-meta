import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import MainReact from "./MainReact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <header className="header">
        <Header />
        <input className="side-menu" type="checkbox" id="side-menu" />
        <label className="hamb" htmlFor="side-menu">
          <span className="hamb-line"></span>
        </label>
        <Nav />
      </header>
      <MainReact />
      <Footer />
    </>
  );
}

export default App;
