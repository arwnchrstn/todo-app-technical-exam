const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 5000;
const todoRoutes = require("./routes/todoRoutes");

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"]
  })
);
app.use(morgan("dev"));

//routes
app.use("/api/todos", todoRoutes);

//listener
app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});
