import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children,role}){
    const {auth} = useContext(AuthContext);
    if(!auth){
        return <Navigate to="/"/>
    }
    if (role && auth.role !== role){
        return <Navigate to="/"/>
    }
    return children;
}

export default ProtectedRoute;