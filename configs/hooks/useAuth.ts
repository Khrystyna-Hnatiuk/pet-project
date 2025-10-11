import { auth } from "@/lib/firebase/config";
import { onAuthStateChanged, User } from "firebase/auth";
import { use, useEffect,useState } from "react";

export const useAuth =()=>{
    const [user, setUser] = useState<User|null>(null);
    const [loading,setloading] = useState(true);

    useEffect(()=>{
        const  unsubscribe= onAuthStateChanged(auth,(user)=>{
            setUser(user);
            setloading(false)
        });
        return ()=>unsubscribe()
        
    },[]);
    return {user, loading}
}