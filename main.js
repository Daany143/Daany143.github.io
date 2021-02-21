(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tahir\Documents\Projects\portfolio-website\src\main.ts */"zUnb");


/***/ }),

/***/ "0btM":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent, ProjectDlgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDlgComponent", function() { return ProjectDlgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");













const _c0 = function (a0) { return { "current-selection-img": a0 }; };
function ContentComponent_mat_grid_tile_85_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_mat_grid_tile_85_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r5 = ctx.index; const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return project_r1.curImgIdx = i_r5; })("click", function ContentComponent_mat_grid_tile_85_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.changeImgClicked(project_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, i_r5 == project_r1.curImgIdx));
} }
function ContentComponent_mat_grid_tile_85_mat_chip_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const elem_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", elem_r12, " ");
} }
function ContentComponent_mat_grid_tile_85_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_mat_grid_tile_85_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const project_r1 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.openDialog(project_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ContentComponent_mat_grid_tile_85_div_12_Template, 2, 3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-chip-list", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ContentComponent_mat_grid_tile_85_mat_chip_15_Template, 2, 1, "mat-chip", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", project_r1.imgPaths[project_r1.curImgIdx], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", project_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r1.imgPaths);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r1.stack);
} }
const _c1 = function (a0, a1, a2) { return { "one-col": a0, "two-col": a1, "three-col": a2 }; };
function ProjectDlgComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDlgComponent_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.project.curImgIdx = i_r3; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, i_r3 == ctx_r0.project.curImgIdx));
} }
function ProjectDlgComponent_mat_chip_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const elem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", elem_r6, " ");
} }
const _c2 = ".content[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n}\r\n\r\n.section[_ngcontent-%COMP%] {\r\n    \r\n    min-height: 550px;\r\n    padding-top: 22px;\r\n    flex-direction: column;\r\n    box-sizing: border-box;\r\n    display: flex;\r\n    place-content: center flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-size: 30px;\r\n    color: darkcyan;\r\n    margin-bottom: 35px;\r\n}\r\n\r\n.welcome-section[_ngcontent-%COMP%] {\r\n    height: 100vh !important;\r\n    min-height: none;\r\n    padding-top: none;\r\n}\r\n\r\n.exp-card[_ngcontent-%COMP%] {\r\n    max-width: 1000px;\r\n}\r\n\r\n.exp-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    list-style-type: circle;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%] {\r\n    line-height: 1.2em;\r\n}\r\n\r\n.expand-button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 20px;\r\n    font-size: 46px;\r\n    color: grey;\r\n    animation: MoveUpDown 1s linear infinite;\r\n    -webkit-animation-delay: 2s;\r\n}\r\n\r\n@keyframes MoveUpDown {\r\n    0%, 100% {\r\n      bottom: 20;\r\n    }\r\n    50% {\r\n      bottom: 30px;\r\n    }\r\n  }\r\n\r\n#container[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n}\r\n\r\n#text[_ngcontent-%COMP%] {\r\n\tcolor: darkcyan;\r\n\tletter-spacing: 2px;\r\n}\r\n\r\n#cursor[_ngcontent-%COMP%] {\r\n\tvertical-align: middle;\r\n\twidth: 3px;\r\n\theight: 35px;\r\n\tbackground-color: grey;\r\n\tanimation: blink .75s step-end infinite;\r\n}\r\n\r\n@keyframes blink {\r\n\tfrom, to { \r\n\t\tbackground-color: transparent \r\n\t}\r\n\t50% { \r\n\t\tbackground-color: grey; \r\n\t}\r\n}\r\n\r\n.name[_ngcontent-%COMP%] {\r\n    border-bottom: solid darkcyan;\r\n}\r\n\r\n.images-selector[_ngcontent-%COMP%] {\r\n    background-color: grey; \r\n    border-radius: 50px; \r\n    height: 15px; \r\n    width: 15px; \r\n    display: inline-block; \r\n    margin-right: 4px; \r\n    margin-left: 4px;\r\n}\r\n\r\nbutton.images-selector[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    background-color: green !important;\r\n}\r\n\r\n.current-selection-img[_ngcontent-%COMP%]{\r\n    background-color: black !important;\r\n}\r\n\r\n.project-images[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\nmat-card-content[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n}\r\n\r\n.image-style[_ngcontent-%COMP%] {\r\n    max-height: 300px;\r\n    max-width: 100%;\r\n\r\n}\r\n\r\n.project-stack-style[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n}\r\n\r\n.fade[_ngcontent-%COMP%] {\r\n    animation: fade ease 2s;\r\n  }\r\n\r\n@keyframes fade {\r\n    from {opacity: .4}\r\n    to {opacity: 1}\r\n  }\r\n\r\n.one-col[_ngcontent-%COMP%] {\r\n    max-width: 400px;\r\n}\r\n\r\n.two-col[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n}\r\n\r\n.three-col[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLHdDQUF3QztJQUN4QywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSTtNQUNFLFVBQVU7SUFDWjtJQUNBO01BQ0UsWUFBWTtJQUNkO0VBQ0Y7O0FBR0E7Q0FDRCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLFVBQVU7Q0FDVixZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLHVDQUF1QztBQUN4Qzs7QUFFQTtDQUNDO0VBQ0M7Q0FDRDtDQUNBO0VBQ0Msc0JBQXNCO0NBQ3ZCO0FBQ0Q7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0VBQ3pCOztBQUdBO0lBQ0UsTUFBTSxXQUFXO0lBQ2pCLElBQUksVUFBVTtFQUNoQjs7QUFFRjtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJjb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTsgKi9cclxuICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIycHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50IGRpdiBoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiBkYXJrY3lhbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuXHJcbi53ZWxjb21lLXNlY3Rpb24ge1xyXG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogbm9uZTtcclxuICAgIHBhZGRpbmctdG9wOiBub25lO1xyXG59XHJcblxyXG4uZXhwLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbn1cclxuXHJcbi5leHAtY2FyZCB1bHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcblxyXG59XHJcblxyXG4uY2FyZC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG59XHJcblxyXG4uZXhwYW5kLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGFuaW1hdGlvbjogTW92ZVVwRG93biAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMnM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgTW92ZVVwRG93biB7XHJcbiAgICAwJSwgMTAwJSB7XHJcbiAgICAgIGJvdHRvbTogMjA7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICBib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgI2NvbnRhaW5lciB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jdGV4dCB7XHJcblx0Y29sb3I6IGRhcmtjeWFuO1xyXG5cdGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbiNjdXJzb3Ige1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0d2lkdGg6IDNweDtcclxuXHRoZWlnaHQ6IDM1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuXHRhbmltYXRpb246IGJsaW5rIC43NXMgc3RlcC1lbmQgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmsge1xyXG5cdGZyb20sIHRvIHsgXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCBcclxuXHR9XHJcblx0NTAlIHsgXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBncmV5OyBcclxuXHR9XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIGRhcmtjeWFuO1xyXG59XHJcblxyXG4uaW1hZ2VzLXNlbGVjdG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDsgXHJcbiAgICBoZWlnaHQ6IDE1cHg7IFxyXG4gICAgd2lkdGg6IDE1cHg7IFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcclxuICAgIG1hcmdpbi1yaWdodDogNHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5pbWFnZXMtc2VsZWN0b3IgOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1cnJlbnQtc2VsZWN0aW9uLWltZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltYWdlcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5pbWFnZS1zdHlsZSB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5wcm9qZWN0LXN0YWNrLXN0eWxlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5mYWRlIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZSBlYXNlIDJzO1xyXG4gIH1cclxuICBcclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGUge1xyXG4gICAgZnJvbSB7b3BhY2l0eTogLjR9XHJcbiAgICB0byB7b3BhY2l0eTogMX1cclxuICB9XHJcblxyXG4ub25lLWNvbCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4udHdvLWNvbCB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG59XHJcblxyXG4udGhyZWUtY29sIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG59XHJcbiJdfQ== */";
class ContentComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.projects = [
            {
                title: "Space Shooter",
                imgPaths: ["assets/space 3.png", "assets/space 1.png"],
                stack: ["Python", "Pygame", "Sprites"],
                class: "fade-right",
                curImgIdx: 0,
                id: "img1"
            },
            {
                title: "Movie Nomination",
                imgPaths: ["assets/movFinder 1.png", "assets/movFinder 2.png"],
                stack: ["Angular", "Typescript", "HTML", "CSS", "Angular Material"],
                class: "fade-right",
                curImgIdx: 0,
                id: "img2"
            },
            {
                title: "Vehicle Registration",
                imgPaths: ["assets/car 2.png", "assets/car 1.png", "assets/car 3.png"],
                stack: ["Java", "OOP", "Polymorphism"],
                class: "fade-right",
                curImgIdx: 0,
                id: "img3"
            },
            {
                title: "Connect Four",
                imgPaths: ["assets/connect4 1.png", "assets/connect4 2.png", "assets/connect4 3.png"],
                stack: ["Java", "OOP", "Android Studio"],
                class: "fade-right",
                curImgIdx: 0,
                id: "img4"
            }
        ];
    }
    ngOnInit() {
        this.breakpoint = this.checkBreakpoints(window);
        // List of sentences
        var _CONTENT = [
            "Software Engineer",
            "Mobile Developer",
            "University Student",
            "Full-Stack Developer"
        ];
        // Current sentence being processed
        var _PART = 0;
        // Character number of the current sentence being processed 
        var _PART_INDEX = 0;
        // Holds the handle returned from setInterval
        var _INTERVAL_VAL;
        // Element that holds the text
        var _ELEMENT = document.querySelector("#text");
        // Cursor element 
        var _CURSOR = document.querySelector("#cursor");
        // Implements typing effect
        function Type() {
            // Get substring with 1 characater added
            var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX++;
            // If full sentence has been displayed then start to delete the sentence after some time
            if (text === _CONTENT[_PART]) {
                // Hide the cursor
                _CURSOR.style.display = 'none';
                clearInterval(_INTERVAL_VAL);
                setTimeout(function () {
                    _INTERVAL_VAL = setInterval(Delete, 50);
                }, 2000);
            }
        }
        // Implements deleting effect
        function Delete() {
            // Get substring with 1 characater deleted
            var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX--;
            // If sentence has been deleted then start to display the next sentence
            if (text === '') {
                clearInterval(_INTERVAL_VAL);
                // If current sentence was last then display the first one, else move to the next
                if (_PART == (_CONTENT.length - 1))
                    _PART = 0;
                else
                    _PART++;
                _PART_INDEX = 0;
                // Start to display the next sentence after some time
                setTimeout(function () {
                    _CURSOR.style.display = 'inline-block';
                    _INTERVAL_VAL = setInterval(Type, 100);
                }, 200);
            }
        }
        // Start the typing effect on load
        _INTERVAL_VAL = setInterval(Type, 100);
    }
    openDialog(project) {
        this.dialog.open(ProjectDlgComponent, {
            data: { project }
        });
    }
    closeDlg() {
        this.dialog.closeAll();
    }
    changeImgClicked(id) {
        var element = document.getElementById(id);
        element.classList.remove("fade");
        setTimeout(function () { element.classList.add("fade"); }, 10);
    }
    onResize(event) {
        this.breakpoint = this.checkBreakpoints(event.target);
    }
    //Determine breakpoints for nominations grid list 
    checkBreakpoints(target) {
        if (target.innerWidth <= 1000) {
            return 1;
        }
        if (target.innerWidth <= 1400) {
            return 2;
        }
        return 3;
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 91, vars: 7, consts: [["fxLayout", "column", "id", "data-scroll-container", 1, "content"], ["id", "welcome", "fxLayout", "column", "fxLayoutAlign", "center center", "data-scroll-section", "", 1, "welcome-section"], ["src", "assets/levi.png", "width", "400px", 2, "border-radius", "300px"], [2, "font-size", "30px", "line-height", "1.5em"], [1, "name"], ["id", "container"], ["id", "text"], ["id", "cursor"], [1, "expand-button"], ["id", "Experience", "data-scroll-section", "", 1, "section"], ["data-aos", "fade-in"], ["data-aos", "fade-up", 1, "mat-elevation-z5", "exp-card"], [2, "font-weight", "100"], [1, "card-text"], ["id", "Projects", "data-scroll-section", "", 1, "section"], ["rowHeight", "600px", 2, "width", "100%", 3, "cols", "ngClass", "resize"], ["data-aos", "zoom-in-up", 4, "ngFor", "ngForOf"], ["id", "Resume", "data-aos", "fade-up", "data-scroll-section", "", 1, "section"], ["data-aos", "zoom-in-up"], ["fxLayout", "column", 1, "mat-elevation-z5", "exp-card", 2, "width", "90%", "height", "90%"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["mat-button", "", 2, "color", "darkcyan", 3, "click"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "card-text", 2, "height", "100%"], [1, "project-images"], [1, "image-style", 3, "src", "id"], ["fxLayout", "row", "fxLayoutAlign", "center end"], [4, "ngFor", "ngForOf"], [1, "project-stack-style"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "example-chip"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 1, "images-selector", 3, "ngClass", "click"], ["cdkDrag", "", 1, "example-box"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hi there my name is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Daanyaal Tahir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " and I'm a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Full Stack Developer, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Completely Managed Inc., Newmarket, ON ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-content", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Worked alongside 5 developers on website to display network analytics to customers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Led and organized projects.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Drove team meetings and supported other programmers when required.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Interviewed potential candidates to help hire new staff, and later trained new hires.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Utilized ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "JS/TS, CSS/SCSS, Redux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "AngularJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " framework for frontend to generate modern and clean UI\u2019s such as a wizard for scan process/configuration, scan scheduling, scan progress bar, network results etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Utilized ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "NodeJS, Loopback API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "HTTP request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " to redo the backend for network scans to be more efficient and to communicate with frontend.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Parsed and applied user defined profiles to devices found on network before sending to frontend during scans.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Displayed live feed of data for all running scans using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "WebSocket\u2019s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Accessed project sandboxes for frontend, backend, database etc. with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Docker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " and docker-compose.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Stored and manipulated data on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " database and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "mongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Restructured MySQL table used for network scans to be more efficient/organized.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Utilized ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Linux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " to access, edit (vim) and search for files (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "grep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Created branches using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "GitLab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " for specific bugs/features and later merged to master branch.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-grid-list", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ContentComponent_Template_mat_grid_list_resize_84_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, ContentComponent_mat_grid_tile_85_Template, 16, 5, "mat-grid-tile", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "sasdasdasdasdhasidhasduihasduihasdiuashdiuashdiashdiuashdiuasdhasiudhasuihasdisahdiahsdiaud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.breakpoint)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c1, ctx.breakpoint == 1, ctx.breakpoint == 2, ctx.breakpoint == 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChip"]], styles: [_c2] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();
class ProjectDlgComponent {
    constructor(data) { this.project = Object.assign({}, data.project); }
    ngOnInit() {
        // will log the entire data object
        console.log(this.project);
    }
}
ProjectDlgComponent.ɵfac = function ProjectDlgComponent_Factory(t) { return new (t || ProjectDlgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ProjectDlgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectDlgComponent, selectors: [["ViewProjectDlg"]], decls: 10, vars: 5, consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", "fxLayout", "column", "fxLayoutAlign", "space-between center", 2, "height", "100%"], [1, "project-images"], [1, "image-style", 3, "src", "id"], ["fxLayout", "row", "fxLayoutAlign", "center end"], [4, "ngFor", "ngForOf"], [1, "project-stack-style"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "example-chip"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 1, "images-selector", 3, "ngClass", "click"], ["cdkDrag", "", 1, "example-box"]], template: function ProjectDlgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectDlgComponent_div_6_Template, 2, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-chip-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectDlgComponent_mat_chip_9_Template, 2, 1, "mat-chip", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.project.imgPaths[ctx.project.curImgIdx], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.project.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.imgPaths);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.stack);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipList"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChip"]], styles: [_c2] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDlgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ViewProjectDlg',
                templateUrl: './view-project-dialog.html',
                styleUrls: ['./content.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "RgEp":
/*!**************************************************************!*\
  !*** ./src/app/side-navigation/side-navigation.component.ts ***!
  \**************************************************************/
/*! exports provided: SideNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationComponent", function() { return SideNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");



class SideNavigationComponent {
    constructor() { }
    ngOnInit() {
    }
}
SideNavigationComponent.ɵfac = function SideNavigationComponent_Factory(t) { return new (t || SideNavigationComponent)(); };
SideNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavigationComponent, selectors: [["app-side-navigation"]], decls: 22, vars: 0, consts: [["fxLayout", "column", 1, "nav-bar"], ["id", "particles-js", 2, "background-color", "lightgrey", "height", "100%"], [2, "position", "absolute", "padding", "20px"], [1, "title"], [1, "nav-menu"], ["id", "menu", 1, "menu"], ["href", "#welcome", 1, "current"], ["href", "#Experience"], ["href", "#Projects"], ["href", "#Resume"], ["href", "#Contact"]], template: function SideNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Daanyaal Tahir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"]], styles: [".nav-bar[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 100%;\n  top: 0;\n  position: fixed;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.nav-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  margin-top: 60px;\n}\n\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 3px;\n  left: 20px;\n  top: 0;\n  height: calc(100% - 78px);\n  background: white;\n  z-index: 1;\n  margin-top: 39px;\n}\n\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 25px 0;\n  padding-left: 20px;\n}\n\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: font-size 0.5s;\n  text-decoration: none;\n  color: darkcyan;\n  font-size: 20px;\n  font-weight: normal;\n}\n\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white !important;\n}\n\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  content: \"\";\n  transition: transform 0.5s;\n  position: absolute;\n  background: black;\n  width: 20px;\n  height: 20px;\n  transform: scale(1);\n  left: 8px;\n  z-index: 1;\n  border-radius: 30px;\n  border: 4px solid darkgrey;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: darkturquoise;\n  font-size: 32px;\n  font-weight: bold;\n  padding-top: 35px;\n  text-shadow: 1px 1px white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZGUtbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksdUJBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBRko7O0FBS0E7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFGSiIsImZpbGUiOiJzaWRlLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWJhciB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubmF2LW1lbnV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG4ubmF2LW1lbnUgdWw6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNzhweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW4tdG9wOiAzOXB4O1xyXG5cclxuICAgXHJcbn1cclxuXHJcbi5uYXYtbWVudSB1bCBsaXtcclxuICAgIHBhZGRpbmc6IDI1cHggMDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLm5hdi1tZW51IHVsIGxpIGF7XHJcbiAgICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC41cztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBkYXJrY3lhbjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn0gXHJcblxyXG4ubmF2LW1lbnUgdWwgbGkgYTpob3ZlcntcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59IFxyXG5cclxuLm5hdi1tZW51IHVsIGxpIGE6YmVmb3Jle1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGRhcmtncmV5O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgY29sb3I6IGRhcmt0dXJxdW9pc2U7IFxyXG4gICAgZm9udC1zaXplOiAzMnB4OyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICAgIHBhZGRpbmctdG9wOiAzNXB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggd2hpdGU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-navigation',
                templateUrl: './side-navigation.component.html',
                styleUrls: ['./side-navigation.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-navigation/side-navigation.component */ "RgEp");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/content.component */ "0btM");




class AppComponent {
    constructor() {
        this.title = 'portfolio-website';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[2, "height", "100%"], [2, "margin-left", "250px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-side-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_1__["SideNavigationComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-navigation/side-navigation.component */ "RgEp");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/content.component */ "0btM");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_4__["SideNavigationComponent"],
        _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
        _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ProjectDlgComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_4__["SideNavigationComponent"],
                    _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
                    _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ProjectDlgComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
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




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
//Active navigation on scroll
window.addEventListener('scroll', event => {
    let navigationLinks = document.querySelectorAll('ul.menu li a');
    console.log(navigationLinks);
    let fromTop = window.scrollY;
    console.log("fromTop", fromTop);
    for (var i = 0; i < navigationLinks.length - 1; i++) {
        let section = document.querySelector(navigationLinks[i].hash);
        let section2 = document.querySelector(navigationLinks[i + 1].hash);
        console.log("topOffset", section.offsetTop);
        if (section.offsetTop - 300 <= fromTop && fromTop != 0) {
            navigationLinks[i].classList.add('current');
            if (navigationLinks[i + 1]) {
                navigationLinks[i + 1].classList.remove('current');
            }
            if (navigationLinks[i - 1]) {
                navigationLinks[i - 1].classList.remove('current');
            }
        }
    }
    // navigationLinks.forEach((link: any )=> {
    //   let section = document.querySelector(link.hash);
    //  console.log("topOffset",section.offsetTop)
    //   if (
    //     section.offsetTop - 200 <= fromTop &&
    //     fromTop < section.offsetTop + 100 || fromTop==0
    //   ) {
    //     link.classList.add('current');
    //     console.log(link.classList)
    //   } else {
    //     link.classList.remove('current');
    //   }
    // });
});
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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