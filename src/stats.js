"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStats = void 0;
var constants_1 = require("./constants");
function generateStats() {
    var res = "<div align='center'>";
    res += "<img src=\"".concat(constants_1.stats.wakatime, "\"><br><br>");
    for (var _i = 0, _a = constants_1.stats.badges; _i < _a.length; _i++) {
        var badge = _a[_i];
        res += "<img src=\"".concat(badge, "\" width=\"50\" height=\"50\">  ");
    }
    res += "<br><br><img src=\"".concat(constants_1.stats.leetcode, "\"></div>");
    return res;
}
exports.generateStats = generateStats;
