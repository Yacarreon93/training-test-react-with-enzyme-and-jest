import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import Form from "./Form";
import api from "./api";

// opted in by default
// actually input their information
// submits the form, calls api
// matches snapshot

configure({ adapter: new Adapter() });

const updateInput = (wrapper, instance, newValue) => {
  const input = wrapper.find(instance);

  input.simulate("change", { currentTarget: { value: newValue } });

  return wrapper.find(instance);
};

describe("<Form />", () => {
  test("receive promotions default is true", () => {
    const wrapper = shallow(<Form />);
    const promotionInput = wrapper.find('[data-testid="optIn"]');

    expect(promotionInput.props().checked).toBe(true);
  });

  test("allows user to fill the form", () => {
    const wrapper = shallow(<Form />);
    const nameInput = updateInput(wrapper, '[data-testid="name"]', "Yasser");
    const emailInput = updateInput(
      wrapper,
      '[data-testid="email"]',
      "test@test.com"
    );
    const phoneInput = updateInput(
      wrapper,
      '[data-testid="phone"]',
      "1234567890"
    );
    wrapper.find('[type="checkbox"]').simulate("click");

    expect(nameInput.props().value).toBe("Yasser");
    expect(emailInput.props().value).toBe("test@test.com");
    expect(phoneInput.props().value).toBe("1234567890");
    expect(wrapper.find('[type="checkbox"]').props().checked).toBe(false);
  });

  test("submits the form", () => {
    jest
      .spyOn(api, "addUser")
      .mockImplementation(() => Promise.resolve({ data: "new user added" }));

    const wrapper = shallow(<Form />);
    updateInput(wrapper, '[data-testid="name"]', "Yasser");
    updateInput(wrapper, '[data-testid="email"]', "test@test.com");
    updateInput(wrapper, '[data-testid="phone"]', "1234567890");
    wrapper.find('[data-testid="addUserForm"]').simulate("submit", { preventDefault: () => {} });

    expect(api.addUser).toHaveBeenCalledWith(
      "Yasser",
      "test@test.com",
      "1234567890",
      true
    );
  });

  test("matches snapshot", () => {
    const wrapper = shallow(<Form />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
