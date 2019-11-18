(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserAdd.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserAdd.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      valid: true,
      name: "",
      nameRules: [function (v) {
        return !!v || "Name is required";
      }, function (v) {
        return v && v.length <= 10 || "Name must be less than 10 characters";
      }],
      email: "",
      emailRules: [function (v) {
        return !!v || "E-mail is required";
      }, function (v) {
        return /.+@.+\..+/.test(v) || "E-mail must be valid";
      }],
      password: "",
      passwordRules: [function (v) {
        return !!v || "Password is required";
      }],
      password_confirmation: "",
      //password_confirmationRules: [v => !!v || "Password is required"],
      select: "",
      roles: ["Administrator", "User"],
      has_error: false,
      error: "",
      errors: {},
      success: false
    };
  },
  mounted: function mounted() {
    console.log("Register component mounted");
  },
  methods: {
    register: function register() {
      var app = this;
      this.$auth.register({
        data: {
          email: app.email,
          password: app.password,
          password_confirmation: app.password_confirmation
        },
        success: function success() {
          app.success = true;
          this.$router.push({
            name: "login",
            params: {
              successRegistrationRedirect: true
            }
          });
        },
        error: function error(res) {
          console.log(res.response.data.errors);
          app.has_error = true;
          app.error = res.response.data.error;
          app.errors = res.response.data.errors || {};
        }
      });
    },
    validate: function validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true; //this.register();
      }
    },
    reset: function reset() {
      this.$refs.form.reset();
    },
    resetValidation: function resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VBoilerplate: {
      functional: true,
      render: function render(h, _ref) {
        var data = _ref.data,
            props = _ref.props,
            children = _ref.children;
        return h("v-skeleton-loader", _objectSpread({}, data, {
          props: _objectSpread({
            boilerplate: false
          }, props)
        }), children);
      }
    }
  },
  data: function data() {
    return {
      has_error: false,
      users: null,
      loading: false,
      transition: "scale-transition",
      dialog: false
    };
  },
  mounted: function mounted() {
    this.getUsers();
    console.log("User list component mounted");
  },
  methods: {
    getUsers: function getUsers() {
      var _this = this;

      this.loading = true;
      setTimeout(function () {
        _this.$http({
          url: "api/users",
          method: "GET"
        }).then(function (res) {
          console.log("user list:", res.data);
          console.log("tabs", _this.tabs);
          _this.users = res.data.users;
          _this.loading = false;
        })["catch"](function (err) {
          _this.has_error = true;
          _this.loading = false;
          console.log("error: ", err);
        });
      }, 2000);
    },
    getUserById: function getUserById(id) {
      var _this2 = this;

      this.$http({
        url: "api/users/" + id,
        method: "GET"
      }).then(function (res) {
        console.log("user:", res.data);
      })["catch"](function (err) {
        _this2.has_error = true;
        console.log("error: ", err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserTabComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserTabComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserAdd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAdd */ "./resources/js/pages/user/UserAdd.vue");
/* harmony import */ var _UserList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList */ "./resources/js/pages/user/UserList.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  inject: ["theme"],
  components: {
    RegisterUserComponent: _UserAdd__WEBPACK_IMPORTED_MODULE_0__["default"],
    UserListComponent: _UserList__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      reactiveColor: "primary",
      tabs: 0
    };
  },
  methods: {
    changeColor: function changeColor(key) {
      this.reactiveColor = key == "list" ? "primary" : "green";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserAdd.vue?vue&type=template&id=49b81f5b&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserAdd.vue?vue&type=template&id=49b81f5b& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-form",
    {
      ref: "form",
      attrs: { "lazy-validation": true },
      model: {
        value: _vm.valid,
        callback: function($$v) {
          _vm.valid = $$v
        },
        expression: "valid"
      }
    },
    [
      _c("v-text-field", {
        attrs: {
          counter: 10,
          rules: _vm.nameRules,
          label: "Name",
          required: ""
        },
        model: {
          value: _vm.name,
          callback: function($$v) {
            _vm.name = $$v
          },
          expression: "name"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: { rules: _vm.emailRules, label: "E-mail", required: "" },
        model: {
          value: _vm.email,
          callback: function($$v) {
            _vm.email = $$v
          },
          expression: "email"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: { rules: _vm.passwordRules, label: "Password", required: "" },
        model: {
          value: _vm.password,
          callback: function($$v) {
            _vm.password = $$v
          },
          expression: "password"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          rules: _vm.passwordRules,
          label: "Confirm password",
          required: ""
        },
        model: {
          value: _vm.password_confirmation,
          callback: function($$v) {
            _vm.password_confirmation = $$v
          },
          expression: "password_confirmation"
        }
      }),
      _vm._v(" "),
      _c("v-select", {
        attrs: {
          items: _vm.roles,
          rules: [
            function(v) {
              return !!v || "Item is required"
            }
          ],
          label: "Roles disponibles",
          required: ""
        },
        model: {
          value: _vm.select,
          callback: function($$v) {
            _vm.select = $$v
          },
          expression: "select"
        }
      }),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "mr-4",
          attrs: { disabled: !_vm.valid, color: "success" },
          on: { click: _vm.validate }
        },
        [_vm._v("Validate")]
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "mr-4",
          attrs: { color: "error" },
          on: { click: _vm.reset }
        },
        [_vm._v("Reset Form")]
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        { attrs: { color: "warning" }, on: { click: _vm.resetValidation } },
        [_vm._v("Reset Validation")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserList.vue?vue&type=template&id=ec6b6858&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserList.vue?vue&type=template&id=ec6b6858& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    _vm.transition !== "None" ? "v-" + _vm.transition : "div",
    { tag: "component", attrs: { "hide-on-leave": "" } },
    [
      _vm.loading
        ? _c(
            "v-skeleton-loader",
            { staticClass: "mx-auto", attrs: { "max-width": "300" } },
            [
              _c("v-boilerplate", {
                attrs: { type: "list-item-avatar-two-line" }
              }),
              _vm._v(" "),
              _c("v-boilerplate", {
                attrs: { type: "list-item-avatar-two-line" }
              }),
              _vm._v(" "),
              _c("v-boilerplate", {
                attrs: { type: "list-item-avatar-two-line" }
              })
            ],
            1
          )
        : _c(
            "v-list",
            { attrs: { "two-line": "" } },
            _vm._l(_vm.users, function(user) {
              return _c(
                "v-list-item",
                {
                  key: user.name,
                  on: {
                    click: function($event) {
                      return _vm.getUserById(user.id)
                    }
                  }
                },
                [
                  _c(
                    "v-list-item-avatar",
                    [_c("v-icon", [_vm._v("person")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", {
                        domProps: { textContent: _vm._s(user.name) }
                      }),
                      _vm._v(" "),
                      _c("v-list-item-subtitle", {
                        domProps: { textContent: _vm._s(user.role) }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-action",
                    [
                      _c(
                        "v-dialog",
                        {
                          attrs: { width: "500" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "activator",
                                fn: function(ref) {
                                  var on = ref.on
                                  return [
                                    _c(
                                      "v-btn",
                                      { attrs: { icon: "" } },
                                      [
                                        _c(
                                          "v-icon",
                                          _vm._g(
                                            {
                                              attrs: { color: "grey lighten-1" }
                                            },
                                            on
                                          ),
                                          [_vm._v("mdi-information")]
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ],
                            null,
                            true
                          ),
                          model: {
                            value: _vm.dialog,
                            callback: function($$v) {
                              _vm.dialog = $$v
                            },
                            expression: "dialog"
                          }
                        },
                        [
                          _vm._v(" "),
                          _c(
                            "v-card",
                            [
                              _c(
                                "v-card-title",
                                {
                                  staticClass: "headline grey lighten-2",
                                  attrs: { "primary-title": "" }
                                },
                                [_vm._v("Privacy Policy")]
                              ),
                              _vm._v(" "),
                              _c("v-card-text", [
                                _vm._v(
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "primary", text: "" },
                                      on: {
                                        click: function($event) {
                                          _vm.dialog = false
                                        }
                                      }
                                    },
                                    [_vm._v("I accept")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            }),
            1
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserTabComponent.vue?vue&type=template&id=e619c5c4&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserTabComponent.vue?vue&type=template&id=e619c5c4& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { "fill-height": "", fluid: "" } },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "material-card",
                {
                  staticClass: "card-tabs",
                  attrs: { color: _vm.reactiveColor }
                },
                [
                  _c(
                    "v-flex",
                    { attrs: { slot: "header" }, slot: "header" },
                    [
                      _c(
                        "v-tabs",
                        {
                          attrs: {
                            "background-color": "transparent",
                            "slider-color": "white"
                          },
                          model: {
                            value: _vm.tabs,
                            callback: function($$v) {
                              _vm.tabs = $$v
                            },
                            expression: "tabs"
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              staticClass: "subheading font-weight-light mr-3",
                              staticStyle: { "align-self": "center" }
                            },
                            [_vm._v("Tareas:")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tab",
                            {
                              key: "list",
                              staticClass: "mr-3",
                              on: {
                                click: function($event) {
                                  return _vm.changeColor("list")
                                }
                              }
                            },
                            [
                              _c("v-icon", { staticClass: "mr-2" }, [
                                _vm._v("list")
                              ]),
                              _vm._v("Lista\n            ")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tab",
                            {
                              key: "add",
                              staticClass: "mr-3",
                              on: {
                                click: function($event) {
                                  return _vm.changeColor("add")
                                }
                              }
                            },
                            [
                              _c("v-icon", { staticClass: "mr-2" }, [
                                _vm._v("edit")
                              ]),
                              _vm._v("Añadir\n            ")
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tabs-items",
                    {
                      model: {
                        value: _vm.tabs,
                        callback: function($$v) {
                          _vm.tabs = $$v
                        },
                        expression: "tabs"
                      }
                    },
                    [
                      _c(
                        "v-tab-item",
                        [_c("keep-alive", [_c("UserListComponent")], 1)],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-tab-item", [_c("RegisterUserComponent")], 1)
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/user/UserAdd.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/user/UserAdd.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserAdd_vue_vue_type_template_id_49b81f5b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAdd.vue?vue&type=template&id=49b81f5b& */ "./resources/js/pages/user/UserAdd.vue?vue&type=template&id=49b81f5b&");
/* harmony import */ var _UserAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAdd.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/UserAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserAdd_vue_vue_type_template_id_49b81f5b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserAdd_vue_vue_type_template_id_49b81f5b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/UserAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/UserAdd.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/user/UserAdd.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/UserAdd.vue?vue&type=template&id=49b81f5b&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/user/UserAdd.vue?vue&type=template&id=49b81f5b& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAdd_vue_vue_type_template_id_49b81f5b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserAdd.vue?vue&type=template&id=49b81f5b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserAdd.vue?vue&type=template&id=49b81f5b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAdd_vue_vue_type_template_id_49b81f5b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAdd_vue_vue_type_template_id_49b81f5b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/user/UserList.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/user/UserList.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserList_vue_vue_type_template_id_ec6b6858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList.vue?vue&type=template&id=ec6b6858& */ "./resources/js/pages/user/UserList.vue?vue&type=template&id=ec6b6858&");
/* harmony import */ var _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserList_vue_vue_type_template_id_ec6b6858___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserList_vue_vue_type_template_id_ec6b6858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/UserList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/UserList.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/user/UserList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/UserList.vue?vue&type=template&id=ec6b6858&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/user/UserList.vue?vue&type=template&id=ec6b6858& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_ec6b6858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=template&id=ec6b6858& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserList.vue?vue&type=template&id=ec6b6858&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_ec6b6858___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_ec6b6858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/user/UserTabComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/user/UserTabComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserTabComponent_vue_vue_type_template_id_e619c5c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserTabComponent.vue?vue&type=template&id=e619c5c4& */ "./resources/js/pages/user/UserTabComponent.vue?vue&type=template&id=e619c5c4&");
/* harmony import */ var _UserTabComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserTabComponent.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/UserTabComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserTabComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserTabComponent_vue_vue_type_template_id_e619c5c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserTabComponent_vue_vue_type_template_id_e619c5c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/UserTabComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/UserTabComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/user/UserTabComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTabComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserTabComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserTabComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTabComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/UserTabComponent.vue?vue&type=template&id=e619c5c4&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/user/UserTabComponent.vue?vue&type=template&id=e619c5c4& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTabComponent_vue_vue_type_template_id_e619c5c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserTabComponent.vue?vue&type=template&id=e619c5c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserTabComponent.vue?vue&type=template&id=e619c5c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTabComponent_vue_vue_type_template_id_e619c5c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTabComponent_vue_vue_type_template_id_e619c5c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);