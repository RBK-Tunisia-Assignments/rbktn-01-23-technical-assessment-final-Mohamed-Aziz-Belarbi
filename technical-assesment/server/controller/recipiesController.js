const conn= require('../model/recipiesModel')

module.exports = {
 getAll:(req,res)=>{
  conn.getAll((err,result)=>{
    err?res.status(500).send(err):res.status(200).send(result)
  })
 },
 addRecepie:(req,res)=>{
  conn.addRecepie((err,result)=>{
    err?res.status(500).send(err):res.status(201).send(result)
  },[req.body.Cook_Time,req.body.Prep_Time,req.body.recepie_Name,req.body.Serves,req.body.categorie,req.body.recepie_Image,req.body.recepie_Description,req.body.recepie_Ingredients,req.body.users_user_Id])
 }
,
deleteRecepie:(req,res)=>{
  {
    conn.deleteRecepie((err,result)=>{
      err?res.status(500).send(err):res.status(200).send(result)
    },req.params.id)
   }
  },

  updateRecepie:(req,res)=>{
{
  conn.updateRecepie((err,result)=>{
    err?res.status(500).send(err):res.status(200).send(result)
  },req.params.id,req.body.Cook_Time,req.body.Prep_Time,req.body.recepie_Name,req.body.Serves,req.body.categorie,req.body.recepie_Image,req.body.recepie_Description,req.body.recepie_Ingredients)
}
  }

}

