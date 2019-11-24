
$(document).ready(init);

function init() {
    console.log(`Hi`);
    
    $('.js-btn-add').on('click', onAddClick);
    $('.js-btn-subtract').on('click', onSubtractClick);
    $('.js-btn-multiply').on('click', onMultiplyClick);
    $('.js-btn-divide').on('click', onDivideClick);
    $('.js-btn-equals').on('click', onEqualsClick);
    $('.js-btn-clear').on('click', onClearClick);

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
function submitCalculation(inputObject) {
    console.log(inputObject)
    $.ajax({
        method: 'POST',
        url: '/input',
        data: inputObject,
    })
    .then(function(response) {
        console.log('POST Response: ', response);
        getBalance();
    })
    .catch(function(err) {
        console.log('POST Error: ', err);
    });
};
//Render
function render() {
    const newAnswer = $(`.js-answer`);
    newAnswer.append(`answer.answer`);
}