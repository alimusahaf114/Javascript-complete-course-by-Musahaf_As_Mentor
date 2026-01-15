// console.log("Hello world");

// let fruits = ["Banana" , "Apple" , "Orange"]
// let numbers = [1,2,3,4,5]
// console.log(numbers[3]);


// let value1 = fruits[0]
// console.log(value1);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// let values = ["orange" , true , 3 , 3.12]
// console.log(values);

// let fruits = ["orange" , "banana" , "apple"]
// fruits[1] = "Graps"
// fruits[2] = "Water melon"
// console.log(fruits);

// let fruits = []
// fruits[0] = "Banana"
// fruits[1] = "Orange"
// console.log(fruits);

// let numbers = [5,10,15,20,56,34,23]
// console.log(numbers.length);

// let numbers = [36,48,60,72,84]
// numbers.push(48,60,72,84)
// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers.shift()
// numbers.shift()
// numbers.shift()
// numbers.unshift(12,24)

// let numbers = [12,24,36,48]
// numbers.splice(2,0,222,345,678,890)
// console.log(numbers);
// let names = ["cat" , "jerry"]
// names.splice(1,0,"tom", "mouse")
// console.log(names);
// let marks = [78,45,67,54,34]
// let newArr = marks.slice(-3)
// // newArr.pop()
// // newArr.shift()
// console.log(newArr);
// console.log(marks);


// let marks = [34,56,78,98,45,34]
// for(let i = 0 ; i < marks.length ; i++){
//     console.log(marks[i]);
    
// }

let students = ["ali" , "nomi" , "saad" , "ali"]
let newArray = students.slice(1,3)
console.log(newArray);

students.push("ahmed")
students.pop()
students.unshift("zara")
students.shift()
students.splice(2,1,"usman")
console.log(students.length);
console.log(students);


for(let i = 0 ; i < students.length ; i++){
    console.log(students[i]);    
}


