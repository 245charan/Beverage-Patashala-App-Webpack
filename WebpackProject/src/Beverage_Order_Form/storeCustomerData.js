import { database } from '../Index_Page/fireStoreAccess.js';
import { loadMenu } from './fetchBeverageMenu.js';
import '../Index_Page/addDataToLocalStorageFromFirebase';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './orderFormStyling.css';




function throttleSubmit(storeData, limit) {
    let flag = true;
    return () => {
        if (flag) {
            storeData();
            flag = false;
            setTimeout(function() {
                flag = true;
            }, limit)
        }
    }
}


loadMenu();
const waitAndStoreData = throttleSubmit(storeData, 2500);
document.getElementById("storeData").onclick = waitAndStoreData;


function storeData() {

    //Store Customer Data in Firestore

    let customerName = document.getElementById("customerName").value;
    let beverage = document.getElementById("beverageList").value;
    let customerName_beverage = customerName + "$" + beverage;

    if (customerName != "") {
        if (beverage) {
            //Get Data from Firestore
            database.collection("customers").get().then(snapshot => {
                if (snapshot.docs.length == 0) {
                    let customersData = [];
                    let customerOrders = {};
                    let orderQueue = {};
                    let currentCustomersCount = 0;
                    let index = 0;
                    customersData[0] = customerOrders;
                    customersData[1] = orderQueue;
                    database.collection("customers").add({
                        customersData: customersData,
                        currentCustomersCount: currentCustomersCount,
                        index: index
                    });
                }
                const doc = snapshot.docs[0];
                let docId = doc.id;
                let customersData = doc.data().customersData;
                let customerOrders = customersData[0];
                let orderQueue = customersData[1];
                let currentCustomersCount = doc.data().currentCustomersCount;
                let index = doc.data().index;
                customerOrders[index] = customerName_beverage;
                orderQueue[index] = "inTheQueue";
                index++;
                currentCustomersCount++;

                database.collection("customers").doc(docId).update({
                    customersData: customersData,
                    currentCustomersCount: currentCustomersCount,
                    index: index
                });

                displayMessage();

            });
        }
    }
}


//Display the Order Placed message to Customers
function displayMessage() {
    let orderMessage = document.getElementById('orderPlacedMessage');
    orderMessage.style.display = "inline";
    setTimeout(function() {
        orderMessage.style.display = "none";
    }, 2500);
}