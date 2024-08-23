import React, { Component } from "react";
import Item from "./Item";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    // Step 1: Initialize state in the constructor
    this.state = {
      selectedCategory: "All",
    };
  }

  // Step 2: Convert the event handler to a class method
  handleCategoryChange = (event) => {
    this.setState({ selectedCategory: event.target.value });
  };

  render() {
    const { items } = this.props;
    const { selectedCategory } = this.state;

    // Step 3: Filter the items based on the selected category
    const itemsToDisplay = items.filter((item) => {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
    });

    return (
      <div className="ShoppingList">
        <div className="Filter">
          <select name="filter" onChange={this.handleCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <ul className="Items">
          {itemsToDisplay.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
