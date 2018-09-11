import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import style from './style.scss';
import {actionEngine} from './action';
import currencyformat from '../currencyformat'

class Engine extends React.Component {
	constructor(props) {
        super(props);
        const firstChoice = props.engines[Object.keys(props.engines)[0]];

        props.actionEngine(firstChoice)
        
        this.state = {
            image: firstChoice.image,
            selected : firstChoice.id,
        }
    }

    changeOption(e){
        let el = e.target;
        this.setState({
            image: el.value,
            selected: el.id
        })
        
        return (
            this.props.actionEngine(...this.props.engines.filter((item)=>(item.id == el.id)))
        )
    }

    engineOptions({id, image, kwh, range, type, price}){
        let activeInput = this.state.selected == id ? 'checked' : '';
        let activeClass = this.state.selected == id ? style.active: ''; 
        
        return(
            <li key={id} className={[style.items, activeClass].join(' ')}>
                <label htmlFor={id}>
                    <ul>
                        <li>{kwh}<span>{type}</span></li>
                        <li>{kwh}<span>kWh</span></li>
                        <li>{range}<span>miles range</span></li>
                        <li>
                            <span></span>
                            <input
                                type = "radio"
                                name = "engine"
                                id = {id}
                                value = {image}
                                onChange = {e=> this.changeOption(e)}
                                checked = {activeInput}
                            />
                            {id!=1 && (<div className={style.itemsPrice}>+${currencyformat(price)}</div>)}
                        </li>
                    </ul>
                </label>                
            </li>
        ) 
    }
    
	render() {
		return (
			<section className={style.engine}>

                <div className={style.engineImage}>
                    <img src={this.state.image}/>
                </div>

                <div className={style.engineOptions}>
                    <h1 className={style.title}>Engine</h1>
                    <ul className={style.engineOptionsList}>
                        {this.props.engines.map(({id, image, kwh, range, type, price})=>(
                            this.engineOptions({
                                id,
                                image,
                                kwh,
                                range,
                                type,
                                price
                            })
                        ))}
                    </ul>
                </div>
                
            </section>
		);
	}
}

const mapStateToProps = (props) => (
    {
        engines: props.general.data.engine.items,
        geral: props
    }
);

const mapDispatchToProps = (dispach) => {
    return bindActionCreators({actionEngine},dispach)
}

export default connect(mapStateToProps, mapDispatchToProps)(Engine);