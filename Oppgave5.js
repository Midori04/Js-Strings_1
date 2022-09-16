var param1 = "Welcome to Norge";
var param2 = "o";
var sum = 0;
function Welcome(param1, param2) {
    return param1
}
console.log(Welcome(param1));
console.log(Welcome(param2));

function christoffer(param1, param2) {
    
    for (let i = 0; i < param1.length; i++) {
        if (param1[i] == param2) {
            sum += 1;
        }
        
    }
    return ("Vi har "+ sum+" ganger " + param2);
}

console.log(christoffer(param1, param2));


