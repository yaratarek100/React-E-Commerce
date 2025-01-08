import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/finalProject assets👌/images/freshcart-logo.svg";
import style from "./NavBar.module.css";
import { UserContext } from "../../context/UserContext";

export function NavBar() {
  const [isOpen, setisOpen] = useState(false);
  let { UserToken, setUserToken } = useContext(UserContext);

  return (
    <>
      <nav className="h-auto bg-slate-100 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 my-2">
          <Link
            to=""
            className="flex items-center space-x-3 rtl:space-x-reverse me-6"
          >
            <img src={logo} className="h-8" alt="Flowbite Logo" />
          </Link>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mx-6">

            <div className=" flex justify-between items-center gap-5">
              {UserToken ? (
                <Link className="hover:text-lime-500"
                  to=""
                  onClick={() => {
                    setUserToken(null);
                    localStorage.removeItem("userToken");
                  }}
                >
                  log out
                </Link>
              ) : (
                <>
                  <Link className="hover:text-lime-500" to="login">log in</Link>
                  <Link className="hover:text-lime-500" to="register">sign up</Link>
                </>
              )}
            </div>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => {
                setisOpen(!isOpen);
              }}
            >
              <span className="sr-only ">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`  items-center justify-between ${
              isOpen ? null : "hidden"
            }  grow w-full md:flex md:w-auto md:order-1 `}
            id="navbar-sticky"
          >
            {UserToken ? (
              <ul  className="MainList  flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse 
    md:p-0  md:space-x-8  md:flex-row md:mt-0 md:border-0 md:bg-transparent  md:dark:bg-gray-900 dark:border-gray-700"
              >
                <li>
                  <NavLink
                    to=""
                    className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-700 md:p-0 md:dark:hover:text-lime-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="cart"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-700 md:p-0 md:dark:hover:text-lime-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="products"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-700 md:p-0 md:dark:hover:text-lime-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="categories"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-700 md:p-0 md:dark:hover:text-lime-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Categories
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="brands"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-700 md:p-0 md:dark:hover:text-lime-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Brands
                  </NavLink>
                </li>
              </ul>
            ) : null}

            <ul className=" list-none justify-between items-center  text-xl  flex gap-1 mt-6  md:gap-3 md:m-0 md:ml-auto">
              <li className="hover:text-lime-500 cursor-pointer">                
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li className="hover:text-lime-500 cursor-pointer">
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li className="hover:text-lime-500 cursor-pointer">                
                <FontAwesomeIcon icon={faTiktok} />
              </li>
              <li className="hover:text-lime-500 cursor-pointer">                
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li className="hover:text-lime-500 cursor-pointer">                
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
              <li className="hover:text-lime-500 cursor-pointer">                
                <FontAwesomeIcon icon={faYoutube} />
              </li>
            </ul>

          </div>
          
        </div>
      </nav>
    </>
  );
}
