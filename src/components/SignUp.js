import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HomeButton from "./HomeButton";

function SignUp(){
   
   const navigate = useNavigate()

   const { id } = useParams();
   const startData = {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
   };
   const [data, setData] = useState(startData);

   async function registerUser(e) {
      e.preventDefault();
      const rawResponse = await fetch(`http://localhost:4000/signIn`, {
         method: "POST",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            userName: e.target.userName.value,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            password: e.target.password.value,
         }),
      });
    
      console.log(rawResponse.status);
      
      if(rawResponse.status == 201) {
         navigate('/success')
      } else {
         console.error('failed')
      }
   }
   return (
      <div>
         <h1>Sign in</h1>
         <form onSubmit={registerUser}>
            <label name="userName">
               User Name
               <input name="userName" type="string" maxLength={30} required />
            </label>
            <label name="firstName">
               First Name
               <input name="firstName" type="string" maxLength={30} required />
            </label>
            <label name="lastName">
               Last Name
               <input name="lastName" type="string" maxLength={30} required />
            </label>
            <label name="email">
               Email
               <input name="email" type="email" maxLength={30} required />
            </label>
            <label name="password">
               Password (between 5 and 10 characters)
               <input
                  name="password"
                  type="password"
                  minLength={5}
                  maxLength={10}
                  required
               />
            </label>
            <button type="submit">sign in</button>
         </form>

         <HomeButton/>
      </div>
   );

}

export default SignUp;