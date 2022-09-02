import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUserName } from "./features/Users";
import { JSXElementConstructor, ReactElement, ReactFragment, ReactNode, ReactPortal, useEffect, useState } from "react";

export function App() {

    const userList = useSelector((state) => state.users.value)
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [username, setUserName] = useState("")
    const [newUsername, setNewUserName] = useState("")

    return(
        <div className="flex flex-1 flex-col items-center justify-center">
            <div className="flex flex-1">
                <input className="mt-20 mr-10 text-center" type="text" placeholder="Name" onChange={(event) => {setName(event.target.value)}}/>
                <input className="mt-20 mr-10 text-center" type="text" placeholder="Username" onChange={(event) => {setUserName(event.target.value)}}/>
                <button onClick={() => {dispatch(addUser({id: userList[userList.length -1]. id + 1 , name , username}))}} className="mt-20 mr-10 bg-slate-200 w-20">Add User</button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center mt-20">
                {userList.map((user: {
                    [x: string]: ReactNode; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; 
            }) => {
                    return (
                        <div className="flex flex-1 flex-col w-full h-full border-2 border-stone-500 mb-8">
                            <h1 className="mt-2 text-center">{user.name}</h1>
                            <h1 className="mt-1 mb-5 text-center">{user.username}</h1>
                            <div className="flex flex-1">
                                <input className="h-7 w-26 ml-4 mt-4 mb-8 text-center" type="text" placeholder="new username" onChange={(event) =>{setNewUserName(event.target.value)}}/>
                                <button onClick={() => dispatch(updateUserName({id: user.id, username: newUsername}))} className="flex flex-1 mr-10 mt-4 ml-5 h-7 w-40 bg-slate-200 items-center justify-center">Update Username</button>
                                <button onClick={() => dispatch(deleteUser({id: user.id}))} className="flex flex-1 mr-10 mt-4 h-7 w-40 bg-slate-200 items-center justify-center">Delete User</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
