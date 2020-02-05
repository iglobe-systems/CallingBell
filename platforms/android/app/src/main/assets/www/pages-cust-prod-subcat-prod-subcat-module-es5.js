(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-prod-subcat-prod-subcat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/prod-subcat/prod-subcat.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/prod-subcat/prod-subcat.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n        <div class=\"logo-in\"></div>\n     <ion-buttons slot=\"end\" >\n      <ion-button shape=\"round\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  \n<!-- \t<ion-card color=\"dark\" padding> -->\n    <h4>What are you looking for ?</h4>\n  <!-- </ion-card> -->\n  <div *ngFor = \"let subCat of subCategory\" class=\"size\">\n  <!-- <div *ngIf = \"subCategory\" class=\"size\"> -->\n\n<!-- <ion-fab horizontal=\"end\" vertical=\"top\" slot=\"fixed\">\n  <ion-fab-button size=\"small\" color=\"light\" (click)=\"searchFilter(subCat)\"><ion-icon name=\"options\"></ion-icon></ion-fab-button>\n</ion-fab> -->\n\n      <h5>{{subCat.subcategory}}</h5>\n        <img src=\"{{subCat.image}}\" (click)=\"productList(subCat)\" onError=\"this.src='https://static.thenounproject.com/png/212328-200.png'\">\n        <!-- <img src=\"http://kmvn.in/uploads/imagenot.png\" *ngIf=\"!p.image\" (click)=\"productList(p)\"> -->\n        <h3><span>FROM</span> &#8377; {{subCat.minPrice}} <br> <span>TO</span> &#8377; {{subCat.maxPrice}}</h3>\n          <!-- <ion-segment color=\"danger\" scrollable >\n            <ion-segment-button  (click)=\"openSupport(subCat)\"  checked><ion-label color=\"danger\">Support</ion-label></ion-segment-button>\n            <ion-segment-button  (click)=\"productList(subCat)\" checked><ion-label color=\"warning\">Supply</ion-label></ion-segment-button>\n          </ion-segment>    -->\n  </div>\n  <!-- <ion-card color=\"dark\" padding> -->\n    <h4>Top Brands!</h4>\n  <!-- </ion-card> -->\n  <div *ngFor = \"let brand of brand\" class=\"size1\" (click)=\"prodlist(brand)\">\n    <h5>{{brand}}</h5>\n  </div>\n  <!-- <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n  <ion-fab-button color=\"danger\" size=\"small\" (click)=\"opencart()\"><ion-icon name=\"cart\"></ion-icon></ion-fab-button>\n</ion-fab> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/cust/prod-subcat/prod-subcat.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/cust/prod-subcat/prod-subcat.module.ts ***!
  \**************************************************************/
/*! exports provided: ProdSubcatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdSubcatPageModule", function() { return ProdSubcatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prod_subcat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prod-subcat.page */ "./src/app/pages/cust/prod-subcat/prod-subcat.page.ts");







var routes = [
    {
        path: '',
        component: _prod_subcat_page__WEBPACK_IMPORTED_MODULE_6__["ProdSubcatPage"]
    }
];
var ProdSubcatPageModule = /** @class */ (function () {
    function ProdSubcatPageModule() {
    }
    ProdSubcatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_prod_subcat_page__WEBPACK_IMPORTED_MODULE_6__["ProdSubcatPage"]]
        })
    ], ProdSubcatPageModule);
    return ProdSubcatPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cust/prod-subcat/prod-subcat.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/cust/prod-subcat/prod-subcat.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  color: white;\n}\n:host .size {\n  display: inline-block;\n  width: 48%;\n  text-align: center;\n  margin: 1%;\n}\n:host img {\n  width: 130px;\n  height: 100px;\n  border-radius: 5px;\n  margin-left: auto;\n  margin-right: auto;\n}\n:host h5 {\n  text-transform: uppercase;\n  font-size: 15px;\n  font-weight: 600;\n  color: #f34d4d;\n  overflow-x: hidden;\n  height: 15px;\n}\n:host h3 {\n  font-size: 15px;\n  font-weight: 600;\n  color: #258619;\n}\n:host .size1 {\n  display: inline-block;\n  width: 48%;\n  text-align: center;\n  margin: 1%;\n  background-color: #f7f7f7;\n  font-weight: 700;\n}\n:host h4 {\n  font-size: 16px;\n  font-weight: 600;\n}\n:host span {\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLXN1YmNhdC9EOlxcUmlhelxcTmV3QVBLXFxOZXdBUEt2MC4xL3NyY1xcYXBwXFxwYWdlc1xcY3VzdFxccHJvZC1zdWJjYXRcXHByb2Qtc3ViY2F0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLXN1YmNhdC9wcm9kLXN1YmNhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0FDRFI7QURHSTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0RSO0FER0s7RUFDRCxZQUFBO0VBRUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FES0k7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNIUjtBRE1JO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0pSO0FETUs7RUFDRyxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDSlI7QURPSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0xSO0FEUUk7RUFDSSxlQUFBO0FDTlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdXN0L3Byb2Qtc3ViY2F0L3Byb2Qtc3ViY2F0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46aG9zdHtcclxuICAgIGlvbi1jYXJke1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICB9XHJcbiAgICAuc2l6ZXtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDo0OCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMSU7XHJcbiAgICB9XHJcbiAgICAgaW1ne1xyXG4gICAgd2lkdGg6MTMwcHg7XHJcbiAgICAvLyBoZWlnaHQ6MTUwcHg7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBoNXtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiNmMzRkNGQ7XHJcbiAgICAgICAgb3ZlcmZsb3cteDpoaWRkZW47XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiMyNTg2MTk7XHJcbiAgICB9XHJcbiAgICAgLnNpemUxe1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOjQ4JTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAxJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcblxyXG4gICAgaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbntcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB9XHJcbn0iLCI6aG9zdCBpb24tY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0IC5zaXplIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDglO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMSU7XG59XG46aG9zdCBpbWcge1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbjpob3N0IGg1IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI2YzNGQ0ZDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBoZWlnaHQ6IDE1cHg7XG59XG46aG9zdCBoMyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyNTg2MTk7XG59XG46aG9zdCAuc2l6ZTEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0OCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbjpob3N0IGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuOmhvc3Qgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/prod-subcat/prod-subcat.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/cust/prod-subcat/prod-subcat.page.ts ***!
  \************************************************************/
/*! exports provided: ProdSubcatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdSubcatPage", function() { return ProdSubcatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");







var ProdSubcatPage = /** @class */ (function () {
    function ProdSubcatPage(route, authService, alertService, loadingCtrl, alertCtrl, navCtrl, router, modalCtrl) {
        this.route = route;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.defImg = "http://kmvn.in/uploads/imagenot.png";
    }
    ProdSubcatPage.prototype.ngOnInit = function () {
        this.getSubCategory();
    };
    ProdSubcatPage.prototype.getSubCategory = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.pro = _this.router.getCurrentNavigation().extras.state.p.categoryName;
                _this.authService.getProductSubCategory(_this.pro).subscribe(function (result) {
                    console.log(result);
                    _this.subCategory = result['message'].subcategory;
                    console.log(_this.subCategory);
                    _this.brand = result['message'].brands;
                });
            }
        });
    };
    ProdSubcatPage.prototype.productList = function (subCat) {
        var navigationExtras = {
            state: {
                subCat: subCat,
                prodcat: this.pro
            }
        };
        this.router.navigate(['prod-latest-arrivals'], navigationExtras);
        console.log(subCat);
    };
    ProdSubcatPage.prototype.prodlist = function (brand) {
        var navigationExtras = {
            state: {
                brand: brand,
                prodcat: this.pro
            }
        };
        this.router.navigate(['prod-list'], navigationExtras);
        console.log(brand);
    };
    ProdSubcatPage.prototype.opencart = function () {
        this.navCtrl.navigateForward('cart');
    };
    ProdSubcatPage.prototype.back = function () {
        this.navCtrl.navigateBack('trending');
    };
    ProdSubcatPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    ProdSubcatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prod-subcat',
            template: __webpack_require__(/*! raw-loader!./prod-subcat.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/prod-subcat/prod-subcat.page.html"),
            styles: [__webpack_require__(/*! ./prod-subcat.page.scss */ "./src/app/pages/cust/prod-subcat/prod-subcat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], ProdSubcatPage);
    return ProdSubcatPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cust-prod-subcat-prod-subcat-module-es5.js.map