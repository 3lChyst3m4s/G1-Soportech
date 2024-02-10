"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
var _tasksRoutes = _interopRequireDefault(require("./routes/tasks.routes.js"));
var _requestRoutes = _interopRequireDefault(require("./routes/request.routes.js"));
var _logRoutes = _interopRequireDefault(require("./routes/log.routes.js"));
var _messageRoutes = _interopRequireDefault(require("./routes/message.routes.js"));
var _formRoutes = _interopRequireDefault(require("./routes/form.routes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var swaggerOptions = {
  definition: {
    info: {
      title: "Backend API",
      description: "Backend API Information"
    }
  },
  apis: ["./src/routes/**/*.js"]
};
var specs = (0, _swaggerJsdoc["default"])(swaggerOptions);
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use((0, _cookieParser["default"])());
app.use("/api", _authRoutes["default"]);
app.use(_tasksRoutes["default"]);
app.use("/api", _requestRoutes["default"]);
app.use("/api", _logRoutes["default"]);
app.use("/api", _messageRoutes["default"]);
app.use("/api", _formRoutes["default"]);
app.use("/docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));
var _default = app;
exports["default"] = _default;