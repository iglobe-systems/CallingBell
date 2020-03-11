(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-trending-trending-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/trending/trending.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/trending/trending.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"darkblue\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <div>\r\n        <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\r\n      </div>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button shape=\"round\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<h5 class=\"ion-margin title\">Top trending services which you can't resist</h5>\r\n  <div *ngFor=\"let service of trending\" class=\"size\">\r\n    <div class=\"flex\">\r\n      <img src=\"{{service.icon}}\" onError=\"this.src='http://apiv1.iglobesystems.com/assets/img/no_img.png'\" (click)=\"goToIssue(service)\" class=\"service-img\"/>\r\n      <div class=\"support\">\r\n          <h5 class=\"service-name\" (click)=\"goToIssue(service)\">{{service.name}}</h5>\r\n          <ion-icon name=\"call\" class=\"support-btn\" (click)=\"supportcall($event,service)\"></ion-icon>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"!trending\">\r\n      <div *ngFor=\"let i of [0,1,2,3,4,5]\" class=\"size\">\r\n          <div class=\"flex\">\r\n            <ion-skeleton-text animated class=\"service-img\"></ion-skeleton-text>\r\n            <div class=\"support\">\r\n                <ion-skeleton-text class=\"service-name\"></ion-skeleton-text>\r\n                <ion-skeleton-text class=\"service-name\"></ion-skeleton-text>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  </div>\r\n\r\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n    <ion-fab-button color=\"darkblue\" size=\"small\" (click)=\"opencart()\" #cart>\r\n      <!-- <div class=\"cart-length\">{{ cardItemCount | async }}</div> -->\r\n      <ion-icon name=\"cart\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/trending/trending.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/trending/trending.module.ts ***!
  \*****************************************************************/
/*! exports provided: TrendingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingPageModule", function() { return TrendingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trending_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trending.page */ "./src/app/pages/cust/spec-cat/trending/trending.page.ts");







const routes = [
    {
        path: '',
        component: _trending_page__WEBPACK_IMPORTED_MODULE_6__["TrendingPage"]
    }
];
let TrendingPageModule = class TrendingPageModule {
};
TrendingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_trending_page__WEBPACK_IMPORTED_MODULE_6__["TrendingPage"]]
    })
], TrendingPageModule);



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/trending/trending.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/trending/trending.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.size {\n  display: inline-block;\n  width: 44%;\n  text-align: center;\n  margin: 3%;\n  height: 140px;\n  border-radius: 5px;\n  border: 2px solid #f1f1f1;\n}\n\n.service-img {\n  width: 80px;\n  height: 80px;\n  border-radius: 5px;\n  margin: 10px auto;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.service-name {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 12px;\n}\n\n.title {\n  font-size: 16px;\n  margin: 10px;\n  font-weight: 600;\n  color: #0e0e27;\n}\n\n.support {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.support-btn {\n  background-color: #ffad00;\n  padding: 6px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC90cmVuZGluZy9EOlxcUmlhelxcTmV3QVBLXFxOZXdBUEt2MC4xL3NyY1xcYXBwXFxwYWdlc1xcY3VzdFxcc3BlYy1jYXRcXHRyZW5kaW5nXFx0cmVuZGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvdHJlbmRpbmcvdHJlbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FER0E7RUFDQyxxQkFBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtFQUNHLFVBQUE7RUFDSCxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0REOztBRElDO0VBQ0csV0FBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUdBLGlCQUFBO0FDSko7O0FET0M7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNKRjs7QURPQztFQUNDLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNKRjs7QURPQTtFQUNDLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSkQ7O0FET0E7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtBQ0pEOztBRE9BO0VBQ0MseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNKRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvdHJlbmRpbmcvdHJlbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1sb2dve1xyXG4gICAgd2lkdGg6MTIwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5cclxuLnNpemV7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOjQ0JTsgIC8vZGVmYXVsdCAtIDQ2JVxyXG5cdC8vIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAzJTtcclxuXHRoZWlnaHQ6MTQwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czo1cHg7XHJcblx0Ym9yZGVyOjJweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcblxyXG4gLnNlcnZpY2UtaW1ne1xyXG4gICAgd2lkdGg6ODBweDtcclxuICAgIC8vIGhlaWdodDoxNTBweDtcclxuICAgIGhlaWdodDo4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIH1cclxuXHJcblx0LmZsZXh7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5cdH1cclxuICAgXHJcblx0LnNlcnZpY2UtbmFtZXtcclxuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRtYXJnaW46MTBweDtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHR9XHJcblxyXG4udGl0bGV7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdG1hcmdpbjoxMHB4O1xyXG5cdGZvbnQtd2VpZ2h0OjYwMDtcclxuXHRjb2xvcjojMGUwZTI3O1xyXG59XHJcblxyXG4uc3VwcG9ydHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5zdXBwb3J0LWJ0bntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhZDAwO1xyXG5cdHBhZGRpbmc6IDZweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcbn0iLCIuaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMTIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zaXplIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDQlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMyU7XG4gIGhlaWdodDogMTQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2YxZjFmMTtcbn1cblxuLnNlcnZpY2UtaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2VydmljZS1uYW1lIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzBlMGUyNztcbn1cblxuLnN1cHBvcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLnN1cHBvcnQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWQwMDtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/trending/trending.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/trending/trending.page.ts ***!
  \***************************************************************/
/*! exports provided: TrendingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingPage", function() { return TrendingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cart_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cart/cart.page */ "./src/app/pages/cust/cart/cart.page.ts");
/* harmony import */ var _components_supportcall_supportcall_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/supportcall/supportcall.component */ "./src/app/components/supportcall/supportcall.component.ts");








let TrendingPage = class TrendingPage {
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
        this.getServiceCat();
    }
    getServiceCat() {
        this.authService.getServiceCategory("91").subscribe(result => {
            console.log(result);
            this.trending = result['data'].list;
        });
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                animated: true,
                message: message,
                duration: 2000,
                position: 'middle',
                mode: 'ios',
                cssClass: "toastheight",
                color: 'darkblue',
            }).then(toast => {
                toast.present();
            });
        });
    }
    supportcall(ev, service) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _components_supportcall_supportcall_component__WEBPACK_IMPORTED_MODULE_7__["SupportcallComponent"],
                componentProps: {
                    service: service
                },
                event: ev,
                animated: true,
                showBackdrop: true
            });
            return yield popover.present();
        });
    }
    goToIssue(service) {
        let navigationExtras = {
            state: {
                service: service
            }
        };
        this.router.navigate(['trending-issues'], navigationExtras);
        console.log(service);
    }
    opencart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _cart_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"],
                cssClass: 'cart-modal'
            });
            modal.present();
        });
    }
    back() {
        this.navCtrl.navigateBack('cust-home');
    }
};
TrendingPage.ctorParameters = () => [
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
TrendingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trending',
        template: __webpack_require__(/*! raw-loader!./trending.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/trending/trending.page.html"),
        styles: [__webpack_require__(/*! ./trending.page.scss */ "./src/app/pages/cust/spec-cat/trending/trending.page.scss")]
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
], TrendingPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-trending-trending-module-es2015.js.map