/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
    let sName = document.getElementById("shippingName");
    let sZip = document.getElementById("shippingZip");

    let bName = document.getElementById("billingName");
    let bZip = document.getElementById("billingZip");
    
    let cBox = document.getElementById("same");
    if(cBox.checked)
    {
        bName.value = sName.value;
        bZip.value = sZip.value;
    }
    else{
        bName.value = "";
        bZip.value = "";
    }
}

function verify(){
    let sName = document.getElementById("shippingName");
    let sZip = document.getElementById("shippingZip");

    let bName = document.getElementById("billingName");
    let bZip = document.getElementById("billingZip");

    if(sName.value === bName.value && bZip.value === sZip.value){
        alert("Same");
    }
    else{
        alert("Wrong entry");
    }
}