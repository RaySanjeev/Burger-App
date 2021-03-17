import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import styles from "./BuildControls.module.css";

const control = [
	{ label: "Salad", type: "salad" },
	{ label: "Bacon", type: "bacon" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Meat", type: "meat" },
];

const BuildControls = (props) => (
	<div className={styles.BuildControls}>
		<p>
			Current Price: <strong>{props.price}</strong>
		</p>
		{control.map((ctrl) => (
			<BuildControl
				key={ctrl.label}
				label={ctrl.label}
				addIng={() => props.addIngredient(ctrl.type)}
				removeIng={() => props.removeIngredient(ctrl.type)}
			/>
		))}
		<button>ORDER NOW</button>
	</div>
);

export default BuildControls;
