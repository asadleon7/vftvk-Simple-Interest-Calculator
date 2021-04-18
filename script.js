function compute()
{
 
    principal = document.getElementById("principal").value
    rate = document.getElementById("rate").value
    year = document.getElementById("years").value
    const y = new Date();
    const futureYear = +y.getFullYear()+ +year 

    
    if (principal <= 0 || rate <= 0 || year <= 0) {
        document.getElementById("resultDisplay").innerHTML= "Please enter a positive number"
    }
    else
    result = principal * year * rate / 100 
    document.getElementById("resultDisplay").
     innerHTML = "If you deposit " +principal+  ", <br> at an interest rate of " +rate+ ",<br> You will receive an amount of "+result+ ",<br>  in the year " +futureYear+"<br></br>"
}

/*      
If you deposit 99999, <br>
at an interest rate of 9.<br>
You will receive an amount of 80999.19,<br>
in the year 2029<br></br> 
*/