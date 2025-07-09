const UserModel = require("../models/users");

const createNewUser = async (req, res) => {
  // console.log("req.body:", req.body); // Log the request body to see the data being sent
  // const {body} = req; or const userData = req.body; // Destructure the body from the request
  const userData = req.body; // Assuming the user data is sent in the request body

  // HTTP status code 400 is used for Bad Request
  // Check if the required fields are present in the request body
  if (!body.email || !body.name || !body.address) {
    return res
      .status(400)
      .json({ message: "Email, Name, and Address are required!" });
  }
  console.log("userData:", userData); // Log the user data to see what is
  try {
    await UserModel.createNewUser(userData);
    res
      .status(201)
      .json({ message: "Create New User Success!", data: userData });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", serverMessage: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UserModel.getAllUsers();

    res
      .status(200)
      .json({ message: "Hello Get All Users Success!", data: data });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error", serverMessage: error.message });
  }
};

const updateUserPut = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const [result] = await UserModel.updateUserPut(body, id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "No Change" });
    }
    res.status(201).json({ message: "Update User Success!", id, ...body });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error", serverMessage: error.message });
  }
};
const updateUserPatch = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const [result] = await UserModel.updateUserPatch(body, id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "No Change" });
    }
    res.status(200).json({ message: "Update User Success!", id, ...body });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error", serverMessage: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.deleteUser(id);
    res.status(200).json({ message: `Delete User id: ${id} Success!` });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error", serverMessage: error.message });
  }
  // console.log("req.params.id:", id);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUserPut,
  updateUserPatch,
  deleteUser,
};
