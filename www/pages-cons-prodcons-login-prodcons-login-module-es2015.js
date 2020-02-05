(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cons-prodcons-login-prodcons-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cons/prodcons-login/prodcons-login.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cons/prodcons-login/prodcons-login.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"animated fadeIn login auth-page ion-padding\" color=\"light\">\n  <!-- <div class=\"theme-bg\"></div> -->\n  <div class=\"auth-content\">\n    <!-- Logo -->\n    <div class=\"animated fadeInDown ion-text-center\">\n      <div class=\"logo\"></div>\n      <!-- <h4 no-margin>\n        <ion-text color=\"light\" class=\"fw700\">\n          CALLING BELL\n        </ion-text>\n      </h4> -->\n    </div>\n    <br>\n      <div class=\"text-center\">   \n        <ion-text color=\"danger\" class=\"fw700 text12\">\n          PRODUCT CONSULTANT LOGIN\n        </ion-text>\n      </div>\n    <!-- Login form -->\n    \n    <form [formGroup]=\"onProdConsLoginForm\" class=\"list-form\">\n      <ion-item class=\"animated fadeInUp ion-no-padding \">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"call\" item-start></ion-icon>\n          Mobile Number\n        </ion-label>\n        <ion-input color=\"secondary\" class=\"fw800\" type=\"text\" formControlName=\"phone\" maxlength=\"10\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"onProdConsLoginForm.get('phone').touched && onProdConsLoginForm.get('phone').hasError('required')\">\n        <ion-text color=\"success\">\n          Required Field\n        </ion-text>\n      </p>\n      <p ion-text class=\"text08\" *ngIf=\"onProdConsLoginForm.get('phone').touched && onProdConsLoginForm.get('phone').hasError('maxLength')\">\n        <ion-text color=\"success\">\n          Enter 10 digit phone number\n        </ion-text>\n      </p>\n      <p ion-text class=\"text08\" *ngIf=\"onProdConsLoginForm.get('phone').touched && onProdConsLoginForm.get('phone').hasError('pattern')\">\n        <ion-text color=\"success\">\n          Enter 10 digit phone number\n        </ion-text>\n      </p>\n\n      <ion-item class=\"animated fadeInUp ion-no-padding \">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"lock\" item-start></ion-icon>\n          Password\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"onProdConsLoginForm.get('password').touched && onProdConsLoginForm.get('password').hasError('required')\">\n        <ion-text color=\"success\">\n          Required Field\n        </ion-text>\n        </p>\n    </form>\n\n    <!-- <p text-right tappable (click)=\"forgotPass()\" class=\"paz\">\n      <ion-text color=\"danger\">\n        <strong>Forgot Password?</strong>\n      </ion-text>\n    </p>\n\n    <p text-right tappable (click)=\"resetPass()\" class=\"paz\">\n      <ion-text color=\"danger\">\n        <strong>Reset Password</strong>\n      </ion-text>\n    </p> -->\n\n    <div>\n      <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"primary\" (click)=\"login()\" [disabled]=\"!onProdConsLoginForm.valid\" tappable>\n        <ion-icon name=\"log-in\"></ion-icon>\n        LOGIN\n      </ion-button>\n    </div>\n     <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"primary\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\"></ion-icon>\n        BACK\n      </ion-button>\n    </ion-buttons>\n\n\n    <!-- Other links -->\n    <!-- <div text-center margin-top>\n      <span (click)=\"goToRegister()\" class=\"paz\" tappable>\n        <ion-text color=\"danger\">\n          New here? <strong>Sign Up</strong>\n        </ion-text>\n      </span>\n    </div> -->\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/cons/prodcons-login/prodcons-login.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/cons/prodcons-login/prodcons-login.module.ts ***!
  \********************************************************************/
/*! exports provided: ProdconsLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdconsLoginPageModule", function() { return ProdconsLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prodcons_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prodcons-login.page */ "./src/app/pages/cons/prodcons-login/prodcons-login.page.ts");







const routes = [
    {
        path: '',
        component: _prodcons_login_page__WEBPACK_IMPORTED_MODULE_6__["ProdconsLoginPage"]
    }
];
let ProdconsLoginPageModule = class ProdconsLoginPageModule {
};
ProdconsLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_prodcons_login_page__WEBPACK_IMPORTED_MODULE_6__["ProdconsLoginPage"]]
    })
], ProdconsLoginPageModule);



/***/ }),

/***/ "./src/app/pages/cons/prodcons-login/prodcons-login.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/cons/prodcons-login/prodcons-login.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnMvcHJvZGNvbnMtbG9naW4vcHJvZGNvbnMtbG9naW4ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/cons/prodcons-login/prodcons-login.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/cons/prodcons-login/prodcons-login.page.ts ***!
  \******************************************************************/
/*! exports provided: ProdconsLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdconsLoginPage", function() { return ProdconsLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");







let ProdconsLoginPage = class ProdconsLoginPage {
    constructor(navCtrl, menuCtrl, toastCtrl, alertCtrl, loadingCtrl, formBuilder, authService, storage, alertService) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.storage = storage;
        this.alertService = alertService;
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
        this.onProdConsLoginForm = this.formBuilder.group({
            'phone': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{10}'),
                ])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ])]
        });
    }
    login() {
        console.log(this.onProdConsLoginForm.value);
        this.authService.consLogin(this.onProdConsLoginForm.value).subscribe(data => {
            console.log(data);
            if (data['response']) {
                this.authService.storeUserData(data['token'], data['user']);
                var count = data['count'];
                console.log(count);
                let navigationExtras = {
                    state: {
                        count: count
                    }
                };
                this.alertService.presentToast('Logged in successfully');
                this.navCtrl.navigateRoot('cons-home', navigationExtras);
            }
            else {
                this.alertService.presentToast(data['message']);
                return false;
            }
        });
    }
    back() {
        this.navCtrl.navigateBack('cons-start');
    }
};
ProdconsLoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
ProdconsLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prodcons-login',
        template: __webpack_require__(/*! raw-loader!./prodcons-login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cons/prodcons-login/prodcons-login.page.html"),
        styles: [__webpack_require__(/*! ./prodcons-login.page.scss */ "./src/app/pages/cons/prodcons-login/prodcons-login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
], ProdconsLoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-cons-prodcons-login-prodcons-login-module-es2015.js.map