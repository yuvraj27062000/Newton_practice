import { React, useState } from "react"
// import  {useState} from "react"
import {validEmail,  validPassword } from "../regex/regex";


import "./Login.css"
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // console.log(email+" "+password);




    const formdata = (e) => {
        e.preventDefault()
        
        if (!validEmail.test(email)) {
            alert(" Valid Email please => someone@gmail.com")
           return 
         }
        
        if (!validPassword.test(password)) {
            alert(`
            At least one lowercase
            At least one uppercase
            At least one digit
            At least one special character
            At least it should have 8 characters long.`)
            return
        }
        alert(JSON.stringify({
            "email": email,
            "password": password
        }))
    }

    return (
        <div className="container" >
            <h1 className="hadding">Login Form </h1>
            <form className="login" onSubmit={formdata}>

                <div className="first">
                    <div className="label"><label htmlFor="">Email :</label></div>
                    <div><input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" /></div>
                </div>

                <div className="second">
                    <div className="label"><label htmlFor="">Password :</label></div>
                    <div><input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" /></div>
                </div>
                <div className="third">
                    <button>Login</button>
                </div>
            </form>
            
        </div>
    )
}

export default Login