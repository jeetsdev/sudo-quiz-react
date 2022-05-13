import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts";

export const NotRequireAuth = () => {
	const {
		authState: { user },
	} = useAuth();
	return user ? <Navigate to="/" replace /> : <Outlet />;
};
