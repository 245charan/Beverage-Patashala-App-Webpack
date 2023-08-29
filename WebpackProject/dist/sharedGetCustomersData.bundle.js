"use strict";
(self["webpackChunkwebpackproject"] = self["webpackChunkwebpackproject"] || []).push([["sharedGetCustomersData"],{

/***/ "./src/Customer_View/getCustomersData.js":
/*!***********************************************!*\
  !*** ./src/Customer_View/getCustomersData.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetOrders: () => (/* binding */ GetOrders)
/* harmony export */ });
/* harmony import */ var _Index_Page_fireStoreAccess_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Index_Page/fireStoreAccess.js */ "./src/Index_Page/fireStoreAccess.js");
/* harmony import */ var _Index_Page_addDataToLocalStorageFromFirebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Index_Page/addDataToLocalStorageFromFirebase */ "./src/Index_Page/addDataToLocalStorageFromFirebase.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Get customerOrders from Firestore



var GetOrders = /*#__PURE__*/function () {
  function GetOrders() {
    _classCallCheck(this, GetOrders);
  }

  _createClass(GetOrders, [{
    key: "getOrders",
    value: function getOrders() {
      _Index_Page_fireStoreAccess_js__WEBPACK_IMPORTED_MODULE_0__.database.collection("customers").get().then(function (snapshot) {
        var doc = snapshot.docs[0];
        var customersData = doc.data().customersData;
        var customerOrders = customersData[0];
        var orderQueue = customersData[1];
        var customerIDs = Object.keys(customerOrders);
        customerIDs.forEach(function (id) {
          //The Queue in which the data belong to
          var queue = orderQueue[id]; //Get Cutomer Name and Order based on his ID

          var customerData = customerOrders[id];
          var customerDataArray = customerData.split("$");
          var customerName = customerDataArray[0];
          var beverage = customerDataArray[1]; //Create customerOrder block to store in the respective Queue

          var customerOrderDiv = document.createElement("div");
          customerOrderDiv.classList.add("name_drink");
          customerOrderDiv.id = id;
          var beverageDiv = document.createElement("div");
          beverageDiv.classList.add("drink");
          beverageDiv.innerHTML = beverage;
          var customerNameDiv = document.createElement("div");
          customerNameDiv.classList.add("name");
          customerNameDiv.innerHTML = customerName;
          customerOrderDiv.appendChild(beverageDiv);
          customerOrderDiv.appendChild(customerNameDiv);
          document.getElementById(queue).appendChild(customerOrderDiv);
        });
      });
    }
  }]);

  return GetOrders;
}();



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

/***/ "./src/Index_Page/fireStoreAccess.js":
/*!*******************************************!*\
  !*** ./src/Index_Page/fireStoreAccess.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   database: () => (/* binding */ database)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");

 // if (firebase.apps.length === 0) {

var firebaseConfig = {
  apiKey: "AIzaSyAcch9PgKHMPHZW6JlprgocMMVDVrSV1cE",
  authDomain: "beveragepatashala.firebaseapp.com",
  projectId: "beveragepatashala",
  storageBucket: "beveragepatashala.appspot.com",
  messagingSenderId: "1098675667096",
  appId: "1:1098675667096:web:4a85ece9524093401150ed",
  measurementId: "G-M8S574YR56"
}; // Initialize Firebase

firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig); // }

var database = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore(); // database.settings({
//     timestampsInSnapshots: true
// });



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_firebase_app_dist_index_esm_js-node_modules_firebase_firestore_dist_inde-439294"], () => (__webpack_exec__("./src/Customer_View/getCustomersData.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akI7O0FBRUEsV0FBU0MsaUJBQVQsQ0FBMkIzQixhQUEzQixFQUEwQ3lCLHFCQUExQyxFQUFpRUMsS0FBakUsRUFBd0U7QUFDcEVFLElBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixlQUFyQixFQUFzQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWUvQixhQUFmLENBQXRDO0FBQ0E0QixJQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJILEtBQTlCO0FBQ0FFLElBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQix1QkFBckIsRUFBOENKLHFCQUE5QztBQUNIO0FBQ0osQ0FaRDs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0NBR0E7O0FBQ0EsSUFBTVEsY0FBYyxHQUFHO0FBQ3JCQyxFQUFBQSxNQUFNLEVBQUUseUNBRGE7QUFFckJDLEVBQUFBLFVBQVUsRUFBRSxtQ0FGUztBQUdyQkMsRUFBQUEsU0FBUyxFQUFFLG1CQUhVO0FBSXJCQyxFQUFBQSxhQUFhLEVBQUUsK0JBSk07QUFLckJDLEVBQUFBLGlCQUFpQixFQUFFLGVBTEU7QUFNckJDLEVBQUFBLEtBQUssRUFBRSw0Q0FOYztBQU9yQkMsRUFBQUEsYUFBYSxFQUFFO0FBUE0sQ0FBdkIsRUFTQTs7QUFDQVIsb0RBQVEsQ0FBQ1MsYUFBVCxDQUF1QlIsY0FBdkIsR0FFQTs7QUFDQSxJQUFNekMsUUFBUSxHQUFHd0Msb0RBQVEsQ0FBQ1UsU0FBVCxFQUFqQixFQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2twcm9qZWN0Ly4vc3JjL0N1c3RvbWVyX1ZpZXcvZ2V0Q3VzdG9tZXJzRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrcHJvamVjdC8uL3NyYy9JbmRleF9QYWdlL2FkZERhdGFUb0xvY2FsU3RvcmFnZUZyb21GaXJlYmFzZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrcHJvamVjdC8uL3NyYy9JbmRleF9QYWdlL2ZpcmVTdG9yZUFjY2Vzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0dldCBjdXN0b21lck9yZGVycyBmcm9tIEZpcmVzdG9yZVxyXG5pbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gJy4uL0luZGV4X1BhZ2UvZmlyZVN0b3JlQWNjZXNzLmpzJztcclxuaW1wb3J0ICcuLi9JbmRleF9QYWdlL2FkZERhdGFUb0xvY2FsU3RvcmFnZUZyb21GaXJlYmFzZSc7XHJcblxyXG5jbGFzcyBHZXRPcmRlcnMge1xyXG4gICAgZ2V0T3JkZXJzKCkge1xyXG4gICAgICAgIGRhdGFiYXNlLmNvbGxlY3Rpb24oXCJjdXN0b21lcnNcIikuZ2V0KCkudGhlbigoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZG9jID0gc25hcHNob3QuZG9jc1swXTtcclxuICAgICAgICAgICAgbGV0IGN1c3RvbWVyc0RhdGEgPSBkb2MuZGF0YSgpLmN1c3RvbWVyc0RhdGE7XHJcbiAgICAgICAgICAgIGxldCBjdXN0b21lck9yZGVycyA9IGN1c3RvbWVyc0RhdGFbMF07XHJcbiAgICAgICAgICAgIGxldCBvcmRlclF1ZXVlID0gY3VzdG9tZXJzRGF0YVsxXTtcclxuICAgICAgICAgICAgbGV0IGN1c3RvbWVySURzID0gT2JqZWN0LmtleXMoY3VzdG9tZXJPcmRlcnMpO1xyXG5cclxuICAgICAgICAgICAgY3VzdG9tZXJJRHMuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vVGhlIFF1ZXVlIGluIHdoaWNoIHRoZSBkYXRhIGJlbG9uZyB0b1xyXG4gICAgICAgICAgICAgICAgbGV0IHF1ZXVlID0gb3JkZXJRdWV1ZVtpZF07XHJcblxyXG4gICAgICAgICAgICAgICAgLy9HZXQgQ3V0b21lciBOYW1lIGFuZCBPcmRlciBiYXNlZCBvbiBoaXMgSURcclxuICAgICAgICAgICAgICAgIGxldCBjdXN0b21lckRhdGEgPSBjdXN0b21lck9yZGVyc1tpZF07XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXJEYXRhQXJyYXkgPSBjdXN0b21lckRhdGEuc3BsaXQoXCIkXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyTmFtZSA9IGN1c3RvbWVyRGF0YUFycmF5WzBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJldmVyYWdlID0gY3VzdG9tZXJEYXRhQXJyYXlbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy9DcmVhdGUgY3VzdG9tZXJPcmRlciBibG9jayB0byBzdG9yZSBpbiB0aGUgcmVzcGVjdGl2ZSBRdWV1ZVxyXG4gICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyT3JkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPcmRlckRpdi5jbGFzc0xpc3QuYWRkKFwibmFtZV9kcmlua1wiKTtcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyT3JkZXJEaXYuaWQgPSBpZDtcclxuICAgICAgICAgICAgICAgIGxldCBiZXZlcmFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBiZXZlcmFnZURpdi5jbGFzc0xpc3QuYWRkKFwiZHJpbmtcIik7XHJcbiAgICAgICAgICAgICAgICBiZXZlcmFnZURpdi5pbm5lckhUTUwgPSBiZXZlcmFnZTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXN0b21lck5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJOYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJOYW1lRGl2LmlubmVySFRNTCA9IGN1c3RvbWVyTmFtZTtcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyT3JkZXJEaXYuYXBwZW5kQ2hpbGQoYmV2ZXJhZ2VEaXYpO1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPcmRlckRpdi5hcHBlbmRDaGlsZChjdXN0b21lck5hbWVEaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHF1ZXVlKS5hcHBlbmRDaGlsZChjdXN0b21lck9yZGVyRGl2KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBHZXRPcmRlcnMgfTsiLCJpbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gJy4uL0luZGV4X1BhZ2UvZmlyZVN0b3JlQWNjZXNzLmpzJztcclxuZGF0YWJhc2UuY29sbGVjdGlvbihcImN1c3RvbWVyc1wiKS5nZXQoKS50aGVuKChzbmFwc2hvdCkgPT4ge1xyXG4gICAgY29uc3QgZG9jID0gc25hcHNob3QuZG9jc1swXTtcclxuICAgIGxldCBjdXN0b21lcnNEYXRhID0gZG9jLmRhdGEoKS5jdXN0b21lcnNEYXRhO1xyXG4gICAgbGV0IGN1cnJlbnRDdXN0b21lcnNDb3VudCA9IGRvYy5kYXRhKCkuY3VycmVudEN1c3RvbWVyc0NvdW50O1xyXG4gICAgbGV0IGluZGV4ID0gZG9jLmRhdGEoKS5pbmRleDtcclxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKGN1c3RvbWVyc0RhdGEsIGN1cnJlbnRDdXN0b21lcnNDb3VudCwgaW5kZXgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRvTG9jYWxTdG9yYWdlKGN1c3RvbWVyc0RhdGEsIGN1cnJlbnRDdXN0b21lcnNDb3VudCwgaW5kZXgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1c3RvbWVyc0RhdGFcIiwgSlNPTi5zdHJpbmdpZnkoY3VzdG9tZXJzRGF0YSkpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaW5kZXhcIiwgaW5kZXgpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudEN1c3RvbWVyc0NvdW50XCIsIGN1cnJlbnRDdXN0b21lcnNDb3VudCk7XHJcbiAgICB9XHJcbn0pOyIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcblxyXG4vLyBpZiAoZmlyZWJhc2UuYXBwcy5sZW5ndGggPT09IDApIHtcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUFjY2g5UGdLSE1QSFpXNkpscHJnb2NNTVZEVnJTVjFjRVwiLFxyXG4gIGF1dGhEb21haW46IFwiYmV2ZXJhZ2VwYXRhc2hhbGEuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcImJldmVyYWdlcGF0YXNoYWxhXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJiZXZlcmFnZXBhdGFzaGFsYS5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwOTg2NzU2NjcwOTZcIixcclxuICBhcHBJZDogXCIxOjEwOTg2NzU2NjcwOTY6d2ViOjRhODVlY2U5NTI0MDkzNDAxMTUwZWRcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctTThTNTc0WVI1NlwiXHJcbn07XHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG4vLyB9XHJcbmNvbnN0IGRhdGFiYXNlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbi8vIGRhdGFiYXNlLnNldHRpbmdzKHtcclxuLy8gICAgIHRpbWVzdGFtcHNJblNuYXBzaG90czogdHJ1ZVxyXG4vLyB9KTtcclxuXHJcblxyXG5leHBvcnQgeyBkYXRhYmFzZSB9OyJdLCJuYW1lcyI6WyJkYXRhYmFzZSIsIkdldE9yZGVycyIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwic25hcHNob3QiLCJkb2MiLCJkb2NzIiwiY3VzdG9tZXJzRGF0YSIsImRhdGEiLCJjdXN0b21lck9yZGVycyIsIm9yZGVyUXVldWUiLCJjdXN0b21lcklEcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiaWQiLCJxdWV1ZSIsImN1c3RvbWVyRGF0YSIsImN1c3RvbWVyRGF0YUFycmF5Iiwic3BsaXQiLCJjdXN0b21lck5hbWUiLCJiZXZlcmFnZSIsImN1c3RvbWVyT3JkZXJEaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJiZXZlcmFnZURpdiIsImlubmVySFRNTCIsImN1c3RvbWVyTmFtZURpdiIsImFwcGVuZENoaWxkIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdXJyZW50Q3VzdG9tZXJzQ291bnQiLCJpbmRleCIsImFkZFRvTG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaXJlYmFzZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImluaXRpYWxpemVBcHAiLCJmaXJlc3RvcmUiXSwic291cmNlUm9vdCI6IiJ9