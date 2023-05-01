import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Main-Home/Home/Home";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";


const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>
			},
			{
				path: '/login',
				element: <Login></Login>
			},
			{
				path: '/register',
				element: <Registration></Registration>
			}
		]
	}
])

export default router;