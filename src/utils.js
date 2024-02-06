"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containsOnlyDigits = void 0;
function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
}
exports.containsOnlyDigits = containsOnlyDigits;
