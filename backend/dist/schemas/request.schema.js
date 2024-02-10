"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRequestSchema = void 0;
var _zod = require("zod");
var createRequestSchema = _zod.z.object({
  title: _zod.z.string({
    required_error: "Title is required"
  }),
  description: _zod.z.string({
    required_error: "Description must be a string"
  }),
  endTime: _zod.z.string({
    required_error: "End time is required"
  }),
  classroom: _zod.z.string({
    required_error: "Classroom is required"
  })
});
exports.createRequestSchema = createRequestSchema;