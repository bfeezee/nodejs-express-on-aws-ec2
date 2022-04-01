const express = require('express');
const app = express ();


app.get('/', (req, res) => {
    res.send('<h1>This is Version 5 of this Express Demo Application</h1> <h4>With Node JS</h4> <p>Currently linked to  Elastic Beanstalk in AWS</p>');
});

const port = process.env.port || 4000;
app.listen(port, ()=> {
    console.log('Demo app is up and listening to port: ${port}');
});
