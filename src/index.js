"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stats_1 = require("./stats");
var fs = require("fs");
var child_process_1 = require("child_process");
var content_1 = require("./content");
var result = "<p align=\"center\">\u043D\u0435\u0432\u0430\u0436\u043D\u043E, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u044D\u0442\u043E \u0438\u043B\u0438 \u043D\u0435\u0442</p>";
result += "<div align=\"center\"><code>\u30E2\u30F3\u30AD\u30FC\uFF65D\uFF65\u30EB\u30D5\u30A3</code></div><br>";
result += (0, stats_1.generateStats)();
var content = (0, content_1.generateContent)();
result += (0, content_1.generateList)(content);
fs.writeFileSync("README.md", result);
var currentTimestamp = new Date().toLocaleString("RU-ru", {
    day: "numeric",
    month: "short",
    year: "2-digit",
    hour: "numeric",
    minute: "numeric",
});
(0, child_process_1.spawnSync)("git", ["add", "."], { stdio: "inherit" });
(0, child_process_1.spawnSync)("git", ["commit", "-m", "".concat(currentTimestamp)], {
    stdio: "inherit",
});
(0, child_process_1.spawnSync)("git", ["push"], { stdio: "inherit" });
