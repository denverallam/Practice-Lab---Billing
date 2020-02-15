/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction() {
    var isChecked = document.getElementById("same").checked;
    if (isChecked) {
        document.getElementById("billingName").value = document.getElementById("shippingName").value;
        document.getElementById("billingZip").value = document.getElementById("shippingZip").value;
    }
    else {
        document.getElementById("billingZip").value = "";
        document.getElementById("billingName").value = "";
    }
}

