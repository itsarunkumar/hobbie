const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const tableRoutes = require("./routes/table.route");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const port = 5000;

// Connect to MongoDB
mongoose.connect(process.env.DB);

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

//routes
app.use("/table", tableRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
