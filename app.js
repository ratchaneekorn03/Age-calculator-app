function age() {
    var d1 = document.getElementById("date").value;
    var m1 = document.getElementById("month").value;
    var y1 = document.getElementById("year").value;
    console.log(d1,m1,y1);
    
    var date = new Date();

    var d2 = date.getDate();
    var m2 = date.getMonth()+1;
    var y2 = date.getFullYear();
    console.log(d2,m2,y2);
    
    var y = y2 - y1;

    if ( m2 >= m1) {
        var m = m2 - m1;
    } else {
        var m = 12 + m2 - m1;
        y--;
    }

    if (d2 > d1) {
        var d = d2 - d1;
    } else {
        d = 31+ d2 - d1;
        y--;

    }

    console.log(y,m,d)
    document.getElementById("y").innerHTML =  y + " years"  ;
    document.getElementById("m").innerHTML = m  + " months";
    document.getElementById("d").innerHTML =  d  + " days";
    // document.getElementById("age").innerHTML = "Your Age is " + y + " Years " + m + " Months " + d + " Days";


  

}
