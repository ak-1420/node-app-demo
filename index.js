const express = require('express')
const port = process.env.PORT || 1420


const app = express()


app.get('/',(req,res)=>{
    res.send('<center><h1>Welcome to my youtube channel!!</h1></center>')
})

app.listen(port,()=>{
    console.log('application is running on port:',port)
})