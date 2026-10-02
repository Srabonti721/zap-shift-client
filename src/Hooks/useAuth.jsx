import React from 'react'
import {use} from "react";
import{AuthContext} from "../Context/AuthProvider"
const useAuth = () => {
    const userInfo = use(AuthContext);

  return userInfo;
}

export default useAuth
