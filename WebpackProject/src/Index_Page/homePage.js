//Direct the customer to the customerView page

import 'bootstrap/dist/css/bootstrap.min.css';
import './indexStyle.css';

window.onload = function() {
    let customerButton = document.getElementById("customer");
    customerButton.onclick = function(e) {
        e.preventDefault();
        // location.href = "../Customer_View/customerView_Page.html";
        location.href = "./customerView_Page.html";
    }

    let adminButton = document.getElementById("admin");
    adminButton.onclick = (e) => {
        e.preventDefault();
        location.href = "./adminView.html";
    }
}


//Direct the admin to the adminView page