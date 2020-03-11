(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-celeb-package-celeb-package-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/celeb-package/celeb-package.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/celeb-package/celeb-package.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n       <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <div>\n      <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n    </div>\n     <ion-buttons slot=\"end\">\n        <ion-button shape=\"round\" (click)=\"back()\">\n          <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides [options]=\"slideOptsOne\">\n    <ion-slide *ngFor=\"let s of sliderOne.slidesItems\"> \n      <img src=\"assets/img/ads/{{s.id}}.jpg\" class=\"banner-img\">\n    </ion-slide>\n  </ion-slides>\n  <!-- <img src=\"assets/img/ads/ck.jpg\" class=\"banner-img\"/> -->\n      <div *ngFor=\"let service of package\" class=\"size\" (click)=\"goToItems(service)\">\n        <div class=\"flex\">\n          <img src=\"{{service.image_url}}\" class=\"img-size\"/>\n          <h5 class=\"content-text\">{{service.name}}</h5>\n        </div>\n      </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/celeb-package/celeb-package.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/celeb-package/celeb-package.module.ts ***!
  \***************************************************************************/
/*! exports provided: CelebPackagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebPackagePageModule", function() { return CelebPackagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _celeb_package_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./celeb-package.page */ "./src/app/pages/cust/spec-cat/celeb-package/celeb-package.page.ts");







const routes = [
    {
        path: '',
        component: _celeb_package_page__WEBPACK_IMPORTED_MODULE_6__["CelebPackagePage"]
    }
];
let CelebPackagePageModule = class CelebPackagePageModule {
};
CelebPackagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_celeb_package_page__WEBPACK_IMPORTED_MODULE_6__["CelebPackagePage"]]
    })
], CelebPackagePageModule);



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/celeb-package/celeb-package.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/celeb-package/celeb-package.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.header-title {\n  font-size: 14px;\n  margin: 5px 5px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.size {\n  display: inline-block;\n  width: 48%;\n  text-align: center;\n  margin: 1%;\n  border-radius: 15%;\n}\n\n.img-size {\n  width: 50px;\n  height: 50px;\n  margin: 10px auto;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.content-text {\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\n.banner-img {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9jZWxlYi1wYWNrYWdlL0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0XFxzcGVjLWNhdFxcY2VsZWItcGFja2FnZVxcY2VsZWItcGFja2FnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvY2VsZWItcGFja2FnZS9jZWxlYi1wYWNrYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDQyxxQkFBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0FEOztBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDREY7O0FESUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvY2VsZWItcGFja2FnZS9jZWxlYi1wYWNrYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbG9nb3tcclxuICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogNXB4IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5zaXple1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDo0OCU7ICAvL2RlZmF1bHQgLSA0NiVcclxuXHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRmN2ZmO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW46IDElO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICAgIC8vIGhlaWdodDoxMjBweDtcclxufVxyXG5cclxuLmltZy1zaXple1xyXG4gICAgd2lkdGg6NTBweDtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuXHJcbi5mbGV4e1xyXG4gXHRkaXNwbGF5OiBmbGV4O1xyXG4gXHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbn1cclxuXHJcbi5jb250ZW50LXRleHR7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5iYW5uZXItaW1ne1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSIsIi5oZWFkZXItbG9nbyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiA1cHggNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zaXplIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDglO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMSU7XG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcbn1cblxuLmltZy1zaXplIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRlbnQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJhbm5lci1pbWcge1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/celeb-package/celeb-package.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/celeb-package/celeb-package.page.ts ***!
  \*************************************************************************/
/*! exports provided: CelebPackagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebPackagePage", function() { return CelebPackagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CelebPackagePage = class CelebPackagePage {
    constructor(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
        };
        this.package = [
            { id: 25, name: "Cakes", image_url: "assets/img/flaticon/package/party.png" },
            { id: 26, name: "Personalised Card", image_url: "assets/img/flaticon/package/birthday-card.png" },
            { id: 27, name: "Return Gifts", image_url: "assets/img/flaticon/package/gift.png" },
            { id: 28, name: "Combo Packs", image_url: "assets/img/flaticon/package/gift-box.png" },
        ];
        this.sliderOne =
            {
                isBeginningSlide: true,
                isEndSlide: false,
                slidesItems: [
                    { id: 200 }, { id: 201 }
                ]
            };
    }
    ngOnInit() {
    }
    goToItems(service) {
        console.log(service);
        let navigationExtras = {
            state: {
                package: service
            }
        };
        this.router.navigate(['celeb-item'], navigationExtras);
    }
    back() {
        this.navCtrl.navigateBack('celeb');
    }
};
CelebPackagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CelebPackagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-celeb-package',
        template: __webpack_require__(/*! raw-loader!./celeb-package.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/celeb-package/celeb-package.page.html"),
        styles: [__webpack_require__(/*! ./celeb-package.page.scss */ "./src/app/pages/cust/spec-cat/celeb-package/celeb-package.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], CelebPackagePage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-celeb-package-celeb-package-module-es2015.js.map