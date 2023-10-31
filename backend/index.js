 const express = require("express");
 const mongoose = require("mongoose");
 const cors = require("cors");
 const UsersModule = require("./modules/UsersModule");
 const CommentModule = require("./modules/CommentModule");
 const ProgrammingModule = require("./modules/ProgrammingModules");
 const VisualModule = require("./modules/VisualModule");
 const GraphicModule = require("./modules/GraphicsModules");
 const bcrypt = require("bcrypt");
 const jwt = require("jsonwebtoken");
 const env = require("dotenv").config();
 const app = express()
 
 app.use(express.json())
 app.use(cors())

 const { MONGO_URI } = process.env;
 const { API_PORT } = process.env;
 const port = process.env.PORT || API_PORT;

 mongoose.connect(MONGO_URI);

 // Posts

 // user

 app.post("/users", (req, res) => {
  const {username, age, email, password} = req.body;

  bcrypt
  .hash(password, 10)
  .then((hash) => {
    UsersModule.create({ username, age, email, password:hash })
      .then((users) => () => res.json(users))
      .catch((err) => res.json(err));
   })
   .catch((err) => console.log(err))
  })

 // login

 app.post("/login", (req, res) => {
  const {email, password} = req.body;
  UsersModule.findOne({email: email}).then((user) => {
    if(user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          res.json("Correct Password")
        } else {
          res.json("Wrong Password")
        }
      })
    } else {
      res.json("User doesn't exist");
    }
  });
 });

 // comments

app.post("/comments", (req, res) => {
  CommentModule.create(req.body)
    .then((comments) => res.json(comments))
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
      })
      .catch((err) => console.log(err));
  });

  app.get("/visualarts", (req, res) => {
    VisualModule.find()
      .then((vis) => {
        res.json(vis);
      })
      .catch((err) => console.log("err"));
  });

  app.get("/graphics", (req, res) => {
    GraphicModule.find()
      .then((gra) => {
        res.json(gra);
      })
      .catch((err) => console.log(err));
  });




// Delete

// comments

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  CommentModule.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

// users

app.delete("/logout/:id", (req, res) => {
  const { id } = req.params;
  UsersModule.findByIdAndDelete({ _id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

 
// Update

// app.put("/update/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(id);

//   CommentModule.findByIdAndUpdate({ _id: id }, { done: true })
//     .then((result) => res.json(result))
//     .catch((err) => res.json(err));
// });

// app.put("/users", async (req, res) => {
  app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { newUsername, newEmail, newPassword, newAge } = req.body;

  try {
    const user = await UsersModule.findByIdAndUpdate(
      id,
      {
        username: newUsername,
        email: newEmail,
        password: newPassword,
        age: newAge
      },
      { new: false }
    );
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

  


app.listen(port, () => {
   console.log("connected");
 });