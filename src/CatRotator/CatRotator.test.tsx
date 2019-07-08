//
// CatRotator.test.tsx
//
// Copyright © 2019 Kuamka Ltd All rights reserved.
//

import React from "react";
import ReactDOM from "react-dom";

import { CatRotator } from "./CatRotator";
import testCat from "../TestCat.svg";

describe("CatRotator", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    const catInfo = {
      name: "Test Cat",
      image: testCat
    };
    ReactDOM.render(<CatRotator cat={catInfo} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
