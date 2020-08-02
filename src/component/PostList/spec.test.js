import React from "react";
import { findByTestAtrr, checkProps } from "../../utills";
import PostList from "./index";
import { shallow } from "enzyme";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw an warning", () => {
      const expectedProps = {
        title: "Example Text",
        desc: "Example description",
      };
      const propError = checkProps(PostList, expectedProps);
      expect(propError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example Text",
        desc: "example desc",
      };
      wrapper = shallow(<PostList {...props} />);
    });
    it("Should Render a list", () => {
      const list = findByTestAtrr(wrapper, "PostList");
      expect(list.length).toBe(1);
    });
    it("Should Render a title", () => {
      const title = findByTestAtrr(wrapper, "PostTitle");
      expect(title.length).toBe(1);
    });
    it("Should Render a desc", () => {
      const desc = findByTestAtrr(wrapper, "PostDesc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Should NOT render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Some text",
      };
      wrapper = shallow(<PostList {...props} />);
    });

    it("Component is not rendered", () => {
      const component = findByTestAtrr(wrapper, "PostList");
      expect(component.length).toBe(0);
    });
  });
});
