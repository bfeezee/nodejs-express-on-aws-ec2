const express = require('express');
const app = express ();


app.get('/', (req, res) => {
    res.send('</div>
<h1>This is Version 9 of this Express Demo Application--Update made on Sat 4-2-2022 by Brian Deese</h1>
 <h4>With Node JS Taco image didnt upload</h4><h3>Update on wed 4-6-22</h3> 
<p>Currently linked to  Elastic Beanstalk in AWS</p>');

});

const port = process.env.port || 4000;
app.listen(port, ()=> {
    console.log('Demo app is up and listening to port: ${port}');
});
