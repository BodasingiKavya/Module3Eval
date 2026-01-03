const RestaurantCard =({data,isAdmin,onDelete,onUpdate})=>{
    return (
        <>
            <div style={{border:"1px solid grey",margin:10,padding:10}}>
                <img src={data.image} width={150} alt={data.restaurantName} />
                <h3>{data.restaurantName}</h3>
                <p>{data.address}</p>
                <p>{data.type}</p>
                <p>Parking:{data.parkinglot ? "Yes":"No"}</p>
               
                {isAdmin && (
                    <>
                        <button onClick={()=>onDelete(data.restaurantId)}>Delete</button>
                        <button onClick={()=>onUpdate(data.restaurantId)}>Update</button>
                    </>
                )}
            </div>
        </>
    )
}

export default RestaurantCard;