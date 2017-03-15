exports.name = 'join';
exports.data = 'this is some data';

var privateVariable = 5;
exports.getVariable = function () {
    return privateVariable;
}