
const meterToFeet = 3.281
const literToGallon = 0.264
const kgToPound = 2.204
const convertEl = document.getElementById("convert-el")
let insertNum = document.getElementById("insert-number")
const lentConv = document.getElementById("length-conv")
const volConv = document.getElementById("volume-conv")
const massConv = document.getElementById("mass-conv")

convertEl.addEventListener("click", function() {
    let initialValue = insertNum.value

    lentConv.textContent = `${initialValue} meters = ${(initialValue * meterToFeet).toFixed(3)} feet 
     | ${initialValue} feet = ${(initialValue / meterToFeet).toFixed(3)}  meters`
    
    volConv.textContent = `${initialValue} liters = ${(initialValue * literToGallon).toFixed(3)} gallons 
     | ${initialValue} gallons = ${(initialValue / literToGallon).toFixed(3)}  liters`

     massConv.textContent = `${initialValue} kilos = ${(initialValue * kgToPound).toFixed(3)} pounds 
     | ${initialValue} pounds = ${(initialValue / kgToPound).toFixed(3)}  kilos`
})