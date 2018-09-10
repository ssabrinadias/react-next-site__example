import React from 'react';
import Container from '../container'
import style from './style.scss';

const summary = ({steps}) => {
    
    const items = (steps) => {
        let stored = Object.keys(steps);
        let item = {
            model: <li className={style.hiddenSmall} key='model'>{(steps.model || {})}</li>,
            engine: <li className={style.hiddenSmall} key='engine'>{(steps.engine || {}).kwh}<span>{(steps.engine || {}).type}</span></li>,
            color: <li className={style.hiddenSmall} key='color' >{(steps.color || {}).kwh}</li>,
            wheels: <li className={style.hiddenSmall} key='wheels'>{(steps.wheels || {}).kwh}</li>
        }
        return Object.keys(item)
            .filter((item) =>(stored.indexOf(item)>=0))
            .map((el)=>{
                return item[el]
            })

    }
	return (
        <footer className={style.summary}>
            <Container>
                <ul className={style.summaryList}> 
                    {items(steps)}
                </ul>
            </Container>
        </footer>
	);
};

export default summary;
