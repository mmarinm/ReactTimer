import React from "react";
import { Link, IndexLink } from "react-router";

const Nav = () => {

    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            </li>
            <li>
              <Link to="/" activeClassName="active-link">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="https://github.com/mmarinm" target="_blank">Marin Mestrovic</a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export { Nav }
