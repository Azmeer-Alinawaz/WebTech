var express=require("express")
var router=express.Router()

router.get('/',(req,res)=>{
res.send("Retrieve all books")
})
router.post('/',(req,res)=>{
res.send("Add books")
})
router.put('/',(req,res)=>{
res.send("Update book")
})
router.delete('/',(req,res)=>{
    res.send("Delete book")
})

module.exports= router