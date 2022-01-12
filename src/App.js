import { useState } from "react";
import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";

function App() {
  const [currentPage, setCurrentPage] = useState("About Me");

  return (
    <>
      <header>
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </header>
      <main>
        {currentPage === "aboutMe" && <About />}
        {currentPage === "portfolio" && <Portfolio />}
        {currentPage === "contactMe" && <ContactMe />}
      </main>
      <footer>@gkowligi1392</footer>
    </>
  );
}

export default App;