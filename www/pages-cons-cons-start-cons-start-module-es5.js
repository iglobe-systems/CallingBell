(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cons-cons-start-cons-start-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cons/cons-start/cons-start.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cons/cons-start/cons-start.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"animated fadeIn login auth-page ion-padding\" color=\"darkblue\">\n  <div class=\"auth-content\">\n    <div class=\"animated fadeInDown ion-text-center \">\n      <div>\n        <img src=\"assets/img/newlogov6.png\"/>\n      </div>\n    </div>\n    <br>\n</div>\n<br>\n<ion-button (click)=\"appCons()\" class=\"ion-margin\" shape=\"round\" expand=\"full\" color=\"gold\">APP CONSULTANT</ion-button>\n<ion-button (click)=\"prodCons()\" class=\"ion-margin\" shape=\"round\" expand=\"full\" color=\"gold\">PRODUCT CONSULTANT</ion-button>\n\n <ion-buttons>\n      <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\"></ion-icon>\n        BACK\n      </ion-button>\n    </ion-buttons>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/cons/cons-start/cons-start.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/cons/cons-start/cons-start.module.ts ***!
  \************************************************************/
/*! exports provided: ConsStartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsStartPageModule", function() { return ConsStartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cons_start_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cons-start.page */ "./src/app/pages/cons/cons-start/cons-start.page.ts");







var routes = [
    {
        path: '',
        component: _cons_start_page__WEBPACK_IMPORTED_MODULE_6__["ConsStartPage"]
    }
];
var ConsStartPageModule = /** @class */ (function () {
    function ConsStartPageModule() {
    }
    ConsStartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cons_start_page__WEBPACK_IMPORTED_MODULE_6__["ConsStartPage"]]
        })
    ], ConsStartPageModule);
    return ConsStartPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cons/cons-start/cons-start.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/cons/cons-start/cons-start.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnMvY29ucy1zdGFydC9jb25zLXN0YXJ0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/cons/cons-start/cons-start.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/cons/cons-start/cons-start.page.ts ***!
  \**********************************************************/
/*! exports provided: ConsStartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsStartPage", function() { return ConsStartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ConsStartPage = /** @class */ (function () {
    function ConsStartPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ConsStartPage.prototype.ngOnInit = function () {
    };
    ConsStartPage.prototype.appCons = function () {
        this.navCtrl.navigateForward('cons-login');
    };
    ConsStartPage.prototype.prodCons = function () {
        this.navCtrl.navigateForward('cons-login');
    };
    ConsStartPage.prototype.back = function () {
        this.navCtrl.navigateBack('/');
    };
    ConsStartPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    ConsStartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cons-start',
            template: __webpack_require__(/*! raw-loader!./cons-start.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cons/cons-start/cons-start.page.html"),
            styles: [__webpack_require__(/*! ./cons-start.page.scss */ "./src/app/pages/cons/cons-start/cons-start.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ConsStartPage);
    return ConsStartPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cons-cons-start-cons-start-module-es5.js.map