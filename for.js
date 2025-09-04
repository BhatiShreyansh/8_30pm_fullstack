// console.log("Hello Everyone")
// console.log("Hello Everyone")
// console.log("Hello Everyone")
// console.log("Hello Everyone")
// console.log("Hello Everyone")

// for(let i= 1 ; i<=10 ; i++){
//   console.log("Hello Everyone : " , i)
// }

// let n = 7 ; 
// for(let i = 1 ; i<=10 ; i++){
//      console.log(`${n} * ${i} = ${n*i}`) string interpulation
//     console.log(n + "*" + i + "=" + n*i) concatination
// }

let n = 10 ; 

for(let i = 1 ; i<=n ; i++){

    let star = "*" ; 
    let space = " "

    console.log(space.repeat(n-i)+star.repeat(i*2-1))
}

