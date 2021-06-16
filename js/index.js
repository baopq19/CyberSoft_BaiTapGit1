console.log('master');

const functionTest = function() {
    console.log('testBranch');
}();

const functionDev = new function() {
    console.log('devBranch');
}();

const functionCheckTask = function() {
    console.log('testTask');
}();
