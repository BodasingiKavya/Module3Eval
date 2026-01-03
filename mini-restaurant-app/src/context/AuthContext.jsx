import { createContext,useState } from "react";

export const AuthContext = createContext();

const users ={
    admin:{
        email: "admin@gmiail.com",
        password: "admin@1234",
        role:'admin'
    },
    customer:{
        email: "customer@gmiail.com",
        password: "customer@1234",
        role:'customer'
    }

    };

export const AuthProvider = ({children})=>{
    const [auth,setAuth] = useState(
        JSON.parse(localStorage.getItem("auth")) || null
    );
    const login = (email,password)=>{
        const user = users.find((user)=>user.email === email && user.password === password);
        if (!user){
            alert("Ivalid Email Or Password");
            return false;
        }
        localStorage.setItem("auth",JSON.stringify(user));
        setAuth(user);
        return user.role;
    };
    const logout = ()=>{
        localStorage.removeItem("auth");
        setAuth(null);
    }
    return (
        <AuthContext.Provider value={{auth,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
