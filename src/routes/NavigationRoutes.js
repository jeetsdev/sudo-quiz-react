import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotRequireAuth, RequireAuth } from "../components";
import { Home, Login, NotFound, Question, Result, Rules, SignUp } from "../pages";

export const NavigationRoutes = () => {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<Home />} />
			<Route element={<NotRequireAuth />}>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
			</Route>
			<Route element={<RequireAuth />}>
				<Route path='/rules/:categoryName' element={<Rules />} />
				<Route path='/questions/:categoryName' element={<Question />} />
				<Route path='/result/:categoryName' element={<Result />} />
			</Route>
		</Routes>
	);
};
