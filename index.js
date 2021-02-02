
var submit = document.getElementById("submit");

submit.addEventListener("click", showResult);

function showResult(event){


    event.preventDefault();
    console.log(event);
    var bill = parseInt(document.getElementById("bill").value);
    var service = parseInt(document.getElementById("service").value);
    var answer = document.getElementById("answer");

    if(bill == 0 || service == ""){
        answer.innerHTML = "Error";
        document.getElementById("img").style.display = "none";
        
        return;
        
    }
    var tip = bill * (service/100);
    document.getElementById("img").style.display = "block";

    answer.innerHTML = tip;
}