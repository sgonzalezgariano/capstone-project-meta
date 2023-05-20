import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
      <header className="header">
        <Header />
        <input className="side-menu" type="checkbox" id="side-menu" />
        <label className="hamb" for="side-menu">
          <span className="hamb-line"></span>
        </label>
        <Nav />
      </header>

      <Main />
      <Footer />
    </>
  );
}

export default App;
