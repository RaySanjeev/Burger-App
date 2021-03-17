import React, { Component } from "react";

import Aux from "../Auxiliary/Auxiliary";
import styles from "./layout.module.css";

class Layout extends Component {
	render() {
		return (
			<Aux>
				<div>navigation</div>
				<main className={styles.main}>{this.props.children}</main>
			</Aux>
		);
	}
}

export default Layout;
