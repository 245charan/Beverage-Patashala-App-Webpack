"use strict";
(self["webpackChunkwebpackproject"] = self["webpackChunkwebpackproject"] || []).push([["homePage"],{

/***/ "./src/Index_Page/homePage.js":
/*!************************************!*\
  !*** ./src/Index_Page/homePage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _indexStyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexStyle.css */ "./src/Index_Page/indexStyle.css");
//Direct the customer to the customerView page



window.onload = function () {
  var customerButton = document.getElementById("customer");

  customerButton.onclick = function (e) {
    e.preventDefault(); // location.href = "../Customer_View/customerView_Page.html";

    location.href = "./customerView_Page.html";
  };

  var adminButton = document.getElementById("admin");

  adminButton.onclick = function (e) {
    e.preventDefault();
    location.href = "./adminView.html";
  };
}; //Direct the admin to the adminView page

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Index_Page/indexStyle.css":
/*!***************************************!*\
  !*** ./src/Index_Page/indexStyle.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_css_bootstrap_min_css"], () => (__webpack_exec__("./src/Index_Page/homePage.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQUEsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLFlBQVc7QUFDdkIsTUFBSUMsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBckI7O0FBQ0FGLEVBQUFBLGNBQWMsQ0FBQ0csT0FBZixHQUF5QixVQUFTQyxDQUFULEVBQVk7QUFDakNBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRixHQURpQyxDQUVqQzs7QUFDQUMsSUFBQUEsUUFBUSxDQUFDQyxJQUFULEdBQWdCLDBCQUFoQjtBQUNILEdBSkQ7O0FBTUEsTUFBSUMsV0FBVyxHQUFHUCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBbEI7O0FBQ0FNLEVBQUFBLFdBQVcsQ0FBQ0wsT0FBWixHQUFzQixVQUFDQyxDQUFELEVBQU87QUFDekJBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxJQUFBQSxRQUFRLENBQUNDLElBQVQsR0FBZ0Isa0JBQWhCO0FBQ0gsR0FIRDtBQUlILENBYkQsRUFnQkE7Ozs7Ozs7Ozs7O0FDckJBOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2twcm9qZWN0Ly4vc3JjL0luZGV4X1BhZ2UvaG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3Byb2plY3QvLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzP2UzZDciLCJ3ZWJwYWNrOi8vd2VicGFja3Byb2plY3QvLi9zcmMvSW5kZXhfUGFnZS9pbmRleFN0eWxlLmNzcz84YTZiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vRGlyZWN0IHRoZSBjdXN0b21lciB0byB0aGUgY3VzdG9tZXJWaWV3IHBhZ2VcclxuXHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICcuL2luZGV4U3R5bGUuY3NzJztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgIGxldCBjdXN0b21lckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VzdG9tZXJcIik7XHJcbiAgICBjdXN0b21lckJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBsb2NhdGlvbi5ocmVmID0gXCIuLi9DdXN0b21lcl9WaWV3L2N1c3RvbWVyVmlld19QYWdlLmh0bWxcIjtcclxuICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIuL2N1c3RvbWVyVmlld19QYWdlLmh0bWxcIjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYWRtaW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkbWluXCIpO1xyXG4gICAgYWRtaW5CdXR0b24ub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBcIi4vYWRtaW5WaWV3Lmh0bWxcIjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vRGlyZWN0IHRoZSBhZG1pbiB0byB0aGUgYWRtaW5WaWV3IHBhZ2UiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiY3VzdG9tZXJCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib25jbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2F0aW9uIiwiaHJlZiIsImFkbWluQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==