import moxios from "moxios";
import { testStore } from "../utills/index";
import { fetchPosts } from "../actions/index";

describe("fetchPosts action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    const expectedState = [
      {
        title: "Example title 1",
        desc: "Some Text",
      },
      {
        title: "Example title 2",
        desc: "Some Text",
      },
      {
        title: "Example title 3",
        desc: "Some Text",
      },
    ];
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.postReducer).toBe(expectedState);
    });
  });
});
