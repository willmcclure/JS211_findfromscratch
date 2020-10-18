// .findIndex() from scratch

// my array
let myarray = [1, 2, 3, 4]

let findIndex = function (array, func) {
    // for loop of each element in the array
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        // If the passed in function returns true based on the element, return that index of the passed in array
        if (func(element, i)) {
            return i
        }
    }    
}

// Test the new find() from scratch function
let myFind = findIndex(myarray, element => element > 1)

// Expected output is 1
console.log('findIndex() ->', myFind)

// ------------------------------------

// find() funtion from scratch, takes in an array and function as parameters
let find = function (array, func) {
    // Loop through each element of the passed in array
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        // If the passed in function returns true based on the element, return that element
        if (func(element, i)) {
            return element
        }
        // Else the function will return as undefined
    }    
}

// Test the new find() from scratch function
let found = find(myarray, element => element > 3)

// Expected output is 4
console.log('find() ->', found)

console.log()