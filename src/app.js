const express = require("express");
const noteModel = require("./models/note.model");
const app = express();

app.use(express.json());

app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description,
  });
  res.status(201).json({
    message: "note created",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).json({
    message: "Note Fetched Successfully",
    notes: notes,
  });
});

app.delete("/notes/:id", async (req, res) =>{
  const id = req.params.id

  await noteModel.findOneAndDelete({
    _id: id
  });

  res.status(200).json({
    message: "Note Deleted Sucessfulyl",
  });
});

app.patch("/notes/:id", async (req, res)=>{
    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate(
        {_id: id},
        {description:description}
    )
    res.status(200).json({
        message:"Note Updated Successfully"
    })
})

module.exports = app;
