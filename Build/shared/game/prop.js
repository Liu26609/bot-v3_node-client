"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chestBoxLv_CN = exports.chestBoxLv = exports.rewardFormula = exports.rewardKey_CN = exports.rewardKey = exports.mapId = exports.storeBackTemp = void 0;
var storeBackTemp;
(function (storeBackTemp) {
    storeBackTemp[storeBackTemp["forever_hpMax_1"] = 0] = "forever_hpMax_1";
    storeBackTemp[storeBackTemp["forever_hpMax_10"] = 1] = "forever_hpMax_10";
})(storeBackTemp = exports.storeBackTemp || (exports.storeBackTemp = {}));
var mapId;
(function (mapId) {
    /**
     * 空地
     */
    mapId[mapId["opening"] = 0] = "opening";
    /**
     * 墙壁
     */
    mapId[mapId["wall"] = 1] = "wall";
    mapId[mapId["water"] = 2] = "water";
})(mapId = exports.mapId || (exports.mapId = {}));
var rewardKey;
(function (rewardKey) {
    /**
     * 经验
     */
    rewardKey[rewardKey["exp"] = 0] = "exp";
    /**
     * 金币
     */
    rewardKey[rewardKey["gold"] = 1] = "gold";
    /**
     * 称号卡
     */
    rewardKey[rewardKey["titleCard"] = 2] = "titleCard";
    /**
     * 盲盒
     */
    rewardKey[rewardKey["BlindBox"] = 3] = "BlindBox";
    /**
     * 改名卡
     */
    rewardKey[rewardKey["changeNameCard"] = 4] = "changeNameCard";
    /**
     * 技能卡
     */
    rewardKey[rewardKey["skillCard"] = 5] = "skillCard";
    /**
     * 传送卡
     */
    rewardKey[rewardKey["transferCard"] = 6] = "transferCard";
    /**
     * 复活币
     */
    rewardKey[rewardKey["resLife"] = 7] = "resLife";
    /**
     * 鱼干
     */
    rewardKey[rewardKey["driedFish"] = 8] = "driedFish";
})(rewardKey = exports.rewardKey || (exports.rewardKey = {}));
var rewardKey_CN;
(function (rewardKey_CN) {
    rewardKey_CN["exp"] = "\u23F3\u7ECF\u9A8C";
    rewardKey_CN["gold"] = "\uD83D\uDCB0\uFE0F\u91D1\u5E01";
    rewardKey_CN["titleCard"] = "\uD83C\uDF08\u79F0\u53F7\u5361";
    rewardKey_CN["BlindBox"] = "\uD83C\uDF81\u76F2\u76D2";
    rewardKey_CN["changeNameCard"] = "\uD83D\uDCB3\u6539\u540D\u5361";
    rewardKey_CN["skillCard"] = "\uD83D\uDD2F\u6280\u80FD\u5361";
    rewardKey_CN["transferCard"] = "\uD83C\uDFC3\u4F20\u9001\u5361";
    rewardKey_CN["resLife"] = "\uD83D\uDCA0\u590D\u6D3B\u5E01";
    rewardKey_CN["driedFish"] = "\uD83D\uDC1F\uFE0F\u5C0F\u9C7C\u5E72";
})(rewardKey_CN = exports.rewardKey_CN || (exports.rewardKey_CN = {}));
/**
 * 奖励公式类型
 */
var rewardFormula;
(function (rewardFormula) {
    rewardFormula[rewardFormula["map_enemy"] = 0] = "map_enemy";
    rewardFormula[rewardFormula["map_player"] = 1] = "map_player";
})(rewardFormula = exports.rewardFormula || (exports.rewardFormula = {}));
/**
 * 宝箱等级
 */
var chestBoxLv;
(function (chestBoxLv) {
    chestBoxLv[chestBoxLv["D"] = 0] = "D";
    chestBoxLv[chestBoxLv["C"] = 1] = "C";
    chestBoxLv[chestBoxLv["B"] = 2] = "B";
    chestBoxLv[chestBoxLv["A"] = 3] = "A";
    chestBoxLv[chestBoxLv["AA"] = 4] = "AA";
    chestBoxLv[chestBoxLv["AAA"] = 5] = "AAA";
    chestBoxLv[chestBoxLv["S"] = 6] = "S";
    chestBoxLv[chestBoxLv["SS"] = 7] = "SS";
    chestBoxLv[chestBoxLv["SSS"] = 8] = "SSS";
    chestBoxLv[chestBoxLv["SSSS"] = 9] = "SSSS";
})(chestBoxLv = exports.chestBoxLv || (exports.chestBoxLv = {}));
var chestBoxLv_CN;
(function (chestBoxLv_CN) {
    chestBoxLv_CN["D"] = "\uD83D\uDCE6\uFE0F\u6728\u5236\u5B9D\u7BB1";
    chestBoxLv_CN["C"] = "\uD83D\uDCEE\u94C1\u8D28\u5B9D\u7BB1";
    chestBoxLv_CN["B"] = "\uD83D\uDCBC\u767D\u94F6\u5B9D\u7BB1";
    chestBoxLv_CN["A"] = "\uD83D\uDECD\uFE0F\u767D\u91D1\u5B9D\u7BB1";
    chestBoxLv_CN["AA"] = "\uD83D\uDC5B\u9EC4\u91D1\u5B9D\u7BB1";
    chestBoxLv_CN["AAA"] = "\uD83D\uDC51\u94BB\u77F3\u5B9D\u7BB1";
    chestBoxLv_CN["S"] = "\uD83D\uDD4B\u53F2\u8BD7\u5B9D\u7BB1";
    chestBoxLv_CN["SS"] = "\uD83C\uDFEE\u4F20\u5947\u5B9D\u7BB1";
    chestBoxLv_CN["SSS"] = "\uD83D\uDCD9\u8FDC\u53E4\u5B9D\u7BB1";
    chestBoxLv_CN["SSSS"] = "\u2699\u4F5C\u8005\u5B9D\u7BB1";
})(chestBoxLv_CN = exports.chestBoxLv_CN || (exports.chestBoxLv_CN = {}));
