import * as types from "../constants/actionTypes";
import reducer from "./pagesReducer";
import initialState from "./initialState";
import { pagesMock } from "../../tools/pageMocks";
const { pages } = initialState;
const { work } = pagesMock;

describe("Pages Reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(pages);
  });

  it("should handle RECEIVE_POSTS action", () => {
    const pageSuccess = {
      type: types.RECEIVE_POSTS,
      payload: work,
      page: "work"
    };
    expect(reducer(pages, pageSuccess)).toEqual(pagesMock);
  });
});
