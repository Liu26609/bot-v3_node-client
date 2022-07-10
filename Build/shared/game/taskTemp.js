"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskId = exports.taskType_CN = exports.taskType = void 0;
var taskType;
(function (taskType) {
    /**
     * 每日任务
     */
    taskType[taskType["everDay"] = 0] = "everDay";
    taskType[taskType["newUser"] = 1] = "newUser";
    /**
     * 伤害挑战
     */
    taskType[taskType["challenge_hit"] = 2] = "challenge_hit";
    /**
     * 贪婪洞窟
     */
    taskType[taskType["challenge_greed"] = 3] = "challenge_greed";
    /**
     * 飞升任务一级
     */
    taskType[taskType["ladder_1"] = 4] = "ladder_1";
    taskType[taskType["ladder_2"] = 5] = "ladder_2";
    taskType[taskType["ladder_3"] = 6] = "ladder_3";
    taskType[taskType["ladder_4"] = 7] = "ladder_4";
    taskType[taskType["ladder_5"] = 8] = "ladder_5";
    taskType[taskType["ladder_6"] = 9] = "ladder_6";
    taskType[taskType["ladder_7"] = 10] = "ladder_7";
    taskType[taskType["ladder_8"] = 11] = "ladder_8";
    taskType[taskType["ladder_9"] = 12] = "ladder_9";
})(taskType = exports.taskType || (exports.taskType = {}));
var taskType_CN;
(function (taskType_CN) {
    /**
     * 每日任务
     */
    taskType_CN["everDay"] = "\u6BCF\u65E5\u4EFB\u52A1";
    taskType_CN["newUser"] = "\u65B0\u624B\u4EFB\u52A1";
    taskType_CN["challenge_hit"] = "\u4F24\u5BB3\u6311\u6218";
    /**
     * 飞升任务
     */
    taskType_CN["ladder_1"] = "\u9636\u68AF\u4EFB\u52A1(\u4E00\u7EA7)";
    taskType_CN["ladder_2"] = "\u9636\u68AF\u4EFB\u52A1(\u4E8C\u7EA7)";
    taskType_CN["ladder_3"] = "\u9636\u68AF\u4EFB\u52A1(\u4E09\u7EA7)";
    taskType_CN["ladder_4"] = "\u9636\u68AF\u4EFB\u52A1(\u56DB\u7EA7)";
    taskType_CN["ladder_5"] = "\u9636\u68AF\u4EFB\u52A1(\u4E94\u7EA7)";
    taskType_CN["ladder_6"] = "\u9636\u68AF\u4EFB\u52A1(\u516D\u7EA7)";
    taskType_CN["ladder_7"] = "\u9636\u68AF\u4EFB\u52A1(\u4E03\u7EA7)";
    taskType_CN["ladder_8"] = "\u9636\u68AF\u4EFB\u52A1(\u516B\u7EA7)";
    taskType_CN["ladder_9"] = "\u9636\u68AF\u4EFB\u52A1(\u4E5D\u7EA7)";
})(taskType_CN = exports.taskType_CN || (exports.taskType_CN = {}));
var TaskId;
(function (TaskId) {
    /**
     * 每日签到
     */
    TaskId[TaskId["sign"] = 0] = "sign";
    /**
     * 查看黑市商店
     */
    TaskId[TaskId["BackShop_look"] = 1] = "BackShop_look";
    /**
     * 频道PK
     */
    TaskId[TaskId["PK"] = 2] = "PK";
    /**
     * 参与一次伤害挑战
     */
    TaskId[TaskId["challenge_hit"] = 3] = "challenge_hit";
    /**
     * 捕捉一次宠物
     */
    TaskId[TaskId["catch"] = 4] = "catch";
    /**
     * 钓鱼
     */
    TaskId[TaskId["fishing"] = 5] = "fishing";
    /**
     * 查看技能商店
     */
    TaskId[TaskId["SkillShop_look"] = 6] = "SkillShop_look";
    /**
     * 查看装备商店
     */
    TaskId[TaskId["EquipShop_look"] = 7] = "EquipShop_look";
    /**
     * 攻击一次怪物
     */
    TaskId[TaskId["attackMonster"] = 8] = "attackMonster";
    /**
     * 攻击一次boss
     */
    TaskId[TaskId["attackBoss_partake"] = 9] = "attackBoss_partake";
    /**
     * 排位一次
     */
    TaskId[TaskId["rank"] = 10] = "rank";
    /**
     * 参与猜数
     */
    TaskId[TaskId["lottery_partake"] = 11] = "lottery_partake";
    /**
     * 猜数胜利
     */
    TaskId[TaskId["lottery_win"] = 12] = "lottery_win";
    /**
     * 击杀一次BOSS
     */
    TaskId[TaskId["attackBoss_kill"] = 13] = "attackBoss_kill";
    /**
     * 成功强化一次装备
     */
    TaskId[TaskId["strengthen_succress"] = 14] = "strengthen_succress";
    /**
     * 捕捉成功一次宠物
     */
    TaskId[TaskId["docile_partake"] = 15] = "docile_partake";
    /**
     * 查看一次宠物马拉松
     */
    TaskId[TaskId["look_Horse"] = 16] = "look_Horse";
    /**
     * 查看一次位置
     */
    TaskId[TaskId["look_loca"] = 17] = "look_loca";
    /**
     * 移动
     * 上下左右
     */
    TaskId[TaskId["move_right"] = 18] = "move_right";
    /**
     * 移动
     * 上下左右
     */
    TaskId[TaskId["move_left"] = 19] = "move_left";
    /**
    * 移动
    * 上下左右
    */
    TaskId[TaskId["move_top"] = 20] = "move_top";
    /**
     * 移动
     * 上下左右
     */
    TaskId[TaskId["move_buttom"] = 21] = "move_buttom";
    TaskId[TaskId["challenge_greed"] = 22] = "challenge_greed";
})(TaskId = exports.TaskId || (exports.TaskId = {}));
