import React from 'react';
//import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";

function Update() {

    const [data, setdata] = React.useState({
        username: '',
        name: '',
        age: 0 ,
    });
    //let navigate = useNavigate();
    const updateData = () => {
        console.log(data);
        axios.put("/update/updateUser", data).then((res) => console.log(res.data));
    }
    return (
        <div align="center">
            <div>
                <a style={{margin: '15px'}} href='/list'>List of users</a>
                <a style={{margin: '15px'}} href='/delete'>Delete users</a>
                <a style={{margin: '15px'}} href='/update'>Update users</a>
            </div>
            <div style={{marginTop: '30px'}}>
                <h3>Update Page</h3>
            </div>
            <div>
                User-Name: <input style={{padding: "5px",margin:"5px"}} onChange={(val) => { setdata({ ...data, username: val.target.value }) }} type="text" placeholder="Enter UserName" />
            </div>
            <div>
                Name: <input style={{padding: "5px",margin:"5px"}} onChange={(val) => { setdata({ ...data, name: val.target.value }) }} type="text" placeholder="Enter Name"/>
            </div>    
            <div>
                Age: <input style={{padding: "5px",margin:"5px"}} onChange={(val) => { setdata({ ...data, age: val.target.value }) }} type="text" placeholder="Enter Age"/>
            </div>    
            <div>
                <button style={{padding: "5px",margin:"5px",borderRadius: "5px"}} onClick={() => { updateData() }} type="Submit" value={"Update"}>Update</button>
            </div>
        </div>
    );
}
export default Update;