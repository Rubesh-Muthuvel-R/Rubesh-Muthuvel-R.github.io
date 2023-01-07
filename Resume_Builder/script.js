function addNewCcField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("ccField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Course");

    let ccObj = document.getElementById("cc");
    let ccAddBtnObj = document.getElementById("ccAddBtn");

    ccObj.insertBefore(newNode,ccAddBtnObj);
}

function addNewEqField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Education");

    let eqObj = document.getElementById("eq");
    let eqAddBtnObj = document.getElementById("eqAddBtn");

    eqObj.insertBefore(newNode,eqAddBtnObj);
}

function generateCV(){

    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = nameField;

    document.getElementById('nameT2').innerHTML = nameField;
    document.getElementById('contactT').innerHTML = document.getElementById("contactField").value;
    document.getElementById('addressT').innerHTML = document.getElementById("addressField").value;
    document.getElementById('ghT').innerHTML = document.getElementById("ghField").value;
    document.getElementById('liT').innerHTML = document.getElementById("liField").value;
    document.getElementById('hrT').innerHTML = document.getElementById("hrField").value;
    document.getElementById('objT').innerHTML = document.getElementById("objField").value;
   
    let ccs = document.getElementsByClassName("ccField");
    let str= "";
    for(let e of ccs)
    {
        str = str + "<li>" + e.value + "</li>";
    }
    document.getElementById('ccT').innerHTML = str;

    let eqs = document.getElementsByClassName("eqField");
    let str1= "";
    for(let e of eqs)
    {
        str1 = str1 + "<li>" + e.value + "</li>";
    }
    document.getElementById('eqT').innerHTML = str1;

    let file = document.getElementById('imageField').files[0]

    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);

    console.log(reader.result);

    reader.onloadend = function() {
        document.getElementById("imageT").src = reader.result;
    }

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

}

function printCV(){
    window.print();
}