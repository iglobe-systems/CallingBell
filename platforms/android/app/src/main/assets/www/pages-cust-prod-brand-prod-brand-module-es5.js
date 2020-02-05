(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-prod-brand-prod-brand-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/prod-brand/prod-brand.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/prod-brand/prod-brand.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n        <div class=\"logo-in\"></div>\n  <!--   <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"notifications()\">\n        <ion-icon name=\"notifications\"></ion-icon>\n        <ion-badge color=\"dark\" slot=\"end\">2</ion-badge>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t <ion-card class=\"ion-padding\">\n    Explore our wide selection of E bikes, Batteries and many more.\n  </ion-card>\n   <!--  <h3>PRODUCT BRANDS</h3> -->\n<div *ngFor = \"let brand of subCategory\">\n        <ion-row>\n        <ion-col size=\"1\">\n         <ion-icon name=\"arrow-round-forward\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"6\">\n          <h5>{{brand.brand}}</h5>\n        </ion-col>\n        <ion-col size=\"5\">\n          <div class=\"text-center div\">\n                <ion-button size=\"small\" class=\"primary\" (click)=\"openSupport(brand)\" style=\"font-size: 10px;\">Support</ion-button>\n                <ion-button size=\"small\" class=\"primary\" (click)=\"productList(brand)\" style=\"font-size: 10px;\">Supply</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/prod-brand/prod-brand.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/cust/prod-brand/prod-brand.module.ts ***!
  \************************************************************/
/*! exports provided: ProdBrandPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdBrandPageModule", function() { return ProdBrandPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prod_brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prod-brand.page */ "./src/app/pages/cust/prod-brand/prod-brand.page.ts");







var routes = [
    {
        path: '',
        component: _prod_brand_page__WEBPACK_IMPORTED_MODULE_6__["ProdBrandPage"]
    }
];
var ProdBrandPageModule = /** @class */ (function () {
    function ProdBrandPageModule() {
    }
    ProdBrandPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_prod_brand_page__WEBPACK_IMPORTED_MODULE_6__["ProdBrandPage"]]
        })
    ], ProdBrandPageModule);
    return ProdBrandPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cust/prod-brand/prod-brand.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/cust/prod-brand/prod-brand.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host h3 {\n  font-family: \"Montserrat\", arial;\n  text-align: center;\n  color: #2193b0;\n  margin: 10px 0px;\n  padding: 10px 0px;\n  background-color: #d3d3d3;\n  border-radius: 0;\n  font-size: 1rem;\n}\n:host ion-slide {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .div {\n  margin-top: 3%;\n  margin-bottom: 3%;\n}\n:host img {\n  width: 400px;\n  height: 190px;\n}\n:host .img-size {\n  width: 100px;\n  height: 80px;\n}\n:host p {\n  margin-top: 5px;\n}\n:host .btn-padding {\n  margin-left: 20%;\n}\n:host .prod-title {\n  font-size: 15px;\n}\n:host ion-icon {\n  margin-top: 10px;\n}\n:host h5 {\n  background-color: red;\n  margin-top: 5px;\n  color: ivory;\n  padding: 5px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLWJyYW5kL0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0XFxwcm9kLWJyYW5kXFxwcm9kLWJyYW5kLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLWJyYW5kL3Byb2QtYnJhbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0MsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFFQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0cseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNEUjtBREdJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRFI7QURHSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0RSO0FER0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0RSO0FESUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0ZSO0FESUk7RUFDSSxlQUFBO0FDRlI7QURJQztFQUNDLGdCQUFBO0FDRkY7QURJSTtFQUNJLGVBQUE7QUNGUjtBRE1JO0VBR0ksZ0JBQUE7QUNOUjtBRFFJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ05SIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLWJyYW5kL3Byb2QtYnJhbmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICBoM3tcclxuXHQgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyxhcmlhbDtcclxuXHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdCAgICBjb2xvcjojMjE5M2IwO1xyXG5cdCAgICAvLyBmb250LXNpemU6IDAuNXJlbTtcclxuXHQgICAgbWFyZ2luOjEwcHggMHB4O1xyXG5cdCAgICBwYWRkaW5nOjEwcHggMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czowO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG5cdH1cclxuICAgIGlvbi1zbGlkZXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIH1cclxuICAgIC5kaXZ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDozJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDo0MDBweDtcclxuICAgICAgICBoZWlnaHQ6MTkwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZy1zaXple1xyXG4gICAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgICAgIGhlaWdodDo4MHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgIH1cclxuXHQuYnRuLXBhZGRpbmd7XHJcblx0XHRtYXJnaW4tbGVmdDoyMCU7XHJcblx0fVxyXG4gICAgLnByb2QtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICAgICAgLy8gbWFyZ2luOjEwcHggMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taWNvbntcclxuICAgICAgICAvLyB3aWR0aDo1MHB4O1xyXG4gICAgICAgIC8vIGhlaWdodDo1MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIH1cclxuICAgIGg1e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgICAgICBjb2xvcjppdm9yeTtcclxuICAgICAgICBwYWRkaW5nOjVweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG59IiwiOmhvc3QgaDMge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIGFyaWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMjE5M2IwO1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuOmhvc3QgaW9uLXNsaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IC5kaXYge1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG46aG9zdCBpbWcge1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMTkwcHg7XG59XG46aG9zdCAuaW1nLXNpemUge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbjpob3N0IHAge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG46aG9zdCAuYnRuLXBhZGRpbmcge1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuOmhvc3QgLnByb2QtdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG59XG46aG9zdCBpb24taWNvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG46aG9zdCBoNSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjb2xvcjogaXZvcnk7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/prod-brand/prod-brand.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/cust/prod-brand/prod-brand.page.ts ***!
  \**********************************************************/
/*! exports provided: ProdBrandPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdBrandPage", function() { return ProdBrandPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");







var ProdBrandPage = /** @class */ (function () {
    function ProdBrandPage(route, authService, alertService, loadingCtrl, alertCtrl, navCtrl, router) {
        this.route = route;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.router = router;
    }
    ProdBrandPage.prototype.ngOnInit = function () {
        // this.items = this.getProducts();
        // console.log(this.pro);
        this.getSubCategory();
    };
    ProdBrandPage.prototype.getSubCategory = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.pro = _this.router.getCurrentNavigation().extras.state.p.categoryName;
                _this.authService.getProductCategory(_this.pro).subscribe(function (result) {
                    console.log(result);
                    _this.subCategory = result['message'];
                    console.log(_this.subCategory);
                    _this.prod = result['message'];
                });
            }
        });
    };
    ProdBrandPage.prototype.productList = function (brand) {
        var navigationExtras = {
            state: {
                brand: brand,
            }
        };
        this.router.navigate(['prod-list'], navigationExtras);
        console.log(brand);
    };
    ProdBrandPage.prototype.openSupport = function (brand) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var changeLocation;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Welcome to Support',
                            message: 'Enter your Query',
                            inputs: [
                                {
                                    name: 'info',
                                    placeholder: 'Enter your query',
                                    type: 'text'
                                },
                                {
                                    name: 'category',
                                    value: brand.productCategory,
                                    disabled: true
                                },
                                {
                                    name: 'brand',
                                    value: brand.brand,
                                    disabled: true
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'submit',
                                    handler: function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var loader;
                                        var _this = this;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.loadingCtrl.create({
                                                        duration: 1000
                                                    })];
                                                case 1:
                                                    loader = _a.sent();
                                                    loader.present();
                                                    loader.onWillDismiss().then(function (l) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                        var _this = this;
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            console.log(data.info);
                                                            // this.authService.sendCode(data.info).subscribe(result => {
                                                            //   if (result['response']) {
                                                            //     console.log(result);
                                                            //     this.alertService.presentToast(result['msg']);
                                                            //   } else {
                                                            //     console.log(result);
                                                            //     this.alertService.presentToast(result['msg']);
                                                            //   }
                                                            // });
                                                            this.authService.postSupport(data).subscribe(function (result) {
                                                                if (result['response']) {
                                                                    console.log(result);
                                                                    _this.alertService.presentToast(result['message']);
                                                                }
                                                                else {
                                                                    console.log(result);
                                                                    _this.alertService.presentToast(result['message']);
                                                                }
                                                            });
                                                            return [2 /*return*/];
                                                        });
                                                    }); });
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        changeLocation = _a.sent();
                        changeLocation.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProdBrandPage.prototype.cart = function () {
        this.navCtrl.navigateForward('cart');
    };
    ProdBrandPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProdBrandPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prod-brand',
            template: __webpack_require__(/*! raw-loader!./prod-brand.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/prod-brand/prod-brand.page.html"),
            styles: [__webpack_require__(/*! ./prod-brand.page.scss */ "./src/app/pages/cust/prod-brand/prod-brand.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProdBrandPage);
    return ProdBrandPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cust-prod-brand-prod-brand-module-es5.js.map