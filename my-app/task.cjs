function log(...msg) {
    console.log(...msg);
}

function sum(a, b) {
    return a + b
}
function mul(a, b) {
    return a * b
}

function task(callback) {
    return function (a) {  // возвращает функцию, которая принимает аргумент a и возвращает результат вызова callback(a)
        return function (b) {  // возвращает функцию, которая принимает аргумент b и возвращает результат вызова callback(a, b)
            return callback(a, b) // возвращает результат вызова callback(a, b) или callback(a) или callback(b)
        }
    }
}

log('task(sum)',task(sum)(3)(2))
log('task(mul)',task(mul)(3)(2))

