(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cons-cons-home-cons-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cons/cons-home/cons-home.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cons/cons-home/cons-home.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <div class=\"header-logo-div\">\n      <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n    </div>\n    <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"logout()\" class=\"fw600\">\n        <ion-icon name=\"log-out\"></ion-icon>\n      LOGOUT\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"darkblue\">\n  <h1 class=\"fw800 text-center\">75</h1>\n  <h2 class=\"text15 fw500 text-center\">CUSTOMERS COUNT</h2>\n  <ion-button class=\"ion-margin\" shape=\"round\" expand=\"full\" color=\"gold\">PROFILE</ion-button>\n\t<ion-button class=\"ion-margin\" shape=\"round\" expand=\"full\" color=\"gold\">LEADS</ion-button>\n   <h1 class=\"fw800 text-center\">1500</h1>\n  <h2 class=\"text15 fw500 text-center\">PREVIOUS MONTH INCENTIVE</h2>\n  <ion-card class=\"ion-padding\">* To claim this incentives join 5 new customers this month </ion-card>\n\n  <h1 class=\"fw800 text-center\">2000</h1>\n  <h2 class=\"text15 fw500 text-center\">TOTAL INCENTIVES CLAIMED</h2>\n</ion-content>\n "

/***/ }),

/***/ "./src/app/pages/cons/cons-home/cons-home.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/cons/cons-home/cons-home.module.ts ***!
  \**********************************************************/
/*! exports provided: ConsHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsHomePageModule", function() { return ConsHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cons_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cons-home.page */ "./src/app/pages/cons/cons-home/cons-home.page.ts");







const routes = [
    {
        path: '',
        component: _cons_home_page__WEBPACK_IMPORTED_MODULE_6__["ConsHomePage"]
    }
];
let ConsHomePageModule = class ConsHomePageModule {
};
ConsHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cons_home_page__WEBPACK_IMPORTED_MODULE_6__["ConsHomePage"]]
    })
], ConsHomePageModule);



/***/ }),

/***/ "./src/app/pages/cons/cons-home/cons-home.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/cons/cons-home/cons-home.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: gold;\n  font-size: 100px;\n}\n\nion-card {\n  text-align: center;\n  font-size: 13px;\n  color: green;\n  text-transform: uppercase;\n}\n\n.header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.header-logo-div {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29ucy9jb25zLWhvbWUvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXGNvbnNcXGNvbnMtaG9tZVxcY29ucy1ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29ucy9jb25zLWhvbWUvY29ucy1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0Q7O0FERUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb25zL2NvbnMtaG9tZS9jb25zLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcblx0Y29sb3I6Z29sZDtcclxuXHRmb250LXNpemU6IDEwMHB4O1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGNvbG9yOmdyZWVuO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5oZWFkZXItbG9nb3tcclxuICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmhlYWRlci1sb2dvLWRpdntcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG59IiwiaDEge1xuICBjb2xvcjogZ29sZDtcbiAgZm9udC1zaXplOiAxMDBweDtcbn1cblxuaW9uLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyZWVuO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMTIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5oZWFkZXItbG9nby1kaXYge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/cons/cons-home/cons-home.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/cons/cons-home/cons-home.page.ts ***!
  \********************************************************/
/*! exports provided: ConsHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsHomePage", function() { return ConsHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");







let ConsHomePage = class ConsHomePage {
    constructor(navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl, authService, loadingCtrl, alertService, router, route, imagePicker) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertService = alertService;
        this.router = router;
        this.route = route;
        this.imagePicker = imagePicker;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.count = this.router.getCurrentNavigation().extras.state.count;
            }
        });
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(true);
    }
    consProfile() {
        this.navCtrl.navigateForward('cons-profile');
    }
    logout() {
        this.authService.logout();
        this.navCtrl.navigateRoot('/');
    }
};
ConsHomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"] }
];
ConsHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cons-home',
        template: __webpack_require__(/*! raw-loader!./cons-home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cons/cons-home/cons-home.page.html"),
        styles: [__webpack_require__(/*! ./cons-home.page.scss */ "./src/app/pages/cons/cons-home/cons-home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"]])
], ConsHomePage);



/***/ })

}]);
//# sourceMappingURL=pages-cons-cons-home-cons-home-module-es2015.js.map