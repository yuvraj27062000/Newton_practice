import { React, useState } from "react";
import "./Signup.css"
import { validEmail, validPassword } from "../regex/regex";

function Registration() {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Gender, setGender] = useState("")
    const [Nationality, setNationality] = useState("")
    const [Phone, setPhone] = useState("")
    const [Address, setAddress] = useState("")
    const [newValue, setCheckname] = useState("");
    const [EmailValue, setEmailvalidation] = useState("");
    const [passwordValue, setPasswordValidation] = useState("");
    const [phoneValue, setPhoneValidation] = useState("");



    // }
    // useEffect(()=>{ },[Name])

    //  onclick validation
    const validateName1 = () => {
        let input = document.getElementById("first")
        input.onmouseout = () => {
            let newValue = Name.length === 0 ? "Effect" : Name.length < 4 ? "Effect" : null
            setCheckname(newValue)

        }
        let newValue = Name.length === 0 ? null : Name.length < 4 ? "Effect" : null
        setCheckname(newValue)

    }

    //  onclick validation
    const validateEmail1 = () => {
        let input = document.getElementById("Email");
        input.onmouseout = () => {
            let EmailValue = Email.length === 0 ? "Effect" : validEmail.test(Email) ? null : "Effect"
            setEmailvalidation(EmailValue)

        }

        let EmailValue = Email.length === 0 ? null : validEmail.test(Email) ? null : "Effect"
        setEmailvalidation(EmailValue)
    }

    const validatePassword = () => {
        let input = document.getElementById("pswd");
        input.onmouseout = () => {
            let passwordValue = Password.length === 0 ? "Effect" : validPassword.test(Password) ? null : "Effect"
            setPasswordValidation(passwordValue)

        }

        let passwordValue = Password.length === 0 ? null : validPassword.test(Password) ? null : "Effect"
        setPasswordValidation(passwordValue)
    }
    
    // const validatePhone = () => {
    //     let input = document.getElementById("phone");
    //     input.onmouseout = () => {
    //         let phoneValue = Phone.length === 0 ? "Effect" : Phone.length ===10 ? null : "Effect"
    //         setPhoneValidation(phoneValue)

    //     }

    //     let phoneValue = Phone.length === 0 ? null :  Phone.length === 10 ? null : "Effect"
    //     setPhoneValidation(phoneValue)
    // }
    // let input = document.getElementById("phone");
    //     input.onmouseout = () => {
    //         let phoneValue = Phone.length === 10 ? null : "null"
    //         setPhoneValidation(phoneValue)

    //     }

    //  onMouseOut Validation 
    // const validateEmail2 = ()=>{
    //     let EmailValue =  Email.length === 0  ? "Effect" : validEmail.test(Email) ? null : "Effect"
    //     setEmailvalidation(EmailValue)
    // }



    let Signup = (e) => {
        e.preventDefault()

        if (Name.length < 4) {
            alert("Fill in the name, which should be at least 4 characters long.")
            return
        }
        if (!Phone.length === 10) {
            alert("Phone No Should be 10 Digit")
            console.log("gfdgfg", Phone)
            return
        }
        let phoneValue = Phone.length === 0 ? null :  Phone.length === 10 ? null : "Effect"
        setPhoneValidation(phoneValue)

        if (!validEmail.test(Email)) {
            alert(" Valid Email please => someone@gmail.com")
            return
        }

        if (!validPassword.test(Password)) {
            alert(`
            Password
            At least one lowercase
            At least one uppercase
            At least one digit
            At least one special character
            At least it should have 8 characters long.`)
            return
        }
        if (!Gender) {
            alert("Please click Male Or Female")
            return
        }

        alert(JSON.stringify({
            "Name": Name,
            "Email": Email,
            "Password": Password,
            "Phone": Phone,
            "Gender": Gender,
            "Nationality": Nationality,
            "Address": Address,
            "len ": Phone.length

        }))
    }



    return (
        <div className="container">
            <h3 className="hadding">Signup Form</h3>
            <form onSubmit={Signup} className="signup"    >
                <div className={`inputdata`}>
                    <label htmlFor="first">Name : </label>
                    <input className={newValue} id="first" onClick={() => { validateName1() }} value={Name} onChange={(e) => setName(e.target.value)} type="text" placeholder="   Enter name" />
                    {/* {Name.length == 0? null : Name.length < 4? <span>Not Currect </span>:null} */}
                    {/* <span>{newValue}</span> */}
                    {/* <hr className={newValue}  /> */}

                </div >

                <div className="inputdata">
                    <label htmlFor="Email">Email : </label>
                    <input id="Email" className={EmailValue} onClick={() => { validateEmail1() }}
                        value={Email} onChange={(e) => setEmail(e.target.value)} type="      email" placeholder="   Enter email" />

                </div>
                <div className="inputdata">
                    <label htmlFor="pswd">Password : </label>
                    <input id="pswd" className={passwordValue} onClick={() => { validatePassword() }} value={Password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="   Enter password" />
                </div>
                {/* {!setPassword && <span>write currect password </span>} */}
                <div className="inputdata" >
                    <label htmlFor="phone">Phone No. : </label>
                    <input id="phone" className={phoneValue}/* onClick={() => { validatePhone() }}*/ value={Phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="   Enter Phone No." />
                </div>
                <div className="inputdata" >
                    <label htmlFor="">Address : </label>
                    <input value={Address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="   Enter Address.." />
                </div>
                <div className="maledata" value={Gender} onChange={(e) => setGender(e.target.value)} >
                    <label> Gender : </label>
                    Male : <input type="radio" value="Male" name="gender" />
                    Female : <input type="radio" value="Female" name="gender" />
                </div>
                <div className="inputdata">
                    <select value={Nationality} onChange={(e) => setNationality(e.target.value)}>
                        <option value="" selected disabled>Chouse your Nationality !</option>
                        <option value="India">India</option>
                        <option value="Russia">Russia</option>
                        <option value="America">America</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Shreelanks">Shreelanks</option>
                        <option value="Japan">Japan</option>
                    </select>
                </div>

                <div>
                    <button> Register </button>
                </div>

            </form>
        </div>
    )

}

export default Registration