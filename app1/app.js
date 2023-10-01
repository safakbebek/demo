const express = require('express');

const app = express();

// middleware

app.get("/",(req,res)=> {
  return res.send("Hi "); 
})           
// Require the routers
 
  
// use the routes
 
app.listen(3000);   