(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dev-add-grocery-add-grocery-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dev/add-grocery/add-grocery.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dev/add-grocery/add-grocery.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n      <ion-buttons slot=\"start\">\n         <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-buttons>\n  \n      <div>\n          <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n        </div>\n     \n      <ion-buttons slot=\"end\">\n        <ion-button shape=\"round\" (click)=\"back()\">\n          <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"darkblue\">\n  <h5 class=\"header-text\">Adding grocery form</h5>\n  <form>\n      <ion-list lines=\"none\" color=\"darkblue\" class=\"ion-no-padding\">\n          <ion-item color=\"darkblue\" class=\"item-style\">\n            <ion-label position=\"floating\" color=\"gold\">Product Category</ion-label>\n              <ion-select interface=\"popover\" lines=\"none\">\n                      <ion-select-option >Entertainment</ion-select-option>\n              </ion-select>\n          </ion-item>\n          <ion-item color=\"darkblue\" class=\"item-style\">\n              <ion-label position=\"floating\" color=\"gold\">Product Sub Category</ion-label>\n                <ion-select interface=\"popover\" lines=\"none\">\n                        <ion-select-option >Entertainment</ion-select-option>\n                </ion-select>\n          </ion-item>\n          <ion-item color=\"darkblue\" class=\"item-style\">\n              <ion-label position=\"floating\" color=\"gold\">Product Name</ion-label>\n              <ion-input type=\"text\" color=\"light\"></ion-input>\n          </ion-item>\n          <ion-item color=\"darkblue\" class=\"item-style\">\n              <ion-label position=\"floating\" color=\"gold\">Product Image</ion-label>\n              <ion-input type=\"text\" color=\"light\"></ion-input>\n          </ion-item>\n          <ion-item color=\"darkblue\" class=\"item-style\">\n              <ion-label position=\"floating\" color=\"gold\">Brand</ion-label>\n              <ion-input type=\"text\" color=\"light\"></ion-input>\n          </ion-item>\n          <ion-item color=\"darkblue\" class=\"item-style\">\n              <ion-label position=\"floating\" color=\"gold\">MRP</ion-label>\n              <ion-input type=\"numeric\" color=\"light\"></ion-input>\n          </ion-item>\n          <ion-item color=\"darkblue\" class=\"item-style\">\n              <ion-label position=\"floating\" color=\"gold\">Description</ion-label>\n              <ion-input type=\"text\" color=\"light\"></ion-input>\n          </ion-item>\n          <ion-item color=\"darkblue\" class=\"item-style\">\n              <ion-label position=\"floating\" color=\"gold\">Quantity</ion-label>\n              <ion-input type=\"text\" color=\"light\"></ion-input>\n          </ion-item>\n      </ion-list>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/dev/add-grocery/add-grocery.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/dev/add-grocery/add-grocery.module.ts ***!
  \*************************************************************/
/*! exports provided: AddGroceryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroceryPageModule", function() { return AddGroceryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_grocery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-grocery.page */ "./src/app/pages/dev/add-grocery/add-grocery.page.ts");







var routes = [
    {
        path: '',
        component: _add_grocery_page__WEBPACK_IMPORTED_MODULE_6__["AddGroceryPage"]
    }
];
var AddGroceryPageModule = /** @class */ (function () {
    function AddGroceryPageModule() {
    }
    AddGroceryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_grocery_page__WEBPACK_IMPORTED_MODULE_6__["AddGroceryPage"]]
        })
    ], AddGroceryPageModule);
    return AddGroceryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/dev/add-grocery/add-grocery.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/dev/add-grocery/add-grocery.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.header-text {\n  margin: 0;\n  font-size: 16px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV2L2FkZC1ncm9jZXJ5L0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFxkZXZcXGFkZC1ncm9jZXJ5XFxhZGQtZ3JvY2VyeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rldi9hZGQtZ3JvY2VyeS9hZGQtZ3JvY2VyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rldi9hZGQtZ3JvY2VyeS9hZGQtZ3JvY2VyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWxvZ297XHJcbiAgICB3aWR0aDoxMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5oZWFkZXItdGV4dHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vLyAuaXRlbS1zdHlsZXtcclxuLy8gICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNmZmFkMDA7XHJcbi8vIH0iLCIuaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMTIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5oZWFkZXItdGV4dCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/dev/add-grocery/add-grocery.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/dev/add-grocery/add-grocery.page.ts ***!
  \***********************************************************/
/*! exports provided: AddGroceryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroceryPage", function() { return AddGroceryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AddGroceryPage = /** @class */ (function () {
    function AddGroceryPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AddGroceryPage.prototype.ngOnInit = function () {
    };
    AddGroceryPage.prototype.back = function () {
        this.navCtrl.navigateBack('cust-home');
    };
    AddGroceryPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    AddGroceryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-grocery',
            template: __webpack_require__(/*! raw-loader!./add-grocery.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dev/add-grocery/add-grocery.page.html"),
            styles: [__webpack_require__(/*! ./add-grocery.page.scss */ "./src/app/pages/dev/add-grocery/add-grocery.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], AddGroceryPage);
    return AddGroceryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dev-add-grocery-add-grocery-module-es5.js.map