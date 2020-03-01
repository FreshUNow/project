(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"shouldDisplayPlaceholder; then placeholder else content\"></ng-container>\n\n<ng-template #placeholder>\n\t<placeholder [copyrightYear]=\"currentYear\"></placeholder>\n</ng-template>\n\n<ng-template #content>\n\t<header>\n\t\t<top-panel></top-panel>\n\t</header>\n\t<main>\n\t\t<router-outlet></router-outlet>\n\t</main>\n\t<footer class=\"footer\">\n\t\t<address class=\"footer-contact-info\">\n\t\t\t<div class=\"footer-text\">\n\t\t\t\tCopyright © {{currentYear}}\n\t\t\t</div>\n\t\t\t<a class=\"footer-contact-info-item\" [href]=\"CONTACTS.PHYSICAL_ADDRESS.REAL\">\n\t\t\t\t<img class=\"footer-contact-info-item-icon\" [src]=\"'assets/icons/' + CONTACTS.PHYSICAL_ADDRESS.ICON\" alt=\"Addr.: \">\n\t\t\t\t<span class=\"footer-contact-info-item-text\">{{CONTACTS.PHYSICAL_ADDRESS.DISPLAYED}}</span>\n\t\t\t</a>\n\t\t\t<a class=\"footer-contact-info-item\" [href]=\"CONTACTS.PHONE_NUM.REAL\">\n\t\t\t\t<img class=\"footer-contact-info-item-icon\" [src]=\"'assets/icons/' + CONTACTS.PHONE_NUM.ICON\" alt=\"Tel.: \">\n\t\t\t\t<span class=\"footer-contact-info-item-text\">{{CONTACTS.PHONE_NUM.DISPLAYED}}</span>\n\t\t\t</a>\n\t\t\t<a class=\"footer-contact-info-item\" [href]=\"CONTACTS.E_MAIL.REAL\">\n\t\t\t\t<img class=\"footer-contact-info-item-icon\" [src]=\"'assets/icons/' + CONTACTS.E_MAIL.ICON\" alt=\"E-mail: \">\n\t\t\t\t<span class=\"footer-contact-info-item-text\">{{CONTACTS.E_MAIL.DISPLAYED}}</span>\n\t\t\t</a>\n\t\t</address>\n\t</footer>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/about/about.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/about/about.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article *ngIf=\"article\" [id]=\"article.LINK\" class=\"content-container\" [ngClass]=\"article.THEME\">\n\t<div class=\"content-container-inner\">\n\t\t<div class=\"article-text\">{{article.TITLE}}</div>\n\t\t<rounded-card [text]=\"article.TEXT\"></rounded-card>\n\t</div>\n</article>\n\n<div class=\"map-container\">\n\t<a class=\"map-link\" [href]=\"mapLink\" target=\"_blank\" rel=\"noopener noreferrer\">\n\t\t<img class=\"map-image\" src=\"assets/images/map.png\" alt=\"Our address\">\n\t\t<div class=\"map-cover\"></div>\n\t</a>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"content-container top-video-container\">\n\t<img #introVideo class=\"top-video-image\" src=\"assets/images/main.jpg\"/>\n\n\t<div class=\"top-video-text-container\">\n\t\t<h2 class=\"article-text top-video-text\">Modern software for data-driven TV & Video</h2>\n\t</div>\n</article>\n\n<article *ngIf=\"articles && articles.length\" [id]=\"articles[0].LINK\" class=\"content-container\" [ngClass]=\"articles[0].THEME\">\n\t<div class=\"content-container-inner\">\n\t\t<div class=\"article-text\">{{articles[0].TITLE}}</div>\n\t\t<rounded-card [text]=\"articles[0].TEXT\"></rounded-card>\n\t</div>\n</article>\n\n<article *ngIf=\"articles && articles.length\" [id]=\"articles[1].LINK\" class=\"content-container\" [ngClass]=\"articles[1].THEME\">\n\t<div class=\"content-container-inner\">\n\t\t<div class=\"article-text\">{{articles[1].TITLE}}</div>\n\t\t<rounded-card [text]=\"articles[1].TEXT\"></rounded-card>\n\t</div>\n</article>\n\n<article *ngFor=\"let article of articles.slice(2)\" [id]=\"article.LINK\" class=\"content-container\" [ngClass]=\"article.THEME\">\n\t<div class=\"content-container-inner\">\n\t\t<div class=\"article-text\">{{article.TITLE}}</div>\n\t\t<rounded-card [text]=\"article.TEXT\"></rounded-card>\n\t</div>\n</article>\n\n<article id=\"solutions\" class=\"content-container without-padding\">\n\t<image-text-carousel\n\t\t[items]=\"carouselItems\"\n\t\t[currentIndex]=\"currentSolutionsIndex\"\n\t\t(indexChange)=\"currentSolutionsIndex = $event\">\n\t</image-text-carousel>\n</article>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/placeholder/placeholder.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/placeholder/placeholder.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-top\">\n\t<img class=\"logo-image\" src=\"assets/images/logo.png\" alt=\"2nd Party Media\">\n\t<address class=\"contact-info\">\n\t\t<a class=\"contact-info-item\" [href]=\"CONTACTS.E_MAIL.REAL\">\n\t\t\t<img class=\"contact-info-item-icon\" [src]=\"'assets/icons/' + CONTACTS.E_MAIL.ICON\" alt=\"E-mail: \">\n\t\t\t<span class=\"contact-info-item-text\">{{CONTACTS.E_MAIL.DISPLAYED}}</span>\n\t\t</a>\n\t\t<a class=\"contact-info-item\" [href]=\"CONTACTS.PHONE_NUM.REAL\">\n\t\t\t<img class=\"contact-info-item-icon\" [src]=\"'assets/icons/' + CONTACTS.PHONE_NUM.ICON\" alt=\"Tel.: \">\n\t\t\t<span class=\"contact-info-item-text\">{{CONTACTS.PHONE_NUM.DISPLAYED}}</span>\n\t\t</a>\n\t\t<a class=\"contact-info-item\" [href]=\"CONTACTS.PHYSICAL_ADDRESS.REAL\">\n\t\t\t<img class=\"contact-info-item-icon\" [src]=\"'assets/icons/' + CONTACTS.PHYSICAL_ADDRESS.ICON\" alt=\"Addr.: \">\n\t\t\t<span class=\"contact-info-item-text\">{{CONTACTS.PHYSICAL_ADDRESS.DISPLAYED}}</span>\n\t\t</a>\n\t</address>\n</div>\n\n<div class=\"container-middle\">\n\t<h1>COMING SOON</h1>\n</div>\n\n<div class=\"container-bottom\">\n\tCopyright © {{copyrightYear}}\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/image-text-carousel/image-text-carousel.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/image-text-carousel/image-text-carousel.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"items\" class=\"carousel-item-container\" @appearTrigger>\n\t<div class=\"carousel-item\">\n\t\t<div class=\"carousel-item-figures-container\">\n\t\t\t<figure\n\t\t\t\t*ngFor=\"let item of items; index as index\"\n\t\t\t\tclass=\"carousel-item-image-container {{ item.LINK }}\"\n\t\t\t\t[@moveFigureTrigger]=\"animationStateForIndex(index)\"\n\t\t\t>\n\t\t\t\t<img class=\"carousel-item-image\" [src]=\"getImgUrlForItem(item)\" [alt]=\"item.TITLE\" />\n\n\t\t\t\t<div class=\"carousel-text-container\">\n\t\t\t\t\t<div class=\"carousel-text\">\n\t\t\t\t\t\t<h4 class=\"carousel-text-title\" title=\"Download PDF\"></h4>\n\t\t\t\t\t\t<p class=\"carousel-text-subtitle\">{{ item.SUBTITLE }}</p>\n\t\t\t\t\t\t<p class=\"carousel-text-content\" [innerHTML]=\"item.TEXT\"></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</figure>\n\t\t</div>\n\t</div>\n\t<ng-container *ngIf=\"items.length > 1\">\n\t\t<div class=\"carousel-item-switch-button prev\" (click)=\"switchToPrev()\">\n\t\t\t<div class=\"carousel-item-switch-button-arrow-wrapper\">\n\t\t\t\t<div class=\"carousel-item-switch-button-arrow prev\">&#9664;</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"carousel-item-switch-button next\" (click)=\"switchToNext()\">\n\t\t\t<div class=\"carousel-item-switch-button-arrow-wrapper\">\n\t\t\t\t<div class=\"carousel-item-switch-button-arrow next\">&#9654;</div>\n\t\t\t</div>\n\t\t</div>\n\t</ng-container>\n</div>\n\n<div *ngIf=\"items\" class=\"responsive-carousel-item-container\">\n\t<div *ngFor=\"let item of items; index as index\" class=\"responsive-carousel-item-image-container {{ item.LINK }}\">\n\t\t<img class=\"responsive-carousel-item-image\" [src]=\"getImgUrlForItem(item)\" [alt]=\"item.TITLE\" />\n\n\t\t<div class=\"carousel-text-container\">\n\t\t\t<div class=\"carousel-text\">\n\t\t\t\t<h4 class=\"carousel-text-title\" title=\"Download PDF\"></h4>\n\t\t\t\t<p class=\"carousel-text-subtitle\">{{ item.SUBTITLE }}</p>\n\t\t\t\t<p class=\"carousel-text-content\" [innerHTML]=\"item.TEXT\"></p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/rounded-card/rounded-card.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/rounded-card/rounded-card.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rounded-card\" [innerHTML]=\"text\"></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/top-panel/top-panel.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/top-panel/top-panel.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hidden-on-small-screen large-screen-container\">\n\t<nav class=\"navigation-main-container\">\n\t\t<ng-container *ngFor=\"let item of testItems\">\n\t\t\t<ng-template #itemTemplate>\n\t\t\t\t<div class=\"navigation-item navigation-main-item\" [class.selected]=\"selectedNavGroup === item\">\n\t\t\t\t\t<span class=\"navigation-main-item-text\">\n\t\t\t\t\t\t{{item.title}}\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\n\t\t\t<a class=\"navigation-main-container-link\" *ngIf=\"item.link\" [routerLink]=\"item.link\" (click)=\"scrollToTop()\">\n\t\t\t\t<ng-container *ngTemplateOutlet=\"itemTemplate\"></ng-container>\n\t\t\t</a>\n\n\t\t\t<div *ngIf=\"!item.link\" (click)=\"onItemClick(item)\">\n\t\t\t\t<ng-container *ngTemplateOutlet=\"itemTemplate\"></ng-container>\n\t\t\t</div>\n\t\t</ng-container>\n\t</nav>\n\n\t<div class=\"expanded-content-container\" [class.inline]=\"isLogoImageInline\" [style.maxWidth]=\"videoWidth + 'px'\">\n\t\t<a *ngIf=\"isCurrentlyAtHome$ | async\" class=\"logo-link\" href=\"#\">\n\t\t\t<ng-container *ngTemplateOutlet=\"logo\"></ng-container>\n\t\t</a>\n\n\t\t<a *ngIf=\"!(isCurrentlyAtHome$ | async)\" class=\"logo-link\" routerLink>\n\t\t\t<ng-container *ngTemplateOutlet=\"logo\"></ng-container>\n\t\t</a>\n\n\t\t<div class=\"navigation-sub-container-outer\" [style.width]=\"maxWidthForNavGroups\">\n\t\t\t<ng-container *ngFor=\"let navGroup of navGroups\">\n\t\t\t\t<nav class=\"navigation-sub-container\" [class.visible]=\"selectedNavGroup === navGroup\">\n\t\t\t\t\t<a *ngFor=\"let item of navGroup.items\" class=\"navigation-item navigation-sub-item\" (click)=\"goToLink(item, $event); onNavItemClick(item);\">\n\t\t\t\t\t\t<span>{{item.title}}</span>\n\t\t\t\t\t</a>\n\t\t\t\t</nav>\n\t\t\t</ng-container>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"hidden-on-large-screen small-screen-container\">\n\t<a *ngIf=\"isCurrentlyAtHome$ | async\" class=\"logo-link\" href=\"#\">\n\t\t<ng-container *ngTemplateOutlet=\"logo\"></ng-container>\n\t</a>\n\n\t<a *ngIf=\"!(isCurrentlyAtHome$ | async)\" class=\"logo-link\" routerLink>\n\t\t<ng-container *ngTemplateOutlet=\"logo\"></ng-container>\n\t</a>\n\n\t<nav class=\"navigation-main-container\">\n\t\t<ng-container *ngFor=\"let item of testItems\">\n\t\t\t<ng-template #itemTemplate>\n\t\t\t\t<div class=\"navigation-item navigation-main-item\" [class.selected]=\"selectedNavGroup === item\">\n\t\t\t\t\t<span class=\"navigation-main-item-text\">\n\t\t\t\t\t\t{{item.title}}\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\n\t\t\t<a class=\"navigation-main-container-link\" *ngIf=\"item.link\" [routerLink]=\"item.link\" (click)=\"scrollToTop()\">\n\t\t\t\t<ng-container *ngTemplateOutlet=\"itemTemplate\"></ng-container>\n\t\t\t</a>\n\n\t\t\t<div *ngIf=\"!item.link\" (click)=\"onItemClick(item)\">\n\t\t\t\t<ng-container *ngTemplateOutlet=\"itemTemplate\"></ng-container>\n\t\t\t</div>\n\t\t</ng-container>\n\t</nav>\n\n\t<ng-container *ngFor=\"let navGroup of navGroups\">\n\t\t<nav class=\"navigation-sub-container\" [class.visible]=\"selectedNavGroup === navGroup\">\n\t\t\t<a *ngFor=\"let item of navGroup.items\" class=\"navigation-item navigation-sub-item\" (click)=\"goToLink(item, $event); onNavItemClick(item);\">\n\t\t\t\t<span>{{item.title}}</span>\n\t\t\t</a>\n\t\t</nav>\n\t</ng-container>\n</div>\n\n<ng-template #logo>\n\t<div class=\"logo-container\">\n\t\t<img class=\"logo-image\" src=\"assets/images/logo.jpg\" alt=\"Fresh U Logo\">\n\t</div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/home/home.routes */ "./src/app/pages/home/home.routes.ts");
/* harmony import */ var _pages_about_about_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pages/about/about.routes */ "./src/app/pages/about/about.routes.ts");





const routes = [
    ..._pages_about_about_routes__WEBPACK_IMPORTED_MODULE_4__["AboutRoutes"],
    ..._pages_home_home_routes__WEBPACK_IMPORTED_MODULE_3__["HomeRoutes"]
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 100%;\n}\n:host header {\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n:host main {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .mobile-coming-soon {\n  display: none;\n}\n:host .footer {\n  background-color: #248dc1;\n  color: white;\n  padding: 1.5rem 0;\n  width: 100%;\n}\n:host .footer-text, :host .footer-contact-info-item-text {\n  height: 1rem;\n}\n:host .footer-contact-info {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  font-style: normal;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n:host .footer-contact-info-item {\n  -webkit-box-align: center;\n          align-items: center;\n  color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n:host .footer-contact-info-item-text {\n  margin-left: 0.5rem;\n  text-decoration: none;\n}\n:host .footer-contact-info-item-icon {\n  height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95eWFyYXNoZXZpY2gvRGVza3RvcC9LYXRZYW5hL3NlcnZlcnMvZ3VpL3NlY29uZHBhcnR5bWVkaWEvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy95eWFyYXNoZXZpY2gvRGVza3RvcC9LYXRZYW5hL3NlcnZlcnMvZ3VpL3NlY29uZHBhcnR5bWVkaWEvc3JjL3Njc3MvdmFycy9fY29sb3JzLnNjc3MiLCIvVXNlcnMveXlhcmFzaGV2aWNoL0Rlc2t0b3AvS2F0WWFuYS9zZXJ2ZXJzL2d1aS9zZWNvbmRwYXJ0eW1lZGlhL3NyYy9zY3NzL3ZhcnMvX3NpemVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsWUFBQTtBQ0ZEO0FESUM7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNGRjtBREtDO0VBQ0MsbUJBQUE7VUFBQSxPQUFBO0FDSEY7QURNQztFQUNDLGFBQUE7QUNKRjtBRE9DO0VBQ0MseUJFeEJRO0VGeUJSLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNMRjtBRE9FO0VBQ0MsWUdGZ0I7QUZIbkI7QURRRTtFQUNDLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO1VBQUEsNkJBQUE7QUNOSDtBRFFHO0VBQ0MseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDTko7QURRSTtFQUNDLG1CQUFBO0VBQ0EscUJBQUE7QUNOTDtBRFNJO0VBQ0MsWUd0QmM7QUZlbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJzL2NvbG9ycyc7XG5AaW1wb3J0ICd2YXJzL3NpemVzJztcblxuOmhvc3Qge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGhlaWdodDogMTAwJTtcblxuXHRoZWFkZXIge1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHR6LWluZGV4OiAxO1xuXHR9XG5cblx0bWFpbiB7XG5cdFx0ZmxleDogMTtcblx0fVxuXG5cdC5tb2JpbGUtY29taW5nLXNvb24ge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH0gLy8gdG9kbzogcmVtb3ZlIHdoZW4gbW9iaWxlIHZlcnNpb24gaXMgdGVzdGVkXG5cblx0LmZvb3RlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdHBhZGRpbmc6ICRmb290ZXItcGFkZGluZyAwO1xuXHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0Ji10ZXh0LCAmLWNvbnRhY3QtaW5mby1pdGVtLXRleHQge1xuXHRcdFx0aGVpZ2h0OiAkZm9vdGVyLWZvbnQtc2l6ZTtcblx0XHR9XG5cblx0XHQmLWNvbnRhY3QtaW5mbyB7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG5cdFx0XHQmLWl0ZW0ge1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdFx0XHRcdCYtdGV4dCB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC41cmVtO1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYtaWNvbiB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAkZm9vdGVyLWljb24tc2l6ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IGhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG59XG46aG9zdCBtYWluIHtcbiAgZmxleDogMTtcbn1cbjpob3N0IC5tb2JpbGUtY29taW5nLXNvb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDhkYzE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMS41cmVtIDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmZvb3Rlci10ZXh0LCA6aG9zdCAuZm9vdGVyLWNvbnRhY3QtaW5mby1pdGVtLXRleHQge1xuICBoZWlnaHQ6IDFyZW07XG59XG46aG9zdCAuZm9vdGVyLWNvbnRhY3QtaW5mbyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG46aG9zdCAuZm9vdGVyLWNvbnRhY3QtaW5mby1pdGVtIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IC5mb290ZXItY29udGFjdC1pbmZvLWl0ZW0tdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbjpob3N0IC5mb290ZXItY29udGFjdC1pbmZvLWl0ZW0taWNvbiB7XG4gIGhlaWdodDogMjRweDtcbn0iLCIkcHJpbWFyeTogIzI0OGRjMTtcbiRzdWItY29sb3ItdmlvbGV0OiAjNzU2Y2FkO1xuJHN1Yi1jb2xvci1ibHVlOiAjMjQ4ZGMxO1xuJHN1Yi1jb2xvci1ibHVlLTI6ICM2YmFkZDU7XG4kc3ViLWNvbG9yLW9yYW5nZTogI2Y2ODkzYztcbiRzZWNvbmRwYXJ0eW1lZGlhLXByaW1hcnktZGFyay1jb250cmFzdDogIzYzNjM2MztcblxuJHByaW1hcnktdGV4dC1jb2xvcjogJHNlY29uZHBhcnR5bWVkaWEtcHJpbWFyeS1kYXJrLWNvbnRyYXN0O1xuIiwiJGNlbnRlci1jb250YWluZXItd2lkdGg6IDEyODBweDtcbiRzaWRlLW1hcmdpbnM6IGNhbGMoKDEwMHZ3IC0gI3skY2VudGVyLWNvbnRhaW5lci13aWR0aH0pIC8gMik7XG5cbiR0b3AtcGFuZWwtZm9udC1zaXplOiAxLjVyZW07XG4kdG9wLXBhbmVsLXBhZGRpbmc6IDFyZW07XG4kdG9wLXBhbmVsLWhlaWdodDogJHRvcC1wYW5lbC1mb250LXNpemUgKyAyICogJHRvcC1wYW5lbC1wYWRkaW5nO1xuXG4kdG9wLXBhbmVsLWxvZ28taGVpZ2h0OiA3LjVyZW07XG4kdG9wLXBhbmVsLWxvZ28td2lkdGg6IDIgKiAkdG9wLXBhbmVsLWxvZ28taGVpZ2h0O1xuJHRvcC1wYW5lbC1sb2dvLW9mZnNldDogJHRvcC1wYW5lbC1sb2dvLWhlaWdodCAvIDQ7XG4kdG9wLXBhbmVsLWxvZ28taW5saW5lLWhlaWdodDogJHRvcC1wYW5lbC1oZWlnaHQgLyAxLjU7XG4kdG9wLXBhbmVsLWxvZ28taW5saW5lLW9mZnNldDogJHRvcC1wYW5lbC1sb2dvLWlubGluZS1oZWlnaHQgLyA0O1xuXG4kdG9wLXBhbmVsLWxvZ28tY29udGFpbmVyLW1pbi13aWR0aDogMjVyZW07XG4kdG9wLXBhbmVsLWxvZ28tY29udGFpbmVyLXdpZHRoOiBjYWxjKCN7JHRvcC1wYW5lbC1sb2dvLWNvbnRhaW5lci1taW4td2lkdGh9ICsgI3skc2lkZS1tYXJnaW5zfSAtIDFyZW0pO1xuXG4kbWluLWxlZnQtcGFydC13aWR0aDogJGNlbnRlci1jb250YWluZXItd2lkdGggLyA0O1xuJGxlZnQtcGFydC13aWR0aDogY2FsYygjeyRtaW4tbGVmdC1wYXJ0LXdpZHRofSArICN7JHNpZGUtbWFyZ2luc30gLSAxcmVtKTtcblxuJG1pbi1yaWdodC1wYXJ0LXdpZHRoOiAkY2VudGVyLWNvbnRhaW5lci13aWR0aCAtICRtaW4tbGVmdC1wYXJ0LXdpZHRoO1xuJHJpZ2h0LXBhcnQtd2lkdGg6IGNhbGMoMTAwJSAtICN7JGxlZnQtcGFydC13aWR0aH0pO1xuXG4kcm91bmRlZC1jYXJkLXBhZGRpbmc6IDQwcHg7XG4kcm91bmRlZC1jYXJkLXNpemU6IDQ2MHB4O1xuJGNvbnRlbnQtY29udGFpbmVyLXBhZGRpbmc6IDYuODc1cmVtO1xuXG4kY29udGVudC1jb250YWluZXItaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skdG9wLXBhbmVsLWhlaWdodH0pO1xuXG4kZm9vdGVyLWZvbnQtc2l6ZTogMXJlbTtcbiRmb290ZXItaWNvbi1zaXplOiAyNHB4O1xuJGZvb3Rlci1wYWRkaW5nOiAxLjVyZW07XG4kZm9vdGVyLWhlaWdodDogY2FsYygjeyRmb290ZXItaWNvbi1zaXplfSArICN7MiAqICRmb290ZXItcGFkZGluZ30pO1xuXG4kaXBhZC1wcm8tbWF4LWRldmljZS13aWR0aDogMTExMnB4O1xuJGlwYWQtcHJvLW1pbi1kZXZpY2Utd2lkdGg6IDgzNHB4O1xuJGlwYWQtbWF4LWRldmljZS13aWR0aDogMTAyNHB4O1xuJGlwYWQtbWluLWRldmljZS13aWR0aDogNzY4cHg7XG5cbiRsYXB0b3AtbWluLXdpZHRoOiAxMjI0cHg7XG4kbGFyZ2Utc2NyZWVuLW1pbi13aWR0aDogMTgyNHB4O1xuXG4kYmlnZ2VyLXJvdW5kZWQtY2FyZC1zaXplOiA1NjBweDtcbiRjb250ZW50LWNvbnRhaW5lci1wYWRkaW5nLW1lZGlhOiAyLjVyZW07XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_constants_contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/constants/contacts */ "./src/app/shared/constants/contacts.ts");



let AppComponent = class AppComponent {
    constructor() {
        this.currentYear = (new Date()).getFullYear();
        this.shouldDisplayPlaceholder = false;
        this.CONTACTS = _shared_constants_contacts__WEBPACK_IMPORTED_MODULE_2__["CONTACTS"];
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: TranslateHttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateHttpLoaderFactory", function() { return TranslateHttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_components_top_panel_top_panel_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/top-panel/top-panel.module */ "./src/app/shared/components/top-panel/top-panel.module.ts");
/* harmony import */ var _pages_home_home_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @pages/home/home.module */ "./src/app/pages/home/home.module.ts");
/* harmony import */ var _pages_placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @pages/placeholder/placeholder.module */ "./src/app/pages/placeholder/placeholder.module.ts");
/* harmony import */ var _pages_about_about_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @pages/about/about.module */ "./src/app/pages/about/about.module.ts");













function TranslateHttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, 'assets/i18n/');
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                    useFactory: TranslateHttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                }
            }),
            _shared_components_top_panel_top_panel_module__WEBPACK_IMPORTED_MODULE_9__["TopPanelModule"],
            _pages_home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
            _pages_placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_11__["PlaceholderModule"],
            _pages_about_about_module__WEBPACK_IMPORTED_MODULE_12__["AboutModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-container .article-text {\n  font-size: 3.75rem;\n  font-weight: 900;\n  line-height: 4.375rem;\n}\n\n:host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: calc(100vh - calc(24px + 3rem));\n  overflow: hidden;\n}\n\n:host .content-container {\n  -webkit-box-align: center;\n          align-items: center;\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: flex;\n  padding: 5.5rem 0 2rem;\n}\n\n:host .content-container-inner {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  margin: auto;\n  max-width: 1280px;\n}\n\n:host .content-container rounded-card {\n  width: 460px;\n  box-sizing: border-box;\n}\n\n:host .content-container .article-text {\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding-right: 20px;\n}\n\n:host .content-container ::ng-deep .rounded-card {\n  height: -webkit-min-content;\n  height: -moz-min-content;\n  height: min-content;\n}\n\n:host .content-container.blue-gradient {\n  background: white;\n}\n\n:host .content-container.blue-gradient ::ng-deep .rounded-card {\n  background: linear-gradient(135deg, #248dc1 0%, #756cad 100%);\n  color: #fff;\n}\n\n:host .content-container.blue-gradient ::ng-deep .article-text {\n  color: #6badd5;\n}\n\n:host .content-container.orange-gradient {\n  background: white;\n}\n\n:host .content-container.orange-gradient ::ng-deep .rounded-card {\n  background: linear-gradient(135deg, #756cad 0%, #f6893c 100%);\n  color: #fff;\n}\n\n:host .content-container.orange-gradient ::ng-deep .article-text {\n  color: #f6893c;\n}\n\n:host .content-container.simple-white {\n  background: linear-gradient(152.02deg, #248dc1 0%, #756cad 100%);\n}\n\n:host .content-container.simple-white ::ng-deep .rounded-card {\n  background: #fff;\n  color: #000;\n}\n\n:host .content-container.simple-white ::ng-deep .article-text {\n  color: #fff;\n}\n\n:host .map-container {\n  overflow: hidden;\n}\n\n:host .map-link {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100%;\n  position: relative;\n}\n\n:host .map-image {\n  display: block;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n}\n\n:host .map-cover {\n  background-color: rgba(36, 141, 193, 0.5);\n  height: 100%;\n  position: absolute;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95eWFyYXNoZXZpY2gvRGVza3RvcC9LYXRZYW5hL3NlcnZlcnMvZ3VpL3NlY29uZHBhcnR5bWVkaWEvc3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMveXlhcmFzaGV2aWNoL0Rlc2t0b3AvS2F0WWFuYS9zZXJ2ZXJzL2d1aS9zZWNvbmRwYXJ0eW1lZGlhL3N0ZGluIiwiL1VzZXJzL3l5YXJhc2hldmljaC9EZXNrdG9wL0thdFlhbmEvc2VydmVycy9ndWkvc2Vjb25kcGFydHltZWRpYS9zcmMvc2Nzcy92YXJzL19zaXplcy5zY3NzIiwiL1VzZXJzL3l5YXJhc2hldmljaC9EZXNrdG9wL0thdFlhbmEvc2VydmVycy9ndWkvc2Vjb25kcGFydHltZWRpYS9zcmMvc2Nzcy92YXJzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0REOztBQ0FBO0VBR0Msb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtBRENEOztBQ0VFO0VBQ0MseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7QURBSDs7QUNFRztFQUNDLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJDdkJxQjtBRnVCekI7O0FDR0c7RUFDQyxZQ0pnQjtFREtoQixzQkFBQTtBRERKOztBQ0lHO0VBRUMsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsbUJBQUE7QURISjs7QUNPSTtFQUNDLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBRExMOztBQ3NCRztFQUVDLGlCQUFBO0FEckJKOztBQ1FLO0VBQ0MsNkRBVzBCO0VBVjFCLFdBVStGO0FEaEJyRzs7QUNTSztFQUNDLGNFaERhO0FIeUNuQjs7QUNpQkc7RUFFQyxpQkFBQTtBRGhCSjs7QUNGSztFQUNDLDZEQWdCMEI7RUFmMUIsV0FlaUc7QURYdkc7O0FDREs7RUFDQyxjRS9DYTtBSGtEbkI7O0FDWUc7RUFFQyxnRUFBQTtBRFhKOztBQ1pLO0VBQ0MsZ0JBcUIwQjtFQXBCMUIsV0FvQmdDO0FETnRDOztBQ1hLO0VBQ0MsV0FnQnNDO0FESDVDOztBQ1VFO0VBQ0MsZ0JBQUE7QURSSDs7QUNXRTtFQUNDLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEVEg7O0FDWUU7RUFDQyxjQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7QURWSDs7QUNhRTtFQUNDLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBRFhIIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3NpemVzJztcblxuJWhlYWRpbmcge1xuXHRmb250LXNpemU6IDMuNzVyZW07XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdGxpbmUtaGVpZ2h0OiA0LjM3NXJlbTtcbn1cblxuJXN1Yi1oZWFkaW5nIHtcblx0Zm9udC1zaXplOiAxLjU2MjVyZW07XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdGxpbmUtaGVpZ2h0OiAyLjE4NzVyZW07XG59XG5cbiVwYXJhZ3JhcGgtdGV4dCB7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogJGlwYWQtbWluLWRldmljZS13aWR0aCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAkaXBhZC1tYXgtZGV2aWNlLXdpZHRoKSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRsaW5lLWhlaWdodDogMjdweDtcblx0fVxufVxuXG4laGludCB7XG5cdGZvbnQtc2l6ZTogMTBweDtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0bGluZS1oZWlnaHQ6IDkuM3B4O1xufVxuIiwiOmhvc3QgLmNvbnRlbnQtY29udGFpbmVyIC5hcnRpY2xlLXRleHQge1xuICBmb250LXNpemU6IDMuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxpbmUtaGVpZ2h0OiA0LjM3NXJlbTtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSBjYWxjKDI0cHggKyAzcmVtKSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCAuY29udGVudC1jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA1LjVyZW0gMCAycmVtO1xufVxuOmhvc3QgLmNvbnRlbnQtY29udGFpbmVyLWlubmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEyODBweDtcbn1cbjpob3N0IC5jb250ZW50LWNvbnRhaW5lciByb3VuZGVkLWNhcmQge1xuICB3aWR0aDogNDYwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG46aG9zdCAuY29udGVudC1jb250YWluZXIgLmFydGljbGUtdGV4dCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG46aG9zdCAuY29udGVudC1jb250YWluZXIgOjpuZy1kZWVwIC5yb3VuZGVkLWNhcmQge1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuOmhvc3QgLmNvbnRlbnQtY29udGFpbmVyLmJsdWUtZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbjpob3N0IC5jb250ZW50LWNvbnRhaW5lci5ibHVlLWdyYWRpZW50IDo6bmctZGVlcCAucm91bmRlZC1jYXJkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI0OGRjMSAwJSwgIzc1NmNhZCAxMDAlKTtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCAuY29udGVudC1jb250YWluZXIuYmx1ZS1ncmFkaWVudCA6Om5nLWRlZXAgLmFydGljbGUtdGV4dCB7XG4gIGNvbG9yOiAjNmJhZGQ1O1xufVxuOmhvc3QgLmNvbnRlbnQtY29udGFpbmVyLm9yYW5nZS1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuOmhvc3QgLmNvbnRlbnQtY29udGFpbmVyLm9yYW5nZS1ncmFkaWVudCA6Om5nLWRlZXAgLnJvdW5kZWQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3NTZjYWQgMCUsICNmNjg5M2MgMTAwJSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgLmNvbnRlbnQtY29udGFpbmVyLm9yYW5nZS1ncmFkaWVudCA6Om5nLWRlZXAgLmFydGljbGUtdGV4dCB7XG4gIGNvbG9yOiAjZjY4OTNjO1xufVxuOmhvc3QgLmNvbnRlbnQtY29udGFpbmVyLnNpbXBsZS13aGl0ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTIuMDJkZWcsICMyNDhkYzEgMCUsICM3NTZjYWQgMTAwJSk7XG59XG46aG9zdCAuY29udGVudC1jb250YWluZXIuc2ltcGxlLXdoaXRlIDo6bmctZGVlcCAucm91bmRlZC1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG59XG46aG9zdCAuY29udGVudC1jb250YWluZXIuc2ltcGxlLXdoaXRlIDo6bmctZGVlcCAuYXJ0aWNsZS10ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCAubWFwLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCAubWFwLWxpbmsge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCAubWFwLWltYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IC5tYXAtY292ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCAxNDEsIDE5MywgMC41KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xufSIsIkBpbXBvcnQgJ3ZhcnMvY29sb3JzJztcbkBpbXBvcnQgJ3ZhcnMvZm9udHMnO1xuQGltcG9ydCAndmFycy9zaXplcyc7XG5cbjpob3N0IHtcblx0JG1heC1yZXNwb25zaXZlLXdpZHRoOiAkY2VudGVyLWNvbnRhaW5lci13aWR0aDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRmb290ZXItaGVpZ2h0fSk7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cblx0LmNvbnRlbnQge1xuXHRcdCYtY29udGFpbmVyIHtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdHBhZGRpbmc6ICgkdG9wLXBhbmVsLWhlaWdodCArIDJyZW0pIDAgMnJlbTtcblxuXHRcdFx0Ji1pbm5lciB7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0bWF4LXdpZHRoOiAkbWF4LXJlc3BvbnNpdmUtd2lkdGg7XG5cdFx0XHR9XG5cblx0XHRcdHJvdW5kZWQtY2FyZCB7XG5cdFx0XHRcdHdpZHRoOiAkcm91bmRlZC1jYXJkLXNpemU7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHR9XG5cblx0XHRcdC5hcnRpY2xlLXRleHQge1xuXHRcdFx0XHRAZXh0ZW5kICVoZWFkaW5nO1xuXHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQ6Om5nLWRlZXAge1xuXHRcdFx0XHQucm91bmRlZC1jYXJkIHtcblx0XHRcdFx0XHRoZWlnaHQ6IG1pbi1jb250ZW50O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdEBtaXhpbiByb3VuZGVkLWNhcmQtc3R5bGUoJGJhY2tncm91bmQsICR0ZXh0LCAkYXJ0aWNsZS10ZXh0KSB7XG5cdFx0XHRcdDo6bmctZGVlcCB7XG5cdFx0XHRcdFx0LnJvdW5kZWQtY2FyZCB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcblx0XHRcdFx0XHRcdGNvbG9yOiAkdGV4dDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYXJ0aWNsZS10ZXh0IHtcblx0XHRcdFx0XHRcdGNvbG9yOiAkYXJ0aWNsZS10ZXh0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQmLmJsdWUtZ3JhZGllbnQge1xuXHRcdFx0XHRAaW5jbHVkZSByb3VuZGVkLWNhcmQtc3R5bGUobGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHN1Yi1jb2xvci1ibHVlIDAlLCAkc3ViLWNvbG9yLXZpb2xldCAxMDAlKSwgI2ZmZiwgJHN1Yi1jb2xvci1ibHVlLTIpO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTsgLy8gdG8gb3ZlcmxhcCBwYXJhbGxheGVzXG5cdFx0XHR9XG5cblx0XHRcdCYub3JhbmdlLWdyYWRpZW50IHtcblx0XHRcdFx0QGluY2x1ZGUgcm91bmRlZC1jYXJkLXN0eWxlKGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRzdWItY29sb3ItdmlvbGV0IDAlLCAkc3ViLWNvbG9yLW9yYW5nZSAxMDAlKSwgI2ZmZiwgJHN1Yi1jb2xvci1vcmFuZ2UpO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTsgLy8gdG8gb3ZlcmxhcCBwYXJhbGxheGVzXG5cdFx0XHR9XG5cblx0XHRcdCYuc2ltcGxlLXdoaXRlIHtcblx0XHRcdFx0QGluY2x1ZGUgcm91bmRlZC1jYXJkLXN0eWxlKCNmZmYsICMwMDAsICNmZmYpO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTUyLjAyZGVnLCAkc3ViLWNvbG9yLWJsdWUgMCUsICRzdWItY29sb3ItdmlvbGV0IDEwMCUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5tYXAge1xuXHRcdCYtY29udGFpbmVyIHtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0fVxuXG5cdFx0Ji1saW5rIHtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0fVxuXG5cdFx0Ji1pbWFnZSB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXG5cdFx0Ji1jb3ZlciB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRwcmltYXJ5LCAuNSk7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHR9XG5cdH1cbn1cbiIsIiRjZW50ZXItY29udGFpbmVyLXdpZHRoOiAxMjgwcHg7XG4kc2lkZS1tYXJnaW5zOiBjYWxjKCgxMDB2dyAtICN7JGNlbnRlci1jb250YWluZXItd2lkdGh9KSAvIDIpO1xuXG4kdG9wLXBhbmVsLWZvbnQtc2l6ZTogMS41cmVtO1xuJHRvcC1wYW5lbC1wYWRkaW5nOiAxcmVtO1xuJHRvcC1wYW5lbC1oZWlnaHQ6ICR0b3AtcGFuZWwtZm9udC1zaXplICsgMiAqICR0b3AtcGFuZWwtcGFkZGluZztcblxuJHRvcC1wYW5lbC1sb2dvLWhlaWdodDogNy41cmVtO1xuJHRvcC1wYW5lbC1sb2dvLXdpZHRoOiAyICogJHRvcC1wYW5lbC1sb2dvLWhlaWdodDtcbiR0b3AtcGFuZWwtbG9nby1vZmZzZXQ6ICR0b3AtcGFuZWwtbG9nby1oZWlnaHQgLyA0O1xuJHRvcC1wYW5lbC1sb2dvLWlubGluZS1oZWlnaHQ6ICR0b3AtcGFuZWwtaGVpZ2h0IC8gMS41O1xuJHRvcC1wYW5lbC1sb2dvLWlubGluZS1vZmZzZXQ6ICR0b3AtcGFuZWwtbG9nby1pbmxpbmUtaGVpZ2h0IC8gNDtcblxuJHRvcC1wYW5lbC1sb2dvLWNvbnRhaW5lci1taW4td2lkdGg6IDI1cmVtO1xuJHRvcC1wYW5lbC1sb2dvLWNvbnRhaW5lci13aWR0aDogY2FsYygjeyR0b3AtcGFuZWwtbG9nby1jb250YWluZXItbWluLXdpZHRofSArICN7JHNpZGUtbWFyZ2luc30gLSAxcmVtKTtcblxuJG1pbi1sZWZ0LXBhcnQtd2lkdGg6ICRjZW50ZXItY29udGFpbmVyLXdpZHRoIC8gNDtcbiRsZWZ0LXBhcnQtd2lkdGg6IGNhbGMoI3skbWluLWxlZnQtcGFydC13aWR0aH0gKyAjeyRzaWRlLW1hcmdpbnN9IC0gMXJlbSk7XG5cbiRtaW4tcmlnaHQtcGFydC13aWR0aDogJGNlbnRlci1jb250YWluZXItd2lkdGggLSAkbWluLWxlZnQtcGFydC13aWR0aDtcbiRyaWdodC1wYXJ0LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyRsZWZ0LXBhcnQtd2lkdGh9KTtcblxuJHJvdW5kZWQtY2FyZC1wYWRkaW5nOiA0MHB4O1xuJHJvdW5kZWQtY2FyZC1zaXplOiA0NjBweDtcbiRjb250ZW50LWNvbnRhaW5lci1wYWRkaW5nOiA2Ljg3NXJlbTtcblxuJGNvbnRlbnQtY29udGFpbmVyLWhlaWdodDogY2FsYygxMDB2aCAtICN7JHRvcC1wYW5lbC1oZWlnaHR9KTtcblxuJGZvb3Rlci1mb250LXNpemU6IDFyZW07XG4kZm9vdGVyLWljb24tc2l6ZTogMjRweDtcbiRmb290ZXItcGFkZGluZzogMS41cmVtO1xuJGZvb3Rlci1oZWlnaHQ6IGNhbGMoI3skZm9vdGVyLWljb24tc2l6ZX0gKyAjezIgKiAkZm9vdGVyLXBhZGRpbmd9KTtcblxuJGlwYWQtcHJvLW1heC1kZXZpY2Utd2lkdGg6IDExMTJweDtcbiRpcGFkLXByby1taW4tZGV2aWNlLXdpZHRoOiA4MzRweDtcbiRpcGFkLW1heC1kZXZpY2Utd2lkdGg6IDEwMjRweDtcbiRpcGFkLW1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4O1xuXG4kbGFwdG9wLW1pbi13aWR0aDogMTIyNHB4O1xuJGxhcmdlLXNjcmVlbi1taW4td2lkdGg6IDE4MjRweDtcblxuJGJpZ2dlci1yb3VuZGVkLWNhcmQtc2l6ZTogNTYwcHg7XG4kY29udGVudC1jb250YWluZXItcGFkZGluZy1tZWRpYTogMi41cmVtO1xuIiwiJHByaW1hcnk6ICMyNDhkYzE7XG4kc3ViLWNvbG9yLXZpb2xldDogIzc1NmNhZDtcbiRzdWItY29sb3ItYmx1ZTogIzI0OGRjMTtcbiRzdWItY29sb3ItYmx1ZS0yOiAjNmJhZGQ1O1xuJHN1Yi1jb2xvci1vcmFuZ2U6ICNmNjg5M2M7XG4kc2Vjb25kcGFydHltZWRpYS1wcmltYXJ5LWRhcmstY29udHJhc3Q6ICM2MzYzNjM7XG5cbiRwcmltYXJ5LXRleHQtY29sb3I6ICRzZWNvbmRwYXJ0eW1lZGlhLXByaW1hcnktZGFyay1jb250cmFzdDtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_text_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/text-content.service */ "./src/app/shared/services/text-content.service.ts");
/* harmony import */ var _shared_constants_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/constants/contacts */ "./src/app/shared/constants/contacts.ts");




let AboutComponent = class AboutComponent {
    constructor(textContentService) {
        this.mapLink = _shared_constants_contacts__WEBPACK_IMPORTED_MODULE_3__["CONTACTS"].PHYSICAL_ADDRESS.REAL;
        this.articleSubscription = textContentService.aboutArticle.subscribe((article) => {
            this.article = article;
        });
    }
    ngOnDestroy() {
        if (this.articleSubscription) {
            this.articleSubscription.unsubscribe();
        }
    }
};
AboutComponent.ctorParameters = () => [
    { type: _shared_services_text_content_service__WEBPACK_IMPORTED_MODULE_2__["TextContentService"] }
];
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/pages/about/about.component.scss")]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _shared_components_rounded_card_rounded_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/rounded-card/rounded-card.module */ "./src/app/shared/components/rounded-card/rounded-card.module.ts");





let AboutModule = class AboutModule {
};
AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_components_rounded_card_rounded_card_module__WEBPACK_IMPORTED_MODULE_4__["RoundedCardModule"]
        ],
        exports: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]]
    })
], AboutModule);



/***/ }),

/***/ "./src/app/pages/about/about.routes.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.routes.ts ***!
  \*********************************************/
/*! exports provided: AboutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutes", function() { return AboutRoutes; });
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pages/about/about.component */ "./src/app/pages/about/about.component.ts");

const AboutRoutes = [
    {
        path: 'about',
        component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"]
    }
];


/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-container .article-text {\n  font-size: 3.75rem;\n  font-weight: 900;\n  line-height: 4.375rem;\n}\n\n:host {\n  display: block;\n}\n\n:host .content-container {\n  -webkit-box-align: center;\n          align-items: center;\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: flex;\n  height: calc(100vh - 3.5rem);\n  padding: 6.875rem;\n}\n\n:host .content-container-inner {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  margin: auto;\n  max-width: 1280px;\n}\n\n:host .content-container rounded-card {\n  height: 460px;\n  width: 460px;\n  box-sizing: border-box;\n}\n\n:host .content-container .article-text {\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding-right: 20px;\n}\n\n:host .content-container.top-video-container {\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow-x: hidden;\n  padding: 0 6.875rem 25px;\n  position: relative;\n}\n\n:host .content-container .top-video-image {\n  box-shadow: 0 10px 25px rgba(99, 99, 99, 0.5);\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  min-width: 1280px;\n}\n\n:host .content-container .top-video-text {\n  color: white;\n  margin: 0;\n  max-width: 35rem;\n  text-shadow: -0.5px 0 20px #505080;\n  width: 50%;\n}\n\n:host .content-container .top-video-text-container {\n  left: 50%;\n  max-width: 1280px;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: calc(100% - 13.75rem);\n}\n\n:host .content-container.blue-gradient {\n  background: white;\n}\n\n:host .content-container.blue-gradient ::ng-deep .rounded-card {\n  background: linear-gradient(135deg, #248dc1 0%, #756cad 100%);\n  color: #fff;\n}\n\n:host .content-container.blue-gradient ::ng-deep .article-text {\n  color: #6badd5;\n}\n\n:host .content-container.orange-gradient {\n  background: white;\n}\n\n:host .content-container.orange-gradient ::ng-deep .rounded-card {\n  background: linear-gradient(135deg, #756cad 0%, #f6893c 100%);\n  color: #fff;\n}\n\n:host .content-container.orange-gradient ::ng-deep .article-text {\n  color: #f6893c;\n}\n\n:host .content-container.simple-white {\n  background: linear-gradient(152.02deg, #248dc1 0%, #756cad 100%);\n}\n\n:host .content-container.simple-white ::ng-deep .rounded-card {\n  background: #fff;\n  color: #000;\n}\n\n:host .content-container.simple-white ::ng-deep .article-text {\n  color: #fff;\n}\n\n:host .content-container image-text-carousel {\n  height: 100%;\n  margin: auto;\n  width: 100%;\n}\n\n:host .content-container.without-padding {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95eWFyYXNoZXZpY2gvRGVza3RvcC9LYXRZYW5hL3NlcnZlcnMvZ3VpL3NlY29uZHBhcnR5bWVkaWEvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy95eWFyYXNoZXZpY2gvRGVza3RvcC9LYXRZYW5hL3NlcnZlcnMvZ3VpL3NlY29uZHBhcnR5bWVkaWEvc3RkaW4iLCIvVXNlcnMveXlhcmFzaGV2aWNoL0Rlc2t0b3AvS2F0WWFuYS9zZXJ2ZXJzL2d1aS9zZWNvbmRwYXJ0eW1lZGlhL3NyYy9zY3NzL3ZhcnMvX3NpemVzLnNjc3MiLCIvVXNlcnMveXlhcmFzaGV2aWNoL0Rlc2t0b3AvS2F0WWFuYS9zZXJ2ZXJzL2d1aS9zZWNvbmRwYXJ0eW1lZGlhL3NyYy9zY3NzL3ZhcnMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDREQ7O0FDQUE7RUFJQyxjQUFBO0FEQUQ7O0FDR0U7RUFDQyx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkNXd0I7RURWeEIsaUJDUXlCO0FGVDVCOztBQ0dHO0VBQ0MseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkN0QnFCO0FGcUJ6Qjs7QUNJRztFQUNDLGFDSGdCO0VESWhCLFlDSmdCO0VES2hCLHNCQUFBO0FERko7O0FDS0c7RUFFQyxtQkFBQTtVQUFBLE9BQUE7RUFDQSxtQkFBQTtBREpKOztBQ09HO0VBQ0Msd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QURMSjs7QUNTSTtFQUNDLDZDQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkNsRG9CO0FGMkN6Qjs7QUNVSTtFQUNDLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QURSTDs7QUNVSztFQUNDLFNBQUE7RUFDQSxpQkM5RG1CO0VEK0RuQixrQkFBQTtFQUNBLFFBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsNEJBQUE7QURSTjs7QUMwQkc7RUFFQyxpQkFBQTtBRHpCSjs7QUNZSztFQUNDLDZEQVcwQjtFQVYxQixXQVUrRjtBRHBCckc7O0FDYUs7RUFDQyxjRTVFYTtBSGlFbkI7O0FDcUJHO0VBRUMsaUJBQUE7QURwQko7O0FDRUs7RUFDQyw2REFnQjBCO0VBZjFCLFdBZWlHO0FEZnZHOztBQ0dLO0VBQ0MsY0UzRWE7QUgwRW5COztBQ2dCRztFQUVDLGdFQUFBO0FEZko7O0FDUks7RUFDQyxnQkFxQjBCO0VBcEIxQixXQW9CZ0M7QURWdEM7O0FDUEs7RUFDQyxXQWdCc0M7QURQNUM7O0FDV0c7RUFDQyxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURUSjs7QUNZRztFQUNDLFVBQUE7QURWSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vc2l6ZXMnO1xuXG4laGVhZGluZyB7XG5cdGZvbnQtc2l6ZTogMy43NXJlbTtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0bGluZS1oZWlnaHQ6IDQuMzc1cmVtO1xufVxuXG4lc3ViLWhlYWRpbmcge1xuXHRmb250LXNpemU6IDEuNTYyNXJlbTtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0bGluZS1oZWlnaHQ6IDIuMTg3NXJlbTtcbn1cblxuJXBhcmFncmFwaC10ZXh0IHtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRsaW5lLWhlaWdodDogMjJweDtcblxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAkaXBhZC1taW4tZGV2aWNlLXdpZHRoKSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6ICRpcGFkLW1heC1kZXZpY2Utd2lkdGgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAyN3B4O1xuXHR9XG59XG5cbiVoaW50IHtcblx0Zm9udC1zaXplOiAxMHB4O1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRsaW5lLWhlaWdodDogOS4zcHg7XG59XG4iLCI6aG9zdCAuY29udGVudC1jb250YWluZXIgLmFydGljbGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGluZS1oZWlnaHQ6IDQuMzc1cmVtO1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMy41cmVtKTtcbiAgcGFkZGluZzogNi44NzVyZW07XG59XG46aG9zdCAuY29udGVudC1jb250YWluZXItaW5uZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMTI4MHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtY29udGFpbmVyIHJvdW5kZWQtY2FyZCB7XG4gIGhlaWdodDogNDYwcHg7XG4gIHdpZHRoOiA0NjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbjpob3N0IC5jb250ZW50LWNvbnRhaW5lciAuYXJ0aWNsZS10ZXh0IHtcbiAgZmxleDogMTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbjpob3N0IC5jb250ZW50LWNvbnRhaW5lci50b3AtdmlkZW8tY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmc6IDAgNi44NzVyZW0gMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLmNvbnRlbnQtY29udGFpbmVyIC50b3AtdmlkZW8taW1hZ2Uge1xuICBib3gtc2hhZG93OiAwIDEwcHggMjVweCByZ2JhKDk5LCA5OSwgOTksIDAuNSk7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTI4MHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtY29udGFpbmVyIC50b3AtdmlkZW8tdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwO1xuICBtYXgtd2lkdGg6IDM1cmVtO1xuICB0ZXh0LXNoYWRvdzogLTAuNXB4IDAgMjBweCAjNTA1MDgwO1xuICB3aWR0aDogNTAlO1xufVxuOmhvc3QgLmNvbnRlbnQtY29udGFpbmVyIC50b3AtdmlkZW8tdGV4dC1jb250YWluZXIge1xuICBsZWZ0OiA1MCU7XG4gIG1heC13aWR0aDogMTI4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEzLjc1cmVtKTtcbn1cbjpob3N0IC5jb250ZW50LWNvbnRhaW5lci5ibHVlLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG46aG9zdCAuY29udGVudC1jb250YWluZXIuYmx1ZS1ncmFkaWVudCA6Om5nLWRlZXAgLnJvdW5kZWQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyNDhkYzEgMCUsICM3NTZjYWQgMTAwJSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgLmNvbnRlbnQtY29udGFpbmVyLmJsdWUtZ3JhZGllbnQgOjpuZy1kZWVwIC5hcnRpY2xlLXRleHQge1xuICBjb2xvcjogIzZiYWRkNTtcbn1cbjpob3N0IC5jb250ZW50LWNvbnRhaW5lci5vcmFuZ2UtZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbjpob3N0IC5jb250ZW50LWNvbnRhaW5lci5vcmFuZ2UtZ3JhZGllbnQgOjpuZy1kZWVwIC5yb3VuZGVkLWNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNzU2Y2FkIDAlLCAjZjY4OTNjIDEwMCUpO1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IC5jb250ZW50LWNvbnRhaW5lci5vcmFuZ2UtZ3JhZGllbnQgOjpuZy1kZWVwIC5hcnRpY2xlLXRleHQge1xuICBjb2xvcjogI2Y2ODkzYztcbn1cbjpob3N0IC5jb250ZW50LWNvbnRhaW5lci5zaW1wbGUtd2hpdGUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTUyLjAyZGVnLCAjMjQ4ZGMxIDAlLCAjNzU2Y2FkIDEwMCUpO1xufVxuOmhvc3QgLmNvbnRlbnQtY29udGFpbmVyLnNpbXBsZS13aGl0ZSA6Om5nLWRlZXAgLnJvdW5kZWQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xufVxuOmhvc3QgLmNvbnRlbnQtY29udGFpbmVyLnNpbXBsZS13aGl0ZSA6Om5nLWRlZXAgLmFydGljbGUtdGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgLmNvbnRlbnQtY29udGFpbmVyIGltYWdlLXRleHQtY2Fyb3VzZWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAuY29udGVudC1jb250YWluZXIud2l0aG91dC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn0iLCJAaW1wb3J0ICd2YXJzL3NpemVzJztcbkBpbXBvcnQgJ3ZhcnMvY29sb3JzJztcbkBpbXBvcnQgJ3ZhcnMvZm9udHMnO1xuXG46aG9zdCB7XG5cdCRtYXgtcmVzcG9uc2l2ZS13aWR0aDogJGNlbnRlci1jb250YWluZXItd2lkdGg7XG5cdCR0b3AtdmlkZW8tYmFjay1jb2xvcjogIzUwNTA4MDtcblxuXHRkaXNwbGF5OiBibG9jaztcblxuXHQuY29udGVudCB7XG5cdFx0Ji1jb250YWluZXIge1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0aGVpZ2h0OiAkY29udGVudC1jb250YWluZXItaGVpZ2h0O1xuXHRcdFx0cGFkZGluZzogJGNvbnRlbnQtY29udGFpbmVyLXBhZGRpbmc7XG5cblx0XHRcdCYtaW5uZXIge1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdG1heC13aWR0aDogJG1heC1yZXNwb25zaXZlLXdpZHRoO1xuXHRcdFx0fVxuXG5cdFx0XHRyb3VuZGVkLWNhcmQge1xuXHRcdFx0XHRoZWlnaHQ6ICRyb3VuZGVkLWNhcmQtc2l6ZTtcblx0XHRcdFx0d2lkdGg6ICRyb3VuZGVkLWNhcmQtc2l6ZTtcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdH1cblxuXHRcdFx0LmFydGljbGUtdGV4dCB7XG5cdFx0XHRcdEBleHRlbmQgJWhlYWRpbmc7XG5cdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cdFx0XHR9XG5cblx0XHRcdCYudG9wLXZpZGVvLWNvbnRhaW5lciB7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0b3ZlcmZsb3cteDogaGlkZGVuO1xuXHRcdFx0XHRwYWRkaW5nOiAwIDYuODc1cmVtIDI1cHg7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdH1cblxuXHRcdFx0LnRvcC12aWRlbyB7XG5cdFx0XHRcdCYtaW1hZ2Uge1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoOTksIDk5LCA5OSwgMC41KTtcblx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0bWluLXdpZHRoOiAkbWF4LXJlc3BvbnNpdmUtd2lkdGg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmLXRleHQge1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiAzNXJlbTtcblx0XHRcdFx0XHR0ZXh0LXNoYWRvdzogLS41cHggMCAyMHB4ICR0b3AtdmlkZW8tYmFjay1jb2xvcjtcblx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXG5cdFx0XHRcdFx0Ji1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAkbWF4LXJlc3BvbnNpdmUtd2lkdGg7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR0b3A6IDUwJTtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHRcdFx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtICN7JGNvbnRlbnQtY29udGFpbmVyLXBhZGRpbmcgKiAyfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdEBtaXhpbiByb3VuZGVkLWNhcmQtc3R5bGUoJGJhY2tncm91bmQsICR0ZXh0LCAkYXJ0aWNsZS10ZXh0KSB7XG5cdFx0XHRcdDo6bmctZGVlcCB7XG5cdFx0XHRcdFx0LnJvdW5kZWQtY2FyZCB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcblx0XHRcdFx0XHRcdGNvbG9yOiAkdGV4dDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYXJ0aWNsZS10ZXh0IHtcblx0XHRcdFx0XHRcdGNvbG9yOiAkYXJ0aWNsZS10ZXh0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQmLmJsdWUtZ3JhZGllbnQge1xuXHRcdFx0XHRAaW5jbHVkZSByb3VuZGVkLWNhcmQtc3R5bGUobGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHN1Yi1jb2xvci1ibHVlIDAlLCAkc3ViLWNvbG9yLXZpb2xldCAxMDAlKSwgI2ZmZiwgJHN1Yi1jb2xvci1ibHVlLTIpO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTsgLy8gdG8gb3ZlcmxhcCBwYXJhbGxheGVzXG5cdFx0XHR9XG5cblx0XHRcdCYub3JhbmdlLWdyYWRpZW50IHtcblx0XHRcdFx0QGluY2x1ZGUgcm91bmRlZC1jYXJkLXN0eWxlKGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRzdWItY29sb3ItdmlvbGV0IDAlLCAkc3ViLWNvbG9yLW9yYW5nZSAxMDAlKSwgI2ZmZiwgJHN1Yi1jb2xvci1vcmFuZ2UpO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTsgLy8gdG8gb3ZlcmxhcCBwYXJhbGxheGVzXG5cdFx0XHR9XG5cblx0XHRcdCYuc2ltcGxlLXdoaXRlIHtcblx0XHRcdFx0QGluY2x1ZGUgcm91bmRlZC1jYXJkLXN0eWxlKCNmZmYsICMwMDAsICNmZmYpO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTUyLjAyZGVnLCAkc3ViLWNvbG9yLWJsdWUgMCUsICRzdWItY29sb3ItdmlvbGV0IDEwMCUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpbWFnZS10ZXh0LWNhcm91c2VsIHtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0fVxuXG5cdFx0XHQmLndpdGhvdXQtcGFkZGluZyB7XG5cdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCIkY2VudGVyLWNvbnRhaW5lci13aWR0aDogMTI4MHB4O1xuJHNpZGUtbWFyZ2luczogY2FsYygoMTAwdncgLSAjeyRjZW50ZXItY29udGFpbmVyLXdpZHRofSkgLyAyKTtcblxuJHRvcC1wYW5lbC1mb250LXNpemU6IDEuNXJlbTtcbiR0b3AtcGFuZWwtcGFkZGluZzogMXJlbTtcbiR0b3AtcGFuZWwtaGVpZ2h0OiAkdG9wLXBhbmVsLWZvbnQtc2l6ZSArIDIgKiAkdG9wLXBhbmVsLXBhZGRpbmc7XG5cbiR0b3AtcGFuZWwtbG9nby1oZWlnaHQ6IDcuNXJlbTtcbiR0b3AtcGFuZWwtbG9nby13aWR0aDogMiAqICR0b3AtcGFuZWwtbG9nby1oZWlnaHQ7XG4kdG9wLXBhbmVsLWxvZ28tb2Zmc2V0OiAkdG9wLXBhbmVsLWxvZ28taGVpZ2h0IC8gNDtcbiR0b3AtcGFuZWwtbG9nby1pbmxpbmUtaGVpZ2h0OiAkdG9wLXBhbmVsLWhlaWdodCAvIDEuNTtcbiR0b3AtcGFuZWwtbG9nby1pbmxpbmUtb2Zmc2V0OiAkdG9wLXBhbmVsLWxvZ28taW5saW5lLWhlaWdodCAvIDQ7XG5cbiR0b3AtcGFuZWwtbG9nby1jb250YWluZXItbWluLXdpZHRoOiAyNXJlbTtcbiR0b3AtcGFuZWwtbG9nby1jb250YWluZXItd2lkdGg6IGNhbGMoI3skdG9wLXBhbmVsLWxvZ28tY29udGFpbmVyLW1pbi13aWR0aH0gKyAjeyRzaWRlLW1hcmdpbnN9IC0gMXJlbSk7XG5cbiRtaW4tbGVmdC1wYXJ0LXdpZHRoOiAkY2VudGVyLWNvbnRhaW5lci13aWR0aCAvIDQ7XG4kbGVmdC1wYXJ0LXdpZHRoOiBjYWxjKCN7JG1pbi1sZWZ0LXBhcnQtd2lkdGh9ICsgI3skc2lkZS1tYXJnaW5zfSAtIDFyZW0pO1xuXG4kbWluLXJpZ2h0LXBhcnQtd2lkdGg6ICRjZW50ZXItY29udGFpbmVyLXdpZHRoIC0gJG1pbi1sZWZ0LXBhcnQtd2lkdGg7XG4kcmlnaHQtcGFydC13aWR0aDogY2FsYygxMDAlIC0gI3skbGVmdC1wYXJ0LXdpZHRofSk7XG5cbiRyb3VuZGVkLWNhcmQtcGFkZGluZzogNDBweDtcbiRyb3VuZGVkLWNhcmQtc2l6ZTogNDYwcHg7XG4kY29udGVudC1jb250YWluZXItcGFkZGluZzogNi44NzVyZW07XG5cbiRjb250ZW50LWNvbnRhaW5lci1oZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyR0b3AtcGFuZWwtaGVpZ2h0fSk7XG5cbiRmb290ZXItZm9udC1zaXplOiAxcmVtO1xuJGZvb3Rlci1pY29uLXNpemU6IDI0cHg7XG4kZm9vdGVyLXBhZGRpbmc6IDEuNXJlbTtcbiRmb290ZXItaGVpZ2h0OiBjYWxjKCN7JGZvb3Rlci1pY29uLXNpemV9ICsgI3syICogJGZvb3Rlci1wYWRkaW5nfSk7XG5cbiRpcGFkLXByby1tYXgtZGV2aWNlLXdpZHRoOiAxMTEycHg7XG4kaXBhZC1wcm8tbWluLWRldmljZS13aWR0aDogODM0cHg7XG4kaXBhZC1tYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHg7XG4kaXBhZC1taW4tZGV2aWNlLXdpZHRoOiA3NjhweDtcblxuJGxhcHRvcC1taW4td2lkdGg6IDEyMjRweDtcbiRsYXJnZS1zY3JlZW4tbWluLXdpZHRoOiAxODI0cHg7XG5cbiRiaWdnZXItcm91bmRlZC1jYXJkLXNpemU6IDU2MHB4O1xuJGNvbnRlbnQtY29udGFpbmVyLXBhZGRpbmctbWVkaWE6IDIuNXJlbTtcbiIsIiRwcmltYXJ5OiAjMjQ4ZGMxO1xuJHN1Yi1jb2xvci12aW9sZXQ6ICM3NTZjYWQ7XG4kc3ViLWNvbG9yLWJsdWU6ICMyNDhkYzE7XG4kc3ViLWNvbG9yLWJsdWUtMjogIzZiYWRkNTtcbiRzdWItY29sb3Itb3JhbmdlOiAjZjY4OTNjO1xuJHNlY29uZHBhcnR5bWVkaWEtcHJpbWFyeS1kYXJrLWNvbnRyYXN0OiAjNjM2MzYzO1xuXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAkc2Vjb25kcGFydHltZWRpYS1wcmltYXJ5LWRhcmstY29udHJhc3Q7XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_text_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/text-content.service */ "./src/app/shared/services/text-content.service.ts");
/* harmony import */ var _shared_services_top_panel_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/top-panel-link.service */ "./src/app/shared/services/top-panel-link.service.ts");
/* harmony import */ var _shared_helpers_sizes_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/helpers/sizes.helper */ "./src/app/shared/helpers/sizes.helper.ts");
/* harmony import */ var _shared_constants_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/constants/content */ "./src/app/shared/constants/content.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_services_general_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/general.service */ "./src/app/shared/services/general.service.ts");








let HomeComponent = class HomeComponent {
    constructor(textContentService, linkService, containerRef, generalService) {
        this.containerRef = containerRef;
        this.generalService = generalService;
        this.currentSolutionsIndex = 0;
        this.windowResizeListener = this.onWindowWidthUpdate;
        this.windowWidthUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.articleNamesSubscription = textContentService.articles.subscribe((articles) => {
            this.articles = articles;
        });
        this.carouselItemsSubscription = textContentService.carouselItems.subscribe((items) => {
            this.carouselItems = items;
        });
        this.linkSubscription = linkService.link.subscribe((link) => {
            if (!link) {
                return;
            }
            const i = this.carouselItems && this.carouselItems.findIndex(item => `.${item.LINK}` === link.link);
            if (i !== undefined && i !== null && i >= 0) {
                this.currentSolutionsIndex = i;
            }
        });
        this.windowWidthUpdateSubscription = this.windowWidthUpdate.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(_shared_constants_content__WEBPACK_IMPORTED_MODULE_5__["VIDEO_RESOLUTION_UPDATE_DEBOUNCE_TIME"])).subscribe((width) => {
            this.videoHeight = Object(_shared_helpers_sizes_helper__WEBPACK_IMPORTED_MODULE_4__["getResolutionForWidth"])(width).height;
        });
    }
    ngOnInit() {
        this.videoHeight = Object(_shared_helpers_sizes_helper__WEBPACK_IMPORTED_MODULE_4__["getResolutionForWidth"])(this.containerRef.element.nativeElement.clientWidth).height;
    }
    ngAfterViewChecked() {
        this.generalService.videoWidth.next(this.introVideo.nativeElement.clientWidth);
    }
    ngOnDestroy() {
        if (this.articleNamesSubscription) {
            this.articleNamesSubscription.unsubscribe();
        }
        if (this.carouselItemsSubscription) {
            this.carouselItemsSubscription.unsubscribe();
        }
        if (this.linkSubscription) {
            this.linkSubscription.unsubscribe();
        }
        if (this.windowWidthUpdateSubscription) {
            this.windowWidthUpdateSubscription.unsubscribe();
        }
    }
    get videoNames() {
        return Object(_shared_helpers_sizes_helper__WEBPACK_IMPORTED_MODULE_4__["getVideoNameForHeight"])(this.videoHeight);
    }
    onWindowWidthUpdate() {
        this.generalService.videoWidth.next(this.introVideo.nativeElement.clientWidth);
        this.windowWidthUpdate.emit(this.containerRef.element.nativeElement.clientWidth);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _shared_services_text_content_service__WEBPACK_IMPORTED_MODULE_2__["TextContentService"] },
    { type: _shared_services_top_panel_link_service__WEBPACK_IMPORTED_MODULE_3__["TopPanelLinkService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _shared_services_general_service__WEBPACK_IMPORTED_MODULE_7__["GeneralService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('introVideo', { static: false })
], HomeComponent.prototype, "introVideo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize')
], HomeComponent.prototype, "windowResizeListener", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_components_image_text_carousel_image_text_carousel_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/image-text-carousel/image-text-carousel.module */ "./src/app/shared/components/image-text-carousel/image-text-carousel.module.ts");
/* harmony import */ var _shared_components_rounded_card_rounded_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/rounded-card/rounded-card.module */ "./src/app/shared/components/rounded-card/rounded-card.module.ts");
/* harmony import */ var _shared_directives_vertical_parallax_vertical_parallax_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/directives/vertical-parallax/vertical-parallax.module */ "./src/app/shared/directives/vertical-parallax/vertical-parallax.module.ts");








let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _shared_components_image_text_carousel_image_text_carousel_module__WEBPACK_IMPORTED_MODULE_5__["ImageTextCarouselModule"],
            _shared_components_rounded_card_rounded_card_module__WEBPACK_IMPORTED_MODULE_6__["RoundedCardModule"],
            _shared_directives_vertical_parallax_vertical_parallax_module__WEBPACK_IMPORTED_MODULE_7__["VerticalParallaxModule"]
        ],
        exports: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/pages/home/home.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.routes.ts ***!
  \*******************************************/
/*! exports provided: HomeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutes", function() { return HomeRoutes; });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");

const HomeRoutes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: '**',
        redirectTo: ''
    }
];


/***/ }),

/***/ "./src/app/pages/placeholder/placeholder.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/placeholder/placeholder.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  -webkit-box-align: center;\n          align-items: center;\n  color: #636363;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100vh;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .container-top {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .container-top .contact-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  z-index: 1;\n}\n:host .container-top .contact-info-item {\n  -webkit-box-align: center;\n          align-items: center;\n  color: #248dc1;\n  display: -webkit-box;\n  display: flex;\n  font-size: 0.8rem;\n  margin-top: 0.5rem;\n  text-decoration: none;\n}\n:host .container-top .contact-info-item-icon {\n  font-size: 24px;\n}\n:host .container-top .contact-info-item-text:hover {\n  text-decoration: underline;\n}\n:host .container-middle {\n  -webkit-box-align: center;\n          align-items: center;\n  color: #248dc1;\n  display: -webkit-box;\n  display: flex;\n  height: 100vh;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: absolute;\n  width: 100vw;\n}\n:host .container-bottom {\n  margin-bottom: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95eWFyYXNoZXZpY2gvRGVza3RvcC9LYXRZYW5hL3NlcnZlcnMvZ3VpL3NlY29uZHBhcnR5bWVkaWEvc3JjL2FwcC9wYWdlcy9wbGFjZWhvbGRlci9wbGFjZWhvbGRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGxhY2Vob2xkZXIvcGxhY2Vob2xkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMveXlhcmFzaGV2aWNoL0Rlc2t0b3AvS2F0WWFuYS9zZXJ2ZXJzL2d1aS9zZWNvbmRwYXJ0eW1lZGlhL3NyYy9zY3NzL3ZhcnMvX2NvbG9ycy5zY3NzIiwiL1VzZXJzL3l5YXJhc2hldmljaC9EZXNrdG9wL0thdFlhbmEvc2VydmVycy9ndWkvc2Vjb25kcGFydHltZWRpYS9zcmMvc2Nzcy92YXJzL19zaXplcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0MseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0ZEO0FES0U7RUFDQyx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDSEg7QURLRztFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFVBQUE7QUNISjtBREtJO0VBQ0MseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGNFdEJZO0VGdUJaLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0hMO0FES0s7RUFDQyxlR0ZhO0FGRG5CO0FETUs7RUFDQywwQkFBQTtBQ0pOO0FEVUU7RUFDQyx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsY0UzQ087RUY0Q1Asb0JBQUE7RUFBQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNSSDtBRFdFO0VBQ0MscUJBQUE7QUNUSCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYWNlaG9sZGVyL3BsYWNlaG9sZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFycy9jb2xvcnMnO1xuQGltcG9ydCAndmFycy9zaXplcyc7XG5cbjpob3N0IHtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Y29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGhlaWdodDogMTAwdmg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuXHQuY29udGFpbmVyIHtcblx0XHQmLXRvcCB7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblx0XHRcdC5jb250YWN0LWluZm8ge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHR6LWluZGV4OiAxO1xuXG5cdFx0XHRcdCYtaXRlbSB7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRjb2xvcjogJHN1Yi1jb2xvci1ibHVlO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAuOHJlbTtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAuNXJlbTtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cblx0XHRcdFx0XHQmLWljb24ge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAkZm9vdGVyLWljb24tc2l6ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmLXRleHQ6aG92ZXIge1xuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji1taWRkbGUge1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGNvbG9yOiAkcHJpbWFyeTtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR3aWR0aDogMTAwdnc7XG5cdFx0fVxuXG5cdFx0Ji1ib3R0b20ge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMS41cmVtO1xuXHRcdH1cblx0fVxufVxuIiwiOmhvc3Qge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzYzNjM2MztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgLmNvbnRhaW5lci10b3Age1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgLmNvbnRhaW5lci10b3AgLmNvbnRhY3QtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6IDE7XG59XG46aG9zdCAuY29udGFpbmVyLXRvcCAuY29udGFjdC1pbmZvLWl0ZW0ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzI0OGRjMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuOmhvc3QgLmNvbnRhaW5lci10b3AgLmNvbnRhY3QtaW5mby1pdGVtLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG59XG46aG9zdCAuY29udGFpbmVyLXRvcCAuY29udGFjdC1pbmZvLWl0ZW0tdGV4dDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuOmhvc3QgLmNvbnRhaW5lci1taWRkbGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzI0OGRjMTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuOmhvc3QgLmNvbnRhaW5lci1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59IiwiJHByaW1hcnk6ICMyNDhkYzE7XG4kc3ViLWNvbG9yLXZpb2xldDogIzc1NmNhZDtcbiRzdWItY29sb3ItYmx1ZTogIzI0OGRjMTtcbiRzdWItY29sb3ItYmx1ZS0yOiAjNmJhZGQ1O1xuJHN1Yi1jb2xvci1vcmFuZ2U6ICNmNjg5M2M7XG4kc2Vjb25kcGFydHltZWRpYS1wcmltYXJ5LWRhcmstY29udHJhc3Q6ICM2MzYzNjM7XG5cbiRwcmltYXJ5LXRleHQtY29sb3I6ICRzZWNvbmRwYXJ0eW1lZGlhLXByaW1hcnktZGFyay1jb250cmFzdDtcbiIsIiRjZW50ZXItY29udGFpbmVyLXdpZHRoOiAxMjgwcHg7XG4kc2lkZS1tYXJnaW5zOiBjYWxjKCgxMDB2dyAtICN7JGNlbnRlci1jb250YWluZXItd2lkdGh9KSAvIDIpO1xuXG4kdG9wLXBhbmVsLWZvbnQtc2l6ZTogMS41cmVtO1xuJHRvcC1wYW5lbC1wYWRkaW5nOiAxcmVtO1xuJHRvcC1wYW5lbC1oZWlnaHQ6ICR0b3AtcGFuZWwtZm9udC1zaXplICsgMiAqICR0b3AtcGFuZWwtcGFkZGluZztcblxuJHRvcC1wYW5lbC1sb2dvLWhlaWdodDogNy41cmVtO1xuJHRvcC1wYW5lbC1sb2dvLXdpZHRoOiAyICogJHRvcC1wYW5lbC1sb2dvLWhlaWdodDtcbiR0b3AtcGFuZWwtbG9nby1vZmZzZXQ6ICR0b3AtcGFuZWwtbG9nby1oZWlnaHQgLyA0O1xuJHRvcC1wYW5lbC1sb2dvLWlubGluZS1oZWlnaHQ6ICR0b3AtcGFuZWwtaGVpZ2h0IC8gMS41O1xuJHRvcC1wYW5lbC1sb2dvLWlubGluZS1vZmZzZXQ6ICR0b3AtcGFuZWwtbG9nby1pbmxpbmUtaGVpZ2h0IC8gNDtcblxuJHRvcC1wYW5lbC1sb2dvLWNvbnRhaW5lci1taW4td2lkdGg6IDI1cmVtO1xuJHRvcC1wYW5lbC1sb2dvLWNvbnRhaW5lci13aWR0aDogY2FsYygjeyR0b3AtcGFuZWwtbG9nby1jb250YWluZXItbWluLXdpZHRofSArICN7JHNpZGUtbWFyZ2luc30gLSAxcmVtKTtcblxuJG1pbi1sZWZ0LXBhcnQtd2lkdGg6ICRjZW50ZXItY29udGFpbmVyLXdpZHRoIC8gNDtcbiRsZWZ0LXBhcnQtd2lkdGg6IGNhbGMoI3skbWluLWxlZnQtcGFydC13aWR0aH0gKyAjeyRzaWRlLW1hcmdpbnN9IC0gMXJlbSk7XG5cbiRtaW4tcmlnaHQtcGFydC13aWR0aDogJGNlbnRlci1jb250YWluZXItd2lkdGggLSAkbWluLWxlZnQtcGFydC13aWR0aDtcbiRyaWdodC1wYXJ0LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyRsZWZ0LXBhcnQtd2lkdGh9KTtcblxuJHJvdW5kZWQtY2FyZC1wYWRkaW5nOiA0MHB4O1xuJHJvdW5kZWQtY2FyZC1zaXplOiA0NjBweDtcbiRjb250ZW50LWNvbnRhaW5lci1wYWRkaW5nOiA2Ljg3NXJlbTtcblxuJGNvbnRlbnQtY29udGFpbmVyLWhlaWdodDogY2FsYygxMDB2aCAtICN7JHRvcC1wYW5lbC1oZWlnaHR9KTtcblxuJGZvb3Rlci1mb250LXNpemU6IDFyZW07XG4kZm9vdGVyLWljb24tc2l6ZTogMjRweDtcbiRmb290ZXItcGFkZGluZzogMS41cmVtO1xuJGZvb3Rlci1oZWlnaHQ6IGNhbGMoI3skZm9vdGVyLWljb24tc2l6ZX0gKyAjezIgKiAkZm9vdGVyLXBhZGRpbmd9KTtcblxuJGlwYWQtcHJvLW1heC1kZXZpY2Utd2lkdGg6IDExMTJweDtcbiRpcGFkLXByby1taW4tZGV2aWNlLXdpZHRoOiA4MzRweDtcbiRpcGFkLW1heC1kZXZpY2Utd2lkdGg6IDEwMjRweDtcbiRpcGFkLW1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4O1xuXG4kbGFwdG9wLW1pbi13aWR0aDogMTIyNHB4O1xuJGxhcmdlLXNjcmVlbi1taW4td2lkdGg6IDE4MjRweDtcblxuJGJpZ2dlci1yb3VuZGVkLWNhcmQtc2l6ZTogNTYwcHg7XG4kY29udGVudC1jb250YWluZXItcGFkZGluZy1tZWRpYTogMi41cmVtO1xuIl19 */"

/***/ }),

/***/ "./src/app/pages/placeholder/placeholder.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/placeholder/placeholder.component.ts ***!
  \************************************************************/
/*! exports provided: PlaceholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderComponent", function() { return PlaceholderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_constants_contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/constants/contacts */ "./src/app/shared/constants/contacts.ts");



let PlaceholderComponent = class PlaceholderComponent {
    constructor() {
        this.CONTACTS = _shared_constants_contacts__WEBPACK_IMPORTED_MODULE_2__["CONTACTS"];
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlaceholderComponent.prototype, "copyrightYear", void 0);
PlaceholderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'placeholder',
        template: __webpack_require__(/*! raw-loader!./placeholder.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/placeholder/placeholder.component.html"),
        styles: [__webpack_require__(/*! ./placeholder.component.scss */ "./src/app/pages/placeholder/placeholder.component.scss")]
    })
], PlaceholderComponent);



/***/ }),

/***/ "./src/app/pages/placeholder/placeholder.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/placeholder/placeholder.module.ts ***!
  \*********************************************************/
/*! exports provided: PlaceholderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderModule", function() { return PlaceholderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _placeholder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeholder.component */ "./src/app/pages/placeholder/placeholder.component.ts");




let PlaceholderModule = class PlaceholderModule {
};
PlaceholderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_placeholder_component__WEBPACK_IMPORTED_MODULE_3__["PlaceholderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_placeholder_component__WEBPACK_IMPORTED_MODULE_3__["PlaceholderComponent"]]
    })
], PlaceholderModule);



/***/ }),

/***/ "./src/app/shared/components/image-text-carousel/image-text-carousel.animation.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/image-text-carousel/image-text-carousel.animation.ts ***!
  \****************************************************************************************/
/*! exports provided: moveAnimationStates, units, offsets, moveAnimationTime, moveAnimation, appearAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveAnimationStates", function() { return moveAnimationStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "units", function() { return units; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offsets", function() { return offsets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveAnimationTime", function() { return moveAnimationTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveAnimation", function() { return moveAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appearAnimation", function() { return appearAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

const moveAnimationStates = {
    hiddenInLeft: 'hiddenInLeft',
    shownInCenter: 'shownInCenter',
    hiddenInRight: 'hiddenInRight'
};
const units = 'vw';
const offsets = {
    left: `-100${units}`,
    center: '0',
    right: `100${units}`
};
const moveAnimationTime = 1000;
const moveAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('moveFigureTrigger', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])(moveAnimationStates.hiddenInLeft, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: offsets.left })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])(moveAnimationStates.shownInCenter, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: offsets.center })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])(moveAnimationStates.hiddenInRight, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: offsets.right })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`${moveAnimationStates.hiddenInLeft} <=> ${moveAnimationStates.hiddenInRight}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0s')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${moveAnimationTime}ms 0s ease-in-out`))
]);
const appearAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('appearTrigger', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s .75s linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1
        }))
    ])
]);


/***/ }),

/***/ "./src/app/shared/components/image-text-carousel/image-text-carousel.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/image-text-carousel/image-text-carousel.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .carousel-text-title {\n  font-size: 3.75rem;\n  font-weight: 900;\n  line-height: 4.375rem;\n}\n\n:host .carousel-text-subtitle {\n  font-size: 1.5625rem;\n  font-weight: 900;\n  line-height: 2.1875rem;\n}\n\n:host .carousel-text-content {\n  font-size: 16px;\n  font-weight: normal;\n  line-height: 22px;\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {\n  :host .carousel-text-content {\n    font-size: 20px;\n    line-height: 27px;\n  }\n}\n\n:host .carousel-text-title .pdf-hint {\n  font-size: 10px;\n  font-weight: normal;\n  line-height: 9.3px;\n}\n\n:host {\n  display: -webkit-box;\n  display: flex;\n}\n\n:host .carousel-text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-right: calc(40px - 6.875rem);\n  width: calc(460px - 80px);\n}\n\n:host .carousel-text-container {\n  display: -webkit-box;\n  display: flex;\n}\n\n:host .carousel-text-title {\n  color: #756cad;\n  margin: 0;\n}\n\n:host .carousel-text-title-link {\n  cursor: alias;\n  position: relative;\n  text-decoration: none;\n}\n\n:host .carousel-text-title-link.disabled {\n  cursor: default;\n}\n\n:host .carousel-text-title-icon {\n  background-color: #756cad;\n  display: inline-block;\n  font-size: 36px;\n  height: 36px;\n  -webkit-mask: url('download_pdf.svg');\n          mask: url('download_pdf.svg');\n  -webkit-mask-size: cover;\n          mask-size: cover;\n  width: 36px;\n}\n\n:host .carousel-text-title .pdf-hint {\n  position: absolute;\n  top: 1rem;\n  white-space: nowrap;\n}\n\n:host .carousel-text-subtitle {\n  color: #756cad;\n  margin: 0;\n}\n\n:host .carousel-text-content ::ng-deep strong {\n  color: #756cad;\n}\n\n:host .carousel-item {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  max-width: 1280px;\n  position: relative;\n  width: calc(100% - 6.875rem * 2);\n}\n\n:host .carousel-item-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n\n:host .carousel-item-figures-container {\n  overflow: hidden;\n}\n\n:host .carousel-item-image {\n  display: block;\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 50%;\n}\n\n:host .carousel-item-image-container {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 100%;\n  margin: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n:host .carousel-item-image-container.inactive {\n  display: none;\n}\n\n:host .carousel-item-selector {\n  background-color: #248dc1;\n  border-radius: 50%;\n  height: 0.75rem;\n  margin: 0.5rem;\n  cursor: pointer;\n}\n\n:host .carousel-item-selector.inactive {\n  background-color: rgba(36, 141, 193, 0.5);\n}\n\n:host .carousel-item-selector-container {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n:host .carousel-item-switch-button {\n  cursor: pointer;\n  height: 100%;\n  min-width: 6.875rem;\n  position: absolute;\n  top: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: calc((100vw - 1280px) / 2);\n}\n\n:host .carousel-item-switch-button.next {\n  right: 0;\n}\n\n:host .carousel-item-switch-button.next:hover {\n  background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 0.5)));\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5));\n}\n\n:host .carousel-item-switch-button.prev {\n  left: 0;\n}\n\n:host .carousel-item-switch-button.prev:hover {\n  background: -webkit-gradient(linear, right top, left top, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 0.5)));\n  background: linear-gradient(270deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5));\n}\n\n:host .carousel-item-switch-button-arrow {\n  color: white;\n  display: inline-block;\n  text-shadow: 0 0 10px black;\n  -webkit-transform: scaleY(2);\n          transform: scaleY(2);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n:host .carousel-item-switch-button-arrow-wrapper {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95eWFyYXNoZXZpY2gvRGVza3RvcC9LYXRZYW5hL3NlcnZlcnMvZ3VpL3NlY29uZHBhcnR5bWVkaWEvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbWFnZS10ZXh0LWNhcm91c2VsL2ltYWdlLXRleHQtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ltYWdlLXRleHQtY2Fyb3VzZWwvaW1hZ2UtdGV4dC1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy95eWFyYXNoZXZpY2gvRGVza3RvcC9LYXRZYW5hL3NlcnZlcnMvZ3VpL3NlY29uZHBhcnR5bWVkaWEvc3RkaW4iLCIvVXNlcnMveXlhcmFzaGV2aWNoL0Rlc2t0b3AvS2F0WWFuYS9zZXJ2ZXJzL2d1aS9zZWNvbmRwYXJ0eW1lZGlhL3NyYy9zY3NzL3ZhcnMvX2NvbG9ycy5zY3NzIiwiL1VzZXJzL3l5YXJhc2hldmljaC9EZXNrdG9wL0thdFlhbmEvc2VydmVycy9ndWkvc2Vjb25kcGFydHltZWRpYS9zcmMvc2Nzcy92YXJzL19zaXplcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDREQ7O0FESUE7RUFDQyxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNERDs7QURJQTtFQUNDLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDREQ7O0FER0M7RUFMRDtJQU1FLGVBQUE7SUFDQSxpQkFBQTtFQ0FBO0FBQ0Y7O0FER0E7RUFDQyxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FEOztBQ3hCQTtFQUVDLG9CQUFBO0VBQUEsYUFBQTtBRDBCRDs7QUN2QkU7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FEeUJIOztBQ3ZCRztFQUNDLG9CQUFBO0VBQUEsYUFBQTtBRHlCSjs7QUN0Qkc7RUFFQyxjQ3BCZTtFRHFCZixTQUFBO0FEdUJKOztBQ3JCSTtFQUNDLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEdUJMOztBQ3JCSztFQUNDLGVBQUE7QUR1Qk47O0FDbkJJO0VBRUMseUJDbkNjO0VEb0NkLHFCQUFBO0VBQ0EsZUFIWTtFQUlaLFlBSlk7RUFLWixxQ0FBQTtVQUFBLDZCQUFBO0VBQ0Esd0JBQUE7VUFBQSxnQkFBQTtFQUNBLFdBUFk7QUQyQmpCOztBQ2pCSTtFQUVDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FEa0JMOztBQ2RHO0VBRUMsY0N0RGU7RUR1RGYsU0FBQTtBRGVKOztBQ1ZJO0VBQ0MsY0M3RGM7QUZ5RW5COztBQ1BFO0VBQ0MseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGlCRXZFc0I7RUZ3RXRCLGtCQUFBO0VBQ0EsZ0NBQUE7QURTSDs7QUNQRztFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBRFNKOztBQ05HO0VBQ0MsZ0JBQUE7QURRSjs7QUNMRztFQUNDLGNBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxVQUFBO0FET0o7O0FDTEk7RUFDQyx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBRE9MOztBQ0xLO0VBQ0MsYUFBQTtBRE9OOztBQ0ZHO0VBR0MseUJDaEhNO0VEaUhOLGtCQUFBO0VBQ0EsZUFKc0I7RUFLdEIsY0FKeUI7RUFLekIsZUFBQTtBREVKOztBQ0FJO0VBQ0MseUNBQUE7QURFTDs7QUNDSTtFQUNDLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FEQ0w7O0FDR0c7RUFHQyxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CRTlHd0I7RUYrR3hCLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsaUNBQUE7QURISjs7QUNLSTtFQUNDLFFBQUE7QURITDs7QUNLSztFQUNDLHFIQUFBO0VBQUEsb0ZBQUE7QURITjs7QUNPSTtFQUNDLE9BQUE7QURMTDs7QUNPSztFQUNDLHFIQUFBO0VBQUEscUZBQUE7QURMTjs7QUNTSTtFQUNDLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FEUEw7O0FDU0s7RUFDQyx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7QURQTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ltYWdlLXRleHQtY2Fyb3VzZWwvaW1hZ2UtdGV4dC1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vc2l6ZXMnO1xuXG4laGVhZGluZyB7XG5cdGZvbnQtc2l6ZTogMy43NXJlbTtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0bGluZS1oZWlnaHQ6IDQuMzc1cmVtO1xufVxuXG4lc3ViLWhlYWRpbmcge1xuXHRmb250LXNpemU6IDEuNTYyNXJlbTtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0bGluZS1oZWlnaHQ6IDIuMTg3NXJlbTtcbn1cblxuJXBhcmFncmFwaC10ZXh0IHtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRsaW5lLWhlaWdodDogMjJweDtcblxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAkaXBhZC1taW4tZGV2aWNlLXdpZHRoKSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6ICRpcGFkLW1heC1kZXZpY2Utd2lkdGgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAyN3B4O1xuXHR9XG59XG5cbiVoaW50IHtcblx0Zm9udC1zaXplOiAxMHB4O1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRsaW5lLWhlaWdodDogOS4zcHg7XG59XG4iLCI6aG9zdCAuY2Fyb3VzZWwtdGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGluZS1oZWlnaHQ6IDQuMzc1cmVtO1xufVxuXG46aG9zdCAuY2Fyb3VzZWwtdGV4dC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41NjI1cmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMi4xODc1cmVtO1xufVxuXG46aG9zdCAuY2Fyb3VzZWwtdGV4dC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgOmhvc3QgLmNhcm91c2VsLXRleHQtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICB9XG59XG5cbjpob3N0IC5jYXJvdXNlbC10ZXh0LXRpdGxlIC5wZGYtaGludCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDkuM3B4O1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuY2Fyb3VzZWwtdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGMoNDBweCAtIDYuODc1cmVtKTtcbiAgd2lkdGg6IGNhbGMoNDYwcHggLSA4MHB4KTtcbn1cbjpob3N0IC5jYXJvdXNlbC10ZXh0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuY2Fyb3VzZWwtdGV4dC10aXRsZSB7XG4gIGNvbG9yOiAjNzU2Y2FkO1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuY2Fyb3VzZWwtdGV4dC10aXRsZS1saW5rIHtcbiAgY3Vyc29yOiBhbGlhcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG46aG9zdCAuY2Fyb3VzZWwtdGV4dC10aXRsZS1saW5rLmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuOmhvc3QgLmNhcm91c2VsLXRleHQtdGl0bGUtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NTZjYWQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1hc2s6IHVybCh+YXNzZXRzL2ljb25zL2Rvd25sb2FkX3BkZi5zdmcpO1xuICBtYXNrLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMzZweDtcbn1cbjpob3N0IC5jYXJvdXNlbC10ZXh0LXRpdGxlIC5wZGYtaGludCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuOmhvc3QgLmNhcm91c2VsLXRleHQtc3VidGl0bGUge1xuICBjb2xvcjogIzc1NmNhZDtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLmNhcm91c2VsLXRleHQtY29udGVudCA6Om5nLWRlZXAgc3Ryb25nIHtcbiAgY29sb3I6ICM3NTZjYWQ7XG59XG46aG9zdCAuY2Fyb3VzZWwtaXRlbSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogMTI4MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2Ljg3NXJlbSAqIDIpO1xufVxuOmhvc3QgLmNhcm91c2VsLWl0ZW0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAuY2Fyb3VzZWwtaXRlbS1maWd1cmVzLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCAuY2Fyb3VzZWwtaXRlbS1pbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4OiAxO1xuICB3aWR0aDogNTAlO1xufVxuOmhvc3QgLmNhcm91c2VsLWl0ZW0taW1hZ2UtY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmNhcm91c2VsLWl0ZW0taW1hZ2UtY29udGFpbmVyLmluYWN0aXZlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IC5jYXJvdXNlbC1pdGVtLXNlbGVjdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0OGRjMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDAuNzVyZW07XG4gIG1hcmdpbjogMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAuY2Fyb3VzZWwtaXRlbS1zZWxlY3Rvci5pbmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDE0MSwgMTkzLCAwLjUpO1xufVxuOmhvc3QgLmNhcm91c2VsLWl0ZW0tc2VsZWN0b3ItY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCAuY2Fyb3VzZWwtaXRlbS1zd2l0Y2gtYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogNi44NzVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgd2lkdGg6IGNhbGMoKDEwMHZ3IC0gMTI4MHB4KSAvIDIpO1xufVxuOmhvc3QgLmNhcm91c2VsLWl0ZW0tc3dpdGNoLWJ1dHRvbi5uZXh0IHtcbiAgcmlnaHQ6IDA7XG59XG46aG9zdCAuY2Fyb3VzZWwtaXRlbS1zd2l0Y2gtYnV0dG9uLm5leHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSk7XG59XG46aG9zdCAuY2Fyb3VzZWwtaXRlbS1zd2l0Y2gtYnV0dG9uLnByZXYge1xuICBsZWZ0OiAwO1xufVxuOmhvc3QgLmNhcm91c2VsLWl0ZW0tc3dpdGNoLWJ1dHRvbi5wcmV2OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpKTtcbn1cbjpob3N0IC5jYXJvdXNlbC1pdGVtLXN3aXRjaC1idXR0b24tYXJyb3cge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgyKTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG46aG9zdCAuY2Fyb3VzZWwtaXRlbS1zd2l0Y2gtYnV0dG9uLWFycm93LXdyYXBwZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufSIsIkBpbXBvcnQgJ3ZhcnMvY29sb3JzJztcbkBpbXBvcnQgJ3ZhcnMvc2l6ZXMnO1xuQGltcG9ydCAndmFycy9mb250cyc7XG5cbjpob3N0IHtcblx0JGFycm93LXdpZHRoOiAkY29udGVudC1jb250YWluZXItcGFkZGluZztcblx0ZGlzcGxheTogZmxleDtcblxuXHQuY2Fyb3VzZWwge1xuXHRcdCYtdGV4dCB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdHBhZGRpbmctcmlnaHQ6IGNhbGMoI3skcm91bmRlZC1jYXJkLXBhZGRpbmd9IC0gI3skYXJyb3ctd2lkdGh9KTtcblx0XHRcdHdpZHRoOiBjYWxjKCN7JHJvdW5kZWQtY2FyZC1zaXplfSAtICN7JHJvdW5kZWQtY2FyZC1wYWRkaW5nICogMn0pO1xuXG5cdFx0XHQmLWNvbnRhaW5lciB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHR9XG5cblx0XHRcdCYtdGl0bGUge1xuXHRcdFx0XHRAZXh0ZW5kICVoZWFkaW5nO1xuXHRcdFx0XHRjb2xvcjogJHN1Yi1jb2xvci12aW9sZXQ7XG5cdFx0XHRcdG1hcmdpbjogMDtcblxuXHRcdFx0XHQmLWxpbmsge1xuXHRcdFx0XHRcdGN1cnNvcjogYWxpYXM7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuXHRcdFx0XHRcdCYuZGlzYWJsZWQge1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBkZWZhdWx0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYtaWNvbiB7XG5cdFx0XHRcdFx0JGljb24tc2l6ZTogMzZweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkc3ViLWNvbG9yLXZpb2xldDtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAkaWNvbi1zaXplO1xuXHRcdFx0XHRcdGhlaWdodDogJGljb24tc2l6ZTtcblx0XHRcdFx0XHRtYXNrOiB1cmwofmFzc2V0cy9pY29ucy9kb3dubG9hZF9wZGYuc3ZnKTtcblx0XHRcdFx0XHRtYXNrLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRcdHdpZHRoOiAkaWNvbi1zaXplO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBkZi1oaW50IHtcblx0XHRcdFx0XHRAZXh0ZW5kICVoaW50O1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHR0b3A6IDFyZW07XG5cdFx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQmLXN1YnRpdGxlIHtcblx0XHRcdFx0QGV4dGVuZCAlc3ViLWhlYWRpbmc7XG5cdFx0XHRcdGNvbG9yOiAkc3ViLWNvbG9yLXZpb2xldDtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0fVxuXG5cdFx0XHQmLWNvbnRlbnQge1xuXHRcdFx0XHRAZXh0ZW5kICVwYXJhZ3JhcGgtdGV4dDtcblx0XHRcdFx0OjpuZy1kZWVwIHN0cm9uZyB7XG5cdFx0XHRcdFx0Y29sb3I6ICRzdWItY29sb3ItdmlvbGV0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji1pdGVtIHtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdG1heC13aWR0aDogJGNlbnRlci1jb250YWluZXItd2lkdGg7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHR3aWR0aDogY2FsYygxMDAlIC0gI3skYXJyb3ctd2lkdGh9ICogMik7XG5cblx0XHRcdCYtY29udGFpbmVyIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cblx0XHRcdCYtZmlndXJlcy1jb250YWluZXIge1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0fVxuXG5cdFx0XHQmLWltYWdlIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdHdpZHRoOiA1MCU7XG5cblx0XHRcdFx0Ji1jb250YWluZXIge1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRcdFx0XHQmLmluYWN0aXZlIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCYtc2VsZWN0b3Ige1xuXHRcdFx0XHQkc2VsZWN0b3ItaXRlbXMtc2l6ZTogLjc1cmVtO1xuXHRcdFx0XHQkc2VsZWN0b3ItaXRlbXMtbWFyZ2luczogLjVyZW07XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdGhlaWdodDogJHNlbGVjdG9yLWl0ZW1zLXNpemU7XG5cdFx0XHRcdG1hcmdpbjogJHNlbGVjdG9yLWl0ZW1zLW1hcmdpbnM7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblxuXHRcdFx0XHQmLmluYWN0aXZlIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRwcmltYXJ5LCAuNSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCYtc3dpdGNoLWJ1dHRvbiB7XG5cdFx0XHRcdCRzdGFydC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcblx0XHRcdFx0JGVuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRtaW4td2lkdGg6ICRhcnJvdy13aWR0aDtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdHVzZXItc2VsZWN0OiBub25lO1xuXHRcdFx0XHR3aWR0aDogY2FsYygoMTAwdncgLSAjeyRjZW50ZXItY29udGFpbmVyLXdpZHRofSkgLyAyKTtcblxuXHRcdFx0XHQmLm5leHQge1xuXHRcdFx0XHRcdHJpZ2h0OiAwO1xuXG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji5wcmV2IHtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAkc3RhcnQtY29sb3IsICRlbmQtY29sb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYtYXJyb3cge1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0dGV4dC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrO1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogc2NhbGVZKDIpO1xuXHRcdFx0XHRcdHVzZXItc2VsZWN0OiBub25lO1xuXG5cdFx0XHRcdFx0Ji13cmFwcGVyIHtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCIkcHJpbWFyeTogIzI0OGRjMTtcbiRzdWItY29sb3ItdmlvbGV0OiAjNzU2Y2FkO1xuJHN1Yi1jb2xvci1ibHVlOiAjMjQ4ZGMxO1xuJHN1Yi1jb2xvci1ibHVlLTI6ICM2YmFkZDU7XG4kc3ViLWNvbG9yLW9yYW5nZTogI2Y2ODkzYztcbiRzZWNvbmRwYXJ0eW1lZGlhLXByaW1hcnktZGFyay1jb250cmFzdDogIzYzNjM2MztcblxuJHByaW1hcnktdGV4dC1jb2xvcjogJHNlY29uZHBhcnR5bWVkaWEtcHJpbWFyeS1kYXJrLWNvbnRyYXN0O1xuIiwiJGNlbnRlci1jb250YWluZXItd2lkdGg6IDEyODBweDtcbiRzaWRlLW1hcmdpbnM6IGNhbGMoKDEwMHZ3IC0gI3skY2VudGVyLWNvbnRhaW5lci13aWR0aH0pIC8gMik7XG5cbiR0b3AtcGFuZWwtZm9udC1zaXplOiAxLjVyZW07XG4kdG9wLXBhbmVsLXBhZGRpbmc6IDFyZW07XG4kdG9wLXBhbmVsLWhlaWdodDogJHRvcC1wYW5lbC1mb250LXNpemUgKyAyICogJHRvcC1wYW5lbC1wYWRkaW5nO1xuXG4kdG9wLXBhbmVsLWxvZ28taGVpZ2h0OiA3LjVyZW07XG4kdG9wLXBhbmVsLWxvZ28td2lkdGg6IDIgKiAkdG9wLXBhbmVsLWxvZ28taGVpZ2h0O1xuJHRvcC1wYW5lbC1sb2dvLW9mZnNldDogJHRvcC1wYW5lbC1sb2dvLWhlaWdodCAvIDQ7XG4kdG9wLXBhbmVsLWxvZ28taW5saW5lLWhlaWdodDogJHRvcC1wYW5lbC1oZWlnaHQgLyAxLjU7XG4kdG9wLXBhbmVsLWxvZ28taW5saW5lLW9mZnNldDogJHRvcC1wYW5lbC1sb2dvLWlubGluZS1oZWlnaHQgLyA0O1xuXG4kdG9wLXBhbmVsLWxvZ28tY29udGFpbmVyLW1pbi13aWR0aDogMjVyZW07XG4kdG9wLXBhbmVsLWxvZ28tY29udGFpbmVyLXdpZHRoOiBjYWxjKCN7JHRvcC1wYW5lbC1sb2dvLWNvbnRhaW5lci1taW4td2lkdGh9ICsgI3skc2lkZS1tYXJnaW5zfSAtIDFyZW0pO1xuXG4kbWluLWxlZnQtcGFydC13aWR0aDogJGNlbnRlci1jb250YWluZXItd2lkdGggLyA0O1xuJGxlZnQtcGFydC13aWR0aDogY2FsYygjeyRtaW4tbGVmdC1wYXJ0LXdpZHRofSArICN7JHNpZGUtbWFyZ2luc30gLSAxcmVtKTtcblxuJG1pbi1yaWdodC1wYXJ0LXdpZHRoOiAkY2VudGVyLWNvbnRhaW5lci13aWR0aCAtICRtaW4tbGVmdC1wYXJ0LXdpZHRoO1xuJHJpZ2h0LXBhcnQtd2lkdGg6IGNhbGMoMTAwJSAtICN7JGxlZnQtcGFydC13aWR0aH0pO1xuXG4kcm91bmRlZC1jYXJkLXBhZGRpbmc6IDQwcHg7XG4kcm91bmRlZC1jYXJkLXNpemU6IDQ2MHB4O1xuJGNvbnRlbnQtY29udGFpbmVyLXBhZGRpbmc6IDYuODc1cmVtO1xuXG4kY29udGVudC1jb250YWluZXItaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skdG9wLXBhbmVsLWhlaWdodH0pO1xuXG4kZm9vdGVyLWZvbnQtc2l6ZTogMXJlbTtcbiRmb290ZXItaWNvbi1zaXplOiAyNHB4O1xuJGZvb3Rlci1wYWRkaW5nOiAxLjVyZW07XG4kZm9vdGVyLWhlaWdodDogY2FsYygjeyRmb290ZXItaWNvbi1zaXplfSArICN7MiAqICRmb290ZXItcGFkZGluZ30pO1xuXG4kaXBhZC1wcm8tbWF4LWRldmljZS13aWR0aDogMTExMnB4O1xuJGlwYWQtcHJvLW1pbi1kZXZpY2Utd2lkdGg6IDgzNHB4O1xuJGlwYWQtbWF4LWRldmljZS13aWR0aDogMTAyNHB4O1xuJGlwYWQtbWluLWRldmljZS13aWR0aDogNzY4cHg7XG5cbiRsYXB0b3AtbWluLXdpZHRoOiAxMjI0cHg7XG4kbGFyZ2Utc2NyZWVuLW1pbi13aWR0aDogMTgyNHB4O1xuXG4kYmlnZ2VyLXJvdW5kZWQtY2FyZC1zaXplOiA1NjBweDtcbiRjb250ZW50LWNvbnRhaW5lci1wYWRkaW5nLW1lZGlhOiAyLjVyZW07XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/image-text-carousel/image-text-carousel.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/image-text-carousel/image-text-carousel.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ImageTextCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageTextCarouselComponent", function() { return ImageTextCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_components_image_text_carousel_image_text_carousel_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/image-text-carousel/image-text-carousel.animation */ "./src/app/shared/components/image-text-carousel/image-text-carousel.animation.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

var ImageTextCarouselComponent_1;



let ImageTextCarouselComponent = ImageTextCarouselComponent_1 = class ImageTextCarouselComponent {
    constructor(containerRef) {
        this.containerRef = containerRef;
        this.currentIndex = 0;
        this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.indexChangeSubscription = this._indexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(ImageTextCarouselComponent_1.ITEM_SWITCH_THROTTLE_TIME)).subscribe((index) => {
            this.indexChange.emit(index);
        });
    }
    ngOnChanges(changes) {
        if (changes.items && changes.items.currentValue && changes.items.currentValue.length) {
            this.currentIndex = 0;
            this.itemsCount = this.items.length;
        }
        if (changes.currentIndex) {
            this.currentIndex = this.getValidIndex(changes.currentIndex.currentValue);
        }
    }
    ngOnDestroy() {
        this.indexChangeSubscription.unsubscribe();
    }
    switchToNext() {
        this.switchTo(this.currentIndex + 1);
    }
    switchToPrev() {
        this.switchTo(this.currentIndex - 1);
    }
    switchTo(index) {
        this._indexChange.emit(this.getValidIndex(index));
    }
    getImgUrlForItem(item) {
        return this.getImgUrlFromName(item.IMAGES.DEVICE);
    }
    getUrlForPdf(item) {
        return `assets/downloads/${item.DOCUMENT}`;
    }
    goToPdf(item, event) {
        if (!item.DOCUMENT.length) {
            event.preventDefault();
            return;
        }
        window.open(`assets/downloads/${item.DOCUMENT}`, '_blank');
    }
    // this method does not work as intended for 2 items
    // just in case
    animationStateForIndex(index) {
        if (index === this.currentIndex) {
            return _shared_components_image_text_carousel_image_text_carousel_animation__WEBPACK_IMPORTED_MODULE_2__["moveAnimationStates"].shownInCenter;
        }
        if (this.isIndexToLeft(index)) {
            return _shared_components_image_text_carousel_image_text_carousel_animation__WEBPACK_IMPORTED_MODULE_2__["moveAnimationStates"].hiddenInLeft;
        }
        if (this.isIndexToRight(index)) {
            return _shared_components_image_text_carousel_image_text_carousel_animation__WEBPACK_IMPORTED_MODULE_2__["moveAnimationStates"].hiddenInRight;
        }
    }
    isIndexToLeft(index) {
        const itemsCount = this.items.length;
        const cur = this.currentIndex;
        if (itemsCount <= 1) {
            return false;
        }
        if (index === 0) {
            return cur !== itemsCount - 1;
        }
        return cur === 0 && index === itemsCount - 1 || index < cur;
    }
    isIndexToRight(index) {
        const itemsCount = this.items.length;
        const cur = this.currentIndex;
        if (itemsCount <= 1) {
            return false;
        }
        if (index === itemsCount - 1) {
            return cur !== 0;
        }
        return cur === itemsCount - 1 && index === 0 || index > cur;
    }
    getImgUrlFromName(imgName) {
        return `assets/images/solutions/${imgName}`;
    }
    getValidIndex(index) {
        if (index >= this.items.length) {
            index = 0;
        }
        else if (index < 0) {
            index = this.items.length - 1;
        }
        return index;
    }
};
ImageTextCarouselComponent.ITEM_SWITCH_THROTTLE_TIME = _shared_components_image_text_carousel_image_text_carousel_animation__WEBPACK_IMPORTED_MODULE_2__["moveAnimationTime"] / 2;
ImageTextCarouselComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ImageTextCarouselComponent.prototype, "items", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ImageTextCarouselComponent.prototype, "currentIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ImageTextCarouselComponent.prototype, "indexChange", void 0);
ImageTextCarouselComponent = ImageTextCarouselComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'image-text-carousel',
        template: __webpack_require__(/*! raw-loader!./image-text-carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/image-text-carousel/image-text-carousel.component.html"),
        animations: [_shared_components_image_text_carousel_image_text_carousel_animation__WEBPACK_IMPORTED_MODULE_2__["moveAnimation"], _shared_components_image_text_carousel_image_text_carousel_animation__WEBPACK_IMPORTED_MODULE_2__["appearAnimation"]],
        styles: [__webpack_require__(/*! ./image-text-carousel.component.scss */ "./src/app/shared/components/image-text-carousel/image-text-carousel.component.scss")]
    })
], ImageTextCarouselComponent);



/***/ }),

/***/ "./src/app/shared/components/image-text-carousel/image-text-carousel.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/image-text-carousel/image-text-carousel.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ImageTextCarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageTextCarouselModule", function() { return ImageTextCarouselModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _image_text_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-text-carousel.component */ "./src/app/shared/components/image-text-carousel/image-text-carousel.component.ts");




let ImageTextCarouselModule = class ImageTextCarouselModule {
};
ImageTextCarouselModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_image_text_carousel_component__WEBPACK_IMPORTED_MODULE_3__["ImageTextCarouselComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_image_text_carousel_component__WEBPACK_IMPORTED_MODULE_3__["ImageTextCarouselComponent"]]
    })
], ImageTextCarouselModule);



/***/ }),

/***/ "./src/app/shared/components/rounded-card/rounded-card.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/rounded-card/rounded-card.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .rounded-card {\n  font-size: 16px;\n  font-weight: normal;\n  line-height: 22px;\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {\n  :host .rounded-card {\n    font-size: 20px;\n    line-height: 27px;\n  }\n}\n:host .rounded-card {\n  -webkit-box-align: center;\n          align-items: center;\n  box-shadow: 0 10px 25px rgba(99, 99, 99, 0.5);\n  box-sizing: border-box;\n  border-radius: 35px;\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  padding: 40px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95eWFyYXNoZXZpY2gvRGVza3RvcC9LYXRZYW5hL3NlcnZlcnMvZ3VpL3NlY29uZHBhcnR5bWVkaWEvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9yb3VuZGVkLWNhcmQvcm91bmRlZC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9yb3VuZGVkLWNhcmQvcm91bmRlZC1jYXJkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3l5YXJhc2hldmljaC9EZXNrdG9wL0thdFlhbmEvc2VydmVycy9ndWkvc2Vjb25kcGFydHltZWRpYS9zdGRpbiIsIi9Vc2Vycy95eWFyYXNoZXZpY2gvRGVza3RvcC9LYXRZYW5hL3NlcnZlcnMvZ3VpL3NlY29uZHBhcnR5bWVkaWEvc3JjL3Njc3MvdmFycy9fc2l6ZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQTtFQUNDLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDYkQ7QURlQztFQUxEO0lBTUUsZUFBQTtJQUNBLGlCQUFBO0VDWkE7QUFDRjtBQ0xDO0VBR0MseUJBQUE7VUFBQSxtQkFBQTtFQUVBLDZDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQ01xQjtFREpyQixnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBREdGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcm91bmRlZC1jYXJkL3JvdW5kZWQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vc2l6ZXMnO1xuXG4laGVhZGluZyB7XG5cdGZvbnQtc2l6ZTogMy43NXJlbTtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0bGluZS1oZWlnaHQ6IDQuMzc1cmVtO1xufVxuXG4lc3ViLWhlYWRpbmcge1xuXHRmb250LXNpemU6IDEuNTYyNXJlbTtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0bGluZS1oZWlnaHQ6IDIuMTg3NXJlbTtcbn1cblxuJXBhcmFncmFwaC10ZXh0IHtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRsaW5lLWhlaWdodDogMjJweDtcblxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAkaXBhZC1taW4tZGV2aWNlLXdpZHRoKSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6ICRpcGFkLW1heC1kZXZpY2Utd2lkdGgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAyN3B4O1xuXHR9XG59XG5cbiVoaW50IHtcblx0Zm9udC1zaXplOiAxMHB4O1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRsaW5lLWhlaWdodDogOS4zcHg7XG59XG4iLCI6aG9zdCAucm91bmRlZC1jYXJkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgOmhvc3QgLnJvdW5kZWQtY2FyZCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICB9XG59XG5cbjpob3N0IC5yb3VuZGVkLWNhcmQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDEwcHggMjVweCByZ2JhKDk5LCA5OSwgOTksIDAuNSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAxMDAlO1xufSIsIkBpbXBvcnQgJ3ZhcnMvY29sb3JzJztcbkBpbXBvcnQgJ3ZhcnMvc2l6ZXMnO1xuQGltcG9ydCAndmFycy9mb250cyc7XG5cbjpob3N0IHtcblx0LnJvdW5kZWQtY2FyZCB7XG5cdFx0QGV4dGVuZCAlcGFyYWdyYXBoLXRleHQ7XG5cblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdFx0Ym94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSg5OSwgOTksIDk5LCAwLjUpO1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0Ym9yZGVyLXJhZGl1czogMzVweDtcblxuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdHBhZGRpbmc6ICRyb3VuZGVkLWNhcmQtcGFkZGluZztcblxuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cbn1cbiIsIiRjZW50ZXItY29udGFpbmVyLXdpZHRoOiAxMjgwcHg7XG4kc2lkZS1tYXJnaW5zOiBjYWxjKCgxMDB2dyAtICN7JGNlbnRlci1jb250YWluZXItd2lkdGh9KSAvIDIpO1xuXG4kdG9wLXBhbmVsLWZvbnQtc2l6ZTogMS41cmVtO1xuJHRvcC1wYW5lbC1wYWRkaW5nOiAxcmVtO1xuJHRvcC1wYW5lbC1oZWlnaHQ6ICR0b3AtcGFuZWwtZm9udC1zaXplICsgMiAqICR0b3AtcGFuZWwtcGFkZGluZztcblxuJHRvcC1wYW5lbC1sb2dvLWhlaWdodDogNy41cmVtO1xuJHRvcC1wYW5lbC1sb2dvLXdpZHRoOiAyICogJHRvcC1wYW5lbC1sb2dvLWhlaWdodDtcbiR0b3AtcGFuZWwtbG9nby1vZmZzZXQ6ICR0b3AtcGFuZWwtbG9nby1oZWlnaHQgLyA0O1xuJHRvcC1wYW5lbC1sb2dvLWlubGluZS1oZWlnaHQ6ICR0b3AtcGFuZWwtaGVpZ2h0IC8gMS41O1xuJHRvcC1wYW5lbC1sb2dvLWlubGluZS1vZmZzZXQ6ICR0b3AtcGFuZWwtbG9nby1pbmxpbmUtaGVpZ2h0IC8gNDtcblxuJHRvcC1wYW5lbC1sb2dvLWNvbnRhaW5lci1taW4td2lkdGg6IDI1cmVtO1xuJHRvcC1wYW5lbC1sb2dvLWNvbnRhaW5lci13aWR0aDogY2FsYygjeyR0b3AtcGFuZWwtbG9nby1jb250YWluZXItbWluLXdpZHRofSArICN7JHNpZGUtbWFyZ2luc30gLSAxcmVtKTtcblxuJG1pbi1sZWZ0LXBhcnQtd2lkdGg6ICRjZW50ZXItY29udGFpbmVyLXdpZHRoIC8gNDtcbiRsZWZ0LXBhcnQtd2lkdGg6IGNhbGMoI3skbWluLWxlZnQtcGFydC13aWR0aH0gKyAjeyRzaWRlLW1hcmdpbnN9IC0gMXJlbSk7XG5cbiRtaW4tcmlnaHQtcGFydC13aWR0aDogJGNlbnRlci1jb250YWluZXItd2lkdGggLSAkbWluLWxlZnQtcGFydC13aWR0aDtcbiRyaWdodC1wYXJ0LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyRsZWZ0LXBhcnQtd2lkdGh9KTtcblxuJHJvdW5kZWQtY2FyZC1wYWRkaW5nOiA0MHB4O1xuJHJvdW5kZWQtY2FyZC1zaXplOiA0NjBweDtcbiRjb250ZW50LWNvbnRhaW5lci1wYWRkaW5nOiA2Ljg3NXJlbTtcblxuJGNvbnRlbnQtY29udGFpbmVyLWhlaWdodDogY2FsYygxMDB2aCAtICN7JHRvcC1wYW5lbC1oZWlnaHR9KTtcblxuJGZvb3Rlci1mb250LXNpemU6IDFyZW07XG4kZm9vdGVyLWljb24tc2l6ZTogMjRweDtcbiRmb290ZXItcGFkZGluZzogMS41cmVtO1xuJGZvb3Rlci1oZWlnaHQ6IGNhbGMoI3skZm9vdGVyLWljb24tc2l6ZX0gKyAjezIgKiAkZm9vdGVyLXBhZGRpbmd9KTtcblxuJGlwYWQtcHJvLW1heC1kZXZpY2Utd2lkdGg6IDExMTJweDtcbiRpcGFkLXByby1taW4tZGV2aWNlLXdpZHRoOiA4MzRweDtcbiRpcGFkLW1heC1kZXZpY2Utd2lkdGg6IDEwMjRweDtcbiRpcGFkLW1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4O1xuXG4kbGFwdG9wLW1pbi13aWR0aDogMTIyNHB4O1xuJGxhcmdlLXNjcmVlbi1taW4td2lkdGg6IDE4MjRweDtcblxuJGJpZ2dlci1yb3VuZGVkLWNhcmQtc2l6ZTogNTYwcHg7XG4kY29udGVudC1jb250YWluZXItcGFkZGluZy1tZWRpYTogMi41cmVtO1xuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/rounded-card/rounded-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/rounded-card/rounded-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: RoundedCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundedCardComponent", function() { return RoundedCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RoundedCardComponent = class RoundedCardComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RoundedCardComponent.prototype, "text", void 0);
RoundedCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'rounded-card',
        template: __webpack_require__(/*! raw-loader!./rounded-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/rounded-card/rounded-card.component.html"),
        styles: [__webpack_require__(/*! ./rounded-card.component.scss */ "./src/app/shared/components/rounded-card/rounded-card.component.scss")]
    })
], RoundedCardComponent);



/***/ }),

/***/ "./src/app/shared/components/rounded-card/rounded-card.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/rounded-card/rounded-card.module.ts ***!
  \***********************************************************************/
/*! exports provided: RoundedCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundedCardModule", function() { return RoundedCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_components_rounded_card_rounded_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/rounded-card/rounded-card.component */ "./src/app/shared/components/rounded-card/rounded-card.component.ts");




let RoundedCardModule = class RoundedCardModule {
};
RoundedCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_shared_components_rounded_card_rounded_card_component__WEBPACK_IMPORTED_MODULE_3__["RoundedCardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_shared_components_rounded_card_rounded_card_component__WEBPACK_IMPORTED_MODULE_3__["RoundedCardComponent"]]
    })
], RoundedCardModule);



/***/ }),

/***/ "./src/app/shared/components/top-panel/top-panel.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/top-panel/top-panel.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: relative;\n}\n:host .logo-image {\n  border: unset !important;\n  box-shadow: unset !important;\n}\n:host .navigation-item {\n  font-size: 1.5rem;\n  text-transform: uppercase;\n}\n:host .navigation-main-container {\n  background-color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n:host .navigation-main-container-link:hover, :host .navigation-main-container-link:focus, :host .navigation-main-container-link:focus-within {\n  text-decoration: none;\n}\n:host .navigation-main-item {\n  cursor: pointer;\n  padding: 1rem;\n}\n:host .navigation-main-item:hover, :host .navigation-main-item:focus, :host .navigation-main-item:focus-within, :host .navigation-main-item.selected {\n  background-color: rgba(36, 141, 193, 0.85);\n}\n:host .navigation-main-item:hover .navigation-main-item-text, :host .navigation-main-item:focus .navigation-main-item-text, :host .navigation-main-item:focus-within .navigation-main-item-text, :host .navigation-main-item.selected .navigation-main-item-text {\n  color: white;\n}\n:host .navigation-main-item-text {\n  color: #248dc1;\n  display: block;\n  font-weight: 700;\n  height: 1.5rem;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n:host .navigation-sub-container {\n  background-color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column wrap;\n  height: 7.5rem;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 1.875rem;\n  position: absolute;\n  -webkit-transform: translateY(-50%) scaleY(0);\n          transform: translateY(-50%) scaleY(0);\n  -webkit-transition: -webkit-transform 0.5s ease-in-out;\n  transition: -webkit-transform 0.5s ease-in-out;\n  transition: transform 0.5s ease-in-out;\n  transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;\n  width: 100%;\n}\n:host .navigation-sub-container.visible {\n  -webkit-transform: translateY(0) scaleY(1);\n          transform: translateY(0) scaleY(1);\n}\n:host .navigation-sub-container-outer {\n  position: relative;\n}\n:host .navigation-sub-item {\n  color: #248dc1;\n  cursor: pointer;\n  padding: 0.75rem;\n  text-decoration: none;\n  min-width: 10rem;\n}\n:host .navigation-sub-item:hover, :host .navigation-sub-item:focus, :host .navigation-sub-item:focus-within {\n  background-color: rgba(36, 141, 193, 0.85);\n  color: white;\n}\n:host .expanded-content-container {\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  margin: auto;\n  padding-left: 0;\n}\n:host .expanded-content-container:not(.inline) {\n  top: 0;\n}\n:host .logo-container {\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: white;\n  display: -webkit-box;\n  display: flex;\n  height: 11.25rem;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  -webkit-transition: height 0.5s ease-in-out;\n  transition: height 0.5s ease-in-out;\n  width: 18.75rem;\n}\n:host .logo-link {\n  border: unset;\n  box-shadow: none;\n  display: block;\n  font-size: 0;\n  position: relative;\n  top: 0;\n  -webkit-transition: top 0.5s ease-in-out;\n  transition: top 0.5s ease-in-out;\n}\n:host .logo-image {\n  -webkit-transition: height 0.5s ease-in-out;\n  transition: height 0.5s ease-in-out;\n}\n:host .large-screen-container .logo-image {\n  height: 7.5rem;\n}\n:host .large-screen-container .inline .logo-container {\n  height: 3.5rem;\n}\n:host .large-screen-container .inline .logo-link {\n  top: -3.5rem;\n}\n:host .large-screen-container .inline .logo-image {\n  height: 2.3333333333rem;\n}\n:host .small-screen-container {\n  display: -webkit-box;\n  display: flex;\n}\n:host .small-screen-container .logo-container {\n  margin-right: -1px;\n}\n:host .small-screen-container .logo-image {\n  height: 66.6666666667%;\n}\n:host .small-screen-container .navigation-main-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column nowrap;\n}\n:host .small-screen-container .navigation-sub-container {\n  top: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95eWFyYXNoZXZpY2gvRGVza3RvcC9LYXRZYW5hL3NlcnZlcnMvZ3VpL3NlY29uZHBhcnR5bWVkaWEvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90b3AtcGFuZWwvdG9wLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90b3AtcGFuZWwvdG9wLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3l5YXJhc2hldmljaC9EZXNrdG9wL0thdFlhbmEvc2VydmVycy9ndWkvc2Vjb25kcGFydHltZWRpYS9zcmMvc2Nzcy92YXJzL19zaXplcy5zY3NzIiwiL1VzZXJzL3l5YXJhc2hldmljaC9EZXNrdG9wL0thdFlhbmEvc2VydmVycy9ndWkvc2Vjb25kcGFydHltZWRpYS9zcmMvc2Nzcy92YXJzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUlDLGNBQUE7RUFDQSxrQkFBQTtBQ0xEO0FET0M7RUFDQyx3QkFBQTtFQUNBLDRCQUFBO0FDTEY7QURTRTtFQUNDLGlCRWRtQjtFRmVuQix5QkFBQTtBQ1BIO0FEV0c7RUFDQyx1QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNUSjtBRFlLO0VBQ0MscUJBQUE7QUNWTjtBRGVHO0VBQ0MsZUFBQTtFQUNBLGFFaENnQjtBRG1CcEI7QURlSTtFQUNDLDBDQUFBO0FDYkw7QURlSztFQUNDLFlBQUE7QUNiTjtBRGlCSTtFQUNDLGNHN0NZO0VIOENaLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNFL0NpQjtFRmdEakIscUJBQUE7RUFDQSx5QkFBQTtBQ2ZMO0FEdUJHO0VBQ0MsdUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxjRXpEb0I7RUYwRHBCLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxpQkV6RG9CO0VGMERwQixrQkFBQTtFQUNBLDZDQUFBO1VBQUEscUNBQUE7RUFDQSxzREFBQTtFQUFBLDhDQUFBO0VBQUEsc0NBQUE7RUFBQSwwRUFBQTtFQUNBLFdBQUE7QUNyQko7QUR1Qkk7RUFDQywwQ0FBQTtVQUFBLGtDQUFBO0FDckJMO0FEd0JJO0VBQ0Msa0JBQUE7QUN0Qkw7QUQwQkc7RUFDQyxjR2hGYTtFSGlGYixlQUFBO0VBQ0EsZ0JBMUJjO0VBMkJkLHFCQUFBO0VBQ0EsZ0JBQUE7QUN4Qko7QUQwQkk7RUFDQywwQ0FBQTtFQUNBLFlBQUE7QUN4Qkw7QUQ4QkM7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDNUJGO0FEOEJFO0VBQ0MsTUFBQTtBQzVCSDtBRGlDRTtFQUVDLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFBQSxtQ0FBQTtFQUNBLGVBUmM7QUN4QmpCO0FEbUNFO0VBQ0MsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSx3Q0FBQTtFQUFBLGdDQUFBO0FDakNIO0FEb0NFO0VBQ0MsMkNBQUE7RUFBQSxtQ0FBQTtBQ2xDSDtBRHdDRztFQUNDLGNFbklvQjtBRDZGeEI7QUQ0Q0k7RUFDQyxjQUFBO0FDMUNMO0FENkNJO0VBQ0MsWUFBQTtBQzNDTDtBRDhDSTtFQUNDLHVCRS9JMEI7QURtRy9CO0FEbURDO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0FDakRGO0FEb0RHO0VBQ0Msa0JBQUE7QUNsREo7QURxREc7RUFDQyxzQkFBQTtBQ25ESjtBRHlESTtFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSx3QkFBQTtBQ3ZETDtBRDRESTtFQUNDLFNBQUE7RUFDQSxXQUFBO0FDMURMIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9wLXBhbmVsL3RvcC1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcnMvY29sb3JzJztcbkBpbXBvcnQgJ3ZhcnMvc2l6ZXMnO1xuXG46aG9zdCB7XG5cdCRhbmltYXRpb24tdGltaW5nOiAuNXMgZWFzZS1pbi1vdXQ7XG5cdCR0b3Atb2Zmc2V0OiAkdG9wLXBhbmVsLWZvbnQtc2l6ZSArIDEuNSAqICR0b3AtcGFuZWwtcGFkZGluZztcblxuXHRkaXNwbGF5OiBibG9jaztcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdC5sb2dvLWltYWdlIHtcblx0XHRib3JkZXI6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cdFx0Ym94LXNoYWRvdzogdW5zZXQgIWltcG9ydGFudDtcblx0fVxuXG5cdC5uYXZpZ2F0aW9uIHtcblx0XHQmLWl0ZW0ge1xuXHRcdFx0Zm9udC1zaXplOiAkdG9wLXBhbmVsLWZvbnQtc2l6ZTtcblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0fVxuXG5cdFx0Ji1tYWluIHtcblx0XHRcdCYtY29udGFpbmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdFx0XHRcdCYtbGluayB7XG5cdFx0XHRcdFx0Jjpob3ZlciwgJjpmb2N1cywgJjpmb2N1cy13aXRoaW4ge1xuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQmLWl0ZW0ge1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHBhZGRpbmc6ICR0b3AtcGFuZWwtcGFkZGluZztcblxuXHRcdFx0XHQmOmhvdmVyLCAmOmZvY3VzLCAmOmZvY3VzLXdpdGhpbiwgJi5zZWxlY3RlZCB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3ViLWNvbG9yLWJsdWUsIC44NSk7XG5cblx0XHRcdFx0XHQubmF2aWdhdGlvbi1tYWluLWl0ZW0tdGV4dCB7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji10ZXh0IHtcblx0XHRcdFx0XHRjb2xvcjogJHN1Yi1jb2xvci1ibHVlO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0aGVpZ2h0OiAkdG9wLXBhbmVsLWZvbnQtc2l6ZTtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYtc3ViIHtcblx0XHRcdCRpdGVtLXBhZGRpbmc6ICR0b3AtcGFuZWwtcGFkZGluZyAqIC43NTtcblxuXHRcdFx0Ji1jb250YWluZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcblx0XHRcdFx0aGVpZ2h0OiAkdG9wLXBhbmVsLWxvZ28taGVpZ2h0O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdHBhZGRpbmc6ICR0b3AtcGFuZWwtbG9nby1vZmZzZXQ7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlWSgwKTtcblx0XHRcdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtICRhbmltYXRpb24tdGltaW5nO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0XHQmLnZpc2libGUge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZVkoMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmLW91dGVyIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ji1pdGVtIHtcblx0XHRcdFx0Y29sb3I6ICRzdWItY29sb3ItYmx1ZTtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRwYWRkaW5nOiAkaXRlbS1wYWRkaW5nO1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdG1pbi13aWR0aDogMTByZW07XG5cblx0XHRcdFx0Jjpob3ZlciwgJjpmb2N1cywgJjpmb2N1cy13aXRoaW4ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHN1Yi1jb2xvci1ibHVlLCAuODUpO1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5leHBhbmRlZC1jb250ZW50LWNvbnRhaW5lciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHRcdHBhZGRpbmctbGVmdDogMDtcblxuXHRcdCY6bm90KC5pbmxpbmUpIHtcblx0XHRcdHRvcDogMDtcblx0XHR9XG5cdH1cblxuXHQubG9nbyB7XG5cdFx0Ji1jb250YWluZXIge1xuXHRcdFx0JHRvdGFsLXdpZHRoOiAkdG9wLXBhbmVsLWxvZ28td2lkdGggKyAyICogJHRvcC1wYW5lbC1sb2dvLW9mZnNldDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRoZWlnaHQ6ICR0b3AtcGFuZWwtbG9nby1oZWlnaHQgKyAyICogJHRvcC1wYW5lbC1sb2dvLW9mZnNldDtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0dHJhbnNpdGlvbjogaGVpZ2h0ICRhbmltYXRpb24tdGltaW5nO1xuXHRcdFx0d2lkdGg6ICR0b3RhbC13aWR0aDtcblx0XHR9XG5cblx0XHQmLWxpbmsge1xuXHRcdFx0Ym9yZGVyOiB1bnNldDtcblx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdGZvbnQtc2l6ZTogMDtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHRvcDogMDtcblx0XHRcdHRyYW5zaXRpb246IHRvcCAkYW5pbWF0aW9uLXRpbWluZztcblx0XHR9XG5cblx0XHQmLWltYWdlIHtcblx0XHRcdHRyYW5zaXRpb246IGhlaWdodCAkYW5pbWF0aW9uLXRpbWluZztcblx0XHR9XG5cdH1cblxuXHQubGFyZ2Utc2NyZWVuLWNvbnRhaW5lciB7XG5cdFx0LmxvZ28ge1xuXHRcdFx0Ji1pbWFnZSB7XG5cdFx0XHRcdGhlaWdodDogJHRvcC1wYW5lbC1sb2dvLWhlaWdodDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQuaW5saW5lIHtcblx0XHRcdC5sb2dvIHtcblx0XHRcdFx0Ji1jb250YWluZXIge1xuXHRcdFx0XHRcdGhlaWdodDogJHRvcC1wYW5lbC1sb2dvLWlubGluZS1oZWlnaHQgKyAyICogJHRvcC1wYW5lbC1sb2dvLWlubGluZS1vZmZzZXQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmLWxpbmsge1xuXHRcdFx0XHRcdHRvcDogLSgkdG9wLW9mZnNldCArIDAuNXJlbSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmLWltYWdlIHtcblx0XHRcdFx0XHRoZWlnaHQ6ICR0b3AtcGFuZWwtbG9nby1pbmxpbmUtaGVpZ2h0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdC5zbWFsbC1zY3JlZW4tY29udGFpbmVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXG5cdFx0LmxvZ28ge1xuXHRcdFx0Ji1jb250YWluZXIge1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IC0xcHg7XG5cdFx0XHR9XG5cblx0XHRcdCYtaW1hZ2Uge1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCUgKiAyIC8gMztcblx0XHRcdH1cblx0XHR9XG5cblx0XHQubmF2aWdhdGlvbiB7XG5cdFx0XHQmLW1haW4ge1xuXHRcdFx0XHQmLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQmLXN1YiB7XG5cdFx0XHRcdCYtY29udGFpbmVyIHtcblx0XHRcdFx0XHR0b3A6IDEwMCU7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IC5sb2dvLWltYWdlIHtcbiAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiB1bnNldCAhaW1wb3J0YW50O1xufVxuOmhvc3QgLm5hdmlnYXRpb24taXRlbSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuOmhvc3QgLm5hdmlnYXRpb24tbWFpbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCAubmF2aWdhdGlvbi1tYWluLWNvbnRhaW5lci1saW5rOmhvdmVyLCA6aG9zdCAubmF2aWdhdGlvbi1tYWluLWNvbnRhaW5lci1saW5rOmZvY3VzLCA6aG9zdCAubmF2aWdhdGlvbi1tYWluLWNvbnRhaW5lci1saW5rOmZvY3VzLXdpdGhpbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbjpob3N0IC5uYXZpZ2F0aW9uLW1haW4taXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbn1cbjpob3N0IC5uYXZpZ2F0aW9uLW1haW4taXRlbTpob3ZlciwgOmhvc3QgLm5hdmlnYXRpb24tbWFpbi1pdGVtOmZvY3VzLCA6aG9zdCAubmF2aWdhdGlvbi1tYWluLWl0ZW06Zm9jdXMtd2l0aGluLCA6aG9zdCAubmF2aWdhdGlvbi1tYWluLWl0ZW0uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCAxNDEsIDE5MywgMC44NSk7XG59XG46aG9zdCAubmF2aWdhdGlvbi1tYWluLWl0ZW06aG92ZXIgLm5hdmlnYXRpb24tbWFpbi1pdGVtLXRleHQsIDpob3N0IC5uYXZpZ2F0aW9uLW1haW4taXRlbTpmb2N1cyAubmF2aWdhdGlvbi1tYWluLWl0ZW0tdGV4dCwgOmhvc3QgLm5hdmlnYXRpb24tbWFpbi1pdGVtOmZvY3VzLXdpdGhpbiAubmF2aWdhdGlvbi1tYWluLWl0ZW0tdGV4dCwgOmhvc3QgLm5hdmlnYXRpb24tbWFpbi1pdGVtLnNlbGVjdGVkIC5uYXZpZ2F0aW9uLW1haW4taXRlbS10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgLm5hdmlnYXRpb24tbWFpbi1pdGVtLXRleHQge1xuICBjb2xvcjogIzI0OGRjMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGhlaWdodDogMS41cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG46aG9zdCAubmF2aWdhdGlvbi1zdWItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gIGhlaWdodDogNy41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEuODc1cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZVkoMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IC5uYXZpZ2F0aW9uLXN1Yi1jb250YWluZXIudmlzaWJsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZVkoMSk7XG59XG46aG9zdCAubmF2aWdhdGlvbi1zdWItY29udGFpbmVyLW91dGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLm5hdmlnYXRpb24tc3ViLWl0ZW0ge1xuICBjb2xvcjogIzI0OGRjMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1pbi13aWR0aDogMTByZW07XG59XG46aG9zdCAubmF2aWdhdGlvbi1zdWItaXRlbTpob3ZlciwgOmhvc3QgLm5hdmlnYXRpb24tc3ViLWl0ZW06Zm9jdXMsIDpob3N0IC5uYXZpZ2F0aW9uLXN1Yi1pdGVtOmZvY3VzLXdpdGhpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDE0MSwgMTkzLCAwLjg1KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgLmV4cGFuZGVkLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbjpob3N0IC5leHBhbmRlZC1jb250ZW50LWNvbnRhaW5lcjpub3QoLmlubGluZSkge1xuICB0b3A6IDA7XG59XG46aG9zdCAubG9nby1jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMS4yNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiAxOC43NXJlbTtcbn1cbjpob3N0IC5sb2dvLWxpbmsge1xuICBib3JkZXI6IHVuc2V0O1xuICBib3gtc2hhZG93OiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbjogdG9wIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCAubG9nby1pbWFnZSB7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuOmhvc3QgLmxhcmdlLXNjcmVlbi1jb250YWluZXIgLmxvZ28taW1hZ2Uge1xuICBoZWlnaHQ6IDcuNXJlbTtcbn1cbjpob3N0IC5sYXJnZS1zY3JlZW4tY29udGFpbmVyIC5pbmxpbmUgLmxvZ28tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAzLjVyZW07XG59XG46aG9zdCAubGFyZ2Utc2NyZWVuLWNvbnRhaW5lciAuaW5saW5lIC5sb2dvLWxpbmsge1xuICB0b3A6IC0zLjVyZW07XG59XG46aG9zdCAubGFyZ2Utc2NyZWVuLWNvbnRhaW5lciAuaW5saW5lIC5sb2dvLWltYWdlIHtcbiAgaGVpZ2h0OiAyLjMzMzMzMzMzMzNyZW07XG59XG46aG9zdCAuc21hbGwtc2NyZWVuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuc21hbGwtc2NyZWVuLWNvbnRhaW5lciAubG9nby1jb250YWluZXIge1xuICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG59XG46aG9zdCAuc21hbGwtc2NyZWVuLWNvbnRhaW5lciAubG9nby1pbWFnZSB7XG4gIGhlaWdodDogNjYuNjY2NjY2NjY2NyU7XG59XG46aG9zdCAuc21hbGwtc2NyZWVuLWNvbnRhaW5lciAubmF2aWdhdGlvbi1tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cbjpob3N0IC5zbWFsbC1zY3JlZW4tY29udGFpbmVyIC5uYXZpZ2F0aW9uLXN1Yi1jb250YWluZXIge1xuICB0b3A6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufSIsIiRjZW50ZXItY29udGFpbmVyLXdpZHRoOiAxMjgwcHg7XG4kc2lkZS1tYXJnaW5zOiBjYWxjKCgxMDB2dyAtICN7JGNlbnRlci1jb250YWluZXItd2lkdGh9KSAvIDIpO1xuXG4kdG9wLXBhbmVsLWZvbnQtc2l6ZTogMS41cmVtO1xuJHRvcC1wYW5lbC1wYWRkaW5nOiAxcmVtO1xuJHRvcC1wYW5lbC1oZWlnaHQ6ICR0b3AtcGFuZWwtZm9udC1zaXplICsgMiAqICR0b3AtcGFuZWwtcGFkZGluZztcblxuJHRvcC1wYW5lbC1sb2dvLWhlaWdodDogNy41cmVtO1xuJHRvcC1wYW5lbC1sb2dvLXdpZHRoOiAyICogJHRvcC1wYW5lbC1sb2dvLWhlaWdodDtcbiR0b3AtcGFuZWwtbG9nby1vZmZzZXQ6ICR0b3AtcGFuZWwtbG9nby1oZWlnaHQgLyA0O1xuJHRvcC1wYW5lbC1sb2dvLWlubGluZS1oZWlnaHQ6ICR0b3AtcGFuZWwtaGVpZ2h0IC8gMS41O1xuJHRvcC1wYW5lbC1sb2dvLWlubGluZS1vZmZzZXQ6ICR0b3AtcGFuZWwtbG9nby1pbmxpbmUtaGVpZ2h0IC8gNDtcblxuJHRvcC1wYW5lbC1sb2dvLWNvbnRhaW5lci1taW4td2lkdGg6IDI1cmVtO1xuJHRvcC1wYW5lbC1sb2dvLWNvbnRhaW5lci13aWR0aDogY2FsYygjeyR0b3AtcGFuZWwtbG9nby1jb250YWluZXItbWluLXdpZHRofSArICN7JHNpZGUtbWFyZ2luc30gLSAxcmVtKTtcblxuJG1pbi1sZWZ0LXBhcnQtd2lkdGg6ICRjZW50ZXItY29udGFpbmVyLXdpZHRoIC8gNDtcbiRsZWZ0LXBhcnQtd2lkdGg6IGNhbGMoI3skbWluLWxlZnQtcGFydC13aWR0aH0gKyAjeyRzaWRlLW1hcmdpbnN9IC0gMXJlbSk7XG5cbiRtaW4tcmlnaHQtcGFydC13aWR0aDogJGNlbnRlci1jb250YWluZXItd2lkdGggLSAkbWluLWxlZnQtcGFydC13aWR0aDtcbiRyaWdodC1wYXJ0LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyRsZWZ0LXBhcnQtd2lkdGh9KTtcblxuJHJvdW5kZWQtY2FyZC1wYWRkaW5nOiA0MHB4O1xuJHJvdW5kZWQtY2FyZC1zaXplOiA0NjBweDtcbiRjb250ZW50LWNvbnRhaW5lci1wYWRkaW5nOiA2Ljg3NXJlbTtcblxuJGNvbnRlbnQtY29udGFpbmVyLWhlaWdodDogY2FsYygxMDB2aCAtICN7JHRvcC1wYW5lbC1oZWlnaHR9KTtcblxuJGZvb3Rlci1mb250LXNpemU6IDFyZW07XG4kZm9vdGVyLWljb24tc2l6ZTogMjRweDtcbiRmb290ZXItcGFkZGluZzogMS41cmVtO1xuJGZvb3Rlci1oZWlnaHQ6IGNhbGMoI3skZm9vdGVyLWljb24tc2l6ZX0gKyAjezIgKiAkZm9vdGVyLXBhZGRpbmd9KTtcblxuJGlwYWQtcHJvLW1heC1kZXZpY2Utd2lkdGg6IDExMTJweDtcbiRpcGFkLXByby1taW4tZGV2aWNlLXdpZHRoOiA4MzRweDtcbiRpcGFkLW1heC1kZXZpY2Utd2lkdGg6IDEwMjRweDtcbiRpcGFkLW1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4O1xuXG4kbGFwdG9wLW1pbi13aWR0aDogMTIyNHB4O1xuJGxhcmdlLXNjcmVlbi1taW4td2lkdGg6IDE4MjRweDtcblxuJGJpZ2dlci1yb3VuZGVkLWNhcmQtc2l6ZTogNTYwcHg7XG4kY29udGVudC1jb250YWluZXItcGFkZGluZy1tZWRpYTogMi41cmVtO1xuIiwiJHByaW1hcnk6ICMyNDhkYzE7XG4kc3ViLWNvbG9yLXZpb2xldDogIzc1NmNhZDtcbiRzdWItY29sb3ItYmx1ZTogIzI0OGRjMTtcbiRzdWItY29sb3ItYmx1ZS0yOiAjNmJhZGQ1O1xuJHN1Yi1jb2xvci1vcmFuZ2U6ICNmNjg5M2M7XG4kc2Vjb25kcGFydHltZWRpYS1wcmltYXJ5LWRhcmstY29udHJhc3Q6ICM2MzYzNjM7XG5cbiRwcmltYXJ5LXRleHQtY29sb3I6ICRzZWNvbmRwYXJ0eW1lZGlhLXByaW1hcnktZGFyay1jb250cmFzdDtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/top-panel/top-panel.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/top-panel/top-panel.component.ts ***!
  \********************************************************************/
/*! exports provided: TopPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopPanelComponent", function() { return TopPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_text_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/text-content.service */ "./src/app/shared/services/text-content.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_top_panel_link_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/top-panel-link.service */ "./src/app/shared/services/top-panel-link.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_services_general_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/general.service */ "./src/app/shared/services/general.service.ts");








let TopPanelComponent = class TopPanelComponent {
    constructor(textContentService, linkService, router, generalService) {
        this.linkService = linkService;
        this.router = router;
        this.generalService = generalService;
        this.isLogoImageInline = false;
        this.isCurrentlyAtHome$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        this.testItems = [
            {
                title: 'The Power of Data',
                items: [
                    {
                        title: '2nd Party Media',
                        link: '#party_media'
                    },
                    {
                        title: 'What we do',
                        link: '#what'
                    },
                    {
                        title: 'How we do it',
                        link: '#how'
                    }
                ]
            },
            {
                title: 'Our Solutions',
                items: [
                    {
                        title: 'Aurora VTS',
                        link: '.AURORA_VTS'
                    },
                    {
                        title: 'Aurora',
                        link: '.AURORA'
                    },
                    {
                        title: 'Mediator',
                        link: '.MEDIATOR'
                    },
                    {
                        title: 'Bart',
                        link: '.BART'
                    },
                    {
                        title: 'Estimator',
                        link: '.ESTIMATOR'
                    },
                    {
                        title: 'PAT',
                        link: '.PAT'
                    },
                    {
                        title: 'SVOD',
                        link: '.SVOD'
                    },
                    {
                        title: 'PPM',
                        link: '.PPM'
                    }
                ]
            },
            {
                title: 'About',
                link: 'about'
            }
        ];
        this.maxWidthForNavGroups = this.widthForNavGroup(this.testItems.reduce((max, item) => item.items && item.items.length > max.items.length ? item : max));
        this.articleNamesSubscription = textContentService.articleNames.subscribe((names) => {
            this.articleNames = names;
        });
        this.isCurrentlyAtHome$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() => {
            return this.router.url === '/';
        }));
        this.generalService.videoWidth.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])()).subscribe((val) => {
            console.log(val);
            this.videoWidth = val;
        });
    }
    ngOnDestroy() {
        if (this.articleNamesSubscription) {
            this.articleNamesSubscription.unsubscribe();
        }
    }
    get navGroups() {
        return this.testItems.filter(item => item.items && item.items.length);
    }
    onDocumentClick(target) {
        if (target.classList.contains('navigation-main-item') ||
            target.classList.contains('navigation-main-item-text')) {
            return;
        }
        this.selectedNavGroup = null;
    }
    onWindowScroll() {
        this.isLogoImageInline = !!window.scrollY;
    }
    onNavItemClick(item) {
        this.linkService.updateLink(item);
    }
    onItemClick(item) {
        if (!item.items || !item.items.length) {
            return;
        }
        this.selectedNavGroup = item;
    }
    goToLink(item, event) {
        event.stopPropagation();
        this.router.navigate(['/']).then(() => {
            setTimeout(() => {
                const element = Array.from(document.querySelectorAll(item.link)).find((elem) => !!elem.clientHeight);
                if (!element) {
                    return;
                }
                const topMenu = Array.from(document.getElementsByClassName('navigation-main-container')).find((menu) => !!menu.clientHeight);
                window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - topMenu.clientHeight });
                this.selectedNavGroup = null;
            });
        });
    }
    scrollToTop() {
        window.scrollTo({ top: 0 });
    }
    widthForNavGroup(navGroup) {
        return `${navGroup.items.length / 2 * 10 + 10 + 7.5 / 4}rem`;
    }
};
TopPanelComponent.ctorParameters = () => [
    { type: _shared_services_text_content_service__WEBPACK_IMPORTED_MODULE_2__["TextContentService"] },
    { type: _shared_services_top_panel_link_service__WEBPACK_IMPORTED_MODULE_4__["TopPanelLinkService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _shared_services_general_service__WEBPACK_IMPORTED_MODULE_7__["GeneralService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event.target'])
], TopPanelComponent.prototype, "onDocumentClick", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll')
], TopPanelComponent.prototype, "onWindowScroll", null);
TopPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'top-panel',
        template: __webpack_require__(/*! raw-loader!./top-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/top-panel/top-panel.component.html"),
        styles: [__webpack_require__(/*! ./top-panel.component.scss */ "./src/app/shared/components/top-panel/top-panel.component.scss")]
    })
], TopPanelComponent);



/***/ }),

/***/ "./src/app/shared/components/top-panel/top-panel.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/top-panel/top-panel.module.ts ***!
  \*****************************************************************/
/*! exports provided: TopPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopPanelModule", function() { return TopPanelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _top_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-panel.component */ "./src/app/shared/components/top-panel/top-panel.component.ts");
/* harmony import */ var app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app-routing.module */ "./src/app/app-routing.module.ts");





let TopPanelModule = class TopPanelModule {
};
TopPanelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_top_panel_component__WEBPACK_IMPORTED_MODULE_3__["TopPanelComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ],
        exports: [_top_panel_component__WEBPACK_IMPORTED_MODULE_3__["TopPanelComponent"]]
    })
], TopPanelModule);



/***/ }),

/***/ "./src/app/shared/constants/contacts.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/constants/contacts.ts ***!
  \**********************************************/
/*! exports provided: CONTACTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTACTS", function() { return CONTACTS; });
const email = 'hello@2ndpartymedia.com';
const phone = '415-350-5860';
const address = '11 Pennsylvania Ave, New York, NY 10001';
const E_MAIL = {
    DISPLAYED: email,
    REAL: `mailto:${email}`,
    ICON: 'email.png'
};
const PHONE_NUM = {
    DISPLAYED: phone,
    REAL: `tel:+${phone.replace(/[\s()-]/g, '')}`,
    ICON: 'phone.png'
};
const PHYSICAL_ADDRESS = {
    DISPLAYED: address,
    REAL: 'https://www.google.com/maps/place/11+Pennsylvania+Plaza,+New+York,+NY+10001,+USA',
    ICON: 'location.png'
};
const CONTACTS = { E_MAIL, PHONE_NUM, PHYSICAL_ADDRESS };


/***/ }),

/***/ "./src/app/shared/constants/content.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/constants/content.ts ***!
  \*********************************************/
/*! exports provided: CONTENT_KEYS, ImageSizes, VideoResolutions, VIDEO_RESOLUTION_UPDATE_DEBOUNCE_TIME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_KEYS", function() { return CONTENT_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSizes", function() { return ImageSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoResolutions", function() { return VideoResolutions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIDEO_RESOLUTION_UPDATE_DEBOUNCE_TIME", function() { return VIDEO_RESOLUTION_UPDATE_DEBOUNCE_TIME; });
const CONTENT_KEYS = {
    ARTICLES: 'ARTICLES',
    TOP_CAROUSEL: 'TOP_CAROUSEL',
    ABOUT: 'ABOUT'
};
const ImageSizes = {
    S: 640,
    M: 1280,
    L: 1920
};
const VideoResolutions = {
    HD: {
        width: 1280,
        height: 720
    },
    FHD: {
        width: 1920,
        height: 1080
    },
    UHD: {
        width: 3840,
        height: 2160
    }
};
const VIDEO_RESOLUTION_UPDATE_DEBOUNCE_TIME = 3e3;


/***/ }),

/***/ "./src/app/shared/directives/vertical-parallax/vertical-parallax.directive.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/directives/vertical-parallax/vertical-parallax.directive.ts ***!
  \************************************************************************************/
/*! exports provided: VerticalParallaxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalParallaxDirective", function() { return VerticalParallaxDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

var VerticalParallaxDirective_1;


/**
 * @description
 * Adds custom vertical parallax effect to element.
 * Currently only guarantees to work with <img> elements.
 */
let VerticalParallaxDirective = VerticalParallaxDirective_1 = class VerticalParallaxDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        // currently vh only
        this.verticalScrollSpace = 100;
        this.onScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onResize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scrollSubscription = this.onScroll
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["throttleTime"])(VerticalParallaxDirective_1.THROTTLE_TIME))
            .subscribe(() => {
            this.updateOffset();
        });
        this.resizeSubscription = this.onResize
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["throttleTime"])(VerticalParallaxDirective_1.THROTTLE_TIME))
            .subscribe(() => {
            this.clearOffset();
            setTimeout(() => {
                this.getMeasurements();
                this.updateOffset();
            }, VerticalParallaxDirective_1.THROTTLE_TIME); // Transition time needs to pass in order to capture correct measurements
        });
        elementRef.nativeElement.onload = () => {
            this.getMeasurements();
            this.applyTransition();
            this.updateOffset();
        };
    }
    ngOnDestroy() {
        this.scrollSubscription.unsubscribe();
        this.resizeSubscription.unsubscribe();
    }
    onWindowScroll() {
        this.onScroll.emit();
    }
    onWindowResize() {
        this.onResize.emit();
    }
    applyTransition() {
        const curTransition = window.getComputedStyle(this.element).transition;
        if (!curTransition) {
            this.element.style.transition = VerticalParallaxDirective_1.TRANSITION_VALUE;
            return;
        }
        this.element.style.transition = `${curTransition}, ${VerticalParallaxDirective_1.TRANSITION_VALUE}`;
    }
    getMeasurements() {
        this.topBorder = window.scrollY + this.element.getBoundingClientRect().top;
        this.containerHeight = window.innerHeight * (this.verticalScrollSpace / 100);
        this.elementHeight = this.element.clientHeight;
        this.scrollSpeed = (this.elementHeight + this.containerHeight) / (window.innerHeight + this.containerHeight);
    }
    updateOffset() {
        const offset = -this.elementHeight + (window.scrollY - (this.topBorder - window.innerHeight)) * this.scrollSpeed;
        this.applyOffset(offset);
    }
    // TODO: preserve possible current transform vars
    applyOffset(offset) {
        this.element.style.transform = `translateY(${offset}px)`;
    }
    // TODO: preserve possible current transform vars
    clearOffset() {
        this.element.style.transform = '';
    }
    get element() {
        return this.elementRef.nativeElement;
    }
};
VerticalParallaxDirective.THROTTLE_TIME = 100;
VerticalParallaxDirective.TRANSITION_VALUE = `transform ${VerticalParallaxDirective_1.THROTTLE_TIME}ms linear`;
VerticalParallaxDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VerticalParallaxDirective.prototype, "verticalScrollSpace", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll')
], VerticalParallaxDirective.prototype, "onWindowScroll", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize')
], VerticalParallaxDirective.prototype, "onWindowResize", null);
VerticalParallaxDirective = VerticalParallaxDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[verticalParallax]'
    })
], VerticalParallaxDirective);



/***/ }),

/***/ "./src/app/shared/directives/vertical-parallax/vertical-parallax.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/directives/vertical-parallax/vertical-parallax.module.ts ***!
  \*********************************************************************************/
/*! exports provided: VerticalParallaxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalParallaxModule", function() { return VerticalParallaxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_directives_vertical_parallax_vertical_parallax_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/directives/vertical-parallax/vertical-parallax.directive */ "./src/app/shared/directives/vertical-parallax/vertical-parallax.directive.ts");




let VerticalParallaxModule = class VerticalParallaxModule {
};
VerticalParallaxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_shared_directives_vertical_parallax_vertical_parallax_directive__WEBPACK_IMPORTED_MODULE_3__["VerticalParallaxDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_shared_directives_vertical_parallax_vertical_parallax_directive__WEBPACK_IMPORTED_MODULE_3__["VerticalParallaxDirective"]]
    })
], VerticalParallaxModule);



/***/ }),

/***/ "./src/app/shared/helpers/sizes.helper.ts":
/*!************************************************!*\
  !*** ./src/app/shared/helpers/sizes.helper.ts ***!
  \************************************************/
/*! exports provided: getWidthForImage, getResolutionForWidth, getVideoNameForHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWidthForImage", function() { return getWidthForImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResolutionForWidth", function() { return getResolutionForWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVideoNameForHeight", function() { return getVideoNameForHeight; });
/* harmony import */ var _shared_constants_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/constants/content */ "./src/app/shared/constants/content.ts");

const widths = Object.values(_shared_constants_content__WEBPACK_IMPORTED_MODULE_0__["ImageSizes"]).sort((a, b) => a - b);
const largestWidth = widths[widths.length - 1];
function getWidthForImage(containerWidth) {
    return widths.find((width) => containerWidth <= width) || largestWidth;
}
const resolutions = Object.values(_shared_constants_content__WEBPACK_IMPORTED_MODULE_0__["VideoResolutions"]).sort((a, b) => a.width - b.width);
const largestResolution = resolutions[resolutions.length - 1];
function getResolutionForWidth(containerWidth) {
    return resolutions.find((res) => containerWidth <= res.width) || largestResolution;
}
const videoHeightPlaceholder = '{height}';
const videoName = `assets/videos/2ndPartyMedia-${videoHeightPlaceholder}`;
const mp4Postfix = '.mp4';
const webmPostfix = '.webm';
function getVideoNameForHeight(height) {
    const name = videoName.replace(videoHeightPlaceholder, height.toString());
    return {
        webm: `${name}${webmPostfix}`,
        mp4: `${name}${mp4Postfix}`
    };
}


/***/ }),

/***/ "./src/app/shared/services/general.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/general.service.ts ***!
  \****************************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let GeneralService = class GeneralService {
    constructor() {
        this.videoWidth = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
    }
};
GeneralService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GeneralService);



/***/ }),

/***/ "./src/app/shared/services/text-content.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/text-content.service.ts ***!
  \*********************************************************/
/*! exports provided: TextContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextContentService", function() { return TextContentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_constants_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/constants/content */ "./src/app/shared/constants/content.ts");





let TextContentService = class TextContentService {
    constructor(translateService) {
        this._articles = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this._articleNames = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this._carouselItems = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this._aboutArticle = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        translateService.use('en');
        translateService.get(_shared_constants_content__WEBPACK_IMPORTED_MODULE_4__["CONTENT_KEYS"].ARTICLES).subscribe((result) => {
            this._articles.next(Object.values(result));
            this._articleNames.next(Object.keys(result));
        });
        translateService.get(_shared_constants_content__WEBPACK_IMPORTED_MODULE_4__["CONTENT_KEYS"].TOP_CAROUSEL).subscribe((result) => {
            this._carouselItems.next(result);
        });
        translateService.get(_shared_constants_content__WEBPACK_IMPORTED_MODULE_4__["CONTENT_KEYS"].ABOUT).subscribe((result) => {
            this._aboutArticle.next(result);
        });
    }
    get articles() {
        return this._articles;
    }
    get articleNames() {
        return this._articleNames;
    }
    get carouselItems() {
        return this._carouselItems;
    }
    get aboutArticle() {
        return this._aboutArticle;
    }
};
TextContentService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
TextContentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TextContentService);



/***/ }),

/***/ "./src/app/shared/services/top-panel-link.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/top-panel-link.service.ts ***!
  \***********************************************************/
/*! exports provided: TopPanelLinkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopPanelLinkService", function() { return TopPanelLinkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let TopPanelLinkService = class TopPanelLinkService {
    constructor() {
        this._link = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    get link() {
        return this._link;
    }
    updateLink(item) {
        this._link.next(item);
    }
};
TopPanelLinkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TopPanelLinkService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    envName: 'dev'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yyarashevich/Desktop/KatYana/servers/gui/secondpartymedia/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map