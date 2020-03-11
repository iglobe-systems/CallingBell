(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-celeb-item-celeb-item-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/celeb-item/celeb-item.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/celeb-item/celeb-item.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n       <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <div>\n      <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n    </div>\n     <ion-buttons slot=\"end\">\n        <ion-button shape=\"round\" (click)=\"back()\">\n          <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"service.name === 'Cakes'\">\n\n    <ion-segment [(ngModel)]=\"segment\" scrollable color=\"darkblue\">\n      <ion-segment-button value=\"Whole Cakes\">\n        Whole cakes\n      </ion-segment-button>\n      <ion-segment-button value=\"Theme Cakes\">\n        Theme cakes\n      </ion-segment-button>\n      <ion-segment-button value=\"Birthday Cakes\">\n        Birthday cakes\n      </ion-segment-button>\n      <ion-segment-button value=\"Wedding Cakes\">\n        Wedding cakes\n      </ion-segment-button>\n      <ion-segment-button value=\"Photo Cakes\">\n        Photo cakes\n      </ion-segment-button>\n    </ion-segment>\n  \n    <div [ngSwitch]=\"segment\">\n      <div *ngSwitchCase=\"'Whole Cakes'\">\n        <div *ngFor=\"let cake of wholeCakes\" class=\"card-style\">\n          <ion-card class=\"content-style\">\n            <img src=\"{{cake.image_url}}\">\n            <ion-card-header class=\"content-header\">\n              <ion-card-title class=\"content-title\">{{cake.name}}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content class=\"content-desc\">\n             {{cake.desc}}\n            </ion-card-content>\n            <ion-footer>\n              <ion-row>\n                <ion-col>\n                  <div class=\"content-price\">&#8377; {{cake.price}}</div>\n                </ion-col>\n                <ion-col>\n                  <ion-button fill=\"outline\" size=\"small\" color=\"darkblue\">Add To Cart</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-footer>\n          </ion-card>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'Theme Cakes'\">\n        <div *ngFor=\"let cake of themeCakes\" class=\"card-style\">\n          <ion-card class=\"content-style\">\n            <img src=\"{{cake.image_url}}\">\n            <ion-card-header class=\"content-header\">\n              <ion-card-title class=\"content-title\">{{cake.name}}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content class=\"content-desc\">\n             {{cake.desc}}\n            </ion-card-content>\n            <ion-footer>\n              <ion-row>\n                <ion-col>\n                  <div class=\"content-price\">&#8377; {{cake.price}}</div>\n                </ion-col>\n                <ion-col>\n                  <ion-button fill=\"outline\" size=\"small\" color=\"darkblue\">Add To Cart</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-footer>\n          </ion-card>\n        </div>\n      </div>\n    \n      <div *ngSwitchCase=\"'Birthday Cakes'\">\n        <div *ngFor=\"let cake of birthdayCakes\" class=\"card-style\">\n          <ion-card class=\"content-style\">\n            <img src=\"{{cake.image_url}}\">\n            <ion-card-header class=\"content-header\">\n              <ion-card-title class=\"content-title\">{{cake.name}}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content class=\"content-desc\">\n             {{cake.desc}}\n            </ion-card-content>\n            <ion-footer>\n              <ion-row>\n                <ion-col>\n                  <div class=\"content-price\">&#8377; {{cake.price}}</div>\n                </ion-col>\n                <ion-col>\n                  <ion-button fill=\"outline\" size=\"small\" color=\"darkblue\">Add To Cart</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-footer>\n          </ion-card>\n        </div>\n      </div>\n  \n      <div *ngSwitchCase=\"'Wedding Cakes'\">\n        <div *ngFor=\"let cake of weddingCakes\" class=\"card-style\">\n          <ion-card class=\"content-style\">\n            <img src=\"{{cake.image_url}}\">\n            <ion-card-header class=\"content-header\">\n              <ion-card-title class=\"content-title\">{{cake.name}}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content class=\"content-desc\">\n             {{cake.desc}}\n            </ion-card-content>\n            <ion-footer>\n              <ion-row>\n                <ion-col>\n                  <div class=\"content-price\">&#8377; {{cake.price}}</div>\n                </ion-col>\n                <ion-col>\n                  <ion-button fill=\"outline\" size=\"small\" color=\"darkblue\">Add To Cart</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-footer>\n          </ion-card>\n        </div>\n      </div>\n  \n      <div *ngSwitchCase=\"'Photo Cakes'\">\n        <div *ngFor=\"let cake of photoCakes\" class=\"card-style\">\n          <ion-card class=\"content-style\">\n            <img src=\"{{cake.image_url}}\">\n            <ion-card-header class=\"content-header\">\n              <ion-card-title class=\"content-title\">{{cake.name}}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content class=\"content-desc\">\n             {{cake.desc}}\n            </ion-card-content>\n            <ion-footer>\n              <ion-row>\n                <ion-col>\n                  <div class=\"content-price\">&#8377; {{cake.price}}</div>\n                </ion-col>\n                <ion-col>\n                  <ion-button fill=\"outline\" size=\"small\" color=\"darkblue\">Add To Cart</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-footer>\n          </ion-card>\n        </div>\n      </div>\n  \n    </div>\n\n  </div>\n\n  <div *ngIf=\"service.name === 'Personalised Card'\">\n\n    <ion-segment [(ngModel)]=\"segment2\" scrollable color=\"darkblue\">\n      <ion-segment-button value=\"E card\">\n        E card\n      </ion-segment-button>\n      <ion-segment-button value=\"Physical card\">\n        Physical card\n      </ion-segment-button>\n    </ion-segment>\n\n    <div [ngSwitch]=\"segment2\"> \n      <div *ngSwitchCase=\"'E card'\">\n        <div *ngFor=\"let card of eCard\">\n          <ion-card class=\"card-content\" (click)=\"goToCardForm(card)\">\n            <img src=\"{{card.image_url}}\" class=\"card-img\"/>\n            <ion-icon name=\"arrow-forward\" color=\"darkblue\" class=\"card-icon\" mode=\"ios\"></ion-icon>\n          </ion-card>\n        </div>\n      </div>\n      <div *ngSwitchCase=\"'Physical card'\">\n        <div *ngFor=\"let card of physicalCard\" class=\"card-style\">\n          <ion-card>\n            <img src=\"{{card.image_url}}\"/>\n            <ion-card-header class=\"content-header\">\n              <ion-card-title class=\"card-title\">{{card.name}}</ion-card-title>\n            </ion-card-header>\n            <ion-footer>\n              <ion-row>\n                <ion-col>\n                  <div class=\"content-price\">&#8377; {{card.price}}</div>\n                </ion-col>\n                <ion-col>\n                  <ion-button fill=\"outline\" size=\"small\" color=\"darkblue\">Add To Cart</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-footer>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  \n  <div *ngIf=\"service.name === 'Return Gifts'\">\n    <h5 class=\"gift-header\">Theme based return gifts for every occasion</h5>\n    <ion-card *ngFor=\"let gift of returnGifts\">\n      <ion-row>\n        <ion-col>\n          <img src=\"{{gift.image_url}}\"/>\n        </ion-col>\n        <ion-col>\n          <h5 class=\"gift-name\">{{gift.name}}</h5>\n          <h5 class=\"gift-desc-title\">It contains</h5>\n          <ul *ngFor=\"let item of gift.desc\" class=\"gift-ul\">\n            <li class=\"gift-li\">{{item}}</li>\n          </ul>\n          <ion-row>\n            <ion-col>\n              <h5 class=\"gift-price\">Rs.{{gift.price}}</h5>\n            </ion-col>\n            <ion-col>\n              <ion-button color=\"gold\" size=\"small\">Add to Cart</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/celeb-item/celeb-item.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/celeb-item/celeb-item.module.ts ***!
  \*********************************************************************/
/*! exports provided: CelebItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebItemPageModule", function() { return CelebItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _celeb_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./celeb-item.page */ "./src/app/pages/cust/spec-cat/celeb-item/celeb-item.page.ts");







const routes = [
    {
        path: '',
        component: _celeb_item_page__WEBPACK_IMPORTED_MODULE_6__["CelebItemPage"]
    }
];
let CelebItemPageModule = class CelebItemPageModule {
};
CelebItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_celeb_item_page__WEBPACK_IMPORTED_MODULE_6__["CelebItemPage"]]
    })
], CelebItemPageModule);



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/celeb-item/celeb-item.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/celeb-item/celeb-item.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.card-style {\n  width: 50%;\n  display: inline-block;\n}\n\n.content-style {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.content-desc {\n  overflow-y: scroll;\n  height: 70px;\n  font-size: 12px;\n  padding: 5px;\n  font-style: italic;\n}\n\n.content-header {\n  font-size: 14px;\n  padding: 5px;\n  text-transform: uppercase;\n}\n\n.content-title {\n  font-size: 14px;\n}\n\n.content-price {\n  font-size: 16px;\n  color: #0e0e27;\n  font-weight: 600;\n}\n\n.card-img {\n  max-height: 200px;\n  max-width: 100%;\n}\n\n.card-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.card-icon {\n  font-size: 30px;\n}\n\n.gift-header {\n  font-size: 14px;\n  text-transform: uppercase;\n  margin: 10px;\n  text-align: center;\n}\n\n.gift-name {\n  font-size: 14px;\n  color: black;\n  text-transform: uppercase;\n  margin: 5px;\n  font-weight: 700;\n}\n\n.gift-desc-title {\n  font-size: 12px;\n  color: black;\n  text-transform: capitalize;\n  margin: 5px;\n}\n\n.gift-ul {\n  margin: 5px 0px 0px 0px;\n  font-size: 10px;\n  color: #0e0e27;\n  text-transform: capitalize;\n}\n\n.gift-price {\n  font-size: 14px;\n  color: #0e0e27;\n  margin: 0;\n  font-weight: 700;\n  margin-top: 10px;\n}\n\n.card-title {\n  font-size: 14px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9jZWxlYi1pdGVtL0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0XFxzcGVjLWNhdFxcY2VsZWItaXRlbVxcY2VsZWItaXRlbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvY2VsZWItaXRlbS9jZWxlYi1pdGVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FER0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNHLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNBSDs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQztFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNBTDs7QURHQztFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0FMOztBREdDO0VBQ0csb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKOztBREdDO0VBQ0ksZUFBQTtBQ0FMOztBREdDO0VBQ0csZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0M7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQUw7O0FER0M7RUFDRyxlQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdDO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FDQUw7O0FER0M7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQUw7O0FER0M7RUFDRyxlQUFBO0VBQ0Esa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvY2VsZWItaXRlbS9jZWxlYi1pdGVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbG9nb3tcclxuICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmNhcmQtc3R5bGV7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLy8gbWF4LWhlaWdodDogO1xyXG59XHJcblxyXG4uY29udGVudC1zdHlsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbn1cclxuXHJcbi5jb250ZW50LWRlc2N7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5jb250ZW50LWhlYWRlcntcclxuICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICBwYWRkaW5nOiA1cHg7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jb250ZW50LXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gfVxyXG5cclxuIC5jb250ZW50LXByaWNle1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICBjb2xvcjogIzBlMGUyNztcclxuICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gfVxyXG5cclxuIC5jYXJkLWltZ3tcclxuICAgICBtYXgtaGVpZ2h0OjIwMHB4O1xyXG4gICAgIG1heC13aWR0aDogMTAwJTtcclxuIH1cclxuXHJcbiAuY2FyZC1jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiB9XHJcblxyXG4gLmNhcmQtaWNvbntcclxuICAgICBmb250LXNpemU6IDMwcHg7XHJcbiB9XHJcblxyXG4gLmdpZnQtaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuXHJcbiAuZ2lmdC1uYW1le1xyXG4gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICBtYXJnaW46IDVweDtcclxuICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gfVxyXG5cclxuIC5naWZ0LWRlc2MtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gfVxyXG5cclxuIC5naWZ0LXVse1xyXG4gICAgIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xyXG4gICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICBjb2xvcjojMGUwZTI3O1xyXG4gICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gfVxyXG5cclxuIC5naWZ0LXByaWNle1xyXG4gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICBjb2xvcjogIzBlMGUyNztcclxuICAgICBtYXJnaW46IDA7XHJcbiAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gfVxyXG5cclxuIC5jYXJkLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG5cclxuLy8gIC5naWZ0LWxpe1xyXG4vLyAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4vLyAgfSIsIi5oZWFkZXItbG9nbyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNhcmQtc3R5bGUge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jb250ZW50LXN0eWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRlbnQtZGVzYyB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uY29udGVudC1oZWFkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNvbnRlbnQtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb250ZW50LXByaWNlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzBlMGUyNztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNhcmQtaW1nIHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5naWZ0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5naWZ0LW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5naWZ0LWRlc2MtdGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uZ2lmdC11bCB7XG4gIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjMGUwZTI3O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmdpZnQtcHJpY2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMGUwZTI3O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/celeb-item/celeb-item.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/celeb-item/celeb-item.page.ts ***!
  \*******************************************************************/
/*! exports provided: CelebItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebItemPage", function() { return CelebItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CelebItemPage = class CelebItemPage {
    constructor(navCtrl, router, route) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.route = route;
        this.wholeCakes = [
            { id: 25, name: "Butter Scotch", price: "630", image_url: "https://www.cksbakery.com/images/cakes/whole/new/Butterscotch.JPG", desc: "Discover the genius of the Parkinsons of Donaster, who invented butterscotch that takes this spongy, creamy cake loaded with layers of freshly whipped cream to a different level" },
            { id: 25, name: "Strawberry", price: "462", image_url: "https://www.cksbakery.com/images/cakes/whole/new/Strawberry.JPG", desc: "The tingly, lingering flavour of strawberry flavoured cream slathers this soft and delicious gastronomic delight" },
            { id: 25, name: "Black currant", price: "515", image_url: "https://www.cksbakery.com/images/cakes/whole/new/Black-currant.JPG", desc: "It's quite neat, it's a treat, and it's truly very bittersweet" },
            { id: 25, name: "Black Forest", price: "572", image_url: "https://www.cksbakery.com/images/cakes/whole/new/Black-forest-2.JPG", desc: "On some occasions you just can’t deny yourself the indulgence of a chocolate sponge that’s battered with fresh cream, candied cherries and showered with a torrent of chocolate flakes" },
            { id: 25, name: "Choco Truffle", price: "630", image_url: "https://www.cksbakery.com/images/cakes/whole/new/Choco-truffle.JPG", desc: "You can't help but lick your fingers with this luxurious, delicious, gooey masterpiece that’s crafted from rich chocolate truffle cream" },
            { id: 25, name: "White Forest", price: "572", image_url: "https://www.cksbakery.com/images/cakes/whole/new/White-forest.JPG", desc: "For a heart that is pure, it’s always white for sure with this classic that’s rich and creamy and dressed in a coat of white chocolate flake" },
            { id: 25, name: "Red Velvet", price: "630", image_url: "https://www.cksbakery.com/images/cakes/whole/new/RedVelvet.JPG", desc: "A vibrant red that’s a feast for the eyes and an eggless wonder that does wonders to the palate" },
            { id: 25, name: "Chocolate & Nuts", price: "693", image_url: "https://www.cksbakery.com/images/cakes/whole/new/Choco-nuts.JPG", desc: "Its twist comes with a generous topping of chocolate truffle cream and a liberal sprinkling of nuts" },
        ];
        this.themeCakes = [
            { id: 25, name: "Bear Adventure", price: "600", image_url: "https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-0.jpg", desc: "3 little bears climb a rose wall made of frosted cream, sweet almond icing and fresh cream." },
            { id: 26, name: "Minion Rock", price: "700", image_url: "https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-1.jpg", desc: "It’s the bright yellow, sunshine fellow cake! Soft cream vanilla cake is covered with almond icing for everyone to say Baboi!" },
            { id: 27, name: "Jungle Book", price: "750", image_url: "https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-2.jpg", desc: "Green grass and animals frolic on this dreamy cake of fresh cream vanilla with Pista icing." },
            { id: 28, name: "Bear Dare", price: "600", image_url: "https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-3.jpg", desc: "Bear are out on a dare! Playing on blue icing and enjoying a bite of the softest, smoothest cake filled with fresh cream." },
            { id: 29, name: "Cream Bears", price: "750", image_url: "https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-4.jpg", desc: "Little bears gambol on a sweet, creamy land of soft white icing. What can be more enchanting?" },
            { id: 30, name: "Pengu Love", price: "700", image_url: "https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-5.jpg", desc: "An icy world of almonds and cake. A place where cute penguins gather to make your life merry!" },
            { id: 31, name: "Go for Goal", price: "600", image_url: "https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-6.jpg", desc: "You just netted a sumptuous all pista delight that will turn all your friends into fans of your taste!" },
            { id: 32, name: "Honky Tonk", price: "500", image_url: "https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-7.jpg", desc: "A journey of a cake with peppermint sun shining bright and a delicious car to take you wherever you want!" },
            { id: 33, name: "Bear Hug", price: "750", image_url: "https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-8.jpg", desc: "Pink candy hearts raise this fluffly, creamy cake to dreamy heights! You’ll simply love it." },
        ];
        this.birthdayCakes = [
            { id: 25, name: "Elifantasy", price: "600", image_url: "https://www.cksbakery.com/images/cakes/birthdaycakes/Birthday-cake-0.jpg", desc: "3 little bears climb a rose wall made of frosted cream, sweet almond icing and fresh cream." },
            { id: 26, name: "Chocrazy", price: "700", image_url: "https://www.cksbakery.com/images/cakes/birthdaycakes/Birthday-cake-2.jpg", desc: "It’s the bright yellow, sunshine fellow cake! Soft cream vanilla cake is covered with almond icing for everyone to say Baboi!" },
            { id: 27, name: "All in Choc", price: "750", image_url: "https://www.cksbakery.com/images/cakes/birthdaycakes/Birthday-cake-9.jpg", desc: "Green grass and animals frolic on this dreamy cake of fresh cream vanilla with Pista icing." },
            { id: 28, name: "Box of Delight", price: "600", image_url: "https://www.cksbakery.com/images/cakes/birthdaycakes/Birthday-cake-14.jpg", desc: "Bear are out on a dare! Playing on blue icing and enjoying a bite of the softest, smoothest cake filled with fresh cream." },
            { id: 29, name: "Cream Bears", price: "750", image_url: "https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-4.jpg", desc: "Little bears gambol on a sweet, creamy land of soft white icing. What can be more enchanting?" },
            { id: 30, name: "Pengu Love", price: "700", image_url: "https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-5.jpg", desc: "An icy world of almonds and cake. A place where cute penguins gather to make your life merry!" },
            { id: 31, name: "Go for Goal", price: "600", image_url: "https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-6.jpg", desc: "You just netted a sumptuous all pista delight that will turn all your friends into fans of your taste!" },
            { id: 32, name: "Honky Tonk", price: "500", image_url: "https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-7.jpg", desc: "A journey of a cake with peppermint sun shining bright and a delicious car to take you wherever you want!" },
            { id: 33, name: "Bear Hug", price: "750", image_url: "https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-8.jpg", desc: "Pink candy hearts raise this fluffly, creamy cake to dreamy heights! You’ll simply love it." },
        ];
        this.weddingCakes = [
            { id: 25, name: "Happily troth", price: "600", image_url: "https://www.cksbakery.com/images/cakes/weddingcakes/Wedding-Cake-0.jpg", desc: "A vanilla butter cake filled with whipped cream and frosted with white and lavender chiffon frosting." },
            { id: 26, name: "Purple Daze", price: "700", image_url: "https://www.cksbakery.com/images/cakes/weddingcakes/Wedding-Cake-1.jpg", desc: "For all the moony eyed, a cake of royal passion! With blackberries. Swoon into it." },
            { id: 27, name: "Tower of love", price: "750", image_url: "https://www.cksbakery.com/images/cakes/weddingcakes/Wedding-Cake-7.jpg", desc: "A pure fresh cream tower in gentle meringue. An ode to your forever love." },
            { id: 28, name: "Love in red and White", price: "600", image_url: "https://www.cksbakery.com/images/cakes/weddingcakes/Wedding-Cake-3.jpg", desc: "A rich chocolate cake with crafted hearts or ornamenting it." },
            { id: 29, name: "Ringed", price: "750", image_url: "https://www.cksbakery.com/images/cakes/weddingcakes/Wedding-Cake-6.jpg", desc: "A swirl of vanilla and chocolate romance in this dense cake. It’s a love story by itself." },
            { id: 30, name: "Heart of Hearts", price: "700", image_url: "https://www.cksbakery.com/images/cakes/weddingcakes/Wedding-Cake-2.jpg", desc: "A cake that stands for true love all the way. A white chocolate cake is covered with silky almond fondant and covered with Candy hearts. A memory you’ll cherish forever." },
        ];
        this.photoCakes = [
            { id: 25, name: "Center Stage", price: "600", image_url: "https://www.cksbakery.com/images/cakes/photo/photo_cake_7.jpg", desc: "The apple of everyone’s eyes, your pretty smile brings alive this cake. Be the centre of attraction along with this tasty delight." },
            { id: 26, name: "Thalapathi Special", price: "700", image_url: "https://www.cksbakery.com/images/cakes/photo/photo_cake_1.jpg", desc: "Superstar of a cake meant for the action hero. In chocolate and cream, enjoy a cake dream!" },
        ];
        this.physicalCard = [
            { id: 25, name: "red-wedding", price: "99", image_url: "assets/img/card/theme2.jpg" },
            { id: 25, name: "colourful-bday", price: "99", image_url: "assets/img/card/theme1.jpg" },
            { id: 25, name: "basic-bday", price: "99", image_url: "assets/img/card/theme3.jpg" },
        ];
        this.eCard = [
            { id: 25, name: "colourful-bday", price: "10", image_url: "assets/img/card/theme1.jpg" },
            { id: 25, name: "red-wedding", price: "10", image_url: "assets/img/card/theme2.jpg" },
            { id: 25, name: "basic-bday", price: "10", image_url: "assets/img/card/theme3.jpg" },
        ];
        this.returnGifts = [
            { id: 25, name: "the grow kit", image_url: "assets/img/gifts/2p.jpg", price: "200", desc: ["seeds packet : 1", "Cocopeat disc : 1", "Plastic pots : 2", "Coir pot : 1", "Packing bag : 1", "Name & description tag : 1"]
            },
            { id: 25, name: "the spa hamper", image_url: "assets/img/gifts/6p.jpg", price: "200", desc: ["Pumice stone : 1", "Scented soap : 1", "Towel : 1", "Loofah : 1", "Packing bag : 1", "Name & description tag : 1"]
            },
            { id: 25, name: "the coffee hamper", image_url: "assets/img/gifts/4p.jpg", price: "200", desc: ["Coffee mug steel : 1", "Coaster : 1", "Packing bag : 1", "Name & description tag : 1"]
            },
            { id: 25, name: "the gardener", image_url: "assets/img/gifts/2p.jpg", price: "350", desc: ["Plastic pots : 2", "Seed packets : 2", "Cocopeat disc : 2", "Garden gloves : 1", "Garden tool set : 1", "Packing tray : 1", "Name & description tag : 1"]
            },
            { id: 25, name: "THE PAMPERED", image_url: "assets/img/gifts/6p.jpg", price: "350", desc: ["Pumice stone : 1", "Scented soap : 1", "Towel : 1", "Loofah : 1", "Scented candles : 2", "Packing bag : 1", "Fragrance sachet : 1", "Name & description tag : 1"]
            },
            { id: 25, name: "THE MADRASI", image_url: "assets/img/gifts/3p.jpg", price: "350", desc: ["Dabara coffee glass brass : 1 set", "Pickle jars : 2", "filter coffee powder : 50 gms", "Steel filter : 1", "Packing tray : 1", "Name & description tag : 1"]
            }
        ];
        this.segment = "Whole Cakes";
        this.segment2 = "E card";
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.service = this.router.getCurrentNavigation().extras.state.package;
                console.log(this.service);
            }
        });
    }
    goToCardForm(card) {
        let navigationExtras = {
            state: {
                package: card
            }
        };
        this.router.navigate(['celeb-form'], navigationExtras);
    }
    back() {
        this.navCtrl.navigateBack('celeb-package');
    }
};
CelebItemPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
CelebItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-celeb-item',
        template: __webpack_require__(/*! raw-loader!./celeb-item.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/celeb-item/celeb-item.page.html"),
        styles: [__webpack_require__(/*! ./celeb-item.page.scss */ "./src/app/pages/cust/spec-cat/celeb-item/celeb-item.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], CelebItemPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-celeb-item-celeb-item-module-es2015.js.map