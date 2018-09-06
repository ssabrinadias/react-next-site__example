import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Layout from '../components/layout'
class Page extends React.Component {
	constructor(props) {
    super(props);
	}

	render() {
		return (
			<div>
        		<pre>{JSON.stringify(this.props)}</pre>
				<Layout/>
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Page);
