(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-add-asset-add-asset-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/add-asset/add-asset.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/add-asset/add-asset.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n<ion-toolbar color=\"darkblue\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n\t<div>\n\t\t<img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n\t  </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<h2>ASSET MANAGEMENT</h2>\n\t<p>You can add your household assets here!</p>\n\t   <form [formGroup]=\"onAddAssetForm\">\n\t\t<ion-list>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\" class=\"fw600\">Product Category</ion-label>\n\t\t    <ion-select formControlName=\"productCategory\">\n\t\t            <ion-select-option >Entertainment</ion-select-option>\n\t\t    </ion-select>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label  position=\"floating\" class=\"fw600\">Product Name</ion-label>\n\t\t    <ion-select formControlName=\"productName\">\n\t\t            <ion-select-option >Samsung J7</ion-select-option>\n\t\t    </ion-select>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label  position=\"floating\" class=\"fw600\">Brand</ion-label>\n\t\t    <ion-select formControlName=\"productBrand\">\n\t\t            <ion-select-option >Samsung</ion-select-option>\n\t\t    </ion-select>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label  position=\"floating\" class=\"fw600\">Date of Purchase</ion-label>\n\t\t    <ion-datetime placeholder=\"Select Date\" formControlName=\"dateOfPurchase\"></ion-datetime>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label  position=\"floating\" class=\"fw600\">Number of Months Warranty</ion-label>\n\t\t    <ion-input type=\"numeric\" formControlName=\"monthsWarranty\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label  position=\"floating\" class=\"fw600\">Product Price</ion-label>\n\t\t    <ion-input type=\"numeric\" placeholder=\"&#8377;\" formControlName=\"productPrice\"></ion-input>\n\t\t</ion-item>\n\t</ion-list>\n\t</form>\n\t<div class=\"text-center\">\n\t\t<ion-button (click)=\"addAsset()\" color=\"gold\">SUBMIT THE FORM</ion-button>\n\t</div>\n\t<ion-card>\n\t\t<h5>CAPTURE PRODUCT IMAGE</h5>\n\t\t<ion-row>\n\t\t<ion-col>\n\t\t\t<ion-button (click)=\"openCam()\" size=\"small\">Open Camera</ion-button>\n\t\t\t<ion-button (click)=\"openGallery()\" size=\"small\">Open Gallery</ion-button>\n\t\t\t\n\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<img src=\"{{base64Image}}\">\n\t\t\t\t<ion-button (click)=\"uploadImg()\" size=\"small\" color=\"danger\">Upload Image</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-card>\n\t<ion-card>\n\t\t<h5>CAPTURE INVOICE IMAGE</h5>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-button (click)=\"openCam1()\" size=\"small\">Open Camera</ion-button>\n\t\t\t\t<ion-button (click)=\"openGallery1()\" size=\"small\">Open Gallery</ion-button>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<img src=\"{{base64Image1}}\"/>\n\t\t\t\t<ion-button (click)=\"uploadImg1()\" size=\"small\" color=\"danger\">Upload Image</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-card>\n\t<ion-card>\n\t\t<h5>CAPTURE WARRANTY CARD IMAGE</h5>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-button (click)=\"openCam2()\" size=\"small\">Open Camera</ion-button>\n\t\t\t\t<ion-button (click)=\"openGallery2()\" size=\"small\">Open Gallery</ion-button>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<img src=\"{{base64Image2}}\"/>\n\t\t\t\t<ion-button (click)=\"uploadImg2()\" size=\"small\" color=\"danger\">Upload Image</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-card>\n\n\n</ion-content>\n"

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

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\nh2 {\n  text-align: center;\n  font-size: 1rem;\n  font-weight: 600;\n}\n\np {\n  text-align: center;\n  font-size: 0.8rem;\n}\n\nh5 {\n  text-align: center;\n  font-size: 1rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9hZGQtYXNzZXQvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXGN1c3RcXGFkZC1hc3NldFxcYWRkLWFzc2V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3VzdC9hZGQtYXNzZXQvYWRkLWFzc2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBRE9BO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNKRDs7QURPQTtFQUNDLGtCQUFBO0VBQ0EsaUJBQUE7QUNKRDs7QURPQTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSkQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdXN0L2FkZC1hc3NldC9hZGQtYXNzZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1sb2dve1xyXG4gICAgd2lkdGg6MTIwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4vLyBpbWd7XHJcbi8vIFx0d2lkdGg6NTBweDtcclxuLy8gXHRoZWlnaHQ6IDUwcHg7XHJcbi8vIH1cclxuXHJcbmgye1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxucHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbmg1e1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuIiwiLmhlYWRlci1sb2dvIHtcbiAgd2lkdGg6IDEyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuaDUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"

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
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let AddAssetPage = class AddAssetPage {
    constructor(camera, authService, alertService, loadingCtrl, alertCtrl, navCtrl, popoverCtrl, router, http, formBuilder) {
        this.camera = camera;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.onAddAssetForm = this.formBuilder.group({
            'productCategory': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            'productName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            'productBrand': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            'dateOfPurchase': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            'monthsWarranty': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            'productPrice': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    }
    addAsset() {
        console.log(this.onAddAssetForm.value);
    }
    openCam() {
        const options = {
            quality: 10,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            //alert(imageData)
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
            //(<any>window).Ionic.WebView.convertFileSrc(imageData);
        }, (err) => {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    }
    openGallery() {
        const options = {
            quality: 10,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            //alert(imageData)
            this.base64Image = window.Ionic.WebView.convertFileSrc(imageData); //'data:image/jpeg;base64,' + imageData;
            // 
        }, (err) => {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    }
    uploadImg() {
        let url = "http://vaccrm.com/iglobe/CBA/api_v1/unwanted/image.php";
        let postData = new FormData();
        postData.append('file', this.base64Image);
        let data = this.http.post(url, postData);
        data.subscribe((result) => {
            console.log(result);
        });
    }
    openCam1() {
        const options = {
            quality: 10,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            //alert(imageData)
            this.base64Image1 = 'data:image/jpeg;base64,' + imageData;
            //(<any>window).Ionic.WebView.convertFileSrc(imageData);
        }, (err) => {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    }
    openGallery1() {
        const options = {
            quality: 10,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            //alert(imageData)
            this.base64Image1 = window.Ionic.WebView.convertFileSrc(imageData); //'data:image/jpeg;base64,' + imageData;
            // 
        }, (err) => {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    }
    uploadImg1() {
        let url = "http://vaccrm.com/iglobe/CBA/api_v1/unwanted/image.php";
        let postData = new FormData();
        postData.append('file', this.base64Image1);
        let data = this.http.post(url, postData);
        data.subscribe((result) => {
            console.log(result);
        });
    }
    openCam2() {
        const options = {
            quality: 10,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            //alert(imageData)
            this.base64Image2 = 'data:image/jpeg;base64,' + imageData;
            //(<any>window).Ionic.WebView.convertFileSrc(imageData);
        }, (err) => {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    }
    openGallery2() {
        const options = {
            quality: 10,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            //alert(imageData)
            this.base64Image2 = window.Ionic.WebView.convertFileSrc(imageData); //'data:image/jpeg;base64,' + imageData;
            // 
        }, (err) => {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    }
    uploadImg2() {
        let url = "http://vaccrm.com/iglobe/CBA/api_v1/unwanted/image.php";
        let postData = new FormData();
        postData.append('file', this.base64Image2);
        let data = this.http.post(url, postData);
        data.subscribe((result) => {
            console.log(result);
        });
    }
};
AddAssetPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
AddAssetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-asset',
        template: __webpack_require__(/*! raw-loader!./add-asset.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/add-asset/add-asset.page.html"),
        styles: [__webpack_require__(/*! ./add-asset.page.scss */ "./src/app/pages/cust/add-asset/add-asset.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], AddAssetPage);



/***/ })

}]);
//# sourceMappingURL=pages-cust-add-asset-add-asset-module-es2015.js.map