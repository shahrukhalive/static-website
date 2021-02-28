const express = require("express")
const path = require("path");
const fs = require("fs")
const app = express();
const port = 80;


//EXPRESS specific 

//for serving static files
app.use('/static', express.static('static'))
app.use(express.urlencoded())

//set the template engine as pug
app.set('view engine', 'pug');

//set the views directory
app.set('views', path.join(__dirname, 'views'))

// endpoints

app.get("/", (req, res) => {

    const con = "this is the best content on the internet"
    const params = { 'title': 'gym membership', 'content': con }

    res.status(200).render('index.pug', params);
});

app.post("/", (req, res) => {
    form = req.body.name
    age = req.body.age
    gender = req.body.address
    more = req.body.more

    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}.More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = { 'message': 'your form has been submitted successfully' }
    res.status(200).render('index.pug', params)

})

// start the server
app.listen(port, () => {
    console.log(`the application has started sucessfully on port ${port}`);

})