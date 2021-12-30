import React from 'react';
//import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";

function Register() {

    const [data, setdata] = React.useState({
        username: '',
        password: '',
        name: '',
        age: 0 ,
    });
    //let navigate = useNavigate();
    const check_singup = () => {
        console.log(data);
        axios.post("/regi/regisUser/", data).then((res) => console.log(res.data));
    }
    return (
        <div align="center">
            <div>
                <h3>Registration Page</h3>
            </div>
            <div>
                User-Name: <input style={{padding: "5px",margin:"5px"}} onChange={(val) => { setdata({ ...data, username: val.target.value }) }} type="text" placeholder="Enter UserName" />
            </div>
            <div>
                Password: <input style={{padding: "5px",margin:"5px"}} onChange={(val) => { setdata({ ...data, password: val.target.value }) }} type="password" placeholder="Enter Password"/>
            </div>
            <div>
                Name: <input style={{padding: "5px",margin:"5px"}} onChange={(val) => { setdata({ ...data, name: val.target.value }) }} type="text" placeholder="Enter Name"/>
            </div>    
            <div>
                Age: <input style={{padding: "5px",margin:"5px"}} onChange={(val) => { setdata({ ...data, age: val.target.value }) }} type="text" placeholder="Enter Age"/>
            </div>    
            <div>
                <button style={{padding: "5px",margin:"5px",borderRadius: "5px"}} onClick={() => { check_singup() }} type="Submit" value={"SignUp"}>Register</button>
            </div>
        </div>
    );
}
export default Register;