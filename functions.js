// lets start a tutorial on functions in javascript. Hope this will be useful for you and I will try my best to get the best explanation possible.

// 0 1 1 2 3 5 8 13 .........
l
let fibo = function fib(some_variable){
    if(some_variable==1)
    return 0;
    else if(some_variable==2)
    return 1;
    else
    return fib(some_variable-1)+fib(some_variable-2);
};

let fibo2 = (some_variable) =>{
    if(some_variable==1)
    return 0;
    else if(some_variable==2)
    return 1;
    else
    return fib(some_variable-1)+fib(some_variable-2);
};

let fibo1 = function(some_variable){
    if(some_variable==1)
    return 0;
    else if(some_variable==2)
    return 1;
    else
    return fib(some_variable-1)+fib(some_variable-2);
};

function fib(some_variable){
    if(some_variable==1)
    return 0;
    else if(some_variable==2)
    return 1;
    else
    return fib(some_variable-1)+fib(some_variable-2);
}

//this style has its own advantages and disadvantages as its not good for readability, but can be used for some short functions.

console.log(fibo(8));
console.log(fibo1(8));
console.log(fibo2(8));
console.log(fib(8));

console.log(fibo(8,true,"this are an optional arguement","will this work?","run to see"));

//in case if you pass less values than the no of parameter, theennnn js will assign undefied value to the remaining values.

// such behaviour has it's own advantages and disadvantages.

// one last thing to be added, hope you get confused...

let fibunknown = fib(8,"unknown");
let fibunknown1 =fib(8,"unknown");

console.log(fibunknown());
console.log(fibunknown1());

//Dare to run it and find

function wrapValue(n) {
    let local = n;
    return () => local;
    }
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
    // → 1
console.log(wrap2());
    // → 2
