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