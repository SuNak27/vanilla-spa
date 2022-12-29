/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/app.js":
/*!***************************!*\
  !*** ./src/client/app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_Layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/Layout.js */ \"./src/client/component/Layout.js\");\n/* harmony import */ var _component_Navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/Navbar.js */ \"./src/client/component/Navbar.js\");\n/* harmony import */ var _react_React_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./react/React.js */ \"./src/client/react/React.js\");\n/* harmony import */ var _router_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router/index.js */ \"./src/client/router/index.js\");\n/* harmony import */ var _view_NotFound_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/NotFound.js */ \"./src/client/view/NotFound.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction App() {\r\n  const [path, setPath] = _react_React_js__WEBPACK_IMPORTED_MODULE_2__.React.useState(window.location.pathname);\r\n  const navbar = (0,_component_Navbar_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n    active: path,\r\n    onClick: (e) => {\r\n      e.preventDefault();\r\n      const url = new URL(e.target.href);\r\n      history.pushState({}, \"\", url.pathname);\r\n      setPath(url.pathname);\r\n    },\r\n  })\r\n\r\n  const NotFoundPage = (0,_view_NotFound_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n  const isFound = _router_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].some((route) => route.path === path)\r\n\r\n  const layout = (0,_component_Layout_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    navbar: navbar,\r\n    children: isFound ? Content({ currentPath: path }) : NotFoundPage,\r\n  });\r\n\r\n  return layout;\r\n}\r\n\r\nfunction Route(props) {\r\n  const component = props.component()\r\n  const empty = document.createElement(\"div\")\r\n\r\n  if (props.path === props.currentPath) {\r\n    return component\r\n  } else {\r\n    return empty\r\n  }\r\n}\r\n\r\nfunction Content(props) {\r\n  const div = document.createElement(\"div\");\r\n  const children = _router_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map((route) => {\r\n    return Route({\r\n      path: route.path,\r\n      currentPath: props.currentPath,\r\n      component: route.component,\r\n    })\r\n  })\r\n\r\n  div.append(...children);\r\n\r\n  return div;\r\n}\r\n\r\nconst app = document.getElementById(\"app\");\r\n_react_React_js__WEBPACK_IMPORTED_MODULE_2__.ReactDOM.render(app, App);\n\n//# sourceURL=webpack://vanilla-spa-webpack/./src/client/app.js?");

/***/ }),

/***/ "./src/client/component/ButtonCounter.js":
/*!***********************************************!*\
  !*** ./src/client/component/ButtonCounter.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ButtonCounter = (props) => {\r\n  const div = document.createElement(\"div\");\r\n  div.classList.add(\"button-counter\");\r\n\r\n  const addButton = document.createElement(\"button\");\r\n  addButton.innerText = \"+\";\r\n  addButton.onclick = () => {\r\n    props.onAdd();\r\n  };\r\n\r\n  const subButton = document.createElement(\"button\");\r\n  subButton.innerText = \"-\";\r\n  subButton.disabled = props.count === 0;\r\n  subButton.onclick = () => {\r\n    props.onSub();\r\n  };\r\n\r\n  const resetButton = document.createElement(\"button\");\r\n  resetButton.innerText = \"Reset\";\r\n  resetButton.disabled = props.count === 0;\r\n  resetButton.onclick = () => {\r\n    props.onReset();\r\n  };\r\n\r\n\r\n  div.appendChild(addButton);\r\n  div.appendChild(subButton);\r\n  div.appendChild(resetButton);\r\n\r\n  return div;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonCounter);\n\n//# sourceURL=webpack://vanilla-spa-webpack/./src/client/component/ButtonCounter.js?");

/***/ }),

/***/ "./src/client/component/FormSearch.js":
/*!********************************************!*\
  !*** ./src/client/component/FormSearch.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst FormSearch = (props) => {\r\n  const form = document.createElement(\"form\");\r\n  form.classList.add(\"form-search\");\r\n  form.onsubmit = (e) => {\r\n    e.preventDefault();\r\n    props.onSubmit();\r\n  };\r\n\r\n  const input = document.createElement(\"input\");\r\n  input.type = \"text\";\r\n  input.id = \"searchInput\";\r\n  input.placeholder = \"Search\";\r\n  input.value = props.value;\r\n  input.oninput = (e) => {\r\n    props.onInput(e);\r\n  };\r\n\r\n  const button = document.createElement(\"button\");\r\n  button.type = \"submit\";\r\n  button.innerText = \"Search\";\r\n\r\n  form.appendChild(input);\r\n  form.appendChild(button);\r\n\r\n  return form;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormSearch);\n\n//# sourceURL=webpack://vanilla-spa-webpack/./src/client/component/FormSearch.js?");

/***/ }),

/***/ "./src/client/component/InputText.js":
/*!*******************************************!*\
  !*** ./src/client/component/InputText.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst InputText = (props) => {\r\n  const input = document.createElement('input');\r\n  input.type = props.type;\r\n  input.placeholder = props.placeholder;\r\n  input.value = props.value;\r\n  input.id = props.id;\r\n  input.oninput = (e) => {\r\n    props.onInput(e);\r\n  };\r\n\r\n  return input;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputText);\n\n//# sourceURL=webpack://vanilla-spa-webpack/./src/client/component/InputText.js?");

/***/ }),

/***/ "./src/client/component/Layout.js":
/*!****************************************!*\
  !*** ./src/client/component/Layout.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Layout = (props) => {\r\n  const layout = document.createElement(\"div\");\r\n  layout.classList.add(\"layout\");\r\n\r\n  const container = document.createElement(\"div\");\r\n  container.classList.add(\"container\");\r\n\r\n  container.appendChild(props.children);\r\n\r\n  layout.append(props.navbar, container);\r\n\r\n  return layout;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n//# sourceURL=webpack://vanilla-spa-webpack/./src/client/component/Layout.js?");

/***/ }),

/***/ "./src/client/component/Link.js":
/*!**************************************!*\
  !*** ./src/client/component/Link.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Link = (props) => {\r\n  const a = document.createElement('a');\r\n  a.href = props.href;\r\n  a.innerText = props.text;\r\n  a.onclick = (e) => {\r\n    props.onClick(e);\r\n  };\r\n\r\n  if (props.active === props.href) {\r\n    a.classList.add('active');\r\n  }\r\n\r\n  return a;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);\n\n//# sourceURL=webpack://vanilla-spa-webpack/./src/client/component/Link.js?");

/***/ }),

/***/ "./src/client/component/Navbar.js":
/*!****************************************!*\
  !*** ./src/client/component/Navbar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _router_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router/index.js */ \"./src/client/router/index.js\");\n/* harmony import */ var _Link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link.js */ \"./src/client/component/Link.js\");\n\r\n\r\n\r\nconst Navbar = (props) => {\r\n  const navbar = document.createElement(\"nav\");\r\n  navbar.classList.add(\"navbar\");\r\n\r\n  const navbarBrand = document.createElement(\"div\");\r\n  navbarBrand.classList.add(\"navbar-link\");\r\n\r\n  _router_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((route) => {\r\n    const navbarItem = (0,_Link_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n      href: route.path,\r\n      text: route.label,\r\n      active: props.active,\r\n      onClick: (e) => {\r\n        props.onClick(e);\r\n      },\r\n    });\r\n    navbarBrand.appendChild(navbarItem);\r\n  });\r\n\r\n  navbar.appendChild(navbarBrand);\r\n\r\n  return navbar;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n\n//# sourceURL=webpack://vanilla-spa-webpack/./src/client/component/Navbar.js?");

/***/ }),

/***/ "./src/client/react/React.js":
/*!***********************************!*\
  !*** ./src/client/react/React.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"React\": () => (/* binding */ React),\n/* harmony export */   \"ReactDOM\": () => (/* binding */ ReactDOM)\n/* harmony export */ });\nconst ReactDOM = (function () {\r\n  let _container;\r\n  let _Component;\r\n\r\n  return {\r\n    update() {\r\n      this.render(_container, _Component);\r\n    },\r\n    render(container, Component) {\r\n      _container = container;\r\n      _Component = Component;\r\n\r\n      const focusedElementId = document.activeElement.id;\r\n      const focusedElementSelectionStart =\r\n        document.activeElement.selectionStart;\r\n      const focusedElementSelectionEnd = document.activeElement.selectionEnd;\r\n\r\n      const componentDOM = React.render(Component);\r\n      container.replaceChildren();\r\n      container.appendChild(componentDOM);\r\n\r\n      if (focusedElementId) {\r\n        const focusedElement = document.getElementById(focusedElementId);\r\n        focusedElement.focus();\r\n        focusedElement.selectionStart = focusedElementSelectionStart;\r\n        focusedElement.selectionEnd = focusedElementSelectionEnd;\r\n      }\r\n    },\r\n  };\r\n})();\r\n\r\nconst React = (function () {\r\n  let hooks = [];\r\n  let currentIndex = 0;\r\n\r\n  return {\r\n    render(Component) {\r\n      currentIndex = 0;\r\n\r\n      const Comp = Component();\r\n      return Comp;\r\n    },\r\n    useState(initialValue) {\r\n      const useStateIndex = currentIndex;\r\n      currentIndex++;\r\n\r\n      hooks[useStateIndex] = hooks[useStateIndex] ?? initialValue;\r\n\r\n      const setState = (newVal) => {\r\n        const newState =\r\n          typeof newVal === \"function\" ? newVal(hooks[useStateIndex]) : newVal;\r\n        hooks[useStateIndex] = newState;\r\n        ReactDOM.update();\r\n      };\r\n\r\n      return [hooks[useStateIndex], setState];\r\n    },\r\n    useReducer(reducer, initialState) {\r\n      const useReducerIndex = currentIndex;\r\n      currentIndex++;\r\n\r\n      hooks[useReducerIndex] = hooks[useReducerIndex] ?? initialState;\r\n\r\n      const dispatch = (action) => {\r\n        const newState = reducer(hooks[useReducerIndex], action);\r\n        hooks[useReducerIndex] = newState;\r\n        ReactDOM.update();\r\n      };\r\n\r\n      return [hooks[useReducerIndex], dispatch];\r\n    },\r\n    useEffect(callback, depArray) {\r\n      const hasNoDeps = !depArray;\r\n      const deps = hooks[currentIndex];\r\n      const hasChangedDeps = deps\r\n        ? !depArray.every((el, i) => el === deps[i])\r\n        : true;\r\n      if (hasNoDeps || hasChangedDeps) {\r\n        hooks[currentIndex] = depArray;\r\n        callback();\r\n      }\r\n      currentIndex++;\r\n    },\r\n  };\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://vanilla-spa-webpack/./src/client/react/React.js?");

/***/ }),

/***/ "./src/client/router/index.js":
/*!************************************!*\
  !*** ./src/client/router/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _view_Input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/Input.js */ \"./src/client/view/Input.js\");\n/* harmony import */ var _view_Counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/Counter.js */ \"./src/client/view/Counter.js\");\n/* harmony import */ var _view_FetchData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/FetchData.js */ \"./src/client/view/FetchData.js\");\n\r\n\r\n\r\n\r\nconst routes = [\r\n  {\r\n    path: '/',\r\n    label: 'Counter',\r\n    component: _view_Counter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n  },\r\n  {\r\n    path: '/input',\r\n    label: 'Input',\r\n    component: _view_Input_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n  },\r\n  {\r\n    path: '/fetch',\r\n    label: 'Fetch',\r\n    component: _view_FetchData_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n  },\r\n]\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://vanilla-spa-webpack/./src/client/router/index.js?");

/***/ }),

/***/ "./src/client/view/Counter.js":
/*!************************************!*\
  !*** ./src/client/view/Counter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _component_ButtonCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/ButtonCounter.js */ \"./src/client/component/ButtonCounter.js\");\n/* harmony import */ var _react_React_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../react/React.js */ \"./src/client/react/React.js\");\n\r\n\r\n\r\nconst Counter = () => {\r\n  const [count, setCount] = _react_React_js__WEBPACK_IMPORTED_MODULE_1__.React.useState(0);\r\n  const div = document.createElement(\"div\");\r\n  div.classList.add(\"home\");\r\n\r\n  const h1 = document.createElement(\"h1\");\r\n  h1.innerText = \"Counter\";\r\n\r\n  const h2 = document.createElement(\"h2\");\r\n  h2.innerText = count;\r\n\r\n  const button = (0,_component_ButtonCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    count: count,\r\n    onAdd: () => {\r\n      setCount(count + 1);\r\n    },\r\n    onSub: () => {\r\n      setCount(count - 1);\r\n    },\r\n    onReset: () => {\r\n      setCount(0);\r\n    }\r\n  })\r\n\r\n\r\n\r\n  div.appendChild(h1);\r\n  div.appendChild(h2);\r\n  div.appendChild(button);\r\n\r\n  return div;\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);\n\n//# sourceURL=webpack://vanilla-spa-webpack/./src/client/view/Counter.js?");

/***/ }),

/***/ "./src/client/view/FetchData.js":
/*!**************************************!*\
  !*** ./src/client/view/FetchData.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _component_FormSearch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/FormSearch.js */ \"./src/client/component/FormSearch.js\");\n/* harmony import */ var _react_React_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../react/React.js */ \"./src/client/react/React.js\");\n\r\n\r\n\r\nconst FetchData = () => {\r\n  const [data, setData] = _react_React_js__WEBPACK_IMPORTED_MODULE_1__.React.useState([]);\r\n  const [loading, setLoading] = _react_React_js__WEBPACK_IMPORTED_MODULE_1__.React.useState(true);\r\n  const [inputValue, setInputValue] = _react_React_js__WEBPACK_IMPORTED_MODULE_1__.React.useState(\"\");\r\n  const [error, setError] = _react_React_js__WEBPACK_IMPORTED_MODULE_1__.React.useState(null);\r\n\r\n  _react_React_js__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {\r\n    const fetchData = () => {\r\n      try {\r\n        fetch(\"https://dummyjson.com/products/search?q=\" + inputValue)\r\n          .then((response) => response.json())\r\n          .then((json) => setData(json.products))\r\n          .catch((error) => setError(error.message));\r\n      } catch (error) {\r\n        setError(error);\r\n      } finally {\r\n        setLoading(false);\r\n      }\r\n    };\r\n\r\n    if (loading) { fetchData() };\r\n  }, [loading, inputValue]);\r\n\r\n  const handleChange = (e) => {\r\n    clearTimeout(window.debounce);\r\n    window.debounce = setTimeout(() => {\r\n      setInputValue(e.target.value);\r\n      setLoading(true);\r\n    }, 500);\r\n  };\r\n\r\n  const handleSubmit = () => {\r\n    setLoading(true);\r\n  };\r\n\r\n  const div = document.createElement(\"div\");\r\n  div.classList.add(\"home\");\r\n\r\n  const h1 = document.createElement(\"h1\");\r\n  h1.innerText = \"Fetch Data\";\r\n\r\n  const form = (0,_component_FormSearch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    value: inputValue,\r\n    onInput: handleChange,\r\n    onSubmit: handleSubmit,\r\n  })\r\n\r\n  const p = document.createElement(\"p\");\r\n  p.innerText = inputValue === \"\" ? \"\" : \"Search: \" + inputValue;\r\n\r\n  const ul = document.createElement(\"ul\");\r\n\r\n\r\n  if (loading) {\r\n    ul.innerText = \"Loading...\";\r\n  } else if (error) {\r\n    const li = document.createElement(\"li\");\r\n    li.innerText = error;\r\n    ul.appendChild(li);\r\n  } else {\r\n    data.length === 0 ? ul.innerText = \"No data\" :\r\n      data.forEach((item) => {\r\n        const li = document.createElement(\"li\");\r\n        li.innerText = item.title;\r\n        ul.appendChild(li);\r\n      });\r\n  }\r\n\r\n  div.appendChild(h1);\r\n  div.appendChild(form);\r\n  div.appendChild(p);\r\n  div.appendChild(ul);\r\n\r\n  return div;\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FetchData);\n\n//# sourceURL=webpack://vanilla-spa-webpack/./src/client/view/FetchData.js?");

/***/ }),

/***/ "./src/client/view/Input.js":
/*!**********************************!*\
  !*** ./src/client/view/Input.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _component_InputText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/InputText.js */ \"./src/client/component/InputText.js\");\n/* harmony import */ var _react_React_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../react/React.js */ \"./src/client/react/React.js\");\n\r\n\r\n\r\nconst Input = () => {\r\n  const [input, setInput] = _react_React_js__WEBPACK_IMPORTED_MODULE_1__.React.useState(\"\");\r\n  const div = document.createElement(\"div\");\r\n\r\n  const inputText = (0,_component_InputText_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    id: \"inputText\",\r\n    type: \"text\",\r\n    placeholder: \"Input Text\",\r\n    value: input,\r\n    onInput: (e) => {\r\n      setInput(e.target.value);\r\n    },\r\n  })\r\n\r\n  const h1 = document.createElement(\"h1\");\r\n  h1.innerText = \"Input\";\r\n\r\n  const p = document.createElement(\"p\");\r\n  p.innerText = input;\r\n\r\n  div.appendChild(h1);\r\n  div.appendChild(inputText);\r\n  div.appendChild(p);\r\n\r\n  return div;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);\n\n//# sourceURL=webpack://vanilla-spa-webpack/./src/client/view/Input.js?");

/***/ }),

/***/ "./src/client/view/NotFound.js":
/*!*************************************!*\
  !*** ./src/client/view/NotFound.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst NotFound = () => {\r\n  const h1 = document.createElement(\"h1\");\r\n  h1.innerText = \"404 Not Found\";\r\n\r\n  return h1;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);\n\n//# sourceURL=webpack://vanilla-spa-webpack/./src/client/view/NotFound.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/app.js");
/******/ 	
/******/ })()
;