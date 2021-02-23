(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Obw":
/*!*************************************************!*\
  !*** ./src/app/core/services/sorter.service.ts ***!
  \*************************************************/
/*! exports provided: SorterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorterService", function() { return SorterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _property_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-resolver */ "Cbge");



class SorterService {
    constructor() {
        this.direction = 1;
    }
    sort(collection, prop, reverseSort = true) {
        this.property = prop;
        if (reverseSort) {
            this.direction = (this.property === prop) ? this.direction * -1 : 1;
        }
        return collection.sort((a, b) => {
            let aVal;
            let bVal;
            // Handle resolving complex properties such as 'state.name' for prop value
            if (prop && prop.indexOf('.') > -1) {
                aVal = _property_resolver__WEBPACK_IMPORTED_MODULE_1__["PropertyResolver"].resolve(prop, a);
                bVal = _property_resolver__WEBPACK_IMPORTED_MODULE_1__["PropertyResolver"].resolve(prop, b);
            }
            else {
                aVal = a[prop];
                bVal = b[prop];
            }
            // Fix issues that spaces before/after string value can cause such as ' San Francisco'
            if (this.isString(aVal)) {
                aVal = aVal.trim().toUpperCase();
            }
            if (this.isString(bVal)) {
                bVal = bVal.trim().toUpperCase();
            }
            if (aVal === bVal) {
                return 0;
            }
            else if (aVal > bVal) {
                return this.direction * -1;
            }
            else {
                return this.direction * 1;
            }
        });
    }
    isString(val) {
        return (val && (typeof val === 'string' || val instanceof String));
    }
}
SorterService.ɵfac = function SorterService_Factory(t) { return new (t || SorterService)(); };
SorterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SorterService, factory: SorterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SorterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "+qzk":
/*!*************************************************!*\
  !*** ./src/app/core/growler/growler.service.ts ***!
  \*************************************************/
/*! exports provided: GrowlerService, GrowlerMessageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlerService", function() { return GrowlerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlerMessageType", function() { return GrowlerMessageType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GrowlerService {
    constructor() { }
}
GrowlerService.ɵfac = function GrowlerService_Factory(t) { return new (t || GrowlerService)(); };
GrowlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GrowlerService, factory: GrowlerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GrowlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
var GrowlerMessageType;
(function (GrowlerMessageType) {
    GrowlerMessageType[GrowlerMessageType["Success"] = 0] = "Success";
    GrowlerMessageType[GrowlerMessageType["Danger"] = 1] = "Danger";
    GrowlerMessageType[GrowlerMessageType["Warning"] = 2] = "Warning";
    GrowlerMessageType[GrowlerMessageType["Info"] = 3] = "Info";
})(GrowlerMessageType || (GrowlerMessageType = {}));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/luan/prog-script/prog-script/trab01/src/main.ts */"zUnb");


/***/ }),

/***/ "3qkU":
/*!************************************************!*\
  !*** ./src/app/core/overlay/overlay.module.ts ***!
  \************************************************/
/*! exports provided: OverlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayModule", function() { return OverlayModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _overlay_request_response_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay-request-response.interceptor */ "l63a");
/* harmony import */ var _overlay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay.component */ "6/CY");
/* harmony import */ var _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ensure-module-loaded-once.guard */ "U8XA");







class OverlayModule extends _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_5__["EnsureModuleLoadedOnceGuard"] {
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(parentModule) {
        super(parentModule);
    }
}
OverlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OverlayModule });
OverlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OverlayModule_Factory(t) { return new (t || OverlayModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](OverlayModule, 12)); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _overlay_request_response_interceptor__WEBPACK_IMPORTED_MODULE_3__["OverlayRequestResponseInterceptor"],
            multi: true,
        }
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OverlayModule, { declarations: [_overlay_component__WEBPACK_IMPORTED_MODULE_4__["OverlayComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_overlay_component__WEBPACK_IMPORTED_MODULE_4__["OverlayComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverlayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_overlay_component__WEBPACK_IMPORTED_MODULE_4__["OverlayComponent"]],
                declarations: [_overlay_component__WEBPACK_IMPORTED_MODULE_4__["OverlayComponent"]],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _overlay_request_response_interceptor__WEBPACK_IMPORTED_MODULE_3__["OverlayRequestResponseInterceptor"],
                        multi: true,
                    }
                ]
            }]
    }], function () { return [{ type: OverlayModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "486g":
/*!****************************************************************!*\
  !*** ./src/app/shared/filter-textbox/filter-textbox.module.ts ***!
  \****************************************************************/
/*! exports provided: FilterTextboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTextboxModule", function() { return FilterTextboxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _filter_textbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-textbox.component */ "8LkR");





class FilterTextboxModule {
}
FilterTextboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FilterTextboxModule });
FilterTextboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FilterTextboxModule_Factory(t) { return new (t || FilterTextboxModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FilterTextboxModule, { declarations: [_filter_textbox_component__WEBPACK_IMPORTED_MODULE_3__["FilterTextboxComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [_filter_textbox_component__WEBPACK_IMPORTED_MODULE_3__["FilterTextboxComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterTextboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                exports: [_filter_textbox_component__WEBPACK_IMPORTED_MODULE_3__["FilterTextboxComponent"]],
                declarations: [_filter_textbox_component__WEBPACK_IMPORTED_MODULE_3__["FilterTextboxComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "6/CY":
/*!***************************************************!*\
  !*** ./src/app/core/overlay/overlay.component.ts ***!
  \***************************************************/
/*! exports provided: OverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayComponent", function() { return OverlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/event-bus.service */ "MpsQ");




const _c0 = ["*"];
class OverlayComponent {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.enabled = false;
        this.queue = [];
        this.timerId = null;
        this.timerHideId = null;
        this.delay = 500;
    }
    ngOnInit() {
        // Handle request
        this.httpRequestSub = this.eventBus.on(_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["Events"].httpRequest, (() => {
            this.queue.push({});
            if (this.queue.length === 1) {
                // Only show if we have an item in the queue after the delay time
                setTimeout(() => {
                    if (this.queue.length) {
                        this.enabled = true;
                    }
                }, this.delay);
            }
        }));
        // Handle response
        this.httpResponseSub = this.eventBus.on(_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["Events"].httpResponse, (() => {
            this.queue.pop();
            if (this.queue.length === 0) {
                // Since we don't know if another XHR request will be made, pause before
                // hiding the overlay. If another XHR request comes in then the overlay
                // will stay visible which prevents a flicker
                setTimeout(() => {
                    // Make sure queue is still 0 since a new XHR request may have come in
                    // while timer was running
                    if (this.queue.length === 0) {
                        this.enabled = false;
                    }
                }, this.delay);
            }
        }));
    }
    ngOnDestroy() {
        this.httpRequestSub.unsubscribe();
        this.httpResponseSub.unsubscribe();
    }
}
OverlayComponent.ɵfac = function OverlayComponent_Factory(t) { return new (t || OverlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["EventBusService"])); };
OverlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverlayComponent, selectors: [["cm-overlay"]], inputs: { delay: "delay" }, ngContentSelectors: _c0, decls: 4, vars: 2, consts: [[1, "overlay"], [1, "overlay-background"], [1, "overlay-content"]], template: function OverlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.enabled);
    } }, styles: [".overlay[_ngcontent-%COMP%] {\n  display:none;\n}\n\n.overlay.active[_ngcontent-%COMP%] {        \n  display: block;\n}\n\n.overlay-background[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: block;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  background-color:rgba(0,0,0,0.6);\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 999999;\n  top: 50%;\n  left: 50%;\n  background-color: white;\n  border: 1px solid rgb(94, 94, 94);\n  transform: translate(-50%, 0%);\n\n  cursor: pointer;\n  padding: 5;\n  width: 285px;\n  height: 100px;    \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 1s;        \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBOztBQUVBOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULHVCQUF1QjtFQUN2QixpQ0FBaUM7RUFFekIsOEJBQThCOztFQUV0QyxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFNdkIsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6Im92ZXJsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5IHtcbiAgZGlzcGxheTpub25lO1xufVxuXG4ub3ZlcmxheS5hY3RpdmUgeyAgICAgICAgXG4gIGRpc3BsYXk6IGJsb2NrO1xufSBcblxuLm92ZXJsYXktYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDUwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC42KTtcbn1cblxuLm92ZXJsYXktY29udGVudCB7XG5cbn1cblxuLm92ZXJsYXktY29udGVudCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTk5O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk0LCA5NCwgOTQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA1O1xuICB3aWR0aDogMjg1cHg7XG4gIGhlaWdodDogMTAwcHg7ICAgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG4gIFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAxczsgXG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7ICAgICAgICBcbn0gXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cm-overlay',
                templateUrl: './overlay.component.html',
                styleUrls: ['./overlay.component.css']
            }]
    }], function () { return [{ type: _services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["EventBusService"] }]; }, { delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "6W/I":
/*!****************************************************!*\
  !*** ./src/app/core/services/utilities.service.ts ***!
  \****************************************************/
/*! exports provided: UtilitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesService", function() { return UtilitiesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UtilitiesService {
    constructor(window) {
        this.window = window;
    }
    getApiUrl() {
        const port = this.getPort();
        return `${this.window.location.protocol}//${this.window.location.hostname}${port}`;
    }
    getPort() {
        const port = this.window.location.port;
        if (port) {
            // for running with Azure Functions local emulator
            if (port === '4200') {
                // Local run with 'npm run' also started in api folder for Azure Functions
                return ':7071'; // for debugging Azure Functions locally
            }
            // Running with local node (which serves Angular and the API)
            return ':' + this.window.location.port;
        }
        else {
            // for running locally with Docker/Kubernetes
            if (this.window.location.hostname === 'localhost') {
                return ':8080';
            }
        }
        return '';
    }
}
UtilitiesService.ɵfac = function UtilitiesService_Factory(t) { return new (t || UtilitiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('Window')); };
UtilitiesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilitiesService, factory: UtilitiesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilitiesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: Window, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['Window']
            }] }]; }, null); })();


/***/ }),

/***/ "7dP1":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities.service */ "6W/I");






class AuthService {
    constructor(http, utilitiesService) {
        this.http = http;
        this.utilitiesService = utilitiesService;
        this.baseUrl = this.utilitiesService.getApiUrl();
        this.authUrl = this.baseUrl + '/api/auth';
        this.isAuthenticated = false;
        this.authChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    userAuthChanged(status) {
        this.authChanged.emit(status); // Raise changed event
    }
    login(userLogin) {
        return this.http.post(this.authUrl + '/login', userLogin)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(loggedIn => {
            this.isAuthenticated = loggedIn;
            this.userAuthChanged(loggedIn);
            return loggedIn;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    logout() {
        return this.http.post(this.authUrl + '/logout', null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(loggedOut => {
            this.isAuthenticated = !loggedOut;
            this.userAuthChanged(!loggedOut); // Return loggedIn status
            return loggedOut;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errMessage);
            // return Observable.throw(err.text() || 'backend server error');
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error || 'Server error');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"] }]; }, { authChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "8LkR":
/*!*******************************************************************!*\
  !*** ./src/app/shared/filter-textbox/filter-textbox.component.ts ***!
  \*******************************************************************/
/*! exports provided: FilterTextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTextboxComponent", function() { return FilterTextboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class FilterTextboxComponent {
    constructor() {
        this.model = { filter: null };
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    filterChanged(event) {
        event.preventDefault();
        this.changed.emit(this.model.filter); // Raise changed event
    }
}
FilterTextboxComponent.ɵfac = function FilterTextboxComponent_Factory(t) { return new (t || FilterTextboxComponent)(); };
FilterTextboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterTextboxComponent, selectors: [["cm-filter-textbox"]], outputs: { changed: "changed" }, decls: 3, vars: 1, consts: [["type", "text", "name", "filter", 3, "ngModel", "ngModelChange", "keyup"]], template: function FilterTextboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Filter: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterTextboxComponent_Template_input_ngModelChange_2_listener($event) { return ctx.model.filter = $event; })("keyup", function FilterTextboxComponent_Template_input_keyup_2_listener($event) { return ctx.filterChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.filter);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["cm-filter-textbox[_ngcontent-%COMP%] {\n    margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci10ZXh0Ym94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6ImZpbHRlci10ZXh0Ym94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjbS1maWx0ZXItdGV4dGJveCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterTextboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cm-filter-textbox',
                templateUrl: './filter-textbox.component.html',
                styleUrls: ['./filter-textbox.component.css']
            }]
    }], null, { changed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "8uMJ":
/*!*****************************************************!*\
  !*** ./src/app/core/services/validation.service.ts ***!
  \*****************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
class ValidationService {
    static getValidatorErrorMessage(code) {
        const config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
        };
        return config[code];
    }
    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        // tslint:disable-next-line
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    }
    static emailValidator(control) {
        // RFC 2822 compliant regex
        // tslint:disable-next-line
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    }
    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        // (?!.*\s)          - Spaces are not allowed
        // tslint:disable-next-line
        if (control.value.match(/^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*])(?!.*\s).{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    }
}


/***/ }),

/***/ "9nld":
/*!*********************************************!*\
  !*** ./src/app/core/modal/modal.service.ts ***!
  \*********************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ModalService {
    constructor() { }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ "Cbge":
/*!****************************************************!*\
  !*** ./src/app/core/services/property-resolver.ts ***!
  \****************************************************/
/*! exports provided: PropertyResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyResolver", function() { return PropertyResolver; });
class PropertyResolver {
    static resolve(path, obj) {
        return path.split('.').reduce((prev, curr) => {
            return (prev ? prev[curr] : undefined);
        }, obj || self);
    }
}


/***/ }),

/***/ "Exvd":
/*!***********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.ts ***!
  \***********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PaginationComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_6_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const page_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.changePage(page_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.currentPage === page_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r1);
} }
class PaginationComponent {
    constructor() {
        this.pages = [];
        this.currentPage = 1;
        this.isVisible = false;
        this.previousEnabled = false;
        this.nextEnabled = true;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get pageSize() {
        return this.pagerPageSize;
    }
    set pageSize(size) {
        this.pagerPageSize = size;
        this.update();
    }
    get totalItems() {
        return this.pagerTotalItems;
    }
    set totalItems(itemCount) {
        this.pagerTotalItems = itemCount;
        this.update();
    }
    ngOnInit() {
    }
    update() {
        if (this.pagerTotalItems && this.pagerPageSize) {
            this.totalPages = Math.ceil(this.pagerTotalItems / this.pageSize);
            this.isVisible = true;
            if (this.totalItems >= this.pageSize) {
                for (let i = 1; i < this.totalPages + 1; i++) {
                    this.pages.push(i);
                }
            }
            return;
        }
        this.isVisible = false;
    }
    previousNext(direction, event) {
        let page = this.currentPage;
        if (direction === -1) {
            if (page > 1) {
                page--;
            }
        }
        else {
            if (page < this.totalPages) {
                page++;
            }
        }
        this.changePage(page, event);
    }
    changePage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (this.currentPage === page) {
            return;
        }
        this.currentPage = page;
        this.previousEnabled = this.currentPage > 1;
        this.nextEnabled = this.currentPage < this.totalPages;
        this.pageChanged.emit(page);
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["cm-pagination"]], inputs: { pageSize: "pageSize", totalItems: "totalItems" }, outputs: { pageChanged: "pageChanged" }, decls: 11, vars: 6, consts: [[3, "hidden"], [1, "pagination"], [3, "click"], ["aria-label", "Previous"], ["aria-hidden", "true"], [3, "active", "click", 4, "ngFor", "ngForOf"], ["aria-label", "Next"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_li_click_2_listener($event) { return ctx.previousNext(-1, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PaginationComponent_li_6_Template, 3, 3, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_li_click_7_listener($event) { return ctx.previousNext(1, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.previousEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.nextEnabled);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:focus, .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:hover {\n  background-color: #027FF4;\n  border-color: #027FF4;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VBTUUseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2luYXRpb24+LmFjdGl2ZT5hLCBcbi5wYWdpbmF0aW9uPi5hY3RpdmU+YTpmb2N1cywgXG4ucGFnaW5hdGlvbj4uYWN0aXZlPmE6aG92ZXIsIFxuLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuLCBcbi5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpmb2N1cywgXG4ucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3RkY0O1xuICBib3JkZXItY29sb3I6ICMwMjdGRjQ7XG59XG5cbi5wYWdpbmF0aW9uIGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cm-pagination',
                templateUrl: './pagination.component.html',
                styleUrls: ['./pagination.component.css']
            }]
    }], function () { return []; }, { pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "MPuK":
/*!**************************************************!*\
  !*** ./src/app/core/services/trackby.service.ts ***!
  \**************************************************/
/*! exports provided: TrackByService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackByService", function() { return TrackByService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TrackByService {
    customer(index, customer) {
        return customer.id;
    }
    order(index, order) {
        return index;
    }
}
TrackByService.ɵfac = function TrackByService_Factory(t) { return new (t || TrackByService)(); };
TrackByService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrackByService, factory: TrackByService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrackByService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "MpsQ":
/*!****************************************************!*\
  !*** ./src/app/core/services/event-bus.service.ts ***!
  \****************************************************/
/*! exports provided: EventBusService, EmitEvent, Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBusService", function() { return EventBusService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmitEvent", function() { return EmitEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




class EventBusService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    on(event, action) {
        return this.subject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((e) => {
            return e.name === event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((e) => {
            return e.value;
        }))
            .subscribe(action);
    }
    emit(event) {
        this.subject.next(event);
    }
}
EventBusService.ɵfac = function EventBusService_Factory(t) { return new (t || EventBusService)(); };
EventBusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventBusService, factory: EventBusService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventBusService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
class EmitEvent {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}
var Events;
(function (Events) {
    Events[Events["httpRequest"] = 0] = "httpRequest";
    Events[Events["httpResponse"] = 1] = "httpResponse";
})(Events || (Events = {}));


/***/ }),

/***/ "NLU1":
/*!***************************************************!*\
  !*** ./src/app/core/growler/growler.component.ts ***!
  \***************************************************/
/*! exports provided: GrowlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlerComponent", function() { return GrowlerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _growler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./growler.service */ "+qzk");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/logger.service */ "OsF4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a0) { return { active: a0 }; };
function GrowlerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const growl_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("growl alert ", growl_r1.messageType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, growl_r1.enabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](growl_r1.message);
} }
class GrowlerComponent {
    constructor(growlerService, logger) {
        this.growlerService = growlerService;
        this.logger = logger;
        this.growlCount = 0;
        this.growls = [];
        this.position = 'bottom-right';
        this.timeout = 3000;
        growlerService.growl = this.growl.bind(this);
    }
    ngOnInit() { }
    /**
    * Displays a growl message.
    *
    * @param {string} message - The message to display.
    * @param {GrowlMessageType} growlType - The type of message to display (a GrowlMessageType enumeration)
    * @return {number} id - Returns the ID for the generated growl
    */
    growl(message, growlType) {
        this.growlCount++;
        const bootstrapAlertType = _growler_service__WEBPACK_IMPORTED_MODULE_1__["GrowlerMessageType"][growlType].toLowerCase();
        const messageType = `alert-${bootstrapAlertType}`;
        const growl = new Growl(this.growlCount, message, messageType, this.timeout, this);
        this.growls.push(growl);
        return growl.id;
    }
    removeGrowl(id) {
        this.growls.forEach((growl, index) => {
            if (growl.id === id) {
                this.growls.splice(index, 1);
                this.growlCount--;
                this.logger.log('removed ' + id);
            }
        });
    }
}
GrowlerComponent.ɵfac = function GrowlerComponent_Factory(t) { return new (t || GrowlerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_growler_service__WEBPACK_IMPORTED_MODULE_1__["GrowlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"])); };
GrowlerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GrowlerComponent, selectors: [["cm-growler"]], inputs: { position: "position", timeout: "timeout" }, decls: 2, vars: 2, consts: [[1, "growler", 3, "ngClass"], [3, "ngClass", "class", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "growl-message"]], template: function GrowlerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GrowlerComponent_div_1_Template, 3, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.position);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.growls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".growler[_ngcontent-%COMP%] {\n      position: fixed;\n      z-index: 999999;\n    }\n    \n    .growler.close-button[_ngcontent-%COMP%]:focus {\n      outline: 0;\n    }\n    \n    .growler.top-left[_ngcontent-%COMP%] {\n      top: 12px;\n      left: 12px;\n    }\n    \n    .growler.top-right[_ngcontent-%COMP%] {\n      top: 12px;\n      right: 12px;\n    }\n    \n    .growler.bottom-right[_ngcontent-%COMP%] {\n      bottom: 12px;\n      right: 12px;\n    }\n    \n    .growler.bottom-left[_ngcontent-%COMP%] {\n      bottom: 12px;\n      left: 12px;\n    }\n    \n    .growler.top-center[_ngcontent-%COMP%] {\n      top: 12px;\n      left: 50%;\n      transform: translate(-50%, 0%);\n    }\n    \n    .growler.bottom-center[_ngcontent-%COMP%] {\n      bottom: 12px;\n      left: 50%;\n      transform: translate(-50%, 0%);\n    }\n    \n    .growl[_ngcontent-%COMP%] {\n      cursor: pointer;\n      padding: 5;\n      width: 285px;\n      height: 65px; \n      opacity: 0;      \n      display: flex;\n      align-items: center;\n      justify-content: center;\n      transition: opacity 1s;        \n    }\n    \n    .growl.active[_ngcontent-%COMP%] {        \n      opacity: 1;\n    }\n    \n    .growl-message[_ngcontent-%COMP%] {\n\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3dsZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiSUFBSTtNQUNFLGVBQWU7TUFDZixlQUFlO0lBQ2pCOztJQUVBO01BQ0UsVUFBVTtJQUNaOztJQUVBO01BQ0UsU0FBUztNQUNULFVBQVU7SUFDWjs7SUFFQTtNQUNFLFNBQVM7TUFDVCxXQUFXO0lBQ2I7O0lBRUE7TUFDRSxZQUFZO01BQ1osV0FBVztJQUNiOztJQUVBO01BQ0UsWUFBWTtNQUNaLFVBQVU7SUFDWjs7SUFFQTtNQUNFLFNBQVM7TUFDVCxTQUFTO01BRUQsOEJBQThCO0lBQ3hDOztJQUVBO01BQ0UsWUFBWTtNQUNaLFNBQVM7TUFFRCw4QkFBOEI7SUFDeEM7O0lBRUE7TUFDRSxlQUFlO01BQ2YsVUFBVTtNQUNWLFlBQVk7TUFDWixZQUFZO01BQ1osVUFBVTtNQUNWLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BS3ZCLHNCQUFzQjtJQUN4Qjs7SUFFQTtNQUNFLFVBQVU7SUFDWjs7SUFFQTs7SUFFQSIsImZpbGUiOiJncm93bGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLmdyb3dsZXIge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgei1pbmRleDogOTk5OTk5O1xuICAgIH1cbiAgICBcbiAgICAuZ3Jvd2xlci5jbG9zZS1idXR0b246Zm9jdXMge1xuICAgICAgb3V0bGluZTogMDtcbiAgICB9XG4gICAgXG4gICAgLmdyb3dsZXIudG9wLWxlZnQge1xuICAgICAgdG9wOiAxMnB4O1xuICAgICAgbGVmdDogMTJweDtcbiAgICB9XG4gICAgXG4gICAgLmdyb3dsZXIudG9wLXJpZ2h0IHtcbiAgICAgIHRvcDogMTJweDtcbiAgICAgIHJpZ2h0OiAxMnB4O1xuICAgIH1cbiAgICBcbiAgICAuZ3Jvd2xlci5ib3R0b20tcmlnaHQge1xuICAgICAgYm90dG9tOiAxMnB4O1xuICAgICAgcmlnaHQ6IDEycHg7XG4gICAgfVxuICAgIFxuICAgIC5ncm93bGVyLmJvdHRvbS1sZWZ0IHtcbiAgICAgIGJvdHRvbTogMTJweDtcbiAgICAgIGxlZnQ6IDEycHg7XG4gICAgfVxuICAgIFxuICAgIC5ncm93bGVyLnRvcC1jZW50ZXIge1xuICAgICAgdG9wOiAxMnB4O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICB9XG4gICAgXG4gICAgLmdyb3dsZXIuYm90dG9tLWNlbnRlciB7XG4gICAgICBib3R0b206IDEycHg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAgIH1cbiAgICBcbiAgICAuZ3Jvd2wge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogNTtcbiAgICAgIHdpZHRoOiAyODVweDtcbiAgICAgIGhlaWdodDogNjVweDsgXG4gICAgICBvcGFjaXR5OiAwOyAgICAgIFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIFxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzOyBcbiAgICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzOyAgICAgICAgXG4gICAgfSAgIFxuICAgIFxuICAgIC5ncm93bC5hY3RpdmUgeyAgICAgICAgXG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH0gXG4gICAgXG4gICAgLmdyb3dsLW1lc3NhZ2Uge1xuXG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GrowlerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cm-growler',
                template: `
    <div [ngClass]="position" class="growler">
      <div *ngFor="let growl of growls" [ngClass]="{active: growl.enabled}"
          class="growl alert {{ growl.messageType }}">
          <span class="growl-message">{{ growl.message }}</span>
      </div>
    </div>
  `,
                styleUrls: ['growler.component.css']
            }]
    }], function () { return [{ type: _growler_service__WEBPACK_IMPORTED_MODULE_1__["GrowlerService"] }, { type: _services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"] }]; }, { position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], timeout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class Growl {
    constructor(id, message, messageType, timeout, growlerContainer) {
        this.id = id;
        this.message = message;
        this.messageType = messageType;
        this.timeout = timeout;
        this.growlerContainer = growlerContainer;
        this.show();
    }
    show() {
        window.setTimeout(() => {
            this.enabled = true;
            this.setTimeout();
        }, 0);
    }
    setTimeout() {
        window.setTimeout(() => {
            this.hide();
        }, this.timeout);
    }
    hide() {
        this.enabled = false;
        window.setTimeout(() => {
            this.growlerContainer.removeGrowl(this.id);
        }, this.timeout);
    }
}


/***/ }),

/***/ "OsF4":
/*!*************************************************!*\
  !*** ./src/app/core/services/logger.service.ts ***!
  \*************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");



class LoggerService {
    constructor() { }
    log(msg) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            console.log(msg);
        }
        else {
            // AppInsights
        }
    }
    logError(msg) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            console.error(msg);
        }
        else {
            // AppInsights
        }
    }
}
LoggerService.ɵfac = function LoggerService_Factory(t) { return new (t || LoggerService)(); };
LoggerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoggerService, factory: LoggerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-textbox/filter-textbox.module */ "486g");
/* harmony import */ var _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination/pagination.module */ "XVPV");
/* harmony import */ var _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/capitalize.pipe */ "vTEt");
/* harmony import */ var _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/trim.pipe */ "ih87");
/* harmony import */ var _directives_sortby_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/sortby.directive */ "eXUG");









class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_3__["FilterTextboxModule"], _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_3__["FilterTextboxModule"], _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__["TrimPipe"], _directives_sortby_directive__WEBPACK_IMPORTED_MODULE_7__["SortByDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_3__["FilterTextboxModule"], _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__["TrimPipe"], _directives_sortby_directive__WEBPACK_IMPORTED_MODULE_7__["SortByDirective"], _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_3__["FilterTextboxModule"], _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_3__["FilterTextboxModule"], _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"]],
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__["TrimPipe"], _directives_sortby_directive__WEBPACK_IMPORTED_MODULE_7__["SortByDirective"], _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_3__["FilterTextboxModule"], _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"]],
                declarations: [_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__["TrimPipe"], _directives_sortby_directive__WEBPACK_IMPORTED_MODULE_7__["SortByDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "R2Se":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _growler_growler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../growler/growler.service */ "+qzk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "7dP1");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/logger.service */ "OsF4");







class NavbarComponent {
    constructor(router, authservice, growler, logger) {
        this.router = router;
        this.authservice = authservice;
        this.growler = growler;
        this.logger = logger;
        this.loginLogoutText = 'Login';
    }
    ngOnInit() {
        this.sub = this.authservice.authChanged
            .subscribe((loggedIn) => {
            this.setLoginLogoutText();
        }, (err) => this.logger.log(err));
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    loginOrOut() {
        const isAuthenticated = this.authservice.isAuthenticated;
        if (isAuthenticated) {
            this.authservice.logout()
                .subscribe((status) => {
                this.setLoginLogoutText();
                this.growler.growl('Logged Out', _growler_growler_service__WEBPACK_IMPORTED_MODULE_1__["GrowlerMessageType"].Info);
                this.router.navigate(['/customers']);
                return;
            }, (err) => this.logger.log(err));
        }
        this.redirectToLogin();
    }
    redirectToLogin() {
        this.router.navigate(['/login']);
    }
    setLoginLogoutText() {
        this.loginLogoutText = (this.authservice.isAuthenticated) ? 'Logout' : 'Login';
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_growler_growler_service__WEBPACK_IMPORTED_MODULE_1__["GrowlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["cm-navbar"]], decls: 27, vars: 2, consts: [[1, "navbar", "navbar-inner", "navbar-fixed-top"], [1, "container"], [1, "navbar-header"], ["type", "button", 1, "navbar-toggle", 3, "click"], [1, "sr-only"], [1, "icon-bar"], ["routerLink", "/customers", 1, "navbar-brand"], ["src", "assets/images/people.png", "alt", "logo"], [1, "app-title"], [1, "navbar-collapse"], [1, "nav", "navbar-nav", "nav-pills", "navBarPadding"], ["routerLinkActive", "active"], ["routerLink", "/customers"], ["routerLink", "/orders"], ["routerLink", "/about"], ["routerLinkActive", "active", "data-cy", "login-logout", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_3_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Toggle navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Customer Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_24_listener() { return ctx.loginOrOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-collapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loginLogoutText);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cm-navbar',
                templateUrl: './navbar.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _growler_growler_service__WEBPACK_IMPORTED_MODULE_1__["GrowlerService"] }, { type: _services_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"] }]; }, null); })();


/***/ }),

/***/ "S+vS":
/*!*************************************************!*\
  !*** ./src/app/core/services/dialog.service.ts ***!
  \*************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DialogService {
    constructor() {
        this.message = 'Is it OK?';
    }
    confirm(message) {
        if (message) {
            this.message = message;
        }
        this.promise = new Promise(this.resolver);
        return this.promise;
    }
    resolver(resolve) {
        return resolve(window.confirm('Is it OK?'));
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(); };
DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/navbar/navbar.component */ "R2Se");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_growler_growler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/growler/growler.component */ "NLU1");
/* harmony import */ var _core_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/modal/modal.component */ "vvOd");
/* harmony import */ var _core_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/overlay/overlay.component */ "6/CY");







class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["cm-app-component"]], decls: 10, vars: 0, consts: [[1, "container"], ["position", "top-right", "timeout", "2000"], ["delay", "300"], [1, "spinner"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cm-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "cm-growler", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "cm-modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "cm-overlay", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0\u00A0\u00A0Loading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    } }, directives: [_core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _core_growler_growler_component__WEBPACK_IMPORTED_MODULE_3__["GrowlerComponent"], _core_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], _core_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_5__["OverlayComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cm-app-component',
                templateUrl: './app.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "ThBV":
/*!************************************************!*\
  !*** ./src/app/core/growler/growler.module.ts ***!
  \************************************************/
/*! exports provided: GrowlerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlerModule", function() { return GrowlerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _growler_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./growler.component */ "NLU1");
/* harmony import */ var _growler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./growler.service */ "+qzk");
/* harmony import */ var _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ensure-module-loaded-once.guard */ "U8XA");






class GrowlerModule extends _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_4__["EnsureModuleLoadedOnceGuard"] {
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(parentModule) {
        super(parentModule);
    }
}
GrowlerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GrowlerModule });
GrowlerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GrowlerModule_Factory(t) { return new (t || GrowlerModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](GrowlerModule, 12)); }, providers: [_growler_service__WEBPACK_IMPORTED_MODULE_3__["GrowlerService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GrowlerModule, { declarations: [_growler_component__WEBPACK_IMPORTED_MODULE_2__["GrowlerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_growler_component__WEBPACK_IMPORTED_MODULE_2__["GrowlerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GrowlerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_growler_component__WEBPACK_IMPORTED_MODULE_2__["GrowlerComponent"]],
                providers: [_growler_service__WEBPACK_IMPORTED_MODULE_3__["GrowlerService"]],
                declarations: [_growler_component__WEBPACK_IMPORTED_MODULE_2__["GrowlerComponent"]]
            }]
    }], function () { return [{ type: GrowlerModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "U8XA":
/*!*********************************************************!*\
  !*** ./src/app/core/ensure-module-loaded-once.guard.ts ***!
  \*********************************************************/
/*! exports provided: EnsureModuleLoadedOnceGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureModuleLoadedOnceGuard", function() { return EnsureModuleLoadedOnceGuard; });
class EnsureModuleLoadedOnceGuard {
    constructor(targetModule) {
        if (targetModule) {
            throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
        }
    }
}


/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "vtpD");






class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"]],
                declarations: [_login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"].components]
            }]
    }], null, null); })();


/***/ }),

/***/ "XVPV":
/*!********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.module.ts ***!
  \********************************************************/
/*! exports provided: PaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.component */ "Exvd");




class PaginationModule {
}
PaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PaginationModule });
PaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PaginationModule_Factory(t) { return new (t || PaginationModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaginationModule, { declarations: [_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]],
                declarations: [_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.module */ "X3zk");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _login_login_module__WEBPACK_IMPORTED_MODULE_4__["LoginModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"] // Shared (multi-instance) objects
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _login_login_module__WEBPACK_IMPORTED_MODULE_4__["LoginModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"] // Shared (multi-instance) objects
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _login_login_module__WEBPACK_IMPORTED_MODULE_4__["LoginModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"] // Shared (multi-instance) objects
                ],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bEMC":
/*!*************************************************!*\
  !*** ./src/app/core/services/filter.service.ts ***!
  \*************************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_property_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/property-resolver */ "Cbge");



class FilterService {
    constructor() { }
    filter(items, data, props) {
        return items.filter((item) => {
            let match = false;
            for (const prop of props) {
                if (prop.indexOf('.') > -1) {
                    const value = _core_services_property_resolver__WEBPACK_IMPORTED_MODULE_1__["PropertyResolver"].resolve(prop, item);
                    if (value && value.toUpperCase().indexOf(data) > -1) {
                        match = true;
                        break;
                    }
                    continue;
                }
                if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                    match = true;
                    break;
                }
            }
            return match;
        });
    }
}
FilterService.ɵfac = function FilterService_Factory(t) { return new (t || FilterService)(); };
FilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilterService, factory: FilterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cplz":
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities.service */ "6W/I");






class DataService {
    constructor(http, utilitiesService) {
        this.http = http;
        this.utilitiesService = utilitiesService;
        this.baseUrl = this.utilitiesService.getApiUrl();
        this.customersBaseUrl = this.baseUrl + '/api/customers';
        this.ordersBaseUrl = this.baseUrl + '/api/orders';
    }
    getCustomersPage(page, pageSize) {
        return this.http.get(`${this.customersBaseUrl}/page/${page}/${pageSize}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            const totalRecords = +res.headers.get('X-InlineCount');
            const customers = res.body;
            this.calculateCustomersOrderTotal(customers);
            return {
                results: customers,
                totalRecords: totalRecords
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getCustomers() {
        return this.http.get(this.customersBaseUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(customers => {
            this.calculateCustomersOrderTotal(customers);
            return customers;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getCustomer(id) {
        return this.http.get(this.customersBaseUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(customer => {
            this.calculateCustomersOrderTotal([customer]);
            return customer;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    insertCustomer(customer) {
        return this.http.post(this.customersBaseUrl, customer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    updateCustomer(customer) {
        return this.http.put(this.customersBaseUrl + '/' + customer.id, customer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.status), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    deleteCustomer(id) {
        return this.http.delete(this.customersBaseUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.status), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getStates() {
        return this.http.get(this.baseUrl + '/api/states')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error || 'Node.js server error');
    }
    calculateCustomersOrderTotal(customers) {
        for (const customer of customers) {
            if (customer && customer.orders) {
                let total = 0;
                for (const order of customer.orders) {
                    total += order.itemCost;
                }
                customer.orderTotal = total;
            }
        }
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"] }]; }, null); })();


/***/ }),

/***/ "eXUG":
/*!*******************************************************!*\
  !*** ./src/app/shared/directives/sortby.directive.ts ***!
  \*******************************************************/
/*! exports provided: SortByDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByDirective", function() { return SortByDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SortByDirective {
    constructor() {
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set sortBy(value) {
        this.sortProperty = value;
    }
    onClick() {
        event.preventDefault();
        this.sorted.next(this.sortProperty); // Raise clicked event
    }
}
SortByDirective.ɵfac = function SortByDirective_Factory(t) { return new (t || SortByDirective)(); };
SortByDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SortByDirective, selectors: [["", "cmSortBy", ""]], hostBindings: function SortByDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SortByDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { sortBy: ["cmSortBy", "sortBy"] }, outputs: { sorted: "sorted" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortByDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cmSortBy]'
            }]
    }], function () { return []; }, { sorted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], sortBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cmSortBy']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "vtpD");





const routes = [
    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
];
class LoginRoutingModule {
}
LoginRoutingModule.components = [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]];
LoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "htiD":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthInterceptor {
    constructor() { }
    intercept(req, next) {
        // Get the auth header (fake value is shown here)
        const authHeader = '49a5kdkv409fd39'; // this.authService.getAuthHeader();
        const authReq = req.clone({ headers: req.headers.set('Authorization', authHeader) });
        return next.handle(authReq);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ih87":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/trim.pipe.ts ***!
  \*******************************************/
/*! exports provided: TrimPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipe", function() { return TrimPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TrimPipe {
    transform(value) {
        if (!value) {
            return '';
        }
        return value.trim();
    }
}
TrimPipe.ɵfac = function TrimPipe_Factory(t) { return new (t || TrimPipe)(); };
TrimPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "trim", type: TrimPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrimPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'trim' }]
    }], null, null); })();


/***/ }),

/***/ "l63a":
/*!**********************************************************************!*\
  !*** ./src/app/core/overlay/overlay-request-response.interceptor.ts ***!
  \**********************************************************************/
/*! exports provided: OverlayRequestResponseInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRequestResponseInterceptor", function() { return OverlayRequestResponseInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/event-bus.service */ "MpsQ");







class OverlayRequestResponseInterceptor {
    constructor(eventBus) {
        this.eventBus = eventBus;
    }
    intercept(req, next) {
        const randomTime = this.getRandomIntInclusive(0, 1500);
        const started = Date.now();
        this.eventBus.emit(new _services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["EmitEvent"](_services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["Events"].httpRequest));
        return next
            .handle(req)
            .pipe(
        // delay(randomTime),  // Simulate random Http call delays
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(event => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                const elapsed = Date.now() - started;
                this.eventBus.emit(new _services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["EmitEvent"](_services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["Events"].httpResponse));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            this.eventBus.emit(new _services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["EmitEvent"](_services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["Events"].httpResponse));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }));
    }
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
    }
}
OverlayRequestResponseInterceptor.ɵfac = function OverlayRequestResponseInterceptor_Factory(t) { return new (t || OverlayRequestResponseInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["EventBusService"])); };
OverlayRequestResponseInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OverlayRequestResponseInterceptor, factory: OverlayRequestResponseInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverlayRequestResponseInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["EventBusService"] }]; }, null); })();


/***/ }),

/***/ "onj/":
/*!*************************************************************!*\
  !*** ./src/app/core/strategies/preload-modules.strategy.ts ***!
  \*************************************************************/
/*! exports provided: PreloadModulesStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloadModulesStrategy", function() { return PreloadModulesStrategy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/logger.service */ "OsF4");
// Preloading example from https://angular.io/docs/ts/latest/guide/router.html#!#custom-preloading




class PreloadModulesStrategy {
    constructor(logger) {
        this.logger = logger;
    }
    preload(route, load) {
        if (route.data && route.data['preload']) {
            this.logger.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
    }
}
PreloadModulesStrategy.ɵfac = function PreloadModulesStrategy_Factory(t) { return new (t || PreloadModulesStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"])); };
PreloadModulesStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PreloadModulesStrategy, factory: PreloadModulesStrategy.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreloadModulesStrategy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"] }]; }, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _growler_growler_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./growler/growler.module */ "ThBV");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/modal.module */ "zJZ8");
/* harmony import */ var _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overlay/overlay.module */ "3qkU");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/data.service */ "cplz");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "R2Se");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/filter.service */ "bEMC");
/* harmony import */ var _services_sorter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/sorter.service */ "+Obw");
/* harmony import */ var _services_trackby_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/trackby.service */ "MPuK");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/dialog.service */ "S+vS");
/* harmony import */ var _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ensure-module-loaded-once.guard */ "U8XA");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ "7dP1");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/event-bus.service */ "MpsQ");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ "htiD");


















class CoreModule extends _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_13__["EnsureModuleLoadedOnceGuard"] {
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(parentModule) {
        super(parentModule);
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12)); }, providers: [_services_sorter_service__WEBPACK_IMPORTED_MODULE_10__["SorterService"], _services_filter_service__WEBPACK_IMPORTED_MODULE_9__["FilterService"], _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _services_trackby_service__WEBPACK_IMPORTED_MODULE_11__["TrackByService"],
        _services_dialog_service__WEBPACK_IMPORTED_MODULE_12__["DialogService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _services_event_bus_service__WEBPACK_IMPORTED_MODULE_15__["EventBusService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"],
            multi: true,
        },
        { provide: 'Window', useFactory: () => window }
    ] // these should be singleton
    , imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _growler_growler_module__WEBPACK_IMPORTED_MODULE_4__["GrowlerModule"], _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__["ModalModule"], _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"]], _growler_growler_module__WEBPACK_IMPORTED_MODULE_4__["GrowlerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__["ModalModule"], _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _growler_growler_module__WEBPACK_IMPORTED_MODULE_4__["GrowlerModule"], _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__["ModalModule"], _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"]], exports: [_growler_growler_module__WEBPACK_IMPORTED_MODULE_4__["GrowlerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__["ModalModule"], _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _growler_growler_module__WEBPACK_IMPORTED_MODULE_4__["GrowlerModule"], _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__["ModalModule"], _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"]],
                exports: [_growler_growler_module__WEBPACK_IMPORTED_MODULE_4__["GrowlerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__["ModalModule"], _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"]],
                declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"]],
                providers: [_services_sorter_service__WEBPACK_IMPORTED_MODULE_10__["SorterService"], _services_filter_service__WEBPACK_IMPORTED_MODULE_9__["FilterService"], _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _services_trackby_service__WEBPACK_IMPORTED_MODULE_11__["TrackByService"],
                    _services_dialog_service__WEBPACK_IMPORTED_MODULE_12__["DialogService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _services_event_bus_service__WEBPACK_IMPORTED_MODULE_15__["EventBusService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"],
                        multi: true,
                    },
                    { provide: 'Window', useFactory: () => window }
                ] // these should be singleton
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "vTEt":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CapitalizePipe {
    transform(value) {
        return typeof value === 'string' && value.charAt(0).toUpperCase() + value.slice(1) || value;
    }
}
CapitalizePipe.ɵfac = function CapitalizePipe_Factory(t) { return new (t || CapitalizePipe)(); };
CapitalizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "capitalize", type: CapitalizePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CapitalizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'capitalize' }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_strategies_preload_modules_strategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/strategies/preload-modules.strategy */ "onj/");





const app_routes = [
    { path: '', pathMatch: 'full', redirectTo: '/customers' },
    { path: 'customers/:id', data: { preload: true }, loadChildren: () => Promise.all(/*! import() | customer-customer-module */[__webpack_require__.e("default~customer-customer-module~customers-customers-module"), __webpack_require__.e("customer-customer-module")]).then(__webpack_require__.bind(null, /*! ./customer/customer.module */ "d7gL")).then(m => m.CustomerModule) },
    { path: 'customers', loadChildren: () => Promise.all(/*! import() | customers-customers-module */[__webpack_require__.e("default~customer-customer-module~customers-customers-module"), __webpack_require__.e("customers-customers-module")]).then(__webpack_require__.bind(null, /*! ./customers/customers.module */ "vfUp")).then(m => m.CustomersModule) },
    { path: 'orders', data: { preload: true }, loadChildren: () => __webpack_require__.e(/*! import() | orders-orders-module */ "orders-orders-module").then(__webpack_require__.bind(null, /*! ./orders/orders.module */ "h9W5")).then(m => m.OrdersModule) },
    { path: 'about', loadChildren: () => __webpack_require__.e(/*! import() | about-about-module */ "about-about-module").then(__webpack_require__.bind(null, /*! ./about/about.module */ "FQ1g")).then(m => m.AboutModule) },
    { path: '**', pathMatch: 'full', redirectTo: '/customers' } // catch any unfound routes and redirect to home page
    // NOTE: If you're using Angular 7 or lower you'll lazy loads routes the following way
    // { path: 'customers/:id', data: { preload: true }, loadChildren: 'app/customer/customer.module#CustomerModule' },
    // { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule' },
    // { path: 'orders', data: { preload: true }, loadChildren: 'app/orders/orders.module#OrdersModule' },
    // { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [_core_strategies_preload_modules_strategy__WEBPACK_IMPORTED_MODULE_2__["PreloadModulesStrategy"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(app_routes, { preloadingStrategy: _core_strategies_preload_modules_strategy__WEBPACK_IMPORTED_MODULE_2__["PreloadModulesStrategy"], relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(app_routes, { preloadingStrategy: _core_strategies_preload_modules_strategy__WEBPACK_IMPORTED_MODULE_2__["PreloadModulesStrategy"], relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [_core_strategies_preload_modules_strategy__WEBPACK_IMPORTED_MODULE_2__["PreloadModulesStrategy"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/validation.service */ "8uMJ");
/* harmony import */ var _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/growler/growler.service */ "+qzk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/auth.service */ "7dP1");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/logger.service */ "OsF4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");











function LoginComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0Error: ", ctx_r0.errorMessage, " ");
} }
class LoginComponent {
    constructor(formBuilder, router, authService, growler, logger) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.growler = growler;
        this.logger = logger;
    }
    ngOnInit() {
        this.buildForm();
    }
    buildForm() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _core_services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].emailValidator]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _core_services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].passwordValidator]]
        });
    }
    submit({ value, valid }) {
        this.authService.login(value)
            .subscribe((status) => {
            if (status) {
                this.growler.growl('Logged in', _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_3__["GrowlerMessageType"].Info);
                if (this.authService.redirectUrl) {
                    const redirectUrl = this.authService.redirectUrl;
                    this.authService.redirectUrl = '';
                    this.router.navigate([redirectUrl]);
                }
                else {
                    this.router.navigate(['/customers']);
                }
            }
            else {
                const loginError = 'Unable to login';
                this.errorMessage = loginError;
                this.growler.growl(loginError, _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_3__["GrowlerMessageType"].Danger);
            }
        }, (err) => this.logger.log(err));
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_growler_growler_service__WEBPACK_IMPORTED_MODULE_3__["GrowlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["cm-login"]], decls: 33, vars: 5, consts: [[1, "view"], [1, "container"], [1, "glyphicon", "glyphicon-lock"], ["novalidate", "", 1, "login-form", 3, "formGroup", "ngSubmit"], [1, "login"], [1, "row"], [1, "col-md-2"], [1, "col-md-10"], ["type", "email", "name", "email", "formControlName", "email", 1, "form-control"], ["data-cy", "email-error", 1, "alert", "alert-danger", 3, "hidden"], ["type", "password", "name", "password", "formControlName", "password", 1, "form-control"], ["data-cy", "password-error", 1, "alert", "alert-danger", 3, "hidden"], [1, "col-md-12"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "statusRow"], ["class", "label label-important", 4, "ngIf"], [1, "label", "label-important"], [1, "glyphicon", "glyphicon-thumbs-down", "icon-white"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(ctx.loginForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " A valid email address is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Digite um password (6 caracteres ou mais e pelo menos um n\u00FAmero) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, LoginComponent_div_32_Template, 3, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loginForm.controls.email.untouched || ctx.loginForm.controls.email.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loginForm.controls.password.untouched || ctx.loginForm.controls.password.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".login-form[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   input[type='email'][_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   input[type='password'][_ngcontent-%COMP%] {\n    width:75%;\n}\n\n.login-form[_ngcontent-%COMP%]   .ng-invalid[_ngcontent-%COMP%] {\n  border-left: 5px solid #a94442;\n}\n\n.login-form[_ngcontent-%COMP%]   .ng-valid[_ngcontent-%COMP%] {\n  border-left: 5px solid #42A948;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztJQUdJLFNBQVM7QUFDYjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT0ndGV4dCddLCBcbi5sb2dpbi1mb3JtIGlucHV0W3R5cGU9J2VtYWlsJ10sXG4ubG9naW4tZm9ybSBpbnB1dFt0eXBlPSdwYXNzd29yZCddIHtcbiAgICB3aWR0aDo3NSU7XG59XG5cbi5sb2dpbi1mb3JtIC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xufVxuXG4ubG9naW4tZm9ybSAubmctdmFsaWQge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cm-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_3__["GrowlerService"] }, { type: _core_services_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] }]; }, null); })();


/***/ }),

/***/ "vvOd":
/*!***********************************************!*\
  !*** ./src/app/core/modal/modal.component.ts ***!
  \***********************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.service */ "9nld");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ModalComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.modalContent.cancelButtonText);
} }
const _c0 = function (a0) { return { "in": a0 }; };
const _c1 = function (a0, a1) { return { "display": a0, "opacity": a1 }; };
class ModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.modalVisible = false;
        this.modalVisibleAnimate = false;
        this.modalContent = {};
        this.defaultModalContent = {
            header: 'Please Confirm',
            body: 'Are you sure you want to continue?',
            cancelButtonText: 'Cancel',
            OKButtonText: 'OK',
            cancelButtonVisible: true
        };
        modalService.show = this.show.bind(this);
        modalService.hide = this.hide.bind(this);
    }
    ngOnInit() {
    }
    show(modalContent) {
        this.modalContent = Object.assign(this.defaultModalContent, modalContent);
        this.modalVisible = true;
        setTimeout(() => this.modalVisibleAnimate = true);
        const promise = new Promise((resolve, reject) => {
            this.cancel = () => {
                this.hide();
                resolve(false);
            };
            this.ok = () => {
                this.hide();
                resolve(true);
            };
        });
        return promise;
    }
    hide() {
        this.modalVisibleAnimate = false;
        setTimeout(() => this.modalVisible = false, 300);
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["cm-modal"]], decls: 15, vars: 11, consts: [["tabindex", "-1", 1, "modal", "fade", 3, "ngClass", "ngStyle"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-title"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "class", "btn btn-default", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-default", 3, "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_4_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ModalComponent_button_12_Template, 2, 1, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_13_listener() { return ctx.ok(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.modalVisibleAnimate))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c1, ctx.modalVisible ? "block" : "none", ctx.modalVisibleAnimate ? 1 : 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modalContent.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.modalContent.body, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalContent.cancelButtonVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modalContent.OKButtonText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".modal[_ngcontent-%COMP%] {\n  background: rgba(0,0,0,0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cm-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.css']
            }]
    }], function () { return [{ type: _modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"] }]; }, null); })();


/***/ }),

/***/ "zJZ8":
/*!********************************************!*\
  !*** ./src/app/core/modal/modal.module.ts ***!
  \********************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.component */ "vvOd");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.service */ "9nld");
/* harmony import */ var _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ensure-module-loaded-once.guard */ "U8XA");






class ModalModule extends _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_4__["EnsureModuleLoadedOnceGuard"] {
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(parentModule) {
        super(parentModule);
    }
}
ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ModalModule });
ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ModalModule_Factory(t) { return new (t || ModalModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ModalModule, 12)); }, providers: [_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalModule, { declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]],
                declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]],
                providers: [_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]]
            }]
    }], function () { return [{ type: ModalModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map