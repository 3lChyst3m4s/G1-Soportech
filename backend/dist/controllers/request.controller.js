"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRequest = exports.getRequestsFiltered = exports.getRequests = exports.getRequest = exports.getCountRequests = exports.deleteRequest = exports.createRequest = void 0;
var _user = _interopRequireDefault(require("../models/user.model"));
var _typeRequest = _interopRequireDefault(require("../models/typeRequest.model"));
var _categoryRequest = _interopRequireDefault(require("../models/categoryRequest.model"));
var _stateRequest = _interopRequireDefault(require("../models/stateRequest.model"));
var _connection = _interopRequireDefault(require("../models/connection.model"));
var _request = _interopRequireDefault(require("../models/request.model"));
var _moment = _interopRequireDefault(require("moment"));
var _ref, _ref2, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var createRequest = function createRequest(_x, _x2) {
  return (_ref = _ref || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, title, typeId, categoryId, description, endTime, classroom, stateId, conditionId, userId, formattedEndTime, connection, request;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, title = _req$body.title, typeId = _req$body.typeId, categoryId = _req$body.categoryId, description = _req$body.description, endTime = _req$body.endTime, classroom = _req$body.classroom, stateId = _req$body.stateId, conditionId = _req$body.conditionId;
          userId = req.user.userId;
          formattedEndTime = (0, _moment["default"])(endTime, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
          _context.prev = 3;
          _context.next = 6;
          return _connection["default"].findOne({
            where: {
              typeId: typeId,
              categoryId: categoryId
            }
          });
        case 6:
          connection = _context.sent;
          _context.next = 9;
          return _request["default"].create({
            clientId: userId,
            connectionId: connection.dataValues.connectionId,
            stateId: stateId,
            title: title,
            description: description,
            endTime: formattedEndTime,
            classroom: classroom,
            conditionId: conditionId
          });
        case 9:
          request = _context.sent;
          res.status(201).json(request);
          _context.next = 16;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](3);
          res.status(500).json({
            message: _context.t0.message
          });
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 13]]);
  }))).apply(this, arguments);
};
exports.createRequest = createRequest;
var processRequests = function processRequests(_x3) {
  return (_ref2 = _ref2 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(requests) {
    var _ref3;
    var formattedRequests;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Promise.all(requests.map(function (_x4) {
            return (_ref3 = _ref3 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
              var stateId, stateRequest;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    stateId = request.dataValues.stateId;
                    _context2.next = 3;
                    return _stateRequest["default"].findOne({
                      where: {
                        stateId: stateId
                      }
                    });
                  case 3:
                    stateRequest = _context2.sent;
                    return _context2.abrupt("return", _objectSpread(_objectSpread({}, request.dataValues), {}, {
                      stateRequest: stateRequest.dataValues.name,
                      endTime: (0, _moment["default"])(request.dataValues.endTime).format('DD/MM/YYYY')
                    }));
                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }))).apply(this, arguments);
          }));
        case 2:
          formattedRequests = _context3.sent;
          return _context3.abrupt("return", formattedRequests);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }))).apply(this, arguments);
};
var getRequests = function getRequests(_x5, _x6) {
  return (_ref4 = _ref4 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var userId, id, userFound, roleId, condition, requests, formattedRequests;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          userId = req.user.userId;
          id = req.params.id;
          _context4.prev = 2;
          _context4.next = 5;
          return _user["default"].findOne({
            where: {
              userId: userId
            }
          });
        case 5:
          userFound = _context4.sent;
          roleId = userFound.roleId;
          condition = {
            conditionId: id
          };
          if (roleId === 1) {
            condition.clientId = userId;
          }
          _context4.next = 11;
          return _request["default"].findAll({
            where: condition
          });
        case 11:
          requests = _context4.sent;
          _context4.next = 14;
          return processRequests(requests);
        case 14:
          formattedRequests = _context4.sent;
          res.status(200).json(formattedRequests);
          _context4.next = 21;
          break;
        case 18:
          _context4.prev = 18;
          _context4.t0 = _context4["catch"](2);
          res.status(500).json({
            message: _context4.t0.message
          });
        case 21:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 18]]);
  }))).apply(this, arguments);
};
exports.getRequests = getRequests;
var getRequestsFiltered = function getRequestsFiltered(_x7, _x8) {
  return (_ref5 = _ref5 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var id, connectionIds, requests, formattedRequests;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          connectionIds = [];
          if (id === '1') {
            connectionIds = [1, 2, 3, 4];
          } else if (id === '2') {
            connectionIds = [5, 6, 7, 8];
          } else {
            res.status(403).json({
              message: 'No tienes permisos para acceder a estas solicitudes.'
            });
          }
          _context5.next = 6;
          return _request["default"].findAll({
            where: {
              connectionId: connectionIds,
              conditionId: 1
            }
          });
        case 6:
          requests = _context5.sent;
          _context5.next = 9;
          return processRequests(requests);
        case 9:
          formattedRequests = _context5.sent;
          res.status(200).json(formattedRequests);
          _context5.next = 16;
          break;
        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](1);
          res.status(500).json({
            message: _context5.t0.message
          });
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 13]]);
  }))).apply(this, arguments);
};
exports.getRequestsFiltered = getRequestsFiltered;
var getRequest = function getRequest(_x9, _x10) {
  return (_ref6 = _ref6 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var id, request, _request$dataValues, clientId, solverId, connectionId, _yield$Connection$fin, typeId, categoryId, _yield$TypeRequest$fi, nameType, _yield$CategoryReques, nameCategory, _yield$User$findOne, nameClient, namesolver, _yield$User$findOne2, solverName, formattedRequest;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _context6.prev = 1;
          _context6.next = 4;
          return _request["default"].findByPk(id);
        case 4:
          request = _context6.sent;
          _request$dataValues = request.dataValues, clientId = _request$dataValues.clientId, solverId = _request$dataValues.solverId, connectionId = _request$dataValues.connectionId;
          _context6.next = 8;
          return _connection["default"].findOne({
            where: {
              connectionId: connectionId
            }
          });
        case 8:
          _yield$Connection$fin = _context6.sent;
          typeId = _yield$Connection$fin.typeId;
          categoryId = _yield$Connection$fin.categoryId;
          _context6.next = 13;
          return _typeRequest["default"].findOne({
            where: {
              typeId: typeId
            }
          });
        case 13:
          _yield$TypeRequest$fi = _context6.sent;
          nameType = _yield$TypeRequest$fi.name;
          _context6.next = 17;
          return _categoryRequest["default"].findOne({
            where: {
              categoryId: categoryId
            }
          });
        case 17:
          _yield$CategoryReques = _context6.sent;
          nameCategory = _yield$CategoryReques.name;
          _context6.next = 21;
          return _user["default"].findOne({
            where: {
              userId: clientId
            }
          });
        case 21:
          _yield$User$findOne = _context6.sent;
          nameClient = _yield$User$findOne.name;
          namesolver = '';
          if (!solverId) {
            _context6.next = 32;
            break;
          }
          _context6.next = 27;
          return _user["default"].findOne({
            where: {
              userId: solverId
            }
          });
        case 27:
          _yield$User$findOne2 = _context6.sent;
          solverName = _yield$User$findOne2.name;
          namesolver = solverName; // Asigna el valor a namesolver
          _context6.next = 33;
          break;
        case 32:
          namesolver = 'Sin asignar';
        case 33:
          formattedRequest = _objectSpread(_objectSpread({}, request.dataValues), {}, {
            clientName: nameClient,
            solverName: namesolver,
            typeRequest: nameType,
            categoryRequest: nameCategory,
            endTime: (0, _moment["default"])(request.dataValues.endTime).format('DD/MM/YYYY')
          });
          res.status(200).json(formattedRequest);
          _context6.next = 40;
          break;
        case 37:
          _context6.prev = 37;
          _context6.t0 = _context6["catch"](1);
          res.status(500).json({
            message: _context6.t0.message
          });
        case 40:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 37]]);
  }))).apply(this, arguments);
};
exports.getRequest = getRequest;
var deleteRequest = function deleteRequest(_x11, _x12) {
  return (_ref7 = _ref7 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var id;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          _context7.prev = 1;
          _context7.next = 4;
          return _request["default"].destroy({
            where: {
              requestId: id
            }
          });
        case 4:
          res.status(200).json({
            message: 'Request deleted successfully'
          });
          _context7.next = 10;
          break;
        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](1);
          res.status(500).json({
            message: _context7.t0.message
          });
        case 10:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 7]]);
  }))).apply(this, arguments);
};
exports.deleteRequest = deleteRequest;
var updateRequest = function updateRequest(_x13, _x14) {
  return (_ref8 = _ref8 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var id, _req$body2, title, solverId, connectionId, description, endTime, classroom, stateId, conditionId, answerForm, updateFields, formattedEndTime;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, title = _req$body2.title, solverId = _req$body2.solverId, connectionId = _req$body2.connectionId, description = _req$body2.description, endTime = _req$body2.endTime, classroom = _req$body2.classroom, stateId = _req$body2.stateId, conditionId = _req$body2.conditionId, answerForm = _req$body2.answerForm;
          updateFields = {};
          if (title) updateFields.title = title;
          if (solverId) updateFields.solverId = solverId;
          if (connectionId) updateFields.connectionId = connectionId;
          if (description) updateFields.description = description;
          if (endTime) {
            formattedEndTime = (0, _moment["default"])(endTime, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
            updateFields.endTime = formattedEndTime;
          }
          if (classroom) updateFields.classroom = classroom;
          if (stateId) updateFields.stateId = stateId;
          if (conditionId) updateFields.conditionId = conditionId;
          if (answerForm) updateFields.answerForm = answerForm;
          _context8.prev = 12;
          _context8.next = 15;
          return _request["default"].update(updateFields, {
            where: {
              requestId: id
            }
          });
        case 15:
          res.status(200).json({
            message: 'Request updated successfully'
          });
          _context8.next = 21;
          break;
        case 18:
          _context8.prev = 18;
          _context8.t0 = _context8["catch"](12);
          res.status(500).json({
            message: _context8.t0.message
          });
        case 21:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[12, 18]]);
  }))).apply(this, arguments);
};
exports.updateRequest = updateRequest;
var getCountRequests = function getCountRequests(_x15, _x16) {
  return (_ref9 = _ref9 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var id, connectionIds, count;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          id = req.params.id;
          _context9.prev = 1;
          connectionIds = [];
          if (!(id === '1')) {
            _context9.next = 7;
            break;
          }
          connectionIds = [1, 2, 3, 4];
          _context9.next = 12;
          break;
        case 7:
          if (!(id === '2')) {
            _context9.next = 11;
            break;
          }
          connectionIds = [5, 6, 7, 8];
          _context9.next = 12;
          break;
        case 11:
          return _context9.abrupt("return", res.status(403).json({
            message: 'No tienes permisos para acceder a estas solicitudes.'
          }));
        case 12:
          _context9.next = 14;
          return _request["default"].count({
            where: {
              connectionId: connectionIds,
              conditionId: 1
            }
          });
        case 14:
          count = _context9.sent;
          res.status(200).json({
            count: count
          });
          _context9.next = 21;
          break;
        case 18:
          _context9.prev = 18;
          _context9.t0 = _context9["catch"](1);
          res.status(500).json({
            message: _context9.t0.message
          });
        case 21:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[1, 18]]);
  }))).apply(this, arguments);
};
exports.getCountRequests = getCountRequests;