import "./portfolio.scss";
import Loader from "react-loaders";
import data from "./data";
import Cards from "./Cards";
import { useState } from "react";

const Portfolio = () => {
  const uniqueCategories = [
    "All",
    ...new Set(data.map((item) => item.category)),
  ].filter((category) => category);

  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredData, setFilteredData] = useState(data);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const updatedData =
      category === "All"
        ? data
        : data.filter((item) => item.category === category);
    setFilteredData(updatedData);
  };

  const cardsMap = filteredData.map((card) => {
    return (
      <>
        <Cards
          key={card.id}
          images={card.img}
          titles={card.title}
          desc={card.desc}
          tech={card.tech}
          sourceCode={card?.sourceCode}
          linkCode={card?.linkCode}
        />
      </>
    );
  });

  return (
    <div className="portfolio-container">
      <div className="category">
        <div className="buttons">
          {uniqueCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={category === activeCategory ? "active" : ""}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {cardsMap}
      <Loader type="pacman" />
    </div>
  );
};

export default Portfolio;
