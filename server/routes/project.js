const router = require("express").Router();
const Project = require("../models/Project");

/* Add Project */
router.post("/add", async (req, res) => {
  try {
    const { title } = req.body;

    const project = await Project.create({
      title
    });

    res.json(project);

  } catch (error) {
    console.log("ADD PROJECT ERROR:", error);
    res.status(500).json({ message: "Error adding project" });
  }
});

/* Get All */
router.get("/all", async (req, res) => {
  try {
    const data = await Project.find().sort({ createdAt: -1 });
    res.json(data);

  } catch (error) {
    res.status(500).json({ message: "Error fetching" });
  }
});

/* Delete */
router.delete("/:id", async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });

  } catch (error) {
    res.status(500).json({ message: "Delete error" });
  }
});

module.exports = router;