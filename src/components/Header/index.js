import React from "react";
import "./styles.css";

export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a className="logo" href="/" title="Netflix">
          <i title="Netflix Home" className="icon-logoUpdate" />
        </a>
      </div>
      <div className="header--user">
        <img
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="User"
        />
      </div>
    </header>
  );
};
