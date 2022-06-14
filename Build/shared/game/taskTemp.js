"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskId = exports.taskType_CN = exports.taskType = void 0;
var taskType;
(function (taskType) {
    /**
     * 每日任务
     */
    taskType[taskType["everDay"] = 0] = "everDay";
    /**
     * 飞升任务一级
     */
    taskType[taskType["ladder_1"] = 1] = "ladder_1";
    taskType[taskType["ladder_2"] = 2] = "ladder_2";
    taskType[taskType["ladder_3"] = 3] = "ladder_3";
})(taskType = exports.taskType || (exports.taskType = {}));
var taskType_CN;
(function (taskType_CN) {
    /**
     * 每日任务
     */
    taskType_CN["everDay"] = "\u6BCF\u65E5\u4EFB\u52A1";
    /**
     * 飞升任务
     */
    taskType_CN["ladder_1"] = "\u9636\u68AF\u8BA1\u5212(\u4E00\u7EA7)";
    taskType_CN["ladder_2"] = "\u9636\u68AF\u8BA1\u5212(\u4E8C\u7EA7)";
    taskType_CN["ladder_3"] = "\u9636\u68AF\u8BA1\u5212(\u4E09\u7EA7)";
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
     * 捕捉宠物
     */
    TaskId[TaskId["catch"] = 3] = "catch";
    /**
     * 钓鱼
     */
    TaskId[TaskId["fishing"] = 4] = "fishing";
    /**
     * 查看技能商店
     */
    TaskId[TaskId["SkillShop_look"] = 5] = "SkillShop_look";
    /**
     * 查看装备商店
     */
    TaskId[TaskId["EquipShop_look"] = 6] = "EquipShop_look";
    /**
     * 攻击一次怪物
     */
    TaskId[TaskId["attackMonster"] = 7] = "attackMonster";
    /**
     * 攻击一次boss
     */
    TaskId[TaskId["attackBoss_partake"] = 8] = "attackBoss_partake";
    /**
     * 排位一次
     */
    TaskId[TaskId["rank"] = 9] = "rank";
    /**
     * 参与猜数
     */
    TaskId[TaskId["lottery_partake"] = 10] = "lottery_partake";
    /**
     * 击杀一次BOSS
     */
    TaskId[TaskId["attackBoss_kill"] = 11] = "attackBoss_kill";
    /**
     * 成功强化一次装备
     */
    TaskId[TaskId["strengthen_succress"] = 12] = "strengthen_succress";
})(TaskId = exports.TaskId || (exports.TaskId = {}));
