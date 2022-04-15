const express = require("express");
const app = express();
const PORT = process.env.PORT || 6500;
const connectToMongo = require("./db/mongo");
const UserRoutes = require("./routes/UserRoutes");

require("dotenv").config();

app.use(express.json());

connectToMongo();

app.use("/user", UserRoutes);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
