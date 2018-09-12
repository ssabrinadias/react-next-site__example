import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import Layout from '../components/layout'
import Container from '../components/container'

class Result extends React.Component {
	constructor(props) {
        super(props);
        console.log(props)
	}

	render() {
		return (
			<Layout>
				<main>					
					result
				</main>
			</Layout>
		);
	}
}

const mapStateToProps = state => state;


export default connect(mapStateToProps)(Result);