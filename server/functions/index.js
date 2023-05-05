const functions = require("firebase-functions");
const express = require("express");
const app = express()
const cors = require("cors");

app.use(cors());
app.use(express.json())

//Routes
const customerRoutes = require("./routes/customersRoute");
const transactionRoutes = require("./routes/transactionRoute")
const loginRoute= require("./routes/login")



app.use("/login",loginRoute)
app.use("/customers",customerRoutes)
app.use("/transactions",transactionRoutes)

app.get("*",(req,res)=>{
    res.status(404).send({message:"this resource doesn't exist"});
})


// app.listen(4004,()=>console.log(`listening on 4004`))

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.app = functions.https.onRequest(app);
