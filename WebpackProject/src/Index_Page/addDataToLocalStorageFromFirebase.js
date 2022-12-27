import { database } from '../Index_Page/fireStoreAccess.js';
database.collection("customers").get().then((snapshot) => {
    const doc = snapshot.docs[0];
    let customersData = doc.data().customersData;
    let currentCustomersCount = doc.data().currentCustomersCount;
    let index = doc.data().index;
    addToLocalStorage(customersData, currentCustomersCount, index);

    function addToLocalStorage(customersData, currentCustomersCount, index) {
        localStorage.setItem("customersData", JSON.stringify(customersData));
        localStorage.setItem("index", index);
        localStorage.setItem("currentCustomersCount", currentCustomersCount);
    }
});