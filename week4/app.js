const express= require("express")
const R1= require("./routemod")
const B1= require("./routebook")
const app= express();
const port = 80;

app.use("/routemod", R1)
app.use("/routebook",B1)

const server= app.listen(port, ()=>{
    console.log(`server created on port ${port}`)
})