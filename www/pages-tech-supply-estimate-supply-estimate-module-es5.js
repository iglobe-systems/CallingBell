(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tech-supply-estimate-supply-estimate-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tech/supply-estimate/supply-estimate.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tech/supply-estimate/supply-estimate.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <div class=\"header-logo-div\">\n      <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n    </div>\n     <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"logout()\" class=\"fw700\">\n        <ion-icon name=\"log-out\"></ion-icon>\n   \t\tLOGOUT\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\" color=\"darkblue\">\n<!--   \n<table border=\"1\" class=\"data-table\">\n  <tr>\n    <td *ngFor=\"let header of headerRow\" text-center><b>{{ header }}</b></td>\n  </tr>\n\n  <tr *ngFor=\"let row of csvData; let i =index\">\n    <td *ngFor=\"let data of row; let j =index\" class=\"data-col\">\n\n    </td>\n  </tr>\n</table> -->\n\n<!-- <ion-grid>\n\t<ion-row>\n\t\t<ion-col><div class=\"fw600 text1\">CHOOSE A CATEGORY</div></ion-col>\n\t\t<ion-col><div class=\"cat fw600 text1 text-center\"><ion-select (ionChange)=\"setProductValues(cCategory)\"[(ngModel)]=\"cCategory\">\n\t\t            <ion-select-option [value]=\"cCategory\" *ngFor=\"let cCategory of category\">{{cCategory.name}}</ion-select-option>\n\t\t    \t</ion-select></div></ion-col>\n\t</ion-row>\n</ion-grid> -->\n\n<ion-grid>\n    <h4>Product Estimate Form</h4>\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"save(myForm)\">\n        <!-- we will place our fields here -->\n\n    <div class=\"form-group\">\n        <ion-row>\n        <ion-col><div class=\"text08 fw600\">CHOOSE A CATEGORY</div></ion-col>\n        <!-- <input type=\"text\" formControlName=\"category\"> -->\n        <!--display error message if name is not valid-->\n        <!-- <small *ngIf=\"!myForm.controls.category.valid\" class=\"text-danger\">\n            Name is required (minimum 5 characters).\n        </small> -->\n        <ion-col><div class=\"cat fw600 text08\">\n                <ion-select (ionChange)=\"setProductValues(cCategory)\" [(ngModel)]=\"cCategory\" formControlName=\"category\" interface=\"action-sheet\">\n                 <ion-select-option [value]=\"cCategory\" *ngFor=\"let cCategory of category\">{{cCategory.name}}</ion-select-option>\n                </ion-select>\n          </div></ion-col>\n        </ion-row>\n    </div>\n\n\n    <!-- Span delete\n    <span *ngIf=\"myForm.controls.products.controls.length > 1\"\n                    (click)=\"removeProduct(i)\"></span> -->\n    <ion-row>\n      <ion-col size=\"2\" class=\"heading one\">Item</ion-col>\n      <ion-col>\n        <ion-row>\n          <ion-col size=\"4\" class=\"heading\">Item Name</ion-col>\n          <ion-col class=\"heading\">Qty</ion-col>\n          <ion-col class=\"heading\">Rate</ion-col>\n          <ion-col class=\"heading\">Total</ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <!-- list of addresses -->\n    <div formArrayName=\"products\">\n        <ion-row *ngFor=\"let product of myForm.controls.products.controls; let i=index\">\n            <!-- address header, show remove button when more than one address available -->\n            <ion-col size=\"2\" class=\"align-self\">\n            <!-- <div> -->\n                <h5>{{i + 1}}<ion-icon (click)=\"removeProduct(i)\" name=\"trash\" color=\"gold\" class=\"delete\"></ion-icon></h5>\n            <!-- </div> -->\n            </ion-col>\n            <!-- Angular assigns array index as group name by default 0, 1, 2, ... -->\n            <ion-col [formGroupName]=\"i\" >\n                <!--street-->\n                <ion-row class=\"align\">\n                  <ion-col size=\"4\">\n                <!-- <div> -->\n                    <!-- <label>Product Name</label> -->\n                    <!-- <input type=\"text\" formControlName=\"productName\"> -->\n                    <div class=\"cat fw600 text08\">\n                       <ion-select *ngIf=\"selectedProduct\" formControlName=\"productName\" interface=\"popover\">\n                              <ion-select-option *ngFor=\"let pProduct of selectedProduct\">{{pProduct.name}}</ion-select-option>\n                      </ion-select>\n                    </div>\n                    <!--display error message if street is not valid-->\n                    <p [hidden]=\"myForm.controls.products.controls[i].controls.productName.valid\">\n                       * Required\n                    </p>\n                <!-- </div> -->\n                  </ion-col>\n                <!--postcode-->\n                  <ion-col >\n                <!-- <div> -->\n                    <!-- <label>quantity</label> -->\n                    <div class=\"cat fw600 text08\">\n                      <ion-input type=\"number\" formControlName=\"quantity\" ></ion-input>\n                    </div>\n                    <p [hidden]=\"myForm.controls.products.controls[i].controls.quantity.valid\">\n                        * Required\n                    </p>\n                <!-- </div> -->\n                  </ion-col>\n                  <ion-col>\n                     <div class=\"fw600 text08\">\n                        <ion-input type=\"number\" formControlName=\"rate\"></ion-input>\n                     </div>\n                  </ion-col>\n                  <ion-col class=\"margin\">\n                     <div class=\"fw600 text08\">\n                      <!-- <ion-label>{{(myForm.controls.products.controls[i].controls.quantity.value * myForm.controls.products.controls[i].controls.rate.value )}}</ion-label> -->\n                      <ion-input type=\"number\"  formControlName=\"total\" readonly>{{(myForm.controls.products.controls[i].controls.quantity.value * myForm.controls.products.controls[i].controls.rate.value )}}</ion-input>\n                     </div>\n                  </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n    </div>\n    <div>\n      <ion-label class=\"add\" (click)=\"addProduct()\"><ion-icon name=\"add-circle\" ></ion-icon>ADD</ion-label>\n      <ion-label class=\"right\">GRAND TOTAL : </ion-label>\n    <!-- <ion-button (click)=\"addProduct()\">Add Product</ion-button> -->\n      </div>\n    </form>\n</ion-grid>\n<div class=\"text-center\">\n        <ion-button color=\"gold\" (click) =\"save(myForm,'Your form is submitted for approval!')\" [disabled]=\"!myForm.valid\">Submit for approval</ion-button>\n      </div>\n\n <!-- <ion-list lines=\"none\">\n    <form [formGroup]=\"estimateForm\">\n      <ion-item *ngFor=\"let control of estimateForm.controls | keyvalue\">\n        <ion-input required type=\"text\" [formControlName]=\"{{control.key}} item1\" placeHolder=\"product\"></ion-input>\n         <ion-input required type=\"text\" [formControlName]=\"{{control.key}} qty1\" placeHolder=\"quantity\"></ion-input>\n        <ion-icon (click)=\"removeControl(control)\" name=\"close-circle\"></ion-icon>\n      </ion-item>\n    </form>\n  </ion-list> -->\n<!-- \n        <ion-button expand=\"full\" color=\"light\" (click)=\"addControl()\">Add Player</ion-button>\n        <ion-button expand=\"full\" color=\"light\" (click)=\"submit()\">Submit for approval</ion-button>\n\n -->\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tech/supply-estimate/supply-estimate.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/tech/supply-estimate/supply-estimate.module.ts ***!
  \**********************************************************************/
/*! exports provided: SupplyEstimatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplyEstimatePageModule", function() { return SupplyEstimatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _supply_estimate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./supply-estimate.page */ "./src/app/pages/tech/supply-estimate/supply-estimate.page.ts");








var routes = [
    {
        path: '',
        component: _supply_estimate_page__WEBPACK_IMPORTED_MODULE_6__["SupplyEstimatePage"]
    }
];
var SupplyEstimatePageModule = /** @class */ (function () {
    function SupplyEstimatePageModule() {
    }
    SupplyEstimatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_supply_estimate_page__WEBPACK_IMPORTED_MODULE_6__["SupplyEstimatePage"]]
        })
    ], SupplyEstimatePageModule);
    return SupplyEstimatePageModule;
}());



/***/ }),

/***/ "./src/app/pages/tech/supply-estimate/supply-estimate.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/tech/supply-estimate/supply-estimate.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.header-logo-div {\n  padding-left: 10px;\n}\n\n.style {\n  background-color: #64AAEB;\n  padding: 2px;\n  text-transform: uppercase;\n  border-radius: 7px;\n}\n\n.cat {\n  border-bottom: 1px solid gold;\n  text-transform: uppercase;\n}\n\n.delete {\n  width: 20px;\n  height: 20px;\n}\n\nh4 {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 15px;\n  font-weight: 600;\n}\n\nh5 {\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: 2%;\n}\n\np {\n  font-size: 10px;\n  color: gold;\n}\n\nion-grid {\n  border: 1px solid gold;\n}\n\n.heading {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n\n.one {\n  padding-top: 10px;\n}\n\n.add {\n  font-weight: 600;\n  color: gold;\n}\n\n.right {\n  font-weight: 500;\n  float: right;\n  font-size: 0.8rem;\n}\n\n.margin {\n  margin: auto;\n}\n\n.align {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.align-self {\n  align-self: center;\n}\n\ndiv.alert-wrapper.sc-ion-alert-md {\n  min-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVjaC9zdXBwbHktZXN0aW1hdGUvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXHRlY2hcXHN1cHBseS1lc3RpbWF0ZVxcc3VwcGx5LWVzdGltYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVjaC9zdXBwbHktZXN0aW1hdGUvc3VwcGx5LWVzdGltYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNDLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNDRDs7QURFQTtFQUVDLDZCQUFBO0VBRUEseUJBQUE7QUNERDs7QURLQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDRkQ7O0FES0E7RUFDQyxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRkQ7O0FES0E7RUFDQyx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNGRDs7QURLQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0FDRkQ7O0FES0E7RUFDQyxzQkFBQTtBQ0ZEOztBREtBO0VBQ0MseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRkQ7O0FES0E7RUFDQyxpQkFBQTtBQ0ZEOztBREtBO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0FDRkQ7O0FES0E7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZEOztBREtBO0VBQ0MsWUFBQTtBQ0ZEOztBREtBO0VBQ0MseUJBQUE7VUFBQSxtQkFBQTtBQ0ZEOztBREtBO0VBQ0Msa0JBQUE7QUNGRDs7QURLQTtFQUNBLGVBQUE7QUNGQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2gvc3VwcGx5LWVzdGltYXRlL3N1cHBseS1lc3RpbWF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWxvZ297XHJcbiAgICB3aWR0aDoxMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5oZWFkZXItbG9nby1kaXZ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxufVxyXG5cclxuLnN0eWxle1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM2NEFBRUI7XHJcblx0cGFkZGluZzoycHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbi5jYXR7XHJcblx0Ly8gYmFja2dyb3VuZC1jb2xvcjogI0YwNzE4RDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgZ29sZDtcclxuXHQvLyBwYWRkaW5nOjJweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdC8vIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuLmRlbGV0ZXtcclxuXHR3aWR0aDoyMHB4O1xyXG5cdGhlaWdodDoyMHB4O1xyXG59XHJcblxyXG5oNHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuaDV7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxucHtcclxuXHRmb250LXNpemU6IDEwcHg7XHJcblx0Y29sb3I6Z29sZDtcclxufVxyXG5cclxuaW9uLWdyaWR7XHJcblx0Ym9yZGVyOjFweCBzb2xpZCBnb2xkO1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtc2l6ZTogMC44cmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5vbmV7XHJcblx0cGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5hZGR7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRjb2xvcjpnb2xkO1xyXG59XHJcblxyXG4ucmlnaHR7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRmbG9hdDpyaWdodDtcclxuXHRmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLm1hcmdpbntcclxuXHRtYXJnaW46YXV0bztcclxufVxyXG5cclxuLmFsaWdue1xyXG5cdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxufVxyXG5cclxuLmFsaWduLXNlbGZ7XHJcblx0YWxpZ24tc2VsZjpjZW50ZXI7XHJcbn1cclxuXHJcbmRpdi5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1tZHtcclxubWluLXdpZHRoOjEwMCU7XHJcblx0fVxyXG5cclxuXHJcbiIsIi5oZWFkZXItbG9nbyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmhlYWRlci1sb2dvLWRpdiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnN0eWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0QUFFQjtcbiAgcGFkZGluZzogMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5jYXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ29sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmRlbGV0ZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbmg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmg1IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbmlvbi1ncmlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ29sZDtcbn1cblxuLmhlYWRpbmcge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm9uZSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uYWRkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbi5yaWdodCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5tYXJnaW4ge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5hbGlnbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbGlnbi1zZWxmIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG5kaXYuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtbWQge1xuICBtaW4td2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tech/supply-estimate/supply-estimate.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tech/supply-estimate/supply-estimate.page.ts ***!
  \********************************************************************/
/*! exports provided: SupplyEstimatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplyEstimatePage", function() { return SupplyEstimatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var SupplyEstimatePage = /** @class */ (function () {
    function SupplyEstimatePage(route, authService, alertService, loadingCtrl, alertCtrl, navCtrl, router, toastCtrl, 
    // private formBuilder: FormBuilder,
    _fb) {
        this.route = route;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this._fb = _fb;
        //   this.estimateForm = formBuilder.group({
        //   item1: ['', Validators.required],
        //   qty1: ['', Validators.required]
        // });
    }
    SupplyEstimatePage.prototype.ngOnInit = function () {
        this.initializeCat();
        this.initializeProd();
        // this.initializeCity();
        this.myForm = this._fb.group({
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            products: this._fb.array([
                this.initProduct(),
            ])
        });
    };
    SupplyEstimatePage.prototype.initProduct = function () {
        // initialize our address
        return this._fb.group({
            productName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            rate: [],
            total: [],
            grandtotal: []
        });
    };
    SupplyEstimatePage.prototype.addProduct = function () {
        // add address to the list
        var control = this.myForm.controls['products'];
        control.push(this.initProduct());
    };
    SupplyEstimatePage.prototype.removeProduct = function (i) {
        // remove address from the list
        var control = this.myForm.controls['products'];
        control.removeAt(i);
    };
    SupplyEstimatePage.prototype.save = function (model, msg) {
        // call API to save customer
        console.log(model.value);
        var toast = this.toastCtrl.create({
            animated: true,
            message: msg,
            duration: 3000,
            position: 'middle',
            mode: 'md',
            cssClass: "toastheight",
            color: 'redtwo',
        }).then(function (toast) {
            toast.present();
        });
        this.navCtrl.navigateBack('tech-home');
    };
    // addControl(){
    //   this.itemCount++;
    //   this.estimateForm.addControl('item' + this.itemCount, new FormControl('', Validators.required));
    // }
    // removeControl(control){
    //   this.estimateForm.removeControl(control.key);
    // }
    // submit(){
    //   console.log(this.estimateForm.value);
    // }
    SupplyEstimatePage.prototype.initializeCat = function () {
        this.category = [
            { id: 1, name: 'Electrical Related' },
            { id: 2, name: 'Plumbing Related' },
            { id: 3, name: 'A/C Related' },
            { id: 4, name: 'Batteries Related' },
            { id: 5, name: 'RO Purification' },
        ];
    };
    SupplyEstimatePage.prototype.initializeProd = function () {
        this.product = [
            { id: 1, name: 'Wire (5 m)', cat_id: 1, cat_name: 'Electrical Related', rate: '30' },
            { id: 2, name: 'Wire (10 m)', cat_id: 1, cat_name: 'Electrical Related', rate: '50' },
            { id: 3, name: 'Wire (20 m)', cat_id: 1, cat_name: 'Electrical Related', rate: '80' },
            { id: 4, name: 'Screws(1 inch)', cat_id: 1, cat_name: 'Electrical Related', rate: '100' },
            { id: 5, name: 'Screws(2 inch)', cat_id: 1, cat_name: 'Electrical Related', rate: '150' },
            { id: 6, name: 'Switches', cat_id: 1, cat_name: 'Electrical Related', rate: '10' },
            { id: 7, name: 'Sockets', cat_id: 1, cat_name: 'Electrical Related', rate: '50' },
            { id: 12, name: 'Labour Cost', cat_id: 1, cat_name: 'Electrical Related', rate: '50' },
            { id: 8, name: 'Pipes', cat_id: 2, cat_name: 'Plumbing Related', rate: '100' },
            { id: 9, name: 'Clamp', cat_id: 2, cat_name: 'Plumbing Related', rate: '20' },
            { id: 10, name: 'Fitters', cat_id: 2, cat_name: 'Plumbing Related', rate: '45' },
            { id: 11, name: 'Sockets', cat_id: 2, cat_name: 'Plumbing Related', rate: '45' },
            { id: 13, name: 'Labour Cost', cat_id: 2, cat_name: 'Plumbing Related', rate: '50' },
        ];
    };
    // initializeCity(){
    // this.cities = [
    //     {id: 1, name: 'City of Alor Gajah 1', state_id: 1, district_id: 1},
    //     {id: 2, name: 'City of Alor Gajah 2', state_id: 1, district_id: 1},
    //     {id: 3, name: 'City of Jasin 1', state_id: 1, district_id: 2},
    //     {id: 4, name: 'City of Muar 1', state_id: 2, district_id: 3},
    //     {id: 5, name: 'City of Muar 2', state_id: 2, district_id: 3},
    //     {id: 6, name: 'City of Segamat 1', state_id: 2, district_id: 4},
    //     {id: 7, name: 'City of Shah Alam 1', state_id: 3, district_id: 5},
    //     {id: 8, name: 'City of Klang 1', state_id: 3, district_id: 6},
    //     {id: 9, name: 'City of Klang 2', state_id: 3, district_id: 6}
    // ];
    // }
    SupplyEstimatePage.prototype.setProductValues = function (cCategory) {
        this.selectedProduct = this.product.filter(function (product) { return product.cat_id == cCategory.id; });
    };
    // setCityValues(sDistrict) {
    //     this.selectedCities = this.cities.filter(city => city.district_id == sDistrict.id);
    // }
    SupplyEstimatePage.prototype.logout = function () {
        this.authService.techlogout();
        this.navCtrl.navigateRoot('/');
    };
    SupplyEstimatePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
    ]; };
    SupplyEstimatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-supply-estimate',
            template: __webpack_require__(/*! raw-loader!./supply-estimate.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tech/supply-estimate/supply-estimate.page.html"),
            styles: [__webpack_require__(/*! ./supply-estimate.page.scss */ "./src/app/pages/tech/supply-estimate/supply-estimate.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], SupplyEstimatePage);
    return SupplyEstimatePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tech-supply-estimate-supply-estimate-module-es5.js.map