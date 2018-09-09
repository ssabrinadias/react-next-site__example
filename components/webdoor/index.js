import React from 'react';
import carHome from '../../static/images/car-home.png'
import Link from 'next/link'
import Container from '../container'
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

                    <div className={style.btnStart}>
                        <Link as={`/build/engine`} href={`/build?step=engine`}>
                            <a>Begin</a>
                        </Link>
                    </div>

                </div>

            </Container>
            
		</section>
	);
};

export default layout;
