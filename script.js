function compute()
{
    p = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if(p==0){
        alert("Enter a positive number.")
    }
    windows.print("If you deposit 99999,at an interest rate of 9.<br> You will receive an amount of 80999.19,<br>in the year 2029<br>")

}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

        
