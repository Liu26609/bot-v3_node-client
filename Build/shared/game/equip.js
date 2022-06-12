"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EQUIP_TYPE_CN = exports.EQUIP_TYPE = exports.EQUIP_QUALITY_CN = exports.EQUIP_QUALITY = void 0;
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
var EQUIP_QUALITY_CN;
(function (EQUIP_QUALITY_CN) {
    EQUIP_QUALITY_CN["G"] = "\u7834\u70C2";
    EQUIP_QUALITY_CN["F"] = "\u6218\u635F";
    EQUIP_QUALITY_CN["E"] = "\u666E\u901A";
    EQUIP_QUALITY_CN["D"] = "\u7CBE\u826F";
    EQUIP_QUALITY_CN["C"] = "\u7A00\u6709";
    EQUIP_QUALITY_CN["B"] = "\u53F2\u8BD7";
    EQUIP_QUALITY_CN["A"] = "\u4F20\u8BF4";
    EQUIP_QUALITY_CN["s"] = "\u795E\u5668";
    EQUIP_QUALITY_CN["ss"] = "\u4E0A\u53E4";
    EQUIP_QUALITY_CN["sss"] = "\u4F5C\u8005\u4E13\u5C5E";
})(EQUIP_QUALITY_CN = exports.EQUIP_QUALITY_CN || (exports.EQUIP_QUALITY_CN = {}));
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
})(EQUIP_TYPE = exports.EQUIP_TYPE || (exports.EQUIP_TYPE = {}));
var EQUIP_TYPE_CN;
(function (EQUIP_TYPE_CN) {
    /**
     * 武器
     */
    EQUIP_TYPE_CN["weapons"] = "\u4E3B\u6B66\u5668";
    EQUIP_TYPE_CN["subWeapon"] = "\u526F\u6B66\u5668";
})(EQUIP_TYPE_CN = exports.EQUIP_TYPE_CN || (exports.EQUIP_TYPE_CN = {}));
