const fs = require('fs');
const https = require('https');

// const { setImmediate } = require("async");

// console.log("hello akhilesh");

// const a = 108698;
// const b = 20986;

// https.get('https://dummyjson.com/product/1', (res) => {
//     console.log("Fetched Data successfully")
// })

// setTimeout(() => {
//     console.log("Timout done after 5 seconds.")
// }, 5000);

// fs.readFile('.file.txt', 'utf8', (err, data) => {
//     console.log("File data - ", data); 
// })

// function multiply(a, b) {
//     const result = a*b;
//     return result;
// }

// const c = multiply(a, b);

// console.log("result of the multiply - ", c);

const a = 100;

setImmediate(() => console.log("set immediate"));
setTimeout(() => console.log("Timer expried"), 0);

Promise.resolve("primise222").then(() => console.log("promise"));

fs.readFile('./file.txt', 'utf8', () => {
    setTimeout(() => console.log("2nd Timer expried"), 0);
    process.nextTick(() => console.log("2nd nexttick"));
    setImmediate(() => console.log("2nd setimmediate"))
    console.log("File reading cb");
})



process.nextTick(() => console.log("process.nextTick"))

function printA(){
    console.log('a=', a);
}

printA();
console.log("Last time of the file")