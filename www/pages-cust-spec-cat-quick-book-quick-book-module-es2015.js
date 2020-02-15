(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-quick-book-quick-book-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/quick-book/quick-book.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/quick-book/quick-book.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <div>\n        <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n      </div>\n    <ion-buttons slot=\"end\">\n      <ion-button shape=\"round\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <div *ngFor=\"let issue of issueList\">\n      <h5 class=\"issue-header\">{{issue.name}}</h5>\n      <div>\n          <div *ngFor=\"let i of issue.item_list\" class=\"div-flex\">\n            <div class=\"column1\">\n              <img src=\"{{i.icon}}\" onError=\"this.src='http://apiv1.iglobesystems.com/assets/img/no_img.png'\" class=\"issue-img\"/>\n            </div>\n            <div class=\"column2\"> \n              <h4 class=\"issue-name\">{{i.name}}</h4>\n              <h4 class=\"issue-detail\">{{i.short_details}}</h4>\n              <div class=\"div-flex2\">\n                <div class=\"column3\">\n                  <h3 class=\"issue-name fw600\">&#8377; {{i.mrp}}</h3>\n                </div>\n                <div class=\"column4\">\n                  <ion-button color=\"darkblue\" size=\"small\" fill=\"outline\">Add</ion-button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/quick-book/quick-book.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/quick-book/quick-book.module.ts ***!
  \*********************************************************************/
/*! exports provided: QuickBookPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickBookPageModule", function() { return QuickBookPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _quick_book_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quick-book.page */ "./src/app/pages/cust/spec-cat/quick-book/quick-book.page.ts");







const routes = [
    {
        path: '',
        component: _quick_book_page__WEBPACK_IMPORTED_MODULE_6__["QuickBookPage"]
    }
];
let QuickBookPageModule = class QuickBookPageModule {
};
QuickBookPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_quick_book_page__WEBPACK_IMPORTED_MODULE_6__["QuickBookPage"]]
    })
], QuickBookPageModule);



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/quick-book/quick-book.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/quick-book/quick-book.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.issue-header {\n  padding: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n  background-color: #f5f5f5;\n}\n\n.column1 {\n  width: 30%;\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.column2 {\n  width: 70%;\n}\n\n.column3 {\n  width: 50%;\n}\n\n.column4 {\n  width: 50%;\n}\n\n.div-flex {\n  display: -webkit-box;\n  display: flex;\n  margin: 5px 0px 15px 0px;\n  padding: 5px;\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.div-flex2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.issue-img {\n  width: 70px;\n  height: 70px;\n  max-width: 100px;\n  max-height: 100px;\n}\n\n.issue-name {\n  margin: 0;\n  font-size: 14px;\n  color: #0e0e27;\n  padding: 2px;\n}\n\n.issue-detail {\n  font-size: 12px;\n  color: gray;\n  margin: 0;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9xdWljay1ib29rL0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0XFxzcGVjLWNhdFxccXVpY2stYm9va1xccXVpY2stYm9vay5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvcXVpY2stYm9vay9xdWljay1ib29rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9xdWljay1ib29rL3F1aWNrLWJvb2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1sb2dve1xyXG4gICAgd2lkdGg6MTIwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uaXNzdWUtaGVhZGVye1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLmNvbHVtbjF7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbHVtbjJ7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4uY29sdW1uM3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5jb2x1bW40e1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmRpdi1mbGV4e1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgbWFyZ2luOjVweCAwcHggMTVweCAwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcclxufVxyXG5cclxuLmRpdi1mbGV4MntcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pc3N1ZS1pbWd7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmlzc3VlLW5hbWV7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjojMGUwZTI3O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4uaXNzdWUtZGV0YWlse1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6Z3JheTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxufVxyXG4iLCIuaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMTIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5pc3N1ZS1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLmNvbHVtbjEge1xuICB3aWR0aDogMzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb2x1bW4yIHtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLmNvbHVtbjMge1xuICB3aWR0aDogNTAlO1xufVxuXG4uY29sdW1uNCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5kaXYtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogNXB4IDBweCAxNXB4IDBweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbn1cblxuLmRpdi1mbGV4MiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pc3N1ZS1pbWcge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbn1cblxuLmlzc3VlLW5hbWUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwZTBlMjc7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmlzc3VlLWRldGFpbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/quick-book/quick-book.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/quick-book/quick-book.page.ts ***!
  \*******************************************************************/
/*! exports provided: QuickBookPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickBookPage", function() { return QuickBookPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let QuickBookPage = class QuickBookPage {
    constructor(navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl, authService, loadingCtrl, alertService, router, route) {
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
        this.route = route;
    }
    ngOnInit() {
        this.allService();
    }
    allService() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.issue = this.router.getCurrentNavigation().extras.state.service.id;
                this.subCategory = this.router.getCurrentNavigation().extras.state.service.name;
                this.authService.getServiceCategory(this.issue).subscribe(result => {
                    console.log(result);
                    this.issueList = result['data'].list;
                    console.log(this.issueList);
                });
            }
        });
    }
    back() {
        this.navCtrl.navigateBack('trending-issues');
    }
};
QuickBookPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
QuickBookPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quick-book',
        template: __webpack_require__(/*! raw-loader!./quick-book.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/quick-book/quick-book.page.html"),
        styles: [__webpack_require__(/*! ./quick-book.page.scss */ "./src/app/pages/cust/spec-cat/quick-book/quick-book.page.scss")]
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
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], QuickBookPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-quick-book-quick-book-module-es2015.js.map