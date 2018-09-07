import React from 'react';
import style from './style.scss';

const teste = props => {
	return (
		<div className={style.cores}>
			{props.children}
		</div>
	);
};

export default teste;
