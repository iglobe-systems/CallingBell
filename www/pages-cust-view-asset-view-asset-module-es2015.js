(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-view-asset-view-asset-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/view-asset/view-asset.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/view-asset/view-asset.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n<ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    \n    <div>\n      <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n    </div>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"assets\">\n      <h3 class=\"text10 fw800 animated fadeInDown margin\" style=\"color:black;\">MY HOME<br>\n      MY PRODUCTS</h3>\n        <div class=\"margin\">\n          <ion-button size=\"small\" color=\"gold\" (click)=\"addAsset()\"><ion-icon name=\"add\" class=\"icon1\"></ion-icon> ADD PRODUCTS </ion-button>\n        </div>\n      </div>\n\n      \n      <ion-card>\n      \t<ion-row>\n      \t\t<ion-col size=\"5\">\n      \t\t\t<div>\n      \t\t\t\t<img src=\"https://images-na.ssl-images-amazon.com/images/I/91Q3a0v8F%2BL._SL1500_.jpg\" class=\"prod-img\">\n      \t\t\t</div>\n      \t\t\t<div class=\"text-center\">\n      \t\t\t<ion-button size=\"small\" class=\"small\">UPDATE</ion-button>\n      \t\t\t<ion-button size=\"small\" class=\"small2\">DELETE</ion-button>\n      \t\t\t</div>\n      \t\t</ion-col>\n      \t\t<ion-col >\n      \t\t\t<ion-row>\n                              <ion-col>\n      \t\t\t\t   <h1>Television</h1>\n                              </ion-col>\n                              <ion-col>\n      \t\t\t\t   <h2>samsung</h2>\n                              </ion-col>\n                        </ion-row>\n      \t\t\t\t<h4>4k uhd led smart tv (55 Inches)</h4>\n      \t\t\t\t<div>\n      \t\t\t\t\t<h5>WARRANTY : 1 year</h5>\n      \t\t\t\t\t<h5>EXPIRES ON : 09 Nov 2016</h5>\n      \t\t\t\t</div>\n      \t\t\t<div>\n                  <ion-button size=\"small\" class=\"small3\">SUPPORT</ion-button>\n                  <ion-button size=\"small\" class=\"small3\">HISTORY</ion-button>\n      \t\t\t\t<ion-text (click)=\"assetInfo()\" color=\"darkblue\">MORE INFO</ion-text>\n      \t\t\t</div>\n      \t\t</ion-col>\n      \t</ion-row>\n      </ion-card>\n\n      <ion-card>\n      \t<ion-row>\n      \t\t<ion-col size=\"5\">\n      \t\t\t<div>\n      \t\t\t\t<img src=\"https://images-na.ssl-images-amazon.com/images/I/71Evcslhh0L._SL1500_.jpg\"  class=\"prod-img\">\n      \t\t\t</div>\n      \t\t\t<div class=\"text-center\">\n      \t\t\t<ion-button size=\"small\" class=\"small\">UPDATE</ion-button>\n      \t\t\t<ion-button size=\"small\" class=\"small2\">DELETE</ion-button>\n      \t\t\t</div>\n      \t\t</ion-col>\n      \t\t<ion-col >\n      \t\t\t<ion-row>\n                              <ion-col>\n      \t\t\t\t   <h1>mobile</h1>\n                              </ion-col>\n                              <ion-col>\n      \t\t\t\t   <h2>one plus</h2>\n                              </ion-col>\n                        </ion-row>\n      \t\t\t\t<h4>OnePlus 7</h4>\n      \t\t\t\t<div>\n      \t\t\t\t\t<h5>WARRANTY : 1 year</h5>\n      \t\t\t\t\t<h5>EXPIRES ON : 09 Apr 2021</h5>\n      \t\t\t\t</div>\n      \t\t\t<div>\n                  <ion-button size=\"small\" class=\"small3\">SUPPORT</ion-button>\n                  <ion-button size=\"small\" class=\"small3\">HISTORY</ion-button>\n      \t\t\t\t<ion-text (click)=\"assetInfo()\" color=\"darkblue\">MORE INFO</ion-text>\n      \t\t\t</div>\n      \t\t</ion-col>\n      \t</ion-row>\n      </ion-card>\n\n\n      <ion-card>\n      \t<ion-row>\n      \t\t<ion-col size=\"5\">\n      \t\t\t<div>\n      \t\t\t\t<img src=\"https://images-na.ssl-images-amazon.com/images/I/718%2BHxaDigL._SL1500_.jpg\"  class=\"prod-img\">\n      \t\t\t</div>\n      \t\t\t<div class=\"text-center\">\n      \t\t\t<ion-button size=\"small\" class=\"small\">UPDATE</ion-button>\n      \t\t\t<ion-button size=\"small\" class=\"small2\">DELETE</ion-button>\n      \t\t\t</div>\n      \t\t</ion-col>\n      \t\t<ion-col >\n      \t\t\t<ion-row>\n                              <ion-col>\n                                 <h1>Airconditioner</h1>\n                              </ion-col>\n                              <ion-col>\n                                 <h2>onida</h2>\n                              </ion-col>\n                        </ion-row>\n      \t\t\t\t<h4>onida 1.5 ton inverter split ac</h4>\n      \t\t\t\t<div>\n                                    <h5>WARRANTY : 1 year</h5>\n                                    <h5>EXPIRES ON : 20 Nov 2019</h5>\n                              </div>\n                        <div>\n                           <ion-button size=\"small\" class=\"small3\">SUPPORT</ion-button>\n                           <ion-button size=\"small\" class=\"small3\">HISTORY</ion-button>\n      \t\t\t\t        <ion-text (click)=\"assetInfo()\" color=\"darkblue\">MORE INFO</ion-text>\n      \t\t\t</div>\n      \t\t</ion-col>\n      \t</ion-row>\n      </ion-card>\n      <ion-card>\n         <ion-row>\n            <ion-col size=\"5\">\n               <div>\n                  <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJmE7PKcnfAU9F6XdsVNZrymVvGxUzuL22D5RvdJ29iGuoapgQ\"  class=\"prod-img\">\n               </div>\n               <div class=\"text-center\">\n               <ion-button size=\"small\" class=\"small\">UPDATE</ion-button>\n               <ion-button size=\"small\" class=\"small2\">DELETE</ion-button>\n               </div>\n            </ion-col>\n            <ion-col >\n               <ion-row>\n                              <ion-col>\n                                 <h1>RO PURIFIER</h1>\n                              </ion-col>\n                              <ion-col>\n                                 <h2>KENT</h2>\n                              </ion-col>\n                        </ion-row>\n                  <h4>KENT SUPER PLUS</h4>\n                  \n                  <div>\n                                    <h5>WARRANTY : 1 year</h5>\n                                    <h5>EXPIRES ON : 05 FEB 2019</h5>\n                              </div>\n                        <div>\n                  <ion-button size=\"small\" class=\"small3\">SUPPORT</ion-button>\n                  <ion-button size=\"small\" class=\"small3\">HISTORY</ion-button>\n                  <ion-text (click)=\"assetInfo()\" color=\"darkblue\">MORE INFO</ion-text>\n               </div>\n            </ion-col>\n         </ion-row>\n      </ion-card>\n       <ion-card>\n       \t<ion-row>\n      \t\t<ion-col size=\"5\">\n      \t\t\t<div>\n      \t\t\t\t<img src=\"https://images-na.ssl-images-amazon.com/images/I/71RudCPH3kL._SY879_.jpg\"  class=\"prod-img\">\n      \t\t\t</div>\n      \t\t\t<div class=\"text-center\">\n      \t\t\t<ion-button size=\"small\" class=\"small\">UPDATE</ion-button>\n      \t\t\t<ion-button size=\"small\" class=\"small2\">DELETE</ion-button>\n      \t\t\t</div>\n      \t\t</ion-col>\n      \t\t<ion-col >\n      \t\t\t<ion-row>\n                              <ion-col>\n                                 <h1>Refrigerator</h1>\n                              </ion-col>\n                              <ion-col>\n                                 <h2>samsung</h2>\n                              </ion-col>\n                        </ion-row>\n      \t\t\t\t<h4>Samsung 810 L Frost Free Side-by-Side Refrigerator</h4>\n      \t\t\t\t\n      \t\t\t\t<div>\n                                    <h5>WARRANTY : 1 year</h5>\n                                    <h5>EXPIRES ON : 20 DEC 2019</h5>\n                              </div>\n               <div>\n                  <ion-button size=\"small\" class=\"small3\">SUPPORT</ion-button>\n                  <ion-button size=\"small\" class=\"small3\">HISTORY</ion-button>\n      \t\t\t\t<ion-text (click)=\"assetInfo()\" color=\"darkblue\">MORE INFO</ion-text>\n      \t\t\t</div>\n      \t\t</ion-col>\n      \t</ion-row>\n      </ion-card>\n      <ion-card>\n         <ion-row>\n            <ion-col size=\"5\">\n               <div>\n                  <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoKVllk-DExSg_jVyAoDOEHFNDKW_k7bdUscRAqYrcnAfL3jB3\"  class=\"prod-img\">\n               </div>\n               <div class=\"text-center\">\n               <ion-button size=\"small\" class=\"small\">UPDATE</ion-button>\n               <ion-button size=\"small\" class=\"small2\">DELETE</ion-button>\n               </div>\n            </ion-col>\n            <ion-col >\n               <ion-row>\n                              <ion-col>\n                                 <h1>Two Wheeler</h1>\n                              </ion-col>\n                              <ion-col>\n                                 <h2>KTM</h2>\n                              </ion-col>\n                        </ion-row>\n                  <h4>KTM 125 DUKE</h4>\n                  \n                  <div>\n                                    <h5>WARRANTY : 5 years</h5>\n                                    <h5>EXPIRES ON : 20 DEC 2020</h5>\n                              </div>\n               <div>\n                  <ion-button size=\"small\" class=\"small3\">SUPPORT</ion-button>\n                  <ion-button size=\"small\" class=\"small3\">HISTORY</ion-button>\n                  <ion-text (click)=\"assetInfo()\" color=\"darkblue\">MORE INFO</ion-text>\n               </div>\n            </ion-col>\n         </ion-row>\n      </ion-card>\n      <ion-card>\n         <ion-row>\n            <ion-col size=\"5\">\n               <div>\n                  <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM2xcHG38u8lrZm870SBuWpeYDmUDfqgOndqpmNHIDBklnw6Qw\"  class=\".prod-img\">\n               </div>\n               <div class=\"text-center\">\n               <ion-button size=\"small\" class=\"small\">UPDATE</ion-button>\n               <ion-button size=\"small\" class=\"small2\">DELETE</ion-button>\n               </div>\n            </ion-col>\n            <ion-col >\n               <ion-row>\n                              <ion-col>\n                                 <h1>FOUR Wheeler</h1>\n                              </ion-col>\n                              <ion-col>\n                                 <h2>TOYOTA</h2>\n                              </ion-col>\n                        </ion-row>\n                  <h4>INNOVA</h4>\n                  \n                  <div>\n                                    <h5>WARRANTY : 5 years</h5>\n                                    <h5>EXPIRES ON : 02 NOV 2020</h5>\n                              </div>\n               <div>\n                  <ion-button size=\"small\" class=\"small3\">SUPPORT</ion-button>\n                  <ion-button size=\"small\" class=\"small3\">HISTORY</ion-button>\n                  <ion-text (click)=\"assetInfo()\" color=\"darkblue\">MORE INFO</ion-text>\n               </div>\n            </ion-col>\n         </ion-row>\n      </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/view-asset/view-asset.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/cust/view-asset/view-asset.module.ts ***!
  \************************************************************/
/*! exports provided: ViewAssetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAssetPageModule", function() { return ViewAssetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_asset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-asset.page */ "./src/app/pages/cust/view-asset/view-asset.page.ts");







const routes = [
    {
        path: '',
        component: _view_asset_page__WEBPACK_IMPORTED_MODULE_6__["ViewAssetPage"]
    }
];
let ViewAssetPageModule = class ViewAssetPageModule {
};
ViewAssetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_view_asset_page__WEBPACK_IMPORTED_MODULE_6__["ViewAssetPage"]]
    })
], ViewAssetPageModule);



/***/ }),

/***/ "./src/app/pages/cust/view-asset/view-asset.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/cust/view-asset/view-asset.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.assets {\n  background: url('bgassets.jpg') no-repeat center center/cover;\n  margin-right: 2%;\n}\n\n.margin {\n  margin-left: 5%;\n}\n\nh1 {\n  text-transform: uppercase;\n  font-size: 13px;\n  color: #ff700a;\n  font-weight: 800;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\nh2 {\n  text-transform: uppercase;\n  font-size: 13px;\n  color: black;\n  font-weight: 800;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\nh4 {\n  text-transform: uppercase;\n  font-size: 12px;\n  color: #ffad00;\n  font-weight: 800;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  overflow-x: hidden;\n  height: 12px;\n}\n\nh5 {\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 800;\n  color: #0e0e27;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.small {\n  font-size: 10px;\n  --border-radius: 0;\n  --background: #0e0e27;\n}\n\n.small2 {\n  font-size: 10px;\n  --border-radius: 0;\n  --background: #ff6a00;\n}\n\n.small3 {\n  font-size: 10px;\n  --border-radius: 0;\n  --background: #676767;\n}\n\n.prod-img {\n  height: 100px;\n  width: auto;\n  max-width: 150px;\n  margin: auto;\n  padding: 10px;\n}\n\nion-text {\n  font-size: 12px;\n  font-weight: 600;\n  float: right;\n  margin-top: 7%;\n}\n\nion-card {\n  margin-top: 2%;\n}\n\n.icon1 {\n  margin-top: -2px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC92aWV3LWFzc2V0L0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0XFx2aWV3LWFzc2V0XFx2aWV3LWFzc2V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC92aWV3LWFzc2V0L3ZpZXctYXNzZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDQyw2REFBQTtFQUVDLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDQyx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBRDs7QURHQTtFQUNDLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUdBLGVBQUE7RUFDQSxrQkFBQTtBQ0ZEOztBREtBO0VBQ0MseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRkQ7O0FES0E7RUFDQyx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNGRDs7QURLQTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDRkQ7O0FES0E7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0ZEOztBRE1BO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNIRDs7QURPQTtFQUNDLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0pEOztBRE9BO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNKRDs7QURPQTtFQUNDLGNBQUE7QUNKRDs7QURPQTtFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7QUNKRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3Qvdmlldy1hc3NldC92aWV3LWFzc2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbG9nb3tcclxuICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmFzc2V0c3tcclxuIGJhY2tncm91bmQ6IHVybChzcmMvYXNzZXRzL2ltZy9iZ2Fzc2V0cy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbiAgLy8gYm94LXNoYWRvdzogIzZiNmI2YjNiIDFweCAxcHggN3B4IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG59XHJcblxyXG4ubWFyZ2lue1xyXG4gIG1hcmdpbi1sZWZ0OjUlO1xyXG59XHJcblxyXG5oMXtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxuXHRjb2xvcjogI2ZmNzAwYTtcclxuXHRmb250LXdlaWdodDogODAwO1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxuXHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbmgye1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGNvbG9yOiBibGFjaztcclxuXHRmb250LXdlaWdodDogODAwO1xyXG5cdC8vIG1hcmdpbi1sZWZ0OiAyMCU7XHJcblx0Ly8gZmxvYXQ6cmlnaHQ7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuaDR7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0Y29sb3I6ICNmZmFkMDA7XHJcblx0Zm9udC13ZWlnaHQ6IDgwMDtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdG92ZXJmbG93LXg6aGlkZGVuO1xyXG5cdGhlaWdodDogMTJweDtcclxufVxyXG5cclxuaDV7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0Zm9udC13ZWlnaHQ6IDgwMDtcclxuXHRjb2xvcjogIzBlMGUyNztcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uc21hbGx7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdC0tYm9yZGVyLXJhZGl1czogMDtcclxuXHQtLWJhY2tncm91bmQ6ICMwZTBlMjc7XHJcbn1cclxuXHJcbi5zbWFsbDJ7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdC0tYm9yZGVyLXJhZGl1czogMDtcclxuXHQtLWJhY2tncm91bmQ6ICNmZjZhMDA7XHJcblx0Ly8gY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbi5zbWFsbDN7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdC0tYm9yZGVyLXJhZGl1czogMDtcclxuXHQtLWJhY2tncm91bmQ6ICM2NzY3Njc7XHJcbn1cclxuXHJcblxyXG4ucHJvZC1pbWd7XHJcblx0aGVpZ2h0OiAxMDBweDtcclxuXHR3aWR0aDphdXRvO1xyXG5cdG1heC13aWR0aDogMTUwcHg7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdHBhZGRpbmc6MTBweDtcclxufVxyXG5cclxuaW9uLXRleHR7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0ZmxvYXQ6cmlnaHQ7XHJcblx0bWFyZ2luLXRvcDogNyU7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG5cdG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4uaWNvbjF7XHJcblx0bWFyZ2luLXRvcDogLTJweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDVweDtcdFx0XHJcbn0iLCIuaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMTIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5hc3NldHMge1xuICBiYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWcvYmdhc3NldHMuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cblxuLm1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuaDEge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmY3MDBhO1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuaDIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmg0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmYWQwMDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuXG5oNSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICMwZTBlMjc7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uc21hbGwge1xuICBmb250LXNpemU6IDEwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgLS1iYWNrZ3JvdW5kOiAjMGUwZTI3O1xufVxuXG4uc21hbGwyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gIC0tYmFja2dyb3VuZDogI2ZmNmEwMDtcbn1cblxuLnNtYWxsMyB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAtLWJhY2tncm91bmQ6ICM2NzY3Njc7XG59XG5cbi5wcm9kLWltZyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDclO1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG4uaWNvbjEge1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/view-asset/view-asset.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/cust/view-asset/view-asset.page.ts ***!
  \**********************************************************/
/*! exports provided: ViewAssetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAssetPage", function() { return ViewAssetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");





let ViewAssetPage = class ViewAssetPage {
    constructor(navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl, authService, loadingCtrl, alertService) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertService = alertService;
    }
    ngOnInit() {
    }
    assetInfo() {
        this.navCtrl.navigateForward("asset-info");
    }
    addAsset() {
        this.navCtrl.navigateForward("add-asset");
    }
};
ViewAssetPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
ViewAssetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-asset',
        template: __webpack_require__(/*! raw-loader!./view-asset.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/view-asset/view-asset.page.html"),
        styles: [__webpack_require__(/*! ./view-asset.page.scss */ "./src/app/pages/cust/view-asset/view-asset.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
], ViewAssetPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-view-asset-view-asset-module-es2015.js.map