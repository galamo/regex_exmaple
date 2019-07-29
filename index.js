//regex its a pattern that helps us to validate inputs
//2 ways:
//1=> new RegExp("PATTERN")
//2=> /PATTERN/

//to validate the input we will use test method

const numbersRegex = new RegExp('^[0-9]+$')
numbersRegex.test("sdgdsfd")// false
numbersRegex.test("45454")// true

const lpRegex = new RegExp('^[A-Z]{1,3}-[A-Z]{1,2}-[0-9]{1,4}$')
lpRegex.test("A-A-343")// true
lpRegex.test("A-A-454555")// false


const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const form = document.getElementById("formValidation");
const DOM = {
    userName: form["userName"],
    error: form.querySelector("#error")
}

//for test: console.log(DOM)


DOM.userName.addEventListener("input", function () {
    console.log("input ....")
})