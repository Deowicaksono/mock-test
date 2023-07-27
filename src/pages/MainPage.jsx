import { useState, useEffect } from "react"
import {useNavigate} from "react-router-dom"
import getUsers from "./api/users";

import { useDispatch, useSelector } from "react-redux";
import { userLogin, userLogout } from "../redux/actions/users";


export default function MainPage(){


    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(state => state.usersReducer);
    let userNum=null;

    const checkToken = () =>{
        const dataToken= localStorage.getItem("token");
        if(!dataToken){
            alert("no access token, please login first")
            navigate('/login')
        }
    }

    const handleLogout=async () =>{

        try{
            alert("Logout Successfully");
            const delUser=userLogout();
            dispatch(delUser);
            localStorage.removeItem("token");
            navigate('/login')
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        checkToken()
        fetchData()
    },[])

    const fetchData=async () =>{
        try{
            const data=await getUsers();
            const tokenCurrentUser=localStorage.getItem("token");

            for(let i=0;i< data.length; i++){
                if(data[i].securityNumber == tokenCurrentUser){
                    userNum=i;
                }
            }
            console.log(userNum,"==> posisi data user dalam database");
            if(userNum===null){
                alert("fake token, you access our page illegaly");
                localStorage.removeItem("token");
                navigate("/login")
            }

            const setUser=userLogin(data[Number(userNum)]);
            dispatch(setUser);
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <div className="container border rounded border-info mt-3">
                <h1>Welcome to Homepage</h1>

                <div className="mb-3 rounded border">
                    <label className="form-label">
                        <b>Name:</b>
                    </label>
                        {user && <p className="text-muted">{user.name}</p>}
                </div>

                <div className="mb-3 rounded border">
                    <label className="form-label">
                        <b>Age:</b>
                    </label>
                        {user && <p className="text-muted">{user.age}</p>}
                </div>

                <div className="mb-3 rounded border">
                    <label className="form-label">
                        <b>City:</b>
                    </label>
                        {user && <p className="text-muted">{user.city}</p>}
                </div>

                <div className="mb-3 rounded border">
                    <label className="form-label">
                        <b>Position:</b>
                    </label>
                        {user && <p className="text-muted">{user.position}</p>}
                </div>
                <div className="mb-3 rounded border">
                    <ul class="list-group rounded-0">
                    <li class="list-group-item border-0 d-flex align-items-center ps-0">
                        <input class="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                        Task list and assignments
                    </li>
                    <li class="list-group-item border-0 d-flex align-items-center ps-0">
                        <input class="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                        Set Sprint review date
                    </li>
                    <li class="list-group-item border-0 d-flex align-items-center ps-0">
                        <input class="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                        Check the Progress with Team
                    </li>
                    <li class="list-group-item border-0 d-flex align-items-center ps-0">
                        <input class="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                        Update the userflow and stories
                    </li>
                    <li class="list-group-item border-0 d-flex align-items-center ps-0">
                        <input class="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                        Finish the Project
                    </li>
                    </ul>
                </div>
                <div className="d-flex justify-content-end">
                    <a onClick={handleLogout} className="btn btn-danger">
                            Logout
                    </a>
                </div>
                


            </div>
        
        </>
    )
}