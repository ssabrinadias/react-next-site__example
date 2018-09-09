const INITIAL_STATE = {
	model : {
		type: '-',
		price: '-',
		engine: {
			type: '-',
			price: '-'
		},
		color: {
			type: '-',
			price: '-'
		},
		wheels: {
			type: '-',
			price: '-'
		}
	},
	total: '-'
};

const choices = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SERVER_CHOICES':
			return {
				...state,
				...action.info
			};
		default:
			return state;
	}
};

export default choices;
