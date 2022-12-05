import React, { useState,useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase'
import {useNavigate} from 'react-router-dom'
function LandingPage() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [isRegistering,setRegistering]=useState(false)
    const [registerInfo,setRegisterInfo]=useState(
        {
            email:'',
            confirmEmail : '',
            password:'',
            confirmPassword:''
        }
    )
    const navigate = useNavigate();
    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value)
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth,email,password).then(()=>{
            navigate('/mainpage')
        }).catch((err)=>
         alert(err.message)
        )
    }

    const handleRegister = () =>{
        if(registerInfo.email!==registerInfo.confirmEmail || registerInfo.password!==registerInfo.confirmPassword){
            alert('Email or Password are not same')
        }
         createUserWithEmailAndPassword(auth,email,password).then(()=>{
            navigate('/mainpage')
         })
         .catch((err)=>alert(err.message))
    }

    createUserWithEmailAndPassword(auth,registerInfo.email,registerInfo.password).then(()=>{
        navigate('/mainpage')
    })
    .catch((err)=>alert(err.message))
  return (
    <div className='landing'>
        <h1>Memento</h1>
        <div className='login-register-container'>
            {
                isRegistering  ?
                <>
                <input type='email' placeholder='E-Mail' value={registerInfo.email} onChange={(e)=>setRegisterInfo({...registerInfo,email:e.target.value})}/>
                <input type='email' placeholder='Confirm E-Mail' value={registerInfo.confirmEmail} onChange={(e)=>setRegisterInfo({...registerInfo,confirmEmail:e.target.value})}/>
                <input type='password' placeholder='Password' value={registerInfo.password} onChange={(e)=>setRegisterInfo({...registerInfo,password:e.target.value})}/>
                 <input type='Confirm Password' placeholder='Confirm Password' value={registerInfo.confirmPassword} onChange={(e)=>setRegisterInfo({...registerInfo,confirmPassword:e.target.value})}/>
            <button onClick={handleRegister}>Register</button>
            <button onClick={()=>setRegistering(true)}>Return Back</button>
                </> :
                <>
                <input type='email' onChange={handleEmailChange} value={email}/>
            <input type='password' onChange={handlePasswordChange} value={password}/>
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={()=>setRegistering(true)}>Create Account</button>
                </>
            }
        </div>
    </div>
  )
}

export default LandingPage