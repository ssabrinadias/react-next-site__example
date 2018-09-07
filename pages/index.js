import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from '../components/header'
import Layout from '../components/layout'

class Page extends React.Component {
	constructor(props) {
    super(props);
	}

	render() {
		return (
			<Layout>
				<Header/>
			</Layout>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Page);
