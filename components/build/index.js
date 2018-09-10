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
    
	render() {
        let actualPage = this.props.actualPage;
		return (
			<div>
                <Container>
                    {this.renderPage(actualPage)}
                </Container>
                <Summary steps={this.props.choices.steps}/>
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(BuildPage);