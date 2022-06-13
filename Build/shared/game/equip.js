"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EQUIP_TYPE_CN = exports.EQUIP_TYPE_ICON = exports.EQUIP_TYPE = exports.EQUIP_QUALITY = void 0;
/**
 * 装备品质
 */
var EQUIP_QUALITY;
(function (EQUIP_QUALITY) {
    EQUIP_QUALITY[EQUIP_QUALITY["G"] = 0] = "G";
    EQUIP_QUALITY[EQUIP_QUALITY["F"] = 1] = "F";
    EQUIP_QUALITY[EQUIP_QUALITY["E"] = 2] = "E";
    EQUIP_QUALITY[EQUIP_QUALITY["D"] = 3] = "D";
    EQUIP_QUALITY[EQUIP_QUALITY["C"] = 4] = "C";
    EQUIP_QUALITY[EQUIP_QUALITY["B"] = 5] = "B";
    EQUIP_QUALITY[EQUIP_QUALITY["A"] = 6] = "A";
    EQUIP_QUALITY[EQUIP_QUALITY["s"] = 7] = "s";
    EQUIP_QUALITY[EQUIP_QUALITY["ss"] = 8] = "ss";
    EQUIP_QUALITY[EQUIP_QUALITY["sss"] = 9] = "sss"; //="作者专属"
})(EQUIP_QUALITY = exports.EQUIP_QUALITY || (exports.EQUIP_QUALITY = {}));
var EQUIP_TYPE;
(function (EQUIP_TYPE) {
    /**
     * 武器
     */
    EQUIP_TYPE[EQUIP_TYPE["weapons"] = 0] = "weapons";
    /**
     * 副武器
     */
    EQUIP_TYPE[EQUIP_TYPE["subWeapon"] = 1] = "subWeapon";
    /**
     * 衣服
     */
    EQUIP_TYPE[EQUIP_TYPE["clothes"] = 2] = "clothes";
    /**
     * 饰品
     */
    EQUIP_TYPE[EQUIP_TYPE["necklace"] = 3] = "necklace";
    /**
     * 帽子
     */
    EQUIP_TYPE[EQUIP_TYPE["hat"] = 4] = "hat";
    /**
     * 勋章
     */
    EQUIP_TYPE[EQUIP_TYPE["medal"] = 5] = "medal";
})(EQUIP_TYPE = exports.EQUIP_TYPE || (exports.EQUIP_TYPE = {}));
var EQUIP_TYPE_ICON;
(function (EQUIP_TYPE_ICON) {
    /**
     * 武器
     */
    EQUIP_TYPE_ICON["weapons"] = "\uD83D\uDDE1\uFE0F";
    EQUIP_TYPE_ICON["subWeapon"] = "\uD83D\uDEE1\uFE0F";
    EQUIP_TYPE_ICON["clothes"] = "\uD83D\uDC55";
    EQUIP_TYPE_ICON["necklace"] = "\uD83C\uDF84";
    /**
     * 帽子
     */
    EQUIP_TYPE_ICON["hat"] = "\uD83C\uDFA9";
    EQUIP_TYPE_ICON["medal"] = "\uD83C\uDFC5";
})(EQUIP_TYPE_ICON = exports.EQUIP_TYPE_ICON || (exports.EQUIP_TYPE_ICON = {}));
var EQUIP_TYPE_CN;
(function (EQUIP_TYPE_CN) {
    /**
     * 武器
     */
    EQUIP_TYPE_CN["weapons"] = "\u4E3B\u6B66\u5668";
    EQUIP_TYPE_CN["subWeapon"] = "\u526F\u6B66\u5668";
    EQUIP_TYPE_CN["clothes"] = "\u8863\u670D";
    EQUIP_TYPE_CN["necklace"] = "\u9970\u54C1";
    /**
     * 帽子
     */
    EQUIP_TYPE_CN["hat"] = "\u5E3D\u5B50";
    EQUIP_TYPE_CN["medal"] = "\u52CB\u7AE0";
})(EQUIP_TYPE_CN = exports.EQUIP_TYPE_CN || (exports.EQUIP_TYPE_CN = {}));
