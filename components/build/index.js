import React from 'react';
import { connect } from 'react-redux';
import style from './style.scss';
import Container from '../container'
import Engine from '../engine'
import Color from '../color'
import Wheels from '../wheels'
import Summary from '../summary'
import Results from '../results'
import currencyformat from '../currencyformat'

class BuildPage extends React.Component {
	constructor(props) {
        super(props);
    }
    
    renderPage(actual) {
        switch (actual) {
            case 'engine': 
                return <Engine/> 
            
            case 'color': 
                return <Color/>     
                
            case 'wheels': 
                return <Wheels/>
                
            case 'results': 
                return <Results/>  
        }
    }
    
    updateTotal(initial){        
        return currencyformat(
            Object.keys(initial).reduce(( init, elem ) => {
                return init + initial[elem].price;
            }, 0 )
        )        
    }

	render() {
        let actualPage = this.props.actualPage;
        let steps = this.props.choices.steps;
		return (
			<div>
                <Container>
                    {this.renderPage(actualPage)}
                </Container>
                {steps && actualPage!= "results" && <Summary 
                    steps = {steps}
                    page = {actualPage}
                    total = {this.updateTotal(steps)}    
                />}
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(BuildPage);