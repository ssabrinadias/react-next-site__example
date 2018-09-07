import React from 'react';
import style from './style.scss';
import logo from '../../static/images/RV-logo.svg'

const teste = props => {
	console.log(logo)
	return (
        <header><img src={logo} alt='logo Red Ventures'/></header>
	);
};

export default teste;
