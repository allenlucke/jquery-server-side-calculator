$(document).ready(init);

function init() {
    console.log(`Hi`);
    
    $('.js-btn-add').on('click', onAddClick);
    $('.js-btn-subtract').on('click', onSubtractClick);
    $('.js-btn-multiply').on('click', onMultiplyClick);
    $('.js-btn-divide').on('click', onDivideClick);
    $('.js-btn-equals').on('click', onEqualsClick);
    $('.js-btn-clear').on('click', onClearClick);
    getHistory();
};

let mathOp;

// Event Handlers
function onAddClick(event) {
    mathOp = "add";
};
function onSubtractClick(event) {
    mathOp = "subtract";
};
function onMultiplyClick(event) {
    mathOp = "multiply";
};
function onDivideClick(event) {
    mathOp = "divide"
};
function onClearClick(event) {
    $(`.js-field-input1`).val('')
    $(`.js-field-input2`).val('')
    mathOp = null;
};
function onEqualsClick(event) {
    inputObject = {
        input1: $(`.js-field-input1`).val(),
        inputOp: mathOp,
        input2: $(`.js-field-input2`).val(),
    };
    console.log(inputObject);
    submitCalculation(inputObject);
};
//API Calls
//post call
function submitCalculation(inputObject) {
    console.log(inputObject)
    $.ajax({
        method: 'POST',
        url: '/input',
        data: inputObject,
    })
    .then(function(response) {
        console.log('POST Response: ', response);
        render(response);
        getHistory();
    })
    .catch(function(err) {
        console.log('POST Error: ', err);
    });
};
//get call
function getHistory() {
    $.ajax({
        method: 'GET',
        url: '/history',
    })
    .then(function(response) {
        console.log('GET Response: ', response);
        render2(response);
    })
    .catch(function(err) {
        console.log('GET Error: ', err);
    });
};

//Renders
//renders answer from post response
function render(response) {
    const newAnswer = $(`.js-answer`);
    newAnswer.empty();
    newAnswer.append(`${response.answer}`);
}
//renders history from get response
function render2(response) {
    const history = $(`.js-history`);
    history.empty();
    for (let i = 0; i < response.length; i++) {
        const problem = response[i];
    //history.empty();
    history.append(`
            <tr data-id="${i}">
                <td>${problem.inputObject.input1}</td>
                <td>${problem.inputObject.inputOp}</td>
                <td>${problem.inputObject.input2}</td>
                <td>${problem.answer}</td>
            </tr>  
        `);
    }
}