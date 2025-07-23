const express = require("express")
const cors = require("cors")

const app=express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

  let  email= "test@gmail.com"
  let password= "123456"


app.post("/login", function(req,res){
    console.log(req)

    if( req.body.email === email && req.body.password === password){
            res.send(true)
    }else{
        res.send(false)
    }

})

app.listen(5000,function(){
    console.log("server started")
})