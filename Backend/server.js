const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes"); 

const cors = require("cors");

app.use(cors({
  origin: "https://eshopy-3.onrender.com", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is live ");
});

app.use("/products", productRoutes);

app.use("/users", userRoutes); 
app.use("/uploads", express.static("uploads"));

connectDB().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log("Server running on port", PORT);
  });
});