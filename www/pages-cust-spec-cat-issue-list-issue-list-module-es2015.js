(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-issue-list-issue-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/issue-list/issue-list.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/issue-list/issue-list.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <div>\n        <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n      </div>\n    <ion-buttons slot=\"end\">\n      <ion-button shape=\"round\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <h5>{{subCategory}}</h5>\n  </div>\n  <div>\n    <div *ngFor=\"let issue of issueList\" class=\"div-flex\">\n      <div class=\"column1\">\n        <img src=\"{{issue.icon}}\" class=\"issue-img\"/>\n      </div>\n      <div class=\"column2\"> \n        <h4 class=\"issue-name\">{{issue.name}}</h4>\n        <h4 class=\"issue-detail\">{{issue.short_details}}</h4>\n        <div class=\"div-flex2\">\n          <div class=\"column3\">\n            <h3 class=\"issue-name fw600\">&#8377; {{issue.mrp}}</h3>\n          </div>\n          <div class=\"column4\">\n            <ion-button color=\"darkblue\" size=\"small\" fill=\"outline\">Add</ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/issue-list/issue-list.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/issue-list/issue-list.module.ts ***!
  \*********************************************************************/
/*! exports provided: IssueListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueListPageModule", function() { return IssueListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _issue_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./issue-list.page */ "./src/app/pages/cust/spec-cat/issue-list/issue-list.page.ts");







const routes = [
    {
        path: '',
        component: _issue_list_page__WEBPACK_IMPORTED_MODULE_6__["IssueListPage"]
    }
];
let IssueListPageModule = class IssueListPageModule {
};
IssueListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_issue_list_page__WEBPACK_IMPORTED_MODULE_6__["IssueListPage"]]
    })
], IssueListPageModule);



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/issue-list/issue-list.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/issue-list/issue-list.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\nh5 {\n  padding: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.column1 {\n  width: 30%;\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.column2 {\n  width: 70%;\n}\n\n.column3 {\n  width: 50%;\n}\n\n.column4 {\n  width: 50%;\n}\n\n.div-flex {\n  display: -webkit-box;\n  display: flex;\n  margin: 5px 0px 15px 0px;\n  padding: 5px;\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.div-flex2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.issue-img {\n  width: 70px;\n  height: 70px;\n  max-width: 100px;\n  max-height: 100px;\n}\n\n.issue-name {\n  margin: 0;\n  font-size: 14px;\n  color: #0e0e27;\n  padding: 2px;\n}\n\n.issue-detail {\n  font-size: 12px;\n  color: gray;\n  margin: 0;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9pc3N1ZS1saXN0L0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0XFxzcGVjLWNhdFxcaXNzdWUtbGlzdFxcaXNzdWUtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvaXNzdWUtbGlzdC9pc3N1ZS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvaXNzdWUtbGlzdC9pc3N1ZS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbG9nb3tcclxuICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuaDV7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jb2x1bW4xe1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2x1bW4ye1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmNvbHVtbjN7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uY29sdW1uNHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5kaXYtZmxleHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIG1hcmdpbjo1cHggMHB4IDE1cHggMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn1cclxuXHJcbi5kaXYtZmxleDJ7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaXNzdWUtaW1ne1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5pc3N1ZS1uYW1le1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IzBlMGUyNztcclxuICAgIHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxuLmlzc3VlLWRldGFpbHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOmdyYXk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbn0iLCIuaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMTIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmg1IHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5jb2x1bW4xIHtcbiAgd2lkdGg6IDMwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29sdW1uMiB7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5jb2x1bW4zIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbHVtbjQge1xuICB3aWR0aDogNTAlO1xufVxuXG4uZGl2LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDVweCAwcHggMTVweCAwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XG59XG5cbi5kaXYtZmxleDIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaXNzdWUtaW1nIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG59XG5cbi5pc3N1ZS1uYW1lIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMGUwZTI3O1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5pc3N1ZS1kZXRhaWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/issue-list/issue-list.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/issue-list/issue-list.page.ts ***!
  \*******************************************************************/
/*! exports provided: IssueListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueListPage", function() { return IssueListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let IssueListPage = class IssueListPage {
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
        this.getIssueList();
    }
    getIssueList() {
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
IssueListPage.ctorParameters = () => [
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
IssueListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-issue-list',
        template: __webpack_require__(/*! raw-loader!./issue-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/issue-list/issue-list.page.html"),
        styles: [__webpack_require__(/*! ./issue-list.page.scss */ "./src/app/pages/cust/spec-cat/issue-list/issue-list.page.scss")]
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
], IssueListPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-issue-list-issue-list-module-es2015.js.map