import React, { Component } from "react";

import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";
import Aux from "../../hoc/Auxiliary/Auxiliary";

const burger = (props) => {
	console.log(props.ingredients);
	let transformIngredients = Object.keys(props.ingredients)
		.map((igkey) => {
			return [...Array(props.ingredients[igkey])].map((_, index) => {
				return <BurgerIngredient key={igkey + index} type={igkey} />;
			});
		})
		.reduce((arr, element) => {
			return arr.concat(element);
		}, []);

	if (transformIngredients.length === 0) {
		transformIngredients = <div>Please add ingredients to purchase.</div>;
	}
	return (
		<div className={styles.Burger}>
			<BurgerIngredient type="bread-top" />
			{transformIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default burger;
