(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-prod-desc-prod-desc-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/prod-desc/prod-desc.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/prod-desc/prod-desc.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n      <ion-buttons slot=\"start\">\n         <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-buttons>\n  \n      <div>\n          <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n        </div>\n     \n      <ion-buttons slot=\"end\">\n        <ion-button shape=\"round\" (click)=\"back()\">\n          <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div *ngIf=\"productDesc\">\n      <div class=\"div-header\">\n        <h5 class=\"bc-style\">\n          {{productDesc.brand_name}}\n        </h5>\n        <h5 class=\"bc-style\">\n          {{productDesc.category_name}}\n        </h5>\n      </div>\n      <h5 class=\"prod-name fw600\">{{productDesc.name}}</h5>\n      <ion-slides [options]=\"slidesOptions1\">\n        <ion-slide>\n          <ion-card class=\"view\"><img src=\"{{productDesc.icon}}\" onError=\"this.src='http://kmvn.in/uploads/imagenot.png'\" tappable \n            (click)=\"openPreview(productDesc.icon)\" class=\"prod-img\"></ion-card>\n        </ion-slide>\n        <ion-slide>\n          <ion-card class=\"view\"></ion-card>\n        </ion-slide>\n        <ion-slide> \n          <ion-card class=\"view\"></ion-card>\n        </ion-slide>\n      </ion-slides>\n    \n      <h4 class=\"prod-mrp\">MRP : <span class=\"prod-mrpspan fw600\">Rs {{productDesc.mrp}}</span> & FREE Delivery </h4>\n      \n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col>\n            <form [formGroup]=\"onQtyForm\">\n                <ion-item class=\"no-lines\">\n                    <ion-label>Qty : </ion-label>\n                    <select type=\"number\" formControlName=\"qty\" color=\"darkblue\">\n                      <option></option>\n                      <option *ngFor = \"let count of productDesc.max_count\">{{count}}</option>\n                    </select>\n                </ion-item>\n                <p ion-text class=\"text08\" *ngIf=\"onQtyForm.get('qty').touched && onQtyForm.get('qty').hasError('required')\">\n                    <ion-text color=\"palegreen\">\n                      Please select quantity\n                    </ion-text>\n                  </p>\n            </form>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button expand=\"block\" color=\"gold\" (click)=\"addToCart(productDesc)\" [disabled]=\"!onQtyForm.valid\" tappable>ADD TO CART &nbsp;<ion-icon name=\"ios-cart\"></ion-icon></ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    \n      \n      \n    \n      <ion-row class=\"ion-text-center\">\n        <ion-col>\n          <i class=\"fas fa-money-bill\" style=\"font-size: 20px;color:#0e0e27;\"></i>\n          <h1 class=\"icon-header\">Pay on Delivery</h1>\n        </ion-col>\n        <ion-col>\n          <i class=\"fas fa-redo\" style=\"font-size: 20px;color:#0e0e27;\"></i>\n          <h1 class=\"icon-header\">10 Days Replacement</h1>\n        </ion-col>\n        <ion-col>\n          <i class=\"fas fa-truck\" style=\"font-size: 20px;color:#0e0e27;\"></i>\n          <h1 class=\"icon-header\">Calling Bell Delivered</h1>\n        </ion-col>\n        <ion-col>\n          <i class=\"fas fa-ribbon\" style=\"font-size: 20px;color:#0e0e27;\"></i>\n          <h1 class=\"icon-header\">1 Year warranty</h1>\n        </ion-col>\n      </ion-row>\n    \n      <!-- <ion-card class=\"ion-padding\"> -->\n        <div class=\"ion-padding\">\n            <h2 class=\"prod-desc-header fw600\">PRODUCT DESCRIPTION</h2>\n            <h4 class=\"prod-desc-content\">{{productDesc.short_details}}</h4>\n        </div>\n      <!-- </ion-card> -->\n\n       <ion-card class=\"ion-padding\">\n         <h2 class=\"prod-desc-header fw600\">Specifications</h2>\n       </ion-card>\n       <ion-card class=\"ion-padding\">\n         <h2 class=\"prod-desc-header fw600\">Features</h2>\n       </ion-card >\n       <ion-card class=\"ion-padding\">\n          <h2 class=\"prod-desc-header fw600\">Warranty</h2>\n        </ion-card>\n        <ion-card class=\"ion-padding\">\n          <h2 class=\"prod-desc-header fw600\">About the item</h2>\n        </ion-card>\n        <ion-card class=\"ion-padding\">\n          <h2 class=\"prod-desc-header fw600\">From the manufacturer</h2>\n        </ion-card>\n    \n      <h2 class=\"prod-name\">RATINGS & REVIEWS</h2>\n      <ion-item>\n              <ion-avatar slot=\"start\">\n                <img src=\"assets/img/avatar.png\">\n              </ion-avatar>\n              <ion-label>\n                <h3 class=\"review fw600\">Doss</h3>\n                <h3 class=\"review\">Awesome Product</h3>\n                <p>Worth for money.. Happy for the product!</p>\n              </ion-label>\n        </ion-item>\n        <ion-item>\n              <ion-avatar slot=\"start\">\n                <img src=\"assets/img/avatar.png\">\n              </ion-avatar>\n              <ion-label>\n                <h3 class=\"review fw600\">Riaz</h3>\n                <h3 class=\"review\">Its a big deal</h3>\n                <p>Good..</p>\n              </ion-label>\n        </ion-item>\n      </div>\n\n      <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n          <ion-fab-button color=\"darkblue\" size=\"small\" (click)=\"opencart()\" #cart>\n            <!-- <div class=\"cart-length\">{{ cardItemCount | async }}</div> -->\n            <ion-icon name=\"cart\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/prod-desc/prod-desc.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/cust/prod-desc/prod-desc.module.ts ***!
  \**********************************************************/
/*! exports provided: ProdDescPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdDescPageModule", function() { return ProdDescPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prod_desc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prod-desc.page */ "./src/app/pages/cust/prod-desc/prod-desc.page.ts");







var routes = [
    {
        path: '',
        component: _prod_desc_page__WEBPACK_IMPORTED_MODULE_6__["ProdDescPage"]
    }
];
var ProdDescPageModule = /** @class */ (function () {
    function ProdDescPageModule() {
    }
    ProdDescPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_prod_desc_page__WEBPACK_IMPORTED_MODULE_6__["ProdDescPage"]]
        })
    ], ProdDescPageModule);
    return ProdDescPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cust/prod-desc/prod-desc.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/cust/prod-desc/prod-desc.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.div-header {\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.bc-style {\n  margin: 0;\n  color: #0e0e27;\n  font-size: 15px;\n}\n\n.prod-name {\n  margin: 2% 0%;\n  font-size: 16px;\n}\n\n.prod-img {\n  width: 200px;\n  height: 200px;\n  background-size: 100% 100%;\n}\n\n.view {\n  width: 200px;\n  height: 200px;\n  background-size: 100% 100%;\n}\n\n.prod-mrp {\n  margin: 0;\n  font-size: 14px;\n}\n\n.prod-mrpspan {\n  font-size: 20px;\n  color: #ffad00;\n}\n\n.prod-desc-header {\n  margin: 0;\n  font-size: 15px;\n  color: #0e0e27;\n  text-transform: uppercase;\n}\n\n.prod-desc-content {\n  font-size: 14px;\n  margin: 10px 0px;\n}\n\n.icon-header {\n  font-size: 10px;\n  margin: 10px 0px 0px 0px;\n  text-transform: capitalize;\n}\n\n.review {\n  color: #ffad00;\n  margin: 2px 10px;\n}\n\n.btn-style {\n  padding: 0;\n  text-align: center;\n}\n\n.qty-style {\n  font-size: 14px;\n  padding: 0;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLWRlc2MvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXGN1c3RcXHByb2QtZGVzY1xccHJvZC1kZXNjLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLWRlc2MvcHJvZC1kZXNjLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNDLGNBQUE7RUFDRyxnQkFBQTtBQ0NKOztBREdBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdXN0L3Byb2QtZGVzYy9wcm9kLWRlc2MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1sb2dve1xyXG4gICAgd2lkdGg6MTIwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZGl2LWhlYWRlcntcclxuICAgIG1hcmdpbjowO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmJjLXN0eWxle1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IzBlMGUyNztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnByb2QtbmFtZXtcclxuICAgIG1hcmdpbjogMiUgMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5wcm9kLWltZ3tcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICB9XHJcblxyXG4udmlld3tcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuICAgIFxyXG4ucHJvZC1tcnB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5wcm9kLW1ycHNwYW57XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjojZmZhZDAwO1xyXG59XHJcblxyXG4ucHJvZC1kZXNjLWhlYWRlcntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiMwZTBlMjc7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ucHJvZC1kZXNjLWNvbnRlbnR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46MTBweCAwcHg7XHJcbn1cclxuXHJcbi5pY29uLWhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbjoxMHB4IDBweCAwcHggMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5yZXZpZXd7XHJcblx0Y29sb3I6I2ZmYWQwMDtcclxuICAgIG1hcmdpbjoycHggMTBweDtcclxufVxyXG5cclxuXHJcbi5idG4tc3R5bGV7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufVxyXG5cclxuLnF0eS1zdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59IiwiLmhlYWRlci1sb2dvIHtcbiAgd2lkdGg6IDEyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uZGl2LWhlYWRlciB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYmMtc3R5bGUge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMGUwZTI3O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5wcm9kLW5hbWUge1xuICBtYXJnaW46IDIlIDAlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5wcm9kLWltZyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi52aWV3IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuLnByb2QtbXJwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wcm9kLW1ycHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZhZDAwO1xufVxuXG4ucHJvZC1kZXNjLWhlYWRlciB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzBlMGUyNztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnByb2QtZGVzYy1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4uaWNvbi1oZWFkZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5yZXZpZXcge1xuICBjb2xvcjogI2ZmYWQwMDtcbiAgbWFyZ2luOiAycHggMTBweDtcbn1cblxuLmJ0bi1zdHlsZSB7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnF0eS1zdHlsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/prod-desc/prod-desc.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/cust/prod-desc/prod-desc.page.ts ***!
  \********************************************************/
/*! exports provided: ProdDescPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdDescPage", function() { return ProdDescPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../image-modal/image-modal.page */ "./src/app/pages/cust/image-modal/image-modal.page.ts");
/* harmony import */ var _cart_cart_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cart/cart.page */ "./src/app/pages/cust/cart/cart.page.ts");











var ProdDescPage = /** @class */ (function () {
    function ProdDescPage(route, authService, alertService, loadingCtrl, alertCtrl, navCtrl, router, cartService, modalCtrl, formBuilder) {
        this.route = route;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.router = router;
        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.slidesOptions1 = {
            slidesPerView: 1.5
        };
        this.cart = [];
    }
    ProdDescPage.prototype.ngOnInit = function () {
        this.onQtyForm = this.formBuilder.group({
            'qty': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.getGroceryDesc();
        this.cart = this.cartService.getCart();
        this.cardItemCount = this.cartService.getCartItemCount();
    };
    ProdDescPage.prototype.getGroceryDesc = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.desc = _this.router.getCurrentNavigation().extras.state.prod.id;
                _this.authService.getProdsDesc(_this.desc).subscribe(function (result) {
                    _this.productDesc = result['data'];
                    console.log(_this.productDesc);
                });
            }
        });
    };
    ProdDescPage.prototype.addToCart = function (product) {
        this.alertService.cartNote('1 item added to cart');
        // this.cartService.addProduct(product);
        console.log(product);
        console.log(this.onQtyForm.value);
        this.authService.addToCart(this.onQtyForm.value, product).subscribe(function (result) {
            console.log(result);
        });
    };
    ProdDescPage.prototype.opencart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _cart_cart_page__WEBPACK_IMPORTED_MODULE_9__["CartPage"],
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
    ProdDescPage.prototype.openPreview = function (img) {
        this.modalCtrl.create({
            component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_8__["ImageModalPage"],
            componentProps: {
                img: img
            }
        }).then(function (modal) { return modal.present(); });
    };
    ProdDescPage.prototype.back = function () {
        this.navCtrl.navigateBack('prod-subcat');
    };
    ProdDescPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cart', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProdDescPage.prototype, "fab", void 0);
    ProdDescPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prod-desc',
            template: __webpack_require__(/*! raw-loader!./prod-desc.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/prod-desc/prod-desc.page.html"),
            styles: [__webpack_require__(/*! ./prod-desc.page.scss */ "./src/app/pages/cust/prod-desc/prod-desc.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ProdDescPage);
    return ProdDescPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cust-prod-desc-prod-desc-module-es5.js.map