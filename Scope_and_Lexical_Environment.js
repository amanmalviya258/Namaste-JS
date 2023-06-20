// function a(){
//     console.log(b);
// }
// var b = 10;
// a();
// //somehow console.log waala b can access the b which is outside the function a
// // output is 10


// function a() {
//   function c() {
//     console.log(b);
//   }
//   c();
// }
// var b = 10;
// a();
// // even function of function can access bhar waala b
// //10


// function a() {
//   function c() {
//     console.log(b);
//   }
//   c();
// }
// a();
// var b = 10;
// // undefined


// function a() {
//   function c() {
//       var b = 10;
//     }
//     c();
// }
// console.log(b);
// // a();
// // b is not defined err throw karega

