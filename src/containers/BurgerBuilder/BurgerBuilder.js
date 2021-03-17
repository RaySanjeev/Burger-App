import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Aux from "../../hoc/Auxiliary/Auxiliary";

const ingredientsPrice = {
	salad: 10,
	bacon: 30,
	cheese: 20,
	meat: 15,
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 10,
		purchasable: false,
	};

	purchasable = (ingredients) => {
		const totalSum = Object.keys(ingredients)
			.map((ingKey) => {
				return ingredients[ingKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);

		this.setState({ purchasable: totalSum > 0 });
	};

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;

		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = updatedCount;

		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + ingredientsPrice[type];

		this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
	};

	removeIngredientsHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;

		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = updatedCount;
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - ingredientsPrice[type];
		this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
	};

	render() {
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					addIngredient={this.addIngredientHandler}
					removeIngredient={this.removeIngredientsHandler}
					price={this.state.totalPrice}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
