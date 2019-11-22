let mathOp = "allen";

$(document).ready(init);

function init() {
    console.log(`Hi`);
    
    $('.something').on('click', onAddClick);
    $('.somethingElse').on('click', onSubClick);
}

function onAddClick(event) {
    mathOp = "add";
}

function onSubClick(event) {
    mathOp = "sub";
}

function submitPost() {

    // const dataForServer = {
    //     value1:
    //     value2:
    //     mathOp:
    // }
}