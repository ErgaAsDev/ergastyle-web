import "./home.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import LogoTitle from "../../assets/images/logo-s.png";
import TechIcon from "./Techicon/TechIcon";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = [" ", "E", "r", "l", "a", "n", "g", "g", "a"];
  const jobArray = [
    "a",
    " ",
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    "/",
    "D",
    "e",
    "s",
    "i",
    "g",
    "n",
    "e",
    "r",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
            </span>

            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={16}
            />
          </h1>
          <h2>Front End Developer && Web/Mobile Designer</h2>
          <Link to="/portfolio" className="flat-button">
            PORTFOLIO
          </Link>
        </div>
        <TechIcon />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
