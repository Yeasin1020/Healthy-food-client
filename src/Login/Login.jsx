import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="max-w-sm mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-md">
          <div className="px-16 py-10">
            <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>
            <form className="mt-8 space-y-6" action="#" method="POST" />
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className=" mb-5">
                <label for="username" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="email"
                />
              </div>
              <div>
                <label for="password" className="sr-only">
                  Password
                </label>
                <div className="mb-5">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center">
                <label
                  for="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Are you a new user?
                </label>
              </div>

              <div className="text-sm">
                <small className="font-medium text-indigo-600 hover:text-indigo-500"><Link to='/register'>Create a new account</Link></small>
                 
                  
                
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
              <span className="absolute left-0 inset-y-0 flex items-center pl-3" />
              <svg
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
