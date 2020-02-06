(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tech-tech-login-tech-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tech/tech-login/tech-login.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tech/tech-login/tech-login.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content  class=\"animated fadeIn login auth-page ion-padding\" color=\"darkblue\">\n  <!-- <div class=\"theme-bg\"></div> -->\n  <div class=\"auth-content\">\n    <!-- Logo -->\n    <div  class=\"animated fadeInDown ion-text-center\">\n      <div>\n        <img src=\"assets/img/newlogov6.png\"/>\n      </div>\n    </div>\n    <br>\n      <div class=\"text-center\">   \n        <ion-text color=\"gold\" class=\"fw500 text12\">\n          FM ( Field Master )\n        </ion-text>\n      </div>\n    <!-- Login form -->\n    \n    <form [formGroup]=\"onTechLoginForm\" class=\"list-form\">\n      <ion-item  class=\"animated fadeInUp ion-no-padding\">\n        <ion-label position=\"floating\">\n         <ion-icon name=\"contact\"></ion-icon>\n          User Name\n        </ion-label>\n        <ion-input color=\"gold\" class=\"fw500\" type=\"text\" formControlName=\"username\" ></ion-input>\n      </ion-item>\n      \n      <ion-item  class=\"animated fadeInUp ion-no-padding\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"lock\" item-start></ion-icon>\n          Password\n        </ion-label>\n        <ion-input color=\"gold\" type=\"password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n      \n    </form>\n\n    <div>\n      <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"gold\" (click)=\"login()\" [disabled]=\"!onTechLoginForm.valid\" tappable>\n        <ion-icon name=\"log-in\"></ion-icon>\n        LOGIN\n      </ion-button>\n    <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\"></ion-icon>\n        BACK\n      </ion-button>\n    </ion-buttons>\n    </div>\n\n\n    <!-- Other links -->\n\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tech/tech-login/tech-login.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/tech/tech-login/tech-login.module.ts ***!
  \************************************************************/
/*! exports provided: TechLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechLoginPageModule", function() { return TechLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tech_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tech-login.page */ "./src/app/pages/tech/tech-login/tech-login.page.ts");







var routes = [
    {
        path: '',
        component: _tech_login_page__WEBPACK_IMPORTED_MODULE_6__["TechLoginPage"]
    }
];
var TechLoginPageModule = /** @class */ (function () {
    function TechLoginPageModule() {
    }
    TechLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tech_login_page__WEBPACK_IMPORTED_MODULE_6__["TechLoginPage"]]
        })
    ], TechLoginPageModule);
    return TechLoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tech/tech-login/tech-login.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/tech/tech-login/tech-login.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".paz {\n  position: relative;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVjaC90ZWNoLWxvZ2luL0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFx0ZWNoXFx0ZWNoLWxvZ2luXFx0ZWNoLWxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVjaC90ZWNoLWxvZ2luL3RlY2gtbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZWNoL3RlY2gtbG9naW4vdGVjaC1sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA6aG9zdCB7XHJcbi8vICAgICAvLyBpb24tY29udGVudCB7XHJcbi8vICAgICAvLyAgICAgLS1iYWNrZ3JvdW5kOiBpdm9yeTtcclxuLy8gICAgIC8vIH1cclxuLy8gfVxyXG5cclxuLnBheiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufSIsIi5wYXoge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tech/tech-login/tech-login.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/tech/tech-login/tech-login.page.ts ***!
  \**********************************************************/
/*! exports provided: TechLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechLoginPage", function() { return TechLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");







var TechLoginPage = /** @class */ (function () {
    function TechLoginPage(navCtrl, menuCtrl, toastCtrl, alertCtrl, loadingCtrl, formBuilder, authService, storage, alertService) {
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
    TechLoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    TechLoginPage.prototype.ngOnInit = function () {
        this.onTechLoginForm = this.formBuilder.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ])]
        });
    };
    TechLoginPage.prototype.login = function () {
        this.navCtrl.navigateForward('tech-home');
    };
    TechLoginPage.prototype.back = function () {
        this.navCtrl.navigateRoot('/');
    };
    TechLoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
    ]; };
    TechLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tech-login',
            template: __webpack_require__(/*! raw-loader!./tech-login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tech/tech-login/tech-login.page.html"),
            styles: [__webpack_require__(/*! ./tech-login.page.scss */ "./src/app/pages/tech/tech-login/tech-login.page.scss")]
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
    ], TechLoginPage);
    return TechLoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tech-tech-login-tech-login-module-es5.js.map