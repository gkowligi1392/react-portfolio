import { useEffect } from "react";
import AboutMeImage from "../../assets/images/about-me.svg";
import ContactMeImage from "../../assets/images/contact-me.svg";
import Logo from "../../assets/images/logo.svg";
import PortfolioImage from "../../assets/images/portfolio.svg";
import ResumeImage from "../../assets/images/resume.svg";

const Nav = ({ currentPage, setCurrentPage }) => {
  useEffect(() => {
    document.title = `${currentPage}`;
  }, [currentPage]);

  const handlerOpenResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <>
      <div className="header-logo">
        <img src={Logo} className="img-logo" alt="logo" />
        <h1>Joseduardo</h1>
      </div>
      <nav>
        <div className="nav-item" onClick={() => setCurrentPage("About Me")}>
          <img src={AboutMeImage} className="img-nav" alt="about-me" />
          About Me
        </div>
        <div className="nav-item" onClick={() => setCurrentPage("Portfolio")}>
          <img src={PortfolioImage} className="img-nav" alt="portfolio" />
          Portfolio
        </div>
        <div className="nav-item" onClick={() => setCurrentPage("Contact Me")}>
          <img src={ContactMeImage} className="img-nav" alt="contact-me" />
          Contact Me
        </div>
        <div className="nav-item" onClick={handlerOpenResume}>
          <img src={ResumeImage} className="img-nav" alt="resume" />
          Resume
        </div>
      </nav>
    </>
  );
};

export default Nav;