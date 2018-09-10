import React from 'react';
import style from './style.scss';

const menu = props => {
	return (
        <nav className={style.menu}>
            <ul className={style.menuList}>
                <li className={style.menuListItem}>
                    <a href="#" className={style.active}>Model R</a>
                </li>

                <li className={style.menuListItem}>
                    <a href="#">Model IQ</a>
                </li>

                <li className={style.menuListItem}>
                    <a href="#">Model Mobi</a>
                </li>

                <li className={style.menuListItem}>
                    <a href="#">Model Charlie</a>
                </li>

                <li className={style.menuListItem}>
                    <a href="#">Model Italy</a>
                </li>

            </ul>
        </nav>
	);
};

export default menu;

