import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import InputField from "./inputField";
import { Validators } from "../utils/validator";
const ForgotPassword = () => {
  const [value, setValue] = useState("");
  const handleChange = (value) => {
    console.log(value).setValue(value);
  };
  return (
    <div className=" h-screen items-center justify-center py-12 bg-slate-200">
      <div className=" max-w-md space-y-8 rounded bg-white items-center justify-center  m-auto ">
        <div className="">
          <div>
            
            <div className="flex justify-center ">
            <div>
            <img
              className=" h-10 mt-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            </div>
              <div className="mt-8 text-sky-500 text-2xl">
              <h2>RISE</h2>
              </div>
            </div>
           
            
          </div>
          <form className=" px-4  py-3 border-t-2 slate-400">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className=" rounded-md shadow-sm  ">
              <div className="text-slate-200">
                <InputField
                  value={value}
                  placeholder="Email"
                  text="email"
                 
                  validators={[
                    {
                      check: Validators.required,
                      message: "This field is required",
                    },
                  ]}
                  onChange={handleChange}
                />
              </div>
              
             
            </div><br/>

           

            <div className="">
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-800 py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                <Link to={"/home"}>Send</Link>
              </button>
            </div>
          </form>
          <div className="text-sm px-4">
                <a href="#" className="font-medium text-red-800 text-sm ">
                <Link to={"/"}>sign in</Link>                </a>
              </div><br/>
         
        </div>
             

            
          
       
      </div>
       
       
      
    </div>
  );
};

export default ForgotPassword;
