var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
var aylien = require("aylien_textapi");
var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);
console.log(`Your API id is ${process.env.API_ID}`);
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });
projectData={}    
const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))
//POst route. It includes API call using SDK
app.post("/api,",postCallApi);


//callback
function postCallApi (req,res)
{
   console.log(req);
   const formText = req.body;
   textapi.sentiment({
     text:formText
     
  },
  function(error, response) {
      if (error) {
          console.log(error)
      } else{
          res.send(response)
      }
  })}
  /*textapi.sentiment({   
    'text': 'John is a very good football player!' }, function(error, response) {   
  if (error === null) {     
    console.log(response);   }  
  });}*/
console.log(formText);
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
