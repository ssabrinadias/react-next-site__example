import React from 'react';
import style from './style.scss';
import carHome from '../../static/images/car-home.png'
import Link from 'next/link'

const Button = ({mask, link, text, status, classAdd}) => (
    <div className={[style.btn, style[status], style[classAdd]].join(' ')}>
        <Link as={mask} href={link}>
            <a>{text}</a>
        </Link>
    </div>
)

export default Button