import HomeButton from "./HomeButton";
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogIn (){

    const navigate = useNavigate()

    async function submit(e) {
      e.preventDefault()
      
      const rawResponse = await fetch(`http://localhost:4000/logIn`, {
         method: "POST",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            email: e.target.email.value,
            password: e.target.password.value
         }),
      });
  
      console.log(rawResponse.ok);
  
      if(rawResponse.ok) {
         navigate('/')
      } else {
         console.error('failed')
      }
      
    }
    
    return (
      <div >
        <form onSubmit={submit} className="form-signin">
          <h1 >Please log in</h1>
  
          <div>
            <input
              name="email"
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              name="password"
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
  
          <button type="submit">
            LogIn in
          </button>
        </form>

        <HomeButton/>
      </div>
    );
}

export default LogIn