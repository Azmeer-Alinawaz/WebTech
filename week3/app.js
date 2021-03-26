const express = require("express")
var app=express()

app.get("/",(req, res)=>{
    res.send('hello world')
})
app.post('/intro',(req,res)=>{
    res.send("Hey there it's me azmeer.")
})
var server = app.listen(8080,()=>{
console.log('express created')
})