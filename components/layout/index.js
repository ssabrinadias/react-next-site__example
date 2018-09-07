import React from 'react';
import Header from '../header'
import Menu from '../menu'
import style from './style.scss';

const teste = props => {
	return (
		<div>
			<div className={style.top}>
				<Header/>
				<Menu/>
			</div>
			
			{props.children}
		</div>
	);
};

export default teste;
