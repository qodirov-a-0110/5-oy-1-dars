// // regular
// function test(a,b) {
//     return a+b;
// };
// // express
// let sum = function(a,b) {
//     return a+b;
// }
// // arrow.function
// let sum1 = (a,b) =>{
// return a+b;
// }

// let test = (a,b) => a+b;
// let res = test(1,2);
// console.log(res);

// let arr = ['1','2','3','4'];
// let [a,b,c,d] = arr;
// console.log(d);

// ozgaruvchiga olish
// let arr = ['1','2','3','4'];
// let [a, ...res] = arr;
// console.log(res);



// destraction
// let user = {
// name:'ali',
// age: 17,
// phone: 774762243,
// }
// let {name:username,age, ...res} = user;
// console.log(username);


// spraed => concat;
// let arr = [1,2,3];
// let arr1 = [1,2,3];

// let res = [...arr,...arr1]
// console.log(res);


// function test(...arg) {
//     let res = arguments[5]
//     return res
// }
// let res = test(1,2,3,4,5,6);
// console.log(res);

// let test = NaN;

// let res = test || 'admin'
// let res1 = test ?? 'admin'
// console.log(res,res1);

// UYDA QILISH KERAK
// 1. Quyidagi massivdan `name`, `age`, va `city` o'zgaruvchilarini destructuring orqali ajratib oling:

// let arr = ['ali', 44, 'fergana'];
// function test(arg) {
//     let [...res]=arg;
//     return res;
// }
// let res = test(arr);
// console.log(res);

// 2. `colors` massivining birinchi ikkita elementini alohida o'zgaruvchilarga, qolganlarini esa yangi massivga o'zlashtiring:
// let colors = ['qizil','sariq','oq','pushti','yashil'];
//     let [a,b,...res] = colors;
//     let res1 = a;
//     let res2 = b;
// console.log(res1,res2,res);

// 3. Funksiya yarating, u massiv qabul qiladi va destrukturatsiya orqali birinchi va oxirgi elementlarini alohida o'zgaruvchilarga ajratadi. Keyin ularni qaytaradi:

// let arr = ['1','2','3','4','5'];
// function test(arg) {
//     let [a,b,c,d,e]=arg;
//     let bir = a;
//     let oxirgi = e;
//     let res = bir + oxirgi
//     return res
// }
// let res = test(arr);
// console.log(res);

// 4. Destructuring yordamida massivdan faqat kerakli elementlarni olib, ularga qiymat o'zlashtiring va qolgan elementlarni inkor eting:
// let arr = ['1','2','3','4','5'];
// let [a,b,c,d,e] = arr;
// let kerak = a+e;
// console.log(kerak);


// 1. Quyidagi obyektning `title` va `author` qiymatlarini alohida o'zgaruvchilarga o'zlashtiring:
// let book = {
// title: 'kitob',
// author: 17,
// year: 2021
// }
// let {title,author,year} = book;
// let res = title + author;
// console.log(res);

// 2. Quyidagi obyektning ichida mavjud bo'lgan `latitude`, `longitude` qiymatlarini alohida o'zgaruvchilarga destructuring orqali oling:
//    let joy = {
//      city: "Toshkent",
//      coordinates:{
//        latitude: 41.2995,
//        longitude: 69.2401
//      }
//    };

//    let { coordinates:{latitude,longitude}} = joy
//    let res = latitude
//    let res2 =longitude
//    console.log(res,res2);

// 3. Destructuring yordamida obyektning qiymatlariga yangi nomlar bering va shu nomlar bilan o'zgaruvchilarga o'zlashtiring:
// const person = {
//     firstName: "Ali",
//     lastName: "Valiyev",
//     age: 28
//   };

//   let {firstName:fName, lastName: lName} = person;
//   console.log(fName,lName);

// 4. Quyidagi obyektning ba'zi qiymatlariga default (standart) qiymatlar o'rnating va destructuring qiling:
// let obyect = {
//     theme: 1,
//     language: "uz"
//   };
//   let {theme='admin', language} = obyect;

// QOSHIMCHA MASALALAR

// let arr = [1,2,3,4,5];
// function test(arg) {
//     let res = 0;
//     for (const i of arg) {
//         if(i%2==1){
//         res+=i
//         }
//     }
//     return res
// }
// let res = test(arr);
// console.log(res);

// let arr = [1,2,3,4,5];
// let test = function(arg) {
//     let res = 0;
//     for (const i of arg) {
//         if(i%2==1){
//         res+=i
//         }
//     }
//     return res
// }
// let res = test(arr);
// console.log(res);

// let arr = [1,2,3,4,5];
// let test = (arg) => {
//     let res = 0;
//     for (const i of arg) {
//         if(i%2==1){
//         res+=i
//         }
//     }
//     return res
// }
// let res = test(arr);
// console.log(res);



// let arr = [5,2,30,4,51,6,];
// function test(arg) {
//     let res = arg[0];
//     let sum = 0
// for (const i of arg) {
//     if ( i < res) {
//         res = i
//     }
// }
// return res
// }
// let res = test(arr);
// console.log(res);

// let arr = [5,2,30,4,51,6,];
// let test = function(arg) {
//     let res = arg[0];
//     let sum = 0
// for (const i of arg) {
//     if ( i < res) {
//         res = i
//     }
// }
// return res
// }
// let res = test(arr);
// console.log(res);

// let arr = [5,2,30,4,51,6,];
// let test = (arg)=> {
//     let res = arg[0];
//     let sum = 0
// for (const i of arg) {
//     if ( i < res) {
//         res = i
//     }
// }
// return res
// }
// let res = test(arr);
// console.log(res);

// let arr = 'sal1om33'
// function test(arg) {
//     let res ='';
//     for (const i of arg) {
//         if (i>0) {
//             res+=i
//         }
//     }
//     return res
// }
// let res = test(arr);
// console.log(res);

// let arr = 'sal1om33'
// let test = function(arg) {
//     let res ='';
//     for (const i of arg) {
//         if (i>0) {
//             res+=i
//         }
//     }
//     return res
// }
// let res = test(arr);
// console.log(res);

// let arr = 'sal1om33'
// let test =(arg) => {
//     let res ='';
//     for (const i of arg) {
//         if (i>0) {
//             res+=i
//         }
//     }
//     return res
// }
// let res = test(arr);
// console.log(res);


// let a = 4;
// function test(arg) {
//     let res = 4**2;
// return res;
// }
// let res = test(a);
// console.log(res);

// let a = 4;
// let test = function(arg) {
//     let res = 4**2;
// return res;
// }
// let res = test(a);
// console.log(res);

// let a = 4;
// let test =(arg) => {
//     let res = 4**2;
// return res;
// }
// let res = test(a);
// console.log(res);

// let arr = 'salom bolalar';
// function test(arg) {
//     let res = arg.split('').reverse().join('')
//     return res;
// }
// let res = test(arr);
// console.log(res);

// let arr = 'salom bolalar';
// let test = function(arg) {
//     let res = arg.split('').reverse().join('')
//     return res;
// }
// let res = test(arr);
// console.log(res);

// let arr = 'salom bolalar';
// let test =(arg)=> {
//     let res = arg.split('').reverse().join('')
//     return res;
// }
// let res = test(arr);
// console.log(res);


// let arr = 'sal1om33'
// function test(arg) {
//     let res = arg.split('');
//     let sum = 0
//     for (const i of res) {
//         if (i > 0) {
            
//         }else{
//         sum++
//         }
//     }
//     return sum
// }
// let res = test(arr);
// console.log(res);

// let arr = 'sal1om33'
// let test = function(arg) {
//     let res = arg.split('');
//     let sum = 0
//     for (const i of res) {
//         if (i > 0) {
            
//         }else{
//         sum++
//         }
//     }
//     return sum
// }
// let res = test(arr);
// console.log(res);

// let arr = 'sal1om33'
// let test = (arg) => {
//     let res = arg.split('');
//     let sum = 0
//     for (const i of res) {
//         if (i > 0) {
            
//         }else{
//         sum++
//         }
//     }
//     return sum
// }
// let res = test(arr);
// console.log(res);


// let arr = [1,2,3,4,5]
// function test(arg) {
//     let res = arg.map(function(value) {
//         return value**3
//     })
//     return res
// }
// let res = test(arr);
// console.log(res);

// let arr = [1,2,3,4,5]
// let test = function(arg) {
//     let res = arg.map(function(value) {
//         return value**3
//     })
//     return res
// }
// let res = test(arr);
// console.log(res);

// let arr = [1,2,3,4,5]
// let test = (arg) => {
//     let res = arg.map(function(value) {
//         return value**3
//     })
//     return res
// }
// let res = test(arr);
// console.log(res);


// let arr = 'salom bolalar';
// function test(arg) {
//     let res = arg.split('').reverse()
//     let sum = ''
//     for (const i of res) {
//         if (typeof i == 'string' && i == 'a' || i == 'e' || i == 'o' || i == 'i' || i == 'u' || i == 'A' || i == 'E' || i == 'O' || i == 'I' || i == 'U' ) {
//             sum +=i
//         }
//     }
//     return sum;
// }
// let res = test(arr);
// console.log(res);

// let arr = 'salom bolalar';
// let test = function(arg) {
//     let res = arg.split('').reverse()
//     let sum = ''
//     for (const i of res) {
//         if (typeof i == 'string' && i == 'a' || i == 'e' || i == 'o' || i == 'i' || i == 'u' || i == 'A' || i == 'E' || i == 'O' || i == 'I' || i == 'U' ) {
//             sum +=i
//         }
//     }
//     return sum;
// }
// let res = test(arr);
// console.log(res);

// let arr = 'salom bolalar';
// let test = (arg) => {
//     let res = arg.split('').reverse()
//     let sum = ''
//     for (const i of res) {
//         if (typeof i == 'string' && i == 'a' || i == 'e' || i == 'o' || i == 'i' || i == 'u' || i == 'A' || i == 'E' || i == 'O' || i == 'I' || i == 'U' ) {
//             sum +=i
//         }
//     }
//     return sum;
// }
// let res = test(arr);
// console.log(res);

// let arr = 'salom bolalar';
// let minus = 'bolalar'
// function test(arg,minus) {
//     let sum = ''
//     for (const i of arg) {
//         if (i!=minus) {
//             sum+=i
//         }
//     }
//     return sum;
// }
// let res = test(arr,minus);
// console.log(res);

// let arr = 'salom bolalar';
// let minus = 'bolalar'
// let test = function(arg,minus) {
//     let sum = ''
//     for (const i of arg) {
//         if (i!=minus) {
//             sum+=i
//         }
//     }
//     return sum;
// }
// let res = test(arr,minus);
// console.log(res);

// let arr = 'salom bolalar';
// let minus = 'bolalar'
// let test = (arg,minus) => {
//     let sum = ''
//     for (const i of arg) {
//         if (i!=minus) {
//             sum+=i
//         }
//     }
//     return sum;
// }
// let res = test(arr,minus);
// console.log(res);