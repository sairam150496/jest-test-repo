import App from "../App";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("Application test case", () => {
  it("should render the App with table and options to perform CRUD", () => {
    const wrapper = mount(<App />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find("TableComponent").props().rows).toMatchObject(
      new Map()
    );
  });

  it("should open Model popup on click of add button", () => {
    const wrapper = mount(<App />);
    wrapper.find(`[data-add-btn="add-button"]`).first().simulate("click");
    expect(wrapper.find("Dialogue").props().open).toBeTruthy();
  });

  it("should Should remove an element on deleting", () => {
    const wrapper = mount(<App />);
    wrapper.find(`[data-add-btn="add-button"]`).first().simulate("click");
    expect(wrapper.find("Dialogue").props().open).toBeTruthy();
    wrapper.update();
    wrapper.find("button#form-save-button").first().simulate("click");
    expect(wrapper.find("Dialogue").props().open).toBeFalsy();
    wrapper.update();
    wrapper.find(`[data-idx="delete-0"]`).first().simulate("click");
    wrapper.update();
    expect(wrapper.find("TableComponent").props().rows).toMatchObject(
      new Map()
    );
  });

  it("should Should remove an element on deleting on click of inner icon", () => {
    const wrapper = mount(<App />);
    wrapper.find(`[data-add-btn="add-button"]`).first().simulate("click");
    expect(wrapper.find("Dialogue").props().open).toBeTruthy();
    wrapper.update();
    wrapper.find("button#form-save-button").first().simulate("click");
    expect(wrapper.find("Dialogue").props().open).toBeFalsy();
    wrapper.update();
    wrapper
      .find(`[data-idx="delete-0"]`)
      .first()
      .simulate("click", {
        target: {
          id: "",
          parentElement: {
            id: "12345",
          },
        },
      });
  });

  it("should close the dialogue on click of X mark", () => {
    const wrapper = mount(<App />);
    wrapper.find(`[data-add-btn="add-button"]`).first().simulate("click");
    expect(wrapper.find("Dialogue").props().open).toBeTruthy();
    wrapper.update();
    wrapper.find("#close-icon").first().simulate("click");
    expect(wrapper.find("Dialogue").props().open).toBeFalsy();
    wrapper.update();
    expect(wrapper.find("TableComponent").props().rows).toMatchObject(
      new Map()
    );
  });

  it("edit the info on click of edit", () => {
    const wrapper = mount(<App />);
    wrapper.find(`[data-add-btn="add-button"]`).first().simulate("click");
    expect(wrapper.find("Dialogue").props().open).toBeTruthy();
    wrapper.update();
    wrapper.find("button#form-save-button").first().simulate("click");
    expect(wrapper.find("Dialogue").props().open).toBeFalsy();
    wrapper.update();
    wrapper.find(`[data-idx="edit-0"]`).first().simulate("click");
    wrapper.update();
    wrapper
      .find("#outlined-required-email")
      .first()
      .simulate("change", { target: { value: "sai@gmail.com" } });
    wrapper.update();
    wrapper.find("button#form-save-button").first().simulate("click");
  });

  it("edit the info on click of edit on click of inner icon", () => {
    const wrapper = mount(<App />);
    wrapper.find(`[data-add-btn="add-button"]`).first().simulate("click");
    expect(wrapper.find("Dialogue").props().open).toBeTruthy();
    wrapper.update();
    wrapper.find("button#form-save-button").first().simulate("click");
    expect(wrapper.find("Dialogue").props().open).toBeFalsy();
    wrapper.update();
    wrapper
      .find(`[data-idx="edit-0"]`)
      .first()
      .simulate("click", {
        target: {
          id: "",
          parentElement: {
            id: "12345",
          },
        },
      });
  });
});
