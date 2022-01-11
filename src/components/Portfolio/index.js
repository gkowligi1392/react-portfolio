import ImagePortfolio from "../../assets/images/portfolio.svg";
import PortfolioItem from "../PortfolioItem";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Web Site",
      technology: "HTML",
      image: "web-site.png",
      description: "HTML Project Description",
      url: "https://secret-santa-project.herokuapp.com/",
    },
    {
      title: "Dynamic Web Site",
      technology: "Javascript",
      image: "javascript.jpeg",
      description: "Project Description",
      url: "https://secret-santa-project.herokuapp.com/",
    },
    {
      title: "MongoDB",
      technology: "Database",
      image: "mongo-db.png",
      description: "Project Description",
      url: "https://secret-santa-project.herokuapp.com/",
    },
    {
      title: "MySQL",
      technology: "Database Design",
      image: "my-sql.jpeg",
      description: "Project Description",
      url: "https://secret-santa-project.herokuapp.com/",
    },
    {
      title: "Web Site",
      technology: "HTML",
      image: "web-site-2.jpeg",
      description: "Project Description",
      url: "https://secret-santa-project.herokuapp.com/",
    },
    {
      title: "Web Site",
      technology: "HTML",
      image: "web-site-3.png",
      description: "Project Description",
      url: "https://secret-santa-project.herokuapp.com/",
    },
  ];

  return (
    <section>
      <div className="page-body">
        <img src={ImagePortfolio} alt="Portfolio" className="img-body" />
        <h1>Portfolio</h1>
        <div className="portfolio">
          {portfolioItems.map((item, index) => (
            <PortfolioItem item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;