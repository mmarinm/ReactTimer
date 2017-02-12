import React from "react";

import { Nav } from "Nav";

const Main = (props) => {
  return (
    <div>
      <Nav/>
      <div>
        <div>
          <h2>Boilerplate rendered</h2>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export {Main}
