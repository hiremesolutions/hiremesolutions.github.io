function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/index/index.component */
    "./src/app/components/index/index.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'index'
    }, {
      path: 'index',
      component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'hireme';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/index/index.component */
    "./src/app/components/index/index.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/dialog/dialog.component */
    "./src/app/components/dialog/dialog.component.ts");
    /* harmony import */


    var _components_friend_friend_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/friend/friend.component */
    "./src/app/components/friend/friend.component.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_line_line_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/line/line.component */
    "./src/app/components/line/line.component.ts");

    var angularMaterialModules = [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"]];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], angularMaterialModules]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"], _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], _components_friend_friend_component__WEBPACK_IMPORTED_MODULE_11__["FriendComponent"], _components_line_line_component__WEBPACK_IMPORTED_MODULE_15__["LineComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"], _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], _components_friend_friend_component__WEBPACK_IMPORTED_MODULE_11__["FriendComponent"], _components_line_line_component__WEBPACK_IMPORTED_MODULE_15__["LineComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], angularMaterialModules],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          entryComponents: [_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], _components_friend_friend_component__WEBPACK_IMPORTED_MODULE_11__["FriendComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/dialog/dialog.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/dialog/dialog.component.ts ***!
    \*******************************************************/

  /*! exports provided: DialogComponent */

  /***/
  function srcAppComponentsDialogDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
      return DialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var DialogComponent = /*#__PURE__*/function () {
      function DialogComponent(dialogRef, data, fb) {
        _classCallCheck(this, DialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.form = this.fb.group({
          id: Math.floor(Math.random() * (10000 - 1) + 1),
          initialX: data.initialX,
          initialY: data.initialY,
          lineX: data.initialX,
          lineY: data.initialY,
          totalFromSales: 0,
          totalFromCommission: 0,
          totalFromSalesPlusComission: 0,
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          ticketsSold: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^\\d+$')]],
          children: [[]]
        });
      }

      _createClass(DialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "continue",
        value: function _continue() {
          this.dialogRef.close(this.form.value);
        }
      }]);

      return DialogComponent;
    }();

    DialogComponent.ɵfac = function DialogComponent_Factory(t) {
      return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogComponent,
      selectors: [["app-dialog"]],
      decls: 13,
      vars: 2,
      consts: [["mat-dialog-content", ""], [3, "formGroup"], [1, "example-full-width"], ["matInput", "", "placeholder", "John", "formControlName", "name"], ["matInput", "", "type", "number", "placeholder", "20", "formControlName", "ticketsSold"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
      template: function DialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Friend's Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tickets Sold");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_11_listener() {
            return ctx["continue"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog',
          templateUrl: './dialog.component.html',
          styleUrls: ['./dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/friend/friend.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/friend/friend.component.ts ***!
    \*******************************************************/

  /*! exports provided: FriendComponent */

  /***/
  function srcAppComponentsFriendFriendComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendComponent", function () {
      return FriendComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _line_line_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../line/line.component */
    "./src/app/components/line/line.component.ts");

    function FriendComponent_div_0_ng_container_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-line", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var child_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x1", ctx_r2.friend.lineX)("y1", ctx_r2.friend.lineY)("x2", child_r3.lineX)("y2", child_r3.lineY)("color", ctx_r2.friend.color);
      }
    }

    function FriendComponent_div_0_ng_container_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FriendComponent_div_0_ng_container_25_div_1_Template, 2, 5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.friend.children);
      }
    }

    function FriendComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragMoved", function FriendComponent_div_0_Template_div_cdkDragMoved_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.handleDrag($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendComponent_div_0_Template_span_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.emitId();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tickets Sold: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Total Sales: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Total Commission: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Total Sales + Commission: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FriendComponent_div_0_ng_container_25_Template, 2, 1, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx_r0.friend.initialX, "px")("top", ctx_r0.friend.initialY - 114, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.friend.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.friend.ticketsSold);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.friend.totalFromSales);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.friend.totalFromCommission);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.friend.totalFromSalesPlusComission);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.friend.children.length > 0);
      }
    }

    var FriendComponent = /*#__PURE__*/function () {
      function FriendComponent() {
        _classCallCheck(this, FriendComponent);

        this.friend = null;
        this.idEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FriendComponent, [{
        key: "handleDrag",
        value: function handleDrag(e) {
          var element = e.source.getRootElement();
          var newPos = element.getBoundingClientRect();
          this.friend.lineX = newPos.x;
          this.friend.lineY = newPos.y;
        }
      }, {
        key: "emitId",
        value: function emitId() {
          this.idEmitter.emit({
            id: this.friend.id,
            showOverlay: true
          });
        }
      }]);

      return FriendComponent;
    }();

    FriendComponent.ɵfac = function FriendComponent_Factory(t) {
      return new (t || FriendComponent)();
    };

    FriendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FriendComponent,
      selectors: [["app-friend"]],
      inputs: {
        friend: "friend"
      },
      outputs: {
        idEmitter: "idEmitter"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container", 4, "ngIf"], [1, "container"], ["cdkDragBoundary", "body", "cdkDrag", "", 1, "example-box", 3, "cdkDragMoved"], [1, "material-icons", 3, "click"], [1, "friend-info"], [4, "ngIf"], ["class", "line-container", 4, "ngFor", "ngForOf"], [1, "line-container"], [3, "x1", "y1", "x2", "y2", "color"]],
      template: function FriendComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FriendComponent_div_0_Template, 26, 10, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.friend);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _line_line_component__WEBPACK_IMPORTED_MODULE_3__["LineComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  height: 0;\n}\n.container[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 150px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  text-indent: 10px;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.container[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.container[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 3px 0;\n}\n.container[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 30px;\n}\n.container[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]   .friend-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9wcml2YXRlL3Zhci93d3cvZGluYW1vL3NyYy9hcHAvY29tcG9uZW50cy9mcmllbmQvZnJpZW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZyaWVuZC9mcmllbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHVEQUFBO0VBQ0EsK0dBQUE7QUNFUjtBRERRO0VBQ0kscUhBQUE7QUNHWjtBRENRO0VBQ0ksYUFBQTtBQ0NaO0FEQ1E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNDWjtBRENRO0VBQ0ksaUJBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZnJpZW5kL2ZyaWVuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGhlaWdodDogMDtcbiAgICAuZXhhbXBsZS1ib3gge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgICAgICBjdXJzb3I6IG1vdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDNweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuICAgICAgICAuZnJpZW5kLWluZm8gc3BhbiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5jb250YWluZXIge1xuICBoZWlnaHQ6IDA7XG59XG4uY29udGFpbmVyIC5leGFtcGxlLWJveCB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGN1cnNvcjogbW92ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWluZGVudDogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5jb250YWluZXIgLmV4YW1wbGUtYm94OmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5jb250YWluZXIgLmV4YW1wbGUtYm94IHAge1xuICBtYXJnaW46IDNweCAwO1xufVxuLmNvbnRhaW5lciAuZXhhbXBsZS1ib3ggLm1hdGVyaWFsLWljb25zIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5jb250YWluZXIgLmV4YW1wbGUtYm94IC5mcmllbmQtaW5mbyBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FriendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-friend',
          templateUrl: './friend.component.html',
          styleUrls: ['./friend.component.scss']
        }]
      }], function () {
        return [];
      }, {
        friend: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        idEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/index/index.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/index/index.component.ts ***!
    \*****************************************************/

  /*! exports provided: IndexComponent */

  /***/
  function srcAppComponentsIndexIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
      return IndexComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../dialog/dialog.component */
    "./src/app/components/dialog/dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_services_friends_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/friends.service */
    "./src/app/services/friends.service.ts");
    /* harmony import */


    var src_app_services_files_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/files.service */
    "./src/app/services/files.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _friend_friend_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../friend/friend.component */
    "./src/app/components/friend/friend.component.ts");

    function IndexComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_div_1_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.openDialog($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_div_1_Template_span_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.closeOverlay();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Click somewhere to place a new friend");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IndexComponent_app_friend_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-friend", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("idEmitter", function IndexComponent_app_friend_10_Template_app_friend_idEmitter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.getSelectedId($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("friend", item_r5);
      }
    }

    var IndexComponent = /*#__PURE__*/function () {
      function IndexComponent(dialog, friendsService, filesService) {
        _classCallCheck(this, IndexComponent);

        this.dialog = dialog;
        this.friendsService = friendsService;
        this.filesService = filesService;
        this.items = [];
        this.selectedId = null;
        this.ticketPrice = 100;
        this.showOverlay = false;
        this.friendsService.init();
        this.items = this.friendsService.flattenedItems;
      }

      _createClass(IndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openDialog",
        value: function openDialog(e) {
          var _this = this;

          var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], {
            width: '250px',
            data: {
              initialX: e.offsetX,
              initialY: e.offsetY
            }
          });
          dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
              data.totalFromSales = data.ticketsSold * _this.ticketPrice;

              if (_this.selectedId) {
                data.fatherId = _this.selectedId;
                data.color = _this.friendsService.makeRandomColor();

                _this.friendsService.update(data, _this.selectedId);
              } else {
                data.color = _this.friendsService.makeRandomColor();

                _this.friendsService.add(data);
              }
            }

            _this.closeOverlay();
          });
        }
      }, {
        key: "getSelectedId",
        value: function getSelectedId(data) {
          this.selectedId = data.id;
          this.showOverlay = data.showOverlay;
        }
      }, {
        key: "closeOverlay",
        value: function closeOverlay() {
          this.showOverlay = false;
          this.selectedId = null;
        }
      }, {
        key: "export",
        value: function _export() {
          this.filesService.exportToCSV(this.items);
        }
      }]);

      return IndexComponent;
    }();

    IndexComponent.ɵfac = function IndexComponent_Factory(t) {
      return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_friends_service__WEBPACK_IMPORTED_MODULE_3__["FriendsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_files_service__WEBPACK_IMPORTED_MODULE_4__["FilesService"]));
    };

    IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IndexComponent,
      selectors: [["app-index"]],
      decls: 11,
      vars: 2,
      consts: [[1, "index-page"], ["class", "overlay", 3, "click", 4, "ngIf"], [1, "header"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "friends-container"], [3, "friend", "idEmitter", 4, "ngFor", "ngForOf"], [1, "overlay", 3, "click"], [1, "material-icons", 3, "click"], [3, "friend", "idEmitter"]],
      template: function IndexComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndexComponent_div_1_Template, 5, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bring A Friend Diagram");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_5_listener() {
            return ctx["export"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Export Diagram");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_7_listener() {
            return ctx.showOverlay = !ctx.showOverlay;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add A New Friend!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IndexComponent_app_friend_10_Template, 1, 1, "app-friend", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOverlay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _friend_friend_component__WEBPACK_IMPORTED_MODULE_7__["FriendComponent"]],
      styles: [".index-page[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n.index-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.index-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n.index-page[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-animation: fadeIn ease-in 0.5s;\n          animation: fadeIn ease-in 0.5s;\n  position: fixed;\n  top: 3px;\n  left: 3px;\n  width: 99%;\n  height: 99%;\n  border: 3px solid red;\n  border-style: dashed;\n  z-index: 999;\n  background-color: rgba(0, 0, 0, 0.62);\n  cursor: pointer;\n}\n.index-page[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  width: 270px;\n  color: white;\n  font-weight: bold;\n}\n.index-page[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 30px;\n  top: 30px;\n  font-size: 50px;\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9wcml2YXRlL3Zhci93d3cvZGluYW1vL3NyYy9hcHAvY29tcG9uZW50cy9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0FDRVI7QUREUTtFQUNJLGNBQUE7QUNHWjtBREFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtBQ0VSO0FERFE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDR1o7QUREUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDR1o7QURFQTtFQUNJO0lBQ0ksVUFBQTtFQ0NOO0VEQ0U7SUFDSSxVQUFBO0VDQ047QUFDRjtBRFBBO0VBQ0k7SUFDSSxVQUFBO0VDQ047RURDRTtJQUNJLFVBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmRleC1wYWdlIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAuaGVhZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm92ZXJsYXkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZS1pbiAwLjVzO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogM3B4O1xuICAgICAgICBsZWZ0OiAzcHg7XG4gICAgICAgIHdpZHRoOiA5OSU7XG4gICAgICAgIGhlaWdodDogOTklO1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XG4gICAgICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42Mik7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgd2lkdGg6IDI3MHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLm1hdGVyaWFsLWljb25zIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG4iLCIuaW5kZXgtcGFnZSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLmluZGV4LXBhZ2UgLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbmRleC1wYWdlIC5oZWFkZXIgYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uaW5kZXgtcGFnZSAub3ZlcmxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbmltYXRpb246IGZhZGVJbiBlYXNlLWluIDAuNXM7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDNweDtcbiAgd2lkdGg6IDk5JTtcbiAgaGVpZ2h0OiA5OSU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmluZGV4LXBhZ2UgLm92ZXJsYXkgaDEge1xuICB3aWR0aDogMjcwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW5kZXgtcGFnZSAub3ZlcmxheSAubWF0ZXJpYWwtaWNvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzMHB4O1xuICB0b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-index',
          templateUrl: './index.component.html',
          styleUrls: ['./index.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: src_app_services_friends_service__WEBPACK_IMPORTED_MODULE_3__["FriendsService"]
        }, {
          type: src_app_services_files_service__WEBPACK_IMPORTED_MODULE_4__["FilesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/line/line.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/line/line.component.ts ***!
    \***************************************************/

  /*! exports provided: LineComponent */

  /***/
  function srcAppComponentsLineLineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineComponent", function () {
      return LineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LineComponent__svg_svg_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "line", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke", ctx_r0.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx_r0.x1)("y1", ctx_r0.y1)("x2", ctx_r0.x2)("y2", ctx_r0.y2);
      }
    }

    var LineComponent = /*#__PURE__*/function () {
      function LineComponent() {
        _classCallCheck(this, LineComponent);

        this._x1 = 0;
        this._y1 = 0;
        this._x2 = 0;
        this._y2 = 0;
        this.color = '';
      }

      _createClass(LineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "x1",
        set: function set(cord) {
          this._x1 = cord + 125;
        },
        get: function get() {
          return this._x1;
        }
      }, {
        key: "y1",
        set: function set(cord) {
          this._y1 = cord + 75;
        },
        get: function get() {
          return this._y1;
        }
      }, {
        key: "x2",
        set: function set(cord) {
          this._x2 = cord + 125;
        },
        get: function get() {
          return this._x2;
        }
      }, {
        key: "y2",
        set: function set(cord) {
          this._y2 = cord + 75;
        },
        get: function get() {
          return this._y2;
        }
      }]);

      return LineComponent;
    }();

    LineComponent.ɵfac = function LineComponent_Factory(t) {
      return new (t || LineComponent)();
    };

    LineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LineComponent,
      selectors: [["app-line"]],
      inputs: {
        color: "color",
        x1: "x1",
        y1: "y1",
        x2: "x2",
        y2: "y2"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "line"]],
      template: function LineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LineComponent__svg_svg_0_Template, 2, 6, "svg", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.x1 && ctx.y1 && ctx.x2 && ctx.y2 && ctx.color);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n}\nsvg[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n  stroke-width: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9wcml2YXRlL3Zhci93d3cvZGluYW1vL3NyYy9hcHAvY29tcG9uZW50cy9saW5lL2xpbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGluZS9saW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsTUFBQTtBQ0NKO0FEQUk7RUFDSSxlQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpbmUvbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInN2ZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0b3A6IDA7XG4gICAgbGluZSB7XG4gICAgICAgIHN0cm9rZS13aWR0aDogMjtcbiAgICB9XG59XG4iLCJzdmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0b3A6IDA7XG59XG5zdmcgbGluZSB7XG4gIHN0cm9rZS13aWR0aDogMjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-line',
          templateUrl: './line.component.html',
          styleUrls: ['./line.component.scss']
        }]
      }], function () {
        return [];
      }, {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        x1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        y1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        x2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        y2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/files.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/files.service.ts ***!
    \*******************************************/

  /*! exports provided: FilesService */

  /***/
  function srcAppServicesFilesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesService", function () {
      return FilesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular7-csv/dist/Angular-csv */
    "./node_modules/angular7-csv/dist/Angular-csv.js");
    /* harmony import */


    var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_1__);

    var FilesService = /*#__PURE__*/function () {
      function FilesService() {
        _classCallCheck(this, FilesService);
      }

      _createClass(FilesService, [{
        key: "exportToCSV",
        value: function exportToCSV(data) {
          var transformedData = data.map(function (friend) {
            var children = [];

            if (friend.children.length > 0) {
              for (var i = 0; i < friend.children.length; i++) {
                children.push(friend.children[i].name);
              }
            } else {
              children.push('None');
            }

            return {
              name: friend.name,
              ticketsSold: friend.ticketsSold,
              totalSales: friend.totalFromSales,
              totalFromCommission: friend.totalFromCommission,
              totalFromSalesPlusCommission: friend.totalFromSalesPlusComission,
              children: children.join(', ')
            };
          });
          var options = {
            headers: ["Name", "Tickets Sold", "Total Sales", "Total Commission", "Total Sales + Commission", "Friends Brought"]
          };
          new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_1__["AngularCsv"](transformedData, 'Diagram', options);
        }
      }]);

      return FilesService;
    }();

    FilesService.ɵfac = function FilesService_Factory(t) {
      return new (t || FilesService)();
    };

    FilesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FilesService,
      factory: FilesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/friends.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/friends.service.ts ***!
    \*********************************************/

  /*! exports provided: FriendsService */

  /***/
  function srcAppServicesFriendsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendsService", function () {
      return FriendsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FriendsService = /*#__PURE__*/function () {
      function FriendsService() {
        _classCallCheck(this, FriendsService);

        this.initialState = [];
        this.flattenedItems = [];
        this.commissionRate = 0.2;
      }

      _createClass(FriendsService, [{
        key: "init",
        value: function init() {
          this.initialState = [{
            initialX: 250,
            initialY: 130,
            lineX: 250,
            lineY: 130,
            id: 1,
            name: "John",
            ticketsSold: 50,
            totalFromCommission: 1360,
            totalFromSales: 5000,
            totalFromSalesPlusComission: 6360,
            color: 'red',
            children: [{
              initialX: 600,
              initialY: 130,
              lineX: 600,
              lineY: 130,
              id: 2,
              fatherId: 1,
              name: "Alon",
              ticketsSold: 30,
              totalFromCommission: 0,
              totalFromSales: 3000,
              totalFromSalesPlusComission: 3000,
              color: 'purple',
              children: []
            }, {
              initialX: 600,
              initialY: 300,
              lineX: 600,
              lineY: 300,
              id: 3,
              fatherId: 1,
              name: "Tal",
              ticketsSold: 20,
              totalFromCommission: 1800,
              totalFromSales: 2000,
              totalFromSalesPlusComission: 3800,
              color: 'blue',
              children: [{
                initialX: 900,
                initialY: 130,
                lineX: 900,
                lineY: 130,
                id: 4,
                fatherId: 3,
                name: "Shalom",
                ticketsSold: 40,
                totalFromCommission: 0,
                totalFromSales: 4000,
                totalFromSalesPlusComission: 4000,
                color: 'black',
                children: []
              }, {
                initialX: 900,
                initialY: 300,
                lineX: 900,
                lineY: 300,
                id: 5,
                fatherId: 3,
                name: "Adi",
                ticketsSold: 50,
                totalFromCommission: 0,
                totalFromSales: 5000,
                totalFromSalesPlusComission: 5000,
                color: 'orange',
                children: []
              }]
            }]
          }];
          this.flattenedItems = this.flattenArray(this.initialState);
        }
      }, {
        key: "add",
        value: function add(data) {
          this.flattenedItems.push(data);
        }
      }, {
        key: "update",
        value: function update(data, id) {
          var index = this.flattenedItems.findIndex(function (x) {
            return x.id === id;
          });
          this.flattenedItems[index].children.push(data);
          this.flattenedItems.push(data);
          this.calculateCommission(data, index, data.totalFromSales);
        }
      }, {
        key: "calculateCommission",
        value: function calculateCommission(child, index, commission) {
          if (!child) return;
          var father = this.flattenedItems[index];
          var moneyFromChild = Math.floor(commission * this.commissionRate);
          father.totalFromCommission += moneyFromChild;
          father.totalFromSalesPlusComission = father.totalFromSales + father.totalFromCommission;
          this.flattenedItems[index] = father;

          if (father.fatherId) {
            var nextId = this.flattenedItems.findIndex(function (x) {
              return father.fatherId === x.id;
            });
            return this.calculateCommission(father, nextId, moneyFromChild);
          } else return this.calculateCommission(null, null, null);
        }
      }, {
        key: "flattenArray",
        value: function flattenArray(array) {
          var _this2 = this;

          var result = [];
          array.forEach(function (friend) {
            result.push(friend);

            if (Array.isArray(friend.children)) {
              result = result.concat(_this2.flattenArray(friend.children));
            }
          });
          return result;
        }
      }, {
        key: "makeRandomColor",
        value: function makeRandomColor() {
          var color = '';

          while (color.length < 6) {
            color += Math.random().toString(16).substr(-6).substr(-1);
          }

          return '#' + color;
        }
      }]);

      return FriendsService;
    }();

    FriendsService.ɵfac = function FriendsService_Factory(t) {
      return new (t || FriendsService)();
    };

    FriendsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FriendsService,
      factory: FriendsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FriendsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /private/var/www/dinamo/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map