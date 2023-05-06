import axios from 'axios';
import React from 'react';
import { useState } from 'react';


function UpdateRecepie() {

    const [Cook_Time,setCook_Time]=useState("")
    const [Prep_Time,setPrep_Time]=useState("")
    const [recepie_Name,setRecepie_Name]=useState("")
    const [Serves,setServes]=useState("")
    const [categorie,setCategorie]=useState("")
    const [recepie_Image,setRecepie_Image]=useState("")
    const [recepie_Description,setRecepie_Description]=useState("")
    const [recepie_Ingredients,setRecepie_Ingredients]=useState("")
    



    const update=(id)=>{
        const updated={
        Cook_Time:Cook_Time,
          Prep_Time:Prep_Time,
          recepie_Name:recepie_Name,
          Serves: Serves,
          categorie:categorie,
          recepie_Image:recepie_Image,
          recepie_Description:recepie_Description,
          recepie_Ingredients:recepie_Ingredients
       }
       axios.put(`http://localhost:4000/recepie/${id}`,updated)
       .catch((Err)=>console.log(Err))
      }



    return (
        <div>
           <input type="text" placeholder="Name" onChange={(e)=>setRecepie_Name(e.target.value)}/>
           <input type="number" placeholder="Cooking Time" onChange={(e)=>setCook_Time(e.target.value)} />
           <input type="number" placeholder="Preparation Time" onChange={(e)=>setPrep_Time(e.target.value)} />
           <input type="number" placeholder="serves" onChange={(e)=>setServes(e.target.value)} />
           <input type="text" placeholder="Category" onChange={(e)=>setCategorie(e.target.value)} />
           <input type="text" placeholder="Description" onChange={(e)=>setRecepie_Description(e.target.value)} />
           <input type="text" placeholder="Ingredients" onChange={(e)=>setRecepie_Ingredients(e.target.value)}  />
           <input type="text" placeholder="Image URL" onChange={(e)=>setRecepie_Image(e.target.value)} />
          <button type='submit' onClick={update}> edit</button>
        </div>
    );
}

export default UpdateRecepie;