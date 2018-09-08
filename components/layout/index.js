import React from 'react';
import Header from '../header'
import Container from '../container'
import Menu from '../menu'
import style from './style.scss';

const layout = props => {
	return (
		<div>
			<Container>
				<div className={style.layoutTop}>
					<Header/>
					<Menu/>
				</div>
			</Container>
			{props.children}
		</div>
	);
};

export default layout;
