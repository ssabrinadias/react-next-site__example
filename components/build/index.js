import React from 'react';
import { connect } from 'react-redux';
import style from './style.scss';
import Container from '../container'
import Engine from '../engine'

class BuildPage extends React.Component {
	constructor(props) {
        super(props);
        console.log('props', props)
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
                {/* <footer>footer</footer> */}
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(BuildPage);