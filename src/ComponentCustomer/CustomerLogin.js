import { NavBar } from "./NavBar"
import React , {useState} from 'react'
import api from './service/DopService.json'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const CustomerLogin= () => {

  const history=useNavigate();
  

  const [data,setData]= useState({
    userName: "",
    passWord: ""
   })
 

   const login=(e)=>{
   e.preventDefault()
    document.getElementById("signIN").innerHTML="<div class='spinner-border' role='status'><span class='sr-only'>Loading...</span></div>"
    

axios.post(api.apiLoginCustomer,data)
.then((res)=>{
if(res.status==200){
  sessionStorage.setItem("jwt",res.data)
  document.getElementById("signIN").innerHTML="Sign in"
  history("/dopAccountUpdate")

}else{
  console.log(res.data)
  document.getElementById("signIN").innerHTML="Sign in"
}})
.catch((e)=>{
  console.log(e)
  document.getElementById("signIN").innerHTML="Sign in"
})

   }

    return (
      <div>
  <div class="container my-2 d-flex justify-content-center " >
  <img src="india-post-logo.png" ></img>
  
  </div>
  <h1 className="d-flex justify-content-center my-2">Login here</h1>
     
<div class="container my-2 d-flex justify-content-center " >
      

<form className="border  p-4 rounded" >
  
  <div class="form-outline mb-4 ">
  <label class="form-label" for="form2Example1">Email address</label>
    <input onChange={(e)=>{setData({...data,userName:e.target.value})}} 
    type="email" id="form2Example1" class="form-control" />
  </div>


  <div class="form-outline mb-4">
  <label class="form-label" for="form2Example2">Password</label>
  <input onChange={(e)=>{setData({...data,passWord:e.target.value})}}
   type="password" id="form2Example2" class="form-control" />
  </div>


  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
 
      <div class="form-check">
      <a href="#!">Forgot Password?</a>
      
      </div>
    </div>

    <div class="col">
      
      <a href="/loginAdmin">Login as Admin?</a>
    </div>
  </div>

 
  <button type="button" id="signIN" onClick={login} className="btn btn-success btn-block mb-4 ">Sign in</button>

  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
  </div>
</form>  

</div>
</div>

    )
}