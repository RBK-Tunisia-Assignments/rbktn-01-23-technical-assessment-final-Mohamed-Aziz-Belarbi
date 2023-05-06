const connection = require("../database-mysql/index");
//uncomment this line if you want to use promises
// const  connection  = require("../database-mysql/index").promise();



module.exports = {

    getAll:(callBack)=>{
        const sql='SELECT * FROM recepie '

        connection.query(sql,function(err,result){
            callBack(err,result)
    })
},

addRecepie:(callBack,Cook_Time,Prep_Time,recepie_Name,Serves,categorie,recepie_Image,recepie_Description,recepie_Ingredients,id)=>{
    const sql='insert into recepie (Cook_Time,Prep_Time,recepie_Name,Serves,categorie,recepie_Image,recepie_Description,recepie_Ingredients,users_user_Id) VALUES (?)'
connection.query(sql,[Cook_Time,Prep_Time,recepie_Name,Serves,categorie,recepie_Image,recepie_Description,recepie_Ingredients,id],(err,result)=>{
    callBack(err,result)
        })
    },

    deleteRecepie:(callBack,id)=>{
        const sql= 'delete from recepie where recepie_Id=?'
connection.query(sql,id,(err,result)=>{
callBack(err,result)
    })

},

updateRecepie:(callBack,id,Cook_Time,Prep_Time,recepie_Name,Serves,categorie,recepie_Image,recepie_Description,recepie_Ingredients)=>{
const sql='update recepie set Cook_Time=?,Prep_Time=?,recepie_Name=?,Serves=?,categorie=?,recepie_Image=?,recepie_Description=?,recepie_Ingredients=? where recepie_Id=? '
connection.query(sql,[Cook_Time,Prep_Time,recepie_Name,Serves,categorie,recepie_Image,recepie_Description,recepie_Ingredients,id],(err,result)=>{
    callBack(err,result)
})
}
   
}
