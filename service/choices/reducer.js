const INITIAL_STATE = {};

const choices = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SERVER_CHOCES':
			return {
				...state,
				...action.info
			};
		case 'UPDATE_ENGINE':
			return {
				...state,
				steps : {
					...state.steps,
					engine: {
						id: action.engine.id,
						type: action.engine.type,
						kwh: action.engine.kwh, 
						price: action.engine.price,
						range: action.engine.range
					}
				}
			};
		case 'UPDATE_MODEL':
				return {
					...state,
					steps : {
						...state.steps,
						car: {
							name: action.car.name,
							price: action.car.price
						}
					}
				};
		default:
			return state;
	}
};

export default choices;
