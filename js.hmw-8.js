function gamotvla(){
    var input1 = document.getElementById("number1").value;
    var input2 = document.getElementById("number2").value;

    document.getElementById("result1").innerHTML = "ჯამი არის" + " " + (Number(input1) + Number(input2));
    document.getElementById("result2").innerHTML = "სხვაობა არის" + " " + (Number(input1) - Number(input2));
    document.getElementById("result3").innerHTML = "ნამრავლი არის" + " " + Number(input1) * Number(input2);
    document.getElementById("resultbox").style.backgroundColor = "rgb(233, 35, 233)";
    


    if(input2 == 0){
        document.getElementById("result4").innerHTML = "ნოლზე გაყოფა არ შეიძლება";
    }else{
        document.getElementById("result4").innerHTML = "განაყოფი არის" + " " + Number(input1) / Number(input2);
    }
    

    return false;
}

function calculate(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operators = document.getElementById("operators").value;

    if(operators === "+"){
        document.getElementById("result").value = Number(num1)  + Number(num2);
    }

    if(operators === "-"){
        document.getElementById("result").value = Number(num1)  - Number(num2);
    }

    if(operators === "*"){
        document.getElementById("result").value = Number(num1)  * Number(num2);
    }

    if(operators === "/"){
        if(num2 == 0){
            document.getElementById("result").value = "ნოლზე გაყოფა არ შეიძლება";
        }else{
        document.getElementById("result").value = Number(num1) / Number(num2);
        };
    }    
    
}
