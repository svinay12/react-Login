import './App.css';
import { useState } from "react";
import Axios from 'axios';


function App() {

  const [usernameReg, setUserNameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const [loginStatus,setLoginStatus]= useState("");

  const register = () => { 

    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((res) => {
      console.log(res);
    });
  };

  const login =() => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {


      if(response.data.message){
        setLoginStatus(response.data.message);
      }
      else {
        setLoginStatus("Match found [ Name:"+response.data[0].username+" ]");
      }
    });
  };

  return (
    <div className="App">

      <div className="form-group">
        <h1> Registration </h1>
        <label htmlfor="exampleInputEmail1">Email address</label>
        <input type="email" placeholder="Enter email"
          onChange={(e) => {
            setUserNameReg(e.target.value);
          }} />
          <br></br>

        <label htmlfor="exampleInputPassword1">Password</label>
        <input type="password" placeholder="Password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }} />
        <button type="submit" onClick={register}>Submit</button>
      </div>

      <div className="form-group">
        <h1> login </h1>
        <label htmlfor="exampleInputEmail1">Email address</label>
        <input type="email" placeholder="Enter email"
          onChange={(e) => {
            setUsername(e.target.value);
          }} />
        <br></br>
        <label htmlfor="exampleInputPassword1">Password</label>
        <input type="password" placeholder="Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }} />
        <button type="submit" onClick={login}>Login</button>
      </div>
      <h1>{loginStatus}</h1>
    </div>

  );
}

export default App;
