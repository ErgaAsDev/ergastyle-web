import "./portfolio.scss";
import Loader from "react-loaders";
import data from "./data";
import Cards from "./Cards";

const Portfolio = () => {
  const cardsMap = data.map((card) => {
    return (
      <Cards
        key={card.id}
        images={card.img}
        titles={card.title}
        desc={card.desc}
        tech={card.tech}
        sourceCode={card.sourceCode}
        linkCode={card.linkCode}
      />
    );
  });
  return (
    <div className="portfolio-container">
      {cardsMap}
      <Loader type="pacman" />
    </div>
  );
};

export default Portfolio;
