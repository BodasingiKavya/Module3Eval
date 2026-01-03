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
            <input ref ={ref} placeholder="Search" value={search} onChange={(e)=>seetSearch(e.target.value)}/>
            <select onChange={(e)=>setType(e.target.value)}>
                <option value="">All</option>
                <option>Rajasthani</option>
                <option>Gujarati</option>
                <option>Mughali</option>
                <option>Thai</option>
            </select>
            <select onChange={(e)=>setParking(e.target.value)}>
                <option value="">All</option>
                <option>true</option>
                <option>false</option>
            </select>
            <button onClick={logout}>Logout</button>
        </div>
    )
}