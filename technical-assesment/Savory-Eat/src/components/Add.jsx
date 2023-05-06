import React from "react";
import "../App.css";
import axios from "axios";
import { useState } from "react";



const Add = ({fetchData}) => {
const [Cook_Time,setCook_Time]=useState("")
const [Prep_Time,setPrep_Time]=useState("")
const [recepie_Name,setRecepie_Name]=useState("")
const [Serves,setServes]=useState("")
const [categorie,setCategorie]=useState("")
const [recepie_Image,setRecepie_Image]=useState("")
const [recepie_Description,setRecepie_Description]=useState("")
const [recepie_Ingredients,setRecepie_Ingredients]=useState("")
const[users_user_Id,setUsers_user_Id]=useState("")


const Addrecepie=()=>{
  const body={
    Cook_Time:Cook_Time,
    Prep_Time:Prep_Time,
    recepie_Name:recepie_Name,
    Serves: Serves,
    categorie:categorie,
    recepie_Image:recepie_Image,
    recepie_Description:recepie_Description,
    recepie_Ingredients:recepie_Ingredients,
    users_user_Id:users_user_Id
  }

  axios.post('http://localhost:4000/recepie/add',body)
  .then((res)=>{
console.log(res.data);
  })
  .then(()=>fetchData())
  .catch((err)=>{console.log(err);})
}

  return (
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name" onChange={(e)=>setRecepie_Name(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" onChange={(e)=>setCook_Time(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time" onChange={(e)=>setPrep_Time(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves" onChange={(e)=>setServes(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Category" onChange={(e)=>setCategorie(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description" onChange={(e)=>setRecepie_Description(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input type="text" placeholder="Ingredients" onChange={(e)=>setRecepie_Ingredients(e.target.value)}  />
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL" onChange={(e)=>setRecepie_Image(e.target.value)} />
      </div>
      <div className="form-group">
        <label>user_Id:</label>
        <input type="text" placeholder="user_Id" onChange={(e)=>setUsers_user_Id(e.target.value)} />
      </div>
      <button className="create-recipe-btn" onClick={Addrecepie}>Create Recipe</button>

     
    </div>
  );
};
export default Add;
