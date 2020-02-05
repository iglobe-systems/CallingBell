(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-cust-register-cust-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/cust-register/cust-register.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/cust-register/cust-register.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"login auth-page ion-padding\" color=\"darkblue\">\n\n  <div class=\"auth-content\">\n    <!-- Logo -->\n    <div class=\"text-center\">\n      <div>\n        <img src=\"assets/img/newlogov6.png\"/>\n      </div>\n    </div>\n\n     <br>\n      <div class=\"text-center\">   \n        <ion-text color=\"gold\" class=\"fw600 text10\">\n          REGISTRATION\n        </ion-text>\n      </div>\n\n    <!-- Register form -->\n    <form [formGroup]=\"onRegisterForm\" class=\"list-form\">\n      <ion-item  class=\"animated fadeInUp ion-no-padding\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"person\" item-start></ion-icon>\n          First Name\n        </ion-label>\n        <ion-input color=\"gold\" type=\"text\" class=\"fw500\" formControlName=\"first_name\" maxlength=\"60\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('first_name').touched && onRegisterForm.get('first_name').hasError('required')\">\n        <ion-text color=\"success\">\n          This field is required\n        </ion-text>\n      </p>\n      <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('first_name').touched && onRegisterForm.get('first_name').hasError('pattern')\">\n        <ion-text color=\"success\">\n          Enter a valid Name more than 3 characters\n        </ion-text>\n      </p>\n\n      <ion-item  class=\"animated fadeInUp ion-no-padding\">\n          <ion-label position=\"floating\">\n            <ion-icon name=\"person\" item-start></ion-icon>\n            Last Name\n          </ion-label>\n          <ion-input color=\"gold\" type=\"text\" class=\"fw500\" formControlName=\"last_name\" maxlength=\"60\"></ion-input>\n        </ion-item>\n        <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('last_name').touched && onRegisterForm.get('last_name').hasError('required')\">\n          <ion-text color=\"success\">\n            This field is required\n          </ion-text>\n        </p>\n        <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('last_name').touched && onRegisterForm.get('last_name').hasError('pattern')\">\n          <ion-text color=\"success\">\n            Enter a valid Name more than 2 characters\n          </ion-text>\n        </p>\n\n\n      <ion-item class=\"animated fadeInUp ion-no-padding\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"call\" mode=\"ios\" item-start></ion-icon>\n          Mobile Number\n        </ion-label>\n        <ion-input color=\"gold\" type=\"number\" class=\"fw500\" formControlName=\"phone\" maxlength=\"10\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('phone').touched && onRegisterForm.get('phone').hasError('required')\">\n        <ion-text color=\"success\">\n          Required Field\n        </ion-text>\n      </p>\n      \n\n      <ion-item class=\"animated fadeInUp ion-no-padding\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"mail\" mode=\"ios\" item-start></ion-icon>\n          Email\n        </ion-label>\n        <ion-input color=\"gold\" type=\"email\" class=\"fw500\" formControlName=\"email\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('email').touched && onRegisterForm.get('email').hasError('required')\">\n        <ion-text color=\"success\">\n          This field is required\n        </ion-text>\n      </p>\n      <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('email').touched && onRegisterForm.get('email').hasError('pattern')\">\n        <ion-text color=\"success\">\n          Enter a valid email id\n        </ion-text>\n      </p>\n    </form>\n\n    <div class=\"ion-margin-top\">\n      <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"gold\" (click)=\"signUp()\" [disabled]=\"!onRegisterForm.valid\"\n        tappable>\n        <ion-icon name=\"log-in\"></ion-icon>\n        Sign Up\n      </ion-button>\n\n    </div>\n\n    <!-- Other links -->\n    <div class=\"ion-text-center ion-margin-top\">\n      <span (click)=\"goToLogin()\" tappable>\n        <ion-text color=\"gold\">\n          <strong>I have an account!</strong>\n        </ion-text>\n      </span>\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/cust/cust-register/cust-register.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/cust/cust-register/cust-register.module.ts ***!
  \******************************************************************/
/*! exports provided: CustRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustRegisterPageModule", function() { return CustRegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cust_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cust-register.page */ "./src/app/pages/cust/cust-register/cust-register.page.ts");







var routes = [
    {
        path: '',
        component: _cust_register_page__WEBPACK_IMPORTED_MODULE_6__["CustRegisterPage"]
    }
];
var CustRegisterPageModule = /** @class */ (function () {
    function CustRegisterPageModule() {
    }
    CustRegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cust_register_page__WEBPACK_IMPORTED_MODULE_6__["CustRegisterPage"]]
        })
    ], CustRegisterPageModule);
    return CustRegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cust/cust-register/cust-register.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/cust/cust-register/cust-register.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9jdXN0LXJlZ2lzdGVyL0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0XFxjdXN0LXJlZ2lzdGVyXFxjdXN0LXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9jdXN0LXJlZ2lzdGVyL2N1c3QtcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBRUUsbUJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3QvY3VzdC1yZWdpc3Rlci9jdXN0LXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46aG9zdCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpKVxyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbiIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/cust-register/cust-register.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/cust/cust-register/cust-register.page.ts ***!
  \****************************************************************/
/*! exports provided: CustRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustRegisterPage", function() { return CustRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CustRegisterPage = /** @class */ (function () {
    function CustRegisterPage(navCtrl, menuCtrl, loadingCtrl, formBuilder, authService, alertService, router) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.alertService = alertService;
        this.router = router;
    }
    CustRegisterPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    CustRegisterPage.prototype.ngOnInit = function () {
        this.onRegisterForm = this.formBuilder.group({
            'first_name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]{3,}')
                ])],
            'last_name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-z]{2,}')
                ])],
            'phone': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15),
                ])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')
                ])],
        });
    };
    CustRegisterPage.prototype.signUp = function () {
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
                        this.authService.register(this.onRegisterForm.value).subscribe(function (data) {
                            console.log(data);
                            if (data['status'] === true) {
                                console.log(_this.onRegisterForm.value.phone);
                                _this.authService.newRequest(_this.onRegisterForm.value.phone).subscribe(function (result) {
                                    console.log(result);
                                    if (result['status'] === true) {
                                        _this.alertService.presentToast(result['message']);
                                        var navigationExtras = {
                                            state: {
                                                number: _this.onRegisterForm.value
                                            }
                                        };
                                        _this.router.navigate(['otp-form'], navigationExtras);
                                    }
                                    else {
                                        _this.alertService.presentToast(result['message']);
                                    }
                                });
                            }
                            else {
                                _this.alertService.presentToast(data['message']);
                            }
                        }, function (error) {
                            console.log(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    // // //
    CustRegisterPage.prototype.goToLogin = function () {
        this.navCtrl.navigateRoot('cust-login');
    };
    CustRegisterPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    CustRegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cust-register',
            template: __webpack_require__(/*! raw-loader!./cust-register.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/cust-register/cust-register.page.html"),
            styles: [__webpack_require__(/*! ./cust-register.page.scss */ "./src/app/pages/cust/cust-register/cust-register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], CustRegisterPage);
    return CustRegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cust-cust-register-cust-register-module-es5.js.map