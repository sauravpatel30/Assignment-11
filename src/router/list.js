import React from 'react';
import axios from "axios";

const List = () => {
    
React.useEffect(()=>{
  fatch();
},[])
  const [data, setData] = React.useState([]);
  
  const fatch = () => {
    axios.post("/list/listUser").then((res) => {
      setData(res.data.data)
      console.log(data)
    })
  }
 
  return (
    <div align="center">
        <div>
          <a style={{margin: '15px'}} href='/list'>List of users</a>
          <a style={{margin: '15px'}} href='/delete'>Delete users</a>
          <a style={{margin: '15px'}} href='/update'>Update users</a>
        </div>
      <div style={{marginTop: '30px'}}>
        <table style={{border: '1px solid black',padding:'15px'}} >
            <tr style={{border: '1px solid black',padding:'105px'}}>
                <th style={{border: '1px solid black',padding:'15px'}}>Index</th>
                <th style={{border: '1px solid black',padding:'15px'}}>Email</th>
                <th style={{border: '1px solid black',padding:'15px'}}>Name</th>
                <th style={{border: '1px solid black',padding:'15px'}}>Age</th>
            </tr>
            {data.map((item,index) => (
                <tr key={item.username}>
                    <td style={{border: '1px solid black',padding:'15px'}}>{index + 1}</td>
                    <td style={{border: '1px solid black',padding:'15px'}}>{item.username}</td>
                    <td style={{border: '1px solid black',padding:'15px'}}>{item.name}</td>
                    <td style={{border: '1px solid black',padding:'15px'}}>{item.age}</td>
                </tr>
            ))}
            </table>
        </div>    
    </div>
  );

};
export default List;