import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Layout from '../components/layout'
import Container from '../components/container'
import Webdoor from '../components/webdoor'

class Page extends React.Component {
	constructor(props) {
    super(props);
	}

	render() {
		return (
			<Layout>
				<main>					
					<Webdoor/>
					{/* <Container>
					</Container> */}
				</main>
			</Layout>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Page);
