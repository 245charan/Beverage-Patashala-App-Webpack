//Get customerOrders from Firestore
import { database } from '../Index_Page/fireStoreAccess.js';
import '../Index_Page/addDataToLocalStorageFromFirebase';

class GetOrders {
    getOrders() {
        database.collection("customers").get().then((snapshot) => {
            const doc = snapshot.docs[0];
            let customersData = doc.data().customersData;
            let customerOrders = customersData[0];
            let orderQueue = customersData[1];
            let customerIDs = Object.keys(customerOrders);

            customerIDs.forEach((id) => {
                //The Queue in which the data belong to
                let queue = orderQueue[id];

                //Get Cutomer Name and Order based on his ID
                let customerData = customerOrders[id];
                let customerDataArray = customerData.split("$");
                let customerName = customerDataArray[0];
                let beverage = customerDataArray[1];

                //Create customerOrder block to store in the respective Queue
                let customerOrderDiv = document.createElement("div");
                customerOrderDiv.classList.add("name_drink");
                customerOrderDiv.id = id;
                let beverageDiv = document.createElement("div");
                beverageDiv.classList.add("drink");
                beverageDiv.innerHTML = beverage;
                let customerNameDiv = document.createElement("div");
                customerNameDiv.classList.add("name");
                customerNameDiv.innerHTML = customerName;
                customerOrderDiv.appendChild(beverageDiv);
                customerOrderDiv.appendChild(customerNameDiv);

                document.getElementById(queue).appendChild(customerOrderDiv);
            });
        });
    }
}


export { GetOrders };