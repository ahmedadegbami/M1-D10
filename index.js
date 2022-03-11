let x = "John"
let y = "Doe"

function johnDoe(x,y){
    console.log(x + "<" + ">" + y)
}

johnDoe(x,y)

//22) Create an object with properties such name, surname, email

let profile = {
    name: "Ahmed",
    surname: "Adegbami",
    email: "ahmed.adegbami@gmail.com"
}

//23) Delete the email property from the previously created object

delete profile.email


//24) Create an array with 10 strings in it

let array = ["Ahmed","wants","to","be","a","very","good","developer","this","year"]


// 26) Create an array with 100 random numbers in it

let newArray = []
for (let i = 0; i < 100; i++) {
let rand = Math.floor(Math.random() * 100) + 1;
newArray.push(rand)
}
console.log(newArray)

// 27) Write a function to get the maximum and minimum values from the previously created array

function maxMin(){
    console.log(Math.max(...newArray), Math.min(...newArray))
}

maxMin()

// 28) Create an array of arrays, in which every array has 10 random numbers

newArray = []
for (let i = 0; i < 10; i++) {
    let arrayArray = []
    for (let a = 0; a < 10; a++)
        
    
    arrayArray.push(Math.floor(Math.random() * 10))
    newArray.push(arrayArray)


}
console.log(newArray)

//Create a function that gets 2 arrays as parameters and returns the longest one

function getLongestArray(a,b) {
    if (a.length > b.length) {
        console.log(a)
    } else {
        console.log(b)
    }
}

arr1 = [1,3,5,6,7]
arr2 = [1,3,5,6,7,8,9, [354]]

getLongestArray(arr1,arr2)


function getLongestArray(a,b) {
    if (a + a > b + b) {
        console.log(a)
    } else {
        console.log(b)
    }
}

arr1 = [1,3,5,6,7]
arr2 = [1,3,5,6,7,8,9, [354]]

getLongestArray(arr1,arr2)

// 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values


const array1 = [1, 2, 3, 4];
let array1sum = 0;

for (let i = 0; i < array1.length; i++) {
    array1sum += array1[i];
}
console.log(array1sum);

const array2 = [3, 2, 3, 4];
let array2sum = 0;

for (let i = 0; i < array2.length; i++) {
    array2sum += array2[i];
}
console.log(array2sum);

function gethighersum(a,b) {
    if (a > b ) {
        console.log(a)
    } else {
        console.log(b)
    }
}

gethighersum(array1sum,array2sum)



console.log("\n============================DOM================================")

