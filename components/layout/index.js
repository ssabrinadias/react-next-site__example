import React from 'react';
import style from './style.scss';
import logo from '../../static/images/RV-logo.svg'

const teste = props => {
	console.log(logo)
	return (
		<section className={style.teste}>
		<img src={logo} />
		</section>
	);
};

export default teste;
