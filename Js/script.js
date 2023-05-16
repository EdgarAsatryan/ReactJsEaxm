// • JavaScript Exercises
// 1. Գրել ֆունկցիա, որը կվերադարձնի true եթե տրված արժեքը սիմետրիկ է, հակառակ դեպքում կվերադարձնի false: Խնդիրը գրել երկու տարբեր եղանակներով, առաջին եղանակում առանց մեթոդների բացառությամբ length մեթոդի և երկրորդ եղանակում միայն մեթոդներով։

// 1.1

// let value = "aba"
// function simetrick (val) {
//     let reverseValue = ""
//     for (let i = val.length-1; i >= 0; i--) {
//         reverseValue += val[i]
//     }
//     return (reverseValue === value);
// }
// console.log(simetrick(value));

// 1.2

// let value = "aba"
// let simetrick = ((val) => val.split("").reverse().join("") === value)
// console.log(simetrick(value));

// 2. Գրել ռեկուրսիվ ֆունկցիա որը կստանա թվերի զանգված և կվերադարձնի նոր զանգված, որի մեջ կլինեն տրված զանգվածից զույգերը։

// let arr = [5,2,7,4,8,9,11]
// let newArr = []
// function even(i) {
//     if (i < 0) {
//         return []
//     }
//     if (arr[i] % 2 === 0) {
//         newArr.push(arr[i]);
//     }
//     return even(i-1);
// }
// even(arr.length)
// console.log(newArr);

// 3. Ունենք տեքստ որի մեջ կան բաց թողնված բառեր որոնց փոխարեն դրված է "_" նշանը և ունեն զանգված որի մեջ կան բառեր։ Գրել ֆունկցիա որը կստանա հետևյալ փոփոխականները որպես արգումենտ և կվերադարձնի տեքստի վերջնական արդյունքը։
// Փոփոխականները`

// let words = ["first", "succeed", "again"];
// let sentence = "If at _ you don’t _, try, try _.";

// function textWithDash(words,sentence) {
//     let k = 0
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] === "_") {
//             sentence[i] = words[k]
//             k++
//         }
//     }
//     return sentence.join("")
// }
// console.log(textWithDash(words,sentence.split("")))


// 4. Ունենք հետևյալ բազմաչափ զանգվածը` [4, -2, 3, 9, 2, 6, -8, 12]։ Գրել ֆունկցիա, որը տրված զանգվածից կհեռացնի բացասականները և կսորտավորի դրականները։ Վերադարցնել սորտավորված զանգվածը և այն տարրերը, որոնք հեռացվել են զանգվածից։ Պատասխան՝
// Sorted array: [2,3,4,6,9,12]
// Removed numbers: [-2,-8]

// let arr = [4, -2, 3, 9, 2, 6, -8, 12]

// for (let i = 1; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//             [arr[i],arr[j]]=[arr[j],arr[i]]
//         }
//     }
// }
// console.log(arr);

// 5․ Ունենք հետևյալ զանգվածը՝ [6, 9, -5, 12, 3, -1, 6, 9, -2, 64, 15, -3, 36]; Գրել class, որը կունենա arr պարամետր, կունենա getRoots մեթոդ, որը կվերադարձնի նոր զանգված, որի մեջ կլինեն այն թվերը, որոնք ունեն արմատ, կունենա arithmeticAverage մեթոդ, որը կվերադարձնի զանգվածի միջին թվաբանականը, կունենա ascendingSortExceptNegitves մեթոդ, որը կվերադարձնի նույն զանգվածը սորտավորված ըստ աճման կարգի, բայց բացասականները պետք է մնան նույն ինդեքսում։

// class Arr {
//     constructor (arr){
//         this.arr = arr
//     }
//     getRoots () {
//         let newArr = []
//         for (let i = 0; i < this.arr.length; i++) {
//             if ((this.arr[i] ** 0.5) % 1 === 0 ) {
//                 newArr.push(this.arr[i]);
//             }
//         }
//         return newArr
//     }
//     arithmeticAverage () {
//         let sum = 0
//         for (let i = 0; i < this.arr.length; i++) {
//             sum += this.arr[i]
//         }
//         return Math.round(sum / this.arr.length)
//     }
//     ascendingSortExceptNegitves () {
//         for (let i = 1; i < this.arr.length; i++) {
//             for (let j = 0; j < this.arr.length; j++) {
//                 if (this.arr[i] < 0 ) {
//                     continue
//                 }else{
//                 if (this.arr[i] < this.arr[j] ) {
//                     [this.arr[i],this.arr[j]]=[this.arr[j],this.arr[i]]
//                 }
//                 }
//             }
//         }
//         return this.arr
//     }
// }
// const newArr = new Arr ([6, 9, -5, 12, 3, -1, 6, 9, -2, 64, 15, -3, 36])
// console.log(newArr.ascendingSortExceptNegitves());

// 6. Գրել ֆունկցիա, որը որպես պարամետրեր կստանա k բնական թիվ և divisor, ֆունկցիան պետք է վերադարձնի k-ից մեծ ամենամոտ թիվը, որը բազմապատիկ է divisor-ին:

// const dush = (k, divisor) => {
//     for (let i = k+1; i < k * divisor; i++) {
//         if (i % divisor === 0) {
//           return i
//         }
//     }
// }
    
// console.log(dush(25,3));