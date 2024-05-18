const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  const allDbUsers = await User.find({});
  return res.status(200).json(allDbUsers);
});

router
  .get("/:id", async (req, res) => {
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

router.post("/", async (req, res) => {
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
