import React from "react";
import { shallow } from "enzyme";
import GridItem from "./GridItem";
import toJson from "enzyme-to-json";

describe("GridItem Component", () => {
  // Component Tests
  let wrapper;
  beforeEach(() => {
    const sampleItem = {
      site_url: "http://example.com",
      background_color: "#119f4d",
      logo_url: "http://example.com/test.svg"
    };
    wrapper = shallow(<GridItem gridItem={sampleItem} />);
  });

  it("renders the gridItem with site link, background color & logo", () => {
    const gridItem = wrapper.find("styled.div");
    const link = wrapper.find("a[href='http://example.com/']");
    expect(gridItem).toExist;
    expect(link).toExist;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
