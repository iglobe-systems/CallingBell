(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-prod-cat-prod-cat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/prod-cat/prod-cat.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/prod-cat/prod-cat.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n        <div class=\"logo-in\"></div>\n    <ion-buttons slot=\"end\">\n      <ion-button shape=\"round\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"notifications()\">\n        <ion-icon name=\"notifications\"></ion-icon>\n        <ion-badge color=\"dark\" slot=\"end\">2</ion-badge>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"fw800 text-center ion-padding\" style=\"color:red;font-size: 14px;margin:5px;padding:5px;\" color=\"dark\" >\n    EXPLORE OUR WIDE RANGE OF SUPPORT AND SUPPLY OF MULTI BRAND PRODUCTS.\n  </ion-card>\n <!--    <h3>PRODUCT CATEGORIES</h3> -->\n    <div *ngFor =\"let p of prodCat\" class=\"size\">\n         <h5>{{p.categoryName}}</h5>\n        <img src=\"{{p.image}}\" (click)=\"productList(p)\" onError=\"this.src='https://static.thenounproject.com/png/212328-200.png'\">\n          <ion-segment color=\"danger\" scrollable >\n            <ion-segment-button  (click)=\"notifications($event,p)\"><ion-label>Support</ion-label></ion-segment-button>\n            <ion-segment-button  (click)=\"productList(p)\"><ion-label >Supply</ion-label></ion-segment-button>\n          </ion-segment>   \n       \n          <br>               \n    </div>\n\n     <div class=\"size\" *ngIf=\"prodCat\">\n         <h5>other services</h5>\n        <img src=\"https://image.shutterstock.com/image-vector/friendly-carpenter-he-dressed-work-260nw-641263015.jpg\" (click)=\"otherService()\" onError=\"this.src='https://static.thenounproject.com/png/212328-200.png'\">\n          <ion-segment color=\"danger\" scrollable >\n            <ion-segment-button  (click)=\"otherService()\"><ion-label>Support</ion-label></ion-segment-button>\n            <ion-segment-button  (click)=\"otherService()\"><ion-label >Supply</ion-label></ion-segment-button>\n          </ion-segment>   \n       \n          <br>               \n    </div>\n     <!--  <div *ngIf =\"!prodCat\" class=\"msg\">\n        Sorry for the inconvenience !<br> Kindly login again !\n      </div> -->\n<div *ngIf =\"!prodCat\">\n  <div *ngFor=\"let i of [0,1,2,3,4,5,6,7]\" class=\"size custom-skeleton\">\n          <ion-skeleton-text animated style=\"height:20px\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"height:150px\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 50%;height:15px;\"></ion-skeleton-text>  \n          <br>               \n    </div>\n  </div>\n    <!-- <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n  <ion-fab-button color=\"danger\" size=\"small\" (click)=\"opencart()\"><ion-icon name=\"cart\"></ion-icon></ion-fab-button>\n</ion-fab> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/prod-cat/prod-cat.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/cust/prod-cat/prod-cat.module.ts ***!
  \********************************************************/
/*! exports provided: ProdCatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdCatPageModule", function() { return ProdCatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prod_cat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prod-cat.page */ "./src/app/pages/cust/prod-cat/prod-cat.page.ts");







const routes = [
    {
        path: '',
        component: _prod_cat_page__WEBPACK_IMPORTED_MODULE_6__["ProdCatPage"]
    }
];
let ProdCatPageModule = class ProdCatPageModule {
};
ProdCatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_prod_cat_page__WEBPACK_IMPORTED_MODULE_6__["ProdCatPage"]]
    })
], ProdCatPageModule);



/***/ }),

/***/ "./src/app/pages/cust/prod-cat/prod-cat.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/cust/prod-cat/prod-cat.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .div {\n  margin-top: 3%;\n  margin-bottom: 3%;\n}\n:host .img-size {\n  width: 100px;\n  height: 80px;\n}\n:host p .margin-top {\n  margin-top: 5px;\n}\n:host .btn-padding {\n  margin-left: 20%;\n}\n:host .prod-title {\n  font-size: 15px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 15px;\n  margin-bottom: 3%;\n}\n:host ion-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host ion-icon {\n  margin-top: 10px;\n}\n:host .size {\n  display: inline-block;\n  width: 48%;\n  text-align: center;\n  margin: 1%;\n}\n:host img {\n  width: 150px;\n  height: 150px;\n  border-radius: 5px;\n  margin-left: auto;\n  margin-right: auto;\n}\n:host h5 {\n  text-transform: uppercase;\n  font-weight: 600;\n  color: #f34d4d;\n  overflow-x: hidden;\n  font-size: 15px;\n  height: 15px;\n  margin-top: 5px;\n}\n:host ion-label {\n  font-weight: 800;\n}\n:host .msg {\n  margin-left: 5%;\n  text-align: center;\n  font-size: 20px;\n}\n:host i {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLWNhdC9EOlxcUmlhelxcTmV3QVBLXFxOZXdBUEt2MC4xL3NyY1xcYXBwXFxwYWdlc1xcY3VzdFxccHJvZC1jYXRcXHByb2QtY2F0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLWNhdC9wcm9kLWNhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNEUjtBRElJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNGUjtBRElJO0VBQ0ksZUFBQTtBQ0ZSO0FESUM7RUFDQyxnQkFBQTtBQ0ZGO0FESUk7RUFDSSxlQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0hSO0FES0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNIUjtBREtJO0VBR0ksZ0JBQUE7QUNMUjtBRGdCSTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ2RSO0FEZ0JLO0VBQ0QsWUFBQTtFQUVBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNmSjtBRG1CSTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNqQlI7QURvQkk7RUFDSSxnQkFBQTtBQ2xCUjtBRG9CSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNsQlI7QURxQkk7RUFDSSxlQUFBO0FDbkJSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLWNhdC9wcm9kLWNhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOmhvc3R7XHJcbiAgICAuZGl2e1xyXG4gICAgICAgIG1hcmdpbi10b3A6MyU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLmltZy1zaXple1xyXG4gICAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgICAgIGhlaWdodDo4MHB4O1xyXG4gICAgfVxyXG4gICAgcCAubWFyZ2luLXRvcHtcclxuICAgICAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgIH1cclxuXHQuYnRuLXBhZGRpbmd7XHJcblx0XHRtYXJnaW4tbGVmdDoyMCU7XHJcblx0fVxyXG4gICAgLnByb2QtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICAgICAgLy8gbWFyZ2luOjEwcHggMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgfVxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgLy8gd2lkdGg6NTBweDtcclxuICAgICAgICAvLyBoZWlnaHQ6NTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICB9XHJcbiAgICAvLyBoNXtcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAvLyAgICAgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICAvLyAgICAgY29sb3I6aXZvcnk7XHJcbiAgICAvLyAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAvLyAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIC8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC5zaXple1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOjQ4JTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAxJTtcclxuICAgIH1cclxuICAgICBpbWd7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIC8vIGhlaWdodDoxNTBweDtcclxuICAgIGhlaWdodDoxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoNXtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6I2YzNGQ0ZDtcclxuICAgICAgICBvdmVyZmxvdy14OmhpZGRlbjsgXHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGhlaWdodDoxNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIH1cclxuICAgIC5tc2d7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaXtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4vLyBpb24tY29udGVudHtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1nL3Byb2R1Y3RiZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcblxyXG4vLyAgICAgfVxyXG4iLCI6aG9zdCAuZGl2IHtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuOmhvc3QgLmltZy1zaXplIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG46aG9zdCBwIC5tYXJnaW4tdG9wIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuOmhvc3QgLmJ0bi1wYWRkaW5nIHtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cbjpob3N0IC5wcm9kLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG46aG9zdCBpb24tY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCBpb24taWNvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG46aG9zdCAuc2l6ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQ4JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDElO1xufVxuOmhvc3QgaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG46aG9zdCBoNSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZjM0ZDRkO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG46aG9zdCBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogODAwO1xufVxuOmhvc3QgLm1zZyB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG46aG9zdCBpIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/cust/prod-cat/prod-cat.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/cust/prod-cat/prod-cat.page.ts ***!
  \******************************************************/
/*! exports provided: ProdCatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdCatPage", function() { return ProdCatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_support_support_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/support/support.component */ "./src/app/components/support/support.component.ts");







let ProdCatPage = class ProdCatPage {
    constructor(authService, alertService, loadingCtrl, alertCtrl, navCtrl, popoverCtrl, router) {
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.router = router;
    }
    ngOnInit() {
        this.productCategory();
    }
    productCategory() {
        this.authService.getProducts().subscribe(data => {
            console.log(data);
            this.prodCat = data.message;
        });
    }
    productList(p) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let navigationExtras = {
                state: {
                    p: p
                }
            };
            this.router.navigate(['prod-subcat'], navigationExtras);
            console.log(p);
        });
    }
    notifications(ev, p) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _components_support_support_component__WEBPACK_IMPORTED_MODULE_6__["SupportComponent"],
                componentProps: {
                    p: p
                },
                event: ev,
                animated: true,
                showBackdrop: true
            });
            return yield popover.present();
        });
    }
    openSupport(p) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
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
                        value: p.categoryName,
                        label: 'Category',
                        disabled: true
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'submit',
                        handler: (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            console.log(data);
                            const loader = yield this.loadingCtrl.create({
                                duration: 1000
                            });
                            loader.present();
                            loader.onWillDismiss().then((l) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                console.log(data);
                                // this.authService.sendCode(data.info).subscribe(result => {
                                //   if (result['response']) {
                                //     console.log(result);
                                //     this.alertService.presentToast(result['msg']);
                                //   } else {
                                //     console.log(result);
                                //     this.alertService.presentToast(result['msg']);
                                //   }
                                // });
                                this.authService.postSupport(data).subscribe(result => {
                                    if (result['response']) {
                                        console.log(result);
                                        this.alertService.presentToast(result['message']);
                                    }
                                    else {
                                        console.log(result);
                                        this.alertService.presentToast(result['message']);
                                    }
                                });
                            }));
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    opencart() {
        this.navCtrl.navigateForward('cart');
    }
    back() {
        this.navCtrl.navigateBack('cust-home');
    }
    otherService() {
        this.navCtrl.navigateForward('other-services');
    }
};
ProdCatPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ProdCatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prod-cat',
        template: __webpack_require__(/*! raw-loader!./prod-cat.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/prod-cat/prod-cat.page.html"),
        styles: [__webpack_require__(/*! ./prod-cat.page.scss */ "./src/app/pages/cust/prod-cat/prod-cat.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ProdCatPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-prod-cat-prod-cat-module-es2015.js.map