import React, { Component } from 'react';

export default class CategoryDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
              {name: "entres"},
              {name: "mains"}
            ],
        };
    }

    componentDidMount() {
      console.log("in component")
      let initialCategories = [];
      fetch('/category/all')
        .then(response => {
          console.log(response.json())
          return response.json();
        }).then(data => {
          initialCategories = data.results.map((category) => {
            return category
          });
          console.log(initialCategories);
        this.setState({
        categories: initialCategories,
        });
      });
  }

  render () {
    console.log(this.state)
    let categories = this.state.categories;
    let optionItems = categories.map((category) =>
      <option key={category.name}>{category.name}</option>
    );

    return (
     <div>
        <select>
          {optionItems}
        </select>
     </div>
    )
  }
}
