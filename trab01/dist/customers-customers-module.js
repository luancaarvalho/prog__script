(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-customers-module"],{

/***/ "4yXv":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/data.service */ "cplz");
/* harmony import */ var _core_services_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/filter.service */ "bEMC");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/logger.service */ "OsF4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/filter-textbox/filter-textbox.component */ "8LkR");
/* harmony import */ var _customers_card_customers_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customers-card/customers-card.component */ "s/0G");
/* harmony import */ var _customers_grid_customers_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customers-grid/customers-grid.component */ "ECa1");
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/pagination/pagination.component */ "Exvd");











const _c0 = ["mapsContainer"];
class CustomersComponent {
    constructor(componentFactoryResolver, dataService, filterService, logger) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.dataService = dataService;
        this.filterService = filterService;
        this.logger = logger;
        this.customers = [];
        this.displayModeEnum = DisplayModeEnum;
        this.totalRecords = 0;
        this.pageSize = 10;
        this._filteredCustomers = [];
    }
    get filteredCustomers() {
        return this._filteredCustomers;
    }
    set filteredCustomers(value) {
        this._filteredCustomers = value;
        this.updateMapComponentDataPoints();
    }
    ngOnInit() {
        this.title = 'Customers';
        this.filterText = 'Filter Customers:';
        this.displayMode = DisplayModeEnum.Card;
        this.getCustomersPage(1);
    }
    changeDisplayMode(mode) {
        this.displayMode = mode;
    }
    pageChanged(page) {
        this.getCustomersPage(page);
    }
    getCustomersPage(page) {
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe((response) => {
            this.customers = this.filteredCustomers = response.results;
            this.totalRecords = response.totalRecords;
        }, (err) => this.logger.log(err), () => this.logger.log('getCustomersPage() retrieved customers for page: ' + page));
    }
    filterChanged(data) {
        if (data && this.customers) {
            data = data.toUpperCase();
            const props = ['firstName', 'lastName', 'city', 'state.name'];
            this.filteredCustomers = this.filterService.filter(this.customers, data, props);
        }
        else {
            this.filteredCustomers = this.customers;
        }
    }
    lazyLoadMapComponent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.changeDisplayMode(DisplayModeEnum.Map);
            if (!this.mapsViewContainerRef.length) {
                // Lazy load MapComponent
                const { MapComponent } = yield __webpack_require__.e(/*! import() | shared-map-map-component */ "shared-map-map-component").then(__webpack_require__.bind(null, /*! ../shared/map/map.component */ "ISAC"));
                console.log('Lazy loaded map component!');
                const component = this.componentFactoryResolver.resolveComponentFactory(MapComponent);
                this.mapComponentRef = this.mapsViewContainerRef.createComponent(component);
                this.mapComponentRef.instance.zoom = 2;
                this.mapComponentRef.instance.dataPoints = this.filteredCustomers;
                this.mapComponentRef.instance.enabled = true;
            }
        });
    }
    updateMapComponentDataPoints() {
        if (this.mapComponentRef) {
            this.mapComponentRef.instance.dataPoints = this.filteredCustomers;
        }
    }
}
CustomersComponent.ɵfac = function CustomersComponent_Factory(t) { return new (t || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"])); };
CustomersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomersComponent, selectors: [["cm-customers"]], viewQuery: function CustomersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapsViewContainerRef = _t.first);
    } }, decls: 34, vars: 14, consts: [[1, "customers", "view", "indent"], [1, "container"], [1, "glyphicon", "glyphicon-user"], [1, "row"], [1, "col-md-10"], [1, "navbar"], [1, "nav", "navbar-nav"], [1, "toolbar-item"], [3, "click"], [1, "glyphicon", "glyphicon-th-large"], [1, "glyphicon", "glyphicon-align-justify"], [1, "glyphicon", "glyphicon-map-marker"], ["routerLink", "/customers/0/edit"], [1, "glyphicon", "glyphicon-plus"], [1, "navbar-right", 3, "changed"], [3, "customers", "hidden"], [3, "hidden"], ["mapsContainer", ""], [3, "totalItems", "pageSize", "pageChanged"]], template: function CustomersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomersComponent_Template_a_click_12_listener() { return ctx.changeDisplayMode(ctx.displayModeEnum.Card); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Card View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomersComponent_Template_a_click_16_listener() { return ctx.changeDisplayMode(ctx.displayModeEnum.Grid); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " List View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomersComponent_Template_a_click_20_listener() { return ctx.lazyLoadMapComponent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Map View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " New Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "cm-filter-textbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changed", function CustomersComponent_Template_cm_filter_textbox_changed_27_listener($event) { return ctx.filterChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "cm-customers-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "cm-customers-grid", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](31, null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "cm-pagination", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChanged", function CustomersComponent_Template_cm_pagination_pageChanged_33_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.displayMode === ctx.displayModeEnum.Card);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.displayMode === ctx.displayModeEnum.Grid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.displayMode === ctx.displayModeEnum.Map);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("customers", ctx.filteredCustomers)("hidden", ctx.displayMode !== ctx.displayModeEnum.Card);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("customers", ctx.filteredCustomers)("hidden", ctx.displayMode !== ctx.displayModeEnum.Grid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.displayMode !== ctx.displayModeEnum.Map);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("totalItems", ctx.totalRecords)("pageSize", ctx.pageSize);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_6__["FilterTextboxComponent"], _customers_card_customers_card_component__WEBPACK_IMPORTED_MODULE_7__["CustomersCardComponent"], _customers_grid_customers_grid_component__WEBPACK_IMPORTED_MODULE_8__["CustomersGridComponent"], _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'cm-customers',
                templateUrl: './customers.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _core_services_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"] }, { type: _core_services_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"] }]; }, { mapsViewContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['mapsContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }]
        }] }); })();
var DisplayModeEnum;
(function (DisplayModeEnum) {
    DisplayModeEnum[DisplayModeEnum["Card"] = 0] = "Card";
    DisplayModeEnum[DisplayModeEnum["Grid"] = 1] = "Grid";
    DisplayModeEnum[DisplayModeEnum["Map"] = 2] = "Map";
})(DisplayModeEnum || (DisplayModeEnum = {}));


/***/ }),

/***/ "ECa1":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customers-grid/customers-grid.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomersGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersGridComponent", function() { return CustomersGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_sorter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/sorter.service */ "+Obw");
/* harmony import */ var _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/trackby.service */ "MPuK");
/* harmony import */ var _shared_directives_sortby_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/directives/sortby.directive */ "eXUG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/pipes/capitalize.pipe */ "vTEt");
/* harmony import */ var _shared_pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/pipes/trim.pipe */ "ih87");









const _c0 = function (a1) { return ["/customers", a1, "details"]; };
const _c1 = function (a1) { return ["/customers", a1, "orders"]; };
function CustomersGridComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "trim");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "View Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, customer_r2.gender), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, customer_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 11, customer_r2.firstName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, customer_r2.lastName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 15, customer_r2.city));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r2.state.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](20, 17, customer_r2.orderTotal, "USD", "symbol"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, customer_r2.id));
} }
function CustomersGridComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CustomersGridComponent {
    constructor(sorterService, trackbyService) {
        this.sorterService = sorterService;
        this.trackbyService = trackbyService;
        this.customers = [];
    }
    ngOnInit() {
    }
    sort(prop) {
        this.customers = this.sorterService.sort(this.customers, prop);
    }
}
CustomersGridComponent.ɵfac = function CustomersGridComponent_Factory(t) { return new (t || CustomersGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_sorter_service__WEBPACK_IMPORTED_MODULE_1__["SorterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_trackby_service__WEBPACK_IMPORTED_MODULE_2__["TrackByService"])); };
CustomersGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomersGridComponent, selectors: [["cm-customers-grid"]], inputs: { customers: "customers" }, decls: 26, vars: 3, consts: [[1, "container"], [1, "row", "grid-container"], [1, "col-md-10"], [1, "table"], [1, "table", "table-striped", "table-hover"], ["cmSortBy", "firstName", 3, "sorted"], ["cmSortBy", "lastName", 3, "sorted"], ["cmSortBy", "address", 3, "sorted"], ["cmSortBy", "city", 3, "sorted"], ["cmSortBy", "state.name", 3, "sorted"], [3, "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["alt", "Customer Image", 1, "grid-image", 3, "src"], [3, "routerLink"], ["colspan", "7"]], template: function CustomersGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sorted", function CustomersGridComponent_Template_th_sorted_9_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sorted", function CustomersGridComponent_Template_th_sorted_11_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sorted", function CustomersGridComponent_Template_th_sorted_13_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sorted", function CustomersGridComponent_Template_th_sorted_15_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sorted", function CustomersGridComponent_Template_th_sorted_17_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomersGridComponent_Template_th_click_19_listener() { return ctx.sort("orderTotal"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Order Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CustomersGridComponent_tr_24_Template, 24, 25, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CustomersGridComponent_tr_25_Template, 5, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customers)("ngForTrackBy", ctx.trackbyService.customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.customers.length);
    } }, directives: [_shared_directives_sortby_directive__WEBPACK_IMPORTED_MODULE_3__["SortByDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["LowerCasePipe"], _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_6__["CapitalizePipe"], _shared_pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_7__["TrimPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".grid-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    padding-left: 0px;\n}\n\n.grid-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    vertical-align: middle;\n}\n\n.grid-image[_ngcontent-%COMP%] {\n    height:50px;width:50px;margin-top:10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVycy1ncmlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXLENBQUMsVUFBVSxDQUFDLGVBQWU7QUFDMUMiLCJmaWxlIjoiY3VzdG9tZXJzLWdyaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciAgZGl2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLmdyaWQtY29udGFpbmVyIHRkIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uZ3JpZC1pbWFnZSB7XG4gICAgaGVpZ2h0OjUwcHg7d2lkdGg6NTBweDttYXJnaW4tdG9wOjEwcHg7XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cm-customers-grid',
                templateUrl: './customers-grid.component.html',
                styleUrls: ['./customers-grid.component.css'],
                // When using OnPush detectors, then the framework will check an OnPush
                // component when any of its input properties changes, when it fires
                // an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _core_services_sorter_service__WEBPACK_IMPORTED_MODULE_1__["SorterService"] }, { type: _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_2__["TrackByService"] }]; }, { customers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "lA+e":
/*!*******************************************************!*\
  !*** ./src/app/customers/customers-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersRoutingModule", function() { return CustomersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers.component */ "4yXv");
/* harmony import */ var _customers_card_customers_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers-card/customers-card.component */ "s/0G");
/* harmony import */ var _customers_grid_customers_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers-grid/customers-grid.component */ "ECa1");







const routes = [
    { path: '', component: _customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"] }
];
class CustomersRoutingModule {
}
CustomersRoutingModule.components = [_customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"], _customers_card_customers_card_component__WEBPACK_IMPORTED_MODULE_3__["CustomersCardComponent"], _customers_grid_customers_grid_component__WEBPACK_IMPORTED_MODULE_4__["CustomersGridComponent"]];
CustomersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomersRoutingModule });
CustomersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomersRoutingModule_Factory(t) { return new (t || CustomersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "s/0G":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customers-card/customers-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomersCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersCardComponent", function() { return CustomersCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/trackby.service */ "MPuK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/capitalize.pipe */ "vTEt");
/* harmony import */ var _shared_pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/trim.pipe */ "ih87");







const _c0 = function (a1) { return ["/customers", a1, "details"]; };
const _c1 = function (a1) { return ["/customers", a1, "edit"]; };
const _c2 = function (a1) { return ["/customers", a1, "orders"]; };
function CustomersCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "trim");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "View Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, customer_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, customer_r2.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, customer_r2.lastName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, customer_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, customer_r2.gender), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 14, customer_r2.city), ", ", customer_r2.state.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c2, customer_r2.id));
} }
function CustomersCardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Records Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CustomersCardComponent {
    constructor(trackbyService) {
        this.trackbyService = trackbyService;
        this.customers = [];
    }
    ngOnInit() {
    }
}
CustomersCardComponent.ɵfac = function CustomersCardComponent_Factory(t) { return new (t || CustomersCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_trackby_service__WEBPACK_IMPORTED_MODULE_1__["TrackByService"])); };
CustomersCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomersCardComponent, selectors: [["cm-customers-card"]], inputs: { customers: "customers" }, decls: 4, vars: 3, consts: [[1, "container"], [1, "row", "card-container"], ["class", "col-sm-6 col-md-4 col-lg-3", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "card"], [1, "card-header"], [1, "white", 3, "routerLink"], [3, "routerLink"], ["title", "Edit", 1, "pull-right", "glyphicon", "glyphicon-edit", "edit-icon", "white"], [1, "card-body"], [1, "clearfix"], [1, "pull-left", "card-body-left"], ["href", "#", 1, "white"], [1, "card-image", 3, "src"], [1, "pull-left", "card-body-right"], [1, "card-body-content"]], template: function CustomersCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomersCardComponent_div_2_Template, 21, 22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomersCardComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customers)("ngForTrackBy", ctx.trackbyService.customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.customers.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__["CapitalizePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"], _shared_pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_5__["TrimPipe"]], styles: [".card-container[_ngcontent-%COMP%] {\n    width:85%;\n}\n\n.card[_ngcontent-%COMP%] {\n    background-color:#fff;\n    border: 1px solid #d4d4d4;\n    height:120px;\n    margin-bottom: 20px;\n    position: relative;\n}\n\n.card-header[_ngcontent-%COMP%] {\n    background-color:#027FF4;\n    font-size:14pt;\n    color:white;\n    padding:5px;\n    width:100%;\n}\n\n.card-close[_ngcontent-%COMP%] {\n    color: white;\n    font-weight:bold;\n    margin-right:5px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n    padding-left: 5px;\n}\n\n.card-body-left[_ngcontent-%COMP%] {\n    margin-top: -5px;\n}\n\n.card-body-right[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    margin-top: 2px;\n}\n\n.card-body-content[_ngcontent-%COMP%] {\n    width: 100px;\n}\n\n.card-image[_ngcontent-%COMP%] {\n    height:50px;width:50px;margin-top:10px;\n}\n\n.white[_ngcontent-%COMP%] {\n    color: white;\n}\n\n.white[_ngcontent-%COMP%]:hover {\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVycy1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVyxDQUFDLFVBQVUsQ0FBQyxlQUFlO0FBQzFDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoiY3VzdG9tZXJzLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6ODUlO1xufVxuXG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgaGVpZ2h0OjEyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAyN0ZGNDtcbiAgICBmb250LXNpemU6MTRwdDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOjVweDtcbiAgICB3aWR0aDoxMDAlO1xufVxuXG4uY2FyZC1jbG9zZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5jYXJkLWJvZHktbGVmdCB7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLmNhcmQtYm9keS1yaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uY2FyZC1ib2R5LWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLmNhcmQtaW1hZ2Uge1xuICAgIGhlaWdodDo1MHB4O3dpZHRoOjUwcHg7bWFyZ2luLXRvcDoxMHB4O1xufVxuXG4ud2hpdGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLndoaXRlOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cm-customers-card',
                templateUrl: './customers-card.component.html',
                styleUrls: ['./customers-card.component.css'],
                // When using OnPush detectors, then the framework will check an OnPush
                // component when any of its input properties changes, when it fires
                // an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_1__["TrackByService"] }]; }, { customers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vfUp":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers-routing.module */ "lA+e");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers.component */ "4yXv");
/* harmony import */ var _customers_card_customers_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers-card/customers-card.component */ "s/0G");
/* harmony import */ var _customers_grid_customers_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers-grid/customers-grid.component */ "ECa1");







class CustomersModule {
}
CustomersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomersModule });
CustomersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomersModule_Factory(t) { return new (t || CustomersModule)(); }, imports: [[_customers_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomersRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomersModule, { declarations: [_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"], _customers_card_customers_card_component__WEBPACK_IMPORTED_MODULE_4__["CustomersCardComponent"], _customers_grid_customers_grid_component__WEBPACK_IMPORTED_MODULE_5__["CustomersGridComponent"]], imports: [_customers_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomersRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_customers_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomersRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
                declarations: [_customers_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomersRoutingModule"].components]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=customers-customers-module.js.map