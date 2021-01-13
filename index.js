
questions = document.getElementById("questions");
rate = document.getElementById("rate");
bonus = document.getElementById("bonus");
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
    } else if (bonus.value=="") {
        alert("Fill the bonus amount (enter '0' if no bonus).");
        bonus.focus();
        return false;
    } else if(isNaN(parseInt(bonus.value))) {
        alert("Enter a valid number as bonus amount.");
        bonus.focus();
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

/*
function visible() {
    var x = document.getElementById("result");

    if (x.style.display === "none") {
    	x.style.display = "block";
  	} else {
    	x.style.display = "none";
  	}
}
*/

function clear_values() {
    questions.value = "";
    rate.value = "";
    bonus.value = "";
    tds.value = "";
    document.getElementById("c1").innerHTML = "&nbsp;";
    document.getElementById("c2").innerHTML = "&nbsp;";
    document.getElementById("c3").innerHTML = "&nbsp;";
    document.getElementById("c4").innerHTML = "&nbsp;";
    document.getElementById("c5").innerHTML = "&nbsp;";
    document.getElementById("c6").innerHTML = "&nbsp;";
    document.getElementById("c7").innerHTML = "&nbsp;";
    document.getElementById("c8").innerHTML = "&nbsp;";
}

function default_values() {
    questions.value = "1";
    rate.value = "189";
    bonus.value = "0";
    tds.value = "7.5";
}


function calculate() {
    if (validate()) {
    	q = parseInt(questions.value);
    	r = parseFloat(rate.value);
        b = parseFloat(bonus.value);
    	t = parseFloat(tds.value);

    	document.getElementById("c1").innerHTML = q;
    	document.getElementById("c2").innerHTML = r;
        document.getElementById("c3").innerHTML = q*r;
        document.getElementById("c4").innerHTML = b;
        document.getElementById("c5").innerHTML = q*r+b;
    	document.getElementById("c6").innerHTML = t;
    	document.getElementById("c7").innerHTML = (q*r+b)*t/100;
    	document.getElementById("c8").innerHTML = (q*r+b) - q*r*t/100;
    }
  			
}