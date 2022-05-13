import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotRequireAuth } from "../components";
import { Home, Login, NotFound, SignUp } from "../pages";

export const NavigationRoutes = () => {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<Home />} />
			<Route element={<NotRequireAuth />}>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
			</Route>
		</Routes>
	);
};
