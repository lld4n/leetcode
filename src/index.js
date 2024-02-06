"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { constants } from "./constants";
var stats_1 = require("./stats");
var fs = require("fs");
var child_process_1 = require("child_process");
var result = "<h1 align=\"center\">\u043D\u0435\u0432\u0430\u0436\u043D\u043E, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u044D\u0442\u043E \u0438\u043B\u0438 \u043D\u0435\u0442</h1>";
result += "<h2 align=\"center\">\u044F \u044D\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u044E, \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u0445\u043E\u0447\u0443 \u0441\u0434\u0435\u043B\u0430\u0442\u044C</h2>";
result += "<h3 align=\"center\">\u30E2\u30F3\u30AD\u30FC\uFF65D\uFF65\u30EB\u30D5\u30A3</h3>";
result += (0, stats_1.generateStats)();
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
