const express=require('express');
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const router=require("./routes/api")
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config();
// const User=require('./models/user')
// const Task=require('./models/task')
// const jwt=require(jsonwebtoken)
// const request=require('request')
app.use(express.json())
const connectionParams={
    newUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}
mongoose.connect(process.env.DB_CONNECT,connectionParams)
.then(()=>{
    console.log('connected to db');
})
.catch((err)=>{
    console.log(`error connecting${err}`);
})


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
const myFunc=()=>{
    let token=jwt.sign({name:"efrat",password:"1234"},process.env.SECRET);
    console.log('token '+token);
    let decoded=jwt.verify(token,process.env.SECRET)
    console.log(decoded)
}
myFunc()
app.use('/',router)
app.listen(3001,()=>console.log("app listen port 3001"));
