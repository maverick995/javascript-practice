function createCounter(n) {
    let current = n;
    return function() {
        return current++;
    };
}


let counter1 = createCounter(10);
console.log([counter1(), counter1(), counter1()]);


let counter2 = createCounter(-2);
console.log([counter2(), counter2(), counter2(), counter2(), counter2()]);
