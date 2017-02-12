import React from "react";

import { Nav } from "Nav";

const Main = (props) => {
  return (
    <div>
      <Nav/>
      <div>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export {Main}
