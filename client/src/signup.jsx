// import React,{useContext, useEffect} from 'react';
// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { ImCross } from "react-icons/im";
// import { context } from './App';
// import { FiEye } from "react-icons/fi";
// import { FiEyeOff } from "react-icons/fi";

// const Signup = () =>{

// const [signup,setSingup]=useState({uname:'' , email :'' , pass:'',Cpass:''});
// const [showEye,setShowEye] = useState(false)
// const navigate = useNavigate()
// const {setShowSignup} = useContext(context)

// const handleInput = (e)=>{
//     setSingup({...signup,[e.target.name]:e.target.value})

// }

// const handleSignup = async () =>{
//   if(!signup.uname || !signup.email || !signup.pass || !signup.Cpass ){
//     alert('fill the mendetary fields')
//   }
//    else if(signup.pass != signup.Cpass){
//     alert('passwords are not same')
//   }
//   else{
//   const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const check = validEmail.test(signup.email)
//     if(check==true){
//       const res = await axios.post(`https://project-management-system-ivory.vercel.app
// /api/createUser`,signup)
//    if(res.data.msg=='successfull'){
//     navigate('/login')
//    }
//    else if(res.data.msg=='exist'){
//     alert('email already exist')
//    }
//     }
//     else{
//       alert('invalid email')
//     }
//   }
 
 
// }

//     return(
//         <>
//         <div className='relative bg-[#020035] posSnL z-10 mt-20 w-[300px]
//         h-180 p-[30px] items-center justify-center flex flex-col rounded-lg'>
//             <h1 className='text-white  text-xl'>Signup</h1><br/>
//         <div>
//           <label className='text-[#fed573]'>Username :</label><br/>
//          <input type='text' placeholder='Enter Username : ' value={signup.uname}
//          name='uname' className='w-[230px] rounded-sm'onChange={handleInput}/>
        
//           </div><br/>

//          <div> 
//           <label className='text-[#fed573]'>Email :</label><br/>
//          <input type='email' placeholder='Enter Email : ' value={signup.email}
//          name='email' className='w-[230px] rounded-sm'onChange={handleInput}/>
//           </div><br/>
         
//       <div>
//         <label className='text-[#fed573]'>Password :</label><br/>
//          <div className='relative'> 
//           <input type={showEye==true?'text':'password'} placeholder='Enter Password : ' value={signup.pass}
//           name='pass'className='w-[230px] rounded-sm'onChange={handleInput}/>
//           {showEye==true?<FiEye color='black' className='absolute right-1 top-1' onClick={()=>setShowEye(false)}/>:
//           <FiEyeOff color='black' className='absolute right-1 top-1' onClick={()=>setShowEye(true)}/>}
//         </div>
//     </div><br/>
          

//          <div> 
//           <label className='text-[#fed573]'>Confirm Password :</label><br/>
//          <input type='password' placeholder='Enter Confirm Password : ' value={signup.Cpass}
//           name='Cpass' className='w-[230px] rounded-sm'onChange={handleInput}/>
//           </div><br/> 
//           <ImCross size='10px' color='white'className='absolute right-0 top-0 m-[8px] cursor-pointer' 
//           onClick={()=>{setShowSignup(false)}} />
//          <button onClick={handleSignup} className='bg-[#E92085] text-white rounded-xl w-20 h-8'>Signup</button>
       
//        </div>
          
 
//         </>
//     )
// }
// export default Signup;


import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ImCross } from "react-icons/im";
import { context } from './App';
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const Signup = () => {
  const [signup, setSignup] = useState({ uname: '', email: '', pass: '', Cpass: '', otp: '' });
  const [showEye, setShowEye] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // Track if OTP is sent
  const [loadingOtp, setLoadingOtp] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false); 
  const navigate = useNavigate();
  const { setShowSignup,setShowLogin } = useContext(context);

  // Handle input field changes
  const handleInput = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  // Send OTP to email
  const handleOTPGenerate = async () => {
    setLoadingOtp(true);
    if (!signup.email) {
      alert('Email is required');
      setLoadingOtp(false);
      return;
    }

    try {
      const res = await axios.post("https://project-management-system-ivory.vercel.app/api/generateOTP", { email: signup.email });
      // Set OTP response if needed
      setOtpSent(true); // OTP sent, show OTP input
    } catch (error) {
      alert("Failed to send OTP. Try again.");
    }

    setLoadingOtp(false);
  };

  // Handle signup submission
  const handleSignup = async () => {
  if (!signup.uname || !signup.email || !signup.pass || !signup.Cpass || !signup.otp) {
    alert('Please fill all fields');
    return;
  }

  if (signup.pass !== signup.Cpass) {
    alert('Passwords do not match');
    return;
  }

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const check = validEmail.test(signup.email);

  if (check) {
    try {
      setLoadingSubmit(true); // Start loading
      const res = await axios.post(
        'https://project-management-system-ivory.vercel.app/api/createUser',
        signup
      );

      if (res.data.msg === 'successful') {
        setShowSignup(false);
        setShowLogin(true);
        setLoadingSubmit(false);
      } else if (res.data.msg === 'exist') {
        alert('Email already exists');
        setLoadingSubmit(false);
      }
    } catch (error) {
      alert('Signup failed');
    } finally {
      setLoadingSubmit(false); // Stop loading
    }
  } else {
    alert('Invalid email');
  }
};

  return (
    <>
      <div className='relative bg-[#020035] posSnL z-10 mt-20 w-[300px] h-180 p-[30px] items-center justify-center flex flex-col rounded-lg'>
        <h1 className='text-white text-xl'>Signup</h1><br />
        {/* Username */}
        {!otpSent && (
          <div>
            <label className='text-[#fed573]'>Username :</label><br />
            <input
              type='text'
              placeholder='Enter Username : '
              value={signup.uname}
              name='uname'
              className='w-[230px] rounded-sm'
              onChange={handleInput}
            />
          </div>
        )}

        {/* Email */}
        {!otpSent && (
          <div>
            <label className='text-[#fed573]'>Email :</label><br />
            <input
              type='email'
              placeholder='Enter Email : '
              value={signup.email}
              name='email'
              className='w-[230px] rounded-sm'
              onChange={handleInput}
            />
          </div>
        )}

        {/* OTP Button */}
        {!otpSent && (
          <button
            onClick={handleOTPGenerate}
            disabled={loadingOtp || otpSent}
            className='bg-[#E92085] text-white rounded-xl w-20 h-8 mt-4'
          >
            {loadingOtp ? 'Sending OTP...' : 'Send OTP'}
          </button>
        )}

        {/* OTP and Password fields after OTP is sent */}
        {otpSent && (
          <>
            <div>
              <label className='text-[#fed573]'>OTP :</label><br />
              <input
                type='text'
                placeholder='Enter OTP : '
                value={signup.otp}
                name='otp'
                className='w-[230px] rounded-sm'
                onChange={handleInput}
              />
            </div><br />

            <div>
              <label className='text-[#fed573]'>Password :</label><br />
              <div className='relative'>
                <input
                  type={showEye ? 'text' : 'password'}
                  placeholder='Enter Password : '
                  value={signup.pass}
                  name='pass'
                  className='w-[230px] rounded-sm'
                  onChange={handleInput}
                />
                {showEye ? (
                  <FiEye color='black' className='absolute right-1 top-1' onClick={() => setShowEye(false)} />
                ) : (
                  <FiEyeOff color='black' className='absolute right-1 top-1' onClick={() => setShowEye(true)} />
                )}
              </div>
            </div><br />

            <div>
              <label className='text-[#fed573]'>Confirm Password :</label><br />
              <input
                type='password'
                placeholder='Confirm Password : '
                value={signup.Cpass}
                name='Cpass'
                className='w-[230px] rounded-sm'
                onChange={handleInput}
              />
            </div><br />

           

            <button onClick={handleSignup} className='bg-[#E92085] text-white rounded-xl w-20 h-8 mt-4'>
              {loadingSubmit?'Submitting...':'Submit'}
            </button>
          </>
        )}
        <ImCross size='10px' 
           color='white'className='absolute right-0 top-0 m-[8px] cursor-pointer' 
           onClick={()=>{setShowSignup(false)}} />
      </div>
    </>
  );
};

export default Signup;
