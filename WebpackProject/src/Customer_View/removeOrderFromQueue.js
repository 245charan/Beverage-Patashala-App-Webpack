import { database } from '../Index_Page/fireStoreAccess.js';

//Remove Customer Order from the Queue after the Customer collects his order


//Add onclick event for inTheQueue article, so that a callback function is executed when any of 
//the customerOrders is clicked from that queue. - (This happens because of Event bubbling)
document.getElementById("readyToCollect").onclick = (event) => {
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

        deleteOrderFromQueue(customerOrderDiv, customerId);
        //console.log(customerId);
    }
}


function deleteOrderFromQueue(customerOrderDiv, customerId) {
    //Remove the customer's order from readyToCollect queue
    customerOrderDiv.remove();

    customerId = parseInt(customerId);

    database.collection("customers").get().then(function(snapshot) {
        const doc = snapshot.docs[0];
        let docId = doc.id;
        let customersData = doc.data().customersData;
        let customerOrders = customersData[0];
        let orderQueue = customersData[1];
        let currentCustomersCount = doc.data().currentCustomersCount;

        //Delete the customer's data from Firestore
        delete customerOrders[customerId];
        delete orderQueue[customerId];
        currentCustomersCount--;

        database.collection("customers").doc(docId).update({
            customersData: customersData,
            currentCustomersCount: currentCustomersCount
        });
    });
}