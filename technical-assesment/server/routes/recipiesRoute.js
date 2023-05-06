const express = require("express");
const router = express.Router();

const{getAll,addRecepie,deleteRecepie,updateRecepie}=require('../controller/recipiesController')

router.get("/",getAll);
router.post("/add",addRecepie)
router.delete("/:id",deleteRecepie)
router.put("/:id",updateRecepie)

module.exports = router;
