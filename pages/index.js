import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout'
import Container from '../components/container'
import Webdoor from '../components/webdoor'
import Inforow from '../components/inforow'

class Page extends React.Component {
	constructor(props) {
    	super(props);
	}

	render() {
		return (
			<Layout>
				<main>					
					<Webdoor/>
					<Inforow/>
				</main>
			</Layout>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Page);
