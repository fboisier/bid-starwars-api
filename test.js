const nums = [1, 2, 3, 4, 5];

const newNums = [];

for (let i = 0; i < nums.length; i++) {
    newNums.push(nums[i] * 2);
}

console.log(newNums); // logs [2, 4, 6, 8, 10]


const mascotas = [1,2,3,4, 5];
console.log(mascotas.map((item)=> item * 2));