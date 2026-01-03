import { useContext, useEffect, useRef } from "react";

export default function NavBar({
    search,seetSearch,type,setType,parking
}){
    const {logout} = useContext(AuthContext);
    const ref = useRef();
    useEffect = (()=>{
        ref.current.focus();
    },[]);
    return (
        <div>
            
        </div>
    )
}