import React from "react";
import { shallow } from "enzyme";
import MenuButton from "./MenuButton";

describe("Menu Button Component", () => {
  it("renders the menu bar", () => {
    const wrapper = shallow(<MenuButton />);
    const menuButton = wrapper.find(".fa-bars");
    expect(menuButton).toExist;
  });
});
