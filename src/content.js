"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateList = exports.generateContent = void 0;
var fs = require("fs");
var constants_1 = require("./constants");
var utils_1 = require("./utils");
function generateContent() {
    var content = [];
    for (var _i = 0, folders_1 = constants_1.folders; _i < folders_1.length; _i++) {
        var folder = folders_1[_i];
        var folderDir = fs.readdirSync("./" + folder);
        for (var _a = 0, folderDir_1 = folderDir; _a < folderDir_1.length; _a++) {
            var f = folderDir_1[_a];
            if (f !== ".DS_Store") {
                var problems = fs.readdirSync("./" + folder + "/" + f);
                for (var _b = 0, problems_1 = problems; _b < problems_1.length; _b++) {
                    var p = problems_1[_b];
                    var stat = fs.statSync("./" + folder + "/" + f + "/" + p);
                    if (!(0, utils_1.containsOnlyDigits)(p.split(".")[0])) {
                        console.log(folder + "/" + f + "/" + p);
                    }
                    else {
                        content.push({
                            birth: stat.mtimeMs,
                            path: folder + "/" + f + "/" + p,
                            id: p.split(".")[0],
                        });
                    }
                }
            }
        }
    }
    content = content.sort(function (a, b) { return b.birth - a.birth; });
    return content;
}
exports.generateContent = generateContent;
function generateList(content) {
    var unique = content.map(function (e) { return e.id; });
    if (new Set(unique).size !== unique.length)
        console.log("ЕСТЬ ПОВТОРЯЮЩИЕСЯ ЗАДАЧИ");
    var res = "<div align='center'><table><tbody>";
    var map = JSON.parse(fs.readFileSync("./src/map.json").toString());
    var date = new Date(content[0].birth).toLocaleString("RU-ru", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    res += "<tr><th colspan=\"2\"><b>".concat(date, "</b></th></tr>");
    for (var _i = 0, content_1 = content; _i < content_1.length; _i++) {
        var item = content_1[_i];
        var curDate = new Date(item.birth).toLocaleString("RU-ru", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
        var time = new Date(item.birth).toLocaleString("RU-ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
        if (curDate !== date) {
            res += "<tr><th colspan=\"2\"><b>".concat(curDate, "</b></th></tr>");
            date = curDate;
        }
        res += "<tr><th><a href=\"https://leetcode.com/problems/".concat(map[item.id], "\">").concat(item.id, "</a></th><th><sub>").concat(time, "</sub></th></tr>");
    }
    res += "</tbody></table></div>";
    return res;
}
exports.generateList = generateList;
