const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.status(200).json(allDbUsers);
}

async function handlegetUserById(req, res) {
  const userDetails = await User.findById(req.params.id);
  if (!userDetails) return res.status(404).json({ error: "User Not Found" });
  return res.json(userDetails);
}

async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "New Last name" });
  return res.json({ status: "Success" });
}

async function deleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Success" });
}

async function handleCreateNewUser(req, res) {
  const body = req.body;
  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    jobTitle: body.jobTitle,
    gender: body.gender,
  });
  console.log("Result", result);
  return res.status(200).json({ msg: "Success", id: result._id });
}

module.exports = {
  handleGetAllUsers,
  handlegetUserById,
  handleUpdateUserById,
  deleteUserById,
  handleCreateNewUser,
};
