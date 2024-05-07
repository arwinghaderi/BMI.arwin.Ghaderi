let weight = document.querySelector("#weight")
let height = document.querySelector("#height")
let resul = document.querySelector("#result")
let weightResult = document.querySelector("#weight-val")
let heightResult = document.querySelector("#height-val")
let category = document.querySelector("#category")



let valueInputweight, valueInputHeight, resultOuput, CentimetersToMeters



function bmicalculator() {
    valueInputweight = +weight.value
    weightResult.innerHTML = valueInputweight + " kg (کیلوگرم)"

    valueInputHeight = +height.value
    heightResult.innerHTML = valueInputHeight + " cm (سانتی متر)"
    CentimetersToMeters = valueInputHeight / 100


    resultOuput = (valueInputweight / (CentimetersToMeters * CentimetersToMeters)).toFixed(1)
    resul.innerHTML = "(" + resultOuput + "  : شاخص توده بدنی" + ")"

    if (resultOuput < 18.5) {
        resul.style.cssText = "color:rgb(255,196,77);"
        category.textContent = " کمبود وزن"

    } else if (resultOuput >= 18.5  && resultOuput < 24.9) {
        resul.style.cssText = "color:rgb(11,232,129);"
        category.textContent = "وزن سلامت"
    }
    else if (resultOuput < 29.9 && resultOuput > 24.9) {
        resul.style.cssText = "color:rgb(255,136,77);"
        category.textContent = " اضافه وزن"
    }
    else if (resultOuput < 34.9 &&  resultOuput > 29.9) {
        resul.style.cssText = "color:rgb(255,94,87);"
        category.textContent = "(1)چاقی نوع "
    }
    else if (resultOuput < 39.9 &&  resultOuput > 34.9) {
        resul.style.cssText = "color:rgb(255,94,87);"
        category.textContent = "(2)چاقی نوع "
    }
    else if (resultOuput > 40 ) {
        resul.style.cssText = "color:rgb(255,94,87);"
        category.textContent = "(3)چاقی نوع "
    }


}


weight.addEventListener("input", bmicalculator)
height.addEventListener("input", bmicalculator)

