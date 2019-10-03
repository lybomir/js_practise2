//task-1

function printTimeout(str,n){
//    let a = n *1000;
    let a = setTimeout(function() {
        return console.log(str);
    }, n *1000);
    return a;
}


printTimeout('hello',5);



////task---2
function sumAll(n) {
    if (n === 1){
        return 1;
    }
    return n + sumAll(n - 1);

}
console.log(sumAll(1));
console.log(sumAll(2));
console.log(sumAll(3));
console.log(sumAll(4));
console.log(sumAll(5));
console.log(sumAll(100));

//task -3
function bombTimer(str, time) {
    let i = time;
    let timer = setInterval(function() {
        if (i === 0) clearInterval(timer);
        i--;
        if (time >= 1) {
            console.log(time);
            time--;
        } else {
            console.log(str);
        }
    }, 1000);
}
bombTimer('Boooom', 3)

//task-4

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5)); 
console.log(factorial(3)); 
console.log(factorial(4)); 
console.log(factorial(6)); 
console.log(factorial(7)); 

//task-5
//--- залишаю для прикладу
//let counter = 3;
//let fff = setInterval(function(){
////    let counter = 3;
//    console.log(counter);
//    counter--;
//    if (counter === 0) {
//        console.log('Boooooom')
//        clearInterval(fff);
//    }
//}, 2000);

function printNumbersTimeout20_100() {
  let i = 3;
  let timerId = setTimeout(function go() {
    console.log(i);
    if (i === 1) {
        console.log('booom');
        clearTimeout(timerId);
    } setTimeout(go, 500);
    i--;
  }, 500);
}
printNumbersTimeout20_100();

//task-6
function filterNumbers(arr, maxNumber) {
    let i;
    let result = [];

    for ( i = 0; i < arr.length; i++) {
        if (arr[i] < maxNumber) {
            result.push(arr[i])
        }
    }

   return result;
}
console.log(filterNumbers([1, 4, 8, 1, 20], 5));

//task-7
function minMax(arr) {
        let maxValue = arr.reduce(function(a, b) {
            return Math.max(a, b);
        });
        let minValue = arr.reduce(function(a, b) {
            return Math.min(a, b);
        });
//     return new Array(maxValue, minValue);
       let max = {maxValue};
       let min = {minValue};
       let merged = Object.assign(min, max);
//       let merged = {...max, ...min};
       return merged;
}
console.log(minMax([1, 4, 8, 2, 20]));





// task-8

function average(arr) {
    let numbers = arr;
    let total = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue);
    let c = total / arr.length;
return c.toFixed(2);
}
console.log(average([1,4,2]));





// task-9

function concatFirstNestedArrays(arr) {
    let newAr = arr.reduce(function (a,b) {
        return a.concat(b);
    })
return newAr;
}
console.log(concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]));
