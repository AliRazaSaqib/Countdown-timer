
    // var countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();

    // var myfunc = setInterval(function() {

    // var now = new Date().getTime();
    // var timeleft = countDownDate - now;
        
    // // Calculating the days, hours, minutes and seconds left
    // var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    // var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    var calcNewYear = setInterval(function(){
        date_future = new Date(new Date().getFullYear() +1, 0, 1);
        date_now = new Date();

        seconds = Math.floor((date_future - (date_now))/1000);
        minutes = Math.floor(seconds/60);
        hours = Math.floor(minutes/60);
        days = Math.floor(hours/24);
        
        hours = hours-(days*24);
        minutes = minutes-(days*24*60)-(hours*60);
        seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
        
    // Result is output to the specific element
    document.getElementById("day").innerHTML = days + ""
    document.getElementById("hour").innerHTML = hours + "" 
    document.getElementById("min").innerHTML = minutes + "" 
    document.getElementById("sec").innerHTML = seconds + "" 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("day").innerHTML = ""
        document.getElementById("hour").innerHTML = "" 
        document.getElementById("min").innerHTML = ""
        document.getElementById("sec").innerHTML = ""
        //document.getElementById("end").innerHTML = "TIME UP!!";
    }
    }, 1000);
    
