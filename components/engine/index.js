import React from 'react';
import { connect } from 'react-redux';
import style from './style.scss';
import engineOne from '../../static/images/engine-1.png'
import engineTwo from '../../static/images/engine-2.png'

class Engine extends React.Component {
	constructor(props) {
        super(props);
        const firstChoice = props.engines[Object.keys(props.engines)[0]];
        this.state = {
            image: firstChoice.image,
            selected : firstChoice.id,
        }
    }

    changeOption(e){
        let el = e.target;
        return this.setState({
            image: el.value,
            selected: el.id
        })
    }

    engineOptions({id, image, kwh, range, type}){
        
        let activeInput = this.state.selected == id ? 'checked' : '';
        let activeClass = this.state.selected == id ? style.active: '';
        
        return(
            <li key={id} className={activeClass}>
                <label htmlFor={id}>
                    <ul>
                        <li>{kwh}{type}</li>
                        <li>{kwh}kWh</li>
                        <li>{range}miles range</li>
                        <li>
                            <input
                                type = "radio"
                                name = "engine"
                                id = {id}
                                value = {image}
                                onChange = {e=> this.changeOption(e)}
                                checked = {activeInput}
                            />
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
                        {this.props.engines.map(({id, image, kwh, range, type})=>(
                            this.engineOptions({
                                id,
                                image,
                                kwh,
                                range,
                                type
                            })
                        ))}
                    </ul>
                </div>
                
            </section>
		);
	}
}

const mapStateToProps = ({general}) => (
    {engines: general.data.engine.items}
);

export default connect(mapStateToProps)(Engine);