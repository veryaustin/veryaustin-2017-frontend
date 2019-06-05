import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import Home from "./Home";

describe("Home Component", () => {
  let middlewares, mockStore, store;
  beforeEach(() => {
    middlewares = [];
    mockStore = configureStore(middlewares);
  });

  it("renders the home component", () => {
    store = mockStore({
      pages: {
        home: {}
      },
      fetching: {
        isLoading: false,
        error: null
      }
    });
    const wrapper = shallow(<Home store={store} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the loading component when loading", () => {
    store = mockStore({
      pages: {
        home: {}
      },
      fetching: {
        isLoading: true,
        error: null
      }
    });
    const wrapper = shallow(<Home store={store} />);
    const loading = wrapper.find("Loading />");
    expect(loading).toExist;
  });
});
