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

function z() {
    var b = 10000;
  function x() {
    var a = 7;
    function y() {
      console.log(a ,b);
    }
    a = 1
    return y;
  }
  var c = x();
  c();
  console.log(c);
}

z();