import React from 'react';
import Container from '../container'
import Button from '../button';
import style from './style.scss';

const summary = ({steps, total}) => {
    
    const items = (steps) => {
        let stored = Object.keys(steps);
        let item = {
            car: <li className={style.hiddenSmall} key={1}>{(steps.car || {}).name}</li>,
            engine: <li className={style.hiddenSmall} key={2}>{(steps.engine || {}).kwh}<span>{(steps.engine || {}).type}</span></li>,
            color: <li className={style.hiddenSmall} key={3}>{(steps.color || {}).kwh}</li>,
            wheels: <li className={style.hiddenSmall} key={4}>{(steps.wheels || {}).kwh}</li>
        }
        return Object.keys(item)
            .filter((item) =>(stored.indexOf(item)>=0))
            .map((el) => {
                return item[el]
            })

    }
	return (
        <footer className={style.summary}>
            <Container>
                <ul className={style.summaryList}> 
                    <li>Total<span>${total}</span></li>
                    {items(steps)}
                    <li>
                        <Button
                            class= 'button'
                            mask = '/build/color'
                            link = '/build?step=color'
                            status = 'start'
                            text = 'next'
                        />
                    </li>
                </ul>
            </Container>
        </footer>
	);
};

export default summary;
