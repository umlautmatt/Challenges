
let x = document.querySelector("firstNum");
let y = document.querySelector("secondNum");

// function myfunction(x,y) {
//    let total = Number(x.value) + Number(y.value);
// alert(`${total}`)
// }
// function myfunction1(x,y) {
//    let total= Number(x.value) - Number(y.value)
// alert(`${total}`)
// }
// function myfunction2(x,y) { let total= Number(x.value)*Number(y.value)
// alert(`${total}`)
// }
// function myfunction3(x,y) { let total= Number(x.value)/Number(y.value)
// alert(`${total}`)
// }
// function myfunction4(x,y) { let total= Number(x.value)%Number(y.value)
// alert(`${total}`)
// }

function sumValues(x,y){
    var num1, num2, result;
    num1 = Number(x.value);
    num2 = Number(y.value);
    result = num1+num2;
    document.calculator.res.value = result;
}

function differenceValues(x,y){
    var num1, num2, result;
    num1 = Number(x.value);
    num2 = Number(y.value);
    result = num1-num2;
    document.calculator.res.value = result;
}

function productValues(x,y){
    var num1, num2, result;
    num1 = Number(x.value);
    num2 = Number(y.value);
    result = num1*num2;
    document.calculator.res.value = result;
}

function quotientValues(x,y){
    var num1, num2, result;
    num1 = Number(x.value);
    num2 = Number(y.value);
    result = num1/num2;
    document.calculator.res.value = result;
}

function percentValues(x,y){
    var num1, num2, result;
    num1 = Number(x.value);
    num2 = Number(y.value);
    result = num1%num2;
    document.calculator.res.value = result;
}

