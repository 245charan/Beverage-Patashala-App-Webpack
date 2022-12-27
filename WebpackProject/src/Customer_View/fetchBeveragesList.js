//Fetches beverages list from json data

import { GetOrders } from './getCustomersData.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './customerView_Styling.css';
import './removeOrderFromQueue';

window.onload = function() {
    let jsonData;
    import ('../Customer_View/beveragesList.json')
    .then(({ default: data }) => {
            jsonData = data.filter((obj) => {
                return obj.available === true;
            });

            //Create and append the beverage block
            let menuSection = document.getElementById("menuSection");
            jsonData.forEach((obj) => {
                var beverage = document.createElement('div');
                beverage.innerHTML = obj.name;
                beverage.classList.add("drinkName");
                menuSection.appendChild(beverage);
            });
        })
        .catch((error) => {
            throw "Unable to load JSON data";
        });
}



new GetOrders().getOrders();