import { useFormik } from "formik";
import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export default function Register() {
  
const navigate =useNavigate();

  async function handleRegister(values){

   
    // call api for register 
    try{

      let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values);
      if(data.message=="success"){
        navigate("/")
      }
      else{
        // show error
        console.log(data);
    }
      
    }
   catch (error) {
    console.error("Error during registration:\n", error.response.data.errors.msg);
  }
  }
  
  let formik = useFormik(
    {
      initialValues : {

        name:"",   
        email:"",   
        password:"",
        rePassword:"",   
        phone:"",   
   
   },
   onSubmit : handleRegister
    }
  )


  return (
    <form onSubmit={formik.handleSubmit} className=" mx-auto w-4/6 md:w-3/6 lg:w-2/6 ">
      <h1 className="text-2xl text-center mb-4 text-lime-600 font-semibold">Register</h1>
    <div className="relative z-0 w-full mb-5 group">
      <input
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.name}
        type="text"
        name="name"
        id="name"
        autoComplete="off"
        className="!bg-transparent block py-2.5 px-0 w-full text-base text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer"
        placeholder=" "
        required
      />
      <label
        htmlFor="name"
        className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        name
      </label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.email}
        type="email"
        name="email"
        id="floating_email"
        className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer"
        placeholder=" "
        autoComplete="off"
        required
      />
      <label
        htmlFor="floating_email"
        className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Email
      </label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.password}
        type="password"
        name="password"
        id="floating_password"
        className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer"
        placeholder=" "
        autoComplete="off"
        required
      />
      <label
        htmlFor="floating_password"
        className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Password
      </label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.rePassword}
        type="password"
        name="rePassword"
        id="floating_rePassword"
        className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer"
        placeholder=" "
        autoComplete="off"
        required
      />
      <label
        htmlFor="floating_rePassword"
        className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        confirm Password
      </label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.phone}
        type="tel"
        name="phone"
        id="floating_phone"
        className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer"
        placeholder=" "
        autoComplete="off"
        required
      />
      <label
        htmlFor="floating_phone"
        className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Phone Number
      </label>
    </div>
    

    <button
      type="submit"
      className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
    >
      sign up
    </button>
  </form>
  )
}
