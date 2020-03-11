(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-add-asset-add-asset-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/add-asset/add-asset.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/add-asset/add-asset.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n<ion-toolbar color=\"darkblue\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n\t<div>\r\n\t\t<img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\r\n\t  </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\t<h2 class=\"header\">ASSET MANAGEMENT</h2>\r\n\t<p class=\"header-sub\">You can add your household assets here!</p>\r\n\t   <form [formGroup]=\"onAddAssetForm\">\r\n\t\t<ion-list lines=\"none\">\r\n\t\t<ion-item>\r\n\t\t\t<ion-label position=\"floating\" class=\"fw600\">Product Category</ion-label>\r\n\t\t    <ion-select formControlName=\"productCategory\" interface=\"popover\" lines=\"none\" mode=\"ios\">\r\n\t\t            <ion-select-option >Entertainment</ion-select-option>\r\n\t\t    </ion-select>\r\n\t\t</ion-item>\r\n\t\t<ion-item>\r\n\t\t\t<ion-label  position=\"floating\" class=\"fw600\">Product Name</ion-label>\r\n\t\t    <ion-input formControlName=\"productName\" type=\"text\"></ion-input>\r\n\t\t</ion-item>\r\n\t\t<ion-item>\r\n\t\t\t<ion-label  position=\"floating\" class=\"fw600\">Product Serial No. (optional)</ion-label>\r\n\t\t\t<ion-input formControlName=\"productSerialNo\" type=\"text\"></ion-input>\r\n\t\t</ion-item>\r\n\t\t<ion-item>\r\n\t\t\t<ion-label  position=\"floating\" class=\"fw600\">Brand</ion-label>\r\n\t\t    <ion-input formControlName=\"productBrand\" type=\"text\"></ion-input>\r\n\t\t</ion-item>\r\n\t\t<ion-item>\r\n\t\t\t<ion-label  position=\"floating\" class=\"fw600\">Date of Purchase</ion-label>\r\n\t\t    <ion-datetime placeholder=\"Select Date\" formControlName=\"dateOfPurchase\"></ion-datetime>\r\n\t\t</ion-item>\r\n\t\t<ion-item>\r\n\t\t\t<ion-label  position=\"floating\" class=\"fw600\">Number of Months Warranty</ion-label>\r\n\t\t    <ion-input type=\"numeric\" formControlName=\"monthsWarranty\"></ion-input>\r\n\t\t</ion-item>\r\n\t\t<ion-item >\r\n\t\t\t<ion-label position=\"floating\" class=\"fw600\" color=\"darkblue\">Product Price</ion-label>\r\n\t\t    <ion-input type=\"numeric\" placeholder=\"&#8377;\" formControlName=\"productPrice\"></ion-input>\r\n\t\t</ion-item>\r\n\t</ion-list>\r\n\t</form>\r\n\t<div class=\"text-center\">\r\n\t\t<ion-button (click)=\"addAsset()\" color=\"gold\">SUBMIT FORM</ion-button>\r\n\t</div>\r\n\t<ion-list>\r\n\t\t<ion-item>\r\n\t\t\t<ion-label position=\"stacked\" class=\"fw600\">Product Image</ion-label>\r\n\t\t\t<div>\r\n\t\t\t\t<ion-button fill=\"outline\" color=\"darkblue\" class=\"buttonone\" size=\"small\"\t(click)=\"openCam()\">Camera</ion-button>\r\n\t\t\t\t<ion-button fill=\"outline\" color=\"darkblue\" class=\"buttontwo\" size=\"small\">Gallery</ion-button>\r\n\t\t\t\t<ion-button fill=\"outline\" color=\"darkblue\" class=\"buttontwo\" size=\"small\" (click)=\"upload()\">Upload</ion-button>\r\n\t\t\t\t<img src=\"{{image}}\" onError=\"this.src='http://apiv1.iglobesystems.com/assets/img/no_img.png'\" class=\"asset-image\">  \r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item>\r\n\t\t\t<ion-label position=\"stacked\" class=\"fw600\">Invoice Image</ion-label>\r\n\t\t\t<div>\r\n\t\t\t\t<ion-button fill=\"outline\" color=\"darkblue\" class=\"buttonone\" size=\"small\">Camera</ion-button>\r\n\t\t\t\t<ion-button fill=\"outline\" color=\"darkblue\" class=\"buttontwo\" size=\"small\">Gallery</ion-button>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item>\r\n\t\t\t<ion-label position=\"stacked\" class=\"fw600\">Warranty Image</ion-label>\r\n\t\t\t<div>\r\n\t\t\t\t<ion-button fill=\"outline\" color=\"darkblue\" class=\"buttonone\" size=\"small\">Camera</ion-button>\r\n\t\t\t\t<ion-button fill=\"outline\" color=\"darkblue\" class=\"buttontwo\" size=\"small\">Gallery</ion-button>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t</ion-list>\r\n\t\t\r\n\t\r\n\t\r\n\t\r\n\t<!-- <h3 *ngIf=\"images.length == 0\" text-center>Please Select Image!</h3>\r\n \r\n\t<ion-list>\r\n\t  <ion-item *ngFor=\"let img of images; index as pos\" text-wrap>\r\n\t\t<ion-thumbnail slot=\"start\">\r\n\t\t  <ion-img [src]=\"img.path\"></ion-img>\r\n\t\t</ion-thumbnail>\r\n\t\t<ion-label>\r\n\t\t  {{ img.name }}\r\n\t\t</ion-label>\r\n\t\t<ion-button slot=\"end\" fill=\"clear\" (click)=\"startUpload(img)\">\r\n\t\t  <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\r\n\t\t</ion-button>\r\n\t\t<ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(img, pos)\">\r\n\t\t  <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n\t\t</ion-button>\r\n\t  </ion-item>\r\n\t</ion-list> -->\r\n</ion-content>\r\n\r\n<!-- <ion-footer>\r\n\t<ion-toolbar color=\"primary\">\r\n\t  <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectImage()\">\r\n\t\t<ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n\t\tSelect Image</ion-button>\r\n\t</ion-toolbar>\r\n  </ion-footer> -->"

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

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.header {\n  text-align: center;\n  font-size: 14px;\n  font-weight: 600;\n  margin: 5px 0px;\n}\n\n.header-sub {\n  text-align: center;\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\nh5 {\n  text-align: center;\n  font-size: 1rem;\n  font-weight: 600;\n}\n\nion-item {\n  border: 0.5px solid black;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.buttonone {\n  margin: 10px 0px;\n}\n\n.buttontwo {\n  margin: 10px 20px;\n}\n\n.asset-image {\n  width: 80px;\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9hZGQtYXNzZXQvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXGN1c3RcXGFkZC1hc3NldFxcYWRkLWFzc2V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9hZGQtYXNzZXQvYWRkLWFzc2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBRENBO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRUQ7O0FEQ0E7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDRUQ7O0FEQ0E7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VEOztBRENBO0VBQ0MseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRUQ7O0FEQ0E7RUFDQyxnQkFBQTtBQ0VEOztBREFBO0VBQ0MsaUJBQUE7QUNHRDs7QURBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDR0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdXN0L2FkZC1hc3NldC9hZGQtYXNzZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1sb2dve1xyXG4gICAgd2lkdGg6MTIwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5oZWFkZXJ7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZToxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0bWFyZ2luOiA1cHggMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLXN1YntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOjEycHg7XHJcblx0bWFyZ2luOiA1cHggMHB4O1xyXG59XHJcblxyXG5oNXtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG5cdGJvcmRlcjowLjVweCBzb2xpZCBibGFjaztcclxuXHRib3JkZXItcmFkaXVzOjEwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmJ1dHRvbm9uZXtcclxuXHRtYXJnaW46IDEwcHggMHB4O1xyXG59XHJcbi5idXR0b250d297XHJcblx0bWFyZ2luOjEwcHggMjBweDtcclxufVxyXG5cclxuLmFzc2V0LWltYWdle1xyXG5cdHdpZHRoOiA4MHB4O1xyXG5cdGhlaWdodDogODBweDtcclxufVxyXG5cclxuIiwiLmhlYWRlci1sb2dvIHtcbiAgd2lkdGg6IDEyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLmhlYWRlci1zdWIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG5oNSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5idXR0b25vbmUge1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4uYnV0dG9udHdvIHtcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XG59XG5cbi5hc3NldC1pbWFnZSB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");





// import { File, FileEntry } from '@ionic-native/file/ngx';

// import { Observable } from 'rxjs/Observable';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { WebView } from '@ionic-native/ionic-webview/ngx';
// import { Storage } from '@ionic/storage';
// import { FilePath } from '@ionic-native/file-path/ngx';
// import { finalize } from 'rxjs/operators';

// const STORAGE_KEY = 'my_images';
let AddAssetPage = class AddAssetPage {
    constructor(camera, transfer, 
    // public authService: AuthService, 
    // public alertService: AlertService, 
    loadingCtrl, 
    // public alertCtrl: AlertController, 
    // public navCtrl: NavController,
    // public popoverCtrl: PopoverController,
    // private router: Router,
    http, formBuilder, 
    // private storage: Storage,
    toastController) {
        this.camera = camera;
        this.transfer = transfer;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        // userInfo: any;
        this.image = '';
        this.imageData = '';
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
    openCam() {
        const options = {
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            //alert(imageData)
            this.imageData = imageData;
            this.image = window.Ionic.WebView.convertFileSrc(imageData);
        }, (err) => {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    }
    upload() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Uploading...',
            });
            yield loading.present();
            const fileTransfer = this.transfer.create();
            let options1 = {
                fileKey: 'file',
                fileName: 'name.jpg',
                headers: {}
            };
            fileTransfer.upload(this.imageData, 'http://apiv1.iglobesystems.com:8000/api_v1/assets/add', options1)
                .then((data) => {
                // success
                loading.dismiss();
                alert("success");
            }, (err) => {
                // error
                alert("error" + JSON.stringify(err));
                loading.dismiss();
            });
        });
    }
};
AddAssetPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
AddAssetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-asset',
        template: __webpack_require__(/*! raw-loader!./add-asset.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/add-asset/add-asset.page.html"),
        styles: [__webpack_require__(/*! ./add-asset.page.scss */ "./src/app/pages/cust/add-asset/add-asset.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], AddAssetPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-add-asset-add-asset-module-es2015.js.map