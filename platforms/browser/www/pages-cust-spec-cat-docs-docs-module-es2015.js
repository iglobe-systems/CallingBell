(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-docs-docs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/docs/docs.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/docs/docs.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-buttons>\n      <div>\n        <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n      </div>\n         <ion-buttons slot=\"end\">\n          <ion-button shape=\"round\" (click)=\"back()\">\n            <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"bg\">\n    <h4>Historical gap is created due to <br>missing written records.</h4>\n    </div>\n  <div *ngFor=\"let service of documents\"  class=\"size\">\n    <div class=\"flex\">\n      <img src=\"{{service.image_url}}\" class=\"service-img\"/>\n      <h5>{{service.name}}</h5>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/docs/docs.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/docs/docs.module.ts ***!
  \*********************************************************/
/*! exports provided: DocsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsPageModule", function() { return DocsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _docs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./docs.page */ "./src/app/pages/cust/spec-cat/docs/docs.page.ts");







const routes = [
    {
        path: '',
        component: _docs_page__WEBPACK_IMPORTED_MODULE_6__["DocsPage"]
    }
];
let DocsPageModule = class DocsPageModule {
};
DocsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_docs_page__WEBPACK_IMPORTED_MODULE_6__["DocsPage"]]
    })
], DocsPageModule);



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/docs/docs.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/docs/docs.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.size {\n  display: inline-block;\n  width: 29%;\n  background-color: #fffbeb;\n  text-align: center;\n  margin: 2%;\n  height: 120px;\n}\n\n.service-img {\n  width: 40px;\n  height: 40px;\n  border-radius: 5px;\n  margin: 10px auto;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nh5 {\n  text-transform: uppercase;\n  margin: 10px;\n  font-size: 12px;\n}\n\n.bg {\n  background: url('5.jpg') no-repeat center center/cover;\n}\n\nh4 {\n  text-transform: uppercase;\n  margin: 0;\n  padding: 10%;\n  color: snow;\n  font-size: 1.5rem;\n  text-shadow: 2px 2px black;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9kb2NzL0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0XFxzcGVjLWNhdFxcZG9jc1xcZG9jcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvZG9jcy9kb2NzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0MscUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNHLFVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUM7RUFDRyxXQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0VBR0EsaUJBQUE7QUNGSjs7QURLQztFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0ZGOztBREtDO0VBQ0MseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBREtDO0VBQ0Usc0RBQUE7QUNGSDs7QURNQztFQUNFLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNISCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvZG9jcy9kb2NzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbG9nb3tcclxuICB3aWR0aDoxMjBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uc2l6ZXtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6MjklOyAgLy9kZWZhdWx0IC0gNDYlXHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmJlYjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgaGVpZ2h0OjEyMHB4O1xyXG59XHJcblxyXG4gLnNlcnZpY2UtaW1ne1xyXG4gICAgd2lkdGg6NDBweDtcclxuICAgIC8vIGhlaWdodDoxNTBweDtcclxuICAgIGhlaWdodDo0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIH1cclxuXHJcbiAuZmxleHtcclxuIFx0ZGlzcGxheTogZmxleDtcclxuIFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gfVxyXG5cclxuIGg1e1xyXG4gXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gXHRtYXJnaW46MTBweDtcclxuIFx0Zm9udC1zaXplOiAxMnB4O1xyXG4gfVxyXG5cclxuIC5iZ3tcclxuICAgYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1nL2JnLzUuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcclxuICAvLyAgb3BhY2l0eTowLjU7XHJcbiB9XHJcblxyXG4gaDR7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgIG1hcmdpbjogMDtcclxuICAgcGFkZGluZzogMTAlO1xyXG4gICBjb2xvcjogc25vdztcclxuICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgIHRleHQtc2hhZG93OiAycHggMnB4IGJsYWNrO1xyXG4gICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiB9IiwiLmhlYWRlci1sb2dvIHtcbiAgd2lkdGg6IDEyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc2l6ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI5JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJlYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIlO1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4uc2VydmljZS1pbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmg1IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5iZyB7XG4gIGJhY2tncm91bmQ6IHVybChzcmMvYXNzZXRzL2ltZy9iZy81LmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XG59XG5cbmg0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMCU7XG4gIGNvbG9yOiBzbm93O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggYmxhY2s7XG4gIHRleHQtYWxpZ246IGVuZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/docs/docs.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/docs/docs.page.ts ***!
  \*******************************************************/
/*! exports provided: DocsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsPage", function() { return DocsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let DocsPage = class DocsPage {
    constructor(authService, alertService, loadingCtrl, alertCtrl, navCtrl, popoverCtrl, router) {
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.router = router;
        this.documents = [
            { id: 25, name: "personal document", image_url: "assets/img/flaticon/document/support.png" },
            { id: 25, name: "professional document", image_url: "assets/img/flaticon/document/suitcase.png" },
            { id: 25, name: "product document", image_url: "assets/img/flaticon/document/appliances.png" },
            { id: 25, name: "property document", image_url: "assets/img/flaticon/document/house.png" },
            { id: 25, name: "medical document", image_url: "assets/img/flaticon/document/certificate.png" },
            { id: 25, name: "government document", image_url: "assets/img/flaticon/document/government.png" },
        ];
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.navigateBack('cust-home');
    }
};
DocsPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
DocsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-docs',
        template: __webpack_require__(/*! raw-loader!./docs.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/docs/docs.page.html"),
        styles: [__webpack_require__(/*! ./docs.page.scss */ "./src/app/pages/cust/spec-cat/docs/docs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], DocsPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-docs-docs-module-es2015.js.map