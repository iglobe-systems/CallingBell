(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-quick-buy-quick-buy-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/quick-buy/quick-buy.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/quick-buy/quick-buy.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n       <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n     <div class=\"logo-in\"></div>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar animated spellcheck=\"true\" autocorrect=\"on\" autocomplete=\"on\"></ion-searchbar>\n  <form [formGroup]=\"onOrderForm\">\n \n  <ion-item>\n    <ion-label>Category</ion-label>\n    <ion-select (ionChange)=\"setSubCategoryValues(cCategory)\" [(ngModel)]=\"cCategory\" formControlName=\"Category\">\n        <ion-select-option [value]=\"cCategory\"  *ngFor=\"let cCategory of category\">{{cCategory.name}}</ion-select-option>\n    </ion-select>\n</ion-item>\n\n<ion-item *ngIf=\"selectedSubCategory\">\n    <ion-label>Sub Category</ion-label>\n     <ion-select (ionChange)=\"setBrandValues(sSubCategory)\" [(ngModel)]=\"sSubCategory\" formControlName=\"SubCategory\">\n         <ion-select-option [value]=\"sSubCategory\"  *ngFor=\"let sSubCategory of selectedSubCategory\">{{sSubCategory.name}}</ion-select-option>\n     </ion-select>\n  </ion-item>\n\n<ion-item *ngIf=\"selectedBrands\">\n   <ion-label>Brand</ion-label>\n   <ion-select (ionChange)=\"setProductValues(bBrands)\" [(ngModel)]=\"bBrands\" formControlName=\"Brand\">\n       <ion-select-option [value]=\"bBrands\"  *ngFor=\"let bBrands of selectedBrands\">{{bBrands.name}}</ion-select-option>\n   </ion-select>\n</ion-item>\n\n<ion-item *ngIf=\"selectedProducts\">\n  <ion-label>Product</ion-label>\n    <ion-select formControlName=\"Product\">\n         <ion-select-option  *ngFor=\"let product of selectedProducts\" >{{product.name}}</ion-select-option>\n    </ion-select>\n</ion-item>\n\n<ion-item *ngIf=\"selectedProducts\">\n    <ion-label>Quantity</ion-label>\n      <ion-input type=\"number\" formControlName=\"Quantity\"></ion-input>\n  </ion-item>\n\n  </form>\n  <ion-button *ngIf=\"selectedProducts\" size=\"small\" (click)=\"item()\" [disabled]=\"!onOrderForm.valid\">+ ADD</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/quick-buy/quick-buy.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/cust/quick-buy/quick-buy.module.ts ***!
  \**********************************************************/
/*! exports provided: QuickBuyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickBuyPageModule", function() { return QuickBuyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _quick_buy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quick-buy.page */ "./src/app/pages/cust/quick-buy/quick-buy.page.ts");







var routes = [
    {
        path: '',
        component: _quick_buy_page__WEBPACK_IMPORTED_MODULE_6__["QuickBuyPage"]
    }
];
var QuickBuyPageModule = /** @class */ (function () {
    function QuickBuyPageModule() {
    }
    QuickBuyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_quick_buy_page__WEBPACK_IMPORTED_MODULE_6__["QuickBuyPage"]]
        })
    ], QuickBuyPageModule);
    return QuickBuyPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cust/quick-buy/quick-buy.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/cust/quick-buy/quick-buy.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3QvcXVpY2stYnV5L3F1aWNrLWJ1eS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/cust/quick-buy/quick-buy.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/cust/quick-buy/quick-buy.page.ts ***!
  \********************************************************/
/*! exports provided: QuickBuyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickBuyPage", function() { return QuickBuyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");







var QuickBuyPage = /** @class */ (function () {
    function QuickBuyPage(formBuilder, route, authService, alertService, loadingCtrl, alertCtrl, navCtrl, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.router = router;
    }
    QuickBuyPage.prototype.ngOnInit = function () {
        this.initializeCategory();
        this.initializeSubCategory();
        this.initializeBrand();
        this.initializeProduct();
        this.onOrderForm = this.formBuilder.group({
            'Category': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            'SubCategory': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            'Brand': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,])],
            'Product': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,])],
            'Quantity': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,])]
        });
    };
    // initializeCategory(){
    //   this.category = [
    //       {id: 1, name: 'Soap'},
    //       {id: 2, name: 'Shampoo'},
    //       {id: 3, name: 'Face Wash'}
    //   ];
    //   }
    QuickBuyPage.prototype.initializeCategory = function () {
        this.category = [
            { id: 1, name: 'Bathing Products' },
            { id: 2, name: 'Cleaning Products' },
            { id: 3, name: 'Diary Products' }
        ];
    };
    QuickBuyPage.prototype.initializeSubCategory = function () {
        this.subcategory = [
            { id: 1, name: 'Soap', category_id: 1 },
            { id: 2, name: 'Shampoo', category_id: 1 },
            { id: 3, name: 'Face Wash', category_id: 1 },
            { id: 4, name: 'Floor Cleaner', category_id: 2 },
            { id: 5, name: 'Bathroom Cleaner', category_id: 2 },
            { id: 6, name: 'Curd', category_id: 3 },
        ];
    };
    // initializeBrand(){
    // this.brand = [
    //     {id: 1, name: 'Dove', category_id: 1, category_name: 'Soap'},
    //     {id: 2, name: 'Himalaya', category_id: 1, category_name: 'Soap'},
    //     {id: 3, name: 'Sunsilk', category_id: 2, category_name: 'Shampoo'},
    //     {id: 4, name: 'Himalaya', category_id: 2, category_name: 'Shampoo'},
    //     {id: 5, name: 'Garnier', category_id: 3, category_name: 'Face Wash'},
    //     {id: 6, name: 'Nivea', category_id: 3, category_name: 'Face Wash'}
    // ];
    // }
    QuickBuyPage.prototype.initializeBrand = function () {
        this.brand = [
            { id: 1, name: 'Dove', subcategory_id: 1 },
            { id: 2, name: 'Himalaya', subcategory_id: 1 },
            { id: 3, name: 'Sunsilk', subcategory_id: 2 },
            { id: 4, name: 'Himalaya', subcategory_id: 2 },
            { id: 5, name: 'Garnier', subcategory_id: 3 },
            { id: 6, name: 'Nivea', subcategory_id: 3 },
            { id: 7, name: 'Lizol', subcategory_id: 4 },
            { id: 8, name: 'Harpic', subcategory_id: 4 },
            { id: 9, name: 'Harpic', subcategory_id: 5 },
            { id: 10, name: 'Lizol', subcategory_id: 5 },
            { id: 11, name: 'Amul', subcategory_id: 6 },
            { id: 12, name: 'Hatsun', subcategory_id: 6 },
        ];
    };
    // initializeProduct(){
    // this.product = [
    //     {id: 1, name: 'Dove pink - 50g ', category_id: 1, brand_id: 1},
    //     {id: 2, name: 'Dove pink - 100g', category_id: 1, brand_id: 1},
    //     {id: 3, name: 'Himalaya herbal - 50g', category_id: 1, brand_id: 2},
    //     {id: 4, name: 'Sunsilk black', category_id: 2, brand_id: 3},
    //     {id: 5, name: 'Sunsilk white', category_id: 2, brand_id: 3},
    //     {id: 6, name: 'Himalaya herbal - 150ml', category_id: 2, brand_id: 4},
    //     {id: 7, name: 'Garnier herbal - 50g', category_id: 3, brand_id: 5},
    //     {id: 8, name: 'Nivea - 100g', category_id: 3, brand_id: 6},
    //     {id: 9, name: 'Nivea men - 50g', category_id: 3, brand_id: 6}
    // ];
    // }
    QuickBuyPage.prototype.initializeProduct = function () {
        this.product = [
            { id: 1, name: 'Dove pink - 50g ', subcategory_id: 1, brand_id: 1 },
            { id: 2, name: 'Dove pink - 100g', subcategory_id: 1, brand_id: 1 },
            { id: 3, name: 'Himalaya herbal - 50g', subcategory_id: 1, brand_id: 2 },
            { id: 4, name: 'Sunsilk black', subcategory_id: 2, brand_id: 3 },
            { id: 5, name: 'Sunsilk white', subcategory_id: 2, brand_id: 3 },
            { id: 6, name: 'Himalaya herbal - 150ml', subcategory_id: 2, brand_id: 4 },
            { id: 7, name: 'Garnier herbal - 50g', subcategory_id: 3, brand_id: 5 },
            { id: 8, name: 'Nivea - 100g', subcategory_id: 3, brand_id: 6 },
            { id: 9, name: 'Nivea men - 50g', subcategory_id: 3, brand_id: 6 },
            { id: 9, name: 'Lizol pink - 100ml', subcategory_id: 4, brand_id: 7 },
            { id: 9, name: 'lizol pink - 200ml', subcategory_id: 4, brand_id: 7 },
            { id: 9, name: 'Harpic - 100ml', subcategory_id: 4, brand_id: 8 },
            { id: 9, name: 'Harpic - 200ml', subcategory_id: 4, brand_id: 8 },
            { id: 9, name: 'Harpic - 100ml', subcategory_id: 5, brand_id: 9 },
            { id: 9, name: 'Harpic - 200ml', subcategory_id: 5, brand_id: 9 },
            { id: 9, name: 'Lizol pink - 100ml', subcategory_id: 5, brand_id: 10 },
            { id: 9, name: 'Lizol pink - 200ml', subcategory_id: 5, brand_id: 10 },
            { id: 9, name: 'Amul - 50g', subcategory_id: 6, brand_id: 11 },
            { id: 9, name: 'Amul - 100g', subcategory_id: 6, brand_id: 11 },
            { id: 9, name: 'Hatsun - 50g', subcategory_id: 6, brand_id: 12 },
            { id: 9, name: 'Hatsun - 100g', subcategory_id: 6, brand_id: 12 },
        ];
    };
    QuickBuyPage.prototype.setSubCategoryValues = function (cCategory) {
        this.selectedSubCategory = this.subcategory.filter(function (subcategory) { return subcategory.category_id == cCategory.id; });
    };
    QuickBuyPage.prototype.setBrandValues = function (sSubCategory) {
        this.selectedBrands = this.brand.filter(function (brand) { return brand.subcategory_id == sSubCategory.id; });
    };
    QuickBuyPage.prototype.setProductValues = function (bBrand) {
        this.selectedProducts = this.product.filter(function (product) { return product.brand_id == bBrand.id; });
    };
    QuickBuyPage.prototype.item = function () {
        console.log(this.onOrderForm.value);
        var C = this.onOrderForm.value.Category.name;
        var S = this.onOrderForm.value.SubCategory.name;
        var B = this.onOrderForm.value.Brand.name;
        var P = this.onOrderForm.value.Product;
        var Q = this.onOrderForm.value.Quantity;
        var item = C + '-' + S + '-' + B + '-' + P + '-' + Q;
        console.log(C, '-', S, '-', B, '-', P, '-', Q);
        console.log(item);
    };
    QuickBuyPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    QuickBuyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quick-buy',
            template: __webpack_require__(/*! raw-loader!./quick-buy.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/quick-buy/quick-buy.page.html"),
            styles: [__webpack_require__(/*! ./quick-buy.page.scss */ "./src/app/pages/cust/quick-buy/quick-buy.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], QuickBuyPage);
    return QuickBuyPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cust-quick-buy-quick-buy-module-es5.js.map