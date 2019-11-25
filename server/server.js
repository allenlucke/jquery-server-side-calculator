//imports express
let express = require('express');
//gives express a nickname, app
const app = express();
//imports body-parser
const bodyParser = require('body-parser');
// gives local 5000 a nickname, PORT
const PORT = 5000;
// Allows loading of files from the public directory
app.use(express.static('server/public'));
// Allows req.body
app.use(bodyParser.urlencoded({
    extended: true
}));
// Allows use of Postman
app.use(bodyParser.json());

const history = [];

//takes in user input
app.post('/input', (req, res) => {
    const inputObject = req.body;
    const val1 = parseFloat(inputObject.input1);
    const mathOp = inputObject.inputOp;
    const val2 = parseFloat(inputObject.input2);

    let answer = 0;

    if (mathOp === "add") {
        answer = val1 + val2;
        console.log(`${val1} + ${val2} = ${answer}`);
    } else if (mathOp === "subtract") {
        answer = val1 - val2;
        console.log(`${val1} - ${val2} = ${answer}`);
    } else if (mathOp === "multiply") {
        answer = val1 * val2;
        console.log(`${val1} * ${val2} = ${answer}`);
    } else if (mathOp === "divide") {
        answer = val1 / val2;
        console.log(`${val1} / ${val2} = ${answer}`);
    }
    //pushes equation and answer into the history
    history.push({
        inputObject: inputObject,
        answer: answer,
    });
    console.log(history)
    //exports answer
    res.send({
        answer: answer
    });
});

//exports calculations 
app.get(`/history`, (req, res) => {
    res.send(history);
    console.log(history);
});

//Activates the server
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});