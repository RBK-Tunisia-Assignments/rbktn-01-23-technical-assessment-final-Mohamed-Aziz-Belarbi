const express = require("express");
const app = express();
const PORT = 4000;
const cors=require('cors')
const connection=require("./database-mysql/index.js")
app.use(cors())
app.use(express.json())
const route=require('../server/routes/recipiesRoute.js')
app.use("/recepie",route)
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
