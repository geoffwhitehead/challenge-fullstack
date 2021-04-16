(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./app/App.tsx":
/*!*********************!*\
  !*** ./app/App.tsx ***!
  \*********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Nav/Nav */ "./app/components/Nav/Nav.tsx");
/* harmony import */ var _contexts_AuthenticatedContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contexts/AuthenticatedContext */ "./app/contexts/AuthenticatedContext.tsx");
/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contexts/SettingsContext */ "./app/contexts/SettingsContext.tsx");
/* harmony import */ var _pages_Home_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Home/Home */ "./app/pages/Home/Home.tsx");
/* harmony import */ var _pages_Login_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Login/Login */ "./app/pages/Login/Login.tsx");
/* harmony import */ var _pages_Users_CreateUser_CreateUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Users/CreateUser/CreateUser */ "./app/pages/Users/CreateUser/CreateUser.tsx");
/* harmony import */ var _pages_Users_Users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Users/Users */ "./app/pages/Users/Users.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/home/geoff/code/org/apps/ui/src/app/App.tsx";










const App = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_contexts_AuthenticatedContext__WEBPACK_IMPORTED_MODULE_3__["AuthenticatedUserProvider"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_4__["SettingsProvider"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
          routes: [{
            name: 'Home',
            path: '/'
          }, {
            name: 'Users',
            path: '/users'
          }]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
            path: "/",
            exact: true,
            component: _pages_Home_Home__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
            path: "/users/create",
            component: _pages_Users_CreateUser_CreateUser__WEBPACK_IMPORTED_MODULE_7__["CreateUserPage"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
            path: "/users",
            component: _pages_Users_Users__WEBPACK_IMPORTED_MODULE_8__["UsersPage"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
            path: "/login",
            component: _pages_Login_Login__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./app/components/Button/Button.tsx":
/*!******************************************!*\
  !*** ./app/components/Button/Button.tsx ***!
  \******************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _home_geoff_code_org_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /home/geoff/code/org/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/geoff/code/org/apps/ui/src/app/components/Button/Button.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_geoff_code_org_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



const Button = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./app/components/Error/Error.tsx":
/*!****************************************!*\
  !*** ./app/components/Error/Error.tsx ***!
  \****************************************/
/*! exports provided: Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/geoff/code/org/apps/ui/src/app/components/Error/Error.tsx";


const Error = ({
  message
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
    children: message || 'Something has gone wrong...'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./app/components/Form/Error.tsx":
/*!***************************************!*\
  !*** ./app/components/Form/Error.tsx ***!
  \***************************************/
/*! exports provided: Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");

const Error = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Error",
  componentId: "sc-91nrv1-0"
})(["font-size:12px;color:#cd5c5c;padding:0.2rem;"]);

/***/ }),

/***/ "./app/components/Form/Field.tsx":
/*!***************************************!*\
  !*** ./app/components/Form/Field.tsx ***!
  \***************************************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");

const Field = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Field",
  componentId: "sc-1fawnky-0"
})(["padding:0.2rem;"]);

/***/ }),

/***/ "./app/components/Form/Label.tsx":
/*!***************************************!*\
  !*** ./app/components/Form/Label.tsx ***!
  \***************************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");

const Label = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label.withConfig({
  displayName: "Label",
  componentId: "sc-1itmqq6-0"
})(["display:inline-block;width:150px;"]);

/***/ }),

/***/ "./app/components/Form/index.tsx":
/*!***************************************!*\
  !*** ./app/components/Form/index.tsx ***!
  \***************************************/
/*! exports provided: Error, Field, Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error */ "./app/components/Form/Error.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return _Error__WEBPACK_IMPORTED_MODULE_0__["Error"]; });

/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ "./app/components/Form/Field.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return _Field__WEBPACK_IMPORTED_MODULE_1__["Field"]; });

/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Label */ "./app/components/Form/Label.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_2__["Label"]; });





/***/ }),

/***/ "./app/components/Loading/Loading.tsx":
/*!********************************************!*\
  !*** ./app/components/Loading/Loading.tsx ***!
  \********************************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/geoff/code/org/apps/ui/src/app/components/Loading/Loading.tsx";


const Loading = ({
  message
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
    children: message || 'Loading...'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./app/components/Nav/Nav.tsx":
/*!************************************!*\
  !*** ./app/components/Nav/Nav.tsx ***!
  \************************************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony import */ var apps_ui_src_hooks_useLogout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apps/ui/src/hooks/useLogout */ "./hooks/useLogout.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _contexts_AuthenticatedContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/AuthenticatedContext */ "./app/contexts/AuthenticatedContext.tsx");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/Button */ "./app/components/Button/Button.tsx");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavItem */ "./app/components/Nav/NavItem.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/geoff/code/org/apps/ui/src/app/components/Nav/Nav.tsx";







const Nav = ({
  routes
}) => {
  const {
    isAuthenticated
  } = Object(_contexts_AuthenticatedContext__WEBPACK_IMPORTED_MODULE_3__["useAuthenticatedUser"])();
  const [logout] = Object(apps_ui_src_hooks_useLogout__WEBPACK_IMPORTED_MODULE_0__["useLogout"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Navbar, {
    children: [routes.map(route => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_NavItem__WEBPACK_IMPORTED_MODULE_5__["NavItem"], {
        to: route.path,
        children: route.name
      }, route.path, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(AuthContainer, {
      children: [!isAuthenticated && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_NavItem__WEBPACK_IMPORTED_MODULE_5__["NavItem"], {
        to: '/login',
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledButton, {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, undefined)
      }, '/login', false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, undefined), isAuthenticated && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledButton, {
        onClick: logout,
        children: "Logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};
const AuthContainer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Nav__AuthContainer",
  componentId: "sc-18nhyrd-0"
})(["margin-left:auto;"]);
const StyledButton = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_Button_Button__WEBPACK_IMPORTED_MODULE_4__["Button"]).withConfig({
  displayName: "Nav__StyledButton",
  componentId: "sc-18nhyrd-1"
})(["margin:0.5rem;"]);
const Navbar = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav.withConfig({
  displayName: "Nav__Navbar",
  componentId: "sc-18nhyrd-2"
})(["background:whiteSmoke;display:flex;height:60px;width:'100%';align-items:center;"]);

/***/ }),

/***/ "./app/components/Nav/NavItem.tsx":
/*!****************************************!*\
  !*** ./app/components/Nav/NavItem.tsx ***!
  \****************************************/
/*! exports provided: NavItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return NavItem; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


const NavItem = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["NavLink"]).withConfig({
  displayName: "NavItem",
  componentId: "sc-15xzy6j-0"
})(["display:flex;cursor:pointer;background:light-grey;&.active{color:black;}padding:0.4rem;"]);

/***/ }),

/***/ "./app/contexts/AuthenticatedContext.tsx":
/*!***********************************************!*\
  !*** ./app/contexts/AuthenticatedContext.tsx ***!
  \***********************************************/
/*! exports provided: AuthenticatedUserProvider, useAuthenticatedUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedUserProvider", function() { return AuthenticatedUserProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuthenticatedUser", function() { return useAuthenticatedUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/localStorage */ "./helpers/localStorage.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/geoff/code/org/apps/ui/src/app/contexts/AuthenticatedContext.tsx";



const Ctx = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
const AuthenticatedUserProvider = ({
  children
}) => {
  const [{
    isAuthenticated
  }, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    isAuthenticated: false
  });
  const setIsAuthenticated = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(isAuthenticated => setValue({
    isAuthenticated
  }), []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const token = Object(_helpers_localStorage__WEBPACK_IMPORTED_MODULE_1__["getItem"])('access_token');
    if (token !== 'null') setValue({
      isAuthenticated: true
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Ctx.Provider, {
    value: {
      isAuthenticated,
      setIsAuthenticated
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, undefined);
};
const useAuthenticatedUser = () => {
  const ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(Ctx);
  if (!ctx) throw new Error(`No Provider. Ensure that the AuthenticatedUserProvider is rendered as a parent before using this hook.`);
  const {
    isAuthenticated,
    setIsAuthenticated
  } = ctx;
  return {
    isAuthenticated,
    setIsAuthenticated
  };
};

/***/ }),

/***/ "./app/contexts/SettingsContext.tsx":
/*!******************************************!*\
  !*** ./app/contexts/SettingsContext.tsx ***!
  \******************************************/
/*! exports provided: SettingsProvider, useSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsProvider", function() { return SettingsProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSettings", function() { return useSettings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useGetSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useGetSettings */ "./hooks/useGetSettings.ts");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Error/Error */ "./app/components/Error/Error.tsx");
/* harmony import */ var _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Loading/Loading */ "./app/components/Loading/Loading.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/geoff/code/org/apps/ui/src/app/contexts/SettingsContext.tsx";





const Ctx = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
const SettingsProvider = ({
  children
}) => {
  const {
    settings,
    isLoading,
    hasErrored,
    setSettings
  } = Object(_hooks_useGetSettings__WEBPACK_IMPORTED_MODULE_1__["useGetSettings"])();

  if (hasErrored) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Error_Error__WEBPACK_IMPORTED_MODULE_2__["Error"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 12
    }, undefined);
  }

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Loading_Loading__WEBPACK_IMPORTED_MODULE_3__["Loading"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Ctx.Provider, {
    value: {
      settings,
      setSettings,
      isLoading,
      hasErrored
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};
const useSettings = () => {
  const ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(Ctx);
  if (!ctx) throw new Error(`No Provider. Ensure that the SettingsProvider is rendered as a parent before using this hook.`);
  const {
    settings,
    setSettings,
    isLoading,
    hasErrored
  } = ctx;
  return {
    settings,
    isLoading,
    hasErrored,
    setSettings
  };
};

/***/ }),

/***/ "./app/pages/Home/Home.tsx":
/*!*********************************!*\
  !*** ./app/pages/Home/Home.tsx ***!
  \*********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/geoff/code/org/apps/ui/src/app/pages/Home/Home.tsx";


const HomePage = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: "Welcome to the home page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./app/pages/Login/Login.tsx":
/*!***********************************!*\
  !*** ./app/pages/Login/Login.tsx ***!
  \***********************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _home_geoff_code_org_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /home/geoff/code/org/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var apps_ui_src_hooks_useLogin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apps/ui/src/hooks/useLogin */ "./hooks/useLogin.ts");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "../../../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "../../../node_modules/yup/es/index.js");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Button/Button */ "./app/components/Button/Button.tsx");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Form */ "./app/components/Form/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/home/geoff/code/org/apps/ui/src/app/pages/Login/Login.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_geoff_code_org_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








const LoginPage = () => {
  const [login, isLoading, hasErrored] = Object(apps_ui_src_hooks_useLogin__WEBPACK_IMPORTED_MODULE_1__["useLogin"])();
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"])({
    initialValues: {
      password: '',
      email: ''
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape({
      password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('Required').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Must contain 8 characters, one uppercase, one lowercase, one number and one special character'),
      email: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().email('Invalid email').required('Required')
    }),
    onSubmit: values => login(values)
  });
  console.log(`formik.values`, formik.values);
  console.log(`formik.errors`, formik.errors);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
    onSubmit: formik.handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_6__["Field"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        htmlFor: "email",
        children: "Email Address"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", _objectSpread({
        id: "email",
        type: "text"
      }, formik.getFieldProps('email')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), formik.touched.email && formik.errors.email ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_6__["Error"], {
        children: formik.errors.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, undefined) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_6__["Field"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        htmlFor: "password",
        children: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", _objectSpread({
        id: "password",
        type: "password"
      }, formik.getFieldProps('password')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), formik.touched.password && formik.errors.password ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_6__["Error"], {
        children: formik.errors.password
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, undefined) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), hasErrored ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_6__["Error"], {
      children: "Failed to login"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      type: "submit",
      disabled: !formik.isValid || isLoading,
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./app/pages/Users/CreateUser/CreateUser.tsx":
/*!***************************************************!*\
  !*** ./app/pages/Users/CreateUser/CreateUser.tsx ***!
  \***************************************************/
/*! exports provided: CreateUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserPage", function() { return CreateUserPage; });
/* harmony import */ var _home_geoff_code_org_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /home/geoff/code/org/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var apps_ui_src_hooks_useCreateUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apps/ui/src/hooks/useCreateUser */ "./hooks/useCreateUser.ts");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "../../../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "../../../node_modules/yup/es/index.js");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Button/Button */ "./app/components/Button/Button.tsx");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Form */ "./app/components/Form/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/home/geoff/code/org/apps/ui/src/app/pages/Users/CreateUser/CreateUser.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_geoff_code_org_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const SUPPORTED_FORMATS = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];
const FILE_SIZE = 1000000 * 3; // in bytes;

const CreateUserPage = () => {
  const [postUser, isLoading, hasErrored] = Object(apps_ui_src_hooks_useCreateUser__WEBPACK_IMPORTED_MODULE_1__["useCreateUser"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"])({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      photo: null
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_6__["object"]().shape({
      firstName: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
      photo: yup__WEBPACK_IMPORTED_MODULE_6__["mixed"]().required().test('fileSize', 'File Size is too large', value => {
        return (value === null || value === void 0 ? void 0 : value.size) && value.size <= FILE_SIZE;
      }).test('fileType', 'Unsupported File Format', value => {
        return (value === null || value === void 0 ? void 0 : value.type) && SUPPORTED_FORMATS.includes(value.type);
      }),
      lastName: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
      email: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().email('Invalid email').required('Required'),
      phone: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().matches(phoneRegExp, 'Phone number is not valid').required('Required')
    }),
    onSubmit: async values => {
      await postUser(values);
      history.push('/users');
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(StyledForm, {
    onSubmit: formik.handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
      to: "/users",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        children: "Go back"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_8__["Field"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        htmlFor: "firstName",
        children: "First Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", _objectSpread({
        id: "firstName",
        type: "text"
      }, formik.getFieldProps('firstName')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined), formik.touched.firstName && formik.errors.firstName ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_8__["Error"], {
        children: formik.errors.firstName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }, undefined) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_8__["Field"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        htmlFor: "lastName",
        children: "Last Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", _objectSpread({
        id: "lastName",
        type: "text"
      }, formik.getFieldProps('lastName')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, undefined), formik.touched.lastName && formik.errors.lastName ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_8__["Error"], {
        children: formik.errors.lastName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }, undefined) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_8__["Field"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        htmlFor: "phone",
        children: "Phone"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", _objectSpread({
        id: "phone",
        type: "text"
      }, formik.getFieldProps('phone')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined), formik.touched.phone && formik.errors.phone ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_8__["Error"], {
        children: formik.errors.phone
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }, undefined) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_8__["Field"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        htmlFor: "email",
        children: "Email Address"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", _objectSpread({
        id: "email",
        type: "text"
      }, formik.getFieldProps('email')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined), formik.touched.email && formik.errors.email ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_8__["Error"], {
        children: formik.errors.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }, undefined) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_8__["Field"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        htmlFor: "photo",
        children: "Photo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
        id: "photo",
        type: "file",
        accept: "image/*",
        name: "photo",
        onChange: e => {
          var _e$target, _e$target$files;

          (e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : (_e$target$files = _e$target.files) === null || _e$target$files === void 0 ? void 0 : _e$target$files[0]) && formik.setFieldValue('photo', e.target.files[0]);
          formik.setFieldTouched('photo');
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, undefined), formik.touched.photo && formik.errors.photo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_8__["Error"], {
        children: formik.errors.photo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }, undefined) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, undefined), hasErrored ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_8__["Error"], {
      children: "Failed to upload"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      type: "submit",
      disabled: !(formik.isValid && formik.dirty) || isLoading,
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, undefined);
};
const StyledForm = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].form.withConfig({
  displayName: "CreateUser__StyledForm",
  componentId: "nzu7c6-0"
})(["padding:0.5rem 0rem;"]);

/***/ }),

/***/ "./app/pages/Users/UserList/UserList.tsx":
/*!***********************************************!*\
  !*** ./app/pages/Users/UserList/UserList.tsx ***!
  \***********************************************/
/*! exports provided: UserList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserList", function() { return UserList; });
/* harmony import */ var _home_geoff_code_org_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /home/geoff/code/org/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var apps_ui_src_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apps/ui/src/config */ "./config.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-table */ "../../../node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Button/Button */ "./app/components/Button/Button.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/home/geoff/code/org/apps/ui/src/app/pages/Users/UserList/UserList.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_geoff_code_org_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







const UserList = ({
  users
}) => {
  const columns = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => [{
    Header: 'First Name',
    accessor: 'firstName'
  }, {
    Header: 'Last Name',
    accessor: 'lastName'
  }, {
    Header: 'Email',
    accessor: 'email'
  }, {
    Header: 'Phone',
    accessor: 'phone'
  }, {
    Header: 'Actions',
    Cell: a => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        onClick: () => window.open(`${apps_ui_src_config__WEBPACK_IMPORTED_MODULE_1__["config"].baseUrl}/users/photo/${a.row.original.photo}`, '_blank'),
        children: "View photo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }, undefined);
    }
  }], []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = Object(react_table__WEBPACK_IMPORTED_MODULE_3__["useTable"])({
    columns,
    data: users
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledTable, _objectSpread(_objectSpread({}, getTableProps()), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("thead", {
      children: headerGroups.map(headerGroup => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
        children: headerGroup.headers.map(column => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledCell, _objectSpread(_objectSpread({}, column.getHeaderProps()), {}, {
          children: column.render('Header')
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 15
        }, undefined))
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
      children: rows.map(row => {
        prepareRow(row);
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledRow, _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
          children: row.cells.map(cell => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledCell, _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {
              children: cell.render('Cell')
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 19
            }, undefined);
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, undefined);
      })
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, undefined);
};
const StyledTable = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].table.withConfig({
  displayName: "UserList__StyledTable",
  componentId: "fuz3hb-0"
})(["border-spacing:0;border:1px solid black;"]);
const StyledCell = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].td.withConfig({
  displayName: "UserList__StyledCell",
  componentId: "fuz3hb-1"
})(["margin:0;padding:0.5rem;border-bottom:1px solid black;border-right:1px solid black;:last-child{border-right:0;}"]);
const StyledRow = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].tr.withConfig({
  displayName: "UserList__StyledRow",
  componentId: "fuz3hb-2"
})([":last-child{td{border-bottom:0;}}"]);

/***/ }),

/***/ "./app/pages/Users/Users.tsx":
/*!***********************************!*\
  !*** ./app/pages/Users/Users.tsx ***!
  \***********************************/
/*! exports provided: UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return UsersPage; });
/* harmony import */ var _home_geoff_code_org_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /home/geoff/code/org/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_geoff_code_org_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /home/geoff/code/org/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var apps_ui_src_hooks_useUpdateSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apps/ui/src/hooks/useUpdateSettings */ "./hooks/useUpdateSettings.ts");
/* harmony import */ var apps_ui_src_hooks_useUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apps/ui/src/hooks/useUsers */ "./hooks/useUsers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Button/Button */ "./app/components/Button/Button.tsx");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Error/Error */ "./app/components/Error/Error.tsx");
/* harmony import */ var _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Loading/Loading */ "./app/components/Loading/Loading.tsx");
/* harmony import */ var _contexts_AuthenticatedContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../contexts/AuthenticatedContext */ "./app/contexts/AuthenticatedContext.tsx");
/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../contexts/SettingsContext */ "./app/contexts/SettingsContext.tsx");
/* harmony import */ var _UserList_UserList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./UserList/UserList */ "./app/pages/Users/UserList/UserList.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);



let _jsxFileName = "/home/geoff/code/org/apps/ui/src/app/pages/Users/Users.tsx",
    _ = t => t,
    _t;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_geoff_code_org_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













const UsersPage = () => {
  var _settings$users;

  const {
    users,
    isLoading,
    hasErrored
  } = Object(apps_ui_src_hooks_useUsers__WEBPACK_IMPORTED_MODULE_3__["useUsers"])();
  const {
    isAuthenticated
  } = Object(_contexts_AuthenticatedContext__WEBPACK_IMPORTED_MODULE_10__["useAuthenticatedUser"])();
  const {
    settings
  } = Object(_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_11__["useSettings"])();

  const _useUpdateSettings = Object(apps_ui_src_hooks_useUpdateSettings__WEBPACK_IMPORTED_MODULE_2__["useUpdateSettings"])(),
        {
    updateSettings
  } = _useUpdateSettings,
        updateSettingsHook = Object(_home_geoff_code_org_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_useUpdateSettings, ["updateSettings"]);

  if (hasErrored || updateSettingsHook.hasErrored) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_components_Error_Error__WEBPACK_IMPORTED_MODULE_8__["Error"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 12
    }, undefined);
  }

  if (isLoading || updateSettingsHook.isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_components_Loading_Loading__WEBPACK_IMPORTED_MODULE_9__["Loading"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }, undefined);
  }

  const isUsersGridEnabled = settings === null || settings === void 0 ? void 0 : (_settings$users = settings.users) === null || _settings$users === void 0 ? void 0 : _settings$users.isActive;

  const handleUserGridToggle = () => updateSettings(_objectSpread(_objectSpread({}, settings), {}, {
    users: _objectSpread(_objectSpread({}, settings.users), {}, {
      isActive: !settings.users.isActive
    })
  }));

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(Controls, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        to: "/users/create",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          children: "Create user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        disabled: !isAuthenticated,
        onClick: handleUserGridToggle,
        children: `${isUsersGridEnabled ? 'Disable' : 'Enable'} users grid`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), isUsersGridEnabled ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_UserList_UserList__WEBPACK_IMPORTED_MODULE_12__["UserList"], {
      users: users
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("p", {
      children: "Users grid is disabled"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);
};
const Controls = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_t || (_t = _`
  padding: 1rem 0rem;
`));

/***/ }),

/***/ "./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const config = {
  baseUrl: Object({"NODE_ENV":"development","NX_WORKSPACE_ROOT":"/home/geoff/code/org","NX_INVOKED_BY_RUNNER":"true","NX_TASK_HASH":"64676d6a7e9fc0808fdfe1be8ab87de0586f5c56a64f9b300b7f921748347137","NX_CLI_SET":"true","NX_TERMINAL_OUTPUT_PATH":"/home/geoff/code/org/node_modules/.cache/nx/terminalOutputs/64676d6a7e9fc0808fdfe1be8ab87de0586f5c56a64f9b300b7f921748347137","NX_FORWARD_OUTPUT":"true"}).HOST || 'http://localhost:3333',
  environment: "development"
};

/***/ }),

/***/ "./helpers/localStorage.ts":
/*!*********************************!*\
  !*** ./helpers/localStorage.ts ***!
  \*********************************/
/*! exports provided: getItem, setItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return setItem; });
const getItem = key => localStorage.getItem(key);
const setItem = (key, value) => localStorage.setItem(key, value);

/***/ }),

/***/ "./hooks/useCreateUser.ts":
/*!********************************!*\
  !*** ./hooks/useCreateUser.ts ***!
  \********************************/
/*! exports provided: useCreateUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateUser", function() { return useCreateUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.ts");


const useCreateUser = () => {
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [hasErrored, setHasErrored] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const postUser = async data => {
    setIsLoading(true);
    setHasErrored(false);
    let formData = new FormData();
    formData.append('photo', data.photo, data.photo.name);
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('phone', data.phone);
    formData.append('email', data.email);
    const response = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__["config"].baseUrl}/users`, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      setHasErrored(true);
    }

    setIsLoading(false);
  };

  return [postUser, isLoading, hasErrored];
};

/***/ }),

/***/ "./hooks/useGetSettings.ts":
/*!*********************************!*\
  !*** ./hooks/useGetSettings.ts ***!
  \*********************************/
/*! exports provided: useGetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetSettings", function() { return useGetSettings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.ts");


const useGetSettings = () => {
  const [settings, setSettings] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [hasErrored, setHasErrored] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__["config"].baseUrl}/settings`);
      const result = await response.json();

      if (response.ok) {
        setSettings(result);
      } else {
        setHasErrored(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [setSettings, setIsLoading, setHasErrored]);
  return {
    settings,
    setSettings,
    isLoading,
    hasErrored
  };
};

/***/ }),

/***/ "./hooks/useLogin.ts":
/*!***************************!*\
  !*** ./hooks/useLogin.ts ***!
  \***************************/
/*! exports provided: useLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogin", function() { return useLogin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_contexts_AuthenticatedContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/contexts/AuthenticatedContext */ "./app/contexts/AuthenticatedContext.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.ts");
/* harmony import */ var _helpers_localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/localStorage */ "./helpers/localStorage.ts");





const useLogin = () => {
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [hasErrored, setHasErrored] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    setIsAuthenticated
  } = Object(_app_contexts_AuthenticatedContext__WEBPACK_IMPORTED_MODULE_2__["useAuthenticatedUser"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();

  const login = async data => {
    setIsLoading(true);
    setHasErrored(false);
    const response = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseUrl}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const body = await response.json();

    if (!response.ok) {
      setHasErrored(true);
    } else {
      Object(_helpers_localStorage__WEBPACK_IMPORTED_MODULE_4__["setItem"])('access_token', body.access_token);
      setIsAuthenticated(true);
      history.push('/');
    }

    setIsLoading(false);
  };

  return [login, isLoading, hasErrored];
};

/***/ }),

/***/ "./hooks/useLogout.ts":
/*!****************************!*\
  !*** ./hooks/useLogout.ts ***!
  \****************************/
/*! exports provided: useLogout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogout", function() { return useLogout; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_contexts_AuthenticatedContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/contexts/AuthenticatedContext */ "./app/contexts/AuthenticatedContext.tsx");
/* harmony import */ var _helpers_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/localStorage */ "./helpers/localStorage.ts");



const useLogout = () => {
  const {
    setIsAuthenticated
  } = Object(_app_contexts_AuthenticatedContext__WEBPACK_IMPORTED_MODULE_1__["useAuthenticatedUser"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["useHistory"])();

  const logout = () => {
    Object(_helpers_localStorage__WEBPACK_IMPORTED_MODULE_2__["setItem"])('access_token', null);
    setIsAuthenticated(false);
    history.push('/');
  };

  return [logout];
};

/***/ }),

/***/ "./hooks/useUpdateSettings.ts":
/*!************************************!*\
  !*** ./hooks/useUpdateSettings.ts ***!
  \************************************/
/*! exports provided: useUpdateSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateSettings", function() { return useUpdateSettings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/contexts/SettingsContext */ "./app/contexts/SettingsContext.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.ts");
/* harmony import */ var _helpers_localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/localStorage */ "./helpers/localStorage.ts");





const useUpdateSettings = () => {
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [hasErrored, setHasErrored] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    setSettings
  } = Object(_app_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_2__["useSettings"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();

  const updateSettings = async data => {
    setIsLoading(true);
    setHasErrored(false);
    const response = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseUrl}/settings`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Object(_helpers_localStorage__WEBPACK_IMPORTED_MODULE_4__["getItem"])('access_token')
      }
    });
    console.log(`response`, response);

    if (response.status === 401) {
      // token expired - redirect to login - refresh / sessions token not implemented
      history.push('/login');
    }

    if (!response.ok) {
      setHasErrored(true);
    } else {
      const updatedSettings = await response.json();
      console.log(`updatedSettings`, updatedSettings); // update local cache of settings with settings returned from api

      setSettings(updatedSettings);
    }

    setIsLoading(false);
  };

  return {
    updateSettings,
    isLoading,
    hasErrored
  };
};

/***/ }),

/***/ "./hooks/useUsers.ts":
/*!***************************!*\
  !*** ./hooks/useUsers.ts ***!
  \***************************/
/*! exports provided: useUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUsers", function() { return useUsers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.ts");


const useUsers = () => {
  const [users, setUsers] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [hasErrored, setHasErrored] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__["config"].baseUrl}/users`);
      const result = await response.json();

      if (response.ok) {
        setUsers(result);
      } else {
        setHasErrored(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [setUsers, setIsLoading]);
  return {
    users,
    isLoading,
    hasErrored
  };
};

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/App */ "./app/App.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/geoff/code/org/apps/ui/src/main.tsx";




react_dom__WEBPACK_IMPORTED_MODULE_1__["render"]( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["StrictMode"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_app_App__WEBPACK_IMPORTED_MODULE_2__["App"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/geoff/code/org/apps/ui/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map