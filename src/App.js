import "./App.css";
import "./index.css";
import Home from "./components/homeComponent";
import SignIn from "./components/signinComponent";
import SignUp from "./components/signupComponent";
import ForgotPassword from "./components/forgotPasswordComponent"
import { BrowserRouter,  Routes,Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    
      <div>
        <Routes>
          {/* <Route exact path='/' element={<Home/>}/> */}
          <Route exact path='/' element={<SignIn/>}/>
          <Route exact  path='/signup' element={<SignUp/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/password-reset' element={<ForgotPassword/>}/>

        </Routes>
      </div>
    </BrowserRouter>
   
  );
}
export default App;
