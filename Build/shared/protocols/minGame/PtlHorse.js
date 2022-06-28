"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HORSE_STATE = exports.HORSE_TYPE = void 0;
var HORSE_TYPE;
(function (HORSE_TYPE) {
    HORSE_TYPE[HORSE_TYPE["look"] = 0] = "look";
    HORSE_TYPE[HORSE_TYPE["join"] = 1] = "join";
    HORSE_TYPE[HORSE_TYPE["update"] = 2] = "update";
})(HORSE_TYPE = exports.HORSE_TYPE || (exports.HORSE_TYPE = {}));
var HORSE_STATE;
(function (HORSE_STATE) {
    /**
     * 等待中
     */
    HORSE_STATE[HORSE_STATE["wait"] = 0] = "wait";
    /**
     * 比赛中
     */
    HORSE_STATE[HORSE_STATE["play"] = 1] = "play";
})(HORSE_STATE = exports.HORSE_STATE || (exports.HORSE_STATE = {}));
// export const conf = {}
