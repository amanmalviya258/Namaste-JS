// function x() {
//   var a = 7;
//   function y() {
//     a = 100;
//     console.log(a);
//   }
//   return y;
// }
// var c = x();
// c();
// console.log(c);

// function z() {
//     var b = 10000;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a ,b);
//     }
//     a = 1
//     return y;
//   }
//   var c = x();
//   c();
//   console.log(c);
// }
// z();
//....................................
// function x() {
//   for (i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// x();
// will print 6 6 6 6 6

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// x();
//this should print 1 in 1sec > 2 in 2 sec > 3 in 3 sec > 4 in 4 sec > 5 in 5 sec..

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//       // put the setT function inside new function close()
//     }
//     close(i); // everytime you call close(i) it creates new copy of i. Only this time, it is with var itself!
//   }
//   console.log("Namaste Javascript");
// }
// x();
