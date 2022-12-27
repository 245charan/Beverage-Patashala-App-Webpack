(self["webpackChunkwebpackproject"] = self["webpackChunkwebpackproject"] || []).push([["sharedGetCustomersData"],{

/***/ "./src/Customer_View/getCustomersData.js":
/*!***********************************************!*\
  !*** ./src/Customer_View/getCustomersData.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetOrders": () => /* binding */ GetOrders
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

/***/ "./src/Index_Page/fireStoreAccess.js":
/*!*******************************************!*\
  !*** ./src/Index_Page/fireStoreAccess.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "database": () => /* binding */ database
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");

 // if (firebase.apps.length === 0) {

const firebaseConfig = {
  apiKey: "AIzaSyAcch9PgKHMPHZW6JlprgocMMVDVrSV1cE",
  authDomain: "beveragepatashala.firebaseapp.com",
  projectId: "beveragepatashala",
  storageBucket: "beveragepatashala.appspot.com",
  messagingSenderId: "1098675667096",
  appId: "1:1098675667096:web:4a85ece9524093401150ed",
  measurementId: "G-M8S574YR56"
}; // Initialize Firebase

firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.initializeApp(firebaseConfig); // }

var database = firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.firestore(); // database.settings({
//     timestampsInSnapshots: true
// });



/***/ })

},
0,[["./src/Customer_View/getCustomersData.js","runtime","vendors-node_modules_firebase_app_dist_index_esm_js-node_modules_firebase_firestore_dist_inde-439294"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrcHJvamVjdC8uL3NyYy9DdXN0b21lcl9WaWV3L2dldEN1c3RvbWVyc0RhdGEuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3Byb2plY3QvLi9zcmMvSW5kZXhfUGFnZS9hZGREYXRhVG9Mb2NhbFN0b3JhZ2VGcm9tRmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3Byb2plY3QvLi9zcmMvSW5kZXhfUGFnZS9maXJlU3RvcmVBY2Nlc3MuanMiXSwibmFtZXMiOlsiR2V0T3JkZXJzIiwiZGF0YWJhc2UiLCJnZXQiLCJ0aGVuIiwic25hcHNob3QiLCJkb2MiLCJkb2NzIiwiY3VzdG9tZXJzRGF0YSIsImRhdGEiLCJjdXN0b21lck9yZGVycyIsIm9yZGVyUXVldWUiLCJjdXN0b21lcklEcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiaWQiLCJxdWV1ZSIsImN1c3RvbWVyRGF0YSIsImN1c3RvbWVyRGF0YUFycmF5Iiwic3BsaXQiLCJjdXN0b21lck5hbWUiLCJiZXZlcmFnZSIsImN1c3RvbWVyT3JkZXJEaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJiZXZlcmFnZURpdiIsImlubmVySFRNTCIsImN1c3RvbWVyTmFtZURpdiIsImFwcGVuZENoaWxkIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdXJyZW50Q3VzdG9tZXJzQ291bnQiLCJpbmRleCIsImFkZFRvTG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImZpcmViYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLFM7Ozs7Ozs7Z0NBQ1U7QUFDUkMscUZB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Q0FBcUIsdUJBQXJCLEVBQThDSixxQkFBOUM7QUFDSDtBQUNKLENBWkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtDQUdBOztBQUNBLElBQU1PLGNBQWMsR0FBRztBQUNuQkMsUUFBTSxFQUFFLHlDQURXO0FBRW5CQyxZQUFVLEVBQUUscUNBRk87QUFHbkJDLFdBQVMsRUFBRSxxQkFIUTtBQUluQkMsZUFBYSxFQUFFLGlDQUpJO0FBS25CQyxtQkFBaUIsRUFBRSxjQUxBO0FBTW5CQyxPQUFLLEVBQUU7QUFOWSxDQUF2QixDLENBUUE7O0FBQ0FDLCtEQUFBLENBQXVCUCxjQUF2QixFLENBRUE7O0FBQ0EsSUFBTXRDLFFBQVEsR0FBRzZDLDJEQUFBLEVBQWpCLEMsQ0FDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2hhcmVkR2V0Q3VzdG9tZXJzRGF0YS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0dldCBjdXN0b21lck9yZGVycyBmcm9tIEZpcmVzdG9yZVxyXG5pbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gJy4uL0luZGV4X1BhZ2UvZmlyZVN0b3JlQWNjZXNzLmpzJztcclxuaW1wb3J0ICcuLi9JbmRleF9QYWdlL2FkZERhdGFUb0xvY2FsU3RvcmFnZUZyb21GaXJlYmFzZSc7XHJcblxyXG5jbGFzcyBHZXRPcmRlcnMge1xyXG4gICAgZ2V0T3JkZXJzKCkge1xyXG4gICAgICAgIGRhdGFiYXNlLmNvbGxlY3Rpb24oXCJjdXN0b21lcnNcIikuZ2V0KCkudGhlbigoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZG9jID0gc25hcHNob3QuZG9jc1swXTtcclxuICAgICAgICAgICAgbGV0IGN1c3RvbWVyc0RhdGEgPSBkb2MuZGF0YSgpLmN1c3RvbWVyc0RhdGE7XHJcbiAgICAgICAgICAgIGxldCBjdXN0b21lck9yZGVycyA9IGN1c3RvbWVyc0RhdGFbMF07XHJcbiAgICAgICAgICAgIGxldCBvcmRlclF1ZXVlID0gY3VzdG9tZXJzRGF0YVsxXTtcclxuICAgICAgICAgICAgbGV0IGN1c3RvbWVySURzID0gT2JqZWN0LmtleXMoY3VzdG9tZXJPcmRlcnMpO1xyXG5cclxuICAgICAgICAgICAgY3VzdG9tZXJJRHMuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vVGhlIFF1ZXVlIGluIHdoaWNoIHRoZSBkYXRhIGJlbG9uZyB0b1xyXG4gICAgICAgICAgICAgICAgbGV0IHF1ZXVlID0gb3JkZXJRdWV1ZVtpZF07XHJcblxyXG4gICAgICAgICAgICAgICAgLy9HZXQgQ3V0b21lciBOYW1lIGFuZCBPcmRlciBiYXNlZCBvbiBoaXMgSURcclxuICAgICAgICAgICAgICAgIGxldCBjdXN0b21lckRhdGEgPSBjdXN0b21lck9yZGVyc1tpZF07XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXJEYXRhQXJyYXkgPSBjdXN0b21lckRhdGEuc3BsaXQoXCIkXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyTmFtZSA9IGN1c3RvbWVyRGF0YUFycmF5WzBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJldmVyYWdlID0gY3VzdG9tZXJEYXRhQXJyYXlbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy9DcmVhdGUgY3VzdG9tZXJPcmRlciBibG9jayB0byBzdG9yZSBpbiB0aGUgcmVzcGVjdGl2ZSBRdWV1ZVxyXG4gICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyT3JkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPcmRlckRpdi5jbGFzc0xpc3QuYWRkKFwibmFtZV9kcmlua1wiKTtcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyT3JkZXJEaXYuaWQgPSBpZDtcclxuICAgICAgICAgICAgICAgIGxldCBiZXZlcmFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBiZXZlcmFnZURpdi5jbGFzc0xpc3QuYWRkKFwiZHJpbmtcIik7XHJcbiAgICAgICAgICAgICAgICBiZXZlcmFnZURpdi5pbm5lckhUTUwgPSBiZXZlcmFnZTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXN0b21lck5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJOYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJOYW1lRGl2LmlubmVySFRNTCA9IGN1c3RvbWVyTmFtZTtcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyT3JkZXJEaXYuYXBwZW5kQ2hpbGQoYmV2ZXJhZ2VEaXYpO1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPcmRlckRpdi5hcHBlbmRDaGlsZChjdXN0b21lck5hbWVEaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHF1ZXVlKS5hcHBlbmRDaGlsZChjdXN0b21lck9yZGVyRGl2KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBHZXRPcmRlcnMgfTsiLCJpbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gJy4uL0luZGV4X1BhZ2UvZmlyZVN0b3JlQWNjZXNzLmpzJztcclxuZGF0YWJhc2UuY29sbGVjdGlvbihcImN1c3RvbWVyc1wiKS5nZXQoKS50aGVuKChzbmFwc2hvdCkgPT4ge1xyXG4gICAgY29uc3QgZG9jID0gc25hcHNob3QuZG9jc1swXTtcclxuICAgIGxldCBjdXN0b21lcnNEYXRhID0gZG9jLmRhdGEoKS5jdXN0b21lcnNEYXRhO1xyXG4gICAgbGV0IGN1cnJlbnRDdXN0b21lcnNDb3VudCA9IGRvYy5kYXRhKCkuY3VycmVudEN1c3RvbWVyc0NvdW50O1xyXG4gICAgbGV0IGluZGV4ID0gZG9jLmRhdGEoKS5pbmRleDtcclxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKGN1c3RvbWVyc0RhdGEsIGN1cnJlbnRDdXN0b21lcnNDb3VudCwgaW5kZXgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRvTG9jYWxTdG9yYWdlKGN1c3RvbWVyc0RhdGEsIGN1cnJlbnRDdXN0b21lcnNDb3VudCwgaW5kZXgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1c3RvbWVyc0RhdGFcIiwgSlNPTi5zdHJpbmdpZnkoY3VzdG9tZXJzRGF0YSkpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaW5kZXhcIiwgaW5kZXgpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudEN1c3RvbWVyc0NvdW50XCIsIGN1cnJlbnRDdXN0b21lcnNDb3VudCk7XHJcbiAgICB9XHJcbn0pOyIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcblxyXG4vLyBpZiAoZmlyZWJhc2UuYXBwcy5sZW5ndGggPT09IDApIHtcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5QldrSTVoS2hGQlMxbWFPdkZweExvVl90eUQ5Z014QVNrXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcImJldmVyYWdlb3JkZXJpbmdhcHAuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwiYmV2ZXJhZ2VvcmRlcmluZ2FwcFwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJiZXZlcmFnZW9yZGVyaW5nYXBwLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI1ODk4NjU5NzU0MzBcIixcclxuICAgIGFwcElkOiBcIjE6NTg5ODY1OTc1NDMwOndlYjo0NGI0OWE5MzBjMmRiNTEyMjIxYjA3XCJcclxufTtcclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuXHJcbi8vIH1cclxuY29uc3QgZGF0YWJhc2UgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuLy8gZGF0YWJhc2Uuc2V0dGluZ3Moe1xyXG4vLyAgICAgdGltZXN0YW1wc0luU25hcHNob3RzOiB0cnVlXHJcbi8vIH0pO1xyXG5cclxuXHJcbmV4cG9ydCB7IGRhdGFiYXNlIH07Il0sInNvdXJjZVJvb3QiOiIifQ==