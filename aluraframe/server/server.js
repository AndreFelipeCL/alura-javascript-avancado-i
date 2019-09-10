const express = require("express");

const app = express();
app.use(express.json());

app.use("/api", require("./app/routes/Routes"));

app.listen(3000);
