const express = require("express");
const router = require("./routes");
const port = process.env.PORT || 3000;

express()
  .set("views", "views")
  .set("view engine", "pug")
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(express.static("public"))
  .use("/", router)
  .listen(port, () => console.log(`Server listening at port ${port}`));
