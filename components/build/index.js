import React from 'react';
import { connect } from 'react-redux';
import style from './style.scss';
import Container from '../container'
import Engine from '../engine'
import Summary from '../summary'

class BuildPage extends React.Component {
	constructor(props) {
        super(props);
    }
    
    renderPage(actual) {
        switch (actual) {
            case 'engine': 
            return <Engine/>            
            // case 'colors': <Engine/>
            // case 'engine': <Engine/>
        }
    }

    sum(initial){
        return Object.keys(initial).reduce(( init, elem ) => {
            return init + initial[elem].price;
        }, 0 );
    }

	render() {
        let actualPage = this.props.actualPage;
        let steps = this.props.choices.steps;
        console.log(':)', this.props)
		return (
			<div>
                <Container>
                    {this.renderPage(actualPage)}
                </Container>
                {steps && <Summary 
                    steps = {steps}
                    total = {this.sum(steps)}    
                />}
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(BuildPage);