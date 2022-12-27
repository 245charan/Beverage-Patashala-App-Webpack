(self["webpackChunkwebpackproject"] = self["webpackChunkwebpackproject"] || []).push([["sharedFireStoreAccess"],{

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
0,[["./src/Index_Page/fireStoreAccess.js","runtime","vendors-node_modules_firebase_app_dist_index_esm_js-node_modules_firebase_firestore_dist_inde-439294"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrcHJvamVjdC8uL3NyYy9JbmRleF9QYWdlL2ZpcmVTdG9yZUFjY2Vzcy5qcyJdLCJuYW1lcyI6WyJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImZpcmViYXNlIiwiZGF0YWJhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0EsSUFBTUEsY0FBYyxHQUFHO0FBQ25CQyxRQUFNLEVBQUUseUNBRFc7QUFFbkJDLFlBQVUsRUFBRSxxQ0FGTztBQUduQkMsV0FBUyxFQUFFLHFCQUhRO0FBSW5CQyxlQUFhLEVBQUUsaUNBSkk7QUFLbkJDLG1CQUFpQixFQUFFLGNBTEE7QUFNbkJDLE9BQUssRUFBRTtBQU5ZLENBQXZCLEMsQ0FRQTs7QUFDQUMsK0RBQUEsQ0FBdUJQLGNBQXZCLEUsQ0FFQTs7QUFDQSxJQUFNUSxRQUFRLEdBQUdELDJEQUFBLEVBQWpCLEMsQ0FDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2hhcmVkRmlyZVN0b3JlQWNjZXNzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcblxyXG4vLyBpZiAoZmlyZWJhc2UuYXBwcy5sZW5ndGggPT09IDApIHtcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5QldrSTVoS2hGQlMxbWFPdkZweExvVl90eUQ5Z014QVNrXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcImJldmVyYWdlb3JkZXJpbmdhcHAuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwiYmV2ZXJhZ2VvcmRlcmluZ2FwcFwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJiZXZlcmFnZW9yZGVyaW5nYXBwLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI1ODk4NjU5NzU0MzBcIixcclxuICAgIGFwcElkOiBcIjE6NTg5ODY1OTc1NDMwOndlYjo0NGI0OWE5MzBjMmRiNTEyMjIxYjA3XCJcclxufTtcclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuXHJcbi8vIH1cclxuY29uc3QgZGF0YWJhc2UgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuLy8gZGF0YWJhc2Uuc2V0dGluZ3Moe1xyXG4vLyAgICAgdGltZXN0YW1wc0luU25hcHNob3RzOiB0cnVlXHJcbi8vIH0pO1xyXG5cclxuXHJcbmV4cG9ydCB7IGRhdGFiYXNlIH07Il0sInNvdXJjZVJvb3QiOiIifQ==