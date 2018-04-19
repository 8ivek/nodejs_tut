var url = require('url');

var adr = 'http://localhost:8080/index.php?year=1991&month=september&day=23';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/index.php'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 1991, month: 'september', day: '23' }
console.log(qdata.year); //returns '1991'
console.log(qdata.month); //returns 'september'
console.log(qdata.day); //returns '23'