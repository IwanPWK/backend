const data = {
  id: "1",
  name: "Kurnniawan Wijaya",
  github: "IwanPWK",
  email: "iwan@example.com",
};

const getAllUsers = (req, res) => {
  //   const data = {
  //     id: "1",
  //     name: "Kurnniawan Wijaya",
  //     github: "IwanPWK",
  //     email: "iwan@example.com",
  //   };
  res.json({ message: "Hello Get All Users Success!", data });
};

const createNewUser = (req, res) => {
  console.log("req.body:", req.body);
  res.json({ message: "Hello Create Post User Success!", data: req.body });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  console.log("req.params.id:", id);
  res.json({ message: "Hello Update User Success!", data });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  console.log("req.params.id:", id);
  res.json({ message: `Hello Delete User id: ${id} Success!` });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
