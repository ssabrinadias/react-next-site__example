const INITIAL_STATE = {};

const choices = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SERVER_CHOICES':
			return {
				...state,
				steps : {
					...action.data[0],
					...action.data[1],
					...action.data[2],
					...action.data[3],
					...state.steps
				}
			};
		case 'UPDATE_ENGINE':
			return {
				...state,
				steps : {
					...state.steps,
					engine: {
						...action.engine
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
		case 'UPDATE_COLOR':
			return {
				...state,
				steps : {
					...state.steps,
					color: {
						...action.color
					}
				}
			};
		case 'UPDATE_WHEELS':
			return {
				...state,
				steps : {
					...state.steps,
					wheels: {
						...action.wheels
					}
				}
			};
		default:
			return state;
	}
};

export default choices;
