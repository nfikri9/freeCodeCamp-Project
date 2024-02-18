function displayOutput(){
    document.getElementById("display").style.display = "initial";
    document.getElementById("display-full-name").innerText = document.getElementById("fullname").value;
    document.getElementById("display-dob").innerText = document.getElementById("dob").value;
    document.getElementById("display-race").innerText = document.getElementById("race").value;
    /* These statements need improvement */
    document.getElementById("display-gender").innerText = document.getElementById("male").value;
}