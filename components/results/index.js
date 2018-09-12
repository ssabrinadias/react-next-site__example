import React from 'react';
import { connect } from 'react-redux';
import Button from '../button';
import currencyformat from '../currencyformat'
import style from './style.scss';

const getSelected = ({items,id})=>(
	Object.keys(items)
	.filter(item => (items[item].id === id))
	.map(res=>{
		return items[res]
	})
)

const setPrice = (price)=>(
	price ? `+ $ ${currencyformat(price)}`: 'included'
)

const Results = ({steps, results}) => {
	console.log(steps)
	return (
		<section className={style.result}>
			<div className={style.resultImage}>
				<img 
					src={getSelected({
						items: results.items,
						id: steps.color.id
					})
					.pop().image} 
					alt=''
				/>
				
			</div>
			<div className = {style.resultDescription}>
				<h1 className = {style.resultDescriptionTitle}>Your <span>Model </span><span>R</span></h1>
				<ul className = {style.resultDescriptionList}>
					<li>
						<div>Starting price</div>
						<div>${currencyformat(steps.car.price)}</div>
					</li>
					<li>
						<div>{steps.engine.kwh}{steps.engine.type} - {steps.engine.kwh}KWh - {steps.engine.range} miles range</div>
						<div>{setPrice(steps.engine.price)}</div>
					</li>
					<li>
						<div>{steps.color.label}</div>
						<div>{setPrice(steps.color.price)}</div>
					</li>
					<li>
						<div>{steps.wheels.label}</div>
						<div>{setPrice(steps.wheels.price)}</div>
					</li>
					
					<li>
						<div>Final Price</div>
						<div>$71.000</div>
					</li>
				</ul>
				<Button
					mask = {"/build/"}
					link = {"/build?step=engine"}
					status = 'btnRebuild'
					text = 'REBUILD'
				/>
			</div>
        </section>
	);
};


const mapStateToProps = ({choices:{steps}, general:{data:{results}}}) => ({steps, results});
// const mapStateToProps = (steps) => ({steps});

export default connect(mapStateToProps)(Results);