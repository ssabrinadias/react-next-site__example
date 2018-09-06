import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Page extends React.Component {
	constructor(props) {
    super(props);
    console.log('props', props)
	}

	render() {
		return (
			<div>
        <pre>{JSON.stringify(this.props)}</pre>
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Page);
