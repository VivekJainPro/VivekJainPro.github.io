document.getElementById("submitButton").onclick = function(){

    let temp = Number(document.getElementById("temp").value);
    document.getElementById("ans").innerHTML= temp*100;

    if(document.getElementById("fah").checked){
        document.getElementById("ans").innerHTML= (temp-32)*5/9;    
    }
    else if(document.getElementById("cel").checked){
        temp = (temp+273.15).toLocaleString(undefined, {style:"unit", unit: "celsius"})
        document.getElementById("ans").innerHTML= temp;    
    }
}


