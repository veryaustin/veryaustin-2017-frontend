import React from "react";
import { mount } from "enzyme";
import Button from "./Button";
import "jest-styled-components";

describe("Button Component", () => {
  it("should render with default styles", () => {
    const wrapper = mount(<Button />);
    const button = wrapper.find("button");
    expect(button).toExist;
    expect(button).toHaveStyleRule("background", "#D3180E");
    expect(button).toHaveStyleRule("color", "#FFFFFF");
  });

  it("should render secondary styles when passed 'secondary' prop", () => {
    const wrapper = mount(<Button secondary />);
    const button = wrapper.find("button");
    expect(button).toHaveStyleRule("background", "#212425");
    expect(button).toHaveStyleRule("color", "#FFFFFF");
  });

  it("should render dark styles when passed 'dark' & 'secondary' prop", () => {
    const wrapper = mount(<Button dark secondary />);
    const button = wrapper.find("button");
    expect(button).toHaveStyleRule("background", "#FFFFFF");
    expect(button).toHaveStyleRule("color", "#212425");
  });
});
