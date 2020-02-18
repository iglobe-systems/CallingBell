(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-grocery-grocery-level2-grocery-level2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/grocery/grocery-level2/grocery-level2.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/grocery/grocery-level2/grocery-level2.page.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"darkblue\">\n      <ion-buttons slot=\"start\">\n         <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-buttons>\n  \n      <div>\n          <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n        </div>\n     \n      <ion-buttons slot=\"end\">\n        <ion-button shape=\"round\" (click)=\"back()\">\n          <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar mode=\"ios\" placeholder=\"Search in store\"></ion-searchbar>\n  <div class=\"cat-main\">\n      <h5 class=\"cat-header\">Results in {{categoryName}}</h5>\n      <ion-buttons class=\"filter-button\">\n          <ion-button shape=\"round\" (click)=\"groFilter()\">\n             <ion-icon name=\"funnel\" mode=\"ios\" color=\"darkblue\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n  </div>\n\n  <div *ngFor=\"let cat of groceryCat\">\n<ion-list>\n  <ion-item>\n    <div class=\"item-style\">\n      <div class=\"ion-text-center item-img-style\" (click)=\"grocerydesc(cat.id)\">\n          <img src=\"{{cat.icon}}\" onError=\"this.src='http://apiv1.iglobesystems.com/assets/img/no_img.png'\" class=\"cat-img\"/>\n      </div>\n       <div class=\"item-content-style\">\n          <h5 class=\"cat-name fw600\" (click)=\"grocerydesc(cat.id)\">{{cat.name}}</h5>\n          <h5 class=\"cat-quantity\" (click)=\"grocerydesc(cat.id)\">{{cat.quantity}}</h5>\n          <h5 class=\"cat-brand\" (click)=\"grocerydesc(cat.id)\">{{cat.brand_name}}</h5>\n          <ion-row class=\"cat-item-footer\">\n            <ion-col class=\"ion-no-padding\" size=\"7\">\n              <h1 class=\"cat-mrp fw600\" (click)=\"grocerydesc(cat.id)\">&#8377; {{cat.mrp}}</h1>\n            </ion-col>\n            <ion-col>\n              <!-- <ion-select interface=\"popover\" type=\"number\" color=\"darkblue\">\n                <ion-select-option *ngFor = \"let count of cat.max_count\">{{count}}</ion-select-option>\n              </ion-select> -->\n              <form [formGroup]=\"onQtyForm\">\n                <select formControlName=\"qty\" interface=\"popover\">\n                  <option></option>\n                  <option *ngFor = \"let count of cat.max_count\" value=\"{{count}}\">{{count}}</option>\n                </select>\n              </form>\n            </ion-col>\n            <ion-col class=\"ion-no-padding\">\n              <ion-buttons class=\"ion-text-center\">\n                <ion-button size=\"small\" color=\"darkblue\" (click)=\"addToCart(cat)\" tappable><ion-icon name=\"add-circle\"></ion-icon></ion-button>\n              </ion-buttons>\n            </ion-col>\n          </ion-row>\n       </div>\n      </div>\n  </ion-item>\n</ion-list> \n  </div>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n      <ion-fab-button color=\"darkblue\" size=\"small\" (click)=\"opencart()\" #cart>\n        <!-- <div class=\"cart-length\">{{ cardItemCount | async }}</div> -->\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/cust/grocery/grocery-level2/grocery-level2.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/cust/grocery/grocery-level2/grocery-level2.module.ts ***!
  \****************************************************************************/
/*! exports provided: GroceryLevel2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryLevel2PageModule", function() { return GroceryLevel2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _grocery_level2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grocery-level2.page */ "./src/app/pages/cust/grocery/grocery-level2/grocery-level2.page.ts");







const routes = [
    {
        path: '',
        component: _grocery_level2_page__WEBPACK_IMPORTED_MODULE_6__["GroceryLevel2Page"]
    }
];
let GroceryLevel2PageModule = class GroceryLevel2PageModule {
};
GroceryLevel2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_grocery_level2_page__WEBPACK_IMPORTED_MODULE_6__["GroceryLevel2Page"]]
    })
], GroceryLevel2PageModule);



/***/ }),

/***/ "./src/app/pages/cust/grocery/grocery-level2/grocery-level2.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/cust/grocery/grocery-level2/grocery-level2.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.item-style {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n\n.item-content-style {\n  margin-left: 10px;\n  width: 100%;\n}\n\n.item-img-style {\n  width: 80px;\n  height: 80px;\n}\n\n.cat-main {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.cat-header {\n  margin: 2% 5%;\n  text-transform: capitalize;\n}\n\n.cat-img {\n  width: auto;\n  height: auto;\n  max-width: 70px;\n  max-height: 70px;\n}\n\n.cat-divsize {\n  display: inline-block;\n  width: 48%;\n  text-align: center;\n  margin: 1%;\n  padding-bottom: 4%;\n}\n\n.cat-name {\n  margin: 0;\n  font-size: 14px;\n  padding: 2px;\n  text-transform: capitalize;\n}\n\n.cat-quantity {\n  margin: 0;\n  padding: 1px;\n  font-size: 12px;\n}\n\n.cat-brand {\n  margin: 0;\n  font-size: 13px;\n  padding: 1px;\n  text-transform: capitalize;\n}\n\n.cat-mrp {\n  margin: 0;\n  font-size: 18px;\n  padding: 1px;\n  color: #ffad00;\n}\n\n.cat-item-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9ncm9jZXJ5L2dyb2NlcnktbGV2ZWwyL0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0XFxncm9jZXJ5XFxncm9jZXJ5LWxldmVsMlxcZ3JvY2VyeS1sZXZlbDIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jdXN0L2dyb2NlcnkvZ3JvY2VyeS1sZXZlbDIvZ3JvY2VyeS1sZXZlbDIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0g7O0FERUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3QvZ3JvY2VyeS9ncm9jZXJ5LWxldmVsMi9ncm9jZXJ5LWxldmVsMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWxvZ297XHJcbiAgICB3aWR0aDoxMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5pdGVtLXN0eWxle1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pdGVtLWNvbnRlbnQtc3R5bGV7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pdGVtLWltZy1zdHlsZXtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4uY2F0LW1haW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2F0LWhlYWRlcntcclxuICAgIG1hcmdpbjoyJSA1JTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY2F0LWltZ3tcclxuICAgd2lkdGg6IGF1dG87XHJcbiAgIGhlaWdodDogYXV0bztcclxuICAgbWF4LXdpZHRoOiA3MHB4O1xyXG4gICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4uY2F0LWRpdnNpemV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDo0OCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46MSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNCU7IFxyXG59XHJcblxyXG4uY2F0LW5hbWV7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOjJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY2F0LXF1YW50aXR5e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzoxcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5jYXQtYnJhbmR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nOjFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY2F0LW1ycHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgcGFkZGluZzoxcHg7XHJcbiAgICBjb2xvcjojZmZhZDAwO1xyXG59XHJcblxyXG4uY2F0LWl0ZW0tZm9vdGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiIsIi5oZWFkZXItbG9nbyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLml0ZW0tc3R5bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLml0ZW0tY29udGVudC1zdHlsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLml0ZW0taW1nLXN0eWxlIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmNhdC1tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2F0LWhlYWRlciB7XG4gIG1hcmdpbjogMiUgNSU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uY2F0LWltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogNzBweDtcbiAgbWF4LWhlaWdodDogNzBweDtcbn1cblxuLmNhdC1kaXZzaXplIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDglO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmctYm90dG9tOiA0JTtcbn1cblxuLmNhdC1uYW1lIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5jYXQtcXVhbnRpdHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDFweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY2F0LWJyYW5kIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5jYXQtbXJwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgY29sb3I6ICNmZmFkMDA7XG59XG5cbi5jYXQtaXRlbS1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/cust/grocery/grocery-level2/grocery-level2.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/cust/grocery/grocery-level2/grocery-level2.page.ts ***!
  \**************************************************************************/
/*! exports provided: GroceryLevel2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryLevel2Page", function() { return GroceryLevel2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cart_cart_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../cart/cart.page */ "./src/app/pages/cust/cart/cart.page.ts");









let GroceryLevel2Page = class GroceryLevel2Page {
    constructor(route, authService, alertService, loadingCtrl, alertCtrl, modalCtrl, navCtrl, popoverCtrl, router, formBuilder) {
        this.route = route;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.onQtyForm = this.formBuilder.group({
            'qty': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.getGrocerylt();
    }
    getGrocerylt() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.categoryId = this.router.getCurrentNavigation().extras.state.catId.id;
                this.categoryName = this.router.getCurrentNavigation().extras.state.catId.name;
                this.authService.getProdslt(this.categoryId).subscribe(result => {
                    console.log(result);
                    this.groceryCat = result['data'].list;
                    console.log(this.groceryCat);
                    this.groceryFilter = result['data'].filter;
                    console.log(this.groceryFilter);
                });
            }
        });
    }
    addToCart(product) {
        if (this.onQtyForm.get('qty').touched) {
            this.alertService.cartNote('1 item added to cart');
        }
        else {
            this.alertService.cartNote('Please select quantity');
        }
        // let qty={
        //   "qty":"1"
        // }
        console.log(this.onQtyForm.value);
        this.authService.addToCart(this.onQtyForm.value, product).subscribe(result => {
            console.log(result);
        });
    }
    opencart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _cart_cart_page__WEBPACK_IMPORTED_MODULE_7__["CartPage"],
                cssClass: 'cart-modal'
            });
            modal.present();
        });
    }
    groFilter() {
        let navigationExtras = {
            state: {
                groceryFil: this.groceryFilter,
                groceryList: this.groceryCat
            }
        };
        this.router.navigate(['grocery-filter'], navigationExtras);
    }
    grocerydesc(desc) {
        let navigationExtras = {
            state: {
                groceryDesc: desc,
            }
        };
        this.router.navigate(['grocery-desc'], navigationExtras);
    }
    back() {
        this.navCtrl.navigateBack('groceries');
    }
};
GroceryLevel2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
GroceryLevel2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grocery-level2',
        template: __webpack_require__(/*! raw-loader!./grocery-level2.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/grocery/grocery-level2/grocery-level2.page.html"),
        styles: [__webpack_require__(/*! ./grocery-level2.page.scss */ "./src/app/pages/cust/grocery/grocery-level2/grocery-level2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
], GroceryLevel2Page);



/***/ })

}]);
//# sourceMappingURL=pages-cust-grocery-grocery-level2-grocery-level2-module-es2015.js.map