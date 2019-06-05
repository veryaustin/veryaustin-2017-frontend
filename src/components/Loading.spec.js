import React from "react";
import { mount } from "enzyme";
import Loading from "./Loading";

describe("Loading Component", () => {
  it("should render", () => {
    const wrapper = mount(<Loading />);
    const loading = wrapper.find(Loading);
    expect(loading).toExist;
    expect(loading.text()).toBe("Loading...");
  });
});
