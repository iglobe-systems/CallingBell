(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-grocery-grocery-filterlist-grocery-filterlist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/grocery/grocery-filterlist/grocery-filterlist.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/grocery/grocery-filterlist/grocery-filterlist.page.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"darkblue\">\n      <ion-buttons slot=\"start\">\n         <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-buttons>\n  \n      <div>\n            <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n          </div>\n     \n      <ion-buttons slot=\"end\">\n        <ion-button shape=\"round\" (click)=\"back()\">\n          <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-searchbar mode=\"ios\" placeholder=\"Search in store\"></ion-searchbar>\n    <div>\n        <div class=\"cat-main\">\n            <h5 class=\"cat-header\">Filtered Results by {{groceryBrand}} - {{groceryQty}}</h5>\n        </div>\n        <div *ngFor=\"let list of filteredList\">\n          <ion-list>\n            <ion-item>\n                <div class=\"item-style\">\n                    <div class=\"ion-text-center item-img-style\"  (click)=\"grocerydesc(list.id)\">\n                        <img src=\"{{list.icon}}\" onError=\"this.src='http://apiv1.iglobesystems.com/assets/img/no_img.png'\" class=\"cat-img\"/>\n                    </div>\n                     <div class=\"item-content-style\">\n                        <h5 class=\"cat-name fw600\"  (click)=\"grocerydesc(list.id)\">{{list.name}}</h5>\n                        <h5 class=\"cat-quantity\"  (click)=\"grocerydesc(list.id)\">{{list.quantity}}</h5>\n                        <h5 class=\"cat-brand\"  (click)=\"grocerydesc(list.id)\">{{list.brand_name}}</h5>\n                        <ion-row class=\"cat-item-footer\">\n                          <ion-col class=\"ion-no-padding\" size=\"9\">\n                            <h1 class=\"cat-mrp fw600\" (click)=\"grocerydesc(list.id)\">&#8377; {{list.mrp}}</h1>\n                          </ion-col>\n                          <ion-col class=\"ion-no-padding\">\n                              <ion-buttons class=\"ion-text-center\">\n                                <ion-button size=\"small\" color=\"darkblue\" (click)=\"addToCart(list)\" tappable><ion-icon name=\"add-circle\"></ion-icon></ion-button>\n                              </ion-buttons>\n                            </ion-col>\n                        </ion-row>\n                     </div>\n                    </div>\n            </ion-item>\n          </ion-list>\n        </div>\n      <!-- <div *ngFor=\"let list of filteredList\" class=\"cat-divsize\" (click)=\"grocerydesc(list.id)\">\n          <img src=\"{{list.img_m}}\" class=\"cat-img\"/>\n          <h5 class=\"cat-name fw600\">{{list.name}}</h5>\n          <h5 class=\"cat-quantity\">{{list.quantity}}</h5>\n          <p class=\"cat-brand\">{{list.brand_name}}</p>\n          <h1 class=\"cat-mrp fw600\">&#8377; {{list.mrp}}</h1>\n      </div> -->\n    </div>\n    <div *ngIf=\"filteredList.length == 0\">\n        <div class=\"cat-main\">\n            <h5 class=\"cat-nf\">No Products Found</h5>\n        </div>\n    </div>\n\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n        <ion-fab-button color=\"darkblue\" size=\"small\" (click)=\"opencart()\" #cart>\n          <!-- <div class=\"cart-length\">{{ cardItemCount | async }}</div> -->\n          <ion-icon name=\"cart\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/grocery/grocery-filterlist/grocery-filterlist.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/cust/grocery/grocery-filterlist/grocery-filterlist.module.ts ***!
  \************************************************************************************/
/*! exports provided: GroceryFilterlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryFilterlistPageModule", function() { return GroceryFilterlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _grocery_filterlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grocery-filterlist.page */ "./src/app/pages/cust/grocery/grocery-filterlist/grocery-filterlist.page.ts");







const routes = [
    {
        path: '',
        component: _grocery_filterlist_page__WEBPACK_IMPORTED_MODULE_6__["GroceryFilterlistPage"]
    }
];
let GroceryFilterlistPageModule = class GroceryFilterlistPageModule {
};
GroceryFilterlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_grocery_filterlist_page__WEBPACK_IMPORTED_MODULE_6__["GroceryFilterlistPage"]]
    })
], GroceryFilterlistPageModule);



/***/ }),

/***/ "./src/app/pages/cust/grocery/grocery-filterlist/grocery-filterlist.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/cust/grocery/grocery-filterlist/grocery-filterlist.page.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.item-style {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n\n.item-content-style {\n  margin-left: 10px;\n  width: 100%;\n}\n\n.item-img-style {\n  width: 80px;\n  height: 80px;\n}\n\n.cat-main {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.cat-header {\n  margin: 2% 5%;\n  font-size: 15px;\n  text-transform: capitalize;\n}\n\n.cat-img {\n  width: auto;\n  height: auto;\n  max-width: 70px;\n  max-height: 70px;\n}\n\n.cat-divsize {\n  display: inline-block;\n  width: 48%;\n  text-align: center;\n  margin: 1%;\n  padding-bottom: 4%;\n}\n\n.cat-name {\n  margin: 0;\n  font-size: 14px;\n  padding: 2px;\n  text-transform: capitalize;\n}\n\n.cat-quantity {\n  margin: 0;\n  padding: 1px;\n  font-size: 12px;\n}\n\n.cat-brand {\n  margin: 0;\n  font-size: 13px;\n  padding: 1px;\n  text-transform: capitalize;\n}\n\n.cat-mrp {\n  margin: 0;\n  font-size: 18px;\n  padding: 1px;\n  color: #ffad00;\n}\n\n.cat-nf {\n  margin: 2% 5%;\n  font-size: 15px;\n  color: #0e0e27;\n}\n\n.cat-item-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9ncm9jZXJ5L2dyb2NlcnktZmlsdGVybGlzdC9EOlxcUmlhelxcTmV3QVBLXFxOZXdBUEt2MC4xL3NyY1xcYXBwXFxwYWdlc1xcY3VzdFxcZ3JvY2VyeVxcZ3JvY2VyeS1maWx0ZXJsaXN0XFxncm9jZXJ5LWZpbHRlcmxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jdXN0L2dyb2NlcnkvZ3JvY2VyeS1maWx0ZXJsaXN0L2dyb2NlcnktZmlsdGVybGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURHQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNBSjs7QURHQTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNBSjs7QURHQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdC9ncm9jZXJ5L2dyb2NlcnktZmlsdGVybGlzdC9ncm9jZXJ5LWZpbHRlcmxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1sb2dve1xyXG4gICAgd2lkdGg6MTIwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uaXRlbS1zdHlsZXtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaXRlbS1jb250ZW50LXN0eWxle1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaXRlbS1pbWctc3R5bGV7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG5cclxuXHJcbi5jYXQtbWFpbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jYXQtaGVhZGVye1xyXG4gICAgbWFyZ2luOjIlIDUlO1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmNhdC1pbWd7XHJcbiAgICB3aWR0aDphdXRvO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDcwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4uY2F0LWRpdnNpemV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDo0OCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46MSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNCU7IFxyXG59XHJcblxyXG4uY2F0LW5hbWV7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOjJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY2F0LXF1YW50aXR5e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzoxcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5jYXQtYnJhbmR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nOjFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY2F0LW1ycHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgcGFkZGluZzoxcHg7XHJcbiAgICBjb2xvcjojZmZhZDAwO1xyXG59XHJcblxyXG4uY2F0LW5me1xyXG4gICAgbWFyZ2luOjIlIDUlO1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICBjb2xvcjogIzBlMGUyNztcclxufVxyXG5cclxuLmNhdC1pdGVtLWZvb3RlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4iLCIuaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMTIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5pdGVtLXN0eWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pdGVtLWNvbnRlbnQtc3R5bGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pdGVtLWltZy1zdHlsZSB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5jYXQtbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNhdC1oZWFkZXIge1xuICBtYXJnaW46IDIlIDUlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uY2F0LWltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogNzBweDtcbiAgbWF4LWhlaWdodDogNzBweDtcbn1cblxuLmNhdC1kaXZzaXplIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDglO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmctYm90dG9tOiA0JTtcbn1cblxuLmNhdC1uYW1lIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5jYXQtcXVhbnRpdHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDFweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY2F0LWJyYW5kIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5jYXQtbXJwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgY29sb3I6ICNmZmFkMDA7XG59XG5cbi5jYXQtbmYge1xuICBtYXJnaW46IDIlIDUlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMGUwZTI3O1xufVxuXG4uY2F0LWl0ZW0tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/grocery/grocery-filterlist/grocery-filterlist.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/cust/grocery/grocery-filterlist/grocery-filterlist.page.ts ***!
  \**********************************************************************************/
/*! exports provided: GroceryFilterlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryFilterlistPage", function() { return GroceryFilterlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cart_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cart/cart.page */ "./src/app/pages/cust/cart/cart.page.ts");








let GroceryFilterlistPage = class GroceryFilterlistPage {
    constructor(route, authService, alertService, loadingCtrl, alertCtrl, navCtrl, popoverCtrl, modalCtrl, router) {
        this.route = route;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
    }
    ngOnInit() {
        this.filteredList = [];
        this.getFilteredList();
        this.getList();
    }
    getFilteredList() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.groceryList = this.router.getCurrentNavigation().extras.state.groceryList;
                this.groceryBrand = this.router.getCurrentNavigation().extras.state.groceryFilter.brandname;
                this.groceryQty = this.router.getCurrentNavigation().extras.state.groceryFilter.quantity;
                console.log(this.groceryBrand, this.groceryQty);
            }
        });
    }
    grocerydesc(desc) {
        let navigationExtras = {
            state: {
                groceryDesc: desc,
            }
        };
        this.router.navigate(['grocery-desc'], navigationExtras);
    }
    addToCart(product) {
        this.alertService.cartNote('1 item added to cart');
        let qty = {
            "qty": "1"
        };
        let id = {
            "id": product.id
        };
        this.authService.addToCart(qty, id).subscribe(result => {
            console.log(result);
        });
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
    getList() {
        let braname = this.groceryBrand;
        let qty = this.groceryQty;
        for (var list of this.groceryList) {
            if ((braname.indexOf(list.brand_name) > -1 || braname.length == 0) && (qty.indexOf(list.quantity) > -1 || qty.length == 0)) {
                this.filteredList.push(list);
            }
        }
        console.log(this.filteredList);
    }
    back() {
        this.navCtrl.navigateBack('grocery-filter');
    }
};
GroceryFilterlistPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
GroceryFilterlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grocery-filterlist',
        template: __webpack_require__(/*! raw-loader!./grocery-filterlist.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/grocery/grocery-filterlist/grocery-filterlist.page.html"),
        styles: [__webpack_require__(/*! ./grocery-filterlist.page.scss */ "./src/app/pages/cust/grocery/grocery-filterlist/grocery-filterlist.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], GroceryFilterlistPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-grocery-grocery-filterlist-grocery-filterlist-module-es2015.js.map