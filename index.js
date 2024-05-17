const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: false }));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// connecting moongoose

mongoose
  .connect("mongodb://127.0.0.1:27017/architectureNodeMongoose")
  .then(() => console.log("Connection Successful"))
  .catch(() => console.log("Error"));

app.post("/api/users", async (req, res) => {
  const body = req.body;
  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    jobTitle: body.jobTitle,
    gender: body.gender,
  });

  console.log("Result", result);

  return res.status(200).json({ msg: "Success" });
});

app.get("/users", async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `<ul>
  ${allDbUsers
    .map((User) => `<li>${User.firstName} - ${User.email}</li>`)
    .join("")}
  </ul>`;

  return res.send(html);
});

app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});
  return res.status(200).json(allDbUsers);
});

app
  .get("api/users/:id", async (req, res) => {
    const userDetails = await User.findById(req.params.id);
    if (!userDetails) return res.status(404).json({ error: "User Not Found" });
    return res.json(userDetails);
  })
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: "New Last name" });
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
  });
