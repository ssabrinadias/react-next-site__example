import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Layout from "../components/layout";
import Container from "../components/container";
import Webdoor from "../components/webdoor";
import Inforow from "../components/inforow";
import { actionModel } from "../components/home/action";

class Page extends React.Component {
	constructor(props) {
		super(props);
		props.actionModel({
			price: props.general.data.price,
			name: "Model R"
		});
	}

	render() {
		return (
			<Layout>
				<main>
					<Webdoor />
					<Inforow />
				</main>
			</Layout>
		);
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispach => {
	return bindActionCreators({ actionModel }, dispach);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Page);
