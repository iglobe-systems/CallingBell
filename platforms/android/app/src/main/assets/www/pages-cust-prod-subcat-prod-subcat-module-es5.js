(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-prod-subcat-prod-subcat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/prod-subcat/prod-subcat.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/prod-subcat/prod-subcat.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <div>\n      <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n    </div>\n     <ion-buttons slot=\"end\" >\n      <ion-button shape=\"round\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h5 class=\"product-title\">What are you looking for ?</h5>\n  <div>\n    <div *ngFor = \"let subCat of subCategory\" class=\"sc-item\">\n      <div class=\"sc-flex\">\n          <img src=\"{{subCat.img_m}}\" (click)=\"productList(subCat)\" \n          onError=\"this.src='http://apiv1.iglobesystems.com/assets/img/no_img.png'\" class=\"sc-img\">\n          <h5 class=\"sc-name\">{{subCat.name}}</h5>\n      </div>\n    </div>\n  </div>\n\n  <div>\n    <h5 class=\"product-title\">General Results</h5>\n    <div *ngFor = \"let list of subCategory\">\n      <div *ngFor=\"let sclist of list.item_list\">\n          <ion-list>\n              <ion-item>\n                <div class=\"item-style\">\n                  <div class=\"ion-text-center item-img-style\" (click)=\"getProductDesc(sclist)\">\n                      <img src=\"{{sclist.icon}}\" onError=\"this.src='http://apiv1.iglobesystems.com/assets/img/no_img.png'\" class=\"cat-img\"/>\n                  </div>\n                   <div class=\"item-content-style\">\n                      <h5 class=\"cat-name fw600\" (click)=\"getProductDesc(sclist)\">{{sclist.name}}</h5>\n                      <h5 class=\"cat-quantity\" (click)=\"getProductDesc(sclist)\">{{sclist.quantity}}</h5>\n                      <!-- <h5 class=\"cat-brand\" (click)=\"grocerydesc(cat.id)\">{{sclist.brand_name}}</h5> -->\n                      <ion-row class=\"cat-item-footer\">\n                        <ion-col class=\"ion-no-padding\" size=\"9\" (click)=\"getProductDesc(sclist)\">\n                          <h1 class=\"cat-mrp fw600\">&#8377; {{sclist.mrp}}</h1>\n                        </ion-col>\n                        <ion-col class=\"ion-no-padding\">\n                          <ion-buttons class=\"ion-text-center\">\n                            <ion-button size=\"small\" color=\"darkblue\" (click)=\"addToCart(sclist)\" tappable><ion-icon name=\"add-circle\"></ion-icon></ion-button>\n                          </ion-buttons>\n                        </ion-col>\n                      </ion-row>\n                   </div>\n                  </div>\n              </ion-item>\n            </ion-list> \n      </div> \n    </div>\n  </div>\n\n  \n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n      <ion-fab-button color=\"darkblue\" size=\"small\" (click)=\"opencart()\" #cart>\n        <!-- <div class=\"cart-length\">{{ cardItemCount | async }}</div> -->\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  <!-- <h4>Top Brands!</h4>\n  <div *ngFor = \"let brand of brand\" class=\"size1\" (click)=\"prodlist(brand)\">\n    <h5>{{brand.name}}</h5>\n  </div> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/cust/prod-subcat/prod-subcat.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/cust/prod-subcat/prod-subcat.module.ts ***!
  \**************************************************************/
/*! exports provided: ProdSubcatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdSubcatPageModule", function() { return ProdSubcatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prod_subcat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prod-subcat.page */ "./src/app/pages/cust/prod-subcat/prod-subcat.page.ts");







var routes = [
    {
        path: '',
        component: _prod_subcat_page__WEBPACK_IMPORTED_MODULE_6__["ProdSubcatPage"]
    }
];
var ProdSubcatPageModule = /** @class */ (function () {
    function ProdSubcatPageModule() {
    }
    ProdSubcatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_prod_subcat_page__WEBPACK_IMPORTED_MODULE_6__["ProdSubcatPage"]]
        })
    ], ProdSubcatPageModule);
    return ProdSubcatPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cust/prod-subcat/prod-subcat.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/cust/prod-subcat/prod-subcat.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.product-title {\n  font-size: 16px;\n  margin: 10px;\n}\n\n.sc-flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.sc-item {\n  display: inline-block;\n  width: 46%;\n  margin: 2%;\n  text-align: center;\n}\n\n.sc-img {\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\n\n.sc-name {\n  font-size: 14px;\n  text-transform: uppercase;\n  margin: 10px;\n}\n\n.item-style {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n\n.item-content-style {\n  margin-left: 10px;\n  width: 100%;\n}\n\n.item-img-style {\n  width: 80px;\n  height: 80px;\n}\n\n.cat-main {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.cat-header {\n  margin: 2% 5%;\n  text-transform: capitalize;\n}\n\n.cat-img {\n  width: auto;\n  height: auto;\n  max-width: 70px;\n  max-height: 70px;\n}\n\n.cat-divsize {\n  display: inline-block;\n  width: 48%;\n  text-align: center;\n  margin: 1%;\n  padding-bottom: 4%;\n}\n\n.cat-name {\n  margin: 0;\n  font-size: 14px;\n  padding: 2px;\n  text-transform: capitalize;\n}\n\n.cat-quantity {\n  margin: 0;\n  padding: 1px;\n  font-size: 12px;\n}\n\n.cat-brand {\n  margin: 0;\n  font-size: 13px;\n  padding: 1px;\n  text-transform: capitalize;\n}\n\n.cat-mrp {\n  margin: 0;\n  font-size: 18px;\n  padding: 1px;\n  color: #ffad00;\n}\n\n.cat-item-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLXN1YmNhdC9EOlxcUmlhelxcTmV3QVBLXFxOZXdBUEt2MC4xL3NyY1xcYXBwXFxwYWdlc1xcY3VzdFxccHJvZC1zdWJjYXRcXHByb2Qtc3ViY2F0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9wcm9kLXN1YmNhdC9wcm9kLXN1YmNhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDRUo7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7QUNFSjs7QURDQTtFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRUg7O0FEQ0E7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNFSjs7QURDQTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRENBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNFSjs7QURDQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNFSjs7QURDQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3QvcHJvZC1zdWJjYXQvcHJvZC1zdWJjYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1sb2dve1xyXG4gICAgd2lkdGg6MTIwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ucHJvZHVjdC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLnNjLWZsZXh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNjLWl0ZW17XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDYlO1xyXG4gICAgbWFyZ2luOiAyJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2MtaW1ne1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5zYy1uYW1le1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLml0ZW0tc3R5bGV7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLml0ZW0tY29udGVudC1zdHlsZXtcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLml0ZW0taW1nLXN0eWxle1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5jYXQtbWFpbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jYXQtaGVhZGVye1xyXG4gICAgbWFyZ2luOjIlIDUlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5jYXQtaW1ne1xyXG4gICB3aWR0aDogYXV0bztcclxuICAgaGVpZ2h0OiBhdXRvO1xyXG4gICBtYXgtd2lkdGg6IDcwcHg7XHJcbiAgIG1heC1oZWlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbi5jYXQtZGl2c2l6ZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOjQ4JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjoxJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0JTsgXHJcbn1cclxuXHJcbi5jYXQtbmFtZXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6MnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5jYXQtcXVhbnRpdHl7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOjFweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmNhdC1icmFuZHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBhZGRpbmc6MXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5jYXQtbXJwe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBwYWRkaW5nOjFweDtcclxuICAgIGNvbG9yOiNmZmFkMDA7XHJcbn1cclxuXHJcbi5jYXQtaXRlbS1mb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSIsIi5oZWFkZXItbG9nbyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnByb2R1Y3QtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnNjLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2MtaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQ2JTtcbiAgbWFyZ2luOiAyJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2MtaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zYy1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5pdGVtLXN0eWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pdGVtLWNvbnRlbnQtc3R5bGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pdGVtLWltZy1zdHlsZSB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5jYXQtbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNhdC1oZWFkZXIge1xuICBtYXJnaW46IDIlIDUlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmNhdC1pbWcge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDcwcHg7XG4gIG1heC1oZWlnaHQ6IDcwcHg7XG59XG5cbi5jYXQtZGl2c2l6ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQ4JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDElO1xuICBwYWRkaW5nLWJvdHRvbTogNCU7XG59XG5cbi5jYXQtbmFtZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uY2F0LXF1YW50aXR5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNhdC1icmFuZCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uY2F0LW1ycCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxcHg7XG4gIGNvbG9yOiAjZmZhZDAwO1xufVxuXG4uY2F0LWl0ZW0tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/prod-subcat/prod-subcat.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/cust/prod-subcat/prod-subcat.page.ts ***!
  \************************************************************/
/*! exports provided: ProdSubcatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdSubcatPage", function() { return ProdSubcatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _cart_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cart/cart.page */ "./src/app/pages/cust/cart/cart.page.ts");








var ProdSubcatPage = /** @class */ (function () {
    function ProdSubcatPage(route, authService, alertService, loadingCtrl, alertCtrl, navCtrl, router, modalCtrl) {
        this.route = route;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.defImg = "http://kmvn.in/uploads/imagenot.png";
    }
    ProdSubcatPage.prototype.ngOnInit = function () {
        this.getSubCategory();
    };
    ProdSubcatPage.prototype.getSubCategory = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.pro = _this.router.getCurrentNavigation().extras.state.category_id;
                _this.authService.getProds(_this.pro).subscribe(function (result) {
                    console.log(result);
                    _this.subCategory = result['data'].list;
                    console.log(_this.subCategory);
                    _this.brand = result['data'].list;
                });
            }
        });
    };
    ProdSubcatPage.prototype.productList = function (subCat) {
        var navigationExtras = {
            state: {
                product: subCat
            }
        };
        this.router.navigate(['prod-list'], navigationExtras);
    };
    ProdSubcatPage.prototype.addToCart = function (sclist) {
        this.alertService.cartNote('1 item added to cart');
        var qty = {
            "qty": "1"
        };
        this.authService.addToCart(qty, sclist).subscribe(function (result) {
            console.log(result);
        });
    };
    ProdSubcatPage.prototype.opencart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _cart_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"],
                            cssClass: 'cart-modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProdSubcatPage.prototype.getProductDesc = function (cat) {
        var navigationExtras = {
            state: {
                prod: cat
            }
        };
        this.router.navigate(['prod-desc'], navigationExtras);
        console.log(cat);
    };
    ProdSubcatPage.prototype.back = function () {
        this.navCtrl.navigateBack('trending');
    };
    ProdSubcatPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    ProdSubcatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prod-subcat',
            template: __webpack_require__(/*! raw-loader!./prod-subcat.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/prod-subcat/prod-subcat.page.html"),
            styles: [__webpack_require__(/*! ./prod-subcat.page.scss */ "./src/app/pages/cust/prod-subcat/prod-subcat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], ProdSubcatPage);
    return ProdSubcatPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cust-prod-subcat-prod-subcat-module-es5.js.map