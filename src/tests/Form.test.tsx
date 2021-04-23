import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Form } from "../components";
Enzyme.configure({ adapter: new Adapter() });

const formProps = {
  onSubmit: jest.fn(),
};

describe("Form test suite", () => {
  it("should define DialogueBox", () => {
    const wrapper = mount(<Form {...formProps} />);
    expect(wrapper).toBeDefined();
  });

  it("should submit the typed info", () => {
    const wrapper = mount(<Form {...formProps} />);
    wrapper
      .find("#outlined-required-email")
      .last()
      .simulate("change", { target: { value: "sai@gmail.com" } });
    wrapper
      .find("#outlined-number")
      .last()
      .simulate("change", { target: { value: 123456 } });
    wrapper
      .find("#outlined-required-name")
      .last()
      .simulate("change", { target: { value: "sai ram" } });
    wrapper
      .find("#outlined-required-uid")
      .last()
      .simulate("change", { target: { value: "sairam" } });
    wrapper.find("#form-save-button").first().simulate("click");
    expect(formProps.onSubmit).toHaveBeenCalled();
  });

  it("should submit the default Info", () => {
    const wrapper = mount(
      <Form
        {...{
          ...formProps,
          name: "sai ram",
          email: "sai@gmail.com",
          userId: "sairam",
          phoneNumber: 123456789,
        }}
      />
    );
    wrapper.find("#form-save-button").first().simulate("click");
    expect(formProps.onSubmit).toHaveBeenCalled();
  });
});
