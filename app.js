const express = require('express');
const app = express ();


app.get('/', (req, res) => {
    res.send('<h1>This is Version 7th of this Express Demo Application--Update made on Sat 4-2-2022</h1> <h4>With Node JS</h4> <p>Currently linked to  Elastic Beanstalk in AWS</p>');
});

const port = process.env.port || 4000;
app.listen(port, ()=> {
    console.log('Demo app is up and listening to port: ${port}');
});
