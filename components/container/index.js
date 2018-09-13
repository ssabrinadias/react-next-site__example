import React from "react";
import style from "./style.scss";

const container = props => {
	return <div className={style.container}>{props.children}</div>;
};

export default container;
