import React, { useContext } from 'react'
import { Navigate, Outlet,redirect } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext'


const PrivateRouteCandidate = () => {
 
    const {user} = useContext(AuthContext);

    if(user){
        if(user.role[0].authority==="CandidateUser"){
            return (
                <Outlet/>
            )
        }
        else{
            return(
                <Navigate to="/"/>
            )
        }
    }
    else{
        return(
            <Navigate to="/"/>

        )
        
    }
    
}

export default PrivateRouteCandidate
