const express = require('express')
const port = process.env.PORT || 1420


const app = express()


app.get('/',(req,res)=>{
    res.send('<h1>Welcome to my youtube channel!!</h1>')
})

app.listen(port,()=>{
    console.log('application is running on port:',port)
})