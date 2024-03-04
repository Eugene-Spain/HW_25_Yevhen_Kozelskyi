"use strict"

function moveOver(array, direction) {

    let arr = array
    if (direction === 'start'){
       let a = arr.shift()
       arr.push(a)
       return alert(arr)
    }else if (direction === 'end'){
        let a = arr.pop()
        arr.unshift(a)
        return alert(arr)
    } 
}

let a = prompt("Give me first word")
let b = prompt("Give me second word")
let c = prompt("Give me third word")
let d = prompt("Give me forth word")

let array = [a,b,c,d]
let direction = prompt(` Choose direction. "start" or "end"`)

moveOver(array, direction)


