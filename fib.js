function fibs(number) {
    let list = [];

    for (let i = 0; i < number; i ++) {
        if (i == 0) {
            list[i] = 0;
        } else if (i == 1) {
            list[i] = 1;
        } else {
            list[i] = list[i - 1] + list[i - 2];
        }
    }

    return list;
}

function fibsRec(n) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];

    return [...fibsRec(n - 1), fibsRec(n - 1)[n - 1] + fibsRec(n-2)[n-2]];
    // spread operator used to ensure we don't get a nested list
    // recursive case gets the current fibonacci number and then recalls for 
    // lower number
}

console.log(fibsRec(5));