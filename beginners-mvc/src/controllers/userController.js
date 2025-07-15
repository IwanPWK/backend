// Array to store user data

// Function to get all users
export const getAllUsers = (req, res) => {
  res.json(users);
};

// Function to create new user
export const createUser = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const newUser = { id: users.length + 1, email, password };
  users.push(newUser);
  res.status(201).json({ message: "User created successfully", user: newUser });
};
