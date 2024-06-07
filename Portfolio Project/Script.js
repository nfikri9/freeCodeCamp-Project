function displayOutput(){
    document.getElementById("display").style.display = "initial";
    document.getElementById("display-full-name").innerText = document.getElementById("fullname").value;
    document.getElementById("display-ic").innerText = document.getElementById("ic").value;
    document.getElementById("display-dob").innerText = document.getElementById("dob").value;
    document.getElementById("display-race").innerText = document.getElementById("race").value;
    /* These statements need improvement */
    for (i = 0; i < document.getElementsByName("gender").length; i++) {
        if (document.getElementsByName("gender")[i].checked)
        document.getElementById("display-gender").innerText = document.getElementsByName("gender")[i].value;
    }
}