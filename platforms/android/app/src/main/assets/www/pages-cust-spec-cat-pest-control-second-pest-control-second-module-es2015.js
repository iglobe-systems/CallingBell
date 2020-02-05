(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-pest-control-second-pest-control-second-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/pest-control-second/pest-control-second.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/pest-control-second/pest-control-second.page.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n       <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n\n\t<div>\n\t\t<img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n\t  </div>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n\t<h3>pest control</h3>\n\t<h1>1 BHK</h1>\n\t<ion-card>\n\t\t<ion-card-header>\n\t\t\t<h4>Cockroach & Ant Control</h4>\n\t\t</ion-card-header>\n\t\t<ion-card-content>\n\t\t\t<h5><ul><li>Control cockroaches, ants & crawling insects</li>\n\t\t\t\t<li>Not useful for lizards, mice, rats, snakes</li>\n\t\t\t\t</ul>\n\t\t\t</h5>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"price\">\n\t\t\t\t\t<h2>Rs.999</h2>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"cart\">\n\t\t\t\t\t<ion-button size=\"small\" fill=\"outline\" color=\"gold\">Add To Cart</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card>\n\t\t<ion-card-header>\n\t\t\t<h4>mosquito control</h4>\n\t\t</ion-card-header>\n\t\t<ion-card-content>\n\t\t\t<h5><ul><li>Controls mosquitoes against dengue, zika</li>\n\t\t\t\t<li>Kills mosquitoes on contact via spraying</li>\n\t\t\t\t</ul>\n\t\t\t</h5>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"price\">\n\t\t\t\t\t<h2>Rs.999</h2>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"cart\">\n\t\t\t\t\t<ion-button size=\"small\" fill=\"outline\" color=\"gold\">Add To Cart</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card>\n\t\t<ion-card-header>\n\t\t\t<h4>Termite Control</h4>\n\t\t</ion-card-header>\n\t\t<ion-card-content>\n\t\t\t<h5><ul><li>Infected walls / furniture to be treated</li>\n\t\t\t\t<li>Drilling of holes to be done basis inspection</li>\n\t\t\t\t</ul>\n\t\t\t</h5>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"price\">\n\t\t\t\t\t<h2>Rs.2,699</h2>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"cart\">\n\t\t\t\t\t<ion-button size=\"small\" fill=\"outline\" color=\"gold\">Add To Cart</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card>\n\t\t<ion-card-header>\n\t\t\t<h4>bed bugs control</h4>\n\t\t</ion-card-header>\n\t\t<ion-card-content>\n\t\t\t<h5><ul><li>Infected mattresses / furniture to be treated</li>\n\t\t\t\t<!-- <li>Drilling of holes to be done basis inspection</li> -->\n\t\t\t\t</ul>\n\t\t\t</h5>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"price\">\n\t\t\t\t\t<h2>Rs.1,499</h2>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"cart\">\n\t\t\t\t\t<ion-button size=\"small\" fill=\"outline\" color=\"gold\">Add To Cart</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-card-content>\n\t</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/pest-control-second/pest-control-second.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/pest-control-second/pest-control-second.module.ts ***!
  \***************************************************************************************/
/*! exports provided: PestControlSecondPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PestControlSecondPageModule", function() { return PestControlSecondPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pest_control_second_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pest-control-second.page */ "./src/app/pages/cust/spec-cat/pest-control-second/pest-control-second.page.ts");







const routes = [
    {
        path: '',
        component: _pest_control_second_page__WEBPACK_IMPORTED_MODULE_6__["PestControlSecondPage"]
    }
];
let PestControlSecondPageModule = class PestControlSecondPageModule {
};
PestControlSecondPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_pest_control_second_page__WEBPACK_IMPORTED_MODULE_6__["PestControlSecondPage"]]
    })
], PestControlSecondPageModule);



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/pest-control-second/pest-control-second.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/pest-control-second/pest-control-second.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\nh3 {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 18px;\n  margin: 1% 3%;\n}\n\nh1 {\n  font-size: 18px;\n  margin: 1% 3%;\n}\n\nh4 {\n  margin: 0;\n  font-size: 16px;\n  text-transform: capitalize;\n  color: black;\n}\n\n.cart {\n  text-align: right;\n}\n\n.price {\n  align-self: center;\n}\n\nh2 {\n  font-weight: 500;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9wZXN0LWNvbnRyb2wtc2Vjb25kL0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0XFxzcGVjLWNhdFxccGVzdC1jb250cm9sLXNlY29uZFxccGVzdC1jb250cm9sLXNlY29uZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvcGVzdC1jb250cm9sLXNlY29uZC9wZXN0LWNvbnRyb2wtc2Vjb25kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0Msa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQ0Q7O0FERUE7RUFDQyxlQUFBO0VBQ0EsYUFBQTtBQ0NEOztBREVBO0VBQ0MsU0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUNDRDs7QURFQTtFQUNDLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxrQkFBQTtBQ0NEOztBREVBO0VBRUMsZ0JBQUE7RUFDQSxlQUFBO0FDQUQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdXN0L3NwZWMtY2F0L3Blc3QtY29udHJvbC1zZWNvbmQvcGVzdC1jb250cm9sLXNlY29uZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWxvZ297XHJcbiAgICB3aWR0aDoxMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbmgze1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRtYXJnaW46IDElIDMlO1xyXG59XHJcblxyXG5oMXtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0bWFyZ2luOiAxJSAzJTtcclxufVxyXG5cclxuaDR7XHJcblx0bWFyZ2luOjA7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cdGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4uY2FydHtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnByaWNle1xyXG5cdGFsaWduLXNlbGY6Y2VudGVyO1xyXG59XHJcblxyXG5oMntcclxuXHQvLyBjb2xvcjpibGFjaztcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGZvbnQtc2l6ZTogMjJweDtcclxufSIsIi5oZWFkZXItbG9nbyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAxJSAzJTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMSUgMyU7XG59XG5cbmg0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJ0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5wcmljZSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuaDIge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/pest-control-second/pest-control-second.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/pest-control-second/pest-control-second.page.ts ***!
  \*************************************************************************************/
/*! exports provided: PestControlSecondPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PestControlSecondPage", function() { return PestControlSecondPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PestControlSecondPage = class PestControlSecondPage {
    constructor() { }
    ngOnInit() {
    }
};
PestControlSecondPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pest-control-second',
        template: __webpack_require__(/*! raw-loader!./pest-control-second.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/pest-control-second/pest-control-second.page.html"),
        styles: [__webpack_require__(/*! ./pest-control-second.page.scss */ "./src/app/pages/cust/spec-cat/pest-control-second/pest-control-second.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PestControlSecondPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-pest-control-second-pest-control-second-module-es2015.js.map