(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-other-services-other-services-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/other-services/other-services.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/other-services/other-services.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n         \n    <div>\n      <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n    </div>\n         <ion-buttons slot=\"end\">\n      <ion-button shape=\"round\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h4>hiring services</h4>\n  <div *ngFor=\"let service of otherServices\"  class=\"size\">\n    <div class=\"flex\">\n      <img src=\"{{service.img_m}}\" onError=\"this.src='http://apiv1.iglobesystems.com/assets/img/no_img.png'\" class=\"service-img\"/>\n      <h5>{{service.name}}</h5>\n    </div>\n  </div>\n\n  <!-- <h4>other classes</h4>\n   <div *ngFor=\"let class of classes\"  class=\"size\">\n    <div class=\"flex\">\n      <img src=\"{{class.image_url}}\" class=\"service-img\"/>\n      <h5>{{class.name}}</h5>\n    </div>\n  </div> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/other-services/other-services.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/cust/other-services/other-services.module.ts ***!
  \********************************************************************/
/*! exports provided: OtherServicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherServicesPageModule", function() { return OtherServicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _other_services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-services.page */ "./src/app/pages/cust/other-services/other-services.page.ts");







var routes = [
    {
        path: '',
        component: _other_services_page__WEBPACK_IMPORTED_MODULE_6__["OtherServicesPage"]
    }
];
var OtherServicesPageModule = /** @class */ (function () {
    function OtherServicesPageModule() {
    }
    OtherServicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_other_services_page__WEBPACK_IMPORTED_MODULE_6__["OtherServicesPage"]]
        })
    ], OtherServicesPageModule);
    return OtherServicesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cust/other-services/other-services.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/cust/other-services/other-services.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.size {\n  display: inline-block;\n  width: 29%;\n  background-color: #f7fffa;\n  text-align: center;\n  margin: 2%;\n  height: 120px;\n}\n\n.service-img {\n  width: 40px;\n  height: 40px;\n  border-radius: 5px;\n  margin: 10px auto;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nh5 {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 12px;\n}\n\nh4 {\n  text-transform: uppercase;\n  text-align: center;\n  color: #0e0e27;\n  font-weight: 600;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9vdGhlci1zZXJ2aWNlcy9EOlxcUmlhelxcTmV3QVBLXFxOZXdBUEt2MC4xL3NyY1xcYXBwXFxwYWdlc1xcY3VzdFxcb3RoZXItc2VydmljZXNcXG90aGVyLXNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9vdGhlci1zZXJ2aWNlcy9vdGhlci1zZXJ2aWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNDLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ0NEOztBREdFO0VBQ0UsV0FBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUdBLGlCQUFBO0FDSEo7O0FETUM7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNIRjs7QURNQztFQUNDLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNIRjs7QURNQztFQUNDLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdXN0L290aGVyLXNlcnZpY2VzL290aGVyLXNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbG9nb3tcclxuICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLnNpemV7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOjI5JTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmZmZhO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW46IDIlO1xyXG5cdGhlaWdodDoxMjBweDtcclxufVxyXG5cclxuXHJcbiAgLnNlcnZpY2UtaW1ne1xyXG4gICAgd2lkdGg6NDBweDtcclxuICAgIC8vIGhlaWdodDoxNTBweDtcclxuICAgIGhlaWdodDo0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIH1cclxuXHJcbiAuZmxleHtcclxuIFx0ZGlzcGxheTogZmxleDtcclxuIFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gfVxyXG5cclxuIGg1e1xyXG4gXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gXHRtYXJnaW46MTBweDtcclxuIFx0Zm9udC1zaXplOiAxMnB4O1xyXG4gfVxyXG5cclxuIGg0e1xyXG4gXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBcdGNvbG9yOiMwZTBlMjc7XHJcbiBcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiBcdG1hcmdpbjoxMHB4O1xyXG4gfSIsIi5oZWFkZXItbG9nbyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnNpemUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyOSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2ZmZmE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyJTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLnNlcnZpY2UtaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oNSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5oNCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwZTBlMjc7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/other-services/other-services.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/cust/other-services/other-services.page.ts ***!
  \******************************************************************/
/*! exports provided: OtherServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherServicesPage", function() { return OtherServicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var OtherServicesPage = /** @class */ (function () {
    function OtherServicesPage(authService, alertService, loadingCtrl, alertCtrl, navCtrl, popoverCtrl, router) {
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.router = router;
    }
    OtherServicesPage.prototype.ngOnInit = function () {
        this.getServiceCat();
    };
    OtherServicesPage.prototype.getServiceCat = function () {
        var _this = this;
        this.authService.getServiceCategory("14").subscribe(function (result) {
            console.log(result);
            _this.otherServices = result['data'].list;
        });
    };
    OtherServicesPage.prototype.back = function () {
        this.navCtrl.navigateBack('cust-home');
    };
    OtherServicesPage.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    OtherServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-other-services',
            template: __webpack_require__(/*! raw-loader!./other-services.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/other-services/other-services.page.html"),
            styles: [__webpack_require__(/*! ./other-services.page.scss */ "./src/app/pages/cust/other-services/other-services.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], OtherServicesPage);
    return OtherServicesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cust-other-services-other-services-module-es5.js.map