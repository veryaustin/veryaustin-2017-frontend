import * as types from "../constants/actionTypes";
import reducer from "./fetchReducer";
import initialState from "./initialState";
const { fetching } = initialState;

describe("Fetch Reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(fetching);
  });

  it("should handle FETCH_PAGE_BEGIN", () => {
    expect(
      reducer(fetching, {
        type: types.FETCH_PAGE_BEGIN,
        payload: true
      })
    ).toEqual({
      isLoading: true,
      error: null
    });
  });

  it("should handle FETCH_PAGE_SUCCESS", () => {
    expect(
      reducer(
        {
          isLoading: true,
          error: null
        },
        {
          type: types.FETCH_PAGE_SUCCESS,
          payload: false
        }
      )
    ).toEqual({
      isLoading: false,
      error: null
    });
  });

  it("should handle FETCH_PAGE_ERROR", () => {
    expect(
      reducer(
        {
          isLoading: true,
          error: null
        },
        {
          type: types.FETCH_PAGE_ERROR,
          payload: {
            isLoading: false,
            error: "This is an error"
          }
        }
      )
    ).toEqual({
      isLoading: false,
      error: "This is an error"
    });
  });
});
