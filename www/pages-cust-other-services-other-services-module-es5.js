(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-other-services-other-services-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/other-services/other-services.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/other-services/other-services.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n         \n    <div>\n      <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n    </div>\n         <ion-buttons slot=\"end\">\n      <ion-button shape=\"round\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div *ngFor=\"let service of serviceCat\"> \n    <h4>{{service.name}}</h4>\n    <div *ngFor=\"let list of service.list\"  class=\"size\">\n      <div class=\"flex\">\n        <img src=\"{{list.img}}\" onError=\"this.src='http://apiv1.iglobesystems.com/assets/img/no_img.png'\" class=\"service-img\"/>\n        <h5>{{list.name}}</h5>\n      </div>\n    </div>\n</div>\n\n\n  <!-- <h4>hiring services</h4>\n  <div *ngFor=\"let service of otherServices\"  class=\"size\">\n    <div class=\"flex\">\n      <img src=\"{{service.img_m}}\" onError=\"this.src='http://apiv1.iglobesystems.com/assets/img/no_img.png'\" class=\"service-img\"/>\n      <h5>{{service.name}}</h5>\n    </div>\n  </div> -->\n</ion-content>\n"

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

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.size {\n  display: inline-block;\n  width: 29%;\n  background-color: #f5f5f5;\n  text-align: center;\n  margin: 2%;\n  height: 120px;\n}\n\n.service-img {\n  width: 40px;\n  height: 40px;\n  border-radius: 5px;\n  margin: 10px auto;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nh5 {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 12px;\n}\n\nh4 {\n  text-transform: uppercase;\n  text-align: center;\n  color: #0e0e27;\n  font-weight: 600;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9vdGhlci1zZXJ2aWNlcy9EOlxcUmlhelxcTmV3QVBLXFxOZXdBUEt2MC4xL3NyY1xcYXBwXFxwYWdlc1xcY3VzdFxcb3RoZXItc2VydmljZXNcXG90aGVyLXNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9vdGhlci1zZXJ2aWNlcy9vdGhlci1zZXJ2aWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNDLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ0NEOztBREdFO0VBQ0UsV0FBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUdBLGlCQUFBO0FDSEo7O0FETUM7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNIRjs7QURNQztFQUNDLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNIRjs7QURNQztFQUNDLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdXN0L290aGVyLXNlcnZpY2VzL290aGVyLXNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbG9nb3tcclxuICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLnNpemV7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOjI5JTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW46IDIlO1xyXG5cdGhlaWdodDoxMjBweDtcclxufVxyXG5cclxuXHJcbiAgLnNlcnZpY2UtaW1ne1xyXG4gICAgd2lkdGg6NDBweDtcclxuICAgIC8vIGhlaWdodDoxNTBweDtcclxuICAgIGhlaWdodDo0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIH1cclxuXHJcbiAuZmxleHtcclxuIFx0ZGlzcGxheTogZmxleDtcclxuIFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gfVxyXG5cclxuIGg1e1xyXG4gXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gXHRtYXJnaW46MTBweDtcclxuIFx0Zm9udC1zaXplOiAxMnB4O1xyXG4gfVxyXG5cclxuIGg0e1xyXG4gXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBcdGNvbG9yOiMwZTBlMjc7XHJcbiBcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiBcdG1hcmdpbjoxMHB4O1xyXG4gfVxyXG5cclxuICIsIi5oZWFkZXItbG9nbyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnNpemUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyOSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyJTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLnNlcnZpY2UtaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oNSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5oNCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwZTBlMjc7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */"

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
        // this.getServiceCat();	 
        this.updateService();
    };
    OtherServicesPage.prototype.updateService = function () {
        this.serviceCat = [
            {
                "name": "education",
                "list": [
                    { "name": "Tutor", "img": "assets/img/flaticon/other/1.png" },
                    { "name": "Play School", "img": "assets/img/flaticon/other/2.png" },
                    { "name": "NEET Coaching Center", "img": "assets/img/flaticon/other/3.png" },
                    { "name": "IIT,JEE Center", "img": "assets/img/flaticon/other/4.png" },
                    { "name": "MBA Center", "img": "assets/img/flaticon/other/5.png" },
                    { "name": "IAS Coaching Center", "img": "assets/img/flaticon/other/6.png" },
                    { "name": "Private Education Center", "img": "assets/img/flaticon/other/7.png" },
                    { "name": "Arts & Craft", "img": "assets/img/flaticon/other/8.png" },
                    { "name": "Drawing Class", "img": "assets/img/flaticon/other/9.png" }
                ]
            },
            {
                "name": "entertainment",
                "list": [
                    { "name": "Kid's play zone", "img": "assets/img/flaticon/other/10.png" },
                    { "name": "exhibition", "img": "assets/img/flaticon/other/11.png" },
                    { "name": "dance class", "img": "assets/img/flaticon/other/12.png" },
                    { "name": "musiq class", "img": "assets/img/flaticon/other/13.png" },
                    { "name": "DJ & VJ", "img": "assets/img/flaticon/other/14.png" },
                    { "name": "Master of ceremony", "img": "assets/img/flaticon/other/15.png" },
                    { "name": "cinematography", "img": "assets/img/flaticon/other/16.png" },
                    { "name": "videography", "img": "assets/img/flaticon/other/17.png" },
                    { "name": "photography", "img": "assets/img/flaticon/other/18.png" },
                    { "name": "karoake", "img": "assets/img/flaticon/other/19.png" },
                    { "name": "instrumental", "img": "assets/img/flaticon/other/20.png" }
                ]
            },
            {
                "name": "health & fitness",
                "list": [
                    { "name": "child specialist", "img": "assets/img/flaticon/other/21.png" },
                    { "name": "adult specialist", "img": "assets/img/flaticon/other/22.png" },
                    { "name": "diagnostic center", "img": "assets/img/flaticon/other/23.png" },
                    { "name": "gym", "img": "assets/img/flaticon/other/24.png" },
                    { "name": "zumba", "img": "assets/img/flaticon/other/25.png" },
                    { "name": "yoga", "img": "assets/img/flaticon/other/26.png" },
                    { "name": "fitness center", "img": "assets/img/flaticon/other/27.png" },
                    { "name": "swimming", "img": "assets/img/flaticon/other/28.png" },
                    { "name": "sports", "img": "assets/img/flaticon/other/29.png" }
                ]
            },
            {
                "name": "essential service",
                "list": [
                    { "name": "cook", "img": "assets/img/flaticon/other/30.png" },
                    { "name": "festive cooking", "img": "assets/img/flaticon/other/31.png" },
                    { "name": "maid", "img": "assets/img/flaticon/other/32.png" },
                    { "name": "call driver", "img": "assets/img/flaticon/other/33.png" },
                    { "name": "security service", "img": "assets/img/flaticon/other/34.png" },
                    { "name": "kitchen cleaning service", "img": "assets/img/flaticon/other/35.png" },
                    { "name": "washroom cleaning service", "img": "assets/img/flaticon/other/36.png" },
                    { "name": "house deep cleaning", "img": "assets/img/flaticon/other/37.png" },
                    { "name": "festive cleaning", "img": "assets/img/flaticon/other/38.png" },
                    { "name": "vehicle cleaning", "img": "assets/img/flaticon/other/39.png" },
                    { "name": "gardening", "img": "assets/img/flaticon/other/40.png" },
                    { "name": "tours & travels", "img": "assets/img/flaticon/other/41.png" },
                ]
            },
            {
                "name": "health & medicines",
                "list": [
                    { "name": "doctor appointment", "img": "assets/img/flaticon/other/42.png" },
                    { "name": "medicine purchase", "img": "assets/img/flaticon/other/43.png" },
                    { "name": "medical shops", "img": "assets/img/flaticon/other/44.png" },
                    { "name": "medicines supply", "img": "assets/img/flaticon/other/45.png" },
                ]
            },
            {
                "name": "occasional services",
                "list": [
                    { "name": "carpentry", "img": "assets/img/flaticon/other/46.png" },
                    { "name": "painter", "img": "assets/img/flaticon/other/47.png" },
                    { "name": "prohid", "img": "assets/img/flaticon/other/48.png" },
                    { "name": "hotel booking", "img": "assets/img/flaticon/other/49.png" },
                    { "name": "home decoration", "img": "assets/img/flaticon/other/50.png" },
                    { "name": "catering service", "img": "assets/img/flaticon/other/51.png" },
                ]
            },
            {
                "name": "grooming services",
                "list": [
                    { "name": "mehandi", "img": "assets/img/flaticon/other/52.png" },
                    { "name": "tailoring", "img": "assets/img/flaticon/other/53.png" },
                    { "name": "beautician / salons", "img": "assets/img/flaticon/other/54.png" },
                    { "name": "spa", "img": "assets/img/flaticon/other/55.png" },
                    { "name": "tattoo", "img": "assets/img/flaticon/other/56.png" },
                    { "name": "bridal makeup", "img": "assets/img/flaticon/other/57.png" },
                ]
            },
            {
                "name": "home appliances",
                "list": [
                    { "name": "ac", "img": "assets/img/flaticon/other/58.png" },
                    { "name": "ro", "img": "assets/img/flaticon/other/59.png" },
                    { "name": "fridge", "img": "assets/img/flaticon/other/60.png" },
                    { "name": "mobile", "img": "assets/img/flaticon/other/61.png" },
                    { "name": "mixer", "img": "assets/img/flaticon/other/62.png" },
                    { "name": "washing machine", "img": "assets/img/flaticon/other/63.png" },
                    { "name": "oven", "img": "assets/img/flaticon/other/64.png" },
                    { "name": "blender", "img": "assets/img/flaticon/other/65.png" },
                    { "name": "chimneys", "img": "assets/img/flaticon/other/66.png" },
                    { "name": "television", "img": "assets/img/flaticon/other/67.png" },
                    { "name": "computer", "img": "assets/img/flaticon/other/68.png" },
                    { "name": "dth", "img": "assets/img/flaticon/other/69.png" },
                ]
            },
        ];
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