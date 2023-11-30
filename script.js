/**
 * Part 1: Refactoring Code
 *
 */

const dataString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// Split the string into lines
const lines = dataString.split("\n");

// Extract header and data
const header = lines[0].split(",");
const data = lines.slice(1).map((line) => line.split(","));

// Assign values to separate variables
const id = data.map((row) => row[0]);
const name = data.map((row) => row[1]);
const occupation = data.map((row) => row[2]);
const age = data.map((row) => row[3]);
// Print the results in a structured format
for (let m = 0; m < lines.length - 1; m++) {
  console.log(`${header[0]}   ${header[1]}  ${header[2]}  ${header[3]}`);
  console.log(
    "\n" + id[m] + "   " + name[m] + "   " + occupation[m] + "   " + age[m],
  );
}

/**
 * Part 2: Expanding Functionality
 *Begin with the following task:
Declare a variable that stores the number of columns in each row of data within the CSV.
Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row. You can safely assume that all rows that follow will contain the same number of entries per row.
After you have implemented the above:
Store your results in a two-dimensional array.
Each row should be its own array, with individual entries for each column.
Each row should be stored in a parent array, with the heading row located at index 0.
Cache this two-dimensional array in a variable for later use.
 */

// Calculate the number of columns
const numberOfColumns = header.length;
console.log(numberOfColumns);

//Store your results in a two-dimensional array. I created a 2D array with the lines variable on line 11 in part 1
const copyOfLines = lines;
console.log(copyOfLines);

/**
 *Part 3: Transforming Data
 */

/**
 *For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
 */
const newData = [];
const newHeader = [];
//converts the headers into lowercase
header.forEach((element) => {
  newHeader.push(element.toLowerCase());
});

for (let j = 0; j < lines.length - 1; j++) {
  //puts list of headers from newHeader array into separate variables
  let idHeader = newHeader[0];
  let nameHeader = newHeader[1];
  let occupationHeader = newHeader[2];
  let ageHeader = newHeader[3];
  // creates a new data object
  let newDataObject = {
    [idHeader]: id[j],
    [nameHeader]: name[j],
    [occupationHeader]: occupation[j],
    [ageHeader]: age[j],
  };
  // adds the data object to the newData array
  newData.push(newDataObject);
}
// Print the newData Array
console.log(newData);
/**
 * Part 4: Sorting and Manipulating Data
 */
// Remove the last element
newData.pop();
console.log(newData);
// Insert the following object at index 1:{ id: "48", name: "Barry",occupation: "Runner",age: "25",}
newData.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});
console.log(newData);
// Add the following object to the end of the array:{ id: "7", name: "Bilbo",occupation: "None",age: "111",}
newData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(newData);
// Calculate the average age of the group
let ages = 0;
for (let p = 0; p <= newData.length - 1; p++) {
  ages = ages + parseInt(newData[p].age);
  if (p == newData.length - 1) {
    ages = ages / newData.length;
    console.log(`The average age is ${ages}.`);
  }
}

/**
 *Part 5: Full Circle
 */

/**
 *As a final task, transform the final set of data back into CSV format.
 */
let csv = Object.keys(newData[0]).join(",");
csv = JSON.stringify(csv);
let csvData = "";
console.log(typeof csv);
console.log(csv);
for (const key in newData) {
  csvData =
    csvData +
    `\n` +
    newData[key].id +
    "," +
    newData[key].name +
    "," +
    newData[key].occupation +
    "," +
    newData[key].age;
}
csvData = JSON.stringify(csvData);
csv = csv + csvData;
console.log(csv);