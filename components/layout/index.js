import React from 'react';
import Header from '../header'
import Container from '../container'
import Menu from '../menu'
import style from './style.scss';

const teste = props => {
	return (
		<div>
			<Container>tessdsdfs</Container>
			<div className={style.top}>
				<Header/>
				<Menu/>
			</div>
			
			{props.children}
		</div>
	);
};

export default teste;
