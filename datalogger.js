var numberValues = [];
var total = 0;

function addNewNumbers(){
    var newNumb = document.getElementById("dataInput").value;
    if(isNaN(newNumb)){
        console.log(newNumb + " is not a number");
    }
    else{
	newNumb = Number(newNumb);
        numberValues.push(newNumb);
    }
}

function updateTotal(){
    total = 0;
    for(var i = 0; i < numberValues.length; i++){
        total += numberValues[i];
    }
    document.getElementById("total").innerHTML = total;
    console.log(total);
}

function callThemAll(){
    addNewNumbers();
    updateTotal();
    updateAverage();
}

function updateAverage(){
    //does some stuff
    var avg = total / numberValues.length;
    document.getElementById("average").innerHTML = avg;
}