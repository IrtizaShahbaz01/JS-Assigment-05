// // Question 01
// let studentNames = [];

// // Question 02
// let studentNamesObj = new Array();

// // Question 03
// let stringsArray = ["apple", "banana", "cherry"];

// // Question 04
// let numbersArray = [1, 2, 3, 4, 5];

// // Question 05
// let booleanArray = [true, false, true, false];

// // Question 06
// let mixedArray = [1, "hello", true, null, { key: "value" }, [1, 2, 3]];

// // Question 07
// let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("Qualifications: " + "<br>" + "1)" +educationQualifications[0]+ "<br>" + "2)" +educationQualifications[1]+ "<br>" + "3)" +educationQualifications[2]+ "<br>" + "4)" +educationQualifications[3]+ "<br>" + "5)" +educationQualifications[4]+ "<br>" + "6)" +educationQualifications[5]+ "<br>" + "7)" +educationQualifications[6]+ "<br>" + "8)" +educationQualifications[7])


// Question 08

// let studentNames = ["Ali", "Murtaza", "Irtaza"];
// let studentScores = [450, 370, 420];

// console.log("Student: " + studentNames[0]);
// console.log("Score: " + studentScores[0] + " / 500");
// console.log("Percentage: " + ((studentScores[0] / 500) * 100).toFixed(2) + "%");
// console.log('-----------------------------');

// console.log("Student: " + studentNames[1]);
// console.log("Score: " + studentScores[1] + " / 500");
// console.log("Percentage: " + ((studentScores[1] / 500) * 100).toFixed(2) + "%");
// console.log('-----------------------------');

// console.log("Student: " + studentNames[2]);
// console.log("Score: " + studentScores[2] + " / 500");
// console.log("Percentage: " + ((studentScores[2] / 500) * 100).toFixed(2) + "%");
// console.log('-----------------------------');

// Question 09

// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
// alert("Initial colors: " + colors.join(", "));

// let newColorStart = prompt("Enter a color to add to the beginning of the array:");
// colors.unshift(newColorStart);
// alert("Updated colors after adding to the beginning: " + colors.join(", "));

// let newColorEnd = prompt("Enter a color to add to the end of the array:");
// colors.push(newColorEnd);
// alert("Updated colors after adding to the end: " + colors.join(", "));

// let color1 = prompt("Enter the first color to add to the beginning:");
// let color2 = prompt("Enter the second color to add to the beginning:");
// colors.unshift(color1, color2);
// alert("Updated colors after adding two more colors to the beginning: " + colors.join(", "));

// colors.shift();
// alert("Updated colors after deleting the first color: " + colors.join(", "));

// colors.pop();
// alert("Updated colors after deleting the last color: " + colors.join(", "));

// let indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
// let colorToAdd = prompt("Enter the color you want to add:");
// colors.splice(indexToAdd, 0, colorToAdd);
// alert("Updated colors after adding a color at index " + indexToAdd + ": " + colors.join(", "));

// let indexToDelete = parseInt(prompt("Enter the index from which you want to delete colors:"));
// let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));
// colors.splice(indexToDelete, numberOfColorsToDelete);
// alert("Updated colors after deleting " + numberOfColorsToDelete + " color(s) from index " + indexToDelete + ": " + colors.join(", "));



// Question 10

// let studentScores = [85, 92, 78, 88, 76];

// console.log("Unsorted scores: " + studentScores.join(", "));

// studentScores.sort((a, b) => a - b);

// console.log("Sorted scores: " + studentScores.join(", "));



// Question 11

// let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

// let selectedCities = cities.slice(0, 3);

// console.log("Cities List: " + cities);
// console.log("Selected Cities List: " + selectedCities);


// Question 12

// var arr = ["This ", "is ", "my ", "cat"];

// var singleString = arr.join("");

// console.log(singleString);


// Question 13

let fifoQueue = [];

fifoQueue.push("Keyboard");
fifoQueue.push("Mouse");
fifoQueue.push("Printer");

console.log("Devices: " + fifoQueue.join(", "));

let firstOut = fifoQueue.shift();

console.log("Out: " + firstOut);

console.log("Queue after dequeue operation: " + fifoQueue.join(", "));


// Question 14

