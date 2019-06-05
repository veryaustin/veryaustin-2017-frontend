import React from "react";
import { shallow } from "enzyme";
import Section from "./Section";
import toJson from "enzyme-to-json";

describe("Section Component", () => {
  // Component Tests
  let wrapper;
  beforeEach(() => {
    const sampleSection = {
      title: "Test Title",
      caption: "This is a caption",
      description: "This is a description",
      image_url: "http://example.com/test.svg",
      primary_site_url: "http://example_primary_site.com/",
      secondary_site_url: "http://example_primary_site.com/",
      primary_site_button: "Primary Button",
      secondary_site_button: "Secondary Button",
      label: "This is a label",
      items: [{ name: "item1" }, { name: "item2" }, { name: "item3" }]
    };
    wrapper = shallow(<Section {...sampleSection} />);
  });

  it("renders the Section with passed props", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
