var x = 1;
a();
b(); // we are calling the functions before defining them. This will work properly.

console.log(x);
function a() {
 var x = 10; // local scope because of separate execution context
 console.log(x);
}
function b() {
 var x = 100;
 console.log(x);
}

//10
//100
//1
