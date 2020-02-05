(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-start-start-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/start/start.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/start/start.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content  class=\"animated fadeIn login auth-page ion-padding\" color=\"darkblue\">\n  <div class=\"auth-content\">\n  <div  class=\"animated fadeInDown ion-text-center\">\n      <!-- <div class=\"logo\"></div> -->\n      <div>\n        <img src=\"assets/img/newlogov6.png\"/>\n      </div>\n      <ion-text color=\"gold fw500 text08\">Powered By</ion-text>\n      <div class=\"logo-pb\"></div>\n    </div>  \n</div>\n  <br><div class=\"text-center\"><ion-text class=\"fw600\">LOGIN AS</ion-text></div>\n <ion-button class=\"fw800 ion-margin\"  shape=\"round\" color=\"gold\" expand=\"full\" (click)=\"custLogin()\">\n    Home user\n  </ion-button>\n\n   <ion-button class=\"fw800 ion-margin\"  shape=\"round\" expand=\"full\"  color=\"gold\" (click)=\"corp('Under Development! We are working on it!')\">\n    Enterprise\n  </ion-button>\n<div class=\"text-center\">\n  <ion-text  class=\"fw600 ion-margin\" (click)=\"techLogin()\" color=\"gold\">\n    Technician\n  </ion-text>\n  <ion-text  class=\"fw600\" (click)=\"consLogin()\"color=\"gold\">\n    Consultant\n  </ion-text>\n</div>\n <!--  <div class=\"text-center\">\n    <ion-buttons>\n      <ion-button size=\"small\" shape=\"round\" color=\"secondary\" (click)=\"career()\" class=\"fw800\">\n        JOIN US?\n      </ion-button>\n    </ion-buttons>\n </div> -->\n<br>\n<!-- <ion-slides [options]=\"slideOptsOne\">\n     <ion-slide *ngFor=\"let s of sliderOne.slidesItems\">\n      <img src=\"assets/img/{{s.id}}.jpg\" class=\"footer-img\">\n      </ion-slide>\n  </ion-slides> -->\n<!-- <h5 class=\"text-center text08 fw600 tagline\">your one stop support & supply app partner</h5> -->\n<!-- <h1 class=\"text-center fw800\">Call us at 1800-258-6099</h1> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/start/start.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/start/start.module.ts ***!
  \*********************************************/
/*! exports provided: StartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageModule", function() { return StartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start.page */ "./src/app/pages/start/start.page.ts");







const routes = [
    {
        path: '',
        component: _start_page__WEBPACK_IMPORTED_MODULE_6__["StartPage"]
    }
];
let StartPageModule = class StartPageModule {
};
StartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_start_page__WEBPACK_IMPORTED_MODULE_6__["StartPage"]]
    })
], StartPageModule);



/***/ }),

/***/ "./src/app/pages/start/start.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/start/start.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".paz {\n  position: relative;\n  z-index: 10;\n}\n\n.pb {\n  font-weight: 600;\n  color: #7b7b7b;\n  margin-top: 5%;\n}\n\n.tagline {\n  text-transform: uppercase;\n  color: #ffad00;\n  margin: 0;\n}\n\nh1 {\n  text-transform: uppercase;\n  margin: 0;\n}\n\n.footer-img {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RhcnQvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXHN0YXJ0XFxzdGFydC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0YXJ0L3N0YXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ1BKOztBRFVBO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ1BEOztBRFVBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ1BKOztBRFVBO0VBQ0kseUJBQUE7RUFDQSxTQUFBO0FDUEo7O0FEVUE7RUFDSSxtQkFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RhcnQvc3RhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gOmhvc3Qge1xyXG4vLyAgICAgaW9uLWNvbnRlbnQge1xyXG4vLyAgICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLWRhcmspLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkpO1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xyXG4vLyAgICAgICAgIC0tYmFja2dyb3VuZDp3aGl0ZTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLnBheiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnBie1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0Y29sb3I6IzdiN2I3YjtcclxuXHRtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLnRhZ2xpbmV7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6I2ZmYWQwMDtcclxuICAgIG1hcmdpbjowO1xyXG59XHJcblxyXG5oMXtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW46MDtcclxufVxyXG5cclxuLmZvb3Rlci1pbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59IiwiLnBheiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5wYiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjN2I3YjdiO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLnRhZ2xpbmUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmYWQwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5oMSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMDtcbn1cblxuLmZvb3Rlci1pbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/start/start.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/start/start.page.ts ***!
  \*******************************************/
/*! exports provided: StartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPage", function() { return StartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");







let StartPage = class StartPage {
    constructor(navCtrl, menuCtrl, toastCtrl, alertCtrl, loadingCtrl, formBuilder, authService, storage, alertService) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.storage = storage;
        this.alertService = alertService;
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true,
            on: {
                beforeInit() {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
                    const overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: true,
                    };
                    swiper.params = Object.assign(swiper.params, overwriteParams);
                    swiper.params = Object.assign(swiper.originalParams, overwriteParams);
                },
                setTranslate() {
                    const swiper = this;
                    const { slides } = swiper;
                    for (let i = 0; i < slides.length; i += 1) {
                        const $slideEl = swiper.slides.eq(i);
                        const offset$$1 = $slideEl[0].swiperSlideOffset;
                        let tx = -offset$$1;
                        if (!swiper.params.virtualTranslate)
                            tx -= swiper.translate;
                        let ty = 0;
                        if (!swiper.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        const slideOpacity = swiper.params.fadeEffect.crossFade
                            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
                            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                        $slideEl
                            .css({
                            opacity: slideOpacity,
                        })
                            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
                    }
                },
                setTransition(duration) {
                    const swiper = this;
                    const { slides, $wrapperEl } = swiper;
                    slides.transition(duration);
                    if (swiper.params.virtualTranslate && duration !== 0) {
                        let eventTriggered = false;
                        slides.transitionEnd(() => {
                            if (eventTriggered)
                                return;
                            if (!swiper || swiper.destroyed)
                                return;
                            eventTriggered = true;
                            swiper.animating = false;
                            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                            for (let i = 0; i < triggerEvents.length; i += 1) {
                                $wrapperEl.trigger(triggerEvents[i]);
                            }
                        });
                    }
                },
            }
        };
        this.sliderOne =
            {
                isBeginningSlide: true,
                isEndSlide: false,
                slidesItems: [
                    // {id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9},
                    { id: 100 }
                    // ,{id: 101},{id: 102},{id: 103},{id: 104},{id: 105},{id: 106}
                ]
            };
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
    }
    custLogin() {
        this.userInfo = this.storage.getItem('user');
        console.log(this.userInfo);
        console.log(this.userInfo['__zone_symbol__value'].token);
        if (this.userInfo['__zone_symbol__state'] == true) {
            this.navCtrl.navigateRoot('cust-home');
        }
        else {
            this.navCtrl.navigateRoot('cust-login');
        }
    }
    techLogin() {
        this.navCtrl.navigateRoot('tech-login');
    }
    consLogin() {
        this.navCtrl.navigateRoot('cons-start');
    }
    // career(){
    //   this.navCtrl.navigateForward('slides');
    // }
    corp(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                animated: true,
                message: message,
                duration: 2000,
                position: 'middle',
                mode: 'ios',
                cssClass: "toastheight",
                color: 'darkblue',
            }).then(toast => {
                toast.present();
            });
        });
    }
};
StartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
StartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start',
        template: __webpack_require__(/*! raw-loader!./start.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/start/start.page.html"),
        styles: [__webpack_require__(/*! ./start.page.scss */ "./src/app/pages/start/start.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
], StartPage);



/***/ })

}]);
//# sourceMappingURL=pages-start-start-module-es2015.js.map