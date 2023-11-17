const express = require('express');

const app = express();
const port = 8080;


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/register', (req, res) => {
    
})
app.post('/login', (req, res) => {

})
app.post('/logout', (req, res) => {

})
app.get('/user/profile', (req, res) => {

})
app.post('/vote', (req, res) => {

})
app.get('/user/votes', (req, res) => {

})

app.listen(port, () => {
    console.log(`Hackathon app listening on port ${port}`)
})