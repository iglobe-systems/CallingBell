(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tech-closed-ticket-detail-closed-ticket-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tech/closed-ticket-detail/closed-ticket-detail.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tech/closed-ticket-detail/closed-ticket-detail.page.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n        <div class=\"logo-in\"></div>\n     <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"logout()\" class=\"fw700\">\n        <ion-icon name=\"log-out\"></ion-icon>\n   \t\tLOGOUT\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\" color=\"light\">\n\n\t<h1 class=\"fw800 text-center text15\">CALL DETAILS</h1>\n\t<div *ngIf=\"ticket\">\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">ticket no</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.number}}</h4></ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">service issue</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.issue}}</h4></ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">customer name</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.customer}}</h4></ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">customer contact</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.contact}}</h4></ion-col>\n\t\t</ion-row>\n\t\t\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">ticket status</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800 text15\">{{ticket.status}}</h4></ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">service category</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.category}}</h4></ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">service description</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.description}}</h4></ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">solution</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.solution}}</h4></ion-col>\n\t\t</ion-row>\n\t\t<br>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tech/closed-ticket-detail/closed-ticket-detail.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/tech/closed-ticket-detail/closed-ticket-detail.module.ts ***!
  \********************************************************************************/
/*! exports provided: ClosedTicketDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedTicketDetailPageModule", function() { return ClosedTicketDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _closed_ticket_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./closed-ticket-detail.page */ "./src/app/pages/tech/closed-ticket-detail/closed-ticket-detail.page.ts");







var routes = [
    {
        path: '',
        component: _closed_ticket_detail_page__WEBPACK_IMPORTED_MODULE_6__["ClosedTicketDetailPage"]
    }
];
var ClosedTicketDetailPageModule = /** @class */ (function () {
    function ClosedTicketDetailPageModule() {
    }
    ClosedTicketDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_closed_ticket_detail_page__WEBPACK_IMPORTED_MODULE_6__["ClosedTicketDetailPage"]]
        })
    ], ClosedTicketDetailPageModule);
    return ClosedTicketDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tech/closed-ticket-detail/closed-ticket-detail.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/tech/closed-ticket-detail/closed-ticket-detail.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\n\nh4 {\n  color: red;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVjaC9jbG9zZWQtdGlja2V0LWRldGFpbC9EOlxcUmlhelxcTmV3QVBLXFxOZXdBUEt2MC4xL3NyY1xcYXBwXFxwYWdlc1xcdGVjaFxcY2xvc2VkLXRpY2tldC1kZXRhaWxcXGNsb3NlZC10aWNrZXQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVjaC9jbG9zZWQtdGlja2V0LWRldGFpbC9jbG9zZWQtdGlja2V0LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5QkFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxVQUFBO0VBQ0EsZUFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVjaC9jbG9zZWQtdGlja2V0LWRldGFpbC9jbG9zZWQtdGlja2V0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNXtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtc2l6ZTowLjhyZW07XHJcbn1cclxuXHJcbmg0e1xyXG5cdGNvbG9yOnJlZDtcclxuXHRmb250LXNpemU6IDEuMHJlbTtcclxufSIsImg1IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbmg0IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tech/closed-ticket-detail/closed-ticket-detail.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tech/closed-ticket-detail/closed-ticket-detail.page.ts ***!
  \******************************************************************************/
/*! exports provided: ClosedTicketDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedTicketDetailPage", function() { return ClosedTicketDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");







var ClosedTicketDetailPage = /** @class */ (function () {
    function ClosedTicketDetailPage(route, authService, alertService, loadingCtrl, alertCtrl, navCtrl, router) {
        this.route = route;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.router = router;
    }
    ClosedTicketDetailPage.prototype.ngOnInit = function () {
        this.viewTicket();
    };
    ClosedTicketDetailPage.prototype.viewTicket = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.id = _this.router.getCurrentNavigation().extras.state.t.id;
                var body = '';
                _this.authService.viewTicket(_this.id, body).subscribe(function (result) {
                    console.log(result);
                    _this.ticket = result['message'][0];
                    console.log(_this.ticket);
                });
            }
        });
    };
    ClosedTicketDetailPage.prototype.logout = function () {
        this.authService.techlogout();
        this.navCtrl.navigateRoot('/');
    };
    ClosedTicketDetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ClosedTicketDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-closed-ticket-detail',
            template: __webpack_require__(/*! raw-loader!./closed-ticket-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tech/closed-ticket-detail/closed-ticket-detail.page.html"),
            styles: [__webpack_require__(/*! ./closed-ticket-detail.page.scss */ "./src/app/pages/tech/closed-ticket-detail/closed-ticket-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ClosedTicketDetailPage);
    return ClosedTicketDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tech-closed-ticket-detail-closed-ticket-detail-module-es5.js.map