export default data => dispatch => {
	return dispatch({
		type: 'SERVER_CHOICES',
		data
	});
};