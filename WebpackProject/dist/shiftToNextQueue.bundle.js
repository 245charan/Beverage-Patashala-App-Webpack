(self["webpackChunkwebpackproject"] = self["webpackChunkwebpackproject"] || []).push([["shiftToNextQueue"],{

/***/ "./src/Admin_View/shiftToNextQueue.js":
/*!********************************************!*\
  !*** ./src/Admin_View/shiftToNextQueue.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_Page_fireStoreAccess_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Index_Page/fireStoreAccess.js */ "./src/Index_Page/fireStoreAccess.js");
/* harmony import */ var _Customer_View_getCustomersData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Customer_View/getCustomersData.js */ "./src/Customer_View/getCustomersData.js");
/* harmony import */ var _Index_Page_addDataToLocalStorageFromFirebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Index_Page/addDataToLocalStorageFromFirebase */ "./src/Index_Page/addDataToLocalStorageFromFirebase.js");
/* harmony import */ var _Customer_View_customerView_Styling_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Customer_View/customerView_Styling.css */ "./src/Customer_View/customerView_Styling.css");
/* harmony import */ var _adminViewStyling_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adminViewStyling.css */ "./src/Admin_View/adminViewStyling.css");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






new _Customer_View_getCustomersData_js__WEBPACK_IMPORTED_MODULE_1__.GetOrders().getOrders(); //Add onclick event for inTheQueue article, so that a callback function is executed when any of 
//the customerOrders is clicked from that queue. - (This happens because of Event bubbling)

document.getElementById("inTheQueue").onclick = function (event) {
  if (event.target.classList[0] == "name_drink" || event.target.parentElement.classList[0] == "name_drink") {
    var customerOrderDiv;
    var customerId;

    if (event.target.classList[0] == "name_drink") {
      customerOrderDiv = event.target;
    } else {
      customerOrderDiv = event.target.parentElement;
    } //customerId is the index number to access the customer's data in the localStorage


    customerId = customerOrderDiv.id;
    var adminObj = new AdminModification();
    var beingMixed = document.getElementById("beingMixed");
    var newCustomerOrderDiv = adminObj.shiftToNextQueue(customerOrderDiv, beingMixed);
    adminObj.updateFirestore(newCustomerOrderDiv, customerId, beingMixed.id);
  }
}; //Add onclick event for beingMixed article, so that a callback function is executed when any of 
//the customerOrders is clicked from that queue. - (This happens because of Event bubbling)


document.getElementById("beingMixed").onclick = function (event) {
  if (event.target.classList[0] == "name_drink" || event.target.parentElement.classList[0] == "name_drink") {
    var customerOrderDiv;
    var customerId;

    if (event.target.classList[0] == "name_drink") {
      customerOrderDiv = event.target;
    } else {
      customerOrderDiv = event.target.parentElement;
    } //customerId is the index number to access the customer's data in the localStorage


    customerId = customerOrderDiv.id;
    var adminObj = new AdminModification();
    var readyToCollect = document.getElementById("readyToCollect");
    var newCustomerOrderDiv = adminObj.shiftToNextQueue(customerOrderDiv, readyToCollect);
    adminObj.updateFirestore(newCustomerOrderDiv, customerId, readyToCollect.id);
  }
};

var AdminModification = /*#__PURE__*/function () {
  function AdminModification() {
    _classCallCheck(this, AdminModification);
  }

  _createClass(AdminModification, [{
    key: "shiftToNextQueue",
    value: function shiftToNextQueue(customerOrderDiv, nextQueue) {
      var newCustomerOrderDiv = customerOrderDiv.cloneNode(true);
      nextQueue.appendChild(newCustomerOrderDiv);
      customerOrderDiv.remove();
      return newCustomerOrderDiv;
    }
  }, {
    key: "updateFirestore",
    value: function updateFirestore(newCustomerOrderDiv, customerId, queueName) {
      _Index_Page_fireStoreAccess_js__WEBPACK_IMPORTED_MODULE_0__.database.collection("customers").get().then(function (snapshot) {
        var doc = snapshot.docs[0];
        var docId = doc.id;
        var customersData = doc.data().customersData;
        var customerOrders = customersData[0];
        var orderQueue = customersData[1];
        var index = doc.data().index; //Update the customerId with new queueName

        customerId = parseInt(customerId);
        delete orderQueue[customerId];
        orderQueue[index] = queueName; //Delete the customerData and update to new one

        var customerData = customerOrders[customerId];
        delete customerOrders[customerId];
        customerOrders[index] = customerData;
        localStorage.setItem("customersData", JSON.stringify(customersData)); //Giving a new ID to the shifted Div

        newCustomerOrderDiv.id = index;
        index++;
        localStorage.setItem("index", index);
        _Index_Page_fireStoreAccess_js__WEBPACK_IMPORTED_MODULE_0__.database.collection("customers").doc(docId).update({
          customersData: customersData,
          index: index
        });
      });
    }
  }]);

  return AdminModification;
}();

/***/ }),

/***/ "./src/Admin_View/adminViewStyling.css":
/*!*********************************************!*\
  !*** ./src/Admin_View/adminViewStyling.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
0,[["./src/Admin_View/shiftToNextQueue.js","runtime","vendors-node_modules_firebase_app_dist_index_esm_js-node_modules_firebase_firestore_dist_inde-439294","sharedFireStoreAccess","sharedGetCustomersData"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrcHJvamVjdC8uL3NyYy9BZG1pbl9WaWV3L3NoaWZ0VG9OZXh0UXVldWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3Byb2plY3QvLi9zcmMvQWRtaW5fVmlldy9hZG1pblZpZXdTdHlsaW5nLmNzcz8yOTRjIiwid2VicGFjazovL3dlYnBhY2twcm9qZWN0Ly4vc3JjL0N1c3RvbWVyX1ZpZXcvY3VzdG9tZXJWaWV3X1N0eWxpbmcuY3NzP2Q2NWQiXSwibmFtZXMiOlsiR2V0T3JkZXJzIiwiZ2V0T3JkZXJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9uY2xpY2siLCJldmVudCIsInRhcmdldCIsImNsYXNzTGlzdCIsInBhcmVudEVsZW1lbnQiLCJjdXN0b21lck9yZGVyRGl2IiwiY3VzdG9tZXJJZCIsImlkIiwiYWRtaW5PYmoiLCJBZG1pbk1vZGlmaWNhdGlvbiIsImJlaW5nTWl4ZWQiLCJuZXdDdXN0b21lck9yZGVyRGl2Iiwic2hpZnRUb05leHRRdWV1ZSIsInVwZGF0ZUZpcmVzdG9yZSIsInJlYWR5VG9Db2xsZWN0IiwibmV4dFF1ZXVlIiwiY2xvbmVOb2RlIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmUiLCJxdWV1ZU5hbWUiLCJkYXRhYmFzZSIsImdldCIsInRoZW4iLCJzbmFwc2hvdCIsImRvYyIsImRvY3MiLCJkb2NJZCIsImN1c3RvbWVyc0RhdGEiLCJkYXRhIiwiY3VzdG9tZXJPcmRlcnMiLCJvcmRlclF1ZXVlIiwiaW5kZXgiLCJwYXJzZUludCIsImN1c3RvbWVyRGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEseUVBQUosR0FBZ0JDLFNBQWhCLEcsQ0FDQTtBQUNBOztBQUVBQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIs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b3J0IHsgZGF0YWJhc2UgfSBmcm9tICcuLi9JbmRleF9QYWdlL2ZpcmVTdG9yZUFjY2Vzcy5qcyc7XHJcbmltcG9ydCB7IEdldE9yZGVycyB9IGZyb20gJy4uL0N1c3RvbWVyX1ZpZXcvZ2V0Q3VzdG9tZXJzRGF0YS5qcyc7XHJcbmltcG9ydCAnLi4vSW5kZXhfUGFnZS9hZGREYXRhVG9Mb2NhbFN0b3JhZ2VGcm9tRmlyZWJhc2UnO1xyXG5pbXBvcnQgJy4uL0N1c3RvbWVyX1ZpZXcvY3VzdG9tZXJWaWV3X1N0eWxpbmcuY3NzJztcclxuaW1wb3J0ICcuL2FkbWluVmlld1N0eWxpbmcuY3NzJztcclxuXHJcbm5ldyBHZXRPcmRlcnMoKS5nZXRPcmRlcnMoKTtcclxuLy9BZGQgb25jbGljayBldmVudCBmb3IgaW5UaGVRdWV1ZSBhcnRpY2xlLCBzbyB0aGF0IGEgY2FsbGJhY2sgZnVuY3Rpb24gaXMgZXhlY3V0ZWQgd2hlbiBhbnkgb2YgXHJcbi8vdGhlIGN1c3RvbWVyT3JkZXJzIGlzIGNsaWNrZWQgZnJvbSB0aGF0IHF1ZXVlLiAtIChUaGlzIGhhcHBlbnMgYmVjYXVzZSBvZiBFdmVudCBidWJibGluZylcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5UaGVRdWV1ZVwiKS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFswXSA9PSBcIm5hbWVfZHJpbmtcIiB8fCBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3RbMF0gPT0gXCJuYW1lX2RyaW5rXCIpIHtcclxuICAgICAgICBsZXQgY3VzdG9tZXJPcmRlckRpdjtcclxuICAgICAgICBsZXQgY3VzdG9tZXJJZDtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFswXSA9PSBcIm5hbWVfZHJpbmtcIikge1xyXG4gICAgICAgICAgICBjdXN0b21lck9yZGVyRGl2ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1c3RvbWVyT3JkZXJEaXYgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jdXN0b21lcklkIGlzIHRoZSBpbmRleCBudW1iZXIgdG8gYWNjZXNzIHRoZSBjdXN0b21lcidzIGRhdGEgaW4gdGhlIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIGN1c3RvbWVySWQgPSBjdXN0b21lck9yZGVyRGl2LmlkO1xyXG4gICAgICAgIGNvbnN0IGFkbWluT2JqID0gbmV3IEFkbWluTW9kaWZpY2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IGJlaW5nTWl4ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJlaW5nTWl4ZWRcIik7XHJcbiAgICAgICAgbGV0IG5ld0N1c3RvbWVyT3JkZXJEaXYgPSBhZG1pbk9iai5zaGlmdFRvTmV4dFF1ZXVlKGN1c3RvbWVyT3JkZXJEaXYsIGJlaW5nTWl4ZWQpO1xyXG4gICAgICAgIGFkbWluT2JqLnVwZGF0ZUZpcmVzdG9yZShuZXdDdXN0b21lck9yZGVyRGl2LCBjdXN0b21lcklkLCBiZWluZ01peGVkLmlkKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vQWRkIG9uY2xpY2sgZXZlbnQgZm9yIGJlaW5nTWl4ZWQgYXJ0aWNsZSwgc28gdGhhdCBhIGNhbGxiYWNrIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkIHdoZW4gYW55IG9mIFxyXG4vL3RoZSBjdXN0b21lck9yZGVycyBpcyBjbGlja2VkIGZyb20gdGhhdCBxdWV1ZS4gLSAoVGhpcyBoYXBwZW5zIGJlY2F1c2Ugb2YgRXZlbnQgYnViYmxpbmcpXHJcblxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZWluZ01peGVkXCIpLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0WzBdID09IFwibmFtZV9kcmlua1wiIHx8IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFswXSA9PSBcIm5hbWVfZHJpbmtcIikge1xyXG4gICAgICAgIGxldCBjdXN0b21lck9yZGVyRGl2O1xyXG4gICAgICAgIGxldCBjdXN0b21lcklkO1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0WzBdID09IFwibmFtZV9kcmlua1wiKSB7XHJcbiAgICAgICAgICAgIGN1c3RvbWVyT3JkZXJEaXYgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3VzdG9tZXJPcmRlckRpdiA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2N1c3RvbWVySWQgaXMgdGhlIGluZGV4IG51bWJlciB0byBhY2Nlc3MgdGhlIGN1c3RvbWVyJ3MgZGF0YSBpbiB0aGUgbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgY3VzdG9tZXJJZCA9IGN1c3RvbWVyT3JkZXJEaXYuaWQ7XHJcbiAgICAgICAgY29uc3QgYWRtaW5PYmogPSBuZXcgQWRtaW5Nb2RpZmljYXRpb24oKTtcclxuICAgICAgICBsZXQgcmVhZHlUb0NvbGxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlYWR5VG9Db2xsZWN0XCIpO1xyXG4gICAgICAgIGxldCBuZXdDdXN0b21lck9yZGVyRGl2ID0gYWRtaW5PYmouc2hpZnRUb05leHRRdWV1ZShjdXN0b21lck9yZGVyRGl2LCByZWFkeVRvQ29sbGVjdCk7XHJcbiAgICAgICAgYWRtaW5PYmoudXBkYXRlRmlyZXN0b3JlKG5ld0N1c3RvbWVyT3JkZXJEaXYsIGN1c3RvbWVySWQsIHJlYWR5VG9Db2xsZWN0LmlkKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIEFkbWluTW9kaWZpY2F0aW9uIHtcclxuICAgIHNoaWZ0VG9OZXh0UXVldWUoY3VzdG9tZXJPcmRlckRpdiwgbmV4dFF1ZXVlKSB7XHJcbiAgICAgICAgbGV0IG5ld0N1c3RvbWVyT3JkZXJEaXYgPSBjdXN0b21lck9yZGVyRGl2LmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBuZXh0UXVldWUuYXBwZW5kQ2hpbGQobmV3Q3VzdG9tZXJPcmRlckRpdik7XHJcbiAgICAgICAgY3VzdG9tZXJPcmRlckRpdi5yZW1vdmUoKTtcclxuICAgICAgICByZXR1cm4gbmV3Q3VzdG9tZXJPcmRlckRpdjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlRmlyZXN0b3JlKG5ld0N1c3RvbWVyT3JkZXJEaXYsIGN1c3RvbWVySWQsIHF1ZXVlTmFtZSkge1xyXG4gICAgICAgIGRhdGFiYXNlLmNvbGxlY3Rpb24oXCJjdXN0b21lcnNcIikuZ2V0KCkudGhlbigoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZG9jID0gc25hcHNob3QuZG9jc1swXTtcclxuICAgICAgICAgICAgbGV0IGRvY0lkID0gZG9jLmlkO1xyXG4gICAgICAgICAgICBsZXQgY3VzdG9tZXJzRGF0YSA9IGRvYy5kYXRhKCkuY3VzdG9tZXJzRGF0YTtcclxuICAgICAgICAgICAgbGV0IGN1c3RvbWVyT3JkZXJzID0gY3VzdG9tZXJzRGF0YVswXTtcclxuICAgICAgICAgICAgbGV0IG9yZGVyUXVldWUgPSBjdXN0b21lcnNEYXRhWzFdO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBkb2MuZGF0YSgpLmluZGV4O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vVXBkYXRlIHRoZSBjdXN0b21lcklkIHdpdGggbmV3IHF1ZXVlTmFtZVxyXG4gICAgICAgICAgICBjdXN0b21lcklkID0gcGFyc2VJbnQoY3VzdG9tZXJJZCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBvcmRlclF1ZXVlW2N1c3RvbWVySWRdO1xyXG4gICAgICAgICAgICBvcmRlclF1ZXVlW2luZGV4XSA9IHF1ZXVlTmFtZTtcclxuXHJcbiAgICAgICAgICAgIC8vRGVsZXRlIHRoZSBjdXN0b21lckRhdGEgYW5kIHVwZGF0ZSB0byBuZXcgb25lXHJcbiAgICAgICAgICAgIGxldCBjdXN0b21lckRhdGEgPSBjdXN0b21lck9yZGVyc1tjdXN0b21lcklkXTtcclxuICAgICAgICAgICAgZGVsZXRlIGN1c3RvbWVyT3JkZXJzW2N1c3RvbWVySWRdO1xyXG4gICAgICAgICAgICBjdXN0b21lck9yZGVyc1tpbmRleF0gPSBjdXN0b21lckRhdGE7XHJcblxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1c3RvbWVyc0RhdGFcIiwgSlNPTi5zdHJpbmdpZnkoY3VzdG9tZXJzRGF0YSkpO1xyXG4gICAgICAgICAgICAvL0dpdmluZyBhIG5ldyBJRCB0byB0aGUgc2hpZnRlZCBEaXZcclxuICAgICAgICAgICAgbmV3Q3VzdG9tZXJPcmRlckRpdi5pZCA9IGluZGV4O1xyXG4gICAgICAgICAgICBpbmRleCsrXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaW5kZXhcIiwgaW5kZXgpO1xyXG4gICAgICAgICAgICBkYXRhYmFzZS5jb2xsZWN0aW9uKFwiY3VzdG9tZXJzXCIpLmRvYyhkb2NJZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyc0RhdGE6IGN1c3RvbWVyc0RhdGEsXHJcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=