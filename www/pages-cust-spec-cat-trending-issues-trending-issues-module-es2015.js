(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-trending-issues-trending-issues-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/trending-issues/trending-issues.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/trending-issues/trending-issues.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <div>\n        <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n      </div>\n    <ion-buttons slot=\"end\">\n      <ion-button shape=\"round\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<!-- image -->\n\n<h4>What do you want help with?</h4>\n  <div *ngFor=\"let service of plumbing\"  class=\"size\">\n    <div class=\"flex\">\n      <img src=\"{{service.img}}\" onError=\"this.src='http://apiv1.iglobesystems.com/assets/img/no_img.png'\" class=\"service-img\"/>\n      <h5>{{service.name}}</h5>\n    </div>\n  </div>\n\n<div class=\"CB\">\n  <h2>CB verified</h2>\n  <div class=\"CB-verify\">\n    <ion-icon name=\"contact\" color=\"gold\"></ion-icon><ion-label>Skilled & verified technicians</ion-label>\n  </div>\n  <div class=\"CB-verify\">\n      <ion-icon name=\"calendar\" color=\"gold\"></ion-icon><ion-label>30-Day service guarantee</ion-label>\n  </div>\n  <div class=\"CB-verify\">\n      <ion-icon name=\"wallet\" color=\"gold\"></ion-icon><ion-label>Rs.10,000 damage cover on every booking</ion-label>\n  </div>\n</div>\n\n<div>\n  <h3>Note</h3>\n  <ul>\n    <li>Spare parts are charged as per market price</li>\n    <li>Spare parts are charged as per market price</li>\n    <li>Spare parts are charged as per market price</li>\n  </ul>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/trending-issues/trending-issues.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/trending-issues/trending-issues.module.ts ***!
  \*******************************************************************************/
/*! exports provided: TrendingIssuesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingIssuesPageModule", function() { return TrendingIssuesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trending_issues_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trending-issues.page */ "./src/app/pages/cust/spec-cat/trending-issues/trending-issues.page.ts");







const routes = [
    {
        path: '',
        component: _trending_issues_page__WEBPACK_IMPORTED_MODULE_6__["TrendingIssuesPage"]
    }
];
let TrendingIssuesPageModule = class TrendingIssuesPageModule {
};
TrendingIssuesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_trending_issues_page__WEBPACK_IMPORTED_MODULE_6__["TrendingIssuesPage"]]
    })
], TrendingIssuesPageModule);



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/trending-issues/trending-issues.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/trending-issues/trending-issues.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.size {\n  display: inline-block;\n  width: 29%;\n  background-color: #f1f1f1;\n  text-align: center;\n  margin: 2%;\n  height: 120px;\n}\n\n.service-img {\n  width: 40px;\n  height: 40px;\n  border-radius: 5px;\n  margin: 10px auto;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nh5 {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 12px;\n}\n\nh4 {\n  font-size: 16px;\n  margin: 10px;\n  color: #0e0e27;\n}\n\nh3 {\n  font-size: 16px;\n  margin: 10px;\n  color: #0e0e27;\n}\n\nh2 {\n  margin: 0;\n  font-size: 16px;\n  color: #0e0e27;\n  margin-bottom: 10px;\n}\n\n.CB {\n  margin: 10px;\n}\n\nion-icon {\n  font-size: 26px;\n}\n\n.CB-verify {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-label {\n  margin-left: 10px;\n}\n\nul {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC90cmVuZGluZy1pc3N1ZXMvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXGN1c3RcXHNwZWMtY2F0XFx0cmVuZGluZy1pc3N1ZXNcXHRyZW5kaW5nLWlzc3Vlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvdHJlbmRpbmctaXNzdWVzL3RyZW5kaW5nLWlzc3Vlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNDLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ0NEOztBREVFO0VBQ0UsV0FBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUdBLGlCQUFBO0FDRko7O0FES0M7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNGRjs7QURLQztFQUNDLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNGRjs7QURLQztFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0ZMOztBREtDO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDRkw7O0FES0M7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0ZMOztBREtDO0VBQ0ksWUFBQTtBQ0ZMOztBREtDO0VBQ0ksZUFBQTtBQ0ZMOztBREtDO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0ZMOztBREtDO0VBQ0ksaUJBQUE7QUNGTDs7QURLQztFQUNJLFdBQUE7QUNGTCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvdHJlbmRpbmctaXNzdWVzL3RyZW5kaW5nLWlzc3Vlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWxvZ297XHJcbiAgICB3aWR0aDoxMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5zaXple1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDoyOSU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luOiAyJTtcclxuXHRoZWlnaHQ6MTIwcHg7XHJcbn1cclxuXHJcbiAgLnNlcnZpY2UtaW1ne1xyXG4gICAgd2lkdGg6NDBweDtcclxuICAgIC8vIGhlaWdodDoxNTBweDtcclxuICAgIGhlaWdodDo0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIH1cclxuXHJcbiAuZmxleHtcclxuIFx0ZGlzcGxheTogZmxleDtcclxuIFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gfVxyXG5cclxuIGg1e1xyXG4gXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gXHRtYXJnaW46MTBweDtcclxuIFx0Zm9udC1zaXplOiAxMnB4O1xyXG4gfVxyXG5cclxuIGg0e1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICBtYXJnaW46MTBweDtcclxuICAgICBjb2xvcjojMGUwZTI3O1xyXG4gfVxyXG5cclxuIGgze1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgY29sb3I6IzBlMGUyNztcclxuIH1cclxuXHJcbiBoMntcclxuICAgICBtYXJnaW46IDA7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgIGNvbG9yOiMwZTBlMjc7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuIH1cclxuXHJcbiAuQ0J7XHJcbiAgICAgbWFyZ2luOiAxMHB4O1xyXG4gfVxyXG5cclxuIGlvbi1pY29ue1xyXG4gICAgIGZvbnQtc2l6ZTogMjZweDtcclxuIH1cclxuXHJcbiAuQ0ItdmVyaWZ5e1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuIH1cclxuXHJcbiBpb24tbGFiZWx7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiB9XHJcblxyXG4gdWx7XHJcbiAgICAgbWFyZ2luOiA1cHg7XHJcbiB9IiwiLmhlYWRlci1sb2dvIHtcbiAgd2lkdGg6IDEyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc2l6ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI5JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIlO1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4uc2VydmljZS1pbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmg1IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiAjMGUwZTI3O1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBjb2xvcjogIzBlMGUyNztcbn1cblxuaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwZTBlMjc7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5DQiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5DQi12ZXJpZnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxudWwge1xuICBtYXJnaW46IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/trending-issues/trending-issues.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/trending-issues/trending-issues.page.ts ***!
  \*****************************************************************************/
/*! exports provided: TrendingIssuesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingIssuesPage", function() { return TrendingIssuesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let TrendingIssuesPage = class TrendingIssuesPage {
    constructor(navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl, authService, loadingCtrl, alertService, router) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertService = alertService;
        this.router = router;
    }
    ngOnInit() {
        this.plumbing = [
            { "name": "Basin & Sink", "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_30/categories/category_v2/category_70442750.png" },
            { "name": "Basin & Sink", "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_30/categories/category_v2/category_70442750.png" },
            { "name": "Basin & Sink", "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_30/categories/category_v2/category_70442750.png" },
            { "name": "Basin & Sink", "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_30/categories/category_v2/category_70442750.png" },
            { "name": "Basin & Sink", "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_30/categories/category_v2/category_70442750.png" },
            { "name": "Basin & Sink", "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_30/categories/category_v2/category_70442750.png" },
        ];
    }
    back() {
        this.navCtrl.navigateBack('cust-home');
    }
};
TrendingIssuesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
TrendingIssuesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trending-issues',
        template: __webpack_require__(/*! raw-loader!./trending-issues.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/trending-issues/trending-issues.page.html"),
        styles: [__webpack_require__(/*! ./trending-issues.page.scss */ "./src/app/pages/cust/spec-cat/trending-issues/trending-issues.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], TrendingIssuesPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-trending-issues-trending-issues-module-es2015.js.map