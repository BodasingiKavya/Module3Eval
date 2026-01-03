import { Routes,Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminDashBoard from "./pages/admin/AdminDashBoard";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import Login from "./pages/Login";
import UpdateRestaurant from "./pages/admin/UpdateRestaurant";

function App(){
  return (
    <>
      <Routes>
        <Route path="/" element ={<Login/>}/>
        <Route path="/admin/dashboard" element ={
          <ProtectedRoute role="admin"><UpdateRestaurant/></ProtectedRoute>}/>

        <Route path="/customers/dashboard" element ={
          <ProtectedRoute role="customer"><CustomerDashboard/></ProtectedRoute>}/>
      </Routes>
    </>
  )
}
export default App;