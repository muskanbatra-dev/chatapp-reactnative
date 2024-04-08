import express from 'express'
import fs from 'fs'

const app = express();

app.get('/', (req,res)=>{
res.json("my name is muskan")
})

app.listen(3000 , ()=>{
    console.log("App is running")
})