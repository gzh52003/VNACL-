const express = require("express");
const app = express();
const {
    PORT
} = require("./config.json");
const allRouter = require("./router");

app.use(express.static("./public"));
app.use("/api", allRouter);





app.listen(PORT, () => {
    console.log(`${PORT} is running`);
})