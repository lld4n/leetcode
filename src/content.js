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
    var res = "<div align='center'>";
    var map = JSON.parse(fs.readFileSync("./src/map.json").toString());
    for (var _i = 0, content_1 = content; _i < content_1.length; _i++) {
        var item = content_1[_i];
        res += "[".concat(item.id, "](https://leetcode.com/problems/").concat(map[item.id], ")&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`").concat(new Date(item.birth).toLocaleString("RU-ru", {
            day: "numeric",
            month: "short",
            year: "2-digit",
            hour: "numeric",
            minute: "numeric",
        }), "`  \n");
    }
    res += "</div>";
    return res;
}
exports.generateList = generateList;
