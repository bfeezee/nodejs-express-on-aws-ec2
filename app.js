const express = require('express');
const app = express ();


app.get('/', (req, res) => {
    res.send('</div><h1>This is Version 11 of this Express Demo Application--Update made by Brian on Wednesday 5-6-2022 by Brian Deese</h1><h2>added this line prior to interview with Ryan on Thursday morning</h2> <h4>This was built as a node.js application</h4> <p>The code is being house in GitHub under ther "New" repository, auto-fetched by the "App5 pipeline created and delivered via  Elastic Beanstalk in AWS</p>');
});

const port = process.env.port || 4000;
app.listen(port, ()=> {
    console.log('Demo app is up and listening to port: ${port}');
});
