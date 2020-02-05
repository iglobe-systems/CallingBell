(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tech-ticket-detail-ticket-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tech/ticket-detail/ticket-detail.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tech/ticket-detail/ticket-detail.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n        <div class=\"logo-in\"></div>\n     <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"logout()\" class=\"fw700\">\n        <ion-icon name=\"log-out\"></ion-icon>\n   \t\tLOGOUT\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\" color=\"light\">\n\n\t<h1 class=\"fw800 text-center text15\">CALL DETAILS</h1>\n\t<div *ngIf=\"ticket\">\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">ticket no</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.number}}</h4></ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">service issue</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.issue}}</h4></ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">customer name</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.customer}}</h4></ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">customer contact</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.contact}}</h4></ion-col>\n\t\t</ion-row>\n\t\t\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">ticket status</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800 text15\">{{ticket.status}}</h4></ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">service category</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.category}}</h4></ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">service description</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.description}}</h4></ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">solution</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.solution}}</h4></ion-col>\n\t\t</ion-row>\n\t\t<br>\n\t\t<ion-button class=\"ion-margin\" shape=\"round\" expand=\"full\" color=\"dark\" (click)=\"editTicket(ticket)\">EDIT TICKET</ion-button>\n\t\t<ion-button class=\"ion-margin\" shape=\"round\" expand=\"full\" color=\"dark\" (click)=\"prodEstimate()\">PRODUCTS ESTIMATE</ion-button>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tech/ticket-detail/ticket-detail.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/tech/ticket-detail/ticket-detail.module.ts ***!
  \******************************************************************/
/*! exports provided: TicketDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailPageModule", function() { return TicketDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ticket_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticket-detail.page */ "./src/app/pages/tech/ticket-detail/ticket-detail.page.ts");







const routes = [
    {
        path: '',
        component: _ticket_detail_page__WEBPACK_IMPORTED_MODULE_6__["TicketDetailPage"]
    }
];
let TicketDetailPageModule = class TicketDetailPageModule {
};
TicketDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ticket_detail_page__WEBPACK_IMPORTED_MODULE_6__["TicketDetailPage"]]
    })
], TicketDetailPageModule);



/***/ }),

/***/ "./src/app/pages/tech/ticket-detail/ticket-detail.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/tech/ticket-detail/ticket-detail.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\n\nh4 {\n  color: red;\n  font-size: 1rem;\n}\n\n.text15 {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVjaC90aWNrZXQtZGV0YWlsL0Q6XFxSaWF6XFxOZXdBUEtcXE5ld0FQS3YwLjEvc3JjXFxhcHBcXHBhZ2VzXFx0ZWNoXFx0aWNrZXQtZGV0YWlsXFx0aWNrZXQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVjaC90aWNrZXQtZGV0YWlsL3RpY2tldC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MseUJBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREVBO0VBQ0MsVUFBQTtFQUNBLGVBQUE7QUNDRDs7QURFQTtFQUNDLHlCQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZWNoL3RpY2tldC1kZXRhaWwvdGlja2V0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNXtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtc2l6ZTowLjhyZW07XHJcbn1cclxuXHJcbmg0e1xyXG5cdGNvbG9yOnJlZDtcclxuXHRmb250LXNpemU6IDEuMHJlbTtcclxufVxyXG5cclxuLnRleHQxNXtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59IiwiaDUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuaDQge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi50ZXh0MTUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tech/ticket-detail/ticket-detail.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/tech/ticket-detail/ticket-detail.page.ts ***!
  \****************************************************************/
/*! exports provided: TicketDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailPage", function() { return TicketDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");







let TicketDetailPage = class TicketDetailPage {
    constructor(route, authService, alertService, loadingCtrl, alertCtrl, navCtrl, router) {
        this.route = route;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.router = router;
    }
    ngOnInit() {
        this.viewTicket();
    }
    viewTicket() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.id = this.router.getCurrentNavigation().extras.state.t.id;
                var body = '';
                this.authService.viewTicket(this.id, body).subscribe(result => {
                    console.log(result);
                    this.ticket = result['message'][0];
                    console.log(this.ticket);
                });
            }
        });
    }
    prodEstimate() {
        this.navCtrl.navigateForward('supply-estimate');
    }
    editTicket(t) {
        let navigationExtras = {
            state: {
                t: t
            }
        };
        this.router.navigate(['edit-ticket'], navigationExtras);
        console.log(t);
    }
    logout() {
        this.authService.techlogout();
        this.navCtrl.navigateRoot('/');
    }
};
TicketDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TicketDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ticket-detail',
        template: __webpack_require__(/*! raw-loader!./ticket-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tech/ticket-detail/ticket-detail.page.html"),
        styles: [__webpack_require__(/*! ./ticket-detail.page.scss */ "./src/app/pages/tech/ticket-detail/ticket-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TicketDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-tech-ticket-detail-ticket-detail-module-es2015.js.map