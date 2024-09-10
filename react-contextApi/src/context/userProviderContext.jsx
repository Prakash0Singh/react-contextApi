import React, { useState } from "react";
import UserContext from "./userContext";

const UserContexProvider=({childern})=>{
    const [user,setUser]=useState(null)
    return (
        <UserContext.Provider value={{user,setUser}}>
        {childern}
        </UserContext.Provider>
    )
}

export default UserContexProvider