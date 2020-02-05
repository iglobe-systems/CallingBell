(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-edit-profile-edit-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/edit-profile/edit-profile.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/edit-profile/edit-profile.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n<ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n     <div class=\"logo-in\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile\" *ngFor=\"let user of user\">\n  <ion-card class=\"ion-no-margin\">\n    <ion-card-content class=\"bg-profile\">\n      <ion-title>EDIT PROFILE</ion-title>\n      <img src=\"assets/img/avatar.png\">\n      <h1 class=\"fw500\">{{user.fullname}}</h1>\n      <h2 color=\"light\" class=\"ion-margin-bottom\">{{user.phone}}</h2>\n      <h3 color=\"light\">{{user.email}}</h3>\n    </ion-card-content>\n  \n    <form [formGroup]=\"onUpdateForm\" class=\"list-form\" padding>\n\n      <ion-item  class=\"animated fadeInUp ion-no-padding\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"person\" item-start></ion-icon>\n          Occupation\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"text\" formControlName=\"occupation\" placeholder=\"{{user.occupation}}\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"animated fadeInUp ion-no-padding\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"person\" item-start></ion-icon>\n          Date Of Birth\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"date\" formControlName=\"dob\" placeholder=\"{{user.dob}}\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"animated fadeInUp ion-no-padding\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"person\" item-start></ion-icon>\n          Street Name\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"text\" formControlName=\"street\" placeholder=\"{{user.street}}\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"animated fadeInUp ion-no-padding\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"call\" item-start></ion-icon>\n          City \n        </ion-label>\n        <ion-input color=\"secondary\" type=\"text\" formControlName=\"city\" placeholder=\"{{user.city}}\"></ion-input>\n      </ion-item>\n      \n      <ion-item class=\"animated fadeInUp ion-no-padding\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"mail\" item-start></ion-icon>\n          State\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"text\" formControlName=\"state\" placeholder=\"{{user.state}}\"></ion-input>\n      </ion-item>\n      \n\n      <ion-item class=\"animated fadeInUp ion-no-padding\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"lock\" item-start></ion-icon>\n          Zipcode\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"number\" formControlName=\"zip\" placeholder=\"{{user.zip}}\"></ion-input>\n      </ion-item>\n    </form>\n    <div class=\"text-center\">\n    <ion-button shape=\"round\" color=\"dark\" (click)=\"updateUserProfile()\" class=\"ion-margin\">Update Profile</ion-button>\n    </div>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/edit-profile/edit-profile.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/cust/edit-profile/edit-profile.module.ts ***!
  \****************************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/pages/cust/edit-profile/edit-profile.page.ts");







const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]
    }
];
let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
    })
], EditProfilePageModule);



/***/ }),

/***/ "./src/app/pages/cust/edit-profile/edit-profile.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/cust/edit-profile/edit-profile.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: red;\n}\n\n.profile ion-card {\n  width: 100%;\n  border-radius: 0;\n  background-color: #fff;\n}\n\n.profile ion-card ion-card-content {\n  padding: 32px;\n  background-color: #1e7ebd;\n  color: #fff;\n  text-align: center;\n}\n\n.profile ion-card ion-card-content img {\n  height: 128px;\n  width: 128px;\n  border-radius: 50%;\n  border: solid 4px #fff;\n  display: inline;\n  box-shadow: 0 0 28px rgba(255, 255, 255, 0.65);\n}\n\n.profile ion-card ion-card-content h1 {\n  margin-top: 0.5rem;\n}\n\n.profile ion-item ion-input {\n  border-bottom: 1px solid var(--ion-color-tertiary);\n}\n\n.profile ion-buttom button {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9lZGl0LXByb2ZpbGUvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXGN1c3RcXGVkaXQtcHJvZmlsZVxcZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0FDQUo7O0FES0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0ZKOztBREdJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRE47O0FER007RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsOENBQUE7QUNEUjs7QURJTTtFQUNFLGtCQUFBO0FDRlI7O0FEUUk7RUFDRSxrREFBQTtBQ05OOztBRFdJO0VBQ0UsU0FBQTtBQ1ROIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdC9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJlZDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9maWxlIHtcclxuICBpb24tY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDMycHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTdlYmQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICAgICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDRweCAjZmZmO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMjhweCByZ2JhKDI1NSwyNTUsMjU1LCAuNjUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbSB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5wcm9maWxlIGlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ucHJvZmlsZSBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlN2ViZDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9maWxlIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW1nIHtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgd2lkdGg6IDEyOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogc29saWQgNHB4ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgYm94LXNoYWRvdzogMCAwIDI4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KTtcbn1cbi5wcm9maWxlIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaDEge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4ucHJvZmlsZSBpb24taXRlbSBpb24taW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cbi5wcm9maWxlIGlvbi1idXR0b20gYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/cust/edit-profile/edit-profile.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/cust/edit-profile/edit-profile.page.ts ***!
  \**************************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let EditProfilePage = class EditProfilePage {
    constructor(navCtrl, loadingCtrl, toastCtrl, authService, alertService, alertCtrl, formBuilder, router) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ngOnInit() {
        //this.getProfile();
        this.getUser();
        this.onUpdateForm = this.formBuilder.group({
            'occupation': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                ])],
            'dob': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                ])],
            'street': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                ])],
            'city': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                ])],
            'state': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                ])],
            'zip': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                ])],
            'country': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                ])]
        });
    }
    // getProfile(){
    //   this.authService.editProfile().subscribe(data =>{
    //     console.log(data);
    //     this.user = data;
    //   });
    // }
    getUser() {
        this.authService.getUserProfile().subscribe(data => {
            console.log(data);
            this.user = data.message;
        });
    }
    updateUserProfile() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create({
                duration: 1000
            });
            this.authService.updateUser(this.onUpdateForm.value).subscribe(data => {
                console.log(data);
                if (data['response']) {
                    this.navCtrl.navigateRoot('home-results');
                }
                else {
                    this.alertService.presentToast(data['message']);
                }
            }, error => {
                console.log(error);
            });
        });
    }
};
EditProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: __webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/edit-profile/edit-profile.page.html"),
        styles: [__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/pages/cust/edit-profile/edit-profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], EditProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-edit-profile-edit-profile-module-es2015.js.map