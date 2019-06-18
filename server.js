const express = require('express');
const app = express();
const port = 9000


app.use(express.static('public'));

app.listen(port, function(req, res){
    console.log(`Server listening in port ${port}`);
})

