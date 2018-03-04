const [,,...nums] = process.argv;

if (nums.length<1){
console.log(0);
}else {
const numbers = nums.map(num => parseInt(num));
console.log(numbers);

const maths = numbers.reduce((num1, num2) => {return num1+num2});
console.log(maths);
}
