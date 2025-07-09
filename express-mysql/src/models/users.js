const pool = require("../config/database");

const createNewUser = (userData) => {
  // const { name, email } = userData;
  const { name, email, address } = userData;
  // const name = "John Doe";
  // const email = "john.doe@example.com";
  // const address = "123 Main St";
  const SQLQuery = "INSERT INTO users (name, email, address) VALUES (?, ?, ?)";
  return pool.execute(SQLQuery, [name, email, address]);
};

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";
  return pool.execute(SQLQuery);
};

// Update user by ID using put method
const updateUserPut = (body, idUser) => {
  const { name, email, address } = body;
  const SQLQuery =
    "UPDATE users SET name = ?, email = ?, address = ? WHERE id = ?";
  return pool.execute(SQLQuery, [name, email, address, idUser]);
};

// update user by ID using patch method
const updateUserPatch = async (body, idUser) => {
  const allowedFields = ["name", "email", "address"];
  const fields = [];
  const values = [];

  for (const key of allowedFields) {
    if (body[key] !== undefined) {
      fields.push(`${key} = ?`);
      values.push(body[key]);
    }
  }

  if (fields.length === 0) {
    throw new Error("No valid fields to update");
  }

  const SQLQuery = `UPDATE users SET ${fields.join(", ")} WHERE id = ?`;
  values.push(idUser);

  return pool.execute(SQLQuery, values);
};

const deleteUser = (idUser) => {
  const SQLQuery = "DELETE FROM users WHERE id = ?";
  return pool.execute(SQLQuery, [idUser]);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUserPut,
  updateUserPatch,
  deleteUser,
};
