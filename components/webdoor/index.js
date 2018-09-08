import React from 'react';
import carHome from '../../static/images/car-home.png'
import Container from '../container'
import style from './style.scss';

const layout = props => {
	return (
		<section className={style.content}>
            <Container>
                <div className={style.contentAuxiliar}>
                    <div className={style.info}>
                        <span className={style.description}>Build your</span>
                        <h1 className={style.title}>MODEL <span>R</span></h1>
                    </div>
                    
                    <div className={style.car}>
                        <img src={carHome} alt="Model R "/>
                    </div>
                </div>
            </Container>
		</section>
	);
};

export default layout;
