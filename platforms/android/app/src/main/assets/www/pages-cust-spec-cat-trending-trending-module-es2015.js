(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-trending-trending-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/trending/trending.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/trending/trending.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <div>\n        <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n      </div>\n    <ion-buttons slot=\"end\">\n      <ion-button shape=\"round\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<h5 class=\"ion-margin title\">Top trending services which you can't resist</h5>\n  <div *ngFor=\"let service of trending\" class=\"size\">\n    <div class=\"flex\">\n      <img src=\"{{service.icon}}\" onError=\"this.src='http://apiv1.iglobesystems.com/assets/img/no_img.png'\" (click)=\"goToIssue(service)\" class=\"service-img\"/>\n      <div class=\"support\">\n          <h5 class=\"service-name\" (click)=\"goToIssue(service)\">{{service.name}}</h5>\n          <ion-icon name=\"call\" class=\"support-btn\" (click)=\"supportcall($event,service)\"></ion-icon>\n      </div>\n    </div>\n  </div>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"darkblue\" size=\"small\" (click)=\"opencart()\" #cart>\n      <!-- <div class=\"cart-length\">{{ cardItemCount | async }}</div> -->\n      <ion-icon name=\"cart\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

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

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.size {\n  display: inline-block;\n  width: 48%;\n  background-color: #f1f1f1;\n  text-align: center;\n  margin: 1%;\n  height: 140px;\n  border-radius: 5px;\n}\n\n.service-img {\n  width: 80px;\n  height: 80px;\n  border-radius: 5px;\n  margin: 10px auto;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.service-name {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 12px;\n}\n\n.title {\n  font-size: 16px;\n  margin: 10px;\n  font-weight: 600;\n  color: #0e0e27;\n}\n\n.support {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.support-btn {\n  background-color: #ffad00;\n  padding: 6px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC90cmVuZGluZy9EOlxcUmlhelxcTmV3QVBLXFxOZXdBUEt2MC4xL3NyY1xcYXBwXFxwYWdlc1xcY3VzdFxcc3BlYy1jYXRcXHRyZW5kaW5nXFx0cmVuZGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvdHJlbmRpbmcvdHJlbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FER0E7RUFDQyxxQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0csVUFBQTtFQUNILGFBQUE7RUFDQSxrQkFBQTtBQ0FEOztBREdDO0VBQ0csV0FBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUdBLGlCQUFBO0FDSEo7O0FETUM7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNIRjs7QURNQztFQUNDLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNIRjs7QURNQTtFQUNDLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSEQ7O0FETUE7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtBQ0hEOztBRE1BO0VBQ0MseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNIRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvdHJlbmRpbmcvdHJlbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1sb2dve1xyXG4gICAgd2lkdGg6MTIwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5cclxuLnNpemV7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOjQ4JTsgIC8vZGVmYXVsdCAtIDQ2JVxyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxJTtcclxuXHRoZWlnaHQ6MTQwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czo1cHg7XHJcbn1cclxuXHJcbiAuc2VydmljZS1pbWd7XHJcbiAgICB3aWR0aDo4MHB4O1xyXG4gICAgLy8gaGVpZ2h0OjE1MHB4O1xyXG4gICAgaGVpZ2h0OjgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIC8vIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgfVxyXG5cclxuXHQuZmxleHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcblx0fVxyXG4gICBcclxuXHQuc2VydmljZS1uYW1le1xyXG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdG1hcmdpbjoxMHB4O1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdH1cclxuXHJcbi50aXRsZXtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0bWFyZ2luOjEwcHg7XHJcblx0Zm9udC13ZWlnaHQ6NjAwO1xyXG5cdGNvbG9yOiMwZTBlMjc7XHJcbn1cclxuXHJcbi5zdXBwb3J0e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLnN1cHBvcnQtYnRue1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmFkMDA7XHJcblx0cGFkZGluZzogNnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxufSIsIi5oZWFkZXItbG9nbyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnNpemUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0OCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxJTtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2VydmljZS1pbWcge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zZXJ2aWNlLW5hbWUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMGUwZTI3O1xufVxuXG4uc3VwcG9ydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uc3VwcG9ydC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhZDAwO1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"

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