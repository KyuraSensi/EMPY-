 const express = require("express");
 const mongoose = require("mongoose");
 const cors = require("cors");
  const UsersModule = require("./modules/UsersModule");
 const CommentModule = require("./modules/CommentModule");
 const ProgrammingModule = require("./modules/ProgrammingModules");
 //  const GraphicsModule = require("./modules/GraphicsModules");
 const VisualModule = require("./modules/VisualModule");
 const GraphicModule = require("./modules/GraphicsModules");
 const bcrypt = require("bcrypt");
 const jwt = require("jsonwebtoken");



 const app = express()
 app.use(express.json())
 app.use(cors())

 mongoose.connect(
   "mongodb+srv://thubelihlendlangamandla:Thubelihle3@cluster0.ho7kwpo.mongodb.net/?retryWrites=true&w=majority"
 );

 // Posts

//  app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//    UsersModule.findOne({email:email}).then((user) => {
//     if(user){
//       if(user.password === password) {
//         res.json(true)
//       } else {
//         res.json('wrong password')
//       }
//     } else {
//       res.json("user does'nt exist")
//     }
//    })
    
//  });

 app.post("/users", (req, res) => {
  UsersModule.create(req.body)
    .then((users) => () => res.json(users))
    .catch((err) => console.log(err));
 })

app.post("/comments", (req, res) => {
  CommentModule.create(req.body)
    .then((comments) => res.json(comments)) // Send the comment data as JSON response
    .catch((err) => {
      console.log(err);
      // res.status(500).json({ error: "An error occurred" });
    });
});

 // Get

 // users

 app.get("/users", (req, res) => {
  UsersModule.find()
  .then(com => res.json(com))
  .catch(err => console.log(err))
 });

 // comments

 app.get("/comments", (req, res) => {
  CommentModule.find()
   .then((comment) => res.json(comment))
   .catch((err) => console.log(err));
 });

 // subjects

  app.get("/programming", (req, res) => {
    ProgrammingModule.find()
      .then((pro) => {
        res.json(pro);
        // console.log(pro);
      })
      .catch((err) => console.log(err));
  });

  app.get("/visualarts", (req, res) => {
    VisualModule.find()
      .then((vis) => {
        res.json(vis);
        // console.log(vis);
      })
      .catch((err) => console.log("err"));
  });

  app.get("/graphics", (req, res) => {
    GraphicModule.find()
      .then((gra) => {
        res.json(gra);
        // console.log(gra);
      })
      .catch((err) => console.log(err));
  });




// Delete

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  CommentModule.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

// Put

// app.put("/like", (req, res) => {
//   CommentModule.findByIdAndUpdate(req.body.postId, post)

// })

 
// Update

// app.put("/update/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(id);

//   CommentModule.findByIdAndUpdate({ _id: id }, { done: true })
//     .then((result) => res.json(result))
//     .catch((err) => res.json(err));
// });



 app.listen(4000, () => {
    console.log("connected")
 })