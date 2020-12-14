const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Notes = require("../../models/Notes");
const User = require("../../models/User");

//route    get api/post
//test     test route
////access public
router.get("/",auth, async (req,res)=>{

  try {
    const notes = await Notes.findById(req.user.id);
    res.json(notes.todos); 
} catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
}

});


router.post("/",auth, async (req,res)=>{


  try {
    const notes = await Notes.findById(req.user.id);
    console.log(notes);
    if(notes)
  { 
    await Notes.findByIdAndUpdate(req.user.id, ({$push:{todos: req.body}}));
    todo = await Notes.findById(req.user.id, {todos: {$slice: -1}});
      return res.json(todo.todos[0]);

  }
  const newNotes = new Notes({
    _id: req.user.id,
    todos: req.body
  });
   newNotes.save();
  return res.json(newNotes.todos);
  } catch (error) {
    res.json(error);
  }
});
/////delete request at /api/notes/:index

router.delete('/:index',auth, async(req, res)=>{
  

  try {
    var arrIndex =`todos.${req.params.index}`;
    await Notes.findByIdAndUpdate(req.user.id, {$unset : {[arrIndex] : 1 }});
    await Notes.findByIdAndUpdate(req.user.id, {$pull : {"todos" : null}});
    return res.json(req.params.index);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;