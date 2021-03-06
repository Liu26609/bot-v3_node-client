"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletKey_CN = exports.walletKey_CNText = exports.walletKey = void 0;
var walletKey;
(function (walletKey) {
    walletKey[walletKey["gold"] = 0] = "gold";
    walletKey[walletKey["titleCard"] = 1] = "titleCard";
    walletKey[walletKey["BlindBox"] = 2] = "BlindBox";
    walletKey[walletKey["changeNameCard"] = 3] = "changeNameCard";
    walletKey[walletKey["skillCard"] = 4] = "skillCard";
    walletKey[walletKey["transferCard"] = 5] = "transferCard";
    walletKey[walletKey["resLife"] = 6] = "resLife";
    walletKey[walletKey["driedFish"] = 7] = "driedFish";
    walletKey[walletKey["spiritBall"] = 8] = "spiritBall";
    /**
     * 进化卡
     */
    walletKey[walletKey["evolveCard"] = 9] = "evolveCard";
    /**
    * 正义值
    * 增加：刷怪,击杀红名玩家
    * 减少：击杀正义值玩家
    * 效果：商店出售消耗正义值商品
    */
    walletKey[walletKey["justice"] = 10] = "justice";
    /**
     * 红名值
     * 增加：击杀玩家增加
     * 减少：刷怪
     * 效果：商店不能购买东西
     */
    walletKey[walletKey["evil"] = 11] = "evil";
    /**
     * 强化碎片
     */
    walletKey[walletKey["strengthen"] = 12] = "strengthen";
})(walletKey = exports.walletKey || (exports.walletKey = {}));
var walletKey_CNText;
(function (walletKey_CNText) {
    walletKey_CNText["gold"] = "\u91D1\u5E01";
    walletKey_CNText["titleCard"] = "\u79F0\u53F7\u5361";
    walletKey_CNText["BlindBox"] = "\u76F2\u76D2";
    walletKey_CNText["changeNameCard"] = "\u6539\u540D\u5361";
    walletKey_CNText["skillCard"] = "\u6280\u80FD\u5361";
    walletKey_CNText["transferCard"] = "\u4F20\u9001\u5361";
    walletKey_CNText["resLife"] = "\u590D\u6D3B\u5E01";
    walletKey_CNText["driedFish"] = "\u5C0F\u9C7C\u5E72";
    walletKey_CNText["spiritBall"] = "\u7CBE\u7075\u7403";
    walletKey_CNText["evolveCard"] = "\u8FDB\u5316\u5361";
    walletKey_CNText["justice"] = "\u6B63\u4E49\u503C";
    walletKey_CNText["evil"] = "\u7EA2\u540D\u503C";
    walletKey_CNText["strengthen"] = "\u5F3A\u5316\u788E\u7247";
})(walletKey_CNText = exports.walletKey_CNText || (exports.walletKey_CNText = {}));
var walletKey_CN;
(function (walletKey_CN) {
    walletKey_CN["gold"] = "\uD83D\uDCB0\uFE0F\u91D1\u5E01";
    walletKey_CN["titleCard"] = "\uD83C\uDF08\u79F0\u53F7\u5361";
    walletKey_CN["BlindBox"] = "\uD83C\uDF81\u76F2\u76D2";
    walletKey_CN["changeNameCard"] = "\uD83D\uDCB3\u6539\u540D\u5361";
    walletKey_CN["skillCard"] = "\uD83D\uDD2F\u6280\u80FD\u5361";
    walletKey_CN["transferCard"] = "\uD83C\uDFC3\u4F20\u9001\u5361";
    walletKey_CN["resLife"] = "\uD83D\uDCA0\u590D\u6D3B\u5E01";
    walletKey_CN["driedFish"] = "\uD83D\uDC1F\uFE0F\u5C0F\u9C7C\u5E72";
    walletKey_CN["spiritBall"] = "\uD83D\uDC7E\u7CBE\u7075\u7403";
    walletKey_CN["evolveCard"] = "\uD83C\uDF0C\u8FDB\u5316\u5361";
    walletKey_CN["justice"] = "\uD83D\uDFE9\u6B63\u4E49\u503C";
    walletKey_CN["evil"] = "\uD83D\uDFE5\u7EA2\u540D\u503C";
    walletKey_CN["strengthen"] = "\u2699\uFE0F\u5F3A\u5316\u788E\u7247";
})(walletKey_CN = exports.walletKey_CN || (exports.walletKey_CN = {}));
