function billFunc(){
    var start = document.getElementById("time-holder1").value;
    var end = document.getElementById("time-holder2").value;

function diff(start, end) {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);
    if(minutes>0){
        hours += 1;
        minutes -= minutes;
    }
    else{
        hours += 0;
    }
    return hours;
    
}

document.getElementById("diff").value = diff(start, end);
var costs = document.getElementById("costs").value;

var price = (diff(start, end)*47);
document.getElementById("submitButton").disabled = false;
document.getElementById("priceOutput").innerHTML = "<hr>  ₹ " +(+price + +costs) + "<hr>";
}
