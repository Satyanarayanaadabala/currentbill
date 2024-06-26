units = parseInt(prompt("Enter the units"));

if(units<100)
    {
        Bill=500+(5/100)*units;
        document.write("Electricity bill:"+Bill);
    }
    else if(units>101 && units<500)
    {
        Bill=1200+(7.5/100)*units;
        document.write("Electricity bill:"+Bill);
    }
    else if(units>501 && units<750)
    {
        Bill=1500+(9.5/100)*units;
        document.write("Electricity bill:"+Bill);
    }    
    else if(units>751 && units<1000)
    {
        Bill=2000+(11.2/100)*units;
        document.write("Electricity bill:"+Bill);
    }    
    else
    {
        Bill=2200+(12/100)*units;
        document.write("Electricity bill:"+Bill);
    }        
