const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to My Website');
});

app.listen(4040, ()=>{
    console.log('Server is running on PORT: 4040');
})