import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import { auth } from "../firebase/firebase";
import { authReducer } from "../reducers";
import { ACTION_TYPE, validateEmail, validatePassword } from "../utils";

// Creating context here
const AuthContext = createContext();
const userData = JSON.parse(localStorage?.getItem("user"));
// Auth provider with redcuer and initial value
export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: userData,
		error: {
			emailError: "",
			passwordError: "",
		},
	});
	// const navigate = useNavigate();
	const { SET_ERROR, SET_USER } = ACTION_TYPE;

	// Validating email and password
	const validateEmailAndPass = (email, password) => {
		if (validateEmail(email) && validatePassword(password)) {
			return true;
		} else if (!validateEmail(email)) {
			toast.error("Enter a valid email.");
			dispatch({
				type: SET_ERROR,
				payload: {
					passwordError: "",
					emailError: "Enter a valid email.",
				},
			});
			return false;
		} else if (!validatePassword(password)) {
			toast.error("Must include a number, Minimum 6 char.");
			dispatch({
				type: SET_ERROR,
				payload: {
					passwordError:
						"Must include a number, Minimum 6 characters.",
					emailError: "",
				},
			});
			return false;
		}
	};

	// Sign up handler here
	const signUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// Login handler here
	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	// Logout handler here
	const logout = () => {
		toast.success("Sign out successful");
		return signOut(auth);
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			localStorage.setItem("user", JSON.stringify(user));
			dispatch({
				type: SET_USER,
				payload: user,
			});
		});
	}, [SET_USER]);

	return (
		<AuthContext.Provider
			value={{
				signUp,
				logout,
				login,
				validateEmailAndPass,
				authState: state,
				authDispatch: dispatch,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
