const express= require("express");
const mongoose=require("mongoose");
const cors = require("cors");

const app=express();

app.use(express.json());
app.use(cors({ exposedHeaders: "token" }));


app.use(require("./middlewares/auth"));


mongoose.connect("mongodb://localhost:27017/hackathondb",{useNewUrlParser:true},()=>{
    console.log("Connected to Database");
});
// mongoose.connect("",{useNewUrlParser:true},()=>{
//     console.log("Connected to Database");
// });

app.use("/user", require("./routes/user"));


let port=process.env.PORT;

if(port==null || port==""){
    port=5000;
}
app.listen(port,()=>{
    console.log("Server started");
});
