
import axios from 'axios'
import React , {useState} from 'react'
import api from './service/DopService.json'
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
export const AdminLogin = () => {

  const history=useNavigate();

  const [data,setData]= useState({
    userName: ""
   })


   const  adminOtp=()=>{

    axios.post(api.apiLoginOtp+"?userName="+data.userName)
    .then((res)=>{
      if(res.status==200){
       swal("OTP Send Succesfuly!", "You OTP is:"+res.data, "success")
      }else{
        swal("OTP Send Succesfuly!", "You OTP is:"+res.data, "error")
      }

    }).catch((e)=>{
      console.log(e)
    })

   }
   const [logindata,setloginData]= useState({
    otp: ""
   })
   

   const loginAdmin=()=>{

    axios.post(api.apiLoginAdmin+"?OTP="+logindata.otp)
    .then((res)=>{
      if(res.status==200){
        history("/dopAccountUpdate")
      }else{
        swal("Authentication Fail!", "error")
      }

    }).catch((e)=>{
      console.log(e)
    })

   }


  return (
    <div>


<div class="container my-2 d-flex justify-content-center  my-4" >
      

      <form className="border  p-4 rounded" >
        
        <div class="form-outline mb-4 ">
        <label   class="form-label" for="form2Example1">Email address</label>
          <input onChange={(e)=>{setData({...data,userName:e.target.value})}}
           type="email" id="form2Example1" class="form-control" />
        </div>
      
        <div class="mb-4  d-flex justify-content-center" >
  
      <div class="form-check p-1">
      <button type="button" onClick={adminOtp} class="btn btn-info ">Send OTP</button>
    </div>

    <div class="form-check p-1">
        <input onChange={(e)=>{setloginData({...logindata,otp:e.target.value})}} 
        type="password" id="otp" placeholder='Enter OTP' class="form-control" />
    </div>
  </div>
       
      
      
        
      
       
        <button type="button" onClick={loginAdmin} className="btn btn-success btn-block mb-4 "  >Sign in</button>
      
        
        <div class="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
        </div>
      </form>  
      
      </div>

    </div>

  )
}
