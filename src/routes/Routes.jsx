import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Main-Home/Home/Home";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import ChefDetails from "../pages/Shared/chefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute";
import SelectedDetails from "../pages/Shared/selectedDetails/SelectedDetails";
import Error from "../pages/Shared/error/Error";
import Blog from "../pages/Main-Home/Blog/Blog";


const router = createBrowserRouter([

	{
		path: "*",
		element: <Error></Error>
	},
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
			},
			{
				path: '/details',
				element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>
			},
			{
				path: '/details/:id',
				element: <PrivateRoute><SelectedDetails></SelectedDetails></PrivateRoute>,
				loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
			},
			{
				path: '/blog',
				element: <Blog></Blog>
			}
		]
	}
])

export default router;