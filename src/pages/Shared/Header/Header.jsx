import React, { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Avatar } from "flowbite-react";
import { FaDove } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="m-5 ">
      <nav className="border-gray-200 rounded-lg bg-slate-200  dark:bg-gray-800 dark:border-gray-700">
        <div className="lg:max-w-screen-xl lg:flex lg:flex-wrap lg:items-center lg:justify-between  p-4">
          <a href="#" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <span className="flex "><FaDove className="mt-1 mr-1 text-yellow-600"></FaDove>Healthy Food</span>
            </span>
          </a>
          
          <div
            className="  md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex  font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 lg:mt-2 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/blog"
                  className="block py-2 pl-3 lg:mt-2 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blog
                </a>
              </li>
              {user ? (
                <>
                  <li>
                    <Avatar title={user?.displayName} className=" h-12 w-12 rounded-2xl" img={user?.photoURL} rounded={true} />
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="text-blue-700 ml-3 lg:ml-0 mt-1 lg:mt-0 bg-blue-100 hover:bg-blue-800 hover:text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
                    >
                      LogOut
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <a
                    href="/login"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    LogIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;


// style="background-image:url(http://neptune.pinsupreme.com/wp-content/uploads/2015/09/bg2.jpg); background-repeat: repeat; background-position: top center;background-size: contain;"