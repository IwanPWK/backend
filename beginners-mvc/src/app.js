import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use("/api/users", userRoutes); // Use user routes under /api/users for API calls
app.get("/", (req, res) => {
  res.send("Welcome to the User Management API");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
