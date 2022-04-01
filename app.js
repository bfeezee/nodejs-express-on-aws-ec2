const express = require('express');
const app = express ();
const port =4000;

app.get('/', (req, res) => {
    res.send('<h1>Express Demo App</h1> <h4>With Node JS</h4> <p>Being updated via Elastic Beanstalk in AWS</p>');
})

app.get('/', (req, res) => {
    res.send("Welcome to the home page of this Application");
})   

app.listen(4000, ()=> {
    console.log('Demo app is up and listening to port: ${port}');
});
