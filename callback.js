// const walk = (name) => `${name} walk`;

function walk (name) {
    return `${name} walk`
}

const sit = (name) => `${name} sit`;
const jump = (name) => `${name} jump`;

function actionCreator(animalName, actionFn) {
    return actionFn (animalName);
}

console.log(actionCreator("frog, jump"));
console.log(actionCreator("dog, walk"));
console.log(actionCreator("cat, sit"));



function writeName(name) {
    console.log(`My name is ${name}`);
}

function printName (callback, name) {
    callback(name);
}

printName(writeName, "Donte");