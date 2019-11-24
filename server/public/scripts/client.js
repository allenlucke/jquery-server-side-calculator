let mathOp = "allen";

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
//this needs to clear the inputs
};
function onEqualsClick() {
    constInputForServer = {
        input1: $(`.js-field-input1`),
        inputOp: mathOp,
        input2: $(`.js-field-input2`),
    
    }
};
function render()