import { React, useState } from "react";


import "./Address.css"

export const CurrentAddress = () => {
    const mydata =  {
        HouseNo: "",
        Streat: "",
        City: "",
        PinCode: "",
        Cuntry: ""
    }

    const [user, setUser] = useState(mydata);
    // console.log(user);
    const getData = (e) => {
        // console.log(e.target.value);
        mydata[e.target.id] = e.targer.value
        setUser(mydata)
    }
    const sentData = (e) => {
        e.preventDefault()
        console.log(user);
         
    }
    console.log(user);
    return (
        <div className="maindiv">
            <div>
                <h3>Current Address</h3>
                <form onSubmit={sentData}>
                     <input type="text" placeholder="House No." id="HouseNo" onChange={getData} /><br /><br />
                      <input type="text" placeholder="Streat." id="Streat" onChange={getData} /><br /><br />
                     <input type="text" placeholder="city" id="City" onChange={getData} /><br /><br />
                     <input type="text" placeholder="pin Code No." id="PinCode" onChange={getData} /><br /><br />
                     <input type="text" placeholder="Cuntry" id="Cuntry" onChange={getData} /><br /><br />
                    <button type="submit" value="Submit">Submit</button>
                </form>
            </div>



            <div>
                <h3>Permanent Address</h3>
                <form>
                     <input type="text" placeholder="House No." value={mydata.HouseNo} /><br /><br />
                     <input type="text" placeholder="Streat." value={mydata.Streat} /><br /><br />
                     <input type="text" placeholder="city" value={mydata.City} /><br /><br />
                     <input type="text" placeholder="pin Code No." value={mydata.PinCode} /><br /><br />
                     <input type="text" placeholder="Cuntry" value={mydata.Cuntry} /><br />
                </form>
            </div>

        </div>
    )
} 