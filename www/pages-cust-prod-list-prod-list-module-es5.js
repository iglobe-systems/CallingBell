(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-prod-list-prod-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/prod-list/prod-list.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/prod-list/prod-list.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <div>\n      <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n    </div>\n         <ion-buttons slot=\"end\">\n      <ion-button shape=\"round\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h5 class=\"product-title\">Results for <b>{{name}}</b></h5>\n  <div *ngFor = \"let sclist of list\">\n        <ion-list>\n            <ion-item>\n              <div class=\"item-style\">\n                <div class=\"ion-text-center item-img-style\" (click)=\"getProductDesc(sclist)\">\n                    <img src=\"{{sclist.icon}}\" onError=\"this.src='http://apiv1.iglobesystems.com/assets/img/no_img.png'\" class=\"cat-img\"/>\n                </div>\n                 <div class=\"item-content-style\">\n                    <h5 class=\"cat-name fw600\" (click)=\"getProductDesc(sclist)\">{{sclist.name}}</h5>\n                    <h5 class=\"cat-quantity\" (click)=\"getProductDesc(sclist)\">{{sclist.quantity}}</h5>\n                    <h5 class=\"cat-brand\" (click)=\"getProductDesc(sclist)\">{{sclist.brand_name}}</h5>\n                    <ion-row class=\"cat-item-footer\">\n                      <ion-col class=\"ion-no-padding\" size=\"9\" (click)=\"getProductDesc(sclist)\">\n                        <h1 class=\"cat-mrp fw600\">&#8377; {{sclist.mrp}}</h1>\n                      </ion-col>\n                      <ion-col class=\"ion-no-padding\">\n                        <ion-buttons class=\"ion-text-center\">\n                          <ion-button size=\"small\" color=\"darkblue\" (click)=\"addToCart(sclist)\" tappable><ion-icon name=\"add-circle\"></ion-icon></ion-button>\n                        </ion-buttons>\n                      </ion-col>\n                    </ion-row>\n                 </div>\n                </div>\n            </ion-item>\n        </ion-list> \n  </div>\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"darkblue\" size=\"small\" (click)=\"opencart()\" #cart>\n      <!-- <div class=\"cart-length\">{{ cardItemCount | async }}</div> -->\n      <ion-icon name=\"cart\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/cust/prod-list/prod-list.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/cust/prod-list/prod-list.module.ts ***!
  \**********************************************************/
/*! exports provided: ProdListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdListPageModule", function() { return ProdListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prod_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prod-list.page */ "./src/app/pages/cust/prod-list/prod-list.page.ts");







var routes = [
    {
        path: '',
        component: _prod_list_page__WEBPACK_IMPORTED_MODULE_6__["ProdListPage"]
    }
];
var ProdListPageModule = /** @class */ (function () {
    function ProdListPageModule() {
    }
    ProdListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_prod_list_page__WEBPACK_IMPORTED_MODULE_6__["ProdListPage"]]
        })
    ], ProdListPageModule);
    return ProdListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cust/prod-list/prod-list.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/cust/prod-list/prod-list.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.product-title {\n  font-size: 16px;\n  margin: 10px;\n}\n\n.item-style {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n\n.item-content-style {\n  margin-left: 10px;\n  width: 100%;\n}\n\n.item-img-style {\n  width: 80px;\n  height: 80px;\n}\n\n.cat-main {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.cat-header {\n  margin: 2% 5%;\n  text-transform: capitalize;\n}\n\n.cat-img {\n  width: auto;\n  height: auto;\n  max-width: 70px;\n  max-height: 70px;\n}\n\n.cat-divsize {\n  display: inline-block;\n  width: 48%;\n  text-align: center;\n  margin: 1%;\n  padding-bottom: 4%;\n}\n\n.cat-name {\n  margin: 0;\n  font-size: 14px;\n  padding: 2px;\n  text-transform: capitalize;\n}\n\n.cat-quantity {\n  margin: 0;\n  padding: 1px;\n  font-size: 12px;\n}\n\n.cat-brand {\n  margin: 0;\n  font-size: 13px;\n  padding: 1px;\n  text-transform: capitalize;\n}\n\n.cat-mrp {\n  margin: 0;\n  font-size: 18px;\n  padding: 1px;\n  color: #ffad00;\n}\n\n.cat-item-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLWxpc3QvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXGN1c3RcXHByb2QtbGlzdFxccHJvZC1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLWxpc3QvcHJvZC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSDs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLWxpc3QvcHJvZC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbG9nb3tcclxuICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLnByb2R1Y3QtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5pdGVtLXN0eWxle1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pdGVtLWNvbnRlbnQtc3R5bGV7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pdGVtLWltZy1zdHlsZXtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4uY2F0LW1haW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2F0LWhlYWRlcntcclxuICAgIG1hcmdpbjoyJSA1JTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY2F0LWltZ3tcclxuICAgd2lkdGg6IGF1dG87XHJcbiAgIGhlaWdodDogYXV0bztcclxuICAgbWF4LXdpZHRoOiA3MHB4O1xyXG4gICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4uY2F0LWRpdnNpemV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDo0OCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46MSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNCU7IFxyXG59XHJcblxyXG4uY2F0LW5hbWV7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOjJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY2F0LXF1YW50aXR5e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzoxcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5jYXQtYnJhbmR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nOjFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY2F0LW1ycHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgcGFkZGluZzoxcHg7XHJcbiAgICBjb2xvcjojZmZhZDAwO1xyXG59XHJcblxyXG4uY2F0LWl0ZW0tZm9vdGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iLCIuaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMTIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5wcm9kdWN0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5pdGVtLXN0eWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pdGVtLWNvbnRlbnQtc3R5bGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pdGVtLWltZy1zdHlsZSB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5jYXQtbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNhdC1oZWFkZXIge1xuICBtYXJnaW46IDIlIDUlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmNhdC1pbWcge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDcwcHg7XG4gIG1heC1oZWlnaHQ6IDcwcHg7XG59XG5cbi5jYXQtZGl2c2l6ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQ4JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDElO1xuICBwYWRkaW5nLWJvdHRvbTogNCU7XG59XG5cbi5jYXQtbmFtZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uY2F0LXF1YW50aXR5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNhdC1icmFuZCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uY2F0LW1ycCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxcHg7XG4gIGNvbG9yOiAjZmZhZDAwO1xufVxuXG4uY2F0LWl0ZW0tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/prod-list/prod-list.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/cust/prod-list/prod-list.page.ts ***!
  \********************************************************/
/*! exports provided: ProdListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdListPage", function() { return ProdListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _cart_cart_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cart/cart.page */ "./src/app/pages/cust/cart/cart.page.ts");









var ProdListPage = /** @class */ (function () {
    function ProdListPage(route, authService, alertService, loadingCtrl, alertCtrl, navCtrl, modalCtrl, router, cartService) {
        this.route = route;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.cartService = cartService;
    }
    ProdListPage.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProdListPage.prototype.getProducts = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.product = _this.router.getCurrentNavigation().extras.state.product.id;
                _this.name = _this.router.getCurrentNavigation().extras.state.product.name;
                _this.authService.getProds(_this.product).subscribe(function (result) {
                    console.log(result);
                    _this.list = result['data'].list;
                });
            }
        });
    };
    ProdListPage.prototype.addToCart = function (product) {
        this.alertService.cartNote('1 item added to cart');
        var qty = {
            "qty": "1"
        };
        this.authService.addToCart(qty, product).subscribe(function (result) {
            console.log(result);
        });
    };
    ProdListPage.prototype.opencart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _cart_cart_page__WEBPACK_IMPORTED_MODULE_7__["CartPage"],
                            cssClass: 'cart-modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProdListPage.prototype.getProductDesc = function (cat) {
        var navigationExtras = {
            state: {
                prod: cat
            }
        };
        this.router.navigate(['prod-desc'], navigationExtras);
        console.log(cat);
    };
    ProdListPage.prototype.back = function () {
        this.navCtrl.navigateBack('prod-subcat');
    };
    ProdListPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] }
    ]; };
    ProdListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prod-list',
            template: __webpack_require__(/*! raw-loader!./prod-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/prod-list/prod-list.page.html"),
            styles: [__webpack_require__(/*! ./prod-list.page.scss */ "./src/app/pages/cust/prod-list/prod-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]])
    ], ProdListPage);
    return ProdListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cust-prod-list-prod-list-module-es5.js.map