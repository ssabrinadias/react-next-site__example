import React from 'react';
import style from './style.scss';
import Container from '../container'

const teste = props => {
    const box = (label, mensure, description) => (
        <div className={style.infoRowBox}>
            <div>
                <strong className={style.infoRowLabel}>
                    {label}
                    <span className={style.measure}>{mensure}</span>
                </strong>
                <span className={style.infoRowDescription}>
                    {description}
                </span>
            </div>
        </div>
    )
	return (
        <section className={style.infoRow}>
            <Container>
                {box('2.5', 's', 'From 0 to 100')}
                {box('420', 'mi', 'Miles range')}
                {box('250', 'mp/h', 'Max speed')}
            </Container>
        </section>
	);
};

export default teste;
