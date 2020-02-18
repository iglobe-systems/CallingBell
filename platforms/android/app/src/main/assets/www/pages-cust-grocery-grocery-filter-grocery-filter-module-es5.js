(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-grocery-grocery-filter-grocery-filter-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/grocery/grocery-filter/grocery-filter.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/grocery/grocery-filter/grocery-filter.page.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"darkblue\">\n        <ion-buttons slot=\"start\">\n           <ion-menu-button color=\"light\"></ion-menu-button>\n        </ion-buttons>\n    \n        <div>\n            <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n          </div>\n       \n        <ion-buttons slot=\"end\">\n          <ion-button shape=\"round\" (click)=\"back()\">\n            <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"grey\">\n    \n  <form [formGroup]=\"onFilterForm\">\n      <h5 class=\"brand-header\">Filter by</h5>\n      <div>\n          <h5 class=\"qty-header fw600\">Brand</h5>\n          <ion-list class=\"brand-main\">\n              <ion-item *ngFor=\"let brand of groceryBrand\" >\n                <ion-label class=\"cap\">{{brand.name}}</ion-label>\n                <ion-checkbox slot=\"end\" color=\"darkblue\" mode=\"ios\" class=\"nopadding\" formControlName=\"brand\" (ionChange)=\"selectBrand(brand.name)\"></ion-checkbox>\n              </ion-item>\n            </ion-list>\n        </div>\n\n      <div>\n        <h5 class=\"qty-header fw600\">Quantity</h5>\n        <ion-list class=\"brand-main\">\n            <ion-item *ngFor=\"let qty of groceryQty\">\n              <ion-label class=\"cap\">{{qty}}</ion-label>\n              <ion-checkbox slot=\"end\" mode=\"ios\" color=\"darkblue\" class=\"nopadding\" formControlName=\"quantity\" (ionChange)=\"selectQty(qty)\"></ion-checkbox>\n            </ion-item>\n          </ion-list>\n      </div>    \n    \n        <div class=\"filter-button\">\n            <ion-button size=\"small\" color=\"gold\" (click)=\"applyFilter()\">Apply Filter</ion-button>\n        </div>\n  </form>\n\n  <div class=\"brand-main\">\n      <h5 class=\"brand-header\">Popular Brands</h5>\n      <div *ngFor = \"let brand of groceryBrand\" class=\"brand-size\">\n        <img src=\"{{brand.img_path}}\" class=\"brand-img\" onError=\"this.src='http://apiv1.iglobesystems.com/assets/img/no_img.png'\"/>\n      </div>\n    </div>\n    \n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n        <ion-fab-button color=\"darkblue\" size=\"small\" (click)=\"opencart()\" #cart>\n          <!-- <div class=\"cart-length\">{{ cardItemCount | async }}</div> -->\n          <ion-icon name=\"cart\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/grocery/grocery-filter/grocery-filter.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/cust/grocery/grocery-filter/grocery-filter.module.ts ***!
  \****************************************************************************/
/*! exports provided: GroceryFilterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryFilterPageModule", function() { return GroceryFilterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _grocery_filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grocery-filter.page */ "./src/app/pages/cust/grocery/grocery-filter/grocery-filter.page.ts");







var routes = [
    {
        path: '',
        component: _grocery_filter_page__WEBPACK_IMPORTED_MODULE_6__["GroceryFilterPage"]
    }
];
var GroceryFilterPageModule = /** @class */ (function () {
    function GroceryFilterPageModule() {
    }
    GroceryFilterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_grocery_filter_page__WEBPACK_IMPORTED_MODULE_6__["GroceryFilterPage"]]
        })
    ], GroceryFilterPageModule);
    return GroceryFilterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cust/grocery/grocery-filter/grocery-filter.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/cust/grocery/grocery-filter/grocery-filter.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.brand-main {\n  margin: 3%;\n  background-color: white;\n  border-radius: 10px;\n  padding: 2%;\n}\n\n.brand-header {\n  margin: 2% 5%;\n  text-transform: capitalize;\n}\n\n.qty-header {\n  margin: 3% 5% 0 5%;\n  font-size: 16px;\n}\n\n.brand-size {\n  display: inline-block;\n  width: 29%;\n  margin: 2%;\n  text-align: center;\n}\n\n.brand-img {\n  width: 70px;\n  height: 40px;\n}\n\n.filter-button {\n  text-align: right;\n  margin-right: 5%;\n}\n\n.cap {\n  text-transform: capitalize;\n  font-size: 13px;\n  padding: 0;\n  margin: 0;\n}\n\n.nopadding {\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9ncm9jZXJ5L2dyb2NlcnktZmlsdGVyL0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0XFxncm9jZXJ5XFxncm9jZXJ5LWZpbHRlclxcZ3JvY2VyeS1maWx0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jdXN0L2dyb2NlcnkvZ3JvY2VyeS1maWx0ZXIvZ3JvY2VyeS1maWx0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSwwQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQ0E7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0E7RUFDSSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0VKOztBRENBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3QvZ3JvY2VyeS9ncm9jZXJ5LWZpbHRlci9ncm9jZXJ5LWZpbHRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWxvZ297XHJcbiAgICB3aWR0aDoxMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5icmFuZC1tYWlue1xyXG4gICAgbWFyZ2luOiAzJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4uYnJhbmQtaGVhZGVye1xyXG4gICAgbWFyZ2luOiAyJSA1JTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5xdHktaGVhZGVye1xyXG4gICAgbWFyZ2luOiAzJSA1JSAwIDUlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYnJhbmQtc2l6ZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOjI5JTtcclxuICAgIG1hcmdpbjoyJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJyYW5kLWltZ3tcclxuICAgIHdpZHRoOjcwcHg7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxufVxyXG5cclxuLmZpbHRlci1idXR0b257XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDo1JTtcclxufVxyXG5cclxuLmNhcHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm5vcGFkZGluZ3tcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn0iLCIuaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMTIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5icmFuZC1tYWluIHtcbiAgbWFyZ2luOiAzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDIlO1xufVxuXG4uYnJhbmQtaGVhZGVyIHtcbiAgbWFyZ2luOiAyJSA1JTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5xdHktaGVhZGVyIHtcbiAgbWFyZ2luOiAzJSA1JSAwIDUlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5icmFuZC1zaXplIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjklO1xuICBtYXJnaW46IDIlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5icmFuZC1pbWcge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uZmlsdGVyLWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG4uY2FwIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubm9wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/cust/grocery/grocery-filter/grocery-filter.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/cust/grocery/grocery-filter/grocery-filter.page.ts ***!
  \**************************************************************************/
/*! exports provided: GroceryFilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryFilterPage", function() { return GroceryFilterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_cart_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../cart/cart.page */ "./src/app/pages/cust/cart/cart.page.ts");









var GroceryFilterPage = /** @class */ (function () {
    function GroceryFilterPage(route, authService, alertService, loadingCtrl, alertCtrl, navCtrl, popoverCtrl, modalCtrl, router, formBuilder) {
        this.route = route;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    GroceryFilterPage.prototype.ngOnInit = function () {
        this.getFilter();
        this.brandArray = [];
        this.qtyArray = [];
        this.onFilterForm = this.formBuilder.group({
            'brand': ['false'],
            'quantity': ['false']
        });
    };
    GroceryFilterPage.prototype.selectBrand = function (brand) {
        var vchek = this.onFilterForm.value.brand;
        if (this.brandArray.indexOf(brand) == -1 && vchek == true) {
            this.brandArray.push(brand);
        }
        if (vchek != true) {
            var array_key = this.brandArray.indexOf(brand);
            if (array_key !== -1) {
                this.brandArray.splice(array_key, 1);
            }
        }
    };
    GroceryFilterPage.prototype.selectQty = function (qty) {
        var vchek = this.onFilterForm.value.quantity;
        if (this.qtyArray.indexOf(qty) == -1 && vchek == true) {
            this.qtyArray.push(qty);
        }
        if (vchek != true) {
            var array_key = this.qtyArray.indexOf(qty);
            if (array_key !== -1) {
                this.qtyArray.splice(array_key, 1);
            }
        }
    };
    GroceryFilterPage.prototype.opencart = function () {
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
    GroceryFilterPage.prototype.setBrand = function () {
        var brand = {
            brandname: this.brandArray,
            quantity: this.qtyArray
        };
        return brand;
    };
    GroceryFilterPage.prototype.getFilter = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.groceryList = _this.router.getCurrentNavigation().extras.state.groceryList;
                _this.groceryBrand = _this.router.getCurrentNavigation().extras.state.groceryFil.brand;
                _this.groceryQty = _this.router.getCurrentNavigation().extras.state.groceryFil.quantity;
                _this.groceryPrice = _this.router.getCurrentNavigation().extras.state.groceryFil.price;
            }
        });
    };
    GroceryFilterPage.prototype.applyFilter = function () {
        var navigationExtras = {
            state: {
                groceryList: this.groceryList,
                groceryFilter: this.setBrand()
            }
        };
        this.router.navigate(['grocery-filterlist'], navigationExtras);
        // console.log(this.setBrand());
        // console.log(this.groceryList);
    };
    GroceryFilterPage.prototype.back = function () {
        this.navCtrl.navigateBack('grocery-level2');
    };
    GroceryFilterPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    GroceryFilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grocery-filter',
            template: __webpack_require__(/*! raw-loader!./grocery-filter.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/grocery/grocery-filter/grocery-filter.page.html"),
            styles: [__webpack_require__(/*! ./grocery-filter.page.scss */ "./src/app/pages/cust/grocery/grocery-filter/grocery-filter.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], GroceryFilterPage);
    return GroceryFilterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cust-grocery-grocery-filter-grocery-filter-module-es5.js.map