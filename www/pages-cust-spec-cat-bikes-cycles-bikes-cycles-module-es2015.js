(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-bikes-cycles-bikes-cycles-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/bikes-cycles/bikes-cycles.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/bikes-cycles/bikes-cycles.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n       <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n\n     <div class=\"logo-in\"></div>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-slides [options]=\"slideOptsOne\">\n     <ion-slide *ngFor=\"let s of sliderOne.slidesItems\">\n      <img src=\"assets/img/{{s.id}}.jpg\">\n     </ion-slide>\n \t</ion-slides>\n\t<h5>Explore the section of Ebikes & Cycles</h5>\n\t<ion-card (click)=\"ebike()\">\n\t\t<div class=\"flex\">\n\t\t\t<img src=\"https://cdn.shopify.com/s/files/1/0912/7284/collections/3_1440x.jpg?v=1544546691\" class=\"imgbike\"/>\n\t\t\t<p>Electric cycles are the finest development in our ever congesting world to provide an easy solution for daily commute woes. They not only save a lot of fuel and keep the environment clean but also help you develop good health with little pedal exercise during your commute.</p>\n\t\t</div>\n\t\t<h3 >E - bikes</h3>\n\t</ion-card>\n\t<ion-card>\n\t\t<div class=\"flex\">\n\t\t\t<img src=\"https://5.imimg.com/data5/PK/IW/MY-63473212/hero-cycles-devil-ranger-500x500.jpg\" class=\"imgbike\"/>\n\t\t\t<p>As per a study, people scored more in test conducted for memory, reasoning and planning after 30 minutes of pedaling on stationary bike. It was also observed that these people were able to finish the test faster as compared to people who use public transport. If free stationary cycling has such impact, imagine the brain booster you will get while riding cycles on road in free air. </p>\n\t\t</div>\n\t\t<h3>Cycles</h3>\n\t</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/bikes-cycles/bikes-cycles.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/bikes-cycles/bikes-cycles.module.ts ***!
  \*************************************************************************/
/*! exports provided: BikesCyclesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BikesCyclesPageModule", function() { return BikesCyclesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bikes_cycles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bikes-cycles.page */ "./src/app/pages/cust/spec-cat/bikes-cycles/bikes-cycles.page.ts");







const routes = [
    {
        path: '',
        component: _bikes_cycles_page__WEBPACK_IMPORTED_MODULE_6__["BikesCyclesPage"]
    }
];
let BikesCyclesPageModule = class BikesCyclesPageModule {
};
BikesCyclesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_bikes_cycles_page__WEBPACK_IMPORTED_MODULE_6__["BikesCyclesPage"]]
    })
], BikesCyclesPageModule);



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/bikes-cycles/bikes-cycles.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/bikes-cycles/bikes-cycles.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgbike {\n  width: 200px;\n  height: 200px;\n}\n\nh5 {\n  margin-left: 5%;\n  font-size: 16px;\n}\n\nh3 {\n  text-align: center;\n  font-size: 16px;\n  color: black;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n}\n\np {\n  font-size: 11px;\n  padding: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9iaWtlcy1jeWNsZXMvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXGN1c3RcXHNwZWMtY2F0XFxiaWtlcy1jeWNsZXNcXGJpa2VzLWN5Y2xlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvYmlrZXMtY3ljbGVzL2Jpa2VzLWN5Y2xlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGVBQUE7QUNDRDs7QURFQTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxvQkFBQTtFQUFBLGFBQUE7QUNDRDs7QURFQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdXN0L3NwZWMtY2F0L2Jpa2VzLWN5Y2xlcy9iaWtlcy1jeWNsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ2Jpa2V7XHJcblx0d2lkdGg6MjAwcHg7XHJcblx0aGVpZ2h0OjIwMHB4O1xyXG59XHJcblxyXG5oNXtcclxuXHRtYXJnaW4tbGVmdDo1JTtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmgze1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Y29sb3I6YmxhY2s7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZmxleHtcclxuXHRkaXNwbGF5OmZsZXg7XHJcbn1cclxuXHJcbnB7XHJcblx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdHBhZGRpbmc6MiU7XHJcbn0iLCIuaW1nYmlrZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuaDUge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbnAge1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDIlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/bikes-cycles/bikes-cycles.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/bikes-cycles/bikes-cycles.page.ts ***!
  \***********************************************************************/
/*! exports provided: BikesCyclesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BikesCyclesPage", function() { return BikesCyclesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let BikesCyclesPage = class BikesCyclesPage {
    constructor(navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl, authService, loadingCtrl, alertService, router) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertService = alertService;
        this.router = router;
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
        this.sliderOne =
            {
                isBeginningSlide: true,
                isEndSlide: false,
                slidesItems: [
                    {
                        id: 1,
                    },
                    {
                        id: 2
                    },
                    {
                        id: 3
                    },
                    {
                        id: 4
                    }
                ]
            };
    }
    ngOnInit() {
    }
    ebike() {
        this.navCtrl.navigateForward('ebike');
    }
};
BikesCyclesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
BikesCyclesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bikes-cycles',
        template: __webpack_require__(/*! raw-loader!./bikes-cycles.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/bikes-cycles/bikes-cycles.page.html"),
        styles: [__webpack_require__(/*! ./bikes-cycles.page.scss */ "./src/app/pages/cust/spec-cat/bikes-cycles/bikes-cycles.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], BikesCyclesPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-bikes-cycles-bikes-cycles-module-es2015.js.map