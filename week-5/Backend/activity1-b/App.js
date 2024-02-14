const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();
const app = express();
app.use(express.json());

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  hashedPassword: String,
});

const User = mongoose.model("User", userSchema);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/api/users", async (req, res) => {
  const { name, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = new User({ name, password, hashedPassword });
  await newUser.save();
  res.status(201).json({ message: "User created successfully" });
});

app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

app.post("/api/users/login", async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({ name });
  console.log(user);
  console.log(req.body);
  try {
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.hashedPassword);
    console.log(isPasswordMatch);

    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
