var express=require("express")
var router=express.Router()

router.get("/", (req, res)=>{
res.send("welcome to home page")
})
router.get("/about", (req, res)=>{
    res.send("welcome to about page")
})

module.exports= router