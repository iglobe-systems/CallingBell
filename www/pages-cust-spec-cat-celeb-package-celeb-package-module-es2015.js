(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-celeb-package-celeb-package-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/celeb-package/celeb-package.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/celeb-package/celeb-package.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n       <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n     <div class=\"logo-in\"></div>\n     <ion-buttons slot=\"end\">\n        <ion-button shape=\"round\" (click)=\"back()\">\n          <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h4>CHOOSE PACKAGE</h4>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/celeb-package/celeb-package.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/celeb-package/celeb-package.module.ts ***!
  \***************************************************************************/
/*! exports provided: CelebPackagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebPackagePageModule", function() { return CelebPackagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _celeb_package_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./celeb-package.page */ "./src/app/pages/cust/spec-cat/celeb-package/celeb-package.page.ts");







const routes = [
    {
        path: '',
        component: _celeb_package_page__WEBPACK_IMPORTED_MODULE_6__["CelebPackagePage"]
    }
];
let CelebPackagePageModule = class CelebPackagePageModule {
};
CelebPackagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_celeb_package_page__WEBPACK_IMPORTED_MODULE_6__["CelebPackagePage"]]
    })
], CelebPackagePageModule);



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/celeb-package/celeb-package.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/celeb-package/celeb-package.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvY2VsZWItcGFja2FnZS9jZWxlYi1wYWNrYWdlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/celeb-package/celeb-package.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/celeb-package/celeb-package.page.ts ***!
  \*************************************************************************/
/*! exports provided: CelebPackagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebPackagePage", function() { return CelebPackagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CelebPackagePage = class CelebPackagePage {
    constructor() { }
    ngOnInit() {
    }
};
CelebPackagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-celeb-package',
        template: __webpack_require__(/*! raw-loader!./celeb-package.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/celeb-package/celeb-package.page.html"),
        styles: [__webpack_require__(/*! ./celeb-package.page.scss */ "./src/app/pages/cust/spec-cat/celeb-package/celeb-package.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CelebPackagePage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-celeb-package-celeb-package-module-es2015.js.map