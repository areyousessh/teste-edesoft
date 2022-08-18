import {initializeApp} from "firebase/app"
import {addDoc, collection, getDocs, getFirestore, doc, deleteDoc} from "firebase/firestore"
import { useEffect, useState } from "react";

const firebaseConfig = initializeApp ({
  apiKey: "AIzaSyC-DPesmPR2Gw2Q0xxYTwy1AWL6J1Z7gt8",
  authDomain: "react-crud-95be9.firebaseapp.com",
  projectId: "react-crud-95be9",
});


export function App() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [users, setUsers] = useState([])

    const db = getFirestore(firebaseConfig)
    const userCollectionRef = collection(db, "users")

    async function createUser() {
        const user = await addDoc(userCollectionRef, {
            name, email
        });

        console.log(user)
    }
    

    useEffect(() =>{
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id:doc.id })));
        };

        getUsers();
    }, [])

    async function deleteUser(id) {
        const userDoc = doc(db, 'users', id);
        await deleteDoc(userDoc);
    }

    return(
        <div className="flex flex-col items-center justify-center">
            <input className="mt-20 w-44 h-8 rounded-md" type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>
            <input className="mt-5 w-44 h-8 mb-5 rounded-md" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <button className="w-44 h-8 mb-10 bg-white rounded-md" onClick={createUser}>Criar User</button>
            <ul>
              {users.map((user) =>{
                return(
                    <div className="flex flex-col items-start justify-start" key={user.id}>
                        <li className="text-xl">{user.name}</li>
                        <li>{user.email}</li>
                        <button className="w-40 h-8 mt-5 bg-white rounded-md" onClick={() => deleteUser(user.id)}>Deletar usuario</button>
                    </div>
                )
              })}
            </ul>
        </div>
    )
}