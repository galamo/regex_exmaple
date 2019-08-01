//regex its a pattern that helps us to validate inputs
//2 ways:
//1=> new RegExp("PATTERN")
//2=> /PATTERN/

//to validate the input we will use test method

const numbersRegex = new RegExp("^[0-9]+$");
numbersRegex.test("sdgdsfd"); // false
numbersRegex.test("45454"); // true

const lpRegex = new RegExp("^[A-Z]{1,3}-[A-Z]{1,2}-[0-9]{1,4}$");
lpRegex.test("A-A-343"); // true
lpRegex.test("A-A-454555"); // false

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isError = { userName: true, password: true, passwordMatch: true }
const form = document.getElementById("formValidation");
const DOM = {
    userName: form.querySelector("input[name=userName]"),
    userNameMessage: form.querySelector("#userNameMessage"),
    password: form.querySelector("input[name=password]"),
    passwordMatch: form.querySelector("input[name=passwordMatch]"),
    passwordMessage: form.querySelector("#passwordMessage"),
    passwordMatchMessage: form.querySelector("#passwordMatchMessage"),
    sendButton: form.querySelector("#send")
};

console.log(DOM);

DOM.userName.addEventListener("input", function (event) {
    isError.userName = true;
    resetErrors();
    const { value } = event.currentTarget;
    if (!value) return raiseMessage(DOM.userNameMessage, "Input Is Required", true);
    const emailValidationResult = validateEmail(value);
    if (!emailValidationResult)
        return raiseMessage(DOM.userNameMessage, "Its not an email", true);

    isError.userName = false;

    return raiseMessage(DOM.userNameMessage, "V");
});
function resetErrors() {
    const { userNameMessage } = DOM;
    userNameMessage.innerHTML = "";

}
function validateEmail(input) {
    return emailRegex.test(input.toLowerCase());
}

function raiseMessage(element, message, isError) {
    if (isError) {
        element.style.color = "red"
    } else {
        element.style.color = "green"
    }

    element.innerHTML = message;
}

DOM.sendButton.addEventListener("click", function () {

    if (isError.userName || isError.password || isError.passwordMatch) return;
    console.log("data sent to server....")

})
