'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var imageProcessor_1 = __importDefault(
  require('../controllers/imageProcessor')
);
var router = express_1.default.Router();
router.get('/images', imageProcessor_1.default, function (req, res) {
  imageProcessor_1.default;
});
exports.default = router;
