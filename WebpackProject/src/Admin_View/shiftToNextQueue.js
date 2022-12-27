import { database } from '../Index_Page/fireStoreAccess.js';
import { GetOrders } from '../Customer_View/getCustomersData.js';
import '../Index_Page/addDataToLocalStorageFromFirebase';
import '../Customer_View/customerView_Styling.css';
import './adminViewStyling.css';

new GetOrders().getOrders();
//Add onclick event for inTheQueue article, so that a callback function is executed when any of 
//the customerOrders is clicked from that queue. - (This happens because of Event bubbling)

document.getElementById("inTheQueue").onclick = (event) => {
    if (event.target.classList[0] == "name_drink" || event.target.parentElement.classList[0] == "name_drink") {
        let customerOrderDiv;
        let customerId;
        if (event.target.classList[0] == "name_drink") {
            customerOrderDiv = event.target;
        } else {
            customerOrderDiv = event.target.parentElement;
        }
        //customerId is the index number to access the customer's data in the localStorage
        customerId = customerOrderDiv.id;
        const adminObj = new AdminModification();
        let beingMixed = document.getElementById("beingMixed");
        let newCustomerOrderDiv = adminObj.shiftToNextQueue(customerOrderDiv, beingMixed);
        adminObj.updateFirestore(newCustomerOrderDiv, customerId, beingMixed.id);
    }
}


//Add onclick event for beingMixed article, so that a callback function is executed when any of 
//the customerOrders is clicked from that queue. - (This happens because of Event bubbling)


document.getElementById("beingMixed").onclick = (event) => {
    if (event.target.classList[0] == "name_drink" || event.target.parentElement.classList[0] == "name_drink") {
        let customerOrderDiv;
        let customerId;
        if (event.target.classList[0] == "name_drink") {
            customerOrderDiv = event.target;
        } else {
            customerOrderDiv = event.target.parentElement;
        }
        //customerId is the index number to access the customer's data in the localStorage
        customerId = customerOrderDiv.id;
        const adminObj = new AdminModification();
        let readyToCollect = document.getElementById("readyToCollect");
        let newCustomerOrderDiv = adminObj.shiftToNextQueue(customerOrderDiv, readyToCollect);
        adminObj.updateFirestore(newCustomerOrderDiv, customerId, readyToCollect.id);
    }
}


class AdminModification {
    shiftToNextQueue(customerOrderDiv, nextQueue) {
        let newCustomerOrderDiv = customerOrderDiv.cloneNode(true);
        nextQueue.appendChild(newCustomerOrderDiv);
        customerOrderDiv.remove();
        return newCustomerOrderDiv;
    }


    updateFirestore(newCustomerOrderDiv, customerId, queueName) {
        database.collection("customers").get().then((snapshot) => {
            const doc = snapshot.docs[0];
            let docId = doc.id;
            let customersData = doc.data().customersData;
            let customerOrders = customersData[0];
            let orderQueue = customersData[1];
            let index = doc.data().index;


            //Update the customerId with new queueName
            customerId = parseInt(customerId);
            delete orderQueue[customerId];
            orderQueue[index] = queueName;

            //Delete the customerData and update to new one
            let customerData = customerOrders[customerId];
            delete customerOrders[customerId];
            customerOrders[index] = customerData;

            localStorage.setItem("customersData", JSON.stringify(customersData));
            //Giving a new ID to the shifted Div
            newCustomerOrderDiv.id = index;
            index++
            localStorage.setItem("index", index);
            database.collection("customers").doc(docId).update({
                customersData: customersData,
                index: index
            });


        });
    }
}