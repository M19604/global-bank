// WRITTEN BY LUKE SKUTT 10/16/2024
const clientNames = {
    "Tobywap!75":"United States",
    A11309:"Republic of Poland",
    "3251821":"Kingdom of Greece",
    "√t(n) - √t(n-1) = 1":"Brazil",
    O1512:"Iran",
    germany:"New Germany",
    "321CBA":"China"
}
var clientData = {}
var serverURL1 = "https://sheetdb.io/api/v1/60kwt987z708g"; // jack.lawson20060@gmail.com
var serverURL2 = "https://sheetdb.io/api/v1/c6fsu6g25zbol"; // usabankingserver1@gmail.com
var serverURL3 = "https://sheetdb.io/api/v1/dhfrn9eco3t9u"; // usabankingserver2@gmail.com
var serverURL4 = "https://sheetdb.io/api/v1/ksgoxe1j3a7gz"; // globalbanking994@gmail.com
var serverURL5 = "";
function updateData() {
fetch(serverURL1).then(response => {
console.log("Server 1 connected.");
return response.json();
}).then(data => {
for(let i = 0; i < Object.keys(clientNames).length; i++){
var x = Object.keys(clientNames)[i];
var y = data[0][x];
clientData[x] = y;
}
}).catch(err => {
fetch(serverURL2).then(response => {
console.log("Server 2 connected.");
return response.json();
}).then(data => {
for(let i = 0; i < Object.keys(clientNames).length; i++){
var x = Object.keys(clientNames)[i];
var y = data[0][x];
clientData[x] = y;
}
}).catch(err => {
fetch(serverURL3).then(response => {
console.log("Server 3 connected.");
return response.json();
}).then(data => {
for(let i = 0; i < Object.keys(clientNames).length; i++){
var x = Object.keys(clientNames)[i];
var y = data[0][x];
clientData[x] = y;
}
}).catch(err => {
fetch(serverURL4).then(response => {
console.log("Server 4 connected.");
return response.json();
}).then(data => {
for(let i = 0; i < Object.keys(clientNames).length; i++) {
var x = Object.keys(clientNames)[i];
var y = data[0][x];
clientData[x] = y;
}
})
});
});
});
}
// WRITTEN BY LUKE SKUTT 10/16/2024
