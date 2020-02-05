(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-service-desc-service-desc-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/service-desc/service-desc.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/service-desc/service-desc.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n  \t<ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n        <div class=\"logo-in\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding color=\"light\">\n  <ion-card padding *ngFor=\"let s of status\">\n    <ion-row>\n      <ion-col><h5 class=\"fw800\">TICKET ID</h5></ion-col>\n      <ion-col><h4 class=\"fw800 text12\">{{s.id}}</h4></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col><h5 class=\"fw800\">TITLE</h5></ion-col>\n      <ion-col><h4 class=\"fw800 text12\">{{s.issue}}</h4></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col><h5 class=\"fw800\">CREATED TIME & DATE</h5></ion-col>\n      <ion-col><h4 class=\"fw800 text12\">{{s.time}}</h4></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col><h5 class=\"fw800\">STATUS</h5></ion-col>\n      <ion-col><h4 class=\"fw800 text15\">{{s.status}}</h4></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col><h5 class=\"fw800\">DESCRIPTION</h5></ion-col>\n      <ion-col><h4 class=\"fw800 text12\">{{s.description}}</h4></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col><h5 class=\"fw800\">SOLUTION</h5></ion-col>\n      <ion-col><h4 class=\"fw800 text12\">{{s.solution}}</h4></ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/cust/service-desc/service-desc.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/cust/service-desc/service-desc.module.ts ***!
  \****************************************************************/
/*! exports provided: ServiceDescPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDescPageModule", function() { return ServiceDescPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_desc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-desc.page */ "./src/app/pages/cust/service-desc/service-desc.page.ts");







const routes = [
    {
        path: '',
        component: _service_desc_page__WEBPACK_IMPORTED_MODULE_6__["ServiceDescPage"]
    }
];
let ServiceDescPageModule = class ServiceDescPageModule {
};
ServiceDescPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_service_desc_page__WEBPACK_IMPORTED_MODULE_6__["ServiceDescPage"]]
    })
], ServiceDescPageModule);



/***/ }),

/***/ "./src/app/pages/cust/service-desc/service-desc.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/cust/service-desc/service-desc.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  color: red;\n  margin-top: 5px;\n}\n\nh5 {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zZXJ2aWNlLWRlc2MvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXGN1c3RcXHNlcnZpY2UtZGVzY1xcc2VydmljZS1kZXNjLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9zZXJ2aWNlLWRlc2Mvc2VydmljZS1kZXNjLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FDQ0Q7O0FERUE7RUFDQyxlQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdXN0L3NlcnZpY2UtZGVzYy9zZXJ2aWNlLWRlc2MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDR7XHJcblx0Y29sb3I6cmVkO1xyXG5cdG1hcmdpbi10b3A6NXB4O1xyXG59XHJcblxyXG5oNXtcclxuXHRtYXJnaW4tdG9wOjVweDtcclxufSIsImg0IHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5oNSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/service-desc/service-desc.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/cust/service-desc/service-desc.page.ts ***!
  \**************************************************************/
/*! exports provided: ServiceDescPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDescPage", function() { return ServiceDescPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ServiceDescPage = class ServiceDescPage {
    constructor(authService, route, alertService, loadingCtrl, alertCtrl, navCtrl, popoverCtrl, router) {
        this.authService = authService;
        this.route = route;
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
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.id = this.router.getCurrentNavigation().extras.state.status.id;
                this.authService.serviceDesc(this.id).subscribe(data => {
                    console.log(data);
                    this.status = data.message;
                    if (data.response == true) {
                        this.alertService.presentToast('Ticket Details');
                    }
                    else {
                        this.alertService.presentToast(data.message);
                    }
                });
            }
        });
    }
};
ServiceDescPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ServiceDescPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-desc',
        template: __webpack_require__(/*! raw-loader!./service-desc.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/service-desc/service-desc.page.html"),
        styles: [__webpack_require__(/*! ./service-desc.page.scss */ "./src/app/pages/cust/service-desc/service-desc.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ServiceDescPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-service-desc-service-desc-module-es2015.js.map