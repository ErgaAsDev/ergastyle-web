import React from "react";

const Cards = (props) => {
  return (
    <div className="portfolio">
      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage: `url(${props.images})`,
          }}
        >
          <h1 className="text-shadow">{props.titles}</h1>
        </div>
        <div className="back">
          {/* <h2>{props.titles}</h2> */}
          <p>{props.desc}</p>
          <p>{props.tech}</p>
          <div style={{ display: "flex", gap: "12px" }}>
            {props.linkCode ? (
              <a
                href={props.linkCode}
                className="button source"
                target="_blank"
              >
                Link
              </a>
            ) : (
              ""
            )}
            {props.sourceCode ? (
              <a
                href={props.sourceCode}
                className="button link"
                target="_blank"
              >
                Source
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
