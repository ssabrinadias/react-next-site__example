import React from "react";
import style from "./style.scss";
import logo from "../../static/images/RV-logo.svg";
import Link from "next/link";

const teste = props => {
	return (
		<header>
			<Link as={"/"} href={"/"}>
				<a>
					<img src={logo} alt="logo Red Ventures" />
				</a>
			</Link>
		</header>
	);
};

export default teste;
