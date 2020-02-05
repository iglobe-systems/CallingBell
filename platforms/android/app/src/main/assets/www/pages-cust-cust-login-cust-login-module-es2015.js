(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-cust-login-cust-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/cust-login/cust-login.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/cust-login/cust-login.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content  class=\"animated fadeIn login auth-page ion-padding\" color=\"darkblue\">\n  <div class=\"auth-content\">\n    <div  class=\"animated fadeInDown ion-text-center\">\n      <!-- <div class=\"logo\"></div> -->\n      <div>\n          <img src=\"assets/img/newlogov6.png\"/>\n        </div>\n    </div>\n    <br>\n    <br>\n      <div class=\"text-center\">   \n        <ion-text color=\"gold\" class=\"fw600 text10\">  \n          USER LOGIN\n        </ion-text>\n      </div>\n    <!-- Login form -->\n    \n    <form [formGroup]=\"onLoginForm\" class=\"list-form\">\n      <ion-item  class=\"animated fadeInUp ion-no-padding\">\n        <ion-label position=\"floating\" class=\"fw600\" color=\"light\">\n          <ion-icon name=\"call\" item-start></ion-icon>\n          Mobile Number\n        </ion-label>\n        <ion-input class=\"fw600\" type=\"number\" formControlName=\"phone\" maxlength=\"15\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"onLoginForm.get('phone').touched && onLoginForm.get('phone').hasError('required')\">\n        <ion-text color=\"palegreen\">\n          Required Field\n        </ion-text>\n      </p>\n      <p ion-text class=\"text08\" *ngIf=\"onLoginForm.get('phone').touched && onLoginForm.get('phone').hasError('maxLength')\">\n        <ion-text color=\"palegreen\">\n          Enter 10 digit phone number\n        </ion-text>\n      </p>\n    </form>\n\n    <br>\n    <div>\n      <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"gold\" (click)=\"login()\" [disabled]=\"!onLoginForm.valid\" tappable>\n        <ion-icon name=\"log-in\"></ion-icon>\n        GET OTP\n      </ion-button>\n    </div>\n\n\n    <!-- Other links -->\n    <div class=\"ion-text-center ion-margin-top\">\n      <span (click)=\"goToRegister()\" class=\"paz\" tappable>\n        <ion-text color=\"light\">\n          New here? <strong>Sign Up</strong>\n        </ion-text>\n      </span>\n    <span>\n    <ion-buttons slot=\"start\">\n      <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\"></ion-icon>\n        BACK\n      </ion-button>\n    </ion-buttons>\n    </span>\n    </div>\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n        <ion-fab-button color=\"gold\" (click)=\"callSupport()\" size=\"small\"><ion-icon name=\"ios-call\"></ion-icon></ion-fab-button>\n    </ion-fab>      \n    \n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/cust-login/cust-login.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/cust/cust-login/cust-login.module.ts ***!
  \************************************************************/
/*! exports provided: CustLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustLoginPageModule", function() { return CustLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cust_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cust-login.page */ "./src/app/pages/cust/cust-login/cust-login.page.ts");







const routes = [
    {
        path: '',
        component: _cust_login_page__WEBPACK_IMPORTED_MODULE_6__["CustLoginPage"]
    }
];
let CustLoginPageModule = class CustLoginPageModule {
};
CustLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cust_login_page__WEBPACK_IMPORTED_MODULE_6__["CustLoginPage"]]
    })
], CustLoginPageModule);



/***/ }),

/***/ "./src/app/pages/cust/cust-login/cust-login.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/cust/cust-login/cust-login.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".paz {\n  position: relative;\n  z-index: 10;\n  margin: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9jdXN0LWxvZ2luL0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0XFxjdXN0LWxvZ2luXFxjdXN0LWxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9jdXN0LWxvZ2luL2N1c3QtbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdC9jdXN0LWxvZ2luL2N1c3QtbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5wYXoge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBtYXJnaW46MSU7XHJcbn1cclxuXHJcbiIsIi5wYXoge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwO1xuICBtYXJnaW46IDElO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/cust/cust-login/cust-login.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/cust/cust-login/cust-login.page.ts ***!
  \**********************************************************/
/*! exports provided: CustLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustLoginPage", function() { return CustLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let CustLoginPage = class CustLoginPage {
    constructor(navCtrl, menuCtrl, toastCtrl, alertCtrl, loadingCtrl, formBuilder, authService, storage, alertService, router) {
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
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
        this.onLoginForm = this.formBuilder.group({
            'phone': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15),
                ])],
        });
    }
    forgotPass() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Forgot Password?',
                message: 'Enter your registered mobile number.',
                inputs: [
                    {
                        name: 'phone',
                        type: 'text',
                        placeholder: 'Mobile Number'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Confirm',
                        handler: (alertData) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            const loader = yield this.loadingCtrl.create({
                                duration: 1000
                            });
                            loader.present();
                            loader.onWillDismiss().then((l) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                console.log(alertData.phone);
                                this.authService.sendCode(alertData.phone).subscribe(result => {
                                    if (result['response']) {
                                        console.log(result);
                                        this.alertService.presentToast(result['message']);
                                    }
                                    else {
                                        console.log(result);
                                        this.alertService.presentToast(result['message']);
                                    }
                                });
                                // const toast = await this.toastCtrl.create({
                                //   showCloseButton: true,
                                //   message: 'Email was sended successfully.',
                                //   duration: 3000,
                                //   position: 'bottom'
                                // });
                                // toast.present();
                            }));
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    // // //
    goToRegister() {
        this.navCtrl.navigateRoot('cust-register');
    }
    resetPass() {
        this.navCtrl.navigateRoot('reset-password');
    }
    login() {
        // console.log(this.onLoginForm.value);
        this.authService.otpRequest(this.onLoginForm.value).subscribe(data => {
            console.log(data);
            if (data['status'] == true) {
                this.alertService.presentToast(data['message']);
                // this.authService.storeUserData(data['token'], data['user']);
                // this.storage.setItem('user',{
                //   token : data['token']
                // }).then(()=>{
                //   this.navCtrl.navigateRoot('cust-home');
                // })
                // this.navCtrl.navigateRoot('cust-home');
                let number = this.onLoginForm.value;
                let navigationExtras = {
                    state: {
                        number: number
                    }
                };
                this.router.navigate(['otp-form'], navigationExtras);
                console.log(number);
            }
            else {
                this.alertService.presentToast('Login error ! Riaz will take care!');
                return false;
            }
        });
    }
    back() {
        this.navCtrl.navigateRoot('/');
    }
    callSupport() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'CALL FOR ASSISTANCE',
                message: 'Enter your mobile number.',
                inputs: [
                    {
                        name: 'phone',
                        type: 'number',
                        placeholder: 'Mobile Number'
                    }
                ],
                buttons: [
                    {
                        text: 'Confirm',
                        handler: (alertData) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            const loader = yield this.loadingCtrl.create({
                                duration: 1000
                            });
                            loader.present();
                            loader.onWillDismiss().then((l) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                console.log(alertData.phone);
                                this.alertService.presentToast("Our Customer Relationship Executive will reach you!");
                            }));
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
};
CustLoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
CustLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cust-login',
        template: __webpack_require__(/*! raw-loader!./cust-login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/cust-login/cust-login.page.html"),
        styles: [__webpack_require__(/*! ./cust-login.page.scss */ "./src/app/pages/cust/cust-login/cust-login.page.scss")]
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
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], CustLoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-cust-login-cust-login-module-es2015.js.map