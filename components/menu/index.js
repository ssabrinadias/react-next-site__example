import React from 'react';
import style from './style.scss';

const menu = props => {
	return (
        <nav>
            <ul>
                <li><a href="#" className={style.active}>Model R</a></li>
                <li><a href="#">Model IQ</a></li>
                <li><a href="#">Model Mobi</a></li>
                <li><a href="#">Model Charlie</a></li>
                <li><a href="#">Model Italy</a></li>
            </ul>
        </nav>
	);
};

export default menu;

