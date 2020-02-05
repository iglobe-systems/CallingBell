(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-family-card-family-card-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/family-card/family-card.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/family-card/family-card.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-buttons>\n      <div>\n        <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n      </div>\n         <ion-buttons slot=\"end\">\n          <ion-button shape=\"round\" (click)=\"back()\">\n            <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <div class=\"bg\">\n        <h4>DNA doesn't make a <br>family.love does.</h4>\n        </div>\n  <div *ngFor=\"let service of familycard\"  class=\"size\">\n    <div class=\"flex\">\n      <img src=\"{{service.image_url}}\" class=\"service-img\"/>\n      <h5>{{service.name}}</h5>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/family-card/family-card.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/family-card/family-card.module.ts ***!
  \***********************************************************************/
/*! exports provided: FamilyCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyCardPageModule", function() { return FamilyCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _family_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./family-card.page */ "./src/app/pages/cust/spec-cat/family-card/family-card.page.ts");







const routes = [
    {
        path: '',
        component: _family_card_page__WEBPACK_IMPORTED_MODULE_6__["FamilyCardPage"]
    }
];
let FamilyCardPageModule = class FamilyCardPageModule {
};
FamilyCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_family_card_page__WEBPACK_IMPORTED_MODULE_6__["FamilyCardPage"]]
    })
], FamilyCardPageModule);



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/family-card/family-card.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/family-card/family-card.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.size {\n  display: inline-block;\n  width: 29%;\n  background-color: #fff4fd;\n  text-align: center;\n  margin: 2%;\n  height: 120px;\n}\n\n.service-img {\n  width: 40px;\n  height: 40px;\n  border-radius: 5px;\n  margin: 10px auto;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nh5 {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 12px;\n}\n\n.bg {\n  background: url('3.jpg') no-repeat center center/cover;\n}\n\nh4 {\n  text-transform: uppercase;\n  margin: 0;\n  padding: 10%;\n  color: black;\n  font-size: 2rem;\n  text-shadow: 2px 2px 10px white;\n  text-align: end;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9mYW1pbHktY2FyZC9EOlxcUmlhelxcTmV3QVBLXFxOZXdBUEt2MC4xL3NyY1xcYXBwXFxwYWdlc1xcY3VzdFxcc3BlYy1jYXRcXGZhbWlseS1jYXJkXFxmYW1pbHktY2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvZmFtaWx5LWNhcmQvZmFtaWx5LWNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDQyxxQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0MsVUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFRTtFQUNFLFdBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7RUFHQSxpQkFBQTtBQ0ZKOztBREtDO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRkY7O0FES0M7RUFDQyx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0M7RUFDQyxzREFBQTtBQ0ZGOztBREtBO0VBQ0UseUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvZmFtaWx5LWNhcmQvZmFtaWx5LWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1sb2dve1xyXG4gIHdpZHRoOjEyMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5zaXple1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDoyOSU7ICAvL2RlZmF1bHQgLSA0NiVcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNGZkO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDIlO1xyXG4gIGhlaWdodDoxMjBweDtcclxufVxyXG5cclxuICAuc2VydmljZS1pbWd7XHJcbiAgICB3aWR0aDo0MHB4O1xyXG4gICAgLy8gaGVpZ2h0OjE1MHB4O1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIC8vIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgfVxyXG5cclxuIC5mbGV4e1xyXG4gXHRkaXNwbGF5OiBmbGV4O1xyXG4gXHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiB9XHJcblxyXG4gaDV7XHJcbiBcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiBcdG1hcmdpbjoxMHB4O1xyXG4gXHRmb250LXNpemU6IDEycHg7XHJcbiB9XHJcblxyXG4gLmJne1xyXG4gIGJhY2tncm91bmQ6IHVybChzcmMvYXNzZXRzL2ltZy9iZy8zLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XHJcbn1cclxuXHJcbmg0e1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDEwJTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn0iLCIuaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMTIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zaXplIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjklO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNGZkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMiU7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5zZXJ2aWNlLWltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaDUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJnIHtcbiAgYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1nL2JnLzMuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3Zlcjtcbn1cblxuaDQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwJTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggd2hpdGU7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/family-card/family-card.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/family-card/family-card.page.ts ***!
  \*********************************************************************/
/*! exports provided: FamilyCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyCardPage", function() { return FamilyCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let FamilyCardPage = class FamilyCardPage {
    constructor(authService, alertService, loadingCtrl, alertCtrl, navCtrl, popoverCtrl, router) {
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.router = router;
        this.familycard = [
            { id: 25, name: "Personal Details", image_url: "assets/img/flaticon/familycard/user.png" },
            { id: 25, name: "Educational Details", image_url: "assets/img/flaticon/familycard/book.png" },
            { id: 25, name: "professional details", image_url: "assets/img/flaticon/familycard/suitcase.png" },
            { id: 25, name: "medical details", image_url: "assets/img/flaticon/familycard/medicine.png" },
            { id: 25, name: "property details", image_url: "assets/img/flaticon/familycard/house.png" },
            { id: 25, name: "renewals & remainders", image_url: "assets/img/flaticon/familycard/bell.png" },
        ];
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.navigateBack('cust-home');
    }
};
FamilyCardPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
FamilyCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-family-card',
        template: __webpack_require__(/*! raw-loader!./family-card.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/family-card/family-card.page.html"),
        styles: [__webpack_require__(/*! ./family-card.page.scss */ "./src/app/pages/cust/spec-cat/family-card/family-card.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], FamilyCardPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-family-card-family-card-module-es2015.js.map