(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-prod-desc-prod-desc-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/prod-desc/prod-desc.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/prod-desc/prod-desc.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n        <div class=\"logo-in\"></div>\n         <ion-buttons slot=\"end\">\n      <ion-button shape=\"round\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n<div *ngFor=\"let pro of productDetail\">\n  <ion-row>\n    <ion-col>\n        <p>{{pro.brand}}</p>\n    </ion-col>\n    <ion-col>\n        <p class=\"ion-text-right\">{{pro.productCategory}}</p>\n    </ion-col>\n  </ion-row>\n  <h5>{{pro.productName}}</h5>\n\t<ion-slides [options]=\"slidesOptions2\">\n\t\t<ion-slide *ngFor=\"let img of images\">\n\t\t\t<ion-card class=\"view\"><img src=\"{{images[0][1]}}\" onError=\"this.src='http://kmvn.in/uploads/imagenot.png'\" tappable \n        (click)=\"openPreview(img)\"></ion-card>\n\t\t</ion-slide>\n\t\t<ion-slide>\n\t\t\t<ion-card class=\"view\"><!-- <img src=\"{{images[1][2]}}\"> --></ion-card>\n\t\t</ion-slide>\n\t\t<ion-slide> \n\t\t\t<ion-card class=\"view\"></ion-card>\n\t\t</ion-slide>\n\t</ion-slides>\n\n  <h4>MRP : <span>Rs {{pro.price}}</span> & FREE Delivery</h4>\n\n  <section>\n        <ion-button expand=\"block\" color=\"dark\" (click)=\"addToCart(pro)\">ADD TO CART &nbsp;<ion-icon name=\"ios-cart\"></ion-icon></ion-button>\n    </section>\n\n\t<h2>PRODUCT DESCRIPTION</h2><h4>{{pro.description}}</h4>\n\t\n\n  <ion-row class=\"ion-text-center\">\n    <ion-col>\n      <!-- <ion-icon name=\"ios-cash\" class=\"icon-large\"></ion-icon> -->\n      <i class=\"fas fa-money-bill\" style=\"font-size: 20px;color:green;\"></i>\n      <h1>Pay on Delivery</h1>\n    </ion-col>\n    <ion-col>\n      <!-- <ion-icon name=\"sync\" class=\"icon-large\"></ion-icon> -->\n      <i class=\"fas fa-redo\" style=\"font-size: 20px;color:red;\"></i>\n      <h1>10 Days Replacement</h1>\n    </ion-col>\n    <ion-col>\n      <!-- <ion-icon name=\"ios-home\" class=\"icon-large\"></ion-icon> -->\n      <i class=\"fas fa-truck\" style=\"font-size: 20px;color:brown;\"></i>\n      <h1>Calling Bell Delivered</h1>\n    </ion-col>\n    <ion-col>\n      <!-- <ion-icon name=\"ios-ribbon\" class=\"icon-large\"></ion-icon> -->\n      <i class=\"fas fa-ribbon\" style=\"font-size: 20px;color:gold;\"></i>\n      <h1>1 Year warranty</h1>\n    </ion-col>\n  </ion-row>\n\n   <ion-card class=\"ion-padding\">\n\t   <h2>Specifications</h2>\n   </ion-card>\n   <ion-card class=\"ion-padding\">\n\t   <h2>Features</h2>\n   </ion-card >\n   <ion-card class=\"ion-padding\">\n      <h2>Warranty</h2>\n    </ion-card>\n    <ion-card class=\"ion-padding\">\n      <h2>About the item</h2>\n    </ion-card>\n    <ion-card class=\"ion-padding\">\n      <h2>From the manufacturer</h2>\n    </ion-card>\n\n\t<h2>Ratings & Reviews</h2>\n\t<ion-item>\n          <ion-avatar slot=\"start\">\n            <img src=\"assets/img/avatar.png\">\n          </ion-avatar>\n          <ion-label>\n            <h3>Arun</h3>\n            <h3>Awesome Product</h3>\n            <p>Worth for money.. Happy for the product!</p>\n          </ion-label>\n    </ion-item>\n    <ion-item>\n          <ion-avatar slot=\"start\">\n            <img src=\"assets/img/avatar.png\">\n          </ion-avatar>\n          <ion-label>\n            <h3>Riaz</h3>\n            <h3>Its a big deal</h3>\n            <p>Good..</p>\n          </ion-label>\n    </ion-item>\n  </div>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"danger\" size=\"small\" (click)=\"opencart()\" #cart>\n      <div class=\"cart-length\">{{ cardItemCount | async }}</div>\n      <ion-icon name=\"cart\" class=\"cart-icon\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prod_desc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prod-desc.page */ "./src/app/pages/cust/prod-desc/prod-desc.page.ts");







const routes = [
    {
        path: '',
        component: _prod_desc_page__WEBPACK_IMPORTED_MODULE_6__["ProdDescPage"]
    }
];
let ProdDescPageModule = class ProdDescPageModule {
};
ProdDescPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_prod_desc_page__WEBPACK_IMPORTED_MODULE_6__["ProdDescPage"]]
    })
], ProdDescPageModule);



/***/ }),

/***/ "./src/app/pages/cust/prod-desc/prod-desc.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/cust/prod-desc/prod-desc.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-fab-button {\n  height: 70px;\n  width: 70px;\n}\n\n.cart-icon {\n  font-size: 40px;\n}\n\n.cart-length {\n  color: var(--ion-color-danger);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n\nimg {\n  width: 200px;\n  height: 220px;\n  background-size: 100% 100%;\n}\n\nh3 {\n  color: #4258FC;\n  margin: 2px 10px;\n}\n\n.view {\n  width: 200px;\n  height: 220px;\n  background-size: 100% 100%;\n}\n\n.icon-large {\n  font-size: 20px;\n  color: #ff5656;\n}\n\nh2 {\n  font-size: 16px;\n  color: black;\n  color: #FF0000;\n  text-transform: uppercase;\n}\n\nh1 {\n  font-size: 10px;\n  margin: 10px 0px 0px 0px;\n  text-transform: capitalize;\n}\n\np {\n  margin: 0px 10px;\n  color: #FF0000;\n  font-weight: 500;\n  overflow-x: hidden;\n  font-size: 14px;\n  height: 20px;\n}\n\nh4 {\n  font-size: 14px;\n}\n\nspan {\n  font-size: 26px;\n}\n\nrating ion-icon {\n  color: gray;\n}\n\nrating ion-icon.filled {\n  color: #ffb400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLWRlc2MvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXGN1c3RcXHByb2QtZGVzY1xccHJvZC1kZXNjLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLWRlc2MvcHJvZC1kZXNjLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FDRUQ7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0FDRUo7O0FEQ0E7RUFDQyxnQkFBQTtFQUNBLGNBQUE7RUFDRyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURDSTtFQUNFLGNBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3QvcHJvZC1kZXNjL3Byb2QtZGVzYy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiLWJ1dHRvbntcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG59XHJcblxyXG4uY2FydC1pY29ue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4uY2FydC1sZW5ndGh7XHJcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMThweDtcclxuICAgIGxlZnQ6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBtaW4td2lkdGg6IDI1cHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICBoZWlnaHQ6MjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIH1cclxuXHJcbmgze1xyXG5cdGNvbG9yOiM0MjU4RkM7XHJcblx0bWFyZ2luOjJweCAxMHB4O1xyXG59XHJcbi52aWV3e1xyXG5cdHdpZHRoOjIwMHB4O1xyXG5cdGhlaWdodDoyMjBweDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxufVxyXG5cclxuLmljb24tbGFyZ2V7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjojZmY1NjU2O1xyXG59XHJcblxyXG5oMntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgY29sb3I6I0ZGMDAwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luOjEwcHggMHB4IDBweCAwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxucHtcclxuXHRtYXJnaW46MHB4IDEwcHg7XHJcblx0Y29sb3I6I0ZGMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGhlaWdodDoyMHB4O1xyXG59XHJcblxyXG5oNHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuc3BhbntcclxuICAgIGZvbnQtc2l6ZToyNnB4O1xyXG59XHJcblxyXG5yYXRpbmcge1xyXG4gIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG5cclxuICAgICYuZmlsbGVkIHtcclxuICAgICAgY29sb3I6ICNmZmI0MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImlvbi1mYWItYnV0dG9uIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogNzBweDtcbn1cblxuLmNhcnQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmNhcnQtbGVuZ3RoIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMThweDtcbiAgbGVmdDogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1pbi13aWR0aDogMjVweDtcbiAgei1pbmRleDogMTA7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbmgzIHtcbiAgY29sb3I6ICM0MjU4RkM7XG4gIG1hcmdpbjogMnB4IDEwcHg7XG59XG5cbi52aWV3IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIyMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuLmljb24tbGFyZ2Uge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmY1NjU2O1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGJsYWNrO1xuICBjb2xvcjogI0ZGMDAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbnAge1xuICBtYXJnaW46IDBweCAxMHB4O1xuICBjb2xvcjogI0ZGMDAwMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbnNwYW4ge1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbnJhdGluZyBpb24taWNvbiB7XG4gIGNvbG9yOiBncmF5O1xufVxucmF0aW5nIGlvbi1pY29uLmZpbGxlZCB7XG4gIGNvbG9yOiAjZmZiNDAwO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image-modal/image-modal.page */ "./src/app/pages/cust/image-modal/image-modal.page.ts");
/* harmony import */ var _cart_cart_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cart/cart.page */ "./src/app/pages/cust/cart/cart.page.ts");










let ProdDescPage = class ProdDescPage {
    constructor(route, authService, alertService, loadingCtrl, alertCtrl, navCtrl, router, cartService, modalCtrl) {
        this.route = route;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.router = router;
        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.slidesOptions2 = {
            slidesPerView: 1.5
        };
        this.cart = [];
        this.items = [];
    }
    ngOnInit() {
        this.getProducts();
        this.cart = this.cartService.getCart();
        // this.products = this.cartService.getProducts();
        this.cardItemCount = this.cartService.getCartItemCount();
    }
    getProducts() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.product = this.router.getCurrentNavigation().extras.state.prod.productId;
                // this.brand = this.router.getCurrentNavigation().extras.state.brand.brand;
                console.log(this.product);
                //console.log(this.brand);
                this.authService.getProductDesc(this.product).subscribe(result => {
                    console.log(result);
                    this.productDetail = result['message'];
                    this.images = result['image'];
                    console.log(this.productDetail);
                    console.log(this.images);
                    // this.prod = result['message']
                });
            }
        });
    }
    addToCart(product) {
        this.cartService.addProduct(product);
        console.log(product);
    }
    opencart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.navCtrl.navigateForward('cart');
            let modal = yield this.modalCtrl.create({
                component: _cart_cart_page__WEBPACK_IMPORTED_MODULE_8__["CartPage"],
                cssClass: 'cart-modal'
            });
            modal.present();
        });
    }
    openPreview(img) {
        this.modalCtrl.create({
            component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_7__["ImageModalPage"],
            componentProps: {
                img: img
            }
        }).then(modal => modal.present());
    }
    back() {
        this.navCtrl.navigateBack('prod-subcat');
    }
};
ProdDescPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
ProdDescPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prod-desc',
        template: __webpack_require__(/*! raw-loader!./prod-desc.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/prod-desc/prod-desc.page.html"),
        styles: [__webpack_require__(/*! ./prod-desc.page.scss */ "./src/app/pages/cust/prod-desc/prod-desc.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], ProdDescPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-prod-desc-prod-desc-module-es2015.js.map