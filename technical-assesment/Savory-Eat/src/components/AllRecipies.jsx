import React from "react";
import "../index.scss";
import axios from "axios";


const AllRecepies = ({data,fetchData}) => {

  const deleteRecepie=(id)=>{
    axios.delete(`http://localhost:4000/recepie/${id}`)
    .then(()=>fetchData())
    .catch(err=>console.log(err))
    }

    
    
  return (
    <div className="card-container">
    {data.map(recepie=>{
      return( 
        <div className="card" id='data' key={recepie.recepie_Id} >
        <button className="delete" onClick={()=>deleteRecepie(recepie.recepie_Id)}>delete</button>
        <button className="update">update </button>

        <>
          <div className="header">
            <img
              className="img"
              src={recepie.recepie_Image}
              alt="food"
            />
          </div>
          <div className="text">
            <h1 className="food">{recepie.recepie_Name}</h1>
            <i> 25 Mins</i> <br />
            <i> Serves:5 </i>
          </div>
        </>
       
      </div>

      )}
    )}
   </div>
  )
    }

export default AllRecepies;
