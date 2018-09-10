const INITIAL_STATE = {
	steps: {},
	total: ''
};

const choices = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SERVER_CHOICES':
			return {
				...state,
				...action.info
			};
		case 'UPDATE_ENGINE':
			return Object.assign({}, state, {
				steps : {
					engine: {
						type: action.engine.type,
						kwh: action.engine.kwh, 
						price: action.engine.price  
					}
				}
			})
		default:
			return state;
	}
};

export default choices;
