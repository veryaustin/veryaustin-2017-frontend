import React from "react";
import { shallow } from "enzyme";
import Banner from "./Banner";

describe("Banner Component", () => {
  // Component Tests
  let wrapper;
  it("renders the banner", () => {
    wrapper = shallow(<Banner title={"Test Title"} />);
    const banner = wrapper.find("header");
    expect(banner).toExist;
  });
});
