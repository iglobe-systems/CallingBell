(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-ebike-ebike-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/ebike/ebike.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/ebike/ebike.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n       <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n\n     <div class=\"logo-in\"></div>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<!-- <div class=\"header\">\n\t\t<img src=\"assets/img/ebike/1.png\">\n\t</div>\n\t<div class=\"content\">\n\t\t<img src=\"assets/img/1.jpg\">\n\t</div>\n\t<div class=\"header\">\n\t\t<img src=\"assets/img/ebike/2.png\">\n\t</div>\n\t<div class=\"content\">\n\t\t<img src=\"assets/img/2.jpg\">\n\t</div>\n\t<div class=\"header\">\n\t\t<img src=\"assets/img/ebike/3.png\">\n\t</div>\n\t<div class=\"content\">\n\t\t<img src=\"assets/img/4.jpg\">\n\t</div>\n\t<div class=\"header\">\n\t\t<img src=\"assets/img/ebike/4.png\">\n\t</div>\n\t<div class=\"content\">\n\t\t<img src=\"assets/img/3.jpg\">\n\t</div> -->\n\n\t<div class=\"section\">\n\t\t<img src=\"assets/img/ebike/11.jpg\"/>\n\t\t<br>\n\t\t<br>\n\t\t<img src=\"assets/img/ebike/12.jpg\"/>\n\t\t<br>\n\t\t<br>\n\t\t<img src=\"assets/img/ebike/13.jpg\"/>\n\t\t<br>\n\t\t<br>\n\t\t<img src=\"assets/img/ebike/14.jpg\"/>\n\t\t<br>\n\t\t<br>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/ebike/ebike.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/ebike/ebike.module.ts ***!
  \***********************************************************/
/*! exports provided: EbikePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbikePageModule", function() { return EbikePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ebike_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ebike.page */ "./src/app/pages/cust/spec-cat/ebike/ebike.page.ts");







var routes = [
    {
        path: '',
        component: _ebike_page__WEBPACK_IMPORTED_MODULE_6__["EbikePage"]
    }
];
var EbikePageModule = /** @class */ (function () {
    function EbikePageModule() {
    }
    EbikePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ebike_page__WEBPACK_IMPORTED_MODULE_6__["EbikePage"]]
        })
    ], EbikePageModule);
    return EbikePageModule;
}());



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/ebike/ebike.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/ebike/ebike.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  width: 100%;\n  height: auto;\n}\n\n.header {\n  width: 100px;\n  height: 36px;\n  margin: auto;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n}\n\n.section {\n  background-color: #d6d4d4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9lYmlrZS9EOlxcUmlhelxcTmV3QVBLXFxOZXdBUEt2MC4xL3NyY1xcYXBwXFxwYWdlc1xcY3VzdFxcc3BlYy1jYXRcXGViaWtlXFxlYmlrZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvZWJpa2UvZWJpa2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNDRDs7QURFQTtFQUNDLHlCQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdXN0L3NwZWMtY2F0L2ViaWtlL2ViaWtlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG5cdHdpZHRoOjEwMHB4O1xyXG5cdGhlaWdodDozNnB4O1xyXG5cdG1hcmdpbjphdXRvO1xyXG59XHJcblxyXG5pbWd7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRoZWlnaHQ6YXV0bztcclxufVxyXG5cclxuLnNlY3Rpb257XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Q2ZDRkNDtcclxufSIsIi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmhlYWRlciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDRkNDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/ebike/ebike.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/ebike/ebike.page.ts ***!
  \*********************************************************/
/*! exports provided: EbikePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbikePage", function() { return EbikePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EbikePage = /** @class */ (function () {
    function EbikePage() {
    }
    EbikePage.prototype.ngOnInit = function () {
    };
    EbikePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ebike',
            template: __webpack_require__(/*! raw-loader!./ebike.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/ebike/ebike.page.html"),
            styles: [__webpack_require__(/*! ./ebike.page.scss */ "./src/app/pages/cust/spec-cat/ebike/ebike.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EbikePage);
    return EbikePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-ebike-ebike-module-es5.js.map