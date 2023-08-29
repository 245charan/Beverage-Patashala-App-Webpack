"use strict";
(self["webpackChunkwebpackproject"] = self["webpackChunkwebpackproject"] || []).push([["storeCustomerData"],{

/***/ "./src/Beverage_Order_Form/fetchBeverageMenu.js":
/*!******************************************************!*\
  !*** ./src/Beverage_Order_Form/fetchBeverageMenu.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenu: () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {
  var jsonData;
  __webpack_require__.e(/*! import() */ "src_Customer_View_beveragesList_json").then(__webpack_require__.t.bind(__webpack_require__, /*! ../Customer_View/beveragesList.json */ "./src/Customer_View/beveragesList.json", 19)).then(function (_ref) {
    var data = _ref["default"];
    jsonData = data.filter(function (obj) {
      return obj.available === true;
    }); //Create a dropdown list with the json data

    jsonData.forEach(function (obj) {
      var select = document.getElementById("beverageList");
      var option = document.createElement("option");
      option.value = obj.name;
      option.innerHTML = obj.name;
      select.appendChild(option);
    });
  })["catch"](function (error) {
    throw "Unable to load JSON data";
  });
}



/***/ }),

/***/ "./src/Beverage_Order_Form/storeCustomerData.js":
/*!******************************************************!*\
  !*** ./src/Beverage_Order_Form/storeCustomerData.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_Page_fireStoreAccess_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Index_Page/fireStoreAccess.js */ "./src/Index_Page/fireStoreAccess.js");
/* harmony import */ var _fetchBeverageMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchBeverageMenu.js */ "./src/Beverage_Order_Form/fetchBeverageMenu.js");
/* harmony import */ var _Index_Page_addDataToLocalStorageFromFirebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Index_Page/addDataToLocalStorageFromFirebase */ "./src/Index_Page/addDataToLocalStorageFromFirebase.js");
/* harmony import */ var _orderFormStyling_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderFormStyling.css */ "./src/Beverage_Order_Form/orderFormStyling.css");


 // import 'bootstrap/dist/css/bootstrap.min.css';



function throttleSubmit(storeData, limit) {
  var flag = true;
  return function () {
    if (flag) {
      storeData();
      flag = false;
      setTimeout(function () {
        flag = true;
      }, limit);
    }
  };
}

(0,_fetchBeverageMenu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();
var waitAndStoreData = throttleSubmit(storeData, 2500);
document.getElementById("storeData").onclick = waitAndStoreData;

function storeData() {
  //Store Customer Data in Firestore
  var customerName = document.getElementById("customerName").value;
  var beverage = document.getElementById("beverageList").value;
  var customerName_beverage = customerName + "$" + beverage;

  if (customerName != "") {
    if (beverage) {
      //Get Data from Firestore
      _Index_Page_fireStoreAccess_js__WEBPACK_IMPORTED_MODULE_0__.database.collection("customers").get().then(function (snapshot) {
        if (snapshot.docs.length == 0) {
          var _customersData = [];
          var _customerOrders = {};
          var _orderQueue = {};
          var _currentCustomersCount = 0;
          var _index = 0;
          _customersData[0] = _customerOrders;
          _customersData[1] = _orderQueue;
          _Index_Page_fireStoreAccess_js__WEBPACK_IMPORTED_MODULE_0__.database.collection("customers").add({
            customersData: _customersData,
            currentCustomersCount: _currentCustomersCount,
            index: _index
          });
        }

        var doc = snapshot.docs[0];
        var docId = doc.id;
        var customersData = doc.data().customersData;
        var customerOrders = customersData[0];
        var orderQueue = customersData[1];
        var currentCustomersCount = doc.data().currentCustomersCount;
        var index = doc.data().index;
        customerOrders[index] = customerName_beverage;
        orderQueue[index] = "inTheQueue";
        index++;
        currentCustomersCount++;
        _Index_Page_fireStoreAccess_js__WEBPACK_IMPORTED_MODULE_0__.database.collection("customers").doc(docId).update({
          customersData: customersData,
          currentCustomersCount: currentCustomersCount,
          index: index
        });
        displayMessage();
      });
    }
  }
} //Display the Order Placed message to Customers


function displayMessage() {
  var orderMessage = document.getElementById('orderPlacedMessage');
  orderMessage.style.display = "inline";
  setTimeout(function () {
    orderMessage.style.display = "none";
  }, 2500);
}

/***/ }),

/***/ "./src/Index_Page/addDataToLocalStorageFromFirebase.js":
/*!*************************************************************!*\
  !*** ./src/Index_Page/addDataToLocalStorageFromFirebase.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_Page_fireStoreAccess_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Index_Page/fireStoreAccess.js */ "./src/Index_Page/fireStoreAccess.js");

_Index_Page_fireStoreAccess_js__WEBPACK_IMPORTED_MODULE_0__.database.collection("customers").get().then(function (snapshot) {
  var doc = snapshot.docs[0];
  var customersData = doc.data().customersData;
  var currentCustomersCount = doc.data().currentCustomersCount;
  var index = doc.data().index;
  addToLocalStorage(customersData, currentCustomersCount, index);

  function addToLocalStorage(customersData, currentCustomersCount, index) {
    localStorage.setItem("customersData", JSON.stringify(customersData));
    localStorage.setItem("index", index);
    localStorage.setItem("currentCustomersCount", currentCustomersCount);
  }
});

/***/ }),

/***/ "./src/Beverage_Order_Form/orderFormStyling.css":
/*!******************************************************!*\
  !*** ./src/Beverage_Order_Form/orderFormStyling.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_firebase_app_dist_index_esm_js-node_modules_firebase_firestore_dist_inde-439294","sharedFireStoreAccess"], () => (__webpack_exec__("./src/Beverage_Order_Form/storeCustomerData.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxZQUFZLENBQUNDLEtBQWIsQ0FBbUJDLE9BQW5CLEdBQTZCLFFBQTdCO0FBQ0F4QixFQUFBQSxVQUFVLENBQUMsWUFBVztBQUNsQnNCLElBQUFBLFlBQVksQ0FBQ0MsS0FBYixDQUFtQkMsT0FBbkIsR0FBNkIsTUFBN0I7QUFDSCxHQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0g7Ozs7Ozs7Ozs7OztBQ3ZGRDtBQUNBN0Isb0VBQVEsQ0FBQ1csVUFBVCxDQUFvQixXQUFwQixFQUFpQ0MsR0FBakMsR0FBdUM1QixJQUF2QyxDQUE0QyxVQUFDNkIsUUFBRCxFQUFjO0FBQ3RELE1BQU1TLEdBQUcsR0FBR1QsUUFBUSxDQUFDQyxJQUFULENBQWMsQ0FBZCxDQUFaO0FBQ0EsTUFBSUUsYUFBYSxHQUFHTSxHQUFHLENBQUNyQyxJQUFKLEdBQVcrQixhQUEvQjtBQUNBLE1BQUlHLHFCQUFxQixHQUFHRyxHQUFHLENBQUNyQyxJQUFKLEdBQVdrQyxxQkFBdkM7QUFDQSxNQUFJQyxLQUFLLEdBQUdFLEdBQUcsQ0FBQ3JDLElBQUosR0FBV21DLEtBQXZCO0FBQ0FVLEVBQUFBLGlCQUFpQixDQUFDZCxhQUFELEVBQWdCRyxxQkFBaEIsRUFBdUNDLEtBQXZDLENBQWpCOztBQUVBLFdBQVNVLGlCQUFULENBQTJCZCxhQUEzQixFQUEwQ0cscUJBQTFDLEVBQWlFQyxLQUFqRSxFQUF3RTtBQUNwRVcsSUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGVBQXJCLEVBQXNDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWxCLGFBQWYsQ0FBdEM7QUFDQWUsSUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCWixLQUE5QjtBQUNBVyxJQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsdUJBQXJCLEVBQThDYixxQkFBOUM7QUFDSDtBQUNKLENBWkQ7Ozs7Ozs7Ozs7O0FDREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrcHJvamVjdC8uL3NyYy9CZXZlcmFnZV9PcmRlcl9Gb3JtL2ZldGNoQmV2ZXJhZ2VNZW51LmpzIiwid2VicGFjazovL3dlYnBhY2twcm9qZWN0Ly4vc3JjL0JldmVyYWdlX09yZGVyX0Zvcm0vc3RvcmVDdXN0b21lckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3Byb2plY3QvLi9zcmMvSW5kZXhfUGFnZS9hZGREYXRhVG9Mb2NhbFN0b3JhZ2VGcm9tRmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3Byb2plY3QvLi9zcmMvQmV2ZXJhZ2VfT3JkZXJfRm9ybS9vcmRlckZvcm1TdHlsaW5nLmNzcz9hNmI1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRNZW51KCkge1xyXG4gICAgbGV0IGpzb25EYXRhO1xyXG4gICAgaW1wb3J0ICgnLi4vQ3VzdG9tZXJfVmlldy9iZXZlcmFnZXNMaXN0Lmpzb24nKVxyXG4gICAgLnRoZW4oKHsgZGVmYXVsdDogZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGpzb25EYXRhID0gZGF0YS5maWx0ZXIoKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iai5hdmFpbGFibGUgPT09IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9DcmVhdGUgYSBkcm9wZG93biBsaXN0IHdpdGggdGhlIGpzb24gZGF0YVxyXG4gICAgICAgICAgICBqc29uRGF0YS5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJldmVyYWdlTGlzdFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gb2JqLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gb2JqLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHRocm93IFwiVW5hYmxlIHRvIGxvYWQgSlNPTiBkYXRhXCI7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGxvYWRNZW51IH07IiwiaW1wb3J0IHsgZGF0YWJhc2UgfSBmcm9tICcuLi9JbmRleF9QYWdlL2ZpcmVTdG9yZUFjY2Vzcy5qcyc7XHJcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSAnLi9mZXRjaEJldmVyYWdlTWVudS5qcyc7XHJcbmltcG9ydCAnLi4vSW5kZXhfUGFnZS9hZGREYXRhVG9Mb2NhbFN0b3JhZ2VGcm9tRmlyZWJhc2UnO1xyXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCAnLi9vcmRlckZvcm1TdHlsaW5nLmNzcyc7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0aHJvdHRsZVN1Ym1pdChzdG9yZURhdGEsIGxpbWl0KSB7XHJcbiAgICBsZXQgZmxhZyA9IHRydWU7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgICAgIHN0b3JlRGF0YSgpO1xyXG4gICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSwgbGltaXQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxubG9hZE1lbnUoKTtcclxuY29uc3Qgd2FpdEFuZFN0b3JlRGF0YSA9IHRocm90dGxlU3VibWl0KHN0b3JlRGF0YSwgMjUwMCk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcmVEYXRhXCIpLm9uY2xpY2sgPSB3YWl0QW5kU3RvcmVEYXRhO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHN0b3JlRGF0YSgpIHtcclxuXHJcbiAgICAvL1N0b3JlIEN1c3RvbWVyIERhdGEgaW4gRmlyZXN0b3JlXHJcblxyXG4gICAgbGV0IGN1c3RvbWVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VzdG9tZXJOYW1lXCIpLnZhbHVlO1xyXG4gICAgbGV0IGJldmVyYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZXZlcmFnZUxpc3RcIikudmFsdWU7XHJcbiAgICBsZXQgY3VzdG9tZXJOYW1lX2JldmVyYWdlID0gY3VzdG9tZXJOYW1lICsgXCIkXCIgKyBiZXZlcmFnZTtcclxuXHJcbiAgICBpZiAoY3VzdG9tZXJOYW1lICE9IFwiXCIpIHtcclxuICAgICAgICBpZiAoYmV2ZXJhZ2UpIHtcclxuICAgICAgICAgICAgLy9HZXQgRGF0YSBmcm9tIEZpcmVzdG9yZVxyXG4gICAgICAgICAgICBkYXRhYmFzZS5jb2xsZWN0aW9uKFwiY3VzdG9tZXJzXCIpLmdldCgpLnRoZW4oc25hcHNob3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNuYXBzaG90LmRvY3MubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXJzRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXN0b21lck9yZGVycyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcmRlclF1ZXVlID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDdXN0b21lcnNDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21lcnNEYXRhWzBdID0gY3VzdG9tZXJPcmRlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJzRGF0YVsxXSA9IG9yZGVyUXVldWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YWJhc2UuY29sbGVjdGlvbihcImN1c3RvbWVyc1wiKS5hZGQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcnNEYXRhOiBjdXN0b21lcnNEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q3VzdG9tZXJzQ291bnQ6IGN1cnJlbnRDdXN0b21lcnNDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb2MgPSBzbmFwc2hvdC5kb2NzWzBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRvY0lkID0gZG9jLmlkO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyc0RhdGEgPSBkb2MuZGF0YSgpLmN1c3RvbWVyc0RhdGE7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXJPcmRlcnMgPSBjdXN0b21lcnNEYXRhWzBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyUXVldWUgPSBjdXN0b21lcnNEYXRhWzFdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDdXN0b21lcnNDb3VudCA9IGRvYy5kYXRhKCkuY3VycmVudEN1c3RvbWVyc0NvdW50O1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZG9jLmRhdGEoKS5pbmRleDtcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyT3JkZXJzW2luZGV4XSA9IGN1c3RvbWVyTmFtZV9iZXZlcmFnZTtcclxuICAgICAgICAgICAgICAgIG9yZGVyUXVldWVbaW5kZXhdID0gXCJpblRoZVF1ZXVlXCI7XHJcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEN1c3RvbWVyc0NvdW50Kys7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YWJhc2UuY29sbGVjdGlvbihcImN1c3RvbWVyc1wiKS5kb2MoZG9jSWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJzRGF0YTogY3VzdG9tZXJzRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q3VzdG9tZXJzQ291bnQ6IGN1cnJlbnRDdXN0b21lcnNDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BsYXlNZXNzYWdlKCk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL0Rpc3BsYXkgdGhlIE9yZGVyIFBsYWNlZCBtZXNzYWdlIHRvIEN1c3RvbWVyc1xyXG5mdW5jdGlvbiBkaXNwbGF5TWVzc2FnZSgpIHtcclxuICAgIGxldCBvcmRlck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JkZXJQbGFjZWRNZXNzYWdlJyk7XHJcbiAgICBvcmRlck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG9yZGVyTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9LCAyNTAwKTtcclxufSIsImltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSAnLi4vSW5kZXhfUGFnZS9maXJlU3RvcmVBY2Nlc3MuanMnO1xyXG5kYXRhYmFzZS5jb2xsZWN0aW9uKFwiY3VzdG9tZXJzXCIpLmdldCgpLnRoZW4oKHNuYXBzaG90KSA9PiB7XHJcbiAgICBjb25zdCBkb2MgPSBzbmFwc2hvdC5kb2NzWzBdO1xyXG4gICAgbGV0IGN1c3RvbWVyc0RhdGEgPSBkb2MuZGF0YSgpLmN1c3RvbWVyc0RhdGE7XHJcbiAgICBsZXQgY3VycmVudEN1c3RvbWVyc0NvdW50ID0gZG9jLmRhdGEoKS5jdXJyZW50Q3VzdG9tZXJzQ291bnQ7XHJcbiAgICBsZXQgaW5kZXggPSBkb2MuZGF0YSgpLmluZGV4O1xyXG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoY3VzdG9tZXJzRGF0YSwgY3VycmVudEN1c3RvbWVyc0NvdW50LCBpbmRleCk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9Mb2NhbFN0b3JhZ2UoY3VzdG9tZXJzRGF0YSwgY3VycmVudEN1c3RvbWVyc0NvdW50LCBpbmRleCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VzdG9tZXJzRGF0YVwiLCBKU09OLnN0cmluZ2lmeShjdXN0b21lcnNEYXRhKSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpbmRleFwiLCBpbmRleCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50Q3VzdG9tZXJzQ291bnRcIiwgY3VycmVudEN1c3RvbWVyc0NvdW50KTtcclxuICAgIH1cclxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImxvYWRNZW51IiwianNvbkRhdGEiLCJ0aGVuIiwiZGF0YSIsImZpbHRlciIsIm9iaiIsImF2YWlsYWJsZSIsImZvckVhY2giLCJzZWxlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwibmFtZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiZXJyb3IiLCJkYXRhYmFzZSIsInRocm90dGxlU3VibWl0Iiwic3RvcmVEYXRhIiwibGltaXQiLCJmbGFnIiwic2V0VGltZW91dCIsIndhaXRBbmRTdG9yZURhdGEiLCJvbmNsaWNrIiwiY3VzdG9tZXJOYW1lIiwiYmV2ZXJhZ2UiLCJjdXN0b21lck5hbWVfYmV2ZXJhZ2UiLCJjb2xsZWN0aW9uIiwiZ2V0Iiwic25hcHNob3QiLCJkb2NzIiwibGVuZ3RoIiwiY3VzdG9tZXJzRGF0YSIsImN1c3RvbWVyT3JkZXJzIiwib3JkZXJRdWV1ZSIsImN1cnJlbnRDdXN0b21lcnNDb3VudCIsImluZGV4IiwiYWRkIiwiZG9jIiwiZG9jSWQiLCJpZCIsInVwZGF0ZSIsImRpc3BsYXlNZXNzYWdlIiwib3JkZXJNZXNzYWdlIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkVG9Mb2NhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=