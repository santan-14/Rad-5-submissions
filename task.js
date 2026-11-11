function squareSum(numbers){
    let sum = 0;

    for (let num of numbers){
        sum += num * num;
    }

    return sum
}

console.log(squareSum([2, 3, 4, 5]))

