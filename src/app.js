const express = require('express');


const app = express()

const notes=[]

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/about",(req,res)=>{
    res.send("About Page")
})

app.post('/notes', (req,res)=>{
    notes.push(req.body)

    res.status(201).json({
        message:"note created successfully"
    })
})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"notes fetched successfully",
        notes: notes
    })
})

app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index
    delete notes[index]
    res.status(200).json({
        message:"note deleted sucessfully"
    })
})

app.patch('/notes/:index',(req,res)=>{
 const index = Number(req.params.index)
 const note = notes[index]

 if (!Number.isInteger(index) || index < 0 || !note || Array.isArray(note)) {
     return res.status(404).json({
         message:"note not found"
     })
 }

 if (!req.body || Array.isArray(req.body) || typeof req.body.description !== "string") {
     return res.status(400).json({
         message:"description must be a string"
     })
 }

 note.description = req.body.description

 res.status(200).json({
     message:"note updated successfully",
     note
 })
})
module.exports = app