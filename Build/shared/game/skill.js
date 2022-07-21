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
     * 参数2:每次攻击最小的伤害
     * 参数3:每次攻击最大的伤害
     */
    SKILL_TYPE[SKILL_TYPE["continuity_Physics"] = 6] = "continuity_Physics";
    /**
    * 连续攻击N次，每次攻击为魔法攻击的百分比属性
    * 参数1:攻击次数
    * 参数2:每次攻击最小的伤害
    * 参数3:每次攻击最大的伤害
    */
    SKILL_TYPE[SKILL_TYPE["continuity_Magic"] = 7] = "continuity_Magic";
    /**
     * 有N概率永久复制对方技能
     * 参数1:概率
     */
    SKILL_TYPE[SKILL_TYPE["forever_steal_skill"] = 8] = "forever_steal_skill";
    /**
  * 每触发一次提高N点物理防御
  * 参数1:提高值
  */
    SKILL_TYPE[SKILL_TYPE["upPhysicalDefense_fixed"] = 9] = "upPhysicalDefense_fixed";
    /**
* 每触发一次提高N点魔法防御
* 参数1:提高值
*/
    SKILL_TYPE[SKILL_TYPE["upMagicDefense_fixed"] = 10] = "upMagicDefense_fixed";
    /**
     * 每次触发提高N%全属性
     * 参数1:百分比值
     */
    SKILL_TYPE[SKILL_TYPE["upAll"] = 11] = "upAll";
    /**
     * 回复固定N点生命
     */
    SKILL_TYPE[SKILL_TYPE["resHp_fixed"] = 12] = "resHp_fixed";
    /**
     * 对敌方全部单位造成N点百分比魔法伤害
     * 参数1:百分比
     */
    SKILL_TYPE[SKILL_TYPE["enemy_all_Magic"] = 13] = "enemy_all_Magic";
    /**
    * 对敌方全部单位造成N点百分比物理伤害
    * 参数1:百分比
    */
    SKILL_TYPE[SKILL_TYPE["enemy_all_Physics"] = 14] = "enemy_all_Physics";
    /**
     * 随机造成N-N物理固定伤害
     * 参数1：最小伤害
     * 参数2：最大伤害
     */
    SKILL_TYPE[SKILL_TYPE["random_Physics_fixed"] = 15] = "random_Physics_fixed";
    /**
    * 随机造成N-N魔法固定伤害
    * 参数1：最小伤害
    * 参数2：最大伤害
    */
    SKILL_TYPE[SKILL_TYPE["random_Magic_fixed"] = 16] = "random_Magic_fixed";
    /**
    * 随机造成N-N物理百分比伤害
    * 参数1：最小伤害
    * 参数2：最大伤害
    */
    SKILL_TYPE[SKILL_TYPE["random_Physics"] = 17] = "random_Physics";
    /**
    * 随机造成N-N魔法百分比伤害
    * 参数1：最小伤害
    * 参数2：最大伤害
    */
    SKILL_TYPE[SKILL_TYPE["random_Magic"] = 18] = "random_Magic";
    /**
   * 随机游戏所有技能中选一个技能释放
   */
    SKILL_TYPE[SKILL_TYPE["random_Skill"] = 19] = "random_Skill";
    /**
     * 让一个敌人N回合不能释放任何技能
     * 参赛1:停止回合数
     */
    SKILL_TYPE[SKILL_TYPE["stop_attack"] = 20] = "stop_attack";
    /**
     * 提高N点攻击
     * 参数1:固定物理攻击
     */
    SKILL_TYPE[SKILL_TYPE["up_Physics_fixed"] = 21] = "up_Physics_fixed";
    /**
     * 提高N点魔法攻击
     * 参数1:固定魔法攻击
     */
    SKILL_TYPE[SKILL_TYPE["up_Magic_fixed"] = 22] = "up_Magic_fixed";
    /**
     * 让地方全体停止攻击N回合
     */
    SKILL_TYPE[SKILL_TYPE["stop_attack_all"] = 23] = "stop_attack_all";
    /**
     * 永远停止攻击直到战斗结束，但该技能也将永久遗忘(血统/装备技能遗忘无效)
     */
    SKILL_TYPE[SKILL_TYPE["stopAttack_forever"] = 24] = "stopAttack_forever";
    /**
     * 每触发一次提高N点魔法/物理防御
     * 参数1：提高防御值
     */
    SKILL_TYPE[SKILL_TYPE["upAllDefense_fixed"] = 25] = "upAllDefense_fixed";
    /**
     * 回复我方全体生命
     * 参数1:回复值
     */
    SKILL_TYPE[SKILL_TYPE["resHp_fixed_all"] = 26] = "resHp_fixed_all";
    /**
     * 对单体造成真实伤害
     * 参数1:固定值
     */
    SKILL_TYPE[SKILL_TYPE["realHurt_fixed"] = 27] = "realHurt_fixed";
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
    /**
     * 复制技能
     */
    SKILL_ACTIVE_RES_TYPE[SKILL_ACTIVE_RES_TYPE["copySkill"] = 3] = "copySkill";
    /**
     * 让对手停止攻击
     */
    SKILL_ACTIVE_RES_TYPE[SKILL_ACTIVE_RES_TYPE["stopAttack"] = 4] = "stopAttack";
    /**
     * 回复生命
     */
    SKILL_ACTIVE_RES_TYPE[SKILL_ACTIVE_RES_TYPE["resHp"] = 5] = "resHp";
    /**
     * 真实伤害
     */
    SKILL_ACTIVE_RES_TYPE[SKILL_ACTIVE_RES_TYPE["realHurt"] = 6] = "realHurt";
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
    SKILL_ACTIVE_RES_TAG[SKILL_ACTIVE_RES_TAG["friend"] = 4] = "friend";
    SKILL_ACTIVE_RES_TAG[SKILL_ACTIVE_RES_TAG["friend_Pets"] = 5] = "friend_Pets";
    SKILL_ACTIVE_RES_TAG[SKILL_ACTIVE_RES_TAG["friend_all"] = 6] = "friend_all";
    SKILL_ACTIVE_RES_TAG[SKILL_ACTIVE_RES_TAG["me"] = 7] = "me";
    SKILL_ACTIVE_RES_TAG[SKILL_ACTIVE_RES_TAG["me_Pets"] = 8] = "me_Pets";
    SKILL_ACTIVE_RES_TAG[SKILL_ACTIVE_RES_TAG["me_all"] = 9] = "me_all";
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
    /**
     * 提高值防御
     */
    SKILL_UNITY[SKILL_UNITY["upPhysicalDefense"] = 4] = "upPhysicalDefense";
    /**
     * 提高魔防值
     */
    SKILL_UNITY[SKILL_UNITY["upMagicDefense"] = 5] = "upMagicDefense";
    /**
     * 提高全属性
     */
    SKILL_UNITY[SKILL_UNITY["upAll"] = 6] = "upAll";
    /**
     * 恢复生命
     */
    SKILL_UNITY[SKILL_UNITY["resHp"] = 7] = "resHp";
    SKILL_UNITY[SKILL_UNITY["upPhysics"] = 8] = "upPhysics";
    SKILL_UNITY[SKILL_UNITY["upMagic"] = 9] = "upMagic";
    /**
     * 提高双防
     */
    SKILL_UNITY[SKILL_UNITY["upAllDefense"] = 10] = "upAllDefense";
    /**
     * 真实伤害
     */
    SKILL_UNITY[SKILL_UNITY["realHurt"] = 11] = "realHurt";
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
    /**
     *
     */
    SKILL_UNITY_CN["upPhysicalDefense"] = "\uD83D\uDD3A\uD83D\uDD30";
    /**
         * 提高魔防值
         */
    SKILL_UNITY_CN["upMagicDefense"] = "\uD83D\uDD3A\uD83C\uDF1F";
    SKILL_UNITY_CN["upPhysics"] = "";
    SKILL_UNITY_CN["upMagic"] = "";
    /**
     * 提高全部属性
     */
    SKILL_UNITY_CN["upAll"] = "\uD83D\uDD3A";
    SKILL_UNITY_CN["resHp"] = "\uD83D\uDC96";
    SKILL_UNITY_CN["upAllDefense"] = "\uD83D\uDD3A\uD83C\uDF1F\uD83D\uDD30";
    SKILL_UNITY_CN["realHurt"] = "\uD83D\uDD38";
})(SKILL_UNITY_CN = exports.SKILL_UNITY_CN || (exports.SKILL_UNITY_CN = {}));
