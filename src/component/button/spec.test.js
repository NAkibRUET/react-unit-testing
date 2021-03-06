import React from "react";
import { findByTestAtrr, checkProps } from "../../utills";
import ButtonComponent from "./index";
import { shallow } from "enzyme";

describe("Button Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw an warning", () => {
      const expectedProps = {
        buttonText: "Example Text",
        emitEvent: () => {},
      };
      const propError = checkProps(ButtonComponent, expectedProps);
      expect(propError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "Example Text",
        emitEvent: mockFunc,
      };
      wrapper = shallow(<ButtonComponent {...props} />);
    });
    it("Should Render a button", () => {
      const button = findByTestAtrr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });

    it("Should emit callback on click event", () => {
      const button = findByTestAtrr(wrapper, "buttonComponent");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
