// //Create a function that reverses your list and prints it to the console
// function reversed(){
//     let pokemon = ['pikachu', 'piplup', 'squirtle']
//     let revPokemon = pokemon.reverse()
//     console.log(revPokemon)
// }

// function greater(a,b){
//     let sumA = 0
//     let sumB = 1
//     for(let i = 0; i < a.length; i++){
//         let squared = a[i] * a[i]
//         sumA += squared
//         // console.log(sumA)
//     }
//     for(let j = 0; j < b.length; j++){
//         let cubed = b[j] * b[j] * b[j]
//         sumB *= cubed
//         // console.log(sumB)
//     }

//     if(sumA > sumB){
//         // console.log("true")
//         return true
//     }else{
//         // console.log("false")
//         return false
//     }


// }
// greater([1,2,3,4,6],[.1,.2,.3,.4,.5])

//return a new array consisting of elements which are multiple of their own index in input array (length > 1)

//ex [22,-6,32,82,9,25] => [-6,32,25]
//ex [68,-1,1,-7,10,10] => [-1,10]

function multipleOf(arr){
    
    // let arr = [22,-6,32,82,9,25]
    // let i = 0
    // const newArr = arr.filter((num,ind) => num % ind === 0 )
    // console.log(newArr)
    let newArr = []
    for(let i= 0; i < arr.length; i++){
        if(!arr[i] % i === 0){
            arr.pop(newArr)
            console.log(newArr)
        }
    }
}
multipleOf([22,-6,32,82,9,25])

//given an array of integers as strings and numbers
//return the sum of the array values as if all were numbers
//return your answer as a number

// let arr = ['1',2,'3',4,'10']
// // let arr = [1,2,3,4,10]
// let sum = 0

// for(let i = 0; i < arr.length; i++){
//     let num = Number(arr[i])
//     sum += num
//     console.log(sum)
// }