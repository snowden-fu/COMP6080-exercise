import React from "react";
import { shallow } from "enzyme";
import { Cart } from "./Cart";

describe("Cart component", () => {
  const items = {
    "Glow in the dark bike 3": 10,
  };

  it("displays the title of an item in the cart", () => {
    const wrapper = shallow(<Cart items={items} onRemoveFromCart={() => {}} />);
    expect(wrapper.find(".cart-title").text()).toEqual(
      "Glow in the dark bike 3"
    );
  });

  it("displays the quantity of an item in the cart", () => {
    const wrapper = shallow(<Cart items={items} onRemoveFromCart={() => {}} />);
    expect(wrapper.find(".cart-quantity").text()).toEqual("10");
  });

  it("removes an item from the cart", () => {
    const wrapper = shallow(
      <Cart
        items={items}
        onRemoveFromCart={() => {
          delete items["Glow in the dark bike 3"];
        }}
      />
    );

    wrapper.find(".remove.cart-button").simulate("click");
    expect(items).toEqual({});
  });
});
