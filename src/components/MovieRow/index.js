import React, { useState, useEffect } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import "./styles.css";

export default ({ title, items }) => {
  const listW = items.results.length * 280;
  const [scrollX, setScrollX] = useState(0);
  const [hideLeftArrow, setHideLeftArrow] = useState(true);
  const [hideRightArrow, setHideRightArrow] = useState(false);

  const handleCalcRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);

    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }

    return x;
  };

  const handleLeftArrow = () => {
    const x = scrollX + Math.round(window.innerWidth / 2);

    setScrollX(x > 0 ? 0 : x);
  };
  const handleRightArrow = () => {
    setScrollX(handleCalcRightArrow());
  };

  useEffect(() => {
    setHideLeftArrow(scrollX === 0);
    setHideRightArrow(scrollX === window.innerWidth - listW - 60);
  }, [scrollX, listW]);

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div
        className={`movieRow--left ${hideLeftArrow ? "hide" : ""}`}
        onClick={handleLeftArrow}
      >
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div
        className={`movieRow--right ${hideRightArrow ? "hide" : ""}`}
        onClick={handleRightArrow}
      >
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 280,
          }}
        >
          {items.results.length &&
            items.results.map((item) => (
              <div key={item.title} className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
