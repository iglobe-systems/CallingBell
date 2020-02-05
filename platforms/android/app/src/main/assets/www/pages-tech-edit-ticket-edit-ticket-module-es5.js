(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tech-edit-ticket-edit-ticket-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tech/edit-ticket/edit-ticket.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tech/edit-ticket/edit-ticket.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n        <div class=\"logo-in\"></div>\n     <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"logout()\" class=\"fw700\">\n        <ion-icon name=\"log-out\"></ion-icon>\n   \t\tLOGOUT\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n\n\t<h1 class=\"fw800 text-center text15\">CALL DETAILS</h1>\n\t<div *ngIf=\"ticket\">\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">ticket no</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.number}}</h4></ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">service issue</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.issue}}</h4></ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">customer name</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.customer}}</h4></ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">customer contact</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.contact}}</h4></ion-col>\n\t\t</ion-row>\n\t\t\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">service category</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.category}}</h4></ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col><h5 class=\"fw800\">service description</h5></ion-col>\n\t\t\t<ion-col><h4 class=\"fw800\">{{ticket.description}}</h4></ion-col>\n\t\t</ion-row>\n\n\t\t<form [formGroup]=\"onUpdateForm\" class=\"list-form ion-padding\" >\n\t\t\t<ion-row>\n\t\t\t\t<ion-col><h5 class=\"fw800\">service status</h5></ion-col>\n\t\t\t\t<ion-col><ion-select [(ngModel)]=\"s\" formControlName=\"status\" placeholder=\"{{ticket.status}}\">\n\t\t     \t\t\t <ion-select-option color=\"danger\" [value]=\"s\" *ngFor=\"let s of status\">{{s}}</ion-select-option>\n\t\t    \t\t\t</ion-select>\n\t\t    \t</ion-col>\n\t\t\t</ion-row>\n\n\t\t\t<ion-row>\n\t\t\t\t<ion-col><h5 class=\"fw800\">solution</h5></ion-col>\n\t\t\t\t<ion-col><ion-input color=\"danger\" class=\"fw800\" type=\"text\" formControlName=\"solution\"></ion-input>\n\t\t    \t</ion-col>\n\t\t\t</ion-row>\n\t\t</form>\n\t\t<br>\n\t\t<ion-button class=\"ion-margin\" shape=\"round\" expand=\"full\" color=\"dark\" (click)=\"updateTicket(ticket.id,ticket.number)\">UPDATE</ion-button>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tech/edit-ticket/edit-ticket.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/tech/edit-ticket/edit-ticket.module.ts ***!
  \**************************************************************/
/*! exports provided: EditTicketPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTicketPageModule", function() { return EditTicketPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_ticket_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-ticket.page */ "./src/app/pages/tech/edit-ticket/edit-ticket.page.ts");







var routes = [
    {
        path: '',
        component: _edit_ticket_page__WEBPACK_IMPORTED_MODULE_6__["EditTicketPage"]
    }
];
var EditTicketPageModule = /** @class */ (function () {
    function EditTicketPageModule() {
    }
    EditTicketPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_ticket_page__WEBPACK_IMPORTED_MODULE_6__["EditTicketPage"]]
        })
    ], EditTicketPageModule);
    return EditTicketPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tech/edit-ticket/edit-ticket.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/tech/edit-ticket/edit-ticket.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\n\nh4 {\n  color: red;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVjaC9lZGl0LXRpY2tldC9EOlxcUmlhelxcTmV3QVBLXFxOZXdBUEt2MC4xL3NyY1xcYXBwXFxwYWdlc1xcdGVjaFxcZWRpdC10aWNrZXRcXGVkaXQtdGlja2V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVjaC9lZGl0LXRpY2tldC9lZGl0LXRpY2tldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5QkFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxVQUFBO0VBQ0EsZUFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVjaC9lZGl0LXRpY2tldC9lZGl0LXRpY2tldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNXtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtc2l6ZTowLjhyZW07XHJcbn1cclxuXHJcbmg0e1xyXG5cdGNvbG9yOnJlZDtcclxuXHRmb250LXNpemU6IDEuMHJlbTtcclxufSIsImg1IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbmg0IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tech/edit-ticket/edit-ticket.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/tech/edit-ticket/edit-ticket.page.ts ***!
  \************************************************************/
/*! exports provided: EditTicketPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTicketPage", function() { return EditTicketPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");








var EditTicketPage = /** @class */ (function () {
    function EditTicketPage(route, authService, alertService, loadingCtrl, alertCtrl, navCtrl, formBuilder, router) {
        this.route = route;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    EditTicketPage.prototype.ngOnInit = function () {
        this.editTicket();
        this.onUpdateForm = this.formBuilder.group({
            'status': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([])],
            'solution': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([])]
        });
    };
    EditTicketPage.prototype.editTicket = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.ticket = _this.router.getCurrentNavigation().extras.state.t;
                var body = '';
                _this.authService.editTicket().subscribe(function (result) {
                    console.log(result);
                    _this.status = result['status'];
                    console.log(_this.status);
                });
            }
        });
    };
    EditTicketPage.prototype.updateTicket = function (id, number) {
        var _this = this;
        console.log(this.onUpdateForm.value);
        console.log(id, number);
        this.authService.updateTicket(id, number, this.onUpdateForm.value).subscribe(function (data) {
            console.log(data);
            if (data['response']) {
                _this.alertService.presentToast(data['message']);
                _this.navCtrl.navigateRoot('tech-home');
            }
            else {
                _this.alertService.presentToast(data['message']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    EditTicketPage.prototype.logout = function () {
        this.authService.techlogout();
        this.navCtrl.navigateRoot('/');
    };
    EditTicketPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    EditTicketPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-ticket',
            template: __webpack_require__(/*! raw-loader!./edit-ticket.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tech/edit-ticket/edit-ticket.page.html"),
            styles: [__webpack_require__(/*! ./edit-ticket.page.scss */ "./src/app/pages/tech/edit-ticket/edit-ticket.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditTicketPage);
    return EditTicketPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tech-edit-ticket-edit-ticket-module-es5.js.map