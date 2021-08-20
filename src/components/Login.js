import axios from "axios";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [auth, setAuth] = useState({
    username :"",
    password: ""
  })

  const [error, setError] = useState("")
  //replace with error state
  const { push } = useHistory();
  const changeHandler = (e) =>{
    setAuth({
      ...auth,
      [e.target.name] : e.target.value
    })

  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', auth)
    .then(res =>{
      console.log(res)
      if(res.status == 200){
        localStorage.setItem("token", res.data.payload);
        console.log(res.data)
        push('/bubblespage')
      }
    })
    .catch(err =>{
      const res = err.response
      if(res.status == 403){
        setError(res.data.error)
      }
      console.log("Error while login API call. Error:", err)
    })

  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Login Form</h2>
        <form>
          <label>Username</label>
          <input id="username" name="username" type="text"  onChange={changeHandler} value={auth.username}/>
          <label>Password</label>
          <input id="password" name="password" type="password" onChange={changeHandler} value={auth.password}/>
          <button id="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"