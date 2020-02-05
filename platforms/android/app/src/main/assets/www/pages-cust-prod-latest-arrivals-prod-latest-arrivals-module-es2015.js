(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-prod-latest-arrivals-prod-latest-arrivals-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/prod-latest-arrivals/prod-latest-arrivals.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/prod-latest-arrivals/prod-latest-arrivals.page.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n        <div class=\"logo-in\"></div>\n         <ion-buttons slot=\"end\">\n      <ion-button shape=\"round\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n<!-- <ion-card *ngIf=\"prodlist\"> -->\n  <h4>LATEST ARRIVALS UNDER \"{{subcat}}\"</h4>\n<!-- </ion-card> -->\n\n<div *ngFor = \"let prod of prodlist\" class=\"size\" (click)=\"getProductDesc(prod)\">\n <h5>{{prod.brand}}</h5>\n    <img src=\"{{prod.image}}\" onError=\"this.src='https://static.thenounproject.com/png/212328-200.png'\">\n       <h3>{{prod.productName}}</h3> \n       <h5>{{prod.capacity}}</h5>\n        <h2><span>&#8377;</span> {{prod.price}} </h2>\n          <!-- <ion-segment color=\"danger\" scrollable >\n            <ion-segment-button  (click)=\"addToCart(prod)\"  checked><ion-label color=\"danger\">Cart</ion-label></ion-segment-button>\n            <ion-segment-button  (click)=\"getProductDesc(prod)\" checked><ion-label color=\"warning\">Full Desc</ion-label></ion-segment-button>\n          </ion-segment>    -->    \n          <br>   \n</div>\n\n<!-- <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n  <ion-fab-button color=\"danger\" size=\"small\" (click)=\"opencart()\"><ion-icon name=\"cart\"></ion-icon></ion-fab-button>\n</ion-fab> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/prod-latest-arrivals/prod-latest-arrivals.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/cust/prod-latest-arrivals/prod-latest-arrivals.module.ts ***!
  \********************************************************************************/
/*! exports provided: ProdLatestArrivalsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdLatestArrivalsPageModule", function() { return ProdLatestArrivalsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prod_latest_arrivals_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prod-latest-arrivals.page */ "./src/app/pages/cust/prod-latest-arrivals/prod-latest-arrivals.page.ts");







const routes = [
    {
        path: '',
        component: _prod_latest_arrivals_page__WEBPACK_IMPORTED_MODULE_6__["ProdLatestArrivalsPage"]
    }
];
let ProdLatestArrivalsPageModule = class ProdLatestArrivalsPageModule {
};
ProdLatestArrivalsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_prod_latest_arrivals_page__WEBPACK_IMPORTED_MODULE_6__["ProdLatestArrivalsPage"]]
    })
], ProdLatestArrivalsPageModule);



/***/ }),

/***/ "./src/app/pages/cust/prod-latest-arrivals/prod-latest-arrivals.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/cust/prod-latest-arrivals/prod-latest-arrivals.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  color: white;\n}\n:host .size {\n  display: inline-block;\n  width: 48%;\n  text-align: center;\n  margin: 1%;\n}\n:host img {\n  width: 130px;\n  height: 100px;\n  border-radius: 5px;\n  margin-left: auto;\n  margin-right: auto;\n}\n:host h5 {\n  font-size: 0.8rem;\n  color: #868686;\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n:host h4 {\n  font-size: 16px;\n  font-weight: 600;\n}\n:host h2 {\n  font-size: 1rem;\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n:host h3 {\n  font-size: 1rem;\n  color: #f34d4d;\n  font-weight: 700;\n  overflow-x: hidden;\n  height: 1rem;\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n:host span {\n  font-size: 0.8rem;\n}\n:host .mrp {\n  text-decoration: line-through;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLWxhdGVzdC1hcnJpdmFscy9EOlxcUmlhelxcTmV3QVBLXFxOZXdBUEt2MC4xL3NyY1xcYXBwXFxwYWdlc1xcY3VzdFxccHJvZC1sYXRlc3QtYXJyaXZhbHNcXHByb2QtbGF0ZXN0LWFycml2YWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLWxhdGVzdC1hcnJpdmFscy9wcm9kLWxhdGVzdC1hcnJpdmFscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0FDRFI7QURJSTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0ZSO0FESUs7RUFDRCxZQUFBO0VBQ0EsYUFBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0hKO0FET0k7RUFDRyxpQkFBQTtFQUNBLGNBQUE7RUFDRSxlQUFBO0VBQ0Qsa0JBQUE7QUNMUjtBRE9JO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDTFI7QURPSTtFQUNJLGVBQUE7RUFDRSxlQUFBO0VBQ0Ysa0JBQUE7QUNMUjtBRE9JO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNFLGVBQUE7RUFDRixrQkFBQTtBQ0xSO0FET0k7RUFDSSxpQkFBQTtBQ0xSO0FET0k7RUFDSSw2QkFBQTtFQUNBLFVBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3QvcHJvZC1sYXRlc3QtYXJyaXZhbHMvcHJvZC1sYXRlc3QtYXJyaXZhbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjpob3N0e1xyXG4gICAgaW9uLWNhcmR7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuc2l6ZXtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDo0OCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMSU7XHJcbiAgICB9XHJcbiAgICAgaW1ne1xyXG4gICAgd2lkdGg6MTMwcHg7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICAvLyBoZWlnaHQ6NzUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGg1e1xyXG4gICAgICAgZm9udC1zaXplOjAuOHJlbTtcclxuICAgICAgIGNvbG9yOiM4Njg2ODY7XHJcbiAgICAgICAgIG1hcmdpbi10b3A6N3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206N3B4O1xyXG4gICAgfVxyXG4gICAgaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXNpemU6MXJlbTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6N3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206N3B4O1xyXG4gICAgfVxyXG4gICAgaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGNvbG9yOiNmMzRkNGQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOjdweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjdweDtcclxuICAgIH1cclxuICAgIHNwYW57XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbiAgICAubXJwe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgIGNvbG9yOnJlZDtcclxuICAgIH1cclxufVxyXG4iLCI6aG9zdCBpb24tY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0IC5zaXplIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDglO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMSU7XG59XG46aG9zdCBpbWcge1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbjpob3N0IGg1IHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjODY4Njg2O1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cbjpob3N0IGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuOmhvc3QgaDIge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuOmhvc3QgaDMge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjZjM0ZDRkO1xuICBmb250LXdlaWdodDogNzAwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGhlaWdodDogMXJlbTtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG46aG9zdCBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG46aG9zdCAubXJwIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/cust/prod-latest-arrivals/prod-latest-arrivals.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/cust/prod-latest-arrivals/prod-latest-arrivals.page.ts ***!
  \******************************************************************************/
/*! exports provided: ProdLatestArrivalsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdLatestArrivalsPage", function() { return ProdLatestArrivalsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");








let ProdLatestArrivalsPage = class ProdLatestArrivalsPage {
    constructor(route, authService, alertService, loadingCtrl, alertCtrl, navCtrl, router, cartService) {
        this.route = route;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.router = router;
        this.cartService = cartService;
    }
    ngOnInit() {
        this.getProducts();
    }
    getProducts() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.prodcat = this.router.getCurrentNavigation().extras.state.prodcat;
                this.subcat = this.router.getCurrentNavigation().extras.state.subCat.subcategory;
                console.log(this.prodcat);
                console.log(this.subcat);
                this.authService.getLatestArrival(this.prodcat, this.subcat).subscribe(result => {
                    console.log(result);
                    this.prodlist = result['message'];
                    console.log(this.prodlist);
                    // this.prod = result['message']
                });
            }
        });
    }
    getProductDesc(prod) {
        let navigationExtras = {
            state: {
                prod: prod
            }
        };
        this.router.navigate(['prod-desc'], navigationExtras);
        console.log(prod);
    }
    opencart() {
        this.navCtrl.navigateForward('cart');
    }
    back() {
        this.navCtrl.navigateBack('prod-subcat');
    }
};
ProdLatestArrivalsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] }
];
ProdLatestArrivalsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prod-latest-arrivals',
        template: __webpack_require__(/*! raw-loader!./prod-latest-arrivals.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/prod-latest-arrivals/prod-latest-arrivals.page.html"),
        styles: [__webpack_require__(/*! ./prod-latest-arrivals.page.scss */ "./src/app/pages/cust/prod-latest-arrivals/prod-latest-arrivals.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]])
], ProdLatestArrivalsPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-prod-latest-arrivals-prod-latest-arrivals-module-es2015.js.map