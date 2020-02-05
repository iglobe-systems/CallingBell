(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-prod-list-prod-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/prod-list/prod-list.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/prod-list/prod-list.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n        <div class=\"logo-in\"></div>\n         <ion-buttons slot=\"end\">\n      <ion-button shape=\"round\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n<!-- <ion-card *ngIf=\"prodlist\"> -->\n  <h4 *ngIf=\"prodlist\">Results for \"{{brand}}\"</h4>\n<!-- </ion-card> -->\n\n<div *ngFor = \"let prod of prodlist\" class=\"size\" (click)=\"getProductDesc(prod)\">\n <!-- <h5>{{prod.brand}}</h5> -->\n    <img src=\"{{prod.image}}\" onError=\"this.src='https://static.thenounproject.com/png/212328-200.png'\">\n       <h3>{{prod.productname}}</h3> \n       <h5>{{prod.capacity}}</h5>\n        <h2><span>&#8377;</span> {{prod.price}}</h2>\n          <!-- <ion-segment color=\"danger\" scrollable >\n            <ion-segment-button  (click)=\"addToCart(prod)\"  checked><ion-label color=\"danger\">Cart</ion-label></ion-segment-button>\n            <ion-segment-button  (click)=\"getProductDesc(prod)\" checked><ion-label color=\"warning\">Full Desc</ion-label></ion-segment-button>\n          </ion-segment>    -->    \n          <br>   \n</div>\n\n<!-- <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n  <ion-fab-button color=\"danger\" size=\"small\" (click)=\"opencart()\"><ion-icon name=\"cart\"></ion-icon></ion-fab-button>\n</ion-fab> -->\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prod_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prod-list.page */ "./src/app/pages/cust/prod-list/prod-list.page.ts");







const routes = [
    {
        path: '',
        component: _prod_list_page__WEBPACK_IMPORTED_MODULE_6__["ProdListPage"]
    }
];
let ProdListPageModule = class ProdListPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/cust/prod-list/prod-list.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/cust/prod-list/prod-list.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  color: white;\n}\n:host .size {\n  display: inline-block;\n  width: 48%;\n  text-align: center;\n  margin: 1%;\n}\n:host img {\n  width: 130px;\n  height: 100px;\n  border-radius: 5px;\n  margin-left: auto;\n  margin-right: auto;\n}\n:host h5 {\n  font-size: 0.8rem;\n  color: #868686;\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n:host h4 {\n  font-size: 16px;\n  font-weight: 600;\n}\n:host h2 {\n  font-size: 1rem;\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n:host h3 {\n  font-size: 1rem;\n  color: #f34d4d;\n  font-weight: 700;\n  overflow-x: hidden;\n  height: 1rem;\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n:host span {\n  font-size: 0.8rem;\n}\n:host .mrp {\n  text-decoration: line-through;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLWxpc3QvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXGN1c3RcXHByb2QtbGlzdFxccHJvZC1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLWxpc3QvcHJvZC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7QUNEUjtBRElJO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDRlI7QURJSztFQUNELFlBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSEo7QURPSTtFQUNHLGlCQUFBO0VBQ0EsY0FBQTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtBQ0xSO0FET0s7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7QUNMUjtBRE9JO0VBQ0ksZUFBQTtFQUNDLGVBQUE7RUFDRCxrQkFBQTtBQ0xSO0FET0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTFI7QURPSTtFQUNJLGlCQUFBO0FDTFI7QURPSTtFQUNJLDZCQUFBO0VBQ0EsVUFBQTtBQ0xSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLWxpc3QvcHJvZC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46aG9zdHtcclxuICAgIGlvbi1jYXJke1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpemV7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6NDglO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDElO1xyXG4gICAgfVxyXG4gICAgIGltZ3tcclxuICAgIHdpZHRoOjEzMHB4O1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgLy8gaGVpZ2h0Ojc1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoNXtcclxuICAgICAgIGZvbnQtc2l6ZTowLjhyZW07XHJcbiAgICAgICBjb2xvcjojODY4Njg2O1xyXG4gICAgICAgIG1hcmdpbi10b3A6N3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206N3B4O1xyXG4gICAgfVxyXG4gICAgIGg0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgIG1hcmdpbi10b3A6N3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206N3B4O1xyXG4gICAgfVxyXG4gICAgaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGNvbG9yOiNmMzRkNGQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBvdmVyZmxvdy14OmhpZGRlbjsgICBcclxuICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDo3cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo3cHg7XHJcbiAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gICAgLm1ycHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiOmhvc3QgaW9uLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogd2hpdGU7XG59XG46aG9zdCAuc2l6ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQ4JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDElO1xufVxuOmhvc3QgaW1nIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG46aG9zdCBoNSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzg2ODY4NjtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG46aG9zdCBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbjpob3N0IGgyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cbjpob3N0IGgzIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogI2YzNGQ0ZDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBoZWlnaHQ6IDFyZW07XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuOmhvc3Qgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuOmhvc3QgLm1ycCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");








let ProdListPage = class ProdListPage {
    constructor(route, authService, alertService, loadingCtrl, alertCtrl, navCtrl, router, cartService) {
        this.route = route;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.router = router;
        this.cartService = cartService;
        this.cart = [];
        this.items = [];
    }
    ngOnInit() {
        // this.items = this.getProducts();
        this.getProducts();
        this.cart = this.cartService.getCart();
        // this.items = this.cartService.getProducts();
    }
    addToCart(product) {
        this.cartService.addProduct(product);
    }
    openCart() {
        this.router.navigate(['cart']);
    }
    getProducts() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.cat = this.router.getCurrentNavigation().extras.state.prodcat;
                this.brand = this.router.getCurrentNavigation().extras.state.brand;
                console.log(this.cat);
                console.log(this.brand);
                this.authService.getProductList(this.cat, this.brand).subscribe(result => {
                    console.log(result);
                    this.prodlist = result['message'];
                    console.log(this.prodlist);
                    // this.prod = result['message']
                });
            }
        });
    }
    // showProducts(brand){
    //   this.brand = brand.brand;
    //   console.log(brand.brand);
    //   this.authService.getProductList(this.brand,this.pro).subscribe(result =>{
    //     console.log(result);
    //    this.products = result['message'];
    //   });
    // }
    getProductDesc(prod) {
        let navigationExtras = {
            state: {
                prod: prod
            }
        };
        this.router.navigate(['prod-desc'], navigationExtras);
        console.log(prod);
    }
    back() {
        this.navCtrl.navigateBack('prod-subcat');
    }
};
ProdListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] }
];
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
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]])
], ProdListPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-prod-list-prod-list-module-es2015.js.map