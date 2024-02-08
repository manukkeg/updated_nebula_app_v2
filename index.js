// IMPORTS FROM PACKAGES

const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");

const PORT = process.env.PORT || 3000;
const app = express();
//const DB ="mongodb://0.0.0.0:27017/cms_database_new_2";
const DB = "mongodb+srv://nebulastudentinformation:64XTQZs7SFvyx6Bi@cluster0.ppqbgzr.mongodb.net/?retryWrites=true&w=majority";
//const DB ="mongodb+srv://manukakeg:xWBA7vkQBVylrkTI@cmsdatabase.pmwjx6g.mongodb.net/?retryWrites=true&w=majority";

// middleware
app.use(express.json());
app.use(adminRouter);

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});


