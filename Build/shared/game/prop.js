"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chestBoxLv_CN = exports.chestBoxLv = exports.rewardFormula = exports.rewardKey_CN = exports.rewardKey = exports.mapId = exports.storeTeamTemp = exports.storeBackTemp = exports.autionType = void 0;
var autionType;
(function (autionType) {
    autionType[autionType["wallet"] = 0] = "wallet";
    autionType[autionType["equip"] = 1] = "equip";
})(autionType = exports.autionType || (exports.autionType = {}));
var storeBackTemp;
(function (storeBackTemp) {
    storeBackTemp[storeBackTemp["forever_hpMax_10"] = 0] = "forever_hpMax_10";
    storeBackTemp[storeBackTemp["forever_MagicAttack_1"] = 1] = "forever_MagicAttack_1";
    storeBackTemp[storeBackTemp["forever_PhysicalAttacks_1"] = 2] = "forever_PhysicalAttacks_1";
    storeBackTemp[storeBackTemp["forever_MagicDefense_1"] = 3] = "forever_MagicDefense_1";
    storeBackTemp[storeBackTemp["forever_PhysicalDefense_1"] = 4] = "forever_PhysicalDefense_1";
    storeBackTemp[storeBackTemp["forever_secondResHp_01"] = 5] = "forever_secondResHp_01";
    storeBackTemp[storeBackTemp["randomPoint"] = 6] = "randomPoint";
    storeBackTemp[storeBackTemp["team_contribution_now"] = 7] = "team_contribution_now";
    storeBackTemp[storeBackTemp["team_exp"] = 8] = "team_exp";
})(storeBackTemp = exports.storeBackTemp || (exports.storeBackTemp = {}));
var storeTeamTemp;
(function (storeTeamTemp) {
    storeTeamTemp[storeTeamTemp["forever_hpMax_100"] = 0] = "forever_hpMax_100";
    storeTeamTemp[storeTeamTemp["forever_MagicAttack_10"] = 1] = "forever_MagicAttack_10";
    storeTeamTemp[storeTeamTemp["forever_PhysicalAttacks_10"] = 2] = "forever_PhysicalAttacks_10";
    storeTeamTemp[storeTeamTemp["forever_MagicDefense_1"] = 3] = "forever_MagicDefense_1";
    storeTeamTemp[storeTeamTemp["forever_PhysicalDefense_1"] = 4] = "forever_PhysicalDefense_1";
    storeTeamTemp[storeTeamTemp["forever_secondResHp_1"] = 5] = "forever_secondResHp_1";
    storeTeamTemp[storeTeamTemp["teamExp_1"] = 6] = "teamExp_1";
})(storeTeamTemp = exports.storeTeamTemp || (exports.storeTeamTemp = {}));
var mapId;
(function (mapId) {
    /**
     * ??????
     */
    mapId[mapId["opening"] = 0] = "opening";
    /**
     * ??????
     */
    mapId[mapId["wall"] = 1] = "wall";
    mapId[mapId["water"] = 2] = "water";
})(mapId = exports.mapId || (exports.mapId = {}));
var rewardKey;
(function (rewardKey) {
    /**
  * ??????
  */
    rewardKey[rewardKey["BlindBox"] = 0] = "BlindBox";
    /**
     * ??????
     */
    rewardKey[rewardKey["exp"] = 1] = "exp";
    /**
     * ??????
     */
    rewardKey[rewardKey["gold"] = 2] = "gold";
    /**
     * ?????????
     */
    rewardKey[rewardKey["titleCard"] = 3] = "titleCard";
    /**
     * ?????????
     */
    rewardKey[rewardKey["changeNameCard"] = 4] = "changeNameCard";
    /**
     * ?????????
     */
    rewardKey[rewardKey["skillCard"] = 5] = "skillCard";
    /**
     * ?????????
     */
    rewardKey[rewardKey["transferCard"] = 6] = "transferCard";
    /**
     * ?????????
     */
    rewardKey[rewardKey["resLife"] = 7] = "resLife";
    /**
     * ??????
     */
    rewardKey[rewardKey["driedFish"] = 8] = "driedFish";
    /**
     * ?????????
     */
    rewardKey[rewardKey["spiritBall"] = 9] = "spiritBall";
    /**
     * ?????????
     */
    rewardKey[rewardKey["evolveCard"] = 10] = "evolveCard";
    /**
     * ??????
     */
    rewardKey[rewardKey["rankscore"] = 11] = "rankscore";
    /**
     * ?????????
     */
    rewardKey[rewardKey["justice"] = 12] = "justice";
    /**
    * ?????????
    */
    rewardKey[rewardKey["evil"] = 13] = "evil";
    /**
     * ?????????
     */
    rewardKey[rewardKey["dnaExp"] = 14] = "dnaExp";
    /**
     * ????????????
     */
    rewardKey[rewardKey["titleExp"] = 15] = "titleExp";
    /**
     * ????????????
     */
    rewardKey[rewardKey["petExp"] = 16] = "petExp";
    /**
     * ????????????
     */
    rewardKey[rewardKey["team_devote"] = 17] = "team_devote";
    /**
     * ?????????
     */
    rewardKey[rewardKey["strengthen"] = 18] = "strengthen";
    /**
     * ????????????
     */
    rewardKey[rewardKey["team_exp"] = 19] = "team_exp";
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
    rewardKey_CN["spiritBall"] = "\uD83D\uDC7E\u7CBE\u7075\u7403";
    rewardKey_CN["evolveCard"] = "\uD83C\uDF0C\u8FDB\u5316\u5361";
    rewardKey_CN["rankscore"] = "\u269C\uFE0F\u58F0\u671B\u503C";
    rewardKey_CN["justice"] = "\uD83D\uDFE9\u6B63\u4E49\u503C";
    rewardKey_CN["evil"] = "\uD83D\uDFE5\u7EA2\u540D\u503C";
    rewardKey_CN["dnaExp"] = "\uD83E\uDDEC\u8FDB\u5316\u70B9";
    rewardKey_CN["titleExp"] = "\uD83C\uDF08\u79F0\u53F7\u7ECF\u9A8C";
    rewardKey_CN["petExp"] = "\uD83C\uDF56\u5BA0\u7269\u7ECF\u9A8C";
    rewardKey_CN["team_devote"] = "\uD83C\uDFF0\u5DE5\u4F1A\u8D21\u732E";
    rewardKey_CN["strengthen"] = "\u2699\uFE0F\u5F3A\u5316\u788E\u7247";
    rewardKey_CN["team_exp"] = "\uD83C\uDFF0\u5DE5\u4F1A\u7ECF\u9A8C";
})(rewardKey_CN = exports.rewardKey_CN || (exports.rewardKey_CN = {}));
/**
 * ??????????????????
 */
var rewardFormula;
(function (rewardFormula) {
    rewardFormula[rewardFormula["map_enemy"] = 0] = "map_enemy";
    rewardFormula[rewardFormula["map_player"] = 1] = "map_player";
})(rewardFormula = exports.rewardFormula || (exports.rewardFormula = {}));
/**
 * ????????????
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
    chestBoxLv_CN["A"] = "\uD83D\uDECD\uFE0F\u9EC4\u91D1\u5B9D\u7BB1";
    chestBoxLv_CN["AA"] = "\uD83D\uDC5B\u767D\u91D1\u5B9D\u7BB1";
    chestBoxLv_CN["AAA"] = "\uD83D\uDC51\u94BB\u77F3\u5B9D\u7BB1";
    chestBoxLv_CN["S"] = "\uD83D\uDD4B\u53F2\u8BD7\u5B9D\u7BB1";
    chestBoxLv_CN["SS"] = "\uD83C\uDFEE\u4F20\u5947\u5B9D\u7BB1";
    chestBoxLv_CN["SSS"] = "\uD83D\uDCD9\u8FDC\u53E4\u5B9D\u7BB1";
    chestBoxLv_CN["SSSS"] = "\u2699\u4F5C\u8005\u5B9D\u7BB1"; //??????
})(chestBoxLv_CN = exports.chestBoxLv_CN || (exports.chestBoxLv_CN = {}));
