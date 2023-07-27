import { useState, useEffect } from "react"
import {useNavigate} from "react-router-dom"

import getUsers from "./api/users";

export default function LoginPage(){

    const [securityNumber, setSecurityNumber]= useState("")
    const navigate=useNavigate();

    let userNum=null;

    const checkToken = () =>{
        const dataToken= localStorage.getItem("token");
        if(dataToken){
            navigate('/')
        }
    }

    useEffect(()=>{
        checkToken()

    },[])

    const handleLogin=async (e) =>{
        e.preventDefault()
        try{
            let inputUser=securityNumber;
            console.log(inputUser.length);

            if(inputUser.length>4 || inputUser.length<4){
                if(!alert('Security Number is invalid, it must be 4 digits')){window.location.reload();}
            }

            let listUser=await getUsers();
            console.log("ini isi list user",listUser)

            for(let i = 0; i< listUser.length; i++){
                if(listUser[i].securityNumber == inputUser){
                    userNum=i;
                    console.log("user ditemukan didalam database:",i);
                    localStorage.setItem("token", inputUser)
                    navigate('/')
                }
            }
            console.log(userNum);
            if(userNum===null){
                if(!alert('your security number doesnt exist, login invalid')){window.location.reload();}
            }

            

        }catch(err){
            console.log(err)
        }

    }

    return(
        <> 
            <div className="container border rounded border-info align-self-center my-5">
                <form onSubmit={e => handleLogin(e)}>
                    <label className="form-label">
                                <b>Security Number:</b>
                    </label>
                    <br/>
                    <input type="securityNumber" onChange={e => setSecurityNumber(e.target.value)}/>
                    <br/>
                    <input type="Submit"/>
                </form>
            </div>
        
        </>
    )
}