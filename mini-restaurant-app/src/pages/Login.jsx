import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const {login} =useContext(AuthContext);
    const navigate = useNavigate();
    const [eamil,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleLogin = ()=>{
        const role =login(eamil,password);
        if (role == 'admin'){
            navigate("/admin/dashboard");
        }
        if (role == 'customer'){
            navigate("/customers/dashboard");
        }
    }

    return(
        <>
            <div>
                <h1>Login</h1>
                <input placeholder="Email " onChange={(e)=>setEmail(e.target.value)}/>
                <input placeholder="Password " onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={handleLogin}>Login</button>
            </div>
        </>
    )
}

export default Login;