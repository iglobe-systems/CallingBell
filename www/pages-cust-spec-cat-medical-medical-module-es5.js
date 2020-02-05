(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-medical-medical-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/medical/medical.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/medical/medical.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-buttons>\n      <div>\n        <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n      </div>\n         <ion-buttons slot=\"end\">\n          <ion-button shape=\"round\" (click)=\"back()\">\n            <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"bg\">\n    <h4>health is not valued <br>till sickness comes</h4>\n    </div>\n  <div *ngFor=\"let service of medicalservices\"  class=\"size\">\n    <div class=\"flex\">\n      <img src=\"{{service.image_url}}\" class=\"service-img\"/>\n      <h5>{{service.name}}</h5>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/medical/medical.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/medical/medical.module.ts ***!
  \***************************************************************/
/*! exports provided: MedicalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalPageModule", function() { return MedicalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _medical_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medical.page */ "./src/app/pages/cust/spec-cat/medical/medical.page.ts");







var routes = [
    {
        path: '',
        component: _medical_page__WEBPACK_IMPORTED_MODULE_6__["MedicalPage"]
    }
];
var MedicalPageModule = /** @class */ (function () {
    function MedicalPageModule() {
    }
    MedicalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_medical_page__WEBPACK_IMPORTED_MODULE_6__["MedicalPage"]]
        })
    ], MedicalPageModule);
    return MedicalPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/medical/medical.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/medical/medical.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.size {\n  display: inline-block;\n  width: 29%;\n  background-color: #e4f7ff;\n  text-align: center;\n  margin: 2%;\n  height: 120px;\n}\n\n.service-img {\n  width: 40px;\n  height: 40px;\n  border-radius: 5px;\n  margin: 10px auto;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nh5 {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 12px;\n}\n\n.bg {\n  background: url('2.jpg') no-repeat center center/cover;\n}\n\nh4 {\n  text-transform: uppercase;\n  margin: 0;\n  padding: 10%;\n  color: snow;\n  font-size: 1.5rem;\n  text-shadow: 2px 2px black;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9tZWRpY2FsL0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0XFxzcGVjLWNhdFxcbWVkaWNhbFxcbWVkaWNhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvbWVkaWNhbC9tZWRpY2FsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0MscUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNHLFVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQztFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NGOztBREVDO0VBQ0MseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVDO0VBQ0Usc0RBQUE7QUNDSDs7QURFQztFQUNFLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNDSCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvbWVkaWNhbC9tZWRpY2FsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbG9nb3tcclxuICB3aWR0aDoxMjBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uc2l6ZXtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6MjklOyAgLy9kZWZhdWx0IC0gNDYlXHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2U0ZjdmZjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgaGVpZ2h0OjEyMHB4O1xyXG59XHJcblxyXG4gIC5zZXJ2aWNlLWltZ3tcclxuICAgIHdpZHRoOjQwcHg7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgfVxyXG5cclxuIC5mbGV4e1xyXG4gXHRkaXNwbGF5OiBmbGV4O1xyXG4gXHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiB9XHJcblxyXG4gaDV7XHJcbiBcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiBcdG1hcmdpbjoxMHB4O1xyXG4gXHRmb250LXNpemU6IDEycHg7XHJcbiB9XHJcblxyXG4gLmJne1xyXG4gICBiYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWcvYmcvMi5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xyXG4gfVxyXG5cclxuIGg0e1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICBtYXJnaW46IDA7XHJcbiAgIHBhZGRpbmc6IDEwJTtcclxuICAgY29sb3I6IHNub3c7XHJcbiAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICB0ZXh0LXNoYWRvdzogMnB4IDJweCBibGFjaztcclxuICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gfSIsIi5oZWFkZXItbG9nbyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnNpemUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyOSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGY3ZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyJTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLnNlcnZpY2UtaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oNSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYmcge1xuICBiYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWcvYmcvMi5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xufVxuXG5oNCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTAlO1xuICBjb2xvcjogc25vdztcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtc2hhZG93OiAycHggMnB4IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/medical/medical.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/medical/medical.page.ts ***!
  \*************************************************************/
/*! exports provided: MedicalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalPage", function() { return MedicalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var MedicalPage = /** @class */ (function () {
    function MedicalPage(authService, alertService, loadingCtrl, alertCtrl, navCtrl, popoverCtrl, router) {
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.router = router;
        this.medicalservices = [
            { id: 25, name: "Doctor on call", image_url: "assets/img/flaticon/medical/chat.png" },
            { id: 25, name: "second opinion", image_url: "assets/img/flaticon/medical/doctor.png" },
            { id: 25, name: "area specialist", image_url: "assets/img/flaticon/medical/stethoscope.png" },
            { id: 25, name: "medicines purchase", image_url: "assets/img/flaticon/medical/pills.png" },
            { id: 25, name: "diagnostic centers", image_url: "assets/img/flaticon/medical/medical-record.png" },
            { id: 25, name: "remainders", image_url: "assets/img/flaticon/medical/checkup.png" },
        ];
    }
    MedicalPage.prototype.ngOnInit = function () {
    };
    MedicalPage.prototype.back = function () {
        this.navCtrl.navigateBack('cust-home');
    };
    MedicalPage.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    MedicalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medical',
            template: __webpack_require__(/*! raw-loader!./medical.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/medical/medical.page.html"),
            styles: [__webpack_require__(/*! ./medical.page.scss */ "./src/app/pages/cust/spec-cat/medical/medical.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], MedicalPage);
    return MedicalPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-medical-medical-module-es5.js.map