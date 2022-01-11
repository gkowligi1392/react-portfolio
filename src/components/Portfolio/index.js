import ImagePortfolio from "../../assets/images/portfolio.svg";

const Portfolio = () => {
  return (
    <section>
      <div className="page-body">
        <img src={ImagePortfolio} alt="Portfolio" className="img-body" />
        <h1>Portfolio</h1>
        Show images portfolio
      </div>
    </section>
  );
};

export default Portfolio;