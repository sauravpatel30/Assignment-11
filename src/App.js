import Router from './route'

function App() {
  
  return (
      <div>
        <Router />
      </div>
  );
}

export default App;


/*const [useData,setData] = useState([]);
  //const [data1,setdata1]=useState(0);

  const userl={
    username:"",
    password:"",
  };

  const user={
    username:"",
    password:"",
    name:"",
    age:0,
  };

  const fetchUsers=()=>{
    axios.get("/list").then(res=>{
      if(res.data.data.length===0){
        console.log('no data found');
      }else{
        setData(res.data);
        console.log(res.data);
      }
    });
  }

  const checkLogin=(e)=>{
    axios.post("/login",userl).then((res)=>{

      if(res.data.data.length===0){
        console.log("not login");
      }else{
        console.log("login");
        fetchUsers();
      }
    });
  }

  const registrationUsers=(e)=>{
    axios.post("/registration",user).then((res)=>console.log(res.data));
  }*/


/*<div className="App">
        <div>
          <table align="center">
            <tr>
              <th colSpan="2" className="data"><h2>Login Page</h2></th>
            </tr>
            <tr>
              <th>Email</th>
              <td><input type="text" name="txtemail" placeholder="Username" onChange={e=>userl.username=e.target.value} /></td>
            </tr>
            <tr>
              <th>Password</th>
              <td><input type="password" name="txtpass" placeholder="Password" onChange={e=>userl.password=e.target.value} /></td>
            </tr>
            <tr>
              <td colSpan="2" className="data"><button className="btn m-4 btn-primary" onClick={checkLogin}>Login</button></td>
            </tr>
          </table>
        </div>
        <div>
          <table align="center">
            <tr>
              <th colSpan="2" className="data"><h2>Registration Page</h2></th>
            </tr>
            <tr>
              <th>Email</th>
              <td><input type="text" name="txtemail" placeholder="Username" onChange={e=>user.username=e.target.value} /></td>
            </tr>
            <tr>
              <th>Password</th>
              <td><input type="password" name="txtpass" placeholder="Password" onChange={e=>user.password=e.target.value} /></td>
            </tr>
            <tr>
              <th>Name</th>
              <td><input type="text" name="txtname" placeholder="name" onChange={e=>user.name=e.target.value} /></td>
            </tr>
            <tr>
              <th>Age</th>
              <td><input type="text" name="txtage" placeholder="age" onChange={e=>user.age=e.target.value} /></td>
            </tr>
            <tr>
              <td colSpan="2"><button className="btn m-4 btn-primary" onClick={registrationUsers}>Register User</button>
              </td>
            </tr>
          </table>     
        </div>
        <div>
          <p>{useData.length}</p>
        </div>
    </div>                                                                                                                  */   
