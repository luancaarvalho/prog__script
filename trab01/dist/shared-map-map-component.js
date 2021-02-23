(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-map-map-component"],{

/***/ "ISAC":
/*!*********************************************!*\
  !*** ./src/app/shared/map/map.component.ts ***!
  \*********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _map_point_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-point.component */ "MkGv");
/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />
/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />




const _c0 = ["mapContainer"];
class MapComponent {
    constructor() {
        this.markers = [];
        this.latitude = 34.5133;
        this.longitude = -94.1629;
        this.markerText = 'Your Location';
        this.zoom = 8;
        this._dataPoints = null;
    }
    get dataPoints() {
        return this._dataPoints;
    }
    set dataPoints(value) {
        this._dataPoints = value;
        this.renderMapPoints();
    }
    // Necessary since a map rendered while container is hidden
    // will not load the map tiles properly and show a grey screen
    get enabled() {
        return this.isEnabled;
    }
    set enabled(isEnabled) {
        this.isEnabled = isEnabled;
        this.init();
    }
    ngOnInit() {
        if (this.latitude && this.longitude) {
            if (this.mapHeight && this.mapWidth) {
                this.mapHeight = this.height + 'px';
                this.mapWidth = this.width + 'px';
            }
            else {
                const hw = this.getWindowHeightWidth(this.mapDiv.nativeElement.ownerDocument);
                this.mapHeight = hw.height / 2 + 'px';
                this.mapWidth = hw.width + 'px';
            }
        }
    }
    ngAfterContentInit() {
        this.mapPoints.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(500))
            .subscribe(() => {
            if (this.enabled) {
                this.renderMapPoints();
            }
        });
    }
    init() {
        // Need slight delay to avoid grey box when google script has previously been loaded.
        // Otherwise map <div> container may not be visible yet which causes the grey box.
        setTimeout(() => {
            this.ensureScript();
        }, 200);
    }
    getWindowHeightWidth(document) {
        let width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        const height = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        if (width > 900) {
            width = 900;
        }
        return { height: height, width: width };
    }
    ensureScript() {
        this.loadingScript = true;
        const document = this.mapDiv.nativeElement.ownerDocument;
        const script = document.querySelector('script[id="googlemaps"]');
        if (script) {
            if (this.isEnabled) {
                this.renderMap();
            }
        }
        else {
            const mapsScript = document.createElement('script');
            mapsScript.id = 'googlemaps';
            mapsScript.type = 'text/javascript';
            mapsScript.async = true;
            mapsScript.defer = true;
            mapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCG1KDldeF_2GzaTXrEHR0l6cyCS7AnmBw';
            mapsScript.onload = () => {
                this.loadingScript = false;
                if (this.isEnabled) {
                    this.renderMap();
                }
            };
            document.body.appendChild(mapsScript);
        }
    }
    renderMap() {
        const latlng = this.createLatLong(this.latitude, this.longitude);
        const options = {
            zoom: this.zoom,
            center: latlng,
            mapTypeControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapDiv.nativeElement, options);
        // See if we have any mapPoints (child content) or dataPoints (@Input property)
        if ((this.mapPoints && this.mapPoints.length) || (this.dataPoints && this.dataPoints.length)) {
            this.renderMapPoints();
        }
        else {
            this.createMarker(latlng, this.markerText);
        }
    }
    createLatLong(latitude, longitude) {
        return (latitude && longitude) ? new google.maps.LatLng(latitude, longitude) : null;
    }
    renderMapPoints() {
        if (this.map) {
            this.clearMapPoints();
            // lon/lat can be passed as child content or via the dataPoints @Input property
            const mapPoints = (this.mapPoints && this.mapPoints.length) ? this.mapPoints : this.dataPoints;
            if (mapPoints) {
                for (const point of mapPoints) {
                    let markerText = (point.markerText) ? point.markerText : `<h3>${point.firstName} ${point.lastName}</h3>`;
                    const mapPointLatlng = this.createLatLong(point.latitude, point.longitude);
                    this.createMarker(mapPointLatlng, markerText);
                }
            }
        }
    }
    clearMapPoints() {
        this.markers.forEach((marker) => {
            marker.setMap(null);
        });
        this.markers = [];
    }
    createMarker(position, title) {
        const infowindow = new google.maps.InfoWindow({
            content: title
        });
        const marker = new google.maps.Marker({
            position: position,
            map: this.map,
            title: title,
            animation: google.maps.Animation.DROP
        });
        this.markers.push(marker);
        marker.addListener('click', () => {
            infowindow.open(this.map, marker);
        });
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["cm-map"]], contentQueries: function MapComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _map_point_component__WEBPACK_IMPORTED_MODULE_2__["MapPointComponent"], false);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapPoints = _t);
    } }, viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapDiv = _t.first);
    } }, inputs: { height: "height", width: "width", latitude: "latitude", longitude: "longitude", markerText: "markerText", zoom: "zoom", dataPoints: "dataPoints", enabled: "enabled" }, decls: 3, vars: 4, consts: [["mapContainer", ""]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Map Loading....");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.mapHeight)("width", ctx.mapWidth);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cm-map',
                templateUrl: './map.component.html',
                // When using OnPush detectors, then the framework will check an OnPush
                // component when any of its input properties changes, when it fires
                // an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], latitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], longitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], markerText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], zoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataPoints: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mapDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mapContainer', { static: true }]
        }], mapPoints: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_map_point_component__WEBPACK_IMPORTED_MODULE_2__["MapPointComponent"]]
        }] }); })();


/***/ }),

/***/ "MkGv":
/*!***************************************************!*\
  !*** ./src/app/shared/map/map-point.component.ts ***!
  \***************************************************/
/*! exports provided: MapPointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPointComponent", function() { return MapPointComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MapPointComponent {
    constructor() { }
    ngOnInit() {
    }
}
MapPointComponent.ɵfac = function MapPointComponent_Factory(t) { return new (t || MapPointComponent)(); };
MapPointComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapPointComponent, selectors: [["cm-map-point"]], inputs: { longitude: "longitude", latitude: "latitude", markerText: "markerText" }, decls: 0, vars: 0, template: function MapPointComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapPointComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cm-map-point',
                template: ``
            }]
    }], function () { return []; }, { longitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], latitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], markerText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=shared-map-map-component.js.map