import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { TableComponent } from "../components";

Enzyme.configure({ adapter: new Adapter() });

const tableProps = {
  rows: new Map(),
  onDeleteClick: jest.fn(),
  onEditClick: jest.fn(),
  onAddClick: jest.fn(),
};

describe("TableComponent test suite", () => {
  it("should define TableComponent", () => {
    const wrapper = mount(<TableComponent {...tableProps} />);
    expect(wrapper).toBeDefined();
  });
  it("should render the items to the table", () => {
    const wrapper = mount(
      <TableComponent
        {...{
          ...tableProps,
          rows: new Map().set("1234", {
            name: "sai ram",
            email: "email@email.com",
            phoneNumber: 123456,
            userId: "sairam",
          }),
        }}
      />
    );
    expect(wrapper.find("TableComponent").props().rows).toBeDefined();
    expect(wrapper.find("[data-idx='delete-0']")).toBeDefined();
  });
  it("should call props.delete fn", () => {
    const wrapper = mount(
      <TableComponent
        {...{
          ...tableProps,
          rows: new Map().set("1234", {
            name: "sai ram",
            email: "email@email.com",
            phoneNumber: 123456,
            userId: "sairam",
          }),
        }}
      />
    );
    expect(wrapper.find("TableComponent").props().rows).toBeDefined();
    expect(wrapper.find("[data-idx='delete-0']")).toBeDefined();
    wrapper.find("[data-idx='delete-0']").first().simulate("click");
    expect(tableProps.onDeleteClick).toHaveBeenCalled();
  });
  it("should call props.edit fn", () => {
    const wrapper = mount(
      <TableComponent
        {...{
          ...tableProps,
          rows: new Map().set("1234", {
            name: "sai ram",
            email: "email@email.com",
            phoneNumber: 123456,
            userId: "sairam",
          }),
        }}
      />
    );
    expect(wrapper.find("TableComponent").props().rows).toBeDefined();
    expect(wrapper.find("[data-idx='edit-0']")).toBeDefined();
    wrapper.find("[data-idx='edit-0']").first().simulate("click");
    expect(tableProps.onEditClick).toHaveBeenCalled();
  });
  it("should call props.add fn", () => {
    const wrapper = mount(<TableComponent {...tableProps} />);
    expect(wrapper.find("TableComponent").props().rows).toBeDefined();
    expect(wrapper.find("[data-add-btn='add-button']")).toBeDefined();
    wrapper.find("[data-add-btn='add-button']").first().simulate("click");
    expect(tableProps.onAddClick).toHaveBeenCalled();
  });
});
