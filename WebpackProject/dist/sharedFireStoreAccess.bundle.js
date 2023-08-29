"use strict";
(self["webpackChunkwebpackproject"] = self["webpackChunkwebpackproject"] || []).push([["sharedFireStoreAccess"],{

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_firebase_app_dist_index_esm_js-node_modules_firebase_firestore_dist_inde-439294"], () => (__webpack_exec__("./src/Index_Page/fireStoreAccess.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkRmlyZVN0b3JlQWNjZXNzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLElBQU1DLGNBQWMsR0FBRztBQUNyQkMsRUFBQUEsTUFBTSxFQUFFLHlDQURhO0FBRXJCQyxFQUFBQSxVQUFVLEVBQUUsbUNBRlM7QUFHckJDLEVBQUFBLFNBQVMsRUFBRSxtQkFIVTtBQUlyQkMsRUFBQUEsYUFBYSxFQUFFLCtCQUpNO0FBS3JCQyxFQUFBQSxpQkFBaUIsRUFBRSxlQUxFO0FBTXJCQyxFQUFBQSxLQUFLLEVBQUUsNENBTmM7QUFPckJDLEVBQUFBLGFBQWEsRUFBRTtBQVBNLENBQXZCLEVBU0E7O0FBQ0FSLG9EQUFRLENBQUNTLGFBQVQsQ0FBdUJSLGNBQXZCLEdBRUE7O0FBQ0EsSUFBTVMsUUFBUSxHQUFHVixvREFBUSxDQUFDVyxTQUFULEVBQWpCLEVBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja3Byb2plY3QvLi9zcmMvSW5kZXhfUGFnZS9maXJlU3RvcmVBY2Nlc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuXHJcbi8vIGlmIChmaXJlYmFzZS5hcHBzLmxlbmd0aCA9PT0gMCkge1xyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5QWNjaDlQZ0tITVBIWlc2SmxwcmdvY01NVkRWclNWMWNFXCIsXHJcbiAgYXV0aERvbWFpbjogXCJiZXZlcmFnZXBhdGFzaGFsYS5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwiYmV2ZXJhZ2VwYXRhc2hhbGFcIixcclxuICBzdG9yYWdlQnVja2V0OiBcImJldmVyYWdlcGF0YXNoYWxhLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTA5ODY3NTY2NzA5NlwiLFxyXG4gIGFwcElkOiBcIjE6MTA5ODY3NTY2NzA5Njp3ZWI6NGE4NWVjZTk1MjQwOTM0MDExNTBlZFwiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1NOFM1NzRZUjU2XCJcclxufTtcclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuXHJcbi8vIH1cclxuY29uc3QgZGF0YWJhc2UgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuLy8gZGF0YWJhc2Uuc2V0dGluZ3Moe1xyXG4vLyAgICAgdGltZXN0YW1wc0luU25hcHNob3RzOiB0cnVlXHJcbi8vIH0pO1xyXG5cclxuXHJcbmV4cG9ydCB7IGRhdGFiYXNlIH07Il0sIm5hbWVzIjpbImZpcmViYXNlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiaW5pdGlhbGl6ZUFwcCIsImRhdGFiYXNlIiwiZmlyZXN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==