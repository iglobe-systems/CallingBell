(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-otp-form-otp-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/otp-form/otp-form.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/otp-form/otp-form.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content class=\"animated fadeIn login auth-page ion-padding\" color=\"darkblue\">\n  <div class=\"auth-content\">\n      <div  class=\"animated fadeInDown ion-text-center\">\n        <!-- <div class=\"logo\"></div> -->\n        <div>\n            <img src=\"assets/img/newlogov6.png\"/>\n          </div>\n      </div>\n      <br>\n      <br>\n        <div class=\"ion-text-center\">   \n          <ion-text color=\"light\" class=\"fw400 text10\" *ngIf=\"this.number\">  \n            Enter 4 digit OTP sent to your mobile number <br>{{this.number.phone}}\n          </ion-text>\n          <br> <br>\n          <form [formGroup]=\"onOtpForm\">\n              <ion-input class=\"fw600\" type=\"text\" formControlName=\"otp\" maxlength=\"6\" class=\"otp-box\"></ion-input>\n          </form>\n          <br>\n          <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"gold\" (click)=\"verifyOtp()\" [disabled]=\"!onOtpForm.valid\" tappable>\n              <ion-icon name=\"log-in\"></ion-icon>\n              VERIFY OTP\n          </ion-button>\n        </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/otp-form/otp-form.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/cust/otp-form/otp-form.module.ts ***!
  \********************************************************/
/*! exports provided: OtpFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpFormPageModule", function() { return OtpFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _otp_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otp-form.page */ "./src/app/pages/cust/otp-form/otp-form.page.ts");







const routes = [
    {
        path: '',
        component: _otp_form_page__WEBPACK_IMPORTED_MODULE_6__["OtpFormPage"]
    }
];
let OtpFormPageModule = class OtpFormPageModule {
};
OtpFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_otp_form_page__WEBPACK_IMPORTED_MODULE_6__["OtpFormPage"]]
    })
], OtpFormPageModule);



/***/ }),

/***/ "./src/app/pages/cust/otp-form/otp-form.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/cust/otp-form/otp-form.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".otp-box {\n  border: 1px solid #ffad00;\n  border-radius: 10px;\n  letter-spacing: 20px;\n  font-size: 20px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9vdHAtZm9ybS9EOlxcUmlhelxcTmV3QVBLXFxOZXdBUEt2MC4xL3NyY1xcYXBwXFxwYWdlc1xcY3VzdFxcb3RwLWZvcm1cXG90cC1mb3JtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9vdHAtZm9ybS9vdHAtZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3Qvb3RwLWZvcm0vb3RwLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm90cC1ib3h7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZhZDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSIsIi5vdHAtYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmYWQwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/otp-form/otp-form.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/cust/otp-form/otp-form.page.ts ***!
  \******************************************************/
/*! exports provided: OtpFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpFormPage", function() { return OtpFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let OtpFormPage = class OtpFormPage {
    constructor(navCtrl, menuCtrl, toastCtrl, alertCtrl, loadingCtrl, formBuilder, authService, storage, alertService, router, route) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.storage = storage;
        this.alertService = alertService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.getNumber();
        this.onOtpForm = this.formBuilder.group({
            'otp': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6),
                ])],
        });
    }
    getNumber() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.number = this.router.getCurrentNavigation().extras.state.number;
                console.log(this.number);
            }
        });
    }
    verifyOtp() {
        let phone = this.number.phone;
        let otp = this.onOtpForm.value.otp;
        this.authService.verifyOtp(phone, otp).subscribe(result => {
            if (result['status'] == true) {
                console.log(result);
                console.log(result['data'].api_key);
                this.storage.setItem('user', {
                    token: result['data'].api_key,
                    phone: result['data'].phone,
                    user_id: result['data'].user_id,
                    email: result['data'].email
                }).then(() => {
                    this.navCtrl.navigateRoot('cust-home');
                });
            }
            else {
                this.alertService.presentToast(result['message']);
            }
        });
    }
};
OtpFormPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
OtpFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-otp-form',
        template: __webpack_require__(/*! raw-loader!./otp-form.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/otp-form/otp-form.page.html"),
        styles: [__webpack_require__(/*! ./otp-form.page.scss */ "./src/app/pages/cust/otp-form/otp-form.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], OtpFormPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-otp-form-otp-form-module-es2015.js.map