import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts";

export const RequireAuth = () => {
	const location = useLocation();
	const {
		authState: { user },
	} = useAuth();
	return user ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};
