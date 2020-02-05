(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-reset-password-reset-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/reset-password/reset-password.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/reset-password/reset-password.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"login auth-page\">\n\n  <div class=\"auth-content\">\n    <!-- Logo -->\n    <div padding-horizontal text-center>\n      <div class=\"logo\"></div>\n      <h4 no-margin>\n        <ion-text color=\"danger\" class=\"fw700\">\n          <ion-text color=\"danger\">RESET PASSWORD</ion-text>\n        </ion-text>\n      </h4>\n    </div>\n\n    <!-- Register form -->\n    <form [formGroup]=\"onResetForm\" class=\"list-form\">\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"call\" item-start></ion-icon>\n          Mobile Number\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"text\" formControlName=\"phone\" maxlength=\"10\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\"\n        *ngIf=\"onResetForm.get('phone').touched && onResetForm.get('phone').hasError('required')\">\n        <ion-text color=\"warning\">\n          This field is required\n        </ion-text>\n      </p>\n\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"lock\" item-start></ion-icon>\n          New Password\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"password\" formControlName=\"password\" maxlength=\"20\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\"\n        *ngIf=\"onResetForm.get('password').touched && onResetForm.get('password').hasError('required')\">\n        <ion-text color=\"warning\">\n          This field is required\n        </ion-text>\n      </p>\n\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"lock\" item-start></ion-icon>\n          Confirm New Password\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"password\" formControlName=\"confirmpassword\" maxlength=\"20\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\"\n        *ngIf=\"onResetForm.get('confirmpassword').touched && onResetForm.get('confirmpassword').hasError('required')\">\n        <ion-text color=\"warning\">\n          This field is required\n        </ion-text>\n      </p>\n      <p ion-text class=\"text08\"\n        *ngIf=\"onResetForm.get('password').value !== onResetForm.get('confirmpassword').value\">\n        <ion-text color=\"warning\">\n          Both passwords mismatch\n        </ion-text>\n      </p>\n\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"unlock\" item-start></ion-icon>\n          OTP\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"code\" formControlName=\"code\" maxlength=\"6\"></ion-input>\n      </ion-item>\n      <p ion-text color=\"warning\" class=\"text08\"\n        *ngIf=\"onResetForm.get('code').touched && onResetForm.get('code').hasError('required')\">\n        <ion-text color=\"warning\">\n          This field is required\n        </ion-text>\n      </p>\n\n    </form>\n\n    <div margin-top>\n      <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"primary\" (click)=\"resetPassword()\"\n        [disabled]=\"!onResetForm.valid\" tappable>\n        <ion-icon name=\"log-in\"></ion-icon>\n        Reset Password\n      </ion-button>\n    </div>\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span (click)=\"goToLogin()\" tappable>\n        <ion-text color=\"danger\">\n          <strong>Back</strong>\n        </ion-text>\n      </span>\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/cust/reset-password/reset-password.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/cust/reset-password/reset-password.module.ts ***!
  \********************************************************************/
/*! exports provided: ResetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password.page */ "./src/app/pages/cust/reset-password/reset-password.page.ts");







var routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]
    }
];
var ResetPasswordPageModule = /** @class */ (function () {
    function ResetPasswordPageModule() {
    }
    ResetPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]]
        })
    ], ResetPasswordPageModule);
    return ResetPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cust/reset-password/reset-password.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/cust/reset-password/reset-password.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: ivory;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9yZXNldC1wYXNzd29yZC9EOlxcUmlhelxcTmV3QVBLXFxOZXdBUEt2MC4xL3NyY1xcYXBwXFxwYWdlc1xcY3VzdFxccmVzZXQtcGFzc3dvcmRcXHJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBpdm9yeTtcclxuICB9XHJcbn1cclxuXHJcbiIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBpdm9yeTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/reset-password/reset-password.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/cust/reset-password/reset-password.page.ts ***!
  \******************************************************************/
/*! exports provided: ResetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function() { return ResetPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");






var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(navCtrl, menuCtrl, loadingCtrl, formBuilder, authService, alertService) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.alertService = alertService;
    }
    ResetPasswordPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    ResetPasswordPage.prototype.ngOnInit = function () {
        this.onResetForm = this.formBuilder.group({
            'phone': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10}')
                ])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ])],
            'confirmpassword': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ])],
            'code': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{6}')
                ])],
        });
    };
    ResetPasswordPage.prototype.resetPassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            duration: 1000
                        })];
                    case 1:
                        loader = _a.sent();
                        this.authService.resetPassword(this.onResetForm.value).subscribe(function (response) {
                            if (response['response']) {
                                _this.alertService.presentToast(response['message']);
                                _this.navCtrl.navigateRoot('cust-login');
                            }
                            else {
                                _this.alertService.presentToast(response['message']);
                            }
                        });
                        console.log(this.onResetForm.value);
                        return [2 /*return*/];
                }
            });
        });
    };
    ResetPasswordPage.prototype.goToLogin = function () {
        this.navCtrl.navigateRoot('cust-login');
    };
    ResetPasswordPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
    ]; };
    ResetPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! raw-loader!./reset-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/reset-password/reset-password.page.html"),
            styles: [__webpack_require__(/*! ./reset-password.page.scss */ "./src/app/pages/cust/reset-password/reset-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cust-reset-password-reset-password-module-es5.js.map