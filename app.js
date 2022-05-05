const express = require('express');
const app = express ();


app.get('/', (req, res) => {
<<<<<<< HEAD
<<<<<<< HEAD
    res.send('</div><h1>This is Version 11 of this Express Demo Application--Update made by Brian on Wednesday 5-6-2022 by Brian Deese</h1><h2>added this line prior to interview with Ryan on Thursday morning</h2> <h4>This was built as a node.js application</h4> <p>The code is being house in GitHub under ther "New" repository, auto-fetched by the "App5 pipeline created and delivered via  Elastic Beanstalk in AWS</p>');
=======
    res.send('</div><h1>This is Version 11 of this Express Demo Application--Update made on Sat 4-6-2022 by Brian Deese</h1><h2>added this line prior to sync with Brandon</h2> <h4>With Node JS Taco image didnt upload</h4> <p>Currently linked to  Elastic Beanstalk in AWS</p>');
>>>>>>> 16abc994e0b006a0251cc9a05a72030c866ca38d
=======
    res.send('</div><h1>This is Version 11 of this Express Demo Application--Update made by Brian on Wednesday 5-6-2022 by Brian Deese</h1><h2>added this line prior to interview with Ryan on Thursday morning</h2> <h4>This was built as a node.js application</h4> <p>The code is being house in GitHub under ther "New" repository, auto-fetched by the "App5 pipeline created and delivered via  Elastic Beanstalk in AWS</p>');
>>>>>>> 23990b3 (interview update)
});

const port = process.env.port || 4000;
app.listen(port, ()=> {
    console.log('Demo app is up and listening to port: ${port}');
});
