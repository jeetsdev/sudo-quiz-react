import { ACTION_TYPE } from "../utils";

const {
	SET_LOADING,
	GET_CATEGORIES,
	GET_QUIZZES,
	SET_CURRENT_QUS,
	SET_CURRENT_INDEX,
	SET_USER_ANS,
	SET_USER_SCORE,
	CLEAR_ALL,
} = ACTION_TYPE;

export const quizReducer = (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, loading: action.payload };
		case GET_CATEGORIES:
			return { ...state, categories: action.payload };
		case GET_QUIZZES:
			return { ...state, quizzes: action.payload };
		case SET_CURRENT_QUS:
			return { ...state, currentQus: action.payload };
		case SET_CURRENT_INDEX:
			return { ...state, currentIndex: action.payload };
		case SET_USER_ANS:
			return { ...state, userAns: [...state.userAns, action.payload] };
		case SET_USER_SCORE:
			return { ...state, userScore: state.userScore + action.payload };
		case CLEAR_ALL:
			return { ...state, userAns: [], currentIndex: 0 };
		default:
			return state;
	}
};
