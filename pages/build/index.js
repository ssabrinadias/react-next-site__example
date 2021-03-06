import React from "react";
import { withRouter } from "next/router";
import Layout from "../../components/layout";
import { connect } from "react-redux";
import Error from "next/error";
import BuildComp from "../../components/build";

class Build extends React.Component {
	constructor(props) {
		super(props);
	}

	checkPage(actual) {
		let pages = ["engine", "color", "wheels", "results"];
		return pages.indexOf(actual) >= 0;
	}

	render() {
		const page = this.props.router.query.step || this.props.step;
		const validate = this.checkPage(page);
		return (
			<Layout>
				<main>
					{validate ? (
						<BuildComp actualPage={page} />
					) : (
						<Error statusCode={404} />
					)}
				</main>
			</Layout>
		);
	}
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Build));
