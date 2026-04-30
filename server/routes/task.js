const router = require("express").Router();
const Task = require("../models/Task");

/* Add Task */
router.post("/add", async (req,res)=>{
  try{
    const task = await Task.create(req.body);
    res.json(task);
  }catch(error){
    console.log(error);
    res.status(500).json({message:"Add Error"});
  }
});

/* Get All */
router.get("/all", async(req,res)=>{
  try{
    const tasks = await Task.find().sort({createdAt:-1});
    res.json(tasks);
  }catch(error){
    res.status(500).json({message:"Fetch Error"});
  }
});

/* Update */
router.put("/:id", async(req,res)=>{
  try{
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({message:"Updated"});
  }catch(error){
    res.status(500).json({message:"Update Error"});
  }
});

/* Delete */
router.delete("/:id", async(req,res)=>{
  try{
    await Task.findByIdAndDelete(req.params.id);
    res.json({message:"Deleted"});
  }catch(error){
    res.status(500).json({message:"Delete Error"});
  }
});
/* Dashboard Stats */
router.get("/stats/all", async (req,res)=>{
  try{
    const total = await Task.countDocuments();

    const completed = await Task.countDocuments({
      status:"Completed"
    });

    const pending = await Task.countDocuments({
      status:"Pending"
    });

    const overdue = 0;

    res.json({
      total,
      completed,
      pending,
      overdue
    });

  }catch(error){
    res.status(500).json({
      message:"Stats Error"
    });
  }
});

module.exports = router;