(self["webpackChunkwebpackproject"] = self["webpackChunkwebpackproject"] || []).push([["storeCustomerData"],{

/***/ "./src/Beverage_Order_Form/fetchBeverageMenu.js":
/*!******************************************************!*\
  !*** ./src/Beverage_Order_Form/fetchBeverageMenu.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => /* binding */ loadMenu
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
0,[["./src/Beverage_Order_Form/storeCustomerData.js","runtime","vendors-node_modules_firebase_app_dist_index_esm_js-node_modules_firebase_firestore_dist_inde-439294","sharedFireStoreAccess"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrcHJvamVjdC8uL3NyYy9CZXZlcmFnZV9PcmRlcl9Gb3JtL2ZldGNoQmV2ZXJhZ2VNZW51LmpzIiwid2VicGFjazovL3dlYnBhY2twcm9qZWN0Ly4vc3JjL0JldmVyYWdlX09yZGVyX0Zvcm0vc3RvcmVDdXN0b21lckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3Byb2plY3QvLi9zcmMvSW5kZXhfUGFnZS9hZGREYXRhVG9Mb2NhbFN0b3JhZ2VGcm9tRmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3Byb2plY3QvLi9zcmMvQmV2ZXJhZ2VfT3JkZXJfRm9ybS9vcmRlckZvcm1TdHlsaW5nLmNzcz9hNmI1Il0sIm5hbWVzIjpbImxvYWRNZW51IiwianNvbkRhdGEiLCJ0aGVuIiwiZGF0YSIsImZpbHRlciIsIm9iaiIsImF2YWlsYWJsZSIsImZvckVhY2giLCJzZWxlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwibmFtZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiZXJyb3IiLCJ0aHJvdHRsZVN1Ym1pdCIsInN0b3JlRGF0YSIsImxpbWl0IiwiZmxhZyIsInNldFRpbWVvdXQiLCJ3YWl0QW5kU3RvcmVEYXRhIiwib25jbGljayIsImN1c3RvbWVyTmFtZSIsImJldmVyYWdlIiwiY3VzdG9tZXJOYW1lX2JldmVyYWdlIiwiZGF0YWJhc2UiLCJnZXQiLCJzbmFwc2hvdCIsImRvY3MiLCJsZW5ndGgiLCJjdXN0b21lcnNEYXRhIiwiY3VzdG9tZXJPcmRlcnMiLCJvcmRlclF1ZXVlIiwiY3VycmVudEN1c3RvbWVyc0NvdW50IiwiaW5kZXgiLCJhZGQiLCJkb2MiLCJkb2NJZCIsImlkIiwidXBkYXRlIiwiZGlzcGxheU1lc3NhZ2UiLCJvcmRlck1lc3NhZ2UiLCJzdHlsZSIsImRpc3BsYXkiLCJhZGRUb0xvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFn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LEdBQWpDLEdBQXVDM0IsSUFBdkMsQ0FBNEMsVUFBQzRCLFFBQUQsRUFBYztBQUN0RCxNQUFNUyxHQUFHLEdBQUdULFFBQVEsQ0FBQ0MsSUFBVCxDQUFjLENBQWQsQ0FBWjtBQUNBLE1BQUlFLGFBQWEsR0FBR00sR0FBRyxDQUFDcEMsSUFBSixHQUFXOEIsYUFBL0I7QUFDQSxNQUFJRyxxQkFBcUIsR0FBR0csR0FBRyxDQUFDcEMsSUFBSixHQUFXaUMscUJBQXZDO0FBQ0EsTUFBSUMsS0FBSyxHQUFHRSxHQUFHLENBQUNwQyxJQUFKLEdBQVdrQyxLQUF2QjtBQUNBVSxtQkFBaUIsQ0FBQ2QsYUFBRCxFQUFnQkcscUJBQWhCLEVBQXVDQyxLQUF2QyxDQUFqQjs7QUFFQSxXQUFTVSxpQkFBVCxDQUEyQmQsYUFBM0IsRUFBMENHLHFCQUExQyxFQUFpRUMsS0FBakUsRUFBd0U7QUFDcEVXLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsZUFBckIsRUFBc0NDLElBQUksQ0FBQ0MsU0FBTCxDQUFlbEIsYUFBZixDQUF0QztBQUNBZSxnQkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCWixLQUE5QjtBQUNBVyxnQkFBWSxDQUFDQyxPQUFiLENBQXFCLHVCQUFyQixFQUE4Q2IscUJBQTlDO0FBQ0g7QUFDSixDQVpELEU7Ozs7Ozs7Ozs7OztBQ0RBIiwiZmlsZSI6InN0b3JlQ3VzdG9tZXJEYXRhLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRNZW51KCkge1xyXG4gICAgbGV0IGpzb25EYXRhO1xyXG4gICAgaW1wb3J0ICgnLi4vQ3VzdG9tZXJfVmlldy9iZXZlcmFnZXNMaXN0Lmpzb24nKVxyXG4gICAgLnRoZW4oKHsgZGVmYXVsdDogZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGpzb25EYXRhID0gZGF0YS5maWx0ZXIoKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iai5hdmFpbGFibGUgPT09IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9DcmVhdGUgYSBkcm9wZG93biBsaXN0IHdpdGggdGhlIGpzb24gZGF0YVxyXG4gICAgICAgICAgICBqc29uRGF0YS5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJldmVyYWdlTGlzdFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gb2JqLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gb2JqLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHRocm93IFwiVW5hYmxlIHRvIGxvYWQgSlNPTiBkYXRhXCI7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGxvYWRNZW51IH07IiwiaW1wb3J0IHsgZGF0YWJhc2UgfSBmcm9tICcuLi9JbmRleF9QYWdlL2ZpcmVTdG9yZUFjY2Vzcy5qcyc7XHJcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSAnLi9mZXRjaEJldmVyYWdlTWVudS5qcyc7XHJcbmltcG9ydCAnLi4vSW5kZXhfUGFnZS9hZGREYXRhVG9Mb2NhbFN0b3JhZ2VGcm9tRmlyZWJhc2UnO1xyXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCAnLi9vcmRlckZvcm1TdHlsaW5nLmNzcyc7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0aHJvdHRsZVN1Ym1pdChzdG9yZURhdGEsIGxpbWl0KSB7XHJcbiAgICBsZXQgZmxhZyA9IHRydWU7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgICAgIHN0b3JlRGF0YSgpO1xyXG4gICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSwgbGltaXQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxubG9hZE1lbnUoKTtcclxuY29uc3Qgd2FpdEFuZFN0b3JlRGF0YSA9IHRocm90dGxlU3VibWl0KHN0b3JlRGF0YSwgMjUwMCk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcmVEYXRhXCIpLm9uY2xpY2sgPSB3YWl0QW5kU3RvcmVEYXRhO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHN0b3JlRGF0YSgpIHtcclxuXHJcbiAgICAvL1N0b3JlIEN1c3RvbWVyIERhdGEgaW4gRmlyZXN0b3JlXHJcblxyXG4gICAgbGV0IGN1c3RvbWVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VzdG9tZXJOYW1lXCIpLnZhbHVlO1xyXG4gICAgbGV0IGJldmVyYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZXZlcmFnZUxpc3RcIikudmFsdWU7XHJcbiAgICBsZXQgY3VzdG9tZXJOYW1lX2JldmVyYWdlID0gY3VzdG9tZXJOYW1lICsgXCIkXCIgKyBiZXZlcmFnZTtcclxuXHJcbiAgICBpZiAoY3VzdG9tZXJOYW1lICE9IFwiXCIpIHtcclxuICAgICAgICBpZiAoYmV2ZXJhZ2UpIHtcclxuICAgICAgICAgICAgLy9HZXQgRGF0YSBmcm9tIEZpcmVzdG9yZVxyXG4gICAgICAgICAgICBkYXRhYmFzZS5jb2xsZWN0aW9uKFwiY3VzdG9tZXJzXCIpLmdldCgpLnRoZW4oc25hcHNob3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNuYXBzaG90LmRvY3MubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXJzRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXN0b21lck9yZGVycyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcmRlclF1ZXVlID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDdXN0b21lcnNDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21lcnNEYXRhWzBdID0gY3VzdG9tZXJPcmRlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJzRGF0YVsxXSA9IG9yZGVyUXVldWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YWJhc2UuY29sbGVjdGlvbihcImN1c3RvbWVyc1wiKS5hZGQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcnNEYXRhOiBjdXN0b21lcnNEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q3VzdG9tZXJzQ291bnQ6IGN1cnJlbnRDdXN0b21lcnNDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb2MgPSBzbmFwc2hvdC5kb2NzWzBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRvY0lkID0gZG9jLmlkO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyc0RhdGEgPSBkb2MuZGF0YSgpLmN1c3RvbWVyc0RhdGE7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXJPcmRlcnMgPSBjdXN0b21lcnNEYXRhWzBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyUXVldWUgPSBjdXN0b21lcnNEYXRhWzFdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDdXN0b21lcnNDb3VudCA9IGRvYy5kYXRhKCkuY3VycmVudEN1c3RvbWVyc0NvdW50O1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZG9jLmRhdGEoKS5pbmRleDtcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyT3JkZXJzW2luZGV4XSA9IGN1c3RvbWVyTmFtZV9iZXZlcmFnZTtcclxuICAgICAgICAgICAgICAgIG9yZGVyUXVldWVbaW5kZXhdID0gXCJpblRoZVF1ZXVlXCI7XHJcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEN1c3RvbWVyc0NvdW50Kys7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YWJhc2UuY29sbGVjdGlvbihcImN1c3RvbWVyc1wiKS5kb2MoZG9jSWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJzRGF0YTogY3VzdG9tZXJzRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q3VzdG9tZXJzQ291bnQ6IGN1cnJlbnRDdXN0b21lcnNDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BsYXlNZXNzYWdlKCk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL0Rpc3BsYXkgdGhlIE9yZGVyIFBsYWNlZCBtZXNzYWdlIHRvIEN1c3RvbWVyc1xyXG5mdW5jdGlvbiBkaXNwbGF5TWVzc2FnZSgpIHtcclxuICAgIGxldCBvcmRlck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JkZXJQbGFjZWRNZXNzYWdlJyk7XHJcbiAgICBvcmRlck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG9yZGVyTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9LCAyNTAwKTtcclxufSIsImltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSAnLi4vSW5kZXhfUGFnZS9maXJlU3RvcmVBY2Nlc3MuanMnO1xyXG5kYXRhYmFzZS5jb2xsZWN0aW9uKFwiY3VzdG9tZXJzXCIpLmdldCgpLnRoZW4oKHNuYXBzaG90KSA9PiB7XHJcbiAgICBjb25zdCBkb2MgPSBzbmFwc2hvdC5kb2NzWzBdO1xyXG4gICAgbGV0IGN1c3RvbWVyc0RhdGEgPSBkb2MuZGF0YSgpLmN1c3RvbWVyc0RhdGE7XHJcbiAgICBsZXQgY3VycmVudEN1c3RvbWVyc0NvdW50ID0gZG9jLmRhdGEoKS5jdXJyZW50Q3VzdG9tZXJzQ291bnQ7XHJcbiAgICBsZXQgaW5kZXggPSBkb2MuZGF0YSgpLmluZGV4O1xyXG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoY3VzdG9tZXJzRGF0YSwgY3VycmVudEN1c3RvbWVyc0NvdW50LCBpbmRleCk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9Mb2NhbFN0b3JhZ2UoY3VzdG9tZXJzRGF0YSwgY3VycmVudEN1c3RvbWVyc0NvdW50LCBpbmRleCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VzdG9tZXJzRGF0YVwiLCBKU09OLnN0cmluZ2lmeShjdXN0b21lcnNEYXRhKSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpbmRleFwiLCBpbmRleCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50Q3VzdG9tZXJzQ291bnRcIiwgY3VycmVudEN1c3RvbWVyc0NvdW50KTtcclxuICAgIH1cclxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==