import ImagePortfolio from "../../assets/images/portfolio.svg";
import PortfolioItem from "../PortfolioItem";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Horiseon",
      technology: "HTML",
      image: "horiseon.png",
      description: "Code Refactoring",
      url: "https://gkowligi1392.github.io/code_refactor/code_refactor/Develop/index.html",
    },
    {
      title: "National Park Search",
      technology: "Javascript",
      image: "npst.png",
      description: "Search for National Parks",
      url: "https://gkowligi1392.github.io/NationalParkSearch/",
    },
    {
      title: "Book Search Engine",
      technology: "MERN Stack",
      image: "book-search.png",
      description: "Search for books",
      url: "https://gk-book-search.herokuapp.com/",
    },
    {
      title: "Vintage Movie Shop",
      technology: "React",
      image: "movie-shop.png",
      description: "Buy vintage movies",
      url: "https://movie-shop-mern.herokuapp.com/",
    },
    {
      title: "Giftby",
      technology: "Full Stack",
      image: "giftby.png",
      description: "Secret Santa Generator",
      url: "https://secret-santa-project.herokuapp.com/",
    },
    {
      title: "Tech Blog",
      technology: "MVC",
      image: "tech-blog.png",
      description: "Post your tech articles",
      url: "https://protected-lake-13354.herokuapp.com/",
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