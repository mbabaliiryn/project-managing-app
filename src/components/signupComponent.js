import {useState} from 'react';

import { Link } from 'react-router-dom'
import InputField from './inputField';
import { Validators } from '../utils/validator';


const SignUp = ()=>{
  const [value,setValue] = useState('')
  const handleChange = (value)=>{
    console.log(value)
    setValue(value)
  }
        return(
           
          <div className=" h-screen items-center justify-center py-12 bg-slate-200">
          <div className=" max-w-md space-y-8 rounded bg-white items-center justify-center  m-auto ">
            <div className="">
              <div>
                
                <div className="flex justify-center ">
                
                  <div className="mt-8 text-sky-500 text-2xl">
                  <h2>RISE</h2>
                  </div>
                </div>
               
                
              </div>
              <form className=" px-4  py-3 border-t-2 slate-400">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className=" rounded-md shadow-sm  ">
                  <div className="text-slate-400 text-sm">
                    <InputField
                      value={value}
                      label="First Name"
                      text="text"
                     
                      validators={[
                        {
                          check: Validators.required,
                          message: "This field is required",
                        },
                      ]}
                      onChange={handleChange}
                    />
                  </div><br/>
                  
                  <div className="text-slate-400 text-sm">
                    <InputField
                      value={value}
                      label="Last Name"
                      text="password"
                    
                      validators={[
                        {
                          check: Validators.required,
                          message: "This field is required",
                        },
                      ]}
                      onChange={handleChange}
                    />
                  </div><br/>
                  <div className="text-slate-400 text-sm">
                    <InputField
                      value={value}
                      label="Company Name"
                      text="text"
                    
                      validators={[
                        {
                          check: Validators.required,
                          message: "This field is required",
                        },
                      ]}
                      onChange={handleChange}
                    />
                  </div><br/>
                  <div className="text-slate-400 text-sm">
                    <InputField
                      value={value}
                      label="Email"
                      text="email"
                    
                      validators={[
                        {
                          check: Validators.required,
                          message: "This field is required",
                        },
                      ]}
                      onChange={handleChange}
                    />
                  </div><br/>
                  <div className="text-slate-400 text-sm">
                    <InputField
                      value={value}
                      label="Password"
                      text="password"
                    
                      validators={[
                        {
                          check: Validators.required,
                          message: "This field is required",
                        },
                      ]}
                      onChange={handleChange}
                    />
                  </div><br/>
                  <div className="text-slate-400 text-sm">
                    <InputField
                      value={value}
                      label="Confirm Password"
                      text="password"
                    
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
                    <Link to={"/home"}>Sign up</Link>
                  </button>
                </div>
              </form>
              
                  <div className="flex  px-4 pb-8">
             <div >
                <span className="text-slate-400 text-sm">You have  an account?</span>
              </div>
              <div className="text-red-800 ml-5 text-sm">
                <Link to={"/"}>sign in</Link>
              </div>
             </div>
            </div>
                 
    
                
              
           
          </div>
           
           
          
        </div>
        )
    }

export default SignUp;