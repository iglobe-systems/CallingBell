(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-cust-profile-cust-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/cust-profile/cust-profile.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/cust-profile/cust-profile.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n<ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n       <div class=\"logo-in\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile\" *ngFor=\"let user of user\">\n  <ion-card class=\"ion-no-margin\">\n    <ion-card-content color=\"dark\">\n      <ion-title>PROFILE</ion-title>\n      <img src=\"http://vaccrm.com/iglobe/{{image}}\">\n      <h1 class=\"fw500\">{{user.fullname}}</h1>\n      <h2 color=\"light\" margin-bottom>{{user.phone}}</h2>\n      <h3 color=\"light\">{{user.email}}</h3>\n      <div class=\"text-center\">\n    <ion-button shape=\"round\" color=\"light\" (click)=\"changePass()\" class=\"ion-margin\">Change Password</ion-button>\n    </div>\n    </ion-card-content>\n    <ion-row>\n    \t<ion-col><h5 class=\"fw500\">OCCUPATION</h5></ion-col>\n    \t<ion-col><h4 class=\"fw800\">{{user.occupation}}</h4></ion-col>\n    </ion-row>\n    <ion-row>\n    \t<ion-col><h5 class=\"fw500\">DATE OF BIRTH</h5></ion-col>\n    \t<ion-col><h4 class=\"fw800\">{{user.dob}}</h4></ion-col>\n    </ion-row>\n    <ion-row>\n    \t<ion-col><h5 class=\"fw500\">COMPLETE ADDRESS</h5></ion-col>\n    \t<ion-col><h4 class=\"fw800\">{{user.street}}</h4></ion-col>\n    </ion-row>\n    <ion-row>\n    \t<ion-col><h5 class=\"fw500\">CITY</h5></ion-col>\n    \t<ion-col><h4 class=\"fw800\">{{user.city}}</h4></ion-col>\n    </ion-row>\n    <ion-row>\n    \t<ion-col><h5 class=\"fw500\">STATE</h5></ion-col>\n    \t<ion-col><h4 class=\"fw800\">{{user.state}}</h4></ion-col>\n    </ion-row>\n    <ion-row>\n    \t<ion-col><h5 class=\"fw500\">POSTAL CODE</h5></ion-col>\n    \t<ion-col><h4 class=\"fw800\">{{user.zip}}</h4></ion-col>\n    </ion-row>\n    \n      \n    <div class=\"text-center\">\n    <ion-button shape=\"round\" color=\"dark\" (click)=\"editProfile()\" class=\"ion-margin\">Edit Profile</ion-button>\n    </div>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/cust/cust-profile/cust-profile.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/cust/cust-profile/cust-profile.module.ts ***!
  \****************************************************************/
/*! exports provided: CustProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustProfilePageModule", function() { return CustProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cust_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cust-profile.page */ "./src/app/pages/cust/cust-profile/cust-profile.page.ts");







const routes = [
    {
        path: '',
        component: _cust_profile_page__WEBPACK_IMPORTED_MODULE_6__["CustProfilePage"]
    }
];
let CustProfilePageModule = class CustProfilePageModule {
};
CustProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cust_profile_page__WEBPACK_IMPORTED_MODULE_6__["CustProfilePage"]]
    })
], CustProfilePageModule);



/***/ }),

/***/ "./src/app/pages/cust/cust-profile/cust-profile.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/cust/cust-profile/cust-profile.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: red;\n}\n\n.profile ion-card {\n  width: 100%;\n  border-radius: 0;\n  background-color: #fff;\n}\n\n.profile ion-card ion-card-content {\n  padding: 32px;\n  background-color: #2daad0;\n  color: #fff;\n  text-align: center;\n}\n\n.profile ion-card ion-card-content img {\n  height: 128px;\n  width: 128px;\n  border-radius: 50%;\n  border: solid 4px #fff;\n  display: inline;\n  box-shadow: 0 0 28px rgba(255, 255, 255, 0.65);\n}\n\n.profile ion-card ion-card-content h1 {\n  margin-top: 0.5rem;\n}\n\n.profile ion-item ion-input {\n  border-bottom: 1px solid var(--ion-color-tertiary);\n}\n\n.profile ion-buttom button {\n  margin: 0;\n}\n\n.profile h5 {\n  color: black;\n  font-size: 12px;\n  margin-left: 10%;\n}\n\n.profile h4 {\n  color: red;\n  font-size: 16px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9jdXN0LXByb2ZpbGUvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXGN1c3RcXGN1c3QtcHJvZmlsZVxcY3VzdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9jdXN0LXByb2ZpbGUvY3VzdC1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0FDQUo7O0FES0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0ZKOztBREdJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRE47O0FERU07RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsOENBQUE7QUNBUjs7QURHTTtFQUNFLGtCQUFBO0FDRFI7O0FET0k7RUFDRSxrREFBQTtBQ0xOOztBRFVJO0VBQ0UsU0FBQTtBQ1JOOztBRFlFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1ZKOztBRGFFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdC9jdXN0LXByb2ZpbGUvY3VzdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJlZDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9maWxlIHtcclxuICBpb24tY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDMycHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZGFhZDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjhweDtcclxuICAgICAgICB3aWR0aDogMTI4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgNHB4ICNmZmY7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAyOHB4IHJnYmEoMjU1LDI1NSwyNTUsIC42NSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9tIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGg1e1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIH1cclxuXHJcbiAgaDR7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmVkO1xufVxuXG4ucHJvZmlsZSBpb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnByb2ZpbGUgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDMycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZGFhZDA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZmlsZSBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGltZyB7XG4gIGhlaWdodDogMTI4cHg7XG4gIHdpZHRoOiAxMjhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IHNvbGlkIDRweCAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAyOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSk7XG59XG4ucHJvZmlsZSBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGgxIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLnByb2ZpbGUgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG4ucHJvZmlsZSBpb24tYnV0dG9tIGJ1dHRvbiB7XG4gIG1hcmdpbjogMDtcbn1cbi5wcm9maWxlIGg1IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4ucHJvZmlsZSBoNCB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/cust-profile/cust-profile.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/cust/cust-profile/cust-profile.page.ts ***!
  \**************************************************************/
/*! exports provided: CustProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustProfilePage", function() { return CustProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let CustProfilePage = class CustProfilePage {
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
        this.getUser();
    }
    getUser() {
        this.authService.getUserProfile().subscribe(data => {
            console.log(data);
            this.user = data.message;
            this.image = data.image[0].image;
        });
    }
    editProfile() {
        this.navCtrl.navigateForward('edit-profile');
    }
    changePass() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const changePass = yield this.alertCtrl.create({
                header: 'Enter Your Old & New Password',
                // message: 'Enter your Support Query below',
                inputs: [
                    {
                        name: 'oldpass',
                        placeholder: 'Old Password',
                        type: 'password'
                    },
                    {
                        name: 'newpass',
                        placeholder: 'New Password',
                        type: 'password'
                    },
                    {
                        name: 'confirmnewpass',
                        placeholder: 'Confirm New Password',
                        type: 'password'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'submit',
                        handler: (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            if (data.newpass == data.confirmnewpass) {
                                const loader = yield this.loadingCtrl.create({
                                    duration: 1000
                                });
                                loader.present();
                                loader.onWillDismiss().then((l) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                    console.log(data);
                                    this.authService.changePass(data).subscribe(result => {
                                        if (result['response']) {
                                            console.log(result);
                                            this.alertService.presentToast(result['message']);
                                        }
                                        else {
                                            console.log(result);
                                            this.alertService.presentToast(result['message']);
                                        }
                                    });
                                }));
                            }
                            else {
                                this.alertService.presentToast('New password does not match!');
                            }
                        })
                    }
                ]
            });
            changePass.present();
        });
    }
};
CustProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CustProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cust-profile',
        template: __webpack_require__(/*! raw-loader!./cust-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/cust-profile/cust-profile.page.html"),
        styles: [__webpack_require__(/*! ./cust-profile.page.scss */ "./src/app/pages/cust/cust-profile/cust-profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], CustProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-cust-profile-cust-profile-module-es2015.js.map