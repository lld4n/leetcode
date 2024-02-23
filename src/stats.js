"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStats = void 0;
var constants_1 = require("./constants");
function generateStats() {
    var res = "<div align='center'>";
    res += "<img src=\"".concat(constants_1.stats.wakatime, "\"><br><br>");
    for (var _i = 0, _a = constants_1.stats.com; _i < _a.length; _i++) {
        var c = _a[_i];
        res += "<img src=\"".concat(c, "\" width=\"50\" height=\"50\">  ");
    }
    for (var _b = 0, _c = constants_1.stats.badges; _b < _c.length; _b++) {
        var badge = _c[_b];
        res += "<img src=\"".concat(badge, "\" width=\"50\" height=\"50\">  ");
    }
    res += "<br><br><img src=\"".concat(constants_1.stats.leetcode, "\"></div><br>");
    return res;
}
exports.generateStats = generateStats;
