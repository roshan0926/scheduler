
import React from "react";

import { render } from "@testing-library/react";

import Application from "components/Application";
//base test to ensure the application renders
describe("Application", () => {
  it("renders without crashing", () => {
    render(<Application />);
  });

})
