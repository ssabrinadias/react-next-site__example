import React from 'react';
import style from './style.scss';
import carHome from '../../static/images/car-home.png'
import Link from 'next/link'

const Button = ({mask, link, text, status}) => (
    <div className={[style.btn,].join(' ')}>
        <Link as={mask} href={link}>
            <a>{text}</a>
        </Link>
    </div>
)

export default Button