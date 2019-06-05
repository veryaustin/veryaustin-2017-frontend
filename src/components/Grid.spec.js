import React from "react";
import { shallow } from "enzyme";
import Grid from "./Grid";

describe("Grid Component", () => {
  // Component Tests
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Grid />);
  });

  it("renders the grid", () => {
    const grid = wrapper.find("styled.div");
    expect(grid).toExist;
  });
});
