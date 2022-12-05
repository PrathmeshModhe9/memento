import React, { useEffect } from 'react'
import {signOut} from 'firebase/auth'
import {auth} from '../firebase.js'
import { useNavigate } from 'react-router-dom'



function MainPage() {
    const navigate = useNavigate()
          
    useEffect(()=>{
         auth.onAuthStateChanged(user=>{
            if(!user){
                navigate('/')
            }
         })
    },[])
     const handleSignOut=()=>{
        signOut(auth).then(()=>{
            navigate('/')
        })
        signOut(auth).catch((err)=>{
            alert(err.message)
        })
     }

     return (
        <div>
            <h1>test</h1>
            <button onClick={handleSignOut}>
                  signout
            </button>
        </div>
     )
}


export default MainPage
