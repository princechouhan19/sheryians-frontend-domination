import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userdelete } from "../store/reducers/UserReducer";

function Users() {

  const {users} = useSelector(state => state.UserReducer)

  const dispatch = useDispatch()

  const DeleteHandler = (index) => {
    dispatch(userdelete(index));
  }

  return (
    <div className="container w-[90vw] mx-auto bg-red-100 h-contain rounded-md mt-8 p-8">
      <h1 className="text-2xl font-bold text-red-900 pb-4">User List</h1>
      {users.map((user , index)=>{
        return(
            <div className="" key={user.id}>
                <h1>{user.name}
                  <span className="cursor-pointer" onClick={()=> DeleteHandler(index)}> ❌</span>
                </h1>
            </div>
        );
      })}
    </div>
  );
}

export default Users;
