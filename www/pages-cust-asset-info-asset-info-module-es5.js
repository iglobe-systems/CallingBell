(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-asset-info-asset-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/asset-info/asset-info.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/asset-info/asset-info.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n<ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n\t<div>\n\t\t<img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n\t  </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t<div class=\"img\">\n\t\t\t\t<img src=\"https://images-na.ssl-images-amazon.com/images/I/91Q3a0v8F%2BL._SL1500_.jpg\">\n\t\t\t</div>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t<div class=\"flex\">\n\t\t\t\t<h5>TELEVISION</h5>\n\t\t\t\t<h4>SAMSUNG</h4>\n\t\t\t</div>\n\t\t\t<h4>4k uhd led smart tv (55 Inches)</h4>\n\t\t\t<h2 class=\"darkblue\">warranty : 1 year</h2>\n\t\t\t<h2 class=\"darkblue\">expires on : 09 Nov 2016 </h2>\n\t\t</ion-col>\n\t</ion-row>\n\t<div class=\"center\">\n\t\t<h5>PRODUCT PRICE : &#8377;52,999</h5>\n\t\t<h1>YOUR WARRANTY HAS EXPIRED!</h1>\n\t</div>\n\t<div class=\"center\">\n\t\t<ion-button size=\"small\" color=\"dark\">SUPPORT</ion-button>\n\t\t<ion-button size=\"small\" color=\"gold\">BUY</ion-button>\n\t\t<ion-button size=\"small\" color=\"darkblue\">SELL</ion-button>\n\t</div>\n\t<h5>INSURANCE</h5>\n\t<div>\n\t\t<ion-card class=\"bg-color\">\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<p class=\"header\">COVER TELEVISION FROM A BREAKDOWN WITH <br>CALLING BELL INSURANCE</p>\n\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t<ion-button color=\"gold\" size=\"small\">GET INSURED</ion-button>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t<img src=\"assets/img/90.png\" onError=\"this.src='http://apiv1.iglobesystems.com/assets/img/no_img.png'\" class=\"img3\">\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-card>\n\t</div>\n\n\t<h5>Images</h5>\n\t<ion-slides [options]=\"sliderOpts\">\n\t\t<ion-slide *ngFor=\"let img of ['warranty image', 'invoice image', 'product image']\">\n\t\t\t<img src=\"assets/img/{{ img }}.jpg\" tappable (click)=\"openPreview(img)\">\n\t\t\t<h2 class=\"darkblue\">{{img}}</h2>\n\t\t</ion-slide>\n\t</ion-slides>\n\t<br>\n\t<h5>Service History</h5>\n\t<div>\n\t<ion-card class=\"bg-color\">\n\t\t<h3>Model : 4k uhd led smart tv (55 Inches)</h3>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<h2>Bill No : 12212889999</h2>\n\t\t\t\t<h2>Problem : Adapter failure</h2>\n\t\t\t\t<h2>Request raised on : 12/10/19</h2>\n\t\t\t\t<h2>Completed on : 13/10/19</h2>\n\t\t\t\t<h3>----------------------</h3>\n\t\t\t\t<h2>Parts replaced : Adapter</h2>\n\t\t\t\t<h2>Model : samsung623621</h2>\n\t\t\t\t<h2>Brand : Samsung </h2>\n\t\t\t\t<h2>Warranty : 1 year</h2>\n\t\t\t\t<h2>Price : rs 1000</h2>\n\t\t\t\t<hr>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"4\">\n\t\t\t\t<img src=\"assets/img/invoice image.jpg\" tappable (click)=\"openPreview('invoice image')\" class=\"img2\">\n\t\t\t\t<h4>Total service cost : Rs 1500</h4>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-card>\n\n\t<ion-card class=\"bg-color\">\n\t\t\t<h3>Model : 4k uhd led smart tv (55 Inches)</h3>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<h2>Bill No : 32212845666</h2>\n\t\t\t\t\t<h2>Problem : motherboard issue</h2>\n\t\t\t\t\t<h2>Request raised on : 24/10/20</h2>\n\t\t\t\t\t<h2>Completed on : 25/10/20</h2>\n\t\t\t\t\t<h3>----------------------</h3>\n\t\t\t\t\t<h2>Parts replaced : IC</h2>\n\t\t\t\t\t<h2>Model : IC93219473921</h2>\n\t\t\t\t\t<h2>Brand : Samsung </h2>\n\t\t\t\t\t<h2>Warranty : 1 year</h2>\n\t\t\t\t\t<h2>Price : rs 2000</h2>\n\t\t\t\t\t<hr>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t<img src=\"https://cdn.arstechnica.net/wp-content/uploads/2012/10/samsungtv.jpg\" class=\"img2\">\n\t\t\t\t\t<h4>Total service cost : Rs 2400</h4>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-card>\n\n\t\t<ion-card class=\"bg-color\">\n\t\t\t\t<h3>Model : 4k uhd led smart tv (55 Inches)</h3>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<h2>Bill No : 12212889999</h2>\n\t\t\t\t\t\t<h2>Problem : Display Problem</h2>\n\t\t\t\t\t\t<h2>Request raised on : 12/1/21</h2>\n\t\t\t\t\t\t<h2>Completed on : 13/1/21</h2>\n\t\t\t\t\t\t<h3>----------------------</h3>\n\t\t\t\t\t\t<h2>Parts replaced : Display</h2>\n\t\t\t\t\t\t<h2>Model : samsung623621</h2>\n\t\t\t\t\t\t<h2>Brand : Samsung </h2>\n\t\t\t\t\t\t<h2>Warranty : 1 year</h2>\n\t\t\t\t\t\t<h2>Price : rs 6000</h2>\n\t\t\t\t\t\t<hr>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<img src=\"https://image3.mouthshut.com/images/ImagesR/2016/11/Samsung-32J5100-LED-925748531-6055364-1.jpg\" class=\"img2\">\n\t\t\t\t\t\t<h4>Total service cost : Rs 7000</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-card>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/asset-info/asset-info.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/cust/asset-info/asset-info.module.ts ***!
  \************************************************************/
/*! exports provided: AssetInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetInfoPageModule", function() { return AssetInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _asset_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset-info.page */ "./src/app/pages/cust/asset-info/asset-info.page.ts");







var routes = [
    {
        path: '',
        component: _asset_info_page__WEBPACK_IMPORTED_MODULE_6__["AssetInfoPage"]
    }
];
var AssetInfoPageModule = /** @class */ (function () {
    function AssetInfoPageModule() {
    }
    AssetInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_asset_info_page__WEBPACK_IMPORTED_MODULE_6__["AssetInfoPage"]]
        })
    ], AssetInfoPageModule);
    return AssetInfoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cust/asset-info/asset-info.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/cust/asset-info/asset-info.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.darkblue {\n  color: #0e0e27;\n}\n\n.img {\n  width: 150px;\n  height: 150px;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\nh5 {\n  font-size: 15px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #0e0e27;\n  margin: 2%;\n}\n\nh4 {\n  margin-left: 10%;\n  font-size: 15px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #ffad00;\n  margin: 2%;\n}\n\n.img1 {\n  width: 100%;\n  height: 200px;\n  text-align: center;\n  margin-top: 10px;\n}\n\n.img2 {\n  width: 100px;\n  height: 150px;\n}\n\n.img1 > img {\n  max-height: calc(100% - 23px);\n  width: auto;\n}\n\nh3 {\n  font-size: 15px;\n  font-weight: 600;\n  color: #ffad00;\n  text-transform: uppercase;\n  margin: 2%;\n}\n\nh2 {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin: 2%;\n  color: white;\n}\n\nh1 {\n  font-size: 16px;\n  font-weight: 800;\n  color: red;\n  padding: 0;\n  margin: 0;\n}\n\n.center {\n  margin: auto;\n  text-align: center;\n}\n\nion-slides {\n  background: #e6e6e6;\n}\n\nion-slides img {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 100%;\n  height: 150px;\n}\n\nion-slide {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.bg-color {\n  background-color: #0e0e27;\n}\n\n.bg-color1 {\n  background-color: aliceblue;\n}\n\n.header {\n  font-weight: 600;\n  color: white;\n  padding: 5px;\n  text-align: center;\n  margin: 0;\n}\n\n.img3 {\n  width: 100px;\n  height: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9hc3NldC1pbmZvL0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFxjdXN0XFxhc3NldC1pbmZvXFxhc3NldC1pbmZvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9hc3NldC1pbmZvL2Fzc2V0LWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDQyxjQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ0VEOztBRENBO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FDRUQ7O0FEQ0E7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDRUQ7O0FEQ0E7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNFRDs7QURDQTtFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VEOztBRENBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7QUNFRDs7QURDQTtFQUNDLDZCQUFBO0VBQ0csV0FBQTtBQ0VKOztBRENBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ0VEOztBRENBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0VEOztBRENBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUVBLFVBQUE7RUFDQSxTQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7QUNDRDs7QURFQTtFQUVDLG1CQUFBO0FDQUQ7O0FERUM7RUFDQyxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNBRjs7QURJQTtFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0REOztBRElBO0VBQ0MseUJBQUE7QUNERDs7QURJQTtFQUNDLDJCQUFBO0FDREQ7O0FESUE7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDREQ7O0FESUE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ0REIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdC9hc3NldC1pbmZvL2Fzc2V0LWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1sb2dve1xyXG4gICAgd2lkdGg6MTIwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZGFya2JsdWV7XHJcblx0Y29sb3I6IzBlMGUyNztcclxufVxyXG4uaW1ne1xyXG5cdHdpZHRoOjE1MHB4O1xyXG5cdGhlaWdodDoxNTBweDtcclxufVxyXG5cclxuLmZsZXh7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbn1cclxuXHJcbmg1e1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Y29sb3I6IzBlMGUyNztcclxuXHRtYXJnaW46IDIlO1xyXG59XHJcblxyXG5oNHtcclxuXHRtYXJnaW4tbGVmdDogMTAlO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Y29sb3I6I2ZmYWQwMDtcclxuXHRtYXJnaW46IDIlO1xyXG59XHJcblxyXG4uaW1nMXtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGhlaWdodDoyMDBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmltZzJ7XHJcblx0d2lkdGg6MTAwcHg7XHJcblx0aGVpZ2h0OjE1MHB4O1xyXG59XHJcblxyXG4uaW1nMT5pbWd7XHJcblx0bWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjNweCk7XHJcbiAgICB3aWR0aDogYXV0b1xyXG59XHJcblxyXG5oM3tcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRjb2xvcjogI2ZmYWQwMDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdG1hcmdpbjogMiU7XHJcbn1cclxuXHJcbmgye1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0bWFyZ2luOiAyJTtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmgxe1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRmb250LXdlaWdodDogODAwO1xyXG5cdGNvbG9yOnJlZDtcclxuXHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcblx0cGFkZGluZzowO1xyXG5cdG1hcmdpbjowO1xyXG59XHJcblxyXG4uY2VudGVye1xyXG5cdG1hcmdpbjphdXRvO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLXNsaWRlc3tcclxuXHQvLyBtYXJnaW4tdG9wOiAxMCU7XHJcblx0YmFja2dyb3VuZDogI2U2ZTZlNjtcclxuXHQvLyB3aWR0aDoxMDAlO1xyXG5cdGltZ3tcclxuXHRcdHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIwcHg7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxNTBweDtcclxuXHR9XHJcbn1cclxuXHJcbmlvbi1zbGlkZXtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxufVxyXG5cclxuLmJnLWNvbG9ye1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwZTBlMjc7XHJcbn1cclxuXHJcbi5iZy1jb2xvcjF7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0Y29sb3I6d2hpdGU7XHJcblx0cGFkZGluZzo1cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbjowO1xyXG59XHJcblxyXG4uaW1nM3tcclxuXHR3aWR0aDoxMDBweDtcclxuXHRoZWlnaHQ6MTIwcHg7XHJcbn0iLCIuaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMTIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5kYXJrYmx1ZSB7XG4gIGNvbG9yOiAjMGUwZTI3O1xufVxuXG4uaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzBlMGUyNztcbiAgbWFyZ2luOiAyJTtcbn1cblxuaDQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZhZDAwO1xuICBtYXJnaW46IDIlO1xufVxuXG4uaW1nMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pbWcyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uaW1nMSA+IGltZyB7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDIzcHgpO1xuICB3aWR0aDogYXV0bztcbn1cblxuaDMge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZmZhZDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDIlO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAyJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHJlZDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1zbGlkZXMge1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xufVxuaW9uLXNsaWRlcyBpbWcge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG5pb24tc2xpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYmctY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZTI3O1xufVxuXG4uYmctY29sb3IxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xufVxuXG4uaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaW1nMyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cust/asset-info/asset-info.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/cust/asset-info/asset-info.page.ts ***!
  \**********************************************************/
/*! exports provided: AssetInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetInfoPage", function() { return AssetInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-modal/image-modal.page */ "./src/app/pages/cust/image-modal/image-modal.page.ts");




var AssetInfoPage = /** @class */ (function () {
    function AssetInfoPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.sliderOpts = {
            zoom: false,
            slidesPerView: 2.5,
            // centeredSlides:true,
            spaceBetween: 20
        };
    }
    AssetInfoPage.prototype.ngOnInit = function () {
    };
    AssetInfoPage.prototype.openPreview = function (img) {
        this.modalCtrl.create({
            component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_3__["ImageModalPage"],
            componentProps: {
                img: img
            }
        }).then(function (modal) { return modal.present(); });
    };
    AssetInfoPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    AssetInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset-info',
            template: __webpack_require__(/*! raw-loader!./asset-info.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/asset-info/asset-info.page.html"),
            styles: [__webpack_require__(/*! ./asset-info.page.scss */ "./src/app/pages/cust/asset-info/asset-info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], AssetInfoPage);
    return AssetInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cust-asset-info-asset-info-module-es5.js.map