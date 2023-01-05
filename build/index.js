'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var api_routes_1 = __importDefault(require('./routes/api.routes'));
var app = (0, express_1.default)();
var port = 4000;
app.get('/', function (req, res) {
  res.send('This is our image Processing API');
});
app.use('/api', api_routes_1.default);
app.listen(port, function () {
  console.log('Server is running on port '.concat(port));
});
exports.default = app;
