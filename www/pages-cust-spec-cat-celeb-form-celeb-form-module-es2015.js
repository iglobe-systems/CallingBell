(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-celeb-form-celeb-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/celeb-form/celeb-form.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/celeb-form/celeb-form.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n       <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n\n    <div>\n      <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n    </div>\n\n    <ion-buttons slot=\"end\">\n      <ion-button shape=\"round\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div *ngIf=\"card\">\n    <img src=\"{{card.image_url}}\" class=\"header-img\"/>\n  </div>\n  <form [formGroup]=\"onCelebForm\">\n      From\n      <ion-item class=\"ion-no-padding\">\n        <ion-input color=\"darkblue\" placeholder=\"Sender Name\" formControlName=\"senderName\" color=\"darkblue\"></ion-input>\n      </ion-item>\n      <br>\n      To\n      <ion-item class=\"ion-no-padding\">\n        <ion-input color=\"darkblue\" type=\"number\" formControlName=\"recipientNumber\" placeholder=\"Enter recipient Whatsapp Number\"></ion-input>\n      </ion-item>\n      <ion-item class=\"ion-no-padding\">\n        <ion-input color=\"darkblue\" formControlName=\"recipientEmail\" placeholder=\"Enter recipient Email Address\"></ion-input>\n      </ion-item>\n      <br>\n      Your Message\n      <ion-item class=\"ion-no-padding\">\n        <ion-textarea formControlName=\"message\" placeholder=\"Happy Birthday!\"></ion-textarea>\n      </ion-item>\n  </form>\n  <ion-button (click)=\"celebForm()\" color=\"gold\" fill=\"outline\">ADD TO CART</ion-button>\n</ion-content>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/celeb-form/celeb-form.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/celeb-form/celeb-form.module.ts ***!
  \*********************************************************************/
/*! exports provided: CelebFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebFormPageModule", function() { return CelebFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _celeb_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./celeb-form.page */ "./src/app/pages/cust/spec-cat/celeb-form/celeb-form.page.ts");







const routes = [
    {
        path: '',
        component: _celeb_form_page__WEBPACK_IMPORTED_MODULE_6__["CelebFormPage"]
    }
];
let CelebFormPageModule = class CelebFormPageModule {
};
CelebFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_celeb_form_page__WEBPACK_IMPORTED_MODULE_6__["CelebFormPage"]]
    })
], CelebFormPageModule);



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/celeb-form/celeb-form.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/celeb-form/celeb-form.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.header-img {\n  height: 150px;\n  width: 100%;\n  padding: 0px 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9jZWxlYi1mb3JtL0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0XFxzcGVjLWNhdFxcY2VsZWItZm9ybVxcY2VsZWItZm9ybS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvY2VsZWItZm9ybS9jZWxlYi1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREdBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9jZWxlYi1mb3JtL2NlbGViLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1sb2dve1xyXG4gICAgd2lkdGg6MTIwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1pbWd7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHggODBweDtcclxufSIsIi5oZWFkZXItbG9nbyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmhlYWRlci1pbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDgwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/celeb-form/celeb-form.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/celeb-form/celeb-form.page.ts ***!
  \*******************************************************************/
/*! exports provided: CelebFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebFormPage", function() { return CelebFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let CelebFormPage = class CelebFormPage {
    constructor(navCtrl, router, route, formBuilder) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.card = this.router.getCurrentNavigation().extras.state.package;
                console.log(this.card);
            }
        });
        this.onCelebForm = this.formBuilder.group({
            'senderName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'recipientNumber': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'recipientEmail': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'message': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    celebForm() {
        console.log(this.onCelebForm.value, this.card);
    }
    back() {
        this.navCtrl.navigateBack('celeb-item');
    }
};
CelebFormPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
CelebFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-celeb-form',
        template: __webpack_require__(/*! raw-loader!./celeb-form.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/celeb-form/celeb-form.page.html"),
        styles: [__webpack_require__(/*! ./celeb-form.page.scss */ "./src/app/pages/cust/spec-cat/celeb-form/celeb-form.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], CelebFormPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-celeb-form-celeb-form-module-es2015.js.map