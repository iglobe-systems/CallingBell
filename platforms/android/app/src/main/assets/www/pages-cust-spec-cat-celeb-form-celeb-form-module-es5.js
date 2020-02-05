(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-celeb-form-celeb-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/celeb-form/celeb-form.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/celeb-form/celeb-form.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n       <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n\n    <div>\n      <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n    </div>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"text-center\">\n\t\t<img src=\"assets/img/celeb/bdaywish.png\" class=\"headerimg\"/>\n\t</div>\n\t<h5 class=\"header fw600\">Sender information</h5>\n\t<ion-card>\n\t<ion-item  class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          FULL NAME\n        </ion-label>\n        <ion-input color=\"secondary\" class=\"fw800\" type=\"text\"></ion-input>\n     </ion-item>\n     <ion-item  class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          MOBILE NUMBER\n        </ion-label>\n        <ion-input color=\"secondary\" class=\"fw800\" type=\"text\"></ion-input>\n     </ion-item>\n     <ion-item  class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          COMPLETE ADDRESS\n        </ion-label>\n        <ion-input color=\"secondary\" class=\"fw800\" type=\"text\"></ion-input>\n     </ion-item>\n     <ion-item  class=\"animated fadeInUp\">\n        <ion-label >\n          IMAGE\n        </ion-label>\n        <ion-button size=\"small\" class=\"color\">GALLERY</ion-button>\n     </ion-item>\n \t</ion-card>\n \t<h5 class=\"header fw600\">receiver information</h5>\n \t<ion-card>\n\t<ion-item  class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          FULL NAME\n        </ion-label>\n        <ion-input color=\"secondary\" class=\"fw800\" type=\"text\"></ion-input>\n     </ion-item>\n     <ion-item  class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          MOBILE NUMBER\n        </ion-label>\n        <ion-input color=\"secondary\" class=\"fw800\" type=\"text\"></ion-input>\n     </ion-item>\n     <ion-item  class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          COMPLETE ADDRESS\n        </ion-label>\n        <ion-input color=\"secondary\" class=\"fw800\" type=\"text\"></ion-input>\n     </ion-item>\n      <ion-item  class=\"animated fadeInUp\">\n        <ion-label >\n          IMAGE\n        </ion-label>\n        <ion-button size=\"small\" class=\"color\">GALLERY</ion-button>\n     </ion-item>\n \t</ion-card>\n \t<h5 class=\"header fw600\">message</h5>\n \t<ion-card>\n \t  <ion-item  class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          WISHES\n        </ion-label>\n        <ion-input color=\"secondary\" class=\"fw800\" type=\"text\"></ion-input>\n      </ion-item>\n \t</ion-card>\n \t<h5 class=\"header fw600\">choose a package</h5>\n \t <!-- <ion-list>\n \t  <ion-item>\n \t\t<ion-checkbox slot=\"start\" color=\"danger\"></ion-checkbox>\n \t\t<ion-label>E Wishes</ion-label>\n \t  </ion-item>\n \t </ion-list> -->\n \t <div *ngFor=\"let c of celeb\" class=\"imgsize\">\n \t\t\t\t<ion-button id=\"{{c.id}}\" #first class=\"package\" color=\"light\" (click)=\"btnActivate(first)\"><img src=\"{{c.img}}\"/></ion-button>\n        <ion-text> &#8377; {{c.rate}}</ion-text>\n \t </div>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _celeb_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./celeb-form.page */ "./src/app/pages/cust/spec-cat/celeb-form/celeb-form.page.ts");







var routes = [
    {
        path: '',
        component: _celeb_form_page__WEBPACK_IMPORTED_MODULE_6__["CelebFormPage"]
    }
];
var CelebFormPageModule = /** @class */ (function () {
    function CelebFormPageModule() {
    }
    CelebFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_celeb_form_page__WEBPACK_IMPORTED_MODULE_6__["CelebFormPage"]]
        })
    ], CelebFormPageModule);
    return CelebFormPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/celeb-form/celeb-form.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/celeb-form/celeb-form.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.header {\n  text-transform: uppercase;\n  color: #e23059;\n  margin-left: 2%;\n}\n\n.headerimg {\n  width: 50%;\n}\n\n.color {\n  --background:#e23059;\n}\n\n.package {\n  width: 100%;\n  height: auto;\n}\n\n.imgsize {\n  display: inline-block;\n  width: 44%;\n  margin: 1% 3%;\n}\n\nion-text {\n  color: #e23059;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9jZWxlYi1mb3JtL0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0XFxzcGVjLWNhdFxcY2VsZWItZm9ybVxcY2VsZWItZm9ybS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvY2VsZWItZm9ybS9jZWxlYi1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBRENBO0VBQ0MseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0VEOztBRENBO0VBQ0MsVUFBQTtBQ0VEOztBRENBO0VBQ0Msb0JBQUE7QUNFRDs7QURDQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDRUQ7O0FEQ0E7RUFDQyxxQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDRUQ7O0FEQ0E7RUFDQyxjQUFBO0FDRUQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdXN0L3NwZWMtY2F0L2NlbGViLWZvcm0vY2VsZWItZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWxvZ297XHJcbiAgICB3aWR0aDoxMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmhlYWRlcntcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGNvbG9yOiNlMjMwNTk7XHJcblx0bWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcblxyXG4uaGVhZGVyaW1ne1xyXG5cdHdpZHRoOjUwJTtcclxufVxyXG5cclxuLmNvbG9ye1xyXG5cdC0tYmFja2dyb3VuZDojZTIzMDU5O1xyXG59XHJcblxyXG4ucGFja2FnZXtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGhlaWdodDphdXRvO1xyXG59XHJcblxyXG4uaW1nc2l6ZXtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6NDQlO1xyXG5cdG1hcmdpbjoxJSAzJTtcclxufVxyXG5cclxuaW9uLXRleHR7XHJcblx0Y29sb3I6I2UyMzA1OTtcclxufVxyXG5cclxuLy8gLmJne1xyXG4vLyBcdC8vIGJhY2tncm91bmQ6I2ZmZWVmMTtcclxuLy8gXHQvLyBtYXJnaW46MyU7XHJcbi8vIFx0Ym9yZGVyLXJhZGl1czogMyU7XHJcbi8vIH1cclxuXHJcbi8vIC5jbHtcclxuLy8gXHRiYWNrZ3JvdW5kOiNmZmVlZjE7XHJcbi8vIFx0Ly8gbWFyZ2luOjMlO1xyXG4vLyBcdGJvcmRlci1yYWRpdXM6IDMlO1xyXG4vLyB9IiwiLmhlYWRlci1sb2dvIHtcbiAgd2lkdGg6IDEyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uaGVhZGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNlMjMwNTk7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLmhlYWRlcmltZyB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jb2xvciB7XG4gIC0tYmFja2dyb3VuZDojZTIzMDU5O1xufVxuXG4ucGFja2FnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5pbWdzaXplIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDQlO1xuICBtYXJnaW46IDElIDMlO1xufVxuXG5pb24tdGV4dCB7XG4gIGNvbG9yOiAjZTIzMDU5O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CelebFormPage = /** @class */ (function () {
    function CelebFormPage() {
        // celeb:any;
        this.celeb = [
            { id: 1, img: 'assets/img/celeb/ewish.png', name: 'E Wishes', rate: 10 },
            { id: 2, img: 'assets/img/celeb/basicpack.png', name: 'Personalised Card + Bouquet + CallingBell Basket', rate: 499 },
            { id: 3, img: 'assets/img/celeb/level1pack.png', rate: 799 },
            { id: 4, img: 'assets/img/celeb/level2pack.png', rate: 1299 },
            { id: 5, img: 'assets/img/celeb/level3pack.png', rate: 1499 },
            { id: 6, img: 'assets/img/celeb/level4pack.png', rate: 1799 },
        ];
    }
    CelebFormPage.prototype.ngOnInit = function () {
    };
    CelebFormPage.prototype.btnActivate = function (ionicButton) {
        if (ionicButton.color === 'light')
            ionicButton.color = 'dark';
        else
            ionicButton.color = 'light';
    };
    CelebFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-celeb-form',
            template: __webpack_require__(/*! raw-loader!./celeb-form.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/celeb-form/celeb-form.page.html"),
            styles: [__webpack_require__(/*! ./celeb-form.page.scss */ "./src/app/pages/cust/spec-cat/celeb-form/celeb-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CelebFormPage);
    return CelebFormPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-celeb-form-celeb-form-module-es5.js.map