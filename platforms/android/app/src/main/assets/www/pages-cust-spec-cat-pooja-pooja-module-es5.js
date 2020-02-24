(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cust-spec-cat-pooja-pooja-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/pooja/pooja.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cust/spec-cat/pooja/pooja.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-buttons>\n      <div>\n        <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n      </div>\n         <ion-buttons slot=\"end\">\n          <ion-button shape=\"round\" (click)=\"back()\">\n            <ion-icon name=\"arrow-round-back\" class=\"text15\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<h4 class=\"ion-text-center\">POOJA ITEMS</h4>\n<div *ngFor=\"let items of pooja\"  class=\"size\">\n  <div class=\"flex\">\n    <img src=\"{{items.image_url}}\" onError=\"this.src='http://apiv1.iglobesystems.com/assets/img/no_img.png'\" class=\"pooja-img\"/>\n    <ion-row>\n      <ion-col>\n        <h5>{{items.s_name}}</h5>\n      </ion-col>\n      <ion-col>\n        <h5 class=\"hindi\">{{items.h_name}}</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n          <h5>{{items.t_name}}</h5>\n      </ion-col>\n      <ion-col>\n          <h5 class=\"hindi\">{{items.e_name}}</h5>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/pooja/pooja.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/pooja/pooja.module.ts ***!
  \***********************************************************/
/*! exports provided: PoojaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojaPageModule", function() { return PoojaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pooja_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pooja.page */ "./src/app/pages/cust/spec-cat/pooja/pooja.page.ts");







var routes = [
    {
        path: '',
        component: _pooja_page__WEBPACK_IMPORTED_MODULE_6__["PoojaPage"]
    }
];
var PoojaPageModule = /** @class */ (function () {
    function PoojaPageModule() {
    }
    PoojaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pooja_page__WEBPACK_IMPORTED_MODULE_6__["PoojaPage"]]
        })
    ], PoojaPageModule);
    return PoojaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cust/spec-cat/pooja/pooja.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/pooja/pooja.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.size {\n  display: inline-block;\n  width: 46%;\n  background-color: #f7f7f7;\n  margin: 2%;\n}\n\n.pooja-img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin: 5px auto;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nh5 {\n  text-transform: uppercase;\n  margin: 2px;\n  font-size: 10px;\n}\n\nh4 {\n  margin: 5px auto;\n}\n\n.hindi {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdC9zcGVjLWNhdC9wb29qYS9EOlxcUmlhelxcTmV3QVBLXFxOZXdBUEt2MC4xL3NyY1xcYXBwXFxwYWdlc1xcY3VzdFxcc3BlYy1jYXRcXHBvb2phXFxwb29qYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvcG9vamEvcG9vamEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDQyxxQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUVHLFVBQUE7QUNBSjs7QURLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRko7O0FES0k7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRlI7O0FES0k7RUFDSSxnQkFBQTtBQ0ZSOztBREtBO0VBQ0ksaUJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3Qvc3BlYy1jYXQvcG9vamEvcG9vamEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1sb2dve1xyXG4gICAgd2lkdGg6MTIwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uc2l6ZXtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6NDYlOyAgLy9kZWZhdWx0IC0gNDYlXHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuXHQvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgLy8gaGVpZ2h0OjEyMHB4O1xyXG59XHJcblxyXG5cclxuLnBvb2phLWltZ3tcclxuICAgIHdpZHRoOjgwcHg7XHJcbiAgICBoZWlnaHQ6ODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICB9XHJcblxyXG4uZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgaDV7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBtYXJnaW46MnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBoNHtcclxuICAgICAgICBtYXJnaW46NXB4IGF1dG87XHJcbiAgICB9XHJcblxyXG4uaGluZGl7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSIsIi5oZWFkZXItbG9nbyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnNpemUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0NiU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIG1hcmdpbjogMiU7XG59XG5cbi5wb29qYS1pbWcge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogNXB4IGF1dG87XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaDUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDJweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG5oNCB7XG4gIG1hcmdpbjogNXB4IGF1dG87XG59XG5cbi5oaW5kaSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/cust/spec-cat/pooja/pooja.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/cust/spec-cat/pooja/pooja.page.ts ***!
  \*********************************************************/
/*! exports provided: PoojaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojaPage", function() { return PoojaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var PoojaPage = /** @class */ (function () {
    function PoojaPage(authService, alertService, loadingCtrl, alertCtrl, navCtrl, popoverCtrl, router) {
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.router = router;
        this.pooja = [
            { id: 25, image_url: "assets/img/pooja/1.png", t_name: "மஞ்சள்", s_name: "हरिद्रा", h_name: "हल्दी", e_name: "Turmeric Powder" },
            { id: 25, image_url: "assets/img/pooja/2.png", t_name: "குங்குமம்", s_name: "कुङ्कुम", h_name: "कुमकुम", e_name: "Kumkum Powder" },
            { id: 25, image_url: "assets/img/pooja/3.png", t_name: "ஊதுபத்தி ", s_name: "धूपं", h_name: "अगरबत्ती", e_name: "Agarbathi" },
            { id: 25, image_url: "assets/img/pooja/4.png", t_name: "கற்பூரம்", s_name: "कर्पूरम्", h_name: "कपूर", e_name: "Camphor" },
            { id: 25, image_url: "assets/img/pooja/5.png", t_name: "சாம்பிராணி", s_name: "धूपं", h_name: "धुप", e_name: "Dhoop" },
            { id: 25, image_url: "assets/img/pooja/6.png", t_name: " கலசம்", s_name: "कलसं", h_name: "कास्केट", e_name: "Kalasam" },
            { id: 25, image_url: "assets/img/pooja/7.png", t_name: "தேன் ", s_name: "मधु", h_name: "शहद", e_name: "Honey" },
            { id: 25, image_url: "assets/img/pooja/8.png", t_name: "உலர் பழங்கள்", s_name: "", h_name: "मेवे", e_name: "Dry Fruits(mixed)" },
            { id: 25, image_url: "assets/img/pooja/9.png", t_name: "நவ தானியங்கள்", s_name: "नव धान्य", h_name: "नव धन्या", e_name: "Nava Dhanya" },
            { id: 25, image_url: "assets/img/pooja/10.png", t_name: "அரிசி", s_name: "अनस्", h_name: "चावल", e_name: "Rice" },
            { id: 25, image_url: "assets/img/pooja/11.png", t_name: "அரிசி மாவு", s_name: "पिष्टानि", h_name: "चावल का आटा", e_name: "Rice Flour" },
            { id: 25, image_url: "assets/img/pooja/12.png", t_name: "சர்க்கரை", s_name: "शर्करा", h_name: "चीनी", e_name: "Sugar" },
            { id: 25, image_url: "assets/img/pooja/13.png", t_name: "வெள்ளை நூல்", s_name: "श्वेत सूत्र", h_name: "सफेद धागा", e_name: "White Thread" },
            { id: 25, image_url: "assets/img/pooja/14.png", t_name: "பிளவுஸ் துண்டுகள்", s_name: "चोलक पट", h_name: "ब्लाउज के टुकड़े", e_name: "Blouse Pieces" },
            { id: 25, image_url: "assets/img/pooja/15.png", t_name: "புடவை", s_name: "शाटिका", h_name: "साड़ी", e_name: "Saree" },
            { id: 25, image_url: "assets/img/pooja/16.png", t_name: "தர்பே", s_name: "दर्भ", h_name: "धरबे", e_name: "Dharbe" },
            { id: 25, image_url: "assets/img/pooja/17.png", t_name: "பாக்கு", s_name: "पूग", h_name: "सुपारी", e_name: "Betal Nuts" },
            { id: 25, image_url: "assets/img/pooja/18.png", t_name: "தீபம் எண்ணெய்", s_name: "", h_name: "दीपक का तेल", e_name: "Deepam Oil" },
            { id: 25, image_url: "assets/img/pooja/19.png", t_name: "காட்டன் திரி", s_name: "तूलिका", h_name: "कपास की ईंटें", e_name: "Cotton Wicks" },
            { id: 25, image_url: "assets/img/pooja/20.png", t_name: "சுற்று காட்டன்", s_name: "गोलाकार तूलिका", h_name: "कॉटन विक्स राउंड", e_name: "Round Cotton Wick" },
            { id: 25, image_url: "assets/img/pooja/21.png", t_name: "தீப்பெட்டி", s_name: "अग्निपेटिका", h_name: "दियासलाई", e_name: "Match Box" },
            { id: 25, image_url: "assets/img/pooja/22.png", t_name: "ஹோமா குச்சிகள்", s_name: "समिध", h_name: "होमा लाठी", e_name: "Homa Sticks" },
            { id: 25, image_url: "assets/img/pooja/23.png", t_name: "அரச சமிதா", s_name: "पवित्रक	समिध", h_name: "हराली समिधा", e_name: "Harali Samidha" },
            { id: 25, image_url: "assets/img/pooja/24.png", t_name: "நவகிரக சமிதா", s_name: "नवग्रह	समिध", h_name: "नवग्रह समिधा", e_name: "Navagraha Samidha" },
            { id: 25, image_url: "assets/img/pooja/25.png", t_name: "ஹவன் சப்ளைஸ்", s_name: "", h_name: "वह समगरी है", e_name: "Havan Samagri" },
            { id: 25, image_url: "assets/img/pooja/26.png", t_name: "நெல்பொரி", s_name: "", h_name: "बाल्ड हार", e_name: "Battada arallu" },
            { id: 25, image_url: "assets/img/pooja/27.png", t_name: "வெண் கடுகு", s_name: "श्वेतसर्षप", h_name: "सफेद सरसों", e_name: "White Mustard" },
            { id: 25, image_url: "assets/img/pooja/28.png", t_name: "நிறங்கள்", s_name: "वर्ण", h_name: "रंग", e_name: "Colors" },
            { id: 25, image_url: "assets/img/pooja/29.png", t_name: "அகல் விளக்கு", s_name: "मृत्तिकादीप", h_name: "मिट्टी का दीपक", e_name: "Clay Deepa" },
            { id: 25, image_url: "assets/img/pooja/30.png", t_name: "நதி நீர", s_name: "जाह्नवी	जल", h_name: "गंगा जल", e_name: "Ganga Jal" },
            { id: 25, image_url: "assets/img/pooja/31.png", t_name: "உலர்ந்த தேங்காய்", s_name: "शुष्कनारिकेल", h_name: "सूखा नारियल", e_name: "Dry Coconut" },
            { id: 25, image_url: "assets/img/pooja/32.png", t_name: "பசு சிறுநீர்", s_name: "गोमूत्र", h_name: "गोमूत्र", e_name: "Gomutra" },
            { id: 25, image_url: "assets/img/pooja/33.png", t_name: "வேட்டி", s_name: "", h_name: "धोती", e_name: "Dothi" },
            { id: 25, image_url: "assets/img/pooja/34.png", t_name: "பட்டு உடை", s_name: "कौशेयवस्त्र", h_name: "रेशमा एक कपड़ा है", e_name: "Reshme Vastra" },
            { id: 25, image_url: "assets/img/pooja/35.png", t_name: "சிவப்புதுண்டு", s_name: "रक्तवस्त्र", h_name: "रेडक्लोथ", e_name: "RedCloth" },
            { id: 25, image_url: "assets/img/pooja/36.png", t_name: "சந்தனம் பவுடர்", s_name: "गन्धयुति", h_name: "चंदन पाउडर	", e_name: "sandal powder" },
            { id: 25, image_url: "assets/img/pooja/37.png", t_name: "பூனல்", s_name: "उपवीतक", h_name: "धागा", e_name: "Janivar" },
            { id: 25, image_url: "assets/img/pooja/38.png", t_name: "கருப்பு எள்", s_name: "कृष्णतिल", h_name: "ब्लैक तक", e_name: "Black til" },
            { id: 25, image_url: "assets/img/pooja/39.png", t_name: "தொன்னை", s_name: "", h_name: "कटोर डोना प्लेट", e_name: "dhonne" },
            { id: 25, image_url: "assets/img/pooja/40.png", t_name: "வெற்றி வேர்", s_name: "खटिका", h_name: "", e_name: "Lavancha" },
            { id: 25, image_url: "assets/img/pooja/41.png", t_name: "தொன்னை தட்டுகள்", s_name: "", h_name: "कटोर	डोने प्लेट्स", e_name: "Donne Plates" },
            { id: 25, image_url: "assets/img/pooja/42.png", t_name: "நெய்", s_name: "हवनीय", h_name: "घी", e_name: "Ghee" },
            { id: 25, image_url: "assets/img/pooja/43.png", t_name: "விபூதி", s_name: "भस्मन्", h_name: "विभूति", e_name: "Vibhoothi" },
            { id: 25, image_url: "assets/img/pooja/44.png", t_name: "பன்னீர்", s_name: "पाटलपुष्पजल", h_name: "गुलाब जल", e_name: "Rose water" },
            { id: 25, image_url: "assets/img/pooja/45.png", t_name: "பெட்டி வெல்லம்", s_name: "ेटिकागुड", h_name: "बॉक्स गुड़", e_name: "Box Jaggery" },
            { id: 25, image_url: "assets/img/pooja/46.png", t_name: "ஹோமா குந்தா", s_name: "", h_name: "होमा कुंडा", e_name: "Homa Kunda" },
            { id: 25, image_url: "assets/img/pooja/47.png", t_name: "மஞ்சள் / ஹால்டி குச்சிகள்", s_name: "", h_name: "हारिद्र	हल्दी / हल्दी की छड़ें", e_name: "Turmeric/Haldi sticks" },
            { id: 25, image_url: "assets/img/pooja/48.png", t_name: "பேரீச்சம்பழம்", s_name: "काठिन", h_name: "खर्जुरा", e_name: "Karjura" },
            { id: 25, image_url: "assets/img/pooja/49.png", t_name: "கலப்பு பழங்கள்", s_name: "मिश्रफल", h_name: "मिश्रित फल", e_name: "Mixed Fruits" },
            { id: 25, image_url: "assets/img/pooja/50.png", t_name: "தளர்வான மலர்கள்", s_name: "पुष्प", h_name: "ढीले फूल", e_name: "Loose Flowers" },
            { id: 25, image_url: "assets/img/pooja/51.png", t_name: "மலர் மாலை", s_name: "मालिका", h_name: "फूल माला (माला)", e_name: "Flower Garland" },
            { id: 25, image_url: "assets/img/pooja/52.png", t_name: "தேங்காய்", s_name: "नारिकेल", h_name: "नारियल", e_name: "Coconuts" },
            { id: 25, image_url: "assets/img/pooja/53.png", t_name: "வெற்றிலை", s_name: "ताम्बूल", h_name: "बेताल पत्तियां", e_name: "Betal Leaves" },
            { id: 25, image_url: "assets/img/pooja/54.png", t_name: "பால்", s_name: "क्षीरम्", h_name: "दूध", e_name: "Milk" },
            { id: 25, image_url: "assets/img/pooja/55.png", t_name: "தயிர்", s_name: "दधि", h_name: "दही", e_name: "Curd" },
            { id: 25, image_url: "assets/img/pooja/56.png", t_name: "மா இலைகள்", s_name: "आम्रपत्र", h_name: "आम की पत्तियाँ", e_name: "Mango Leaves" },
            { id: 25, image_url: "assets/img/pooja/57.png", t_name: "வாழை இலைகள்", s_name: "कदलीपत्र", h_name: "केले के पत्ते", e_name: "Banana Leaves" },
            { id: 25, image_url: "assets/img/pooja/58.png", t_name: "வாழை மரங்கள்", s_name: "ऊरुस्तम्भा", h_name: "केले के पेड़", e_name: "Banana Trees" },
            { id: 25, image_url: "assets/img/pooja/59.png", t_name: "மூலிகை இலைகள்", s_name: "पत्त्रशाकतृण", h_name: "फ्लाई दुल्हन", e_name: "Machi Patri" },
            { id: 25, image_url: "assets/img/pooja/60.png", t_name: "பூசணிக்காய்", s_name: "कुष्माण्ड", h_name: "कद्दू", e_name: "Pumpkin" },
            { id: 25, image_url: "assets/img/pooja/61.png", t_name: "எலுமிச்சை", s_name: "जम्बीर", h_name: "नींबू", e_name: "Lemon" },
            { id: 25, image_url: "assets/img/pooja/62.png", t_name: "அறுகம்புல்", s_name: "शतग्रन्थि", h_name: "हरी घास", e_name: "Green Grass" },
            { id: 25, image_url: "assets/img/pooja/63.png", t_name: "வாழைபழம்", s_name: "कदली", h_name: "केला", e_name: "Banana" },
        ];
    }
    PoojaPage.prototype.ngOnInit = function () {
        this.alertService.developmentNote('To reduce app size images are hidden!');
    };
    PoojaPage.prototype.back = function () {
        this.navCtrl.navigateBack('cust-home');
    };
    PoojaPage.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    PoojaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pooja',
            template: __webpack_require__(/*! raw-loader!./pooja.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cust/spec-cat/pooja/pooja.page.html"),
            styles: [__webpack_require__(/*! ./pooja.page.scss */ "./src/app/pages/cust/spec-cat/pooja/pooja.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], PoojaPage);
    return PoojaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cust-spec-cat-pooja-pooja-module-es5.js.map