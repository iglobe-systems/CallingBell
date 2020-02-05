(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-remainders-remainders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/remainders/remainders.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/remainders/remainders.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-buttons>\n      <div>\n        <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n      </div>\n         <ion-buttons slot=\"end\">\n          <ion-button shape=\"round\" (click)=\"back()\">\n            <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"bg\">\n        <h4>alert today, <br>alive tomorrow</h4>\n        </div>\n\n  <div *ngFor=\"let service of remainders\"  class=\"size\">\n    <div class=\"flex\">\n      <img src=\"{{service.image_url}}\" class=\"service-img\"/>\n      <h5>{{service.name}}</h5>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/remainders/remainders.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/remainders/remainders.module.ts ***!
  \*********************************************************************/
/*! exports provided: RemaindersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemaindersPageModule", function() { return RemaindersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _remainders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./remainders.page */ "./src/app/pages/cust/spec-cat/remainders/remainders.page.ts");







var routes = [
    {
        path: '',
        component: _remainders_page__WEBPACK_IMPORTED_MODULE_6__["RemaindersPage"]
    }
];
var RemaindersPageModule = /** @class */ (function () {
    function RemaindersPageModule() {
    }
    RemaindersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_remainders_page__WEBPACK_IMPORTED_MODULE_6__["RemaindersPage"]]
        })
    ], RemaindersPageModule);
    return RemaindersPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/remainders/remainders.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/remainders/remainders.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.size {\n  display: inline-block;\n  width: 29%;\n  background-color: #eafff9;\n  text-align: center;\n  margin: 2%;\n  height: 120px;\n}\n\n.service-img {\n  width: 40px;\n  height: 40px;\n  border-radius: 5px;\n  margin: 10px auto;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nh5 {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 12px;\n}\n\n.bg {\n  background: url('4.jpg') no-repeat center center/cover;\n}\n\nh4 {\n  text-transform: uppercase;\n  margin: 0;\n  padding: 10%;\n  color: black;\n  font-size: 1.5rem;\n  text-align: end;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9yZW1haW5kZXJzL0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0XFxzcGVjLWNhdFxccmVtYWluZGVyc1xccmVtYWluZGVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvcmVtYWluZGVycy9yZW1haW5kZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0MscUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNHLFVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0VBR0EsaUJBQUE7QUNGSjs7QURLQztFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0ZGOztBREtDO0VBQ0MseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBREtDO0VBQ0Msc0RBQUE7QUNGRjs7QURNQTtFQUNFLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvcmVtYWluZGVycy9yZW1haW5kZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbG9nb3tcclxuICB3aWR0aDoxMjBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uc2l6ZXtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6MjklOyAgLy9kZWZhdWx0IC0gNDYlXHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VhZmZmOTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgaGVpZ2h0OjEyMHB4O1xyXG59XHJcblxyXG4gIC5zZXJ2aWNlLWltZ3tcclxuICAgIHdpZHRoOjQwcHg7XHJcbiAgICAvLyBoZWlnaHQ6MTUwcHg7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICB9XHJcblxyXG4gLmZsZXh7XHJcbiBcdGRpc3BsYXk6IGZsZXg7XHJcbiBcdGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuIH1cclxuXHJcbiBoNXtcclxuIFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuIFx0bWFyZ2luOjEwcHg7XHJcbiBcdGZvbnQtc2l6ZTogMTJweDtcclxuIH1cclxuXHJcbiAuYmd7XHJcbiAgYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1nL2JnLzQuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcclxuIC8vICBvcGFjaXR5OjAuNTtcclxufVxyXG5cclxuaDR7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMTAlO1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgLy8gdGV4dC1zaGFkb3c6IDJweCAycHggYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn0iLCIuaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMTIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zaXplIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjklO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFmZmY5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMiU7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5zZXJ2aWNlLWltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaDUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJnIHtcbiAgYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1nL2JnLzQuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3Zlcjtcbn1cblxuaDQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwJTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBmb250LXdlaWdodDogODAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/remainders/remainders.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/remainders/remainders.page.ts ***!
  \*******************************************************************/
/*! exports provided: RemaindersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemaindersPage", function() { return RemaindersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RemaindersPage = /** @class */ (function () {
    function RemaindersPage(authService, alertService, loadingCtrl, alertCtrl, navCtrl, popoverCtrl, router) {
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.router = router;
        this.remainders = [
            { id: 25, name: "Insurance renewals", image_url: "assets/img/flaticon/remainders/life-insurance.png" },
            { id: 25, name: "Monthly Bill remainders", image_url: "assets/img/flaticon/remainders/invoice.png" },
            { id: 25, name: "passport & license renewals", image_url: "assets/img/flaticon/remainders/passport.png" },
            { id: 25, name: "Birthday remainders", image_url: "assets/img/flaticon/remainders/gift.png" },
            { id: 25, name: "wedding day remainders", image_url: "assets/img/flaticon/remainders/love-letter.png" },
            { id: 25, name: "custom remainders", image_url: "assets/img/flaticon/remainders/bell.png" },
        ];
    }
    RemaindersPage.prototype.ngOnInit = function () {
    };
    RemaindersPage.prototype.back = function () {
        this.navCtrl.navigateBack('cust-home');
    };
    RemaindersPage.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    RemaindersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-remainders',
            template: __webpack_require__(/*! raw-loader!./remainders.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/remainders/remainders.page.html"),
            styles: [__webpack_require__(/*! ./remainders.page.scss */ "./src/app/pages/cust/spec-cat/remainders/remainders.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RemaindersPage);
    return RemaindersPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-remainders-remainders-module-es5.js.map