const express = require("express");
const {engine} = require("express-handlebars");
const controllers = require("./controllers/empController");
const app = express();

//configure handlebars
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(controllers); 

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>console.log(`Server is running at PORT NO ${PORT}`));
