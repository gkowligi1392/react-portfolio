import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <About />
        <Portfolio />
        <ContactMe />
      </main>
      <footer>this is the footer</footer>
    </>
  );
}

export default App;