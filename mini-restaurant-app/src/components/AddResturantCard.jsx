import { useState } from "react"
import { getRestaurants, saveRestaurants } from "../utils/localStorage";

const AddRestaurantForm = ( {refresh})=>{
    const [form,setForm] = useState({
        restaurantName: "",
        address: "",
        rating: 0,
        votes: 0,
        review: 0,
        contactNumber: 0,
        image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",
    });
    const handledAdd = ()=>{
         if (!form.restaurantName || !form.address || ! !form.type) return alert('All Fields Required');
         const data = getRestaurants();
         const newRestaurants = {...form,restaurantId: Date.now(),parkinglot : form.parkinglot==='true'};
    }

    saveRestaurants([...data,newRestaurants]);
    alert("Restaurant Added Successfully");
    refresh();
    setForm({...form,restaurantName:"",address:""});
    return (
        <div>
            <h3>Add Restaurant</h3>
            <input placeholder="Name" onChange={(e)=>setForm({...form,restaurantNamee:e.target.value})}/>
            <input placeholder="Address" onChange={(e)=>setForm({...form,address:e.target.value})}/>
            <select onChange={(e)=>setForm({...form,type:e.target.value})}>
                <option value="">Select Type</option>
                <option>Rajashan</option>
                <option>Gujarati</option>
                <option>Mughali</option>
                <option>Thai</option>

            </select>
            <select onChange={(e)=>setForm({...form, parkinglot:e.target.value})}>
                <option value="">Parking Lot</option>
                <option>true</option>
                <option>false</option>
            </select>
            <button onClick={handledAdd}>Add Restaurant</button>
        </div>
    )
    
}
export default AddRestaurantForm;