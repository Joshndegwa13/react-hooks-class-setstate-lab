import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    // Step 1: Initialize state in the constructor
    this.state = {
      isInCart: false,
    };
  }

  // Step 2: Convert the event handler to a class method
  handleAddToCartClick = () => {
    this.setState((prevState) => ({
      isInCart: !prevState.isInCart,
    }));
  };

  render() {
    const { name, category } = this.props;
    const { isInCart } = this.state;

    return (
      <li className={isInCart ? "in-cart" : ""}>
        <span>{name}</span>
        <span className="category">{category}</span>
        <button
          className={isInCart ? "remove" : "add"}
          onClick={this.handleAddToCartClick}
        >
          {isInCart ? "Remove From" : "Add to"} Cart
        </button>
      </li>
    );
  }
}

export default Item;
