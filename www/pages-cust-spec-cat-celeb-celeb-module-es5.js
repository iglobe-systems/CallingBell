(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-celeb-celeb-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/celeb/celeb.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/celeb/celeb.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n       <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <div>\n      <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n    </div>\n     <ion-buttons slot=\"end\">\n        <ion-button shape=\"round\" (click)=\"back()\">\n          <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> \n    <div>\n        <img src=\"assets/img/corporatewish1.jpg\">\n    </div>\n    <!-- <div>\n      <img src=\"assets/img/celeb/bgceleb.jpg\"/>\n    </div> -->\n    <!-- <div class=\"bg\">\n        <h4>“The more you praise and celebrate your life,<br>the more there is in life to celebrate.”</h4>\n        </div> -->\n      <h5 class=\"content-wishes\">WISHES</h5>\n      <div *ngFor=\"let service of celebrations\"(click)=\"celeblevel2()\" class=\"size\">\n        <div class=\"flex\">\n          <img src=\"{{service.image_url}}\" class=\"img-size\"/>\n          <h5>{{service.name}}</h5>\n        </div>\n      </div>\n      <h5 class=\"content-wishes\">EVENTS MANAGEMENT</h5>\n      <div *ngFor=\"let service of events\"  class=\"size\">\n        <div class=\"flex\">\n          <img src=\"{{service.image_url}}\" class=\"img-size\"/>\n          <h5>{{service.name}}</h5>\n        </div>\n      </div>\n    \n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/celeb/celeb.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/celeb/celeb.module.ts ***!
  \***********************************************************/
/*! exports provided: CelebPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebPageModule", function() { return CelebPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _celeb_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./celeb.page */ "./src/app/pages/cust/spec-cat/celeb/celeb.page.ts");







var routes = [
    {
        path: '',
        component: _celeb_page__WEBPACK_IMPORTED_MODULE_6__["CelebPage"]
    }
];
var CelebPageModule = /** @class */ (function () {
    function CelebPageModule() {
    }
    CelebPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_celeb_page__WEBPACK_IMPORTED_MODULE_6__["CelebPage"]]
        })
    ], CelebPageModule);
    return CelebPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/celeb/celeb.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/celeb/celeb.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.content-wishes {\n  color: #0e0e27;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.size {\n  display: inline-block;\n  width: 48%;\n  text-align: center;\n  margin: 1%;\n  border-radius: 15%;\n}\n\n.img-size {\n  width: 50px;\n  height: 50px;\n  margin: 10px auto;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nh5 {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9jZWxlYi9EOlxcUmlhelxcTmV3QVBLXFxOZXdBUEt2MC4xL3NyY1xcYXBwXFxwYWdlc1xcY3VzdFxcc3BlYy1jYXRcXGNlbGViXFxjZWxlYi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvY2VsZWIvY2VsZWIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUU7RUFDRCxxQkFBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0FEOztBRElFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElDO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDREY7O0FESUM7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDREQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdXN0L3NwZWMtY2F0L2NlbGViL2NlbGViLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbG9nb3tcclxuICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmNvbnRlbnQtd2lzaGVze1xyXG5cdGNvbG9yOiMwZTBlMjc7XHJcblx0Zm9udC1zaXplOjE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6NjAwO1xyXG59XHJcblxyXG4gIC5zaXple1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDo0OCU7ICAvL2RlZmF1bHQgLSA0NiVcclxuXHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRmN2ZmO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW46IDElO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICAgIC8vIGhlaWdodDoxMjBweDtcclxufVxyXG5cclxuICAuaW1nLXNpemV7XHJcbiAgICB3aWR0aDo1MHB4O1xyXG4gICAgaGVpZ2h0OjUwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIH1cclxuXHJcbiAuZmxleHtcclxuIFx0ZGlzcGxheTogZmxleDtcclxuIFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gfVxyXG5cclxuIGg1e1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0bWFyZ2luOjEwcHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4vLyBpbWd7XHJcbi8vIFx0d2lkdGg6MTAwJTtcclxuLy8gXHRoZWlnaHQ6YXV0bztcclxuLy8gfVxyXG5cclxuLy8gLmZvbnQxe1xyXG4vLyBcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbi8vIFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gXHRjb2xvcjojZTIzMDU5O1xyXG4vLyB9XHJcblxyXG4vLyAuYmd7XHJcbi8vIFx0Ly8gYmFja2dyb3VuZDojZmZlZWYxO1xyXG4vLyBcdG1hcmdpbjozJTtcclxuLy8gXHRib3JkZXItcmFkaXVzOiAzJTtcclxuLy8gfVxyXG5cclxuLy8gLmNse1xyXG4vLyBcdGJhY2tncm91bmQ6I2ZmZWVmMTtcclxuLy8gXHRtYXJnaW46MyU7XHJcbi8vIFx0Ym9yZGVyLXJhZGl1czogMyU7XHJcbi8vIH1cclxuXHJcbi8vIC5jd3tcclxuLy8gXHRiYWNrZ3JvdW5kOiNmYmZiZmI7XHJcbi8vIFx0bWFyZ2luOjMlO1xyXG4vLyBcdGJvcmRlci1yYWRpdXM6IDMlO1xyXG4vLyB9IiwiLmhlYWRlci1sb2dvIHtcbiAgd2lkdGg6IDEyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29udGVudC13aXNoZXMge1xuICBjb2xvcjogIzBlMGUyNztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2l6ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQ4JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDElO1xuICBib3JkZXItcmFkaXVzOiAxNSU7XG59XG5cbi5pbWctc2l6ZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmg1IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/celeb/celeb.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/celeb/celeb.page.ts ***!
  \*********************************************************/
/*! exports provided: CelebPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebPage", function() { return CelebPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");






var CelebPage = /** @class */ (function () {
    function CelebPage(navCtrl, menuCtrl, toastCtrl, alertCtrl, loadingCtrl, formBuilder, authService, alertService) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.alertService = alertService;
        this.celebrations = [
            { id: 25, name: "Birthday Wishes", image_url: "assets/img/flaticon/wishes/balloon.png" },
            { id: 26, name: "Wedding Wishes", image_url: "assets/img/flaticon/wishes/wedding.png" },
            { id: 27, name: "New Born Wishes", image_url: "assets/img/flaticon/wishes/child.png" },
            { id: 28, name: "Festive Wishes", image_url: "assets/img/flaticon/wishes/diwali.png" },
        ];
        this.events = [
            { id: 30, name: "Corporate Events", image_url: "assets/img/flaticon/events/politics.png" },
            { id: 31, name: "School Events", image_url: "assets/img/flaticon/events/garland.png" },
        ];
    }
    CelebPage.prototype.ngOnInit = function () {
    };
    CelebPage.prototype.back = function () {
        this.navCtrl.navigateBack('cust-home');
    };
    CelebPage.prototype.celeblevel2 = function () {
        this.navCtrl.navigateForward('celeb-package');
    };
    CelebPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
    ]; };
    CelebPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-celeb',
            template: __webpack_require__(/*! raw-loader!./celeb.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/celeb/celeb.page.html"),
            styles: [__webpack_require__(/*! ./celeb.page.scss */ "./src/app/pages/cust/spec-cat/celeb/celeb.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], CelebPage);
    return CelebPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-celeb-celeb-module-es5.js.map