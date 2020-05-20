const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

// User Model
const User = require("../../models/user");

// Get All/Users
router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => console.error(err));
});

// Create an Account
router.post("/", (req, res) => {
  const { firstname,lastname,email, password, dateofcreation } = req.body;

  // Test if user already exist !
  User.findOne({ email }).then((user) => {
    if (user) return res.sendStatus(409);
    else {
      const newUser = new User({
        firstname,
        lastname,
        email,
        password,
        dateofcreation,
      });

      // Code the password using bcrypt module
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          newUser.password = hash;
          newUser
            .save()
            .then((newuser) => res.json(newuser))
            .catch((err) => console.error(err));
        });
      });
    }
  });
});

// login user!
router.post("/signin", (req, res) => {
  const { firstname,lastname,email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) res.sendStatus(404);
      else {
        bcrypt.compare(password, user.password).then((isMatched) => {
          if (isMatched) {
            const payload = { id: user._id, firstname: user.firstname};
            jwt.sign(payload, "session", { expiresIn: 3600 }, (err, token) => {
              if (err) res.sendStatus(500);
              else res.json({ token: token });
            });
          } else res.sendStatus(400);
        });
      }
    })
    .catch((err) => res.send("Server error"));
});

// validate token
router.get(
  "/validate",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send(req.user);
  }
);

// add new task(post)
router.put("/newtask/:id",(req,res)=>{
  const _id = req.params.id
  const {text} = req.body
  User.findOneAndUpdate({_id},{
    $push : {tasks : {index:Date.now(),text,isCompleted:false}}
  }).then(user =>res.json(user)).catch((err)=> console.error(err))
});


// delete task(post)
router.put("/deletetask/:id/:index",(req,res)=>{
  const _id=req.params.id;
  const index= req.params.index;
  User.findOneAndUpdate({_id},{
    $pull : {tasks :{index: Number(index)}},
  }).then(user =>res.json(user)).catch((err)=> console.error(err))
});

module.exports = router;
