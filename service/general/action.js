export default info => dispatch => {
	return dispatch({
		type: "SERVER_GENERAL",
		info
	});
};
