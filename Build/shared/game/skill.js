"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SKILL_UNITY_CN = exports.SKILL_UNITY = exports.SKILL_ACTIVE_RES_TAG = exports.SKILL_ACTIVE_RES_TYPE = exports.SKILL_TYPE = void 0;
var SKILL_TYPE;
(function (SKILL_TYPE) {
    /**
     * 攻击失手
     */
    SKILL_TYPE[SKILL_TYPE["miss"] = 0] = "miss";
    /**
     * 对一个单位造成固定物理伤害
     * 参数1:伤害值
     */
    SKILL_TYPE[SKILL_TYPE["attack_Physics_fixed"] = 1] = "attack_Physics_fixed";
    /**
     * 对一个单位造成固定魔法伤害
     * 参数1:伤害值
     */
    SKILL_TYPE[SKILL_TYPE["attack_Magic_fixed"] = 2] = "attack_Magic_fixed";
    /**
     * 对一个单位造成属性百分比魔法伤害
     * 参数1:百分比
     */
    SKILL_TYPE[SKILL_TYPE["attack_Magic_rang"] = 3] = "attack_Magic_rang";
    /**
  * 对一个单位造成属性百分比物理伤害
  * 参数1:百分比
  */
    SKILL_TYPE[SKILL_TYPE["attack_Physics_rang"] = 4] = "attack_Physics_rang";
    /**
     * 创造一个和实力为自己属性百分比的分身,分身只会存活一回合
     * 参数1::百分比
     * 参数2：数量
     */
    SKILL_TYPE[SKILL_TYPE["creator_shadow"] = 5] = "creator_shadow";
    /**
     * 连续攻击N次，每次攻击为物理攻击的百分比属性
     * 参数1:攻击次数
     * 参数2:百分比属性
     */
    SKILL_TYPE[SKILL_TYPE["continuity_Physics"] = 6] = "continuity_Physics";
    /**
    * 连续攻击N次，每次攻击为物理攻击的百分比属性
    * 参数1:攻击次数
    * 参数2:百分比属性
    */
    SKILL_TYPE[SKILL_TYPE["continuity_Magic"] = 7] = "continuity_Magic";
})(SKILL_TYPE = exports.SKILL_TYPE || (exports.SKILL_TYPE = {}));
var SKILL_ACTIVE_RES_TYPE;
(function (SKILL_ACTIVE_RES_TYPE) {
    /**
     * 无任何操作
     */
    SKILL_ACTIVE_RES_TYPE[SKILL_ACTIVE_RES_TYPE["none"] = 0] = "none";
    /**
     * 伤害
     */
    SKILL_ACTIVE_RES_TYPE[SKILL_ACTIVE_RES_TYPE["hurt"] = 1] = "hurt";
    /**
     * 增加单位
     */
    SKILL_ACTIVE_RES_TYPE[SKILL_ACTIVE_RES_TYPE["addUnit"] = 2] = "addUnit";
})(SKILL_ACTIVE_RES_TYPE = exports.SKILL_ACTIVE_RES_TYPE || (exports.SKILL_ACTIVE_RES_TYPE = {}));
/**
 * 技能目标
 */
var SKILL_ACTIVE_RES_TAG;
(function (SKILL_ACTIVE_RES_TAG) {
    SKILL_ACTIVE_RES_TAG[SKILL_ACTIVE_RES_TAG["none"] = 0] = "none";
    /**
     * 敌人
     */
    SKILL_ACTIVE_RES_TAG[SKILL_ACTIVE_RES_TAG["enemy"] = 1] = "enemy";
    /**
     * 全部敌人
     */
    SKILL_ACTIVE_RES_TAG[SKILL_ACTIVE_RES_TAG["enemy_all"] = 2] = "enemy_all";
    /**
     * 敌人召唤单位
     */
    SKILL_ACTIVE_RES_TAG[SKILL_ACTIVE_RES_TAG["enemy_Pets"] = 3] = "enemy_Pets";
    /**
     * 敌人单位
     */
    SKILL_ACTIVE_RES_TAG[SKILL_ACTIVE_RES_TAG["enemy_will"] = 4] = "enemy_will";
    SKILL_ACTIVE_RES_TAG[SKILL_ACTIVE_RES_TAG["friend"] = 5] = "friend";
    SKILL_ACTIVE_RES_TAG[SKILL_ACTIVE_RES_TAG["friend_Pets"] = 6] = "friend_Pets";
    SKILL_ACTIVE_RES_TAG[SKILL_ACTIVE_RES_TAG["friend_will"] = 7] = "friend_will";
    SKILL_ACTIVE_RES_TAG[SKILL_ACTIVE_RES_TAG["friend_all"] = 8] = "friend_all";
    SKILL_ACTIVE_RES_TAG[SKILL_ACTIVE_RES_TAG["me"] = 9] = "me";
    SKILL_ACTIVE_RES_TAG[SKILL_ACTIVE_RES_TAG["me_Pets"] = 10] = "me_Pets";
    SKILL_ACTIVE_RES_TAG[SKILL_ACTIVE_RES_TAG["me_all"] = 11] = "me_all";
    SKILL_ACTIVE_RES_TAG[SKILL_ACTIVE_RES_TAG["me_will"] = 12] = "me_will";
})(SKILL_ACTIVE_RES_TAG = exports.SKILL_ACTIVE_RES_TAG || (exports.SKILL_ACTIVE_RES_TAG = {}));
/**
 * 技能统计单位
 */
var SKILL_UNITY;
(function (SKILL_UNITY) {
    /**
     * 无单位
     */
    SKILL_UNITY[SKILL_UNITY["none"] = 0] = "none";
    /**
     * 次
     */
    SKILL_UNITY[SKILL_UNITY["second"] = 1] = "second";
    /**
     * 物理伤害
     */
    SKILL_UNITY[SKILL_UNITY["physicalDamage"] = 2] = "physicalDamage";
    /**
     * 魔法伤害
     */
    SKILL_UNITY[SKILL_UNITY["MagicDamage"] = 3] = "MagicDamage";
})(SKILL_UNITY = exports.SKILL_UNITY || (exports.SKILL_UNITY = {}));
var SKILL_UNITY_CN;
(function (SKILL_UNITY_CN) {
    /**
     * 无单位
     */
    SKILL_UNITY_CN["none"] = "";
    /**
     * 次
     */
    SKILL_UNITY_CN["second"] = "\u6B21";
    /**
     * 物理伤害
     */
    SKILL_UNITY_CN["physicalDamage"] = "";
    /**
     * 魔法伤害
     */
    SKILL_UNITY_CN["MagicDamage"] = "";
})(SKILL_UNITY_CN = exports.SKILL_UNITY_CN || (exports.SKILL_UNITY_CN = {}));
