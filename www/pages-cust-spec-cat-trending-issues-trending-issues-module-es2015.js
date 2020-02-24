(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-trending-issues-trending-issues-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/trending-issues/trending-issues.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/trending-issues/trending-issues.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <div>\n        <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n      </div>\n    <ion-buttons slot=\"end\">\n      <ion-button shape=\"round\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<!-- image -->\n\n<h4 class=\"fw600\">What do you want help with?</h4>\n<div class=\"size\">\n  <div class=\"flex\" (click)=\"allService()\">\n    <img src=\"assets/img/QB.jpg\" onError=\"this.src='http://apiv1.iglobesystems.com/assets/img/no_img.png'\" class=\"service-img\"/>\n    <h5>All services</h5>\n  </div>\n</div>\n  <div *ngFor=\"let service of serviceSC\"  class=\"size\">\n    <div class=\"flex\" (click)=\"goToIssueList(service)\">\n      <img src=\"{{service.icon}}\" onError=\"this.src='http://apiv1.iglobesystems.com/assets/img/no_img.png'\" class=\"service-img\"/>\n      <h5>{{service.name}}</h5>\n    </div>\n  </div>\n  <br>\n  <br>\n  <img src= \"http://apiv1.iglobesystems.com:8000/assets/img/services_cat/banner/{{service.id}}.jpg\" (click)=\"goToProducts()\"/>\n<div class=\"CB\">\n  <h2 class=\"fw600\">CB verified</h2>\n  <div class=\"CB-verify\">\n    <ion-icon name=\"contact\" color=\"gold\"></ion-icon><ion-label class=\"fs14\">Skilled & verified technicians</ion-label>\n  </div>\n  <div class=\"CB-verify\">\n      <ion-icon name=\"calendar\" color=\"gold\"></ion-icon><ion-label class=\"fs14\">30-Day service guarantee</ion-label>\n  </div>\n  <div class=\"CB-verify\">\n      <ion-icon name=\"wallet\" color=\"gold\"></ion-icon><ion-label class=\"fs14\">Rs.10,000 damage cover on every booking</ion-label>\n  </div>\n</div>\n\n<div>\n  <h3 class=\"fw600\">Note</h3>\n  <ul>\n    <li class=\"fs14\">Spare parts are charged as per market price</li>\n    <li class=\"fs14\">A Rs.100 procurement fee is charged on all order where partner fetches material as part of the service</li>\n    <li class=\"fs14\">Service charge excludes material costs and masonry charges</li>\n  </ul>\n</div>\n<ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n  <ion-fab-button color=\"darkblue\" size=\"small\" (click)=\"opencart()\" #cart>\n    <!-- <div class=\"cart-length\">{{ cardItemCount | async }}</div> -->\n    <ion-icon name=\"cart\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n</ion-content>\n"

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

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.size {\n  display: inline-block;\n  width: 31%;\n  background-color: #f7f7f7;\n  text-align: center;\n  margin: 1%;\n  height: 130px;\n}\n\n.service-img {\n  width: 60px;\n  height: 60px;\n  border-radius: 5px;\n  margin: 10px auto;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nh5 {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 12px;\n}\n\nh4 {\n  font-size: 16px;\n  margin: 10px;\n  color: #0e0e27;\n}\n\nh3 {\n  font-size: 16px;\n  margin: 10px;\n  color: #0e0e27;\n}\n\nh2 {\n  margin: 0;\n  font-size: 16px;\n  color: #0e0e27;\n  margin-bottom: 10px;\n}\n\n.CB {\n  background-color: #f3f7ff;\n  padding: 10px;\n}\n\nion-icon {\n  font-size: 26px;\n}\n\n.CB-verify {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-label {\n  margin-left: 10px;\n}\n\nul {\n  margin: 5px;\n}\n\n.fs14 {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC90cmVuZGluZy1pc3N1ZXMvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXGN1c3RcXHNwZWMtY2F0XFx0cmVuZGluZy1pc3N1ZXNcXHRyZW5kaW5nLWlzc3Vlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvdHJlbmRpbmctaXNzdWVzL3RyZW5kaW5nLWlzc3Vlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNDLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ0NEOztBREVFO0VBQ0UsV0FBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUdBLGlCQUFBO0FDRko7O0FES0M7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNGRjs7QURLQztFQUNDLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNGRjs7QURLQztFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0ZMOztBREtDO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDRkw7O0FES0M7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0ZMOztBREtDO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FDRkw7O0FES0M7RUFDSSxlQUFBO0FDRkw7O0FES0M7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRkw7O0FES0M7RUFDSSxpQkFBQTtBQ0ZMOztBREtDO0VBQ0ksV0FBQTtBQ0ZMOztBREtDO0VBQ0csZUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC90cmVuZGluZy1pc3N1ZXMvdHJlbmRpbmctaXNzdWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbG9nb3tcclxuICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLnNpemV7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOjMxJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW46IDElO1xyXG5cdGhlaWdodDoxMzBweDtcclxufVxyXG5cclxuICAuc2VydmljZS1pbWd7XHJcbiAgICB3aWR0aDo2MHB4O1xyXG4gICAgLy8gaGVpZ2h0OjE1MHB4O1xyXG4gICAgaGVpZ2h0OjYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIC8vIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgfVxyXG5cclxuIC5mbGV4e1xyXG4gXHRkaXNwbGF5OiBmbGV4O1xyXG4gXHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiB9XHJcblxyXG4gaDV7XHJcbiBcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiBcdG1hcmdpbjoxMHB4O1xyXG4gXHRmb250LXNpemU6IDEycHg7XHJcbiB9XHJcblxyXG4gaDR7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgIGNvbG9yOiMwZTBlMjc7XHJcbiB9XHJcblxyXG4gaDN7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgIG1hcmdpbjogMTBweDtcclxuICAgICBjb2xvcjojMGUwZTI3O1xyXG4gfVxyXG5cclxuIGgye1xyXG4gICAgIG1hcmdpbjogMDtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgY29sb3I6IzBlMGUyNztcclxuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gfVxyXG5cclxuIC5DQntcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmN2ZmO1xyXG4gICAgIHBhZGRpbmc6IDEwcHg7XHJcbiB9XHJcblxyXG4gaW9uLWljb257XHJcbiAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gfVxyXG5cclxuIC5DQi12ZXJpZnl7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gfVxyXG5cclxuIGlvbi1sYWJlbHtcclxuICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuIH1cclxuXHJcbiB1bHtcclxuICAgICBtYXJnaW46IDVweDtcclxuIH1cclxuXHJcbiAuZnMxNHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuIH0iLCIuaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMTIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zaXplIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMSU7XG4gIGhlaWdodDogMTMwcHg7XG59XG5cbi5zZXJ2aWNlLWltZyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaDUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgY29sb3I6ICMwZTBlMjc7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiAjMGUwZTI3O1xufVxuXG5oMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzBlMGUyNztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLkNCIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjdmZjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5DQi12ZXJpZnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxudWwge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmZzMTQge1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

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
/* harmony import */ var _cart_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cart/cart.page */ "./src/app/pages/cust/cart/cart.page.ts");







let TrendingIssuesPage = class TrendingIssuesPage {
    constructor(navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl, authService, loadingCtrl, alertService, router, route) {
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
        this.route = route;
    }
    ngOnInit() {
        this.getIssues();
    }
    getIssues() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.serviceId = this.router.getCurrentNavigation().extras.state.service.id;
                this.service = this.router.getCurrentNavigation().extras.state.service;
                this.authService.getServiceCategory(this.serviceId).subscribe(result => {
                    console.log(result);
                    this.serviceSC = result['data'].list;
                    console.log(this.serviceSC);
                });
            }
        });
    }
    goToProducts() {
        if (this.serviceId == 86) {
            let navigationExtras = {
                state: {
                    category_id: 2
                }
            };
            this.router.navigate(['prod-subcat'], navigationExtras);
        }
        else if (this.serviceId == 87) {
            let navigationExtras = {
                state: {
                    category_id: 3
                }
            };
            this.router.navigate(['prod-subcat'], navigationExtras);
        }
    }
    allService() {
        let navigationExtras = {
            state: {
                service: this.service
            }
        };
        this.router.navigate(['quick-book'], navigationExtras);
    }
    goToIssueList(service) {
        let navigationExtras = {
            state: {
                service: service
            }
        };
        this.router.navigate(['issue-list'], navigationExtras);
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
        this.navCtrl.navigateBack('trending');
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
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
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], TrendingIssuesPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-trending-issues-trending-issues-module-es2015.js.map