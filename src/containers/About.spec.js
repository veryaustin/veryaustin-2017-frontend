import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import About from "./About";
// import initialState from "../reducers/initialState";

describe("About Component", () => {
  let middlewares, mockStore, store;
  beforeEach(() => {
    middlewares = [];
    mockStore = configureStore(middlewares);
  });

  it("renders the about component", () => {
    store = mockStore({
      pages: {
        about: {}
      },
      fetching: {
        isLoading: false,
        error: null
      }
    });
    const wrapper = shallow(<About store={store} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the loading component when loading", () => {
    store = mockStore({
      pages: {
        about: {}
      },
      fetching: {
        isLoading: true,
        error: null
      }
    });
    const wrapper = shallow(<About store={store} />);
    const loading = wrapper.find("Loading />");
    expect(loading).toExist;
  });
});
