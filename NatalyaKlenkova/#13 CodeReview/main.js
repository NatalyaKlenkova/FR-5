function calc(operation, a, b) {
    switch(operation) {
        case 'add':
            return console.log(a + b);

        case 'multi':
            return console.log(a * b);
        
        case 'subtract':
            return console.log(a - b);
    }
}

calc('add', 1, 2)
calc('multi', 1, 2)
calc('subtract', 3, 2)