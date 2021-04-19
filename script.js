
function compute()
{
 
    principal = document.getElementById("principal").value
    rate = document.getElementById("sliderRange").value
    year = document.getElementById("years").value
    const y = new Date();
    const futureYear = +y.getFullYear()+ +year 

    
    
    if (principal <= 0 ) {
        alert("Please enter a positive number")
        document.getElementById("principal").focus()
        //document.getElementById("resultDisplay").innerHTML = "Please enter a positive number"
    }
    else {
        
        result = principal * year * rate / 100 
        document.getElementById("resultDisplay").
            innerHTML = "If you deposit <mark>"  + principal + 
             "</mark>, <br> at an interest rate of <mark>" + rate +
             "%</mark>,<br> You will receive an amount of <mark>" + result +
            "</mark>,<br>  in the year <mark>" + futureYear + "</mark><br></br>"
    }
}


    var slider = document.getElementById("sliderRange");
    var output = document.getElementById("rateDisplay");
    
        output.innerHTML = slider.value+"%";
        slider.oninput = function() {
        output.innerText = this.value+"%" ;
        }




/*    
var slider = getElementById("rate").value
var rateDisplay = getElementById("rateDisplay")
rateDisplay.innerHTML = slider
slider.oninput = ()=>{rateDisplay.innerHTML = this.value}  
If you deposit 99999, <br>
at an interest rate of 9.<br>
You will receive an amount of 80999.19,<br>
in the year 2029<br></br> 
*/