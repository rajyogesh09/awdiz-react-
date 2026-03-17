import { useState } from "react";

function Login() {
    const[userData , setUserData]= useState({email: "", password: ""});
    console.log(userData ,"userData");
    function handleChange (event){
        console.log(event.target.value , "value")
        setUserData({...userData ,[event.target.name]:event.target.value})
    }
   
 return (
        <div>Login
            <form>
               <label>Email --  {userData.email} </label> <br/>
               <input name ="email" 
                  required type="email "
                  placeholder="xyz@gmail.com"
                  onChange ={ handleChange} /> <br/>
               <label>Password -- {userData.password}</label> <br/>
               <input name ="password"
                    required type="password"
            placeholder="Enter your Passwowrd" 
            onChange = {handleChange} /><br/> <br/>
            <button>Login</button>
            </form>
        </div>
    )

}
export default Login;