import { ACTION_TYPE } from "../utils";

const { SET_ERROR, SET_USER } = ACTION_TYPE;

export const authReducer = (state, action) => {
	switch (action.type) {
		case SET_ERROR:
			return { ...state, error: action.payload };
		case SET_USER:
			return { ...state, user: action.payload };
		default:
			return state;
	}
};
