(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-service-status-service-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/service-status/service-status.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/service-status/service-status.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n  \t<ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n        <div class=\"logo-in\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding color=\"light\">\n  <ion-card nopadding *ngFor=\"let s of status\" (click)=\"serviceDesc(s)\">\n    <ion-row>\n      <ion-col><h5>TICKET ID</h5></ion-col>\n      <ion-col><h4 class=\"fw800\">{{s.id}}</h4></ion-col>\n      <ion-col><h5>TITLE</h5></ion-col>\n      <ion-col><h4 class=\"fw800\">{{s.issue}}</h4></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col><h5>CREATED TIME & DATE</h5></ion-col>\n      <ion-col><h4 class=\"fw800\">{{s.time}}</h4></ion-col>\n      <ion-col><h5>STATUS</h5></ion-col>\n      <ion-col><h4 class=\"fw800\">{{s.status}}</h4></ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/service-status/service-status.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/cust/service-status/service-status.module.ts ***!
  \********************************************************************/
/*! exports provided: ServiceStatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceStatusPageModule", function() { return ServiceStatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-status.page */ "./src/app/pages/cust/service-status/service-status.page.ts");







const routes = [
    {
        path: '',
        component: _service_status_page__WEBPACK_IMPORTED_MODULE_6__["ServiceStatusPage"]
    }
];
let ServiceStatusPageModule = class ServiceStatusPageModule {
};
ServiceStatusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_service_status_page__WEBPACK_IMPORTED_MODULE_6__["ServiceStatusPage"]]
    })
], ServiceStatusPageModule);



/***/ }),

/***/ "./src/app/pages/cust/service-status/service-status.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/cust/service-status/service-status.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  color: red;\n  margin-top: 5px;\n  font-size: 14px;\n}\n\nh5 {\n  margin-top: 5px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zZXJ2aWNlLXN0YXR1cy9EOlxcUmlhelxcTmV3QVBLXFxOZXdBUEt2MC4xL3NyY1xcYXBwXFxwYWdlc1xcY3VzdFxcc2VydmljZS1zdGF0dXNcXHNlcnZpY2Utc3RhdHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9zZXJ2aWNlLXN0YXR1cy9zZXJ2aWNlLXN0YXR1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNDRDs7QURHQTtFQUNDLGVBQUE7RUFDQSxlQUFBO0FDQUQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdXN0L3NlcnZpY2Utc3RhdHVzL3NlcnZpY2Utc3RhdHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg0e1xyXG5cdGNvbG9yOnJlZDtcclxuXHRtYXJnaW4tdG9wOjVweDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblxyXG59XHJcblxyXG5oNXtcclxuXHRtYXJnaW4tdG9wOjVweDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn0iLCJoNCB7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5oNSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/cust/service-status/service-status.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/cust/service-status/service-status.page.ts ***!
  \******************************************************************/
/*! exports provided: ServiceStatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceStatusPage", function() { return ServiceStatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ServiceStatusPage = class ServiceStatusPage {
    constructor(authService, alertService, loadingCtrl, alertCtrl, navCtrl, popoverCtrl, router) {
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.router = router;
    }
    ngOnInit() {
        this.serviceStatus();
    }
    serviceStatus() {
        this.authService.serviceStatus().subscribe(data => {
            console.log(data);
            this.status = data.message;
            if (data.response == true) {
                this.alertService.presentToast('You have the following support request');
            }
            else {
                this.alertService.presentToast(data.message);
            }
        });
    }
    serviceDesc(s) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let navigationExtras = {
                state: {
                    status: s
                }
            };
            this.router.navigate(['service-desc'], navigationExtras);
            console.log(s);
        });
    }
};
ServiceStatusPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ServiceStatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-status',
        template: __webpack_require__(/*! raw-loader!./service-status.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/service-status/service-status.page.html"),
        styles: [__webpack_require__(/*! ./service-status.page.scss */ "./src/app/pages/cust/service-status/service-status.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ServiceStatusPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-service-status-service-status-module-es2015.js.map