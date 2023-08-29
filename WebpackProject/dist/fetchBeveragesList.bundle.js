"use strict";
(self["webpackChunkwebpackproject"] = self["webpackChunkwebpackproject"] || []).push([["fetchBeveragesList"],{

/***/ "./src/Customer_View/fetchBeveragesList.js":
/*!*************************************************!*\
  !*** ./src/Customer_View/fetchBeveragesList.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_firebase_app_dist_index_esm_js-node_modules_firebase_firestore_dist_inde-439294","sharedGetCustomersData"], () => (__webpack_exec__("./src/Customer_View/fetchBeveragesList.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxxQkFBcUIsR0FBR04sR0FBRyxDQUFDL0IsSUFBSixHQUFXcUMscUJBQXZDLENBTjJELENBUTNEOztBQUNBLFdBQU9GLGNBQWMsQ0FBQ1osVUFBRCxDQUFyQjtBQUNBLFdBQU9hLFVBQVUsQ0FBQ2IsVUFBRCxDQUFqQjtBQUNBYyxJQUFBQSxxQkFBcUI7QUFFckJwQixJQUFBQSxvRUFBUSxDQUFDVyxVQUFULENBQW9CLFdBQXBCLEVBQWlDRyxHQUFqQyxDQUFxQ0UsS0FBckMsRUFBNENLLE1BQTVDLENBQW1EO0FBQy9DSixNQUFBQSxhQUFhLEVBQUVBLGFBRGdDO0FBRS9DRyxNQUFBQSxxQkFBcUIsRUFBRUE7QUFGd0IsS0FBbkQ7QUFJSCxHQWpCRDtBQWtCSDs7Ozs7Ozs7Ozs7QUNqREQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrcHJvamVjdC8uL3NyYy9DdXN0b21lcl9WaWV3L2ZldGNoQmV2ZXJhZ2VzTGlzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrcHJvamVjdC8uL3NyYy9DdXN0b21lcl9WaWV3L3JlbW92ZU9yZGVyRnJvbVF1ZXVlLmpzIiwid2VicGFjazovL3dlYnBhY2twcm9qZWN0Ly4vc3JjL0N1c3RvbWVyX1ZpZXcvY3VzdG9tZXJWaWV3X1N0eWxpbmcuY3NzP2Q2NWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy9GZXRjaGVzIGJldmVyYWdlcyBsaXN0IGZyb20ganNvbiBkYXRhXHJcblxyXG5pbXBvcnQgeyBHZXRPcmRlcnMgfSBmcm9tICcuL2dldEN1c3RvbWVyc0RhdGEuanMnO1xyXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCAnLi9jdXN0b21lclZpZXdfU3R5bGluZy5jc3MnO1xyXG5pbXBvcnQgJy4vcmVtb3ZlT3JkZXJGcm9tUXVldWUnO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGpzb25EYXRhO1xyXG4gICAgaW1wb3J0ICgnLi4vQ3VzdG9tZXJfVmlldy9iZXZlcmFnZXNMaXN0Lmpzb24nKVxyXG4gICAgLnRoZW4oKHsgZGVmYXVsdDogZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGpzb25EYXRhID0gZGF0YS5maWx0ZXIoKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iai5hdmFpbGFibGUgPT09IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9DcmVhdGUgYW5kIGFwcGVuZCB0aGUgYmV2ZXJhZ2UgYmxvY2tcclxuICAgICAgICAgICAgbGV0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51U2VjdGlvblwiKTtcclxuICAgICAgICAgICAganNvbkRhdGEuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmV2ZXJhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGJldmVyYWdlLmlubmVySFRNTCA9IG9iai5uYW1lO1xyXG4gICAgICAgICAgICAgICAgYmV2ZXJhZ2UuY2xhc3NMaXN0LmFkZChcImRyaW5rTmFtZVwiKTtcclxuICAgICAgICAgICAgICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGJldmVyYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHRocm93IFwiVW5hYmxlIHRvIGxvYWQgSlNPTiBkYXRhXCI7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxubmV3IEdldE9yZGVycygpLmdldE9yZGVycygpOyIsImltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSAnLi4vSW5kZXhfUGFnZS9maXJlU3RvcmVBY2Nlc3MuanMnO1xyXG5cclxuLy9SZW1vdmUgQ3VzdG9tZXIgT3JkZXIgZnJvbSB0aGUgUXVldWUgYWZ0ZXIgdGhlIEN1c3RvbWVyIGNvbGxlY3RzIGhpcyBvcmRlclxyXG5cclxuXHJcbi8vQWRkIG9uY2xpY2sgZXZlbnQgZm9yIGluVGhlUXVldWUgYXJ0aWNsZSwgc28gdGhhdCBhIGNhbGxiYWNrIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkIHdoZW4gYW55IG9mIFxyXG4vL3RoZSBjdXN0b21lck9yZGVycyBpcyBjbGlja2VkIGZyb20gdGhhdCBxdWV1ZS4gLSAoVGhpcyBoYXBwZW5zIGJlY2F1c2Ugb2YgRXZlbnQgYnViYmxpbmcpXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVhZHlUb0NvbGxlY3RcIikub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMF0gPT0gXCJuYW1lX2RyaW5rXCIgfHwgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzBdID09IFwibmFtZV9kcmlua1wiKSB7XHJcbiAgICAgICAgbGV0IGN1c3RvbWVyT3JkZXJEaXY7XHJcbiAgICAgICAgbGV0IGN1c3RvbWVySWQ7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMF0gPT0gXCJuYW1lX2RyaW5rXCIpIHtcclxuICAgICAgICAgICAgY3VzdG9tZXJPcmRlckRpdiA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjdXN0b21lck9yZGVyRGl2ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY3VzdG9tZXJJZCBpcyB0aGUgaW5kZXggbnVtYmVyIHRvIGFjY2VzcyB0aGUgY3VzdG9tZXIncyBkYXRhIGluIHRoZSBsb2NhbFN0b3JhZ2VcclxuICAgICAgICBjdXN0b21lcklkID0gY3VzdG9tZXJPcmRlckRpdi5pZDtcclxuXHJcbiAgICAgICAgZGVsZXRlT3JkZXJGcm9tUXVldWUoY3VzdG9tZXJPcmRlckRpdiwgY3VzdG9tZXJJZCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjdXN0b21lcklkKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZU9yZGVyRnJvbVF1ZXVlKGN1c3RvbWVyT3JkZXJEaXYsIGN1c3RvbWVySWQpIHtcclxuICAgIC8vUmVtb3ZlIHRoZSBjdXN0b21lcidzIG9yZGVyIGZyb20gcmVhZHlUb0NvbGxlY3QgcXVldWVcclxuICAgIGN1c3RvbWVyT3JkZXJEaXYucmVtb3ZlKCk7XHJcblxyXG4gICAgY3VzdG9tZXJJZCA9IHBhcnNlSW50KGN1c3RvbWVySWQpO1xyXG5cclxuICAgIGRhdGFiYXNlLmNvbGxlY3Rpb24oXCJjdXN0b21lcnNcIikuZ2V0KCkudGhlbihmdW5jdGlvbihzbmFwc2hvdCkge1xyXG4gICAgICAgIGNvbnN0IGRvYyA9IHNuYXBzaG90LmRvY3NbMF07XHJcbiAgICAgICAgbGV0IGRvY0lkID0gZG9jLmlkO1xyXG4gICAgICAgIGxldCBjdXN0b21lcnNEYXRhID0gZG9jLmRhdGEoKS5jdXN0b21lcnNEYXRhO1xyXG4gICAgICAgIGxldCBjdXN0b21lck9yZGVycyA9IGN1c3RvbWVyc0RhdGFbMF07XHJcbiAgICAgICAgbGV0IG9yZGVyUXVldWUgPSBjdXN0b21lcnNEYXRhWzFdO1xyXG4gICAgICAgIGxldCBjdXJyZW50Q3VzdG9tZXJzQ291bnQgPSBkb2MuZGF0YSgpLmN1cnJlbnRDdXN0b21lcnNDb3VudDtcclxuXHJcbiAgICAgICAgLy9EZWxldGUgdGhlIGN1c3RvbWVyJ3MgZGF0YSBmcm9tIEZpcmVzdG9yZVxyXG4gICAgICAgIGRlbGV0ZSBjdXN0b21lck9yZGVyc1tjdXN0b21lcklkXTtcclxuICAgICAgICBkZWxldGUgb3JkZXJRdWV1ZVtjdXN0b21lcklkXTtcclxuICAgICAgICBjdXJyZW50Q3VzdG9tZXJzQ291bnQtLTtcclxuXHJcbiAgICAgICAgZGF0YWJhc2UuY29sbGVjdGlvbihcImN1c3RvbWVyc1wiKS5kb2MoZG9jSWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGN1c3RvbWVyc0RhdGE6IGN1c3RvbWVyc0RhdGEsXHJcbiAgICAgICAgICAgIGN1cnJlbnRDdXN0b21lcnNDb3VudDogY3VycmVudEN1c3RvbWVyc0NvdW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJHZXRPcmRlcnMiLCJ3aW5kb3ciLCJvbmxvYWQiLCJqc29uRGF0YSIsInRoZW4iLCJkYXRhIiwiZmlsdGVyIiwib2JqIiwiYXZhaWxhYmxlIiwibWVudVNlY3Rpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9yRWFjaCIsImJldmVyYWdlIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIm5hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImVycm9yIiwiZ2V0T3JkZXJzIiwiZGF0YWJhc2UiLCJvbmNsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiY3VzdG9tZXJPcmRlckRpdiIsImN1c3RvbWVySWQiLCJpZCIsImRlbGV0ZU9yZGVyRnJvbVF1ZXVlIiwicmVtb3ZlIiwicGFyc2VJbnQiLCJjb2xsZWN0aW9uIiwiZ2V0Iiwic25hcHNob3QiLCJkb2MiLCJkb2NzIiwiZG9jSWQiLCJjdXN0b21lcnNEYXRhIiwiY3VzdG9tZXJPcmRlcnMiLCJvcmRlclF1ZXVlIiwiY3VycmVudEN1c3RvbWVyc0NvdW50IiwidXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==