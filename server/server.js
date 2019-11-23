let express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

// Allows loading of files from the public directory
app.use(express.static('server/public'));
// Allows req.body
app.use(bodyParser.urlencoded({
    extended: true
}));
// Allows use of Postman
app.use(bodyParser.json());

app.post('/input', (req, res) => {
    const inputObject = req.body.inputObject;
    //const val1 = 6;
    //const val2 = 9;               
    const val1 = parseInt(inputObject.input1);
    const val2 = parseInt(inputObject.input2);
    //const mathOp = inputObject.input3;
    const mathOp = "divide"
    let answer;

    if (mathOp === "add") {
        answer = val1 + val2;
        console.log(answer);
        res.sendStatus(418);
    } else if (mathOp === "subtract") {
        answer = val1 - val2;
        console.log(answer);
        res.sendStatus(418);
    } else if (mathOp === "multiply") {
        answer = val1 * val2;
        console.log(answer);
        res.sendStatus(418);
    } else if (mathOp === "divide") {
        answer = val1 / val2;
        console.log(answer);
        res.sendStatus(418);
    } else {
        res.sendStatus(500);
        console.log('oh no')
    }

    //const mathOp = inputObject.input3;

    // const mathOp = ?

    // if (mathOp === "add") {
    //     val1 + val2;
    // }

    // console.log('Did math happen?')
});


//Activates the server
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});