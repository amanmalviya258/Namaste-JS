// {
//   //this is block scope
//   var a = 1;
//   let b = 2;
//   const c = 3;

//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

//shadowing in js
// var d = 100;
// {
    //this is block scope
//     var d = 4;
//     let e = 5;
//     const f = 6;
//     console.log(d); // this will print 4 they are pointing to the same memory location 
//     console.log(e);
//     console.log(f);
//   }

//   let e = 100;
// {
//     //this is block scope
//     var d = 4;
//     let e = 5;
//     const f = 6;
  
// {

//     let e = -1;
//     console.log(e);
// }

//     console.log(d); 
//     console.log(e);//5
//     console.log(f);
//   }
// console.log(e);//100
// both e have different memory references 
// global e have script memory
// scoped e have blocked memory

// var c = 100;
// function x(){
//     window.c = 30;
//     console.log(c);
//    // window.c = 10;
// }
// x();
// console.log(c);

