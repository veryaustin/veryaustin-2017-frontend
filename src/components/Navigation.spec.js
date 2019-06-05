import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Navigation from "./Navigation";

describe("Navigation Component", () => {
  // Component Tests
  it("renders the navigation component", () => {
    const wrapper = shallow(<Navigation />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("Hamburger Navigation", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Navigation />);
    });

    it("should call `onClick` with hamburger menu open menu", () => {
      // Expect initial state to be false
      const before = wrapper.find("[navToggled=true]").length;
      expect(before).toBe(0);
      // Simulate Button Click
      const button = wrapper.find("MenuButton");
      button.simulate("click");
      // Expect navToggle state to be true
      const after = wrapper.find("[navToggled=true]").length;
      expect(after).toEqual(1);
    });

    it("should call `onClick with hamburger menu to close menu`", () => {
      // Expect initial state to be true
      wrapper.setState({ navToggled: true });
      const before = wrapper.find("[navToggled=true]").length;
      expect(before).toBe(1);
      // Simulate Button Click
      const button = wrapper.find("MenuButton");
      button.simulate("click");
      // Expect navToggle state to be false
      const after = wrapper.find("[navToggled=false]").length;
      expect(after).toEqual(1);
    });
  });

  describe("Links", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Navigation />);
      // For each link test set the navToggle state to true
      wrapper.setState({ navToggled: true });
    });

    it('navigates to the "home" page', () => {
      const link = wrapper.find("Styled(IndexLink)");
      expect(link.props().to).toBe("/");
    });

    it('hides navigation when clicking the "home" link', () => {
      // Expect initial state to be true
      const before = wrapper.find("[navToggled=true]").length;
      expect(before).toBe(1);
      // Simulate Link Click
      const link = wrapper.find({ to: "/" }).at(1);
      link.simulate("click");
      // Expect navToggle state to be false
      const after = wrapper.find("[navToggled=true]").length;
      expect(after).toBe(0);
    });

    it('navigates to the "work" page', () => {
      const link = wrapper.find({ to: "work" });
      expect(link).toExist;
    });

    it('hides navigation when clicking the "work" link', () => {
      // Expect initial state to be true
      const before = wrapper.find("[navToggled=true]").length;
      expect(before).toBe(1);
      // Simulate Link Click
      const link = wrapper.find({ to: "work" });
      link.simulate("click");
      // Expect navToggle state to be false
      const after = wrapper.find("[navToggled=true]").length;
      expect(after).toBe(0);
    });

    it('navigates to the "about" page', () => {
      const link = wrapper.find({ to: "about" });
      expect(link).toExist;
    });

    it('hides navigation when clicking the "about" link', () => {
      // Expect initial state to be true
      const before = wrapper.find("[navToggled=true]").length;
      expect(before).toBe(1);
      // Simulate Link Click
      const link = wrapper.find({ to: "about" });
      link.simulate("click");
      // Expect navToggle state to be false
      const after = wrapper.find("[navToggled=true]").length;
      expect(after).toBe(0);
    });

    it('navigates to the external "writing" page', () => {
      const link = wrapper.find({ href: "http://writing.veryaustin.com" });
      expect(link).toExist;
    });

    it('navigates to the "contact" page', () => {
      const link = wrapper.find({ to: "contact" });
      expect(link).toExist;
    });

    it('hides navigation when clicking the "contact" link', () => {
      // Expect initial state to be true
      const before = wrapper.find("[navToggled=true]").length;
      expect(before).toBe(1);
      // Simulate Link Click
      const link = wrapper.find({ to: "contact" });
      link.simulate("click");
      // Expect navToggle state to be false
      const after = wrapper.find("[navToggled=true]").length;
      expect(after).toBe(0);
    });
  });
});
