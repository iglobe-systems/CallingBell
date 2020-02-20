(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-groceries-groceries-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/groceries/groceries.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/groceries/groceries.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"darkblue\">\r\n    <ion-buttons slot=\"start\">\r\n       <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n\t <div>\r\n\t\t<img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\r\n\t  </div>\r\n\t <ion-buttons slot=\"end\">\r\n\t\t<ion-button shape=\"round\" (click)=\"back()\">\r\n\t\t\t<ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\r\n\t\t</ion-button>\r\n\t </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\t<ion-searchbar mode=\"ios\" placeholder=\"Search in store\" class=\"ion-no-padding\"></ion-searchbar>\r\n\t<!-- <div class=\"bg-header\">\r\n\t\t<img src=\"assets/img/bg/groceries-bg.png\">\r\n\t\t<h5 class=\"header-item\">HASSEL FREE SELECTION</h5>\r\n\t\t<ion-button size=\"small\" class=\"header-btn\" color=\"redtwo\" (click)=\"quickbuy()\">QUICK BUY</ion-button>\r\n\t</div> -->\r\n\r\n\t<div *ngFor=\"let cat of groceryCat\">\r\n\t\t\t<h1>{{cat.name}}</h1>\r\n\t\t\t<!-- <img src=\"{{cat.icon}}\"/> -->\r\n\t\t\t<div class=\"div-item\" >\r\n\t\t\t\t<div *ngFor=\"let item of cat.item_list\" (click)=\"getGrocerylt(item)\" class=\"div-size\">\r\n\t\t\t\t\t<img src=\"{{item.icon}}\" onError=\"this.src='http://apiv1.iglobesystems.com/assets/img/no_img.png'\" class=\"img-item\">\r\n\t\t\t\t\t<h3>{{item.name}}</h3>\r\n\t\t\t\t\t<!-- <ion-icon slot=\"icon-only\" name=\"arrow-dropright\"></ion-icon> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t</div>\r\n\r\n\t<img src=\"assets/img/ads/organic.jpg\" (click)=\"goToOrganics()\"/>\r\n\t\r\n\t<ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n            <ion-fab-button color=\"darkblue\" size=\"small\" (click)=\"opencart()\" #cart>\r\n              <!-- <div class=\"cart-length\">{{ cardItemCount | async }}</div> -->\r\n              <ion-icon name=\"cart\"></ion-icon>\r\n            </ion-fab-button>\r\n          </ion-fab>\r\n</ion-content>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/groceries/groceries.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/groceries/groceries.module.ts ***!
  \*******************************************************************/
/*! exports provided: GroceriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceriesPageModule", function() { return GroceriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _groceries_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./groceries.page */ "./src/app/pages/cust/spec-cat/groceries/groceries.page.ts");







const routes = [
    {
        path: '',
        component: _groceries_page__WEBPACK_IMPORTED_MODULE_6__["GroceriesPage"]
    }
];
let GroceriesPageModule = class GroceriesPageModule {
};
GroceriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_groceries_page__WEBPACK_IMPORTED_MODULE_6__["GroceriesPage"]]
    })
], GroceriesPageModule);



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/groceries/groceries.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/groceries/groceries.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.img-bg {\n  width: 100%;\n  height: auto;\n}\n\n.img-item {\n  width: 50px;\n  height: 50px;\n}\n\n.div-size {\n  text-align: center;\n  -webkit-box-flex: 0;\n          flex: none;\n  width: 95px;\n}\n\n.div-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  overflow-x: scroll;\n}\n\nh3 {\n  text-transform: uppercase;\n  font-size: 11px;\n  margin: 5% 0;\n}\n\nh1 {\n  text-transform: uppercase;\n  font-weight: 600;\n  color: #0e0e27;\n  margin: 4% 0%;\n  font-size: 18px;\n}\n\n.bg-header {\n  background: url('grocery-bg.jpg') no-repeat center center/cover;\n}\n\n.header-item {\n  padding: 10% 0 0 10%;\n  margin: 0;\n  font-weight: 800;\n}\n\n.header-btn {\n  margin: 5% 0 5% 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9ncm9jZXJpZXMvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXGN1c3RcXHNwZWMtY2F0XFxncm9jZXJpZXNcXGdyb2Nlcmllcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvZ3JvY2VyaWVzL2dyb2Nlcmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtVQUFBLFVBQUE7RUFDQSxXQUFBO0FDQ0Q7O0FESUE7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0REOztBRE1BO0VBQ0MseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0hEOztBRE1BO0VBQ0MseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0hEOztBRE1BO0VBQ0MsK0RBQUE7QUNIRDs7QURNQTtFQUNDLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDSEQ7O0FETUE7RUFDQyxtQkFBQTtBQ0hEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9ncm9jZXJpZXMvZ3JvY2VyaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbG9nb3tcclxuICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmltZy1iZ3tcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmltZy1pdGVte1xyXG5cdHdpZHRoOiA1MHB4O1xyXG5cdGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmRpdi1zaXple1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmbGV4OiBub25lO1xyXG5cdHdpZHRoOiA5NXB4O1xyXG5cdC8vIG92ZXJmbG93LXg6IGF1dG87XHJcblx0Ly8gb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4uZGl2LWl0ZW17XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdG92ZXJmbG93LXg6IHNjcm9sbDtcclxuXHQvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG5cdC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbmgze1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdG1hcmdpbjogNSUgMDtcclxufVxyXG5cclxuaDF7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGNvbG9yOiAjMGUwZTI3O1xyXG5cdG1hcmdpbjogNCUgMCU7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uYmctaGVhZGVye1xyXG5cdGJhY2tncm91bmQ6IHVybChzcmMvYXNzZXRzL2ltZy9iZy9ncm9jZXJ5LWJnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxufVxyXG5cclxuLmhlYWRlci1pdGVte1xyXG5cdHBhZGRpbmc6IDEwJSAwIDAgMTAlO1xyXG5cdG1hcmdpbjogMDtcclxuXHRmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uaGVhZGVyLWJ0bntcclxuXHRtYXJnaW46IDUlIDAgNSUgMTAlO1xyXG59IiwiLmhlYWRlci1sb2dvIHtcbiAgd2lkdGg6IDEyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uaW1nLWJnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmltZy1pdGVtIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmRpdi1zaXplIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4OiBub25lO1xuICB3aWR0aDogOTVweDtcbn1cblxuLmRpdi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuXG5oMyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luOiA1JSAwO1xufVxuXG5oMSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMGUwZTI3O1xuICBtYXJnaW46IDQlIDAlO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5iZy1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWcvYmcvZ3JvY2VyeS1iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xufVxuXG4uaGVhZGVyLWl0ZW0ge1xuICBwYWRkaW5nOiAxMCUgMCAwIDEwJTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uaGVhZGVyLWJ0biB7XG4gIG1hcmdpbjogNSUgMCA1JSAxMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/groceries/groceries.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/groceries/groceries.page.ts ***!
  \*****************************************************************/
/*! exports provided: GroceriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceriesPage", function() { return GroceriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cart_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cart/cart.page */ "./src/app/pages/cust/cart/cart.page.ts");







let GroceriesPage = class GroceriesPage {
    constructor(authService, alertService, loadingCtrl, alertCtrl, modalCtrl, navCtrl, popoverCtrl, router) {
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.router = router;
    }
    ngOnInit() {
        this.getGroceryCat();
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
    getGroceryCat() {
        this.authService.getProds("17").subscribe(result => {
            console.log(result);
            this.groceryCat = result['data'].list;
            console.log(this.groceryCat);
        });
    }
    getGrocerylt(catId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let navigationExtras = {
                state: {
                    catId: catId
                }
            };
            this.router.navigate(['grocery-level2'], navigationExtras);
            console.log(catId);
        });
    }
    goToOrganics() {
        let catId = {
            "id": 178,
            "name": "organics"
        };
        let navigationExtras = {
            state: {
                catId: catId
            }
        };
        this.router.navigate(['grocery-level2'], navigationExtras);
    }
    back() {
        this.navCtrl.navigateBack('cust-home');
    }
    quickbuy() {
        this.navCtrl.navigateForward('quick-buy');
    }
};
GroceriesPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
GroceriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-groceries',
        template: __webpack_require__(/*! raw-loader!./groceries.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/groceries/groceries.page.html"),
        styles: [__webpack_require__(/*! ./groceries.page.scss */ "./src/app/pages/cust/spec-cat/groceries/groceries.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], GroceriesPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-groceries-groceries-module-es2015.js.map