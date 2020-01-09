
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//fill in username and password correctly
mongoose.connect("mongodb+srv://<username>:<password>@cluster0-c0hum.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true ,useUnifiedTopology: true})
.then(
    () => {
        console.log("Connected to Database");
    }
).catch(
    (error) => {
        console.error(error);
        console.log("Could not connect to Db");

    }
);

const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const app = express();


//setting CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-control-Allow-Methods", "GET, POST, PUT, PATCH, DELTE, OPTIONS");
    next();
});

//using body-parser to parse sent in data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/auth", userRoutes);
app.use("/api/product", productRoutes);



module.exports = app;