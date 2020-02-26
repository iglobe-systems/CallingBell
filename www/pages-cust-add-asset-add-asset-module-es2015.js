(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-add-asset-add-asset-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/add-asset/add-asset.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/add-asset/add-asset.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n<ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n\t<div>\n\t\t<img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n\t  </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<h2 class=\"header\">ASSET MANAGEMENT</h2>\n\t<p class=\"header-sub\">You can add your household assets here!</p>\n\t   <form [formGroup]=\"onAddAssetForm\">\n\t\t<ion-list lines=\"none\">\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\" class=\"fw600\">Product Category</ion-label>\n\t\t    <ion-select formControlName=\"productCategory\" interface=\"popover\" lines=\"none\">\n\t\t            <ion-select-option >Entertainment</ion-select-option>\n\t\t    </ion-select>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label  position=\"floating\" class=\"fw600\">Product Name</ion-label>\n\t\t    <ion-input formControlName=\"productName\" type=\"text\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label  position=\"floating\" class=\"fw600\">Product Serial No. (optional)</ion-label>\n\t\t\t<ion-input formControlName=\"productSerialNo\" type=\"text\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label  position=\"floating\" class=\"fw600\">Brand</ion-label>\n\t\t    <ion-input formControlName=\"productBrand\" type=\"text\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label  position=\"floating\" class=\"fw600\">Date of Purchase</ion-label>\n\t\t    <ion-datetime placeholder=\"Select Date\" formControlName=\"dateOfPurchase\"></ion-datetime>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label  position=\"floating\" class=\"fw600\">Number of Months Warranty</ion-label>\n\t\t    <ion-input type=\"numeric\" formControlName=\"monthsWarranty\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item >\n\t\t\t<ion-label position=\"floating\" class=\"fw600\" color=\"darkblue\">Product Price</ion-label>\n\t\t    <ion-input type=\"numeric\" placeholder=\"&#8377;\" formControlName=\"productPrice\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"stacked\" class=\"fw600\">Product Image</ion-label>\n\t\t\t<div>\n\t\t\t\t<ion-button fill=\"outline\" color=\"darkblue\" class=\"buttonone\" size=\"small\"\t(click)=\"openCamera()\">Camera</ion-button>\n\t\t\t\t<ion-button fill=\"outline\" color=\"darkblue\" class=\"buttontwo\" size=\"small\">Gallery</ion-button>\n\t\t\t\t<ion-button fill=\"outline\" color=\"darkblue\" class=\"buttontwo\" size=\"small\" (click)=\"upload()\">Upload</ion-button>\n\t\t\t\t<img [src]=\"image\" >  \n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"stacked\" class=\"fw600\">Invoice Image</ion-label>\n\t\t\t<div>\n\t\t\t\t<ion-button fill=\"outline\" color=\"darkblue\" class=\"buttonone\" size=\"small\" (click)=\"openCamera()\">Camera</ion-button>\n\t\t\t\t<ion-button fill=\"outline\" color=\"darkblue\" class=\"buttontwo\" size=\"small\">Gallery</ion-button>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"stacked\" class=\"fw600\">Warranty Image</ion-label>\n\t\t\t<div>\n\t\t\t\t<ion-button fill=\"outline\" color=\"darkblue\" class=\"buttonone\" size=\"small\" (click)=\"openCamera()\">Camera</ion-button>\n\t\t\t\t<ion-button fill=\"outline\" color=\"darkblue\" class=\"buttontwo\" size=\"small\">Gallery</ion-button>\n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n\t</form>\n\t<div class=\"text-center\">\n\t\t<ion-button (click)=\"addAsset()\" color=\"gold\">SUBMIT FORM</ion-button>\n\t</div>\n\n\t<!-- <h3 *ngIf=\"images.length == 0\" text-center>Please Select Image!</h3>\n \n\t<ion-list>\n\t  <ion-item *ngFor=\"let img of images; index as pos\" text-wrap>\n\t\t<ion-thumbnail slot=\"start\">\n\t\t  <ion-img [src]=\"img.path\"></ion-img>\n\t\t</ion-thumbnail>\n\t\t<ion-label>\n\t\t  {{ img.name }}\n\t\t</ion-label>\n\t\t<ion-button slot=\"end\" fill=\"clear\" (click)=\"startUpload(img)\">\n\t\t  <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n\t\t</ion-button>\n\t\t<ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(img, pos)\">\n\t\t  <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n\t\t</ion-button>\n\t  </ion-item>\n\t</ion-list> -->\n</ion-content>\n\n<!-- <ion-footer>\n\t<ion-toolbar color=\"primary\">\n\t  <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectImage()\">\n\t\t<ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n\t\tSelect Image</ion-button>\n\t</ion-toolbar>\n  </ion-footer> -->"

/***/ }),

/***/ "./src/app/pages/cust/add-asset/add-asset.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/cust/add-asset/add-asset.module.ts ***!
  \**********************************************************/
/*! exports provided: AddAssetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAssetPageModule", function() { return AddAssetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_asset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-asset.page */ "./src/app/pages/cust/add-asset/add-asset.page.ts");







const routes = [
    {
        path: '',
        component: _add_asset_page__WEBPACK_IMPORTED_MODULE_6__["AddAssetPage"]
    }
];
let AddAssetPageModule = class AddAssetPageModule {
};
AddAssetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_add_asset_page__WEBPACK_IMPORTED_MODULE_6__["AddAssetPage"]]
    })
], AddAssetPageModule);



/***/ }),

/***/ "./src/app/pages/cust/add-asset/add-asset.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/cust/add-asset/add-asset.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.header {\n  text-align: center;\n  font-size: 14px;\n  font-weight: 600;\n  margin: 5px 0px;\n}\n\n.header-sub {\n  text-align: center;\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\nh5 {\n  text-align: center;\n  font-size: 1rem;\n  font-weight: 600;\n}\n\nion-item {\n  border: 0.5px solid black;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.buttonone {\n  margin: 10px 0px;\n}\n\n.buttontwo {\n  margin: 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9hZGQtYXNzZXQvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXGN1c3RcXGFkZC1hc3NldFxcYWRkLWFzc2V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9hZGQtYXNzZXQvYWRkLWFzc2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBRE9BO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSkQ7O0FET0E7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDSkQ7O0FET0E7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0pEOztBRE9BO0VBQ0MseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDSkQ7O0FET0E7RUFDQyxnQkFBQTtBQ0pEOztBRE1BO0VBQ0MsaUJBQUE7QUNIRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3QvYWRkLWFzc2V0L2FkZC1hc3NldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWxvZ297XHJcbiAgICB3aWR0aDoxMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi8vIGltZ3tcclxuLy8gXHR3aWR0aDo1MHB4O1xyXG4vLyBcdGhlaWdodDogNTBweDtcclxuLy8gfVxyXG5cclxuLmhlYWRlcntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOjE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItc3Vie1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXNpemU6MTJweDtcclxuXHRtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuXHJcbmg1e1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcblx0Ym9yZGVyOjAuNXB4IHNvbGlkIGJsYWNrO1xyXG5cdGJvcmRlci1yYWRpdXM6MTBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYnV0dG9ub25le1xyXG5cdG1hcmdpbjogMTBweCAwcHg7XHJcbn1cclxuLmJ1dHRvbnR3b3tcclxuXHRtYXJnaW46MTBweCAyMHB4O1xyXG59IiwiLmhlYWRlci1sb2dvIHtcbiAgd2lkdGg6IDEyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLmhlYWRlci1zdWIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG5oNSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5idXR0b25vbmUge1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4uYnV0dG9udHdvIHtcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/cust/add-asset/add-asset.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/cust/add-asset/add-asset.page.ts ***!
  \********************************************************/
/*! exports provided: AddAssetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAssetPage", function() { return AddAssetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");










// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// const STORAGE_KEY = 'my_images';
let AddAssetPage = class AddAssetPage {
    constructor(camera, 
    // public transfer: FileTransfer,
    // public authService: AuthService, 
    // public alertService: AlertService, 
    loadingCtrl, 
    // public alertCtrl: AlertController, 
    // public navCtrl: NavController,
    // public popoverCtrl: PopoverController,
    // private router: Router,
    http, formBuilder, storage, toastController, file, webview, actionSheetController, platform, ref, filePath) {
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.toastController = toastController;
        this.file = file;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.ref = ref;
        this.filePath = filePath;
        // userInfo: any;
        // image:any;
        // imageData:any;
        this.images = [];
    }
    ngOnInit() {
        // this.platform.ready().then(() => {
        //   this.loadStoredImages();
        // });
        this.onAddAssetForm = this.formBuilder.group({
            'productCategory': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'productName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'productSerialNo': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'productBrand': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'dateOfPurchase': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'monthsWarranty': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'productPrice': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    addAsset() {
        console.log(this.onAddAssetForm.value);
    }
};
AddAssetPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__["FilePath"] }
];
AddAssetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-asset',
        template: __webpack_require__(/*! raw-loader!./add-asset.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/add-asset/add-asset.page.html"),
        styles: [__webpack_require__(/*! ./add-asset.page.scss */ "./src/app/pages/cust/add-asset/add-asset.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__["FilePath"]])
], AddAssetPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-add-asset-add-asset-module-es2015.js.map