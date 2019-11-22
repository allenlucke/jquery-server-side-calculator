let express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;


app.use(express.static('server/public'));
// These make req.body available!
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/input', (req, res) => {
    const inputObject =  req.body.inputObject ;

    const val1 = parseInt(inputObject.input1);
    const val2 = parseInt(inputObject.input2);
    // const mathOp = ?

    // if (mathOp === "add") {
    //     val1 + val2;
    // }


    console.log('Did math happen?')

    res.sendStatus(418);
});



app.listen(PORT, () => {
    console.log('listening on port', PORT);
});