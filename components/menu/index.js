import React from 'react';
import Link from 'next/link'
import style from './style.scss';

const menu = props => {
	return (
        <nav className={style.menu}>
            <ul className={style.menuList}>
                <li className={style.menuListItem}>
                    <Link as={'/'} href={'/'}>
                        <a className={style.active}>Model R</a>
                    </Link>
                </li>

                <li className={style.menuListItem}>
                    <Link as={'/'} href={'/'}>
                        <a >Model IQ</a>
                    </Link>
                </li>

                <li className={style.menuListItem}>
                    <Link as={'/'} href={'/'}>
                        <a >Model Mobi</a>
                    </Link>
                </li>

                <li className={style.menuListItem}>
                    <Link as={'/'} href={'/'}>
                        <a >Model Charlie</a>
                    </Link>
                </li>

                <li className={style.menuListItem}>
                    <Link as={'/'} href={'/'}>
                        <a >Model Italy</a>
                    </Link>
                </li>

            </ul>
        </nav>
	);
};

export default menu;

