(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-pest-control-pest-control-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/pest-control/pest-control.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/pest-control/pest-control.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n       <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n\n\t<div>\n\t\t<img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n\t  </div>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"background\">\n\t<h1>Best pest control service</h1>\n</div>\n<div>\n\t<ion-card>\n\t\t<ion-card-header>\n\t\t<h4>How it Works</h4>\n\t\t</ion-card-header>\n\t\t<ion-card-content>\n\t\t\t<ion-item>\n\t\t\t\t<ion-icon name=\"ios-home\" color=\"dark\"></ion-icon>\n\t\t\t\t<ion-label><h5>Select the size of your home</h5></ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-icon name=\"ios-construct\" color=\"dark\"></ion-icon>\n\t\t\t\t<ion-label><h5>Browse through various packages and services</h5></ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-icon name=\"ios-stopwatch\" color=\"dark\"></ion-icon>\n\t\t\t\t<ion-label><h5>Pick time as per your convenience</h5></ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-icon name=\"md-thumbs-up\" color=\"dark\"></ion-icon>\n\t\t\t\t<ion-label><h5>Hassle-free service</h5></ion-label>\n\t\t\t</ion-item>\n\t\t</ion-card-content>\n\t</ion-card>\n</div>\n\n\n\t<h4 class=\"text-center\">Select the size of your home </h4>\n\t<div class=\"box\">\n\t\t<ion-list>\n\t\t<ion-item (click)=\"pestControl()\">\n\t\t\t<ion-label>1 BHK</ion-label>\n\t\t</ion-item>\n\t\t<ion-item (click)=\"pestControl()\">\n\t\t\t<ion-label>2 BHK</ion-label>\n\t\t</ion-item>\n\t\t<ion-item (click)=\"pestControl()\">\n\t\t\t<ion-label>3 BHK</ion-label>\n\t\t</ion-item>\n\t\t<ion-item (click)=\"pestControl()\">\n\t\t\t<ion-label>Villa</ion-label>\n\t\t</ion-item>\n\t</ion-list>\n\t</div>\n\t<div>\n\t\t<ion-card-header>\n\t\t<h4>All About Pest Control</h4>\n\t\t</ion-card-header>\n\t\t<ion-card-content>\n\t\t\t<h3>Fighting against house infiltrators - Pest control services</h3>\n\t\t\t<h5>Have you recently discovered that termites are eating into your furniture? Is the sight of cockroaches crawling all around disturbing you? Are rodents a matter of scare for kids at home, threatening their health? Can’t let bed bugs disturb your sleep and well-being? Pest infestation, of any kind, is a serious threat to your and family’s health and peace of mind.\n\t\t\tIf you are dealing with any of the above problems, it’s high time that you do something about the situation. It is an essential precautionary measure to get pest control done in your house.</h5><br>\n\t\t\t<h3>Services provided</h3>\n\t\t\t<h5><ul><li><ion-text color=\"gold\"><i>General Pest Control</i></ion-text>- In this service, gel baiting is done to control infestation for longer periods. A residual spray is used to reduce infestation immediately. The treatment is carried out by government-permitted chemicals and remains effective for lizards, mosquitoes, houseflies, silverfish, cockroaches, ants and spiders. It lasts up to 3-4 months.</li><br>\n\n\t\t\t<li><ion-text color=\"gold\"><i>Rodent Control</i></ion-text> - The treatment may include baiting and glue boards to eliminate rodents based on the rodent species, extent and spread of infestation. It lasts up to 3-4 months. This treatment is effective for mice, rats and bandicoots.</li><br>\n\n\t\t\t<li><ion-text color=\"gold\"><i>Bed Bugs Control</i></ion-text> - Inspection of mattresses and furniture is carried out. Three types of spray treatment and machine treatment are done to eliminate all the bugs. It is essential to vacate the area for 5-6 hours. This treatment lasts up to 2-3 months.</li><br>\n\n\t\t\t<li><ion-text color=\"gold\"><i>Termite Control</i></ion-text> - In this treatment, all the wooden items are inspected and injected with chemicals. After the treated holes are saturated, they are closed with wax or white cement. The chemicals have wood preservatives so you need not worry about your items getting damaged. The treatment lasts for 5 years, however, get the furniture rechecked after 3 weeks since recurrence could be a possibility.</li><br>\n\t\t\t</ul>\n\t\t\tCapable of destroying structures, termites are one of the biggest pest problems in Chennai. Being the second highest city in terms of humidity, it provides optimum conditions for termites to thrive and breed. This is the reason that pest services for termites remain to be the most demanded in the city.</h5>\n\t\t</ion-card-content>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/pest-control/pest-control.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/pest-control/pest-control.module.ts ***!
  \*************************************************************************/
/*! exports provided: PestControlPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PestControlPageModule", function() { return PestControlPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pest_control_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pest-control.page */ "./src/app/pages/cust/spec-cat/pest-control/pest-control.page.ts");







const routes = [
    {
        path: '',
        component: _pest_control_page__WEBPACK_IMPORTED_MODULE_6__["PestControlPage"]
    }
];
let PestControlPageModule = class PestControlPageModule {
};
PestControlPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_pest_control_page__WEBPACK_IMPORTED_MODULE_6__["PestControlPage"]]
    })
], PestControlPageModule);



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/pest-control/pest-control.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/pest-control/pest-control.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\nh5 {\n  margin-left: 5%;\n  white-space: pre-wrap;\n}\n\nh4 {\n  color: #0e0e27;\n  margin: 0;\n}\n\nh3 {\n  font-size: 16px;\n  font-weight: 600;\n}\n\nh1 {\n  text-transform: uppercase;\n  font-weight: 800;\n  margin: 0;\n  padding: 2% 3%;\n  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.8);\n  color: white;\n  text-align: center;\n}\n\n.box {\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.background {\n  background: url(http://supercleaningdubai.com/wp-content/uploads/2016/12/pest-control-service-1920x1000.jpg) no-repeat center center/cover;\n  width: 100%;\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9wZXN0LWNvbnRyb2wvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXGN1c3RcXHNwZWMtY2F0XFxwZXN0LWNvbnRyb2xcXHBlc3QtY29udHJvbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvcGVzdC1jb250cm9sL3Blc3QtY29udHJvbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNDLGVBQUE7RUFDQSxxQkFBQTtBQ0NEOztBREVBO0VBQ0MsY0FBQTtFQUNBLFNBQUE7QUNDRDs7QURFQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0MseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRDs7QURFQTtFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURPQTtFQUNFLDBJQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvcGVzdC1jb250cm9sL3Blc3QtY29udHJvbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWxvZ297XHJcbiAgICB3aWR0aDoxMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbmg1e1xyXG5cdG1hcmdpbi1sZWZ0OiA1JTtcclxuXHR3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuXHJcbmg0e1xyXG5cdGNvbG9yOiMwZTBlMjc7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG5oM3tcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuaDF7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXdlaWdodDogODAwO1xyXG5cdG1hcmdpbjowOyBcclxuXHRwYWRkaW5nOjIlIDMlO1xyXG5cdHRleHQtc2hhZG93OjAgMXB4IDhweCByZ2JhKDAsMCwwLC44KTtcclxuXHRjb2xvcjp3aGl0ZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3h7XHJcblx0bWFyZ2luLWxlZnQ6MTAlO1xyXG5cdG1hcmdpbi1yaWdodDoxMCU7XHJcbn1cclxuXHJcbi8vIGltZ3tcclxuLy8gXHR3aWR0aDoxMDAlO1xyXG4vLyBcdGhlaWdodDoyNDBweDtcclxuLy8gfVxyXG5cclxuLmJhY2tncm91bmR7XHJcblx0IGJhY2tncm91bmQ6IHVybChodHRwOi8vc3VwZXJjbGVhbmluZ2R1YmFpLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8xMi9wZXN0LWNvbnRyb2wtc2VydmljZS0xOTIweDEwMDAuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG5cdCB3aWR0aDoxMDAlO1xyXG5cdCBoZWlnaHQ6MTUwcHg7XHJcbn0iLCIuaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMTIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmg1IHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbmg0IHtcbiAgY29sb3I6ICMwZTBlMjc7XG4gIG1hcmdpbjogMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmgxIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyJSAzJTtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHA6Ly9zdXBlcmNsZWFuaW5nZHViYWkuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzEyL3Blc3QtY29udHJvbC1zZXJ2aWNlLTE5MjB4MTAwMC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/pest-control/pest-control.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/pest-control/pest-control.page.ts ***!
  \***********************************************************************/
/*! exports provided: PestControlPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PestControlPage", function() { return PestControlPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let PestControlPage = class PestControlPage {
    constructor(authService, alertService, loadingCtrl, alertCtrl, navCtrl, popoverCtrl, router) {
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.router = router;
    }
    ngOnInit() {
    }
    pestControl() {
        this.navCtrl.navigateForward('pest-control-second');
    }
};
PestControlPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
PestControlPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pest-control',
        template: __webpack_require__(/*! raw-loader!./pest-control.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/pest-control/pest-control.page.html"),
        styles: [__webpack_require__(/*! ./pest-control.page.scss */ "./src/app/pages/cust/spec-cat/pest-control/pest-control.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], PestControlPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-pest-control-pest-control-module-es2015.js.map