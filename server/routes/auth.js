// const router = require("express").Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// router.post("/register", async(req,res)=>{
//     const {name,email,password} = req.body;

//     const hashed = await bcrypt.hash(password,10);

//     const user = await User.create({
//         name,
//         email,
//         password:hashed
//     });

//     res.json({message:"User Registered"});
// });

// router.post("/login", async(req,res)=>{
//     const {email,password} = req.body;

//     const user = await User.findOne({email});

//     if(!user) return res.status(400).json({message:"User not found"});

//     const match = await bcrypt.compare(password,user.password);

//     if(!match) return res.status(400).json({message:"Wrong password"});

//     const token = jwt.sign({id:user._id}, process.env.JWT_SECRET);

//     res.json({token,user});
// });

// module.exports = router;

// ---new
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

/* REGISTER */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "member"
    });

    res.json({
      message: "Signup Success",
      user
    });

  } catch (error) {
    console.log("REGISTER ERROR:", error);

    res.status(500).json({
      message: "Register Error"
    });
  }
});

/* LOGIN */
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     const checkPassword = await bcrypt.compare(password, user.password);

//     if (!checkPassword) {
//       return res.status(400).json({ message: "Wrong Password" });
//     }

//     const token = jwt.sign(
//       { id: user._id },
//       process.env.JWT_SECRET
//     );

//     res.json({
//       message: "Login Success",
//       token,
//       user
//     });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Login Error" });
//   }
// });
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Wrong Password"
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    );

    res.json({
      token,
      user
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error);
    res.status(500).json({
      message: "Server Error"
    });
  }
});
module.exports = router;