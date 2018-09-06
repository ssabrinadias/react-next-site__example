const INITIAL_STATE = [];

const general = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SERVER_GENERAL':
			return {
				...state,
				...action.info
			};
		default:
			return state;
	}
};

export default general;
