import React from 'react';
import carHome from '../../static/images/car-home.png';
import Link from 'next/link';
import Container from '../container';
import Button from '../button';
import style from './style.scss';

const layout = props => {
	return (
		<section className={style.content}>

            <Container>

                <div className={style.contentAuxiliar}>

                    <div className={style.contentInfo}>
                        <span className={style.description}>Build your</span>
                        <h1 className={style.title}>MODEL <span>R</span></h1>
                    </div>
                    
                    <div className={style.contentCar}>
                        <img src={carHome} alt="Model R "/>
                    </div>

                    <Button
                        mask = '/build/engine'
                        link = '/build?step=engine'
                        status = 'start'
                        text = 'BEGIN'
                    />

                </div>

            </Container>
            
		</section>
	);
};

export default layout;
