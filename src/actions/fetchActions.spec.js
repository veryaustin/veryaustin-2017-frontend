import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { pagesMock } from "../../tools/pageMocks";
import * as actions from "./fetchActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("FetchPage action", () => {
  const store = mockStore({});
  const mockSuccess = data => ({ status: 200, response: data });
  const mockError = error => ({ status: 500, message: error });
  let response;

  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("dispatches FETCH_PAGE_BEGIN to start fetching page", () => {
    response = pagesMock.work;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess(response));
    });

    const expected = actions.fetchPageBegin();

    return store.dispatch(actions.fetchPage("work")).then(() => {
      const actual = store.getActions()[0];
      expect(actual).toEqual(expected);
    });
  });

  it("dispatches FETCH_PAGE_SUCCESS after successfully fetching page", () => {
    response = pagesMock.work;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess(response));
    });

    const expected = actions.fetchPageSuccess();

    return store.dispatch(actions.fetchPage("work")).then(() => {
      const actual = store.getActions()[1];
      expect(actual).toEqual(expected);
    });
  });

  it("dispatches RECEIVE_POSTS after successfully fetching page", () => {
    response = pagesMock.work;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess(response));
    });

    const expected = actions.receivePageData("work", response);

    return store.dispatch(actions.fetchPage("work")).then(() => {
      const actual = store.getActions()[2];
      expect(actual).toEqual(expected);
    });
  });

  it("dispatches FETCH_PAGE_BEGIN, FETCH_PAGE_SUCCESS & RECEIVE_POSTS after successfully fetching page", () => {
    response = pagesMock.work;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess(response));
    });

    const expected = [
      actions.fetchPageBegin(),
      actions.fetchPageSuccess(),

      actions.receivePageData("work", response)
    ];

    return store.dispatch(actions.fetchPage("work")).then(() => {
      const actual = store.getActions();
      expect(actual).toEqual(expected);
    });
  });

  it("dispatches FETCH_PAGE_ERROR after failure to fetch page", () => {
    response = "Oops, an error happened";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject(mockError(response));
    });

    const expected = [
      actions.fetchPageBegin(),
      actions.fetchPageError(mockError(response))
    ];

    return store.dispatch(actions.fetchPage("error")).then(() => {
      const actual = store.getActions();
      expect(actual).toEqual(expected);
    });
  });
});
