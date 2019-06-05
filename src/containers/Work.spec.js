import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import Work from "./Work";

describe("Work Component", () => {
  let middlewares, mockStore, store;
  beforeEach(() => {
    middlewares = [];
    mockStore = configureStore(middlewares);
  });

  it("renders the work component", () => {
    store = mockStore({
      pages: {
        work: {}
      },
      fetching: {
        isLoading: false,
        error: null
      }
    });
    const wrapper = shallow(<Work store={store} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the loading component when loading", () => {
    store = mockStore({
      pages: {
        work: {}
      },
      fetching: {
        isLoading: true,
        error: null
      }
    });
    const wrapper = shallow(<Work store={store} />);
    const loading = wrapper.find("Loading />");
    expect(loading).toExist;
  });
});
