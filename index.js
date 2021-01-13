questions = document.getElementById("questions");
rate = document.getElementById("rate");
tds = document.getElementById("tds");


function validate() {
    if (questions.value=="") {
    	alert("Give the no.of questions done.");
    	questions.focus();
    	return false;
    } else if(isNaN(parseInt(questions.value))) {
    	alert("Enter a valid number as no.of questions done.");
    	questions.focus();
    	return false;
	} else if (rate.value=="") {
		alert("Give the rate per question.");
    	rate.focus();
    	return false;
    } else if(isNaN(parseInt(rate.value))) {
    	alert("Enter a valid number as Rate per question.");
    	rate.focus();
    	return false;
    } else if (tds.value=="") {
    	alert("Give the TDS percentage.");
    	tds.focus();
    	return false;
    } else if(isNaN(parseInt(tds.value))) {
    	alert("Enter a valid number as TDS percentage.");
    	tds.focus();
    	return false;
    } 
    return true;
}


function visible() {
    var x = document.getElementById("result");
    var btn1 = document.getElementById("btn-1");
    var btn2 = document.getElementById("btn-2");

    if (x.style.display === "none") {
    	x.style.display = "block";
    	btn1.style.display = "none";
    	btn2.style.display = "block";
  	} else {
    	x.style.display = "none";
    	btn1.style.display = "block";
    	btn2.style.display = "none";
  	}
}


function clear_btn() {
    questions.value = "1";
    rate.value = "189";
    tds.value = "7.5";
    visible();
}


function calculate() {
    if (validate()) {
    	q = parseInt(questions.value);
    	r = parseFloat(rate.value);
    	t = parseFloat(tds.value);

    	document.getElementById("c1").innerHTML = q;
    	document.getElementById("c2").innerHTML = r;
        document.getElementById("c3").innerHTML = q*r;
    	document.getElementById("c4").innerHTML = t;
    	document.getElementById("c5").innerHTML = q*r*t/100;
    	document.getElementById("c6").innerHTML = q*r - q*r*t/100;

    	visible();
    }
  			
}