'use strict'

//  alert("Vitalii")




//  let name = prompt("what is your name?","Vitalii")
//  alert(name)

//                      task 1


// let integer = +prompt("number")
// if (integer > 0) {
    //     integer += 1
    // } 
    // else if (integer < 0) {
        //     integer -= 2
        // }
        // else {
//     integer = 10
// } 
// alert(integer)


//                      task 2

//  let integer = +prompt("number")
//  if (integer === 0) {
//     alert("нулевое число")
//  }
//  else if (integer > 0 && integer % 2 == 0) {
//     alert("положительное  четное число")
//  }
//  else if (integer < 0 && integer % 2 == 0) {
//     alert("отрицательное  четное число")
//  }
//  else if (integer > 0 && integer % 2 == 1) {
//     alert("положительное нечетное число")
//  }
//  else if (integer < 0 && integer % 2 == -1) {
//     alert("отрицательное нечетное число")
//  }



//                      task 3

//  let integer = +prompt("number")
//  if (integer > 0) {
//      if (integer % 2 == 0) {
//          alert("положительное четное число")
//      }
//      else {
//          alert("положительное нечетное число")
//      }
//  }
//  else if (integer < 0) {
//      if (integer % 2 == 0) {
//          alert("отрицательное четное число")
//      }
//      else {
//          alert("отрицательное нечетное число")
//      }
//  }
//  else {
//      alert("нулевое число")
//  }



//                      task 4

//  let a = 3
//  let b = 2
//  let c = 2
//  let d = 2
// if ((a == b) && (a == c)) {
//     alert("порядковый номер другого числа 4")
// }
// else if ((a == b) && (a == d)) {
//     alert("порядковый номер другого числа 3")
// }
// else if ((a == c) && (a == d)) {
//     alert("порядковый номер другого числа 2")
// }
// else {
//     alert("порядковый номер другого числа 1")
// }

 
//                      task 4

//  let a = 3
//  let b = 2
//  let c = 2
//  let d = 2
// let k = +prompt("input k")
// switch (k) {
//     case 1:
//         alert("bad")
//         break
//     case 2:
//         alert("not good")
//         break
//     case 3:
//         alert("goood")
//         break
//     case 4:
//         alert("very good")
//         break
//     case 5:
//         alert("exelent")
//         break
//     default:
//         alert("are you kidding?")
// }


//                      task 5

// let a = +prompt("input a")
// let b = +prompt("input b")
// let sum = 0
// while (sum < a) {
//     sum = sum + b
// }
// alert("the answer is " + (a - (sum - b)))



//                      task 6

// let k = 1234567
// while (k >= 1) {
//     ost = k % 10
//     k = k / 10
//     // k = Math.floor(k)
//     k = k - (ost / 10)
//     alert(ost)
// }
  

//                      task 7

// let a = 1
// let b = 10
// let sum = 0
// for (let i = a; i <= b; i++) {
//     sum += i
// }
// alert(sum)


//                      task 8

// let n = 5
// let nfuct = 1
// for (let i = 1; i <= n; i++) {
//     nfuct = nfuct * i 
// }
// alert(nfuct)



//                      task 9

// let numbers = []
// let a
// while (a === undefined) {
//     a = prompt('number')
//     if (a !== null && a !== '' && !isNaN(a)) {
//         numbers.push(+(a))
//         a = undefined
//     }
// }
// let sum = 0 
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }
// alert(sum)


//                      task 10

// let a = 2
// let b = 4
// for (let i = 1; i <= b-a + 1; i++ ) {
//     for (let x = 1; x <= i; x++) {
//     alert(a + i - 1)
//     }
//    }


//                      task 11

// let x = +prompt("введіть х")
// let n = +prompt("введіть n")
// function pow(x, n) {
//     let res =  x
//         for ( let i = 1; i < n; i++) {
//              res = res * x    
//         } 
//          alert(res)
//      }
//  pow(x, n)



//                      task 12

// function minMax (x, y) {
//     if (x > y) {
//         return x
//     } 
//     else return y
// }
// alert(minMax(7, 5))


//                      task 13

// let x = 0
// function sign(x) {
//     if (x > 0) {
//         alert("1")
//     } 
//     else if (x < 0) {
//         alert("-1")
//     }
//     else {
//         alert("0")
//     }
// }
// sign(x)



//                      task 13

// let x = 2
// let y = 5
// let z = 4
// function calc(a, b, op) {
//     let res = 0
//     if (op === 1) {
//         res = a - b
//     }
//     else if (op === 2) {
//         res = a * b
//     }
//     else if (op === 3) {
//         res = a / b
//     }
//     else {
//         res = a + b
//     }
//     alert(res)
// }



//                      task 14

// function calc(a, b , op) {
//     let res = 0
//     switch (op) {
//         case 1:
//             res = a - b
//             break
//         case 2:
//             res = a * b
//             break
//         case 3:
//             res = a / b
//             break
//         default:
//             res = a + b
//     }
//     alert(res)
// }
// calc(x, y, z)



//                      вывести число с порядком n


// let ost = 0
// let k =1234
// let n = 3
//  function digitN(k, n) {
//     for (let i = 1; i <= n; i++) {
//         ost = k % 10
//         k = k / 10
//          // k = Math.floor(k)
//         k = k - (ost / 10)
//         }
//         if ( ost === 0) {
//             alert(" -1 ")
//         }
//         else {
//             alert(ost)
//         }
//  }
// digitN(k, n, ost)







//                     Замыкания


// function createArrayIterator(array) {
//      let i = 0
//     return function () {
//         return array[i++]
//     }
// }
// let arr = [5, 3, 7]
// let itr = createArrayIterator(arr)
// console.log(itr())
// console.log(itr())
// console.log(itr())
// console.log(itr())



//               Рекурсия сумма

// let num = +prompt('input k', 5)

// function digitSum( k ) {
//     return ( k == 1 ) ? k : k + digitSum( k - 1 )
// } 
// digitSum(num)

// alert(digitSum(num))

// function outer(closureParameter) {
//     var closureVariable = 2;
//     return function (a) {
//         return a + closureParameter + " " + closureVariable;
//     };
// }
// var inner = outer(1)(3);
// //var res = inner();
// console.log(inner); // "1 2"






//Напишите   код   для   "безопасного"   вычисления 
// периметра   и   площадипрямоугольника.Сторонами прямоугольника 
// может быть только число (тип данных  Number,значения других
// типов данных нельзя устанавливать), значение которого,
//строгобольше 0.

// function safePerimetrCalculation() {
//     let a = 0
//     let b = 0
//     let arr = []
//     arr[0] = function(a_Side, b_Side) {
//         if (typeof a_Side === 'number' && a_Side > 0  &&
//             typeof b_Side === 'number' && b_Side > 0 ) {
//             a = a_Side
//             b = b_Side    
//         }
//     }    
//     arr[1] = () => (2 * a + 2 * b)
    
//     arr[2] = () => (a * b)
    
//     return arr
// }
// let perim = safePerimetrCalculation()
// perim[0](45, 3))
// console.log(perim[1]())
// console.log(perim[2]())




//                      факториал

// let fac = +prompt('input n', 10)
// function factorial(n) {
//     if ( n === 1 ) {
//         return 1
//     }
//     else {
//         return n * factorial(n - 1) 
//     }
// }
// let a = factorial(fac)
// alert(a)



 
//                    переопределение


// function format(data, type) {
//     if (type === 'number') {
//         format = function() {
//             return +data
//         }
//     }
//         else if (type === 'string') {
//         format = function() {
//             return String(data)
//         }
//     }
//     else if (type === 'boolean') {
//         format = function() {
//             return Boolean(data)
//         }
//     }
//     else {
//         return
//     }
// }
// let originFormat = format

// format('1', 'number')
// console.log(format())  // 1
// console.log(typeof format())  // 'number'

// originFormat('Hello', 'boolean')
// console.log(format())  // true
// console.log(typeof format())  // 'boolean'

// originFormat(true, 'string')
// console.log(format())  // 'true'
// console.log(typeof format())  // 'string'


// function max (sal) {
//     let res = Number.MIN_SAFE_INTEGER
//     for (let key in sal) {
//         if (sal[key] > res) {
//             res = sal[key]
//         } 
//     }
//     return res
// }
//let keys = Object.keys(sal)
//console.log(keys)


// let salaries = {
//     John: 100,
//     Bill: 300,
//     Mike: 250
// }
// console.log(max(salaries))






// let object = {
//    // a: 7,
//     read: function() {
//        let a = Number(prompt('insert a', 'a'))
//        let b = Number(prompt('insert b', 'b'))
//        object.a = a;
//        object.b = b;

//     },
//     sum: function() {
//         return object.a + object.b
         
//     },
//     mul: function() {
//         return object.a * object.b
//     }
// }

// object.read();
// console.log(object.a)
// console.log(object.b)
// console.log(object.sum())
// console.log(object.mul())



//                 multiply


// function mul(...arg) {
//     let res = 0
//     let flag = false
    
//     for (let i = 0; i < arg.length; i++) {
//         if (typeof(arg[i]) === "number") {
//             if (!flag) {
//                 flag = true
//                 res = 1 
//             }
//             res *= arg[i]        
//         }
//     }
//     return res
// }

// console.log(mul(1, 'str', 2, 3, true))
// console.log(mul(null, 'str', false, true))
