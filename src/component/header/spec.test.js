import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAtrr } from "../../utills";

/* 
//Bad Way

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

// Lets use the refactored way 
*/
/* it's needed in every test, so we will save it somewhere public like Utills

const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
*/

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("header component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("should render witout errors", () => {
    const wrapper = findByTestAtrr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const logo = findByTestAtrr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
