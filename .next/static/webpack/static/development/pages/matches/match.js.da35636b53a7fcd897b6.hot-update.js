webpackHotUpdate("static\\development\\pages\\matches\\match.js",{

/***/ "./utils/EstimateBetValue.js":
/*!***********************************!*\
  !*** ./utils/EstimateBetValue.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TokenFromWei__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TokenFromWei */ "./utils/TokenFromWei.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var _redux_match_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/match/actions */ "./redux/match/actions.js");





var EstimateBetValue = function EstimateBetValue(tokensToBet, prices) {
  var dispatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var sum = tokensToBet.reduce(function (sum, token) {
    return sum + parseFloat(big_js__WEBPACK_IMPORTED_MODULE_0___default()(Object(_TokenFromWei__WEBPACK_IMPORTED_MODULE_1__["default"])(token.balance)).mul(token.price.USD).toFixed(2));
  }, 0);
  if (sum === '00.00') sum = '0';
  if (dispatch) _redux_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_redux_match_actions__WEBPACK_IMPORTED_MODULE_3__["updateEstimateBet"])(sum));
  return sum;
};

/* harmony default export */ __webpack_exports__["default"] = (EstimateBetValue);

/***/ })

})
//# sourceMappingURL=match.js.da35636b53a7fcd897b6.hot-update.js.map