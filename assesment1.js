var obj = { "a":1,"b":2,"tesla":12,"tats":112 }; 
var result = Object.keys(obj).map((key) => [String(key), obj[key]]);

console.log(result);


       