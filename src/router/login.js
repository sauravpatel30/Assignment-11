import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
//import { Router } from 'react-router';
const Login = () => {

    const [data, setdata] = React.useState({
        UserName: '',
        Password: '',
    });
    let navigate = useNavigate();
    const check_login = () => {
        console.log(data)
        axios.post("/login/loginUser/", data).then((res) => {
            console.log(res.data.data.length);
            if ((res.data.data.length) === 1) {
                alert("Username and Password found");  
                navigate("/list", { replace: true })
            } else {
               alert("Username and Password Wrong ");
               navigate("/register", { replace: true })
            }
        });
    }
    return (
        <div align="center">
            <div>
                <h3>Login Page</h3>
            </div>
            <div>
                User-name: <input style={{padding: "5px",margin:"5px"}} onChange={(e) => { setdata({ ...data, UserName: e.target.value }) }} type="text" placeholder="Enter UserName  "/>
            </div>
            <div>
                Password: <input style={{padding: "5px",margin:"5px"}} onChange={(e) => { setdata({ ...data, Password: e.target.value }) }} type="password" placeholder="Enter Password  "/>
            </div>
            <div>
                <button style={{padding: "5px",margin:"5px",borderRadius: "5px"}} onClick={() => { check_login() }} type="Submit" value={"Sign In"}>Sign Up</button>
            </div>
        </div>
    );
}
export default Login;