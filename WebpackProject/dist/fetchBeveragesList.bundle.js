(self["webpackChunkwebpackproject"] = self["webpackChunkwebpackproject"] || []).push([["fetchBeveragesList"],{

/***/ "./src/Customer_View/fetchBeveragesList.js":
/*!*************************************************!*\
  !*** ./src/Customer_View/fetchBeveragesList.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getCustomersData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCustomersData.js */ "./src/Customer_View/getCustomersData.js");
/* harmony import */ var _customerView_Styling_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customerView_Styling.css */ "./src/Customer_View/customerView_Styling.css");
/* harmony import */ var _removeOrderFromQueue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeOrderFromQueue */ "./src/Customer_View/removeOrderFromQueue.js");
//Fetches beverages list from json data
 // import 'bootstrap/dist/css/bootstrap.min.css';




window.onload = function () {
  var jsonData;
  __webpack_require__.e(/*! import() */ "src_Customer_View_beveragesList_json").then(__webpack_require__.t.bind(__webpack_require__, /*! ../Customer_View/beveragesList.json */ "./src/Customer_View/beveragesList.json", 19)).then(function (_ref) {
    var data = _ref["default"];
    jsonData = data.filter(function (obj) {
      return obj.available === true;
    }); //Create and append the beverage block

    var menuSection = document.getElementById("menuSection");
    jsonData.forEach(function (obj) {
      var beverage = document.createElement('div');
      beverage.innerHTML = obj.name;
      beverage.classList.add("drinkName");
      menuSection.appendChild(beverage);
    });
  })["catch"](function (error) {
    throw "Unable to load JSON data";
  });
};

new _getCustomersData_js__WEBPACK_IMPORTED_MODULE_0__.GetOrders().getOrders();

/***/ }),

/***/ "./src/Customer_View/removeOrderFromQueue.js":
/*!***************************************************!*\
  !*** ./src/Customer_View/removeOrderFromQueue.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_Page_fireStoreAccess_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Index_Page/fireStoreAccess.js */ "./src/Index_Page/fireStoreAccess.js");
 //Remove Customer Order from the Queue after the Customer collects his order
//Add onclick event for inTheQueue article, so that a callback function is executed when any of 
//the customerOrders is clicked from that queue. - (This happens because of Event bubbling)

document.getElementById("readyToCollect").onclick = function (event) {
  if (event.target.classList[0] == "name_drink" || event.target.parentElement.classList[0] == "name_drink") {
    var customerOrderDiv;
    var customerId;

    if (event.target.classList[0] == "name_drink") {
      customerOrderDiv = event.target;
    } else {
      customerOrderDiv = event.target.parentElement;
    } //customerId is the index number to access the customer's data in the localStorage


    customerId = customerOrderDiv.id;
    deleteOrderFromQueue(customerOrderDiv, customerId); //console.log(customerId);
  }
};

function deleteOrderFromQueue(customerOrderDiv, customerId) {
  //Remove the customer's order from readyToCollect queue
  customerOrderDiv.remove();
  customerId = parseInt(customerId);
  _Index_Page_fireStoreAccess_js__WEBPACK_IMPORTED_MODULE_0__.database.collection("customers").get().then(function (snapshot) {
    var doc = snapshot.docs[0];
    var docId = doc.id;
    var customersData = doc.data().customersData;
    var customerOrders = customersData[0];
    var orderQueue = customersData[1];
    var currentCustomersCount = doc.data().currentCustomersCount; //Delete the customer's data from Firestore

    delete customerOrders[customerId];
    delete orderQueue[customerId];
    currentCustomersCount--;
    _Index_Page_fireStoreAccess_js__WEBPACK_IMPORTED_MODULE_0__.database.collection("customers").doc(docId).update({
      customersData: customersData,
      currentCustomersCount: currentCustomersCount
    });
  });
}

/***/ }),

/***/ "./src/Customer_View/customerView_Styling.css":
/*!****************************************************!*\
  !*** ./src/Customer_View/customerView_Styling.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
0,[["./src/Customer_View/fetchBeveragesList.js","runtime","vendors-node_modules_firebase_app_dist_index_esm_js-node_modules_firebase_firestore_dist_inde-439294","sharedGetCustomersData"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrcHJvamVjdC8uL3NyYy9DdXN0b21lcl9WaWV3L2ZldGNoQmV2ZXJhZ2VzTGlzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrcHJvamVjdC8uL3NyYy9DdXN0b21lcl9WaWV3L3JlbW92ZU9yZGVyRnJvbVF1ZXVlLmpzIiwid2VicGFjazovL3dlYnBhY2twcm9qZWN0Ly4vc3JjL0N1c3RvbWVyX1ZpZXcvY3VzdG9tZXJWaWV3X1N0eWxpbmcuY3NzP2Q2NWQiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwianNvbkRhdGEiLCJ0aGVuIiwiZGF0YSIsImZpbHRlciIsIm9iaiIsImF2YWlsYWJsZSIsIm1lbnVTZWN0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZvckVhY2giLCJiZXZlcmFnZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJuYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJlcnJvciIsIkdldE9yZGVycyIsImdldE9yZGVycyIsIm9uY2xpY2siLCJldmVudCIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJjdXN0b21lck9yZGVyRGl2IiwiY3VzdG9tZXJJZCIsImlkIiwiZGVsZXRlT3JkZXJGcm9tUXVldWUiLCJyZW1vdmUiLCJwYXJzZUludCIsImRhdGFiYXNlIiwiZ2V0Iiwic25hcHNob3QiLCJkb2MiLCJkb2NzIiwiZG9jSWQiLCJjdXN0b21lcnNEYXRhIiwiY3VzdG9tZXJPcmRlcnMiLCJvcmRlclF1ZXVlIiwiY3VycmVudEN1c3RvbWVyc0NvdW50IiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtBQUNBOztBQUVBQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsWUFBVztBQUN2QixNQUFJQyxRQUFKO0FBQ0EsK05BQ0NDLElBREQsQ0FDTSxnQkFBdUI7QUFBQSxRQUFYQyxJQUFXO0FBQ3JCRixZQUFRLEdBQUdFLElBQUks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akREIiwiZmlsZSI6ImZldGNoQmV2ZXJhZ2VzTGlzdC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0ZldGNoZXMgYmV2ZXJhZ2VzIGxpc3QgZnJvbSBqc29uIGRhdGFcclxuXHJcbmltcG9ydCB7IEdldE9yZGVycyB9IGZyb20gJy4vZ2V0Q3VzdG9tZXJzRGF0YS5qcyc7XHJcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICcuL2N1c3RvbWVyVmlld19TdHlsaW5nLmNzcyc7XHJcbmltcG9ydCAnLi9yZW1vdmVPcmRlckZyb21RdWV1ZSc7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQganNvbkRhdGE7XHJcbiAgICBpbXBvcnQgKCcuLi9DdXN0b21lcl9WaWV3L2JldmVyYWdlc0xpc3QuanNvbicpXHJcbiAgICAudGhlbigoeyBkZWZhdWx0OiBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAganNvbkRhdGEgPSBkYXRhLmZpbHRlcigob2JqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqLmF2YWlsYWJsZSA9PT0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL0NyZWF0ZSBhbmQgYXBwZW5kIHRoZSBiZXZlcmFnZSBibG9ja1xyXG4gICAgICAgICAgICBsZXQgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVTZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICBqc29uRGF0YS5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBiZXZlcmFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgYmV2ZXJhZ2UuaW5uZXJIVE1MID0gb2JqLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBiZXZlcmFnZS5jbGFzc0xpc3QuYWRkKFwiZHJpbmtOYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoYmV2ZXJhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgdGhyb3cgXCJVbmFibGUgdG8gbG9hZCBKU09OIGRhdGFcIjtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5uZXcgR2V0T3JkZXJzKCkuZ2V0T3JkZXJzKCk7IiwiaW1wb3J0IHsgZGF0YWJhc2UgfSBmcm9tICcuLi9JbmRleF9QYWdlL2ZpcmVTdG9yZUFjY2Vzcy5qcyc7XHJcblxyXG4vL1JlbW92ZSBDdXN0b21lciBPcmRlciBmcm9tIHRoZSBRdWV1ZSBhZnRlciB0aGUgQ3VzdG9tZXIgY29sbGVjdHMgaGlzIG9yZGVyXHJcblxyXG5cclxuLy9BZGQgb25jbGljayBldmVudCBmb3IgaW5UaGVRdWV1ZSBhcnRpY2xlLCBzbyB0aGF0IGEgY2FsbGJhY2sgZnVuY3Rpb24gaXMgZXhlY3V0ZWQgd2hlbiBhbnkgb2YgXHJcbi8vdGhlIGN1c3RvbWVyT3JkZXJzIGlzIGNsaWNrZWQgZnJvbSB0aGF0IHF1ZXVlLiAtIChUaGlzIGhhcHBlbnMgYmVjYXVzZSBvZiBFdmVudCBidWJibGluZylcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWFkeVRvQ29sbGVjdFwiKS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFswXSA9PSBcIm5hbWVfZHJpbmtcIiB8fCBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3RbMF0gPT0gXCJuYW1lX2RyaW5rXCIpIHtcclxuICAgICAgICBsZXQgY3VzdG9tZXJPcmRlckRpdjtcclxuICAgICAgICBsZXQgY3VzdG9tZXJJZDtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFswXSA9PSBcIm5hbWVfZHJpbmtcIikge1xyXG4gICAgICAgICAgICBjdXN0b21lck9yZGVyRGl2ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1c3RvbWVyT3JkZXJEaXYgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jdXN0b21lcklkIGlzIHRoZSBpbmRleCBudW1iZXIgdG8gYWNjZXNzIHRoZSBjdXN0b21lcidzIGRhdGEgaW4gdGhlIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIGN1c3RvbWVySWQgPSBjdXN0b21lck9yZGVyRGl2LmlkO1xyXG5cclxuICAgICAgICBkZWxldGVPcmRlckZyb21RdWV1ZShjdXN0b21lck9yZGVyRGl2LCBjdXN0b21lcklkKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGN1c3RvbWVySWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGVsZXRlT3JkZXJGcm9tUXVldWUoY3VzdG9tZXJPcmRlckRpdiwgY3VzdG9tZXJJZCkge1xyXG4gICAgLy9SZW1vdmUgdGhlIGN1c3RvbWVyJ3Mgb3JkZXIgZnJvbSByZWFkeVRvQ29sbGVjdCBxdWV1ZVxyXG4gICAgY3VzdG9tZXJPcmRlckRpdi5yZW1vdmUoKTtcclxuXHJcbiAgICBjdXN0b21lcklkID0gcGFyc2VJbnQoY3VzdG9tZXJJZCk7XHJcblxyXG4gICAgZGF0YWJhc2UuY29sbGVjdGlvbihcImN1c3RvbWVyc1wiKS5nZXQoKS50aGVuKGZ1bmN0aW9uKHNuYXBzaG90KSB7XHJcbiAgICAgICAgY29uc3QgZG9jID0gc25hcHNob3QuZG9jc1swXTtcclxuICAgICAgICBsZXQgZG9jSWQgPSBkb2MuaWQ7XHJcbiAgICAgICAgbGV0IGN1c3RvbWVyc0RhdGEgPSBkb2MuZGF0YSgpLmN1c3RvbWVyc0RhdGE7XHJcbiAgICAgICAgbGV0IGN1c3RvbWVyT3JkZXJzID0gY3VzdG9tZXJzRGF0YVswXTtcclxuICAgICAgICBsZXQgb3JkZXJRdWV1ZSA9IGN1c3RvbWVyc0RhdGFbMV07XHJcbiAgICAgICAgbGV0IGN1cnJlbnRDdXN0b21lcnNDb3VudCA9IGRvYy5kYXRhKCkuY3VycmVudEN1c3RvbWVyc0NvdW50O1xyXG5cclxuICAgICAgICAvL0RlbGV0ZSB0aGUgY3VzdG9tZXIncyBkYXRhIGZyb20gRmlyZXN0b3JlXHJcbiAgICAgICAgZGVsZXRlIGN1c3RvbWVyT3JkZXJzW2N1c3RvbWVySWRdO1xyXG4gICAgICAgIGRlbGV0ZSBvcmRlclF1ZXVlW2N1c3RvbWVySWRdO1xyXG4gICAgICAgIGN1cnJlbnRDdXN0b21lcnNDb3VudC0tO1xyXG5cclxuICAgICAgICBkYXRhYmFzZS5jb2xsZWN0aW9uKFwiY3VzdG9tZXJzXCIpLmRvYyhkb2NJZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgY3VzdG9tZXJzRGF0YTogY3VzdG9tZXJzRGF0YSxcclxuICAgICAgICAgICAgY3VycmVudEN1c3RvbWVyc0NvdW50OiBjdXJyZW50Q3VzdG9tZXJzQ291bnRcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==