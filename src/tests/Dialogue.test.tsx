import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Dialogue } from "../components";
Enzyme.configure({ adapter: new Adapter() });

const dialogueProps = {
  open: false,
  onSubmit: jest.fn(),
  onClose: jest.fn(),
  onClickXMark: jest.fn(),
};

describe("DialogueBox test suite", () => {
  it("should define DialogueBox", () => {
    const wrapper = mount(<Dialogue {...dialogueProps} />);
    expect(wrapper).toBeDefined();
  });
  it("should have Form", () => {
    const wrapper = mount(<Dialogue {...{ ...dialogueProps, open: true }} />);
    expect(wrapper).toBeDefined();
    wrapper.update();
    expect(wrapper.find("Form")).toBeDefined();
  });
  it("should call submit function on click of submit", () => {
    const wrapper = mount(
      <Dialogue
        {...{ ...dialogueProps, open: true, onClickXMark: undefined }}
      />
    );
    wrapper.update();
    expect(wrapper.find("Form")).toBeDefined();
    wrapper.find("#form-save-button").first().simulate("click");
    expect(dialogueProps.onSubmit).toHaveBeenCalled();
  });
});
