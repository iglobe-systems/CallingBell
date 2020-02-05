(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-insurance-insurance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/insurance/insurance.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/insurance/insurance.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-buttons>\n      <div>\n        <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n      </div>\n         <ion-buttons slot=\"end\">\n          <ion-button shape=\"round\" (click)=\"back()\">\n            <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"bg\">\n    <h4>\"Fun is like life insurance;<br>the older you get, the more it costs\"</h4>\n    </div>\n  <div *ngFor=\"let service of insurance\"  class=\"size\">\n    <div class=\"flex\">\n      <img src=\"{{service.image_url}}\" class=\"service-img\"/>\n      <h5>{{service.name}}</h5>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/insurance/insurance.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/insurance/insurance.module.ts ***!
  \*******************************************************************/
/*! exports provided: InsurancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurancePageModule", function() { return InsurancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _insurance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insurance.page */ "./src/app/pages/cust/spec-cat/insurance/insurance.page.ts");







const routes = [
    {
        path: '',
        component: _insurance_page__WEBPACK_IMPORTED_MODULE_6__["InsurancePage"]
    }
];
let InsurancePageModule = class InsurancePageModule {
};
InsurancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_insurance_page__WEBPACK_IMPORTED_MODULE_6__["InsurancePage"]]
    })
], InsurancePageModule);



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/insurance/insurance.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/insurance/insurance.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.size {\n  display: inline-block;\n  width: 29%;\n  background-color: #fff6f6;\n  text-align: center;\n  margin: 2%;\n  height: 120px;\n}\n\n.service-img {\n  width: 40px;\n  height: 40px;\n  border-radius: 5px;\n  margin: 10px auto;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nh5 {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 12px;\n}\n\n.bg {\n  background: url('6.jpg') no-repeat center center/cover;\n}\n\nh4 {\n  text-transform: uppercase;\n  margin: 0;\n  padding: 10%;\n  color: snow;\n  font-size: 1.5rem;\n  text-shadow: 2px 2px black;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9pbnN1cmFuY2UvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXGN1c3RcXHNwZWMtY2F0XFxpbnN1cmFuY2VcXGluc3VyYW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvaW5zdXJhbmNlL2luc3VyYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNDLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDRyxVQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUdBLGlCQUFBO0FDRko7O0FES0M7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNGRjs7QURLQztFQUNDLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNGRjs7QURLQztFQUNFLHNEQUFBO0FDRkg7O0FETUM7RUFDRSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDSEgiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdXN0L3NwZWMtY2F0L2luc3VyYW5jZS9pbnN1cmFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1sb2dve1xyXG4gIHdpZHRoOjEyMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5zaXple1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDoyOSU7ICAvL2RlZmF1bHQgLSA0NiVcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNmY2O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMiU7XHJcbiAgICBoZWlnaHQ6MTIwcHg7XHJcbn1cclxuXHJcbiAgLnNlcnZpY2UtaW1ne1xyXG4gICAgd2lkdGg6NDBweDtcclxuICAgIC8vIGhlaWdodDoxNTBweDtcclxuICAgIGhlaWdodDo0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIH1cclxuXHJcbiAuZmxleHtcclxuIFx0ZGlzcGxheTogZmxleDtcclxuIFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gfVxyXG5cclxuIGg1e1xyXG4gXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gXHRtYXJnaW46MTBweDtcclxuIFx0Zm9udC1zaXplOiAxMnB4O1xyXG4gfVxyXG5cclxuIC5iZ3tcclxuICAgYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1nL2JnLzYuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcclxuICAvLyAgb3BhY2l0eTowLjU7XHJcbiB9XHJcblxyXG4gaDR7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgIG1hcmdpbjogMDtcclxuICAgcGFkZGluZzogMTAlO1xyXG4gICBjb2xvcjogc25vdztcclxuICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgIHRleHQtc2hhZG93OiAycHggMnB4IGJsYWNrO1xyXG4gICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiB9IiwiLmhlYWRlci1sb2dvIHtcbiAgd2lkdGg6IDEyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc2l6ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI5JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjZmNjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIlO1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4uc2VydmljZS1pbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmg1IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5iZyB7XG4gIGJhY2tncm91bmQ6IHVybChzcmMvYXNzZXRzL2ltZy9iZy82LmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XG59XG5cbmg0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMCU7XG4gIGNvbG9yOiBzbm93O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggYmxhY2s7XG4gIHRleHQtYWxpZ246IGVuZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/insurance/insurance.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/insurance/insurance.page.ts ***!
  \*****************************************************************/
/*! exports provided: InsurancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurancePage", function() { return InsurancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let InsurancePage = class InsurancePage {
    constructor(authService, alertService, loadingCtrl, alertCtrl, navCtrl, popoverCtrl, router) {
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.router = router;
        this.insurance = [
            { id: 25, name: "life insurance", image_url: "assets/img/flaticon/insurance/life-insurance.png" },
            { id: 25, name: "health insurance", image_url: "assets/img/flaticon/insurance/health-insurance.png" },
            { id: 25, name: "product insurance", image_url: "assets/img/flaticon/insurance/product-insurance.png" },
            { id: 25, name: "property insurance", image_url: "assets/img/flaticon/insurance/insurance.png" },
            { id: 25, name: "automobile insurance", image_url: "assets/img/flaticon/insurance/car-insurance.png" },
            { id: 25, name: "insurance claims", image_url: "assets/img/flaticon/insurance/claim.png" },
        ];
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.navigateBack('cust-home');
    }
};
InsurancePage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
InsurancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-insurance',
        template: __webpack_require__(/*! raw-loader!./insurance.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/insurance/insurance.page.html"),
        styles: [__webpack_require__(/*! ./insurance.page.scss */ "./src/app/pages/cust/spec-cat/insurance/insurance.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], InsurancePage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-insurance-insurance-module-es2015.js.map