import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {actionWheels} from './action';
import currencyformat from '../currencyformat'
import style from './style.scss';


class Wheels extends React.Component {
	constructor(props) {
        super(props);
        const firstChoice = firstChoice ||  props.wheels.items[0];
        
        this.state = {
            selected : firstChoice.id
        }
    }

    changeOption(e) {
        
        let el = this.props.wheels.items
            .filter((item)=>item.id == e.target.id)

        this.setState({
            selected : e.target.id
        })

        return (
            this.props.actionWheels(el[0])
        )
    }

    wheelsOptions({id, label,image, price}){
        let activeInput = this.state.selected == id ? 'checked' : '';
        let activeClass = this.state.selected == id ? style.active: ''; 
        
        return(
            <li key={id} className={activeClass}>
                <label htmlFor={id}>
                    <img src={image} alt={label}/>
                    
                    <div className={style.description}>
                        <p>{label}</p>
                        
                        <span>{price ? currencyformat(price) : 'included'}</span>
                    </div>
                    
                    <input
                        type = "radio"
                        name = "wheels"
                        id = {id}
                        onChange = {e=> this.changeOption(e)}
                        checked = {activeInput}
                    />
                </label>                
            </li>
        ) 
    }
    
	render() {
		return (
			<section className={style.wheels}>
                
                <h1 className={style.title}>Wheels</h1>

                <ul className={style.wheelsOptions}>
                    {this.props.wheels.items.map(({id, label,image, price})=>(
                        this.wheelsOptions({id, label,image, price})
                    ))}
                </ul>

            </section>
		);
	}
}

const mapStateToProps = (props) => (
    {           
        wheels: props.general.data.wheels,
        geral: props
    }
);

const mapDispatchToProps = (dispach) => {
    return bindActionCreators({actionWheels},dispach)
}

export default connect(mapStateToProps, mapDispatchToProps)(Wheels);