import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

describe("Header Component", () => {
  it("It should render without errors", () => {
    const component = shallow(<Header />);
    //console.log(component.debug());
    const wrapper = component.find(".headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("It should render logo without errors", () => {
    const component = shallow(<Header />);
    //console.log(component.debug());
    const wrapper = component.find(".logo");
    expect(wrapper.length).toBe(1);
  });
});
