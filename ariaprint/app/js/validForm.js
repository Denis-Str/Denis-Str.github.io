let formFeedback = document.getElementById('feedbackForm');
let input = document.getElementById('feedbackTrap');
let formOrder = document.getElementById('formOrder');
let input2 = document.getElementById('orderTrap');
function checkField (input, form) {
    return form.onsubmit = function () {
        console.log('bot');
        return !input.value;
    };
}
checkField(input, formFeedback);
checkField(input2, formOrder);