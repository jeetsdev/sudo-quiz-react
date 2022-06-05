import { getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import { categoriesRef, quizRef } from "../firebase/firebase";
import { quizReducer } from "../reducers";
import { ACTION_TYPE } from "../utils";

const QuizContext = createContext();
const { SET_LOADING, GET_CATEGORIES, GET_QUIZZES } = ACTION_TYPE;
export const QuizProvider = ({ children }) => {
	const [state, dispatch] = useReducer(quizReducer, {
		loading: false,
		categories: [],
		quizzes: [],
		currentQus: [],
		currentIndex: 0,
		userAns: [],
		userScore:0,
	});



	//* Getting categories here
	useEffect(() => {
		dispatch({
			type: SET_LOADING,
			payload: true,
		});
		try {
			(async () => {
				const res = await getDocs(categoriesRef);
				const categories = res?.docs.map((ele) => {
					return { ...ele.data() };
				});
				dispatch({
					type: GET_CATEGORIES,
					payload: categories,
				});
				dispatch({
					type: SET_LOADING,
					payload: false,
				});
			})();
		} catch (error) {
			toast.error(error.message);
		}
	}, []);

	//* Getting all quizzes here
	useEffect(() => {
		try {
			(async () => {
				const res = await getDocs(quizRef);
				const quizzes = res?.docs.map((ele) => {
					return { ...ele.data() };
				});
				dispatch({
					type: GET_QUIZZES,
					payload: quizzes,
				});
			})();
		} catch (error) {
			toast.error(error.message);
		}
	}, []);

	return (
		<QuizContext.Provider
			value={{ quizState: state, quizDispatch: dispatch }}>
			{children}
		</QuizContext.Provider>
	);
};

export const useQuiz = () => useContext(QuizContext);
