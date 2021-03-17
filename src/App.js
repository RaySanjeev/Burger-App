import React, { Component } from "react";

// import "./App.css";
import styles from "./App.module.css";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
	render() {
		return (
			<div className={styles.layout}>
				<Layout>
					<BurgerBuilder />
				</Layout>
			</div>
		);
	}
}

export default App;
