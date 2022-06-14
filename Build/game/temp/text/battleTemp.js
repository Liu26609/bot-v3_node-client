"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.text_battleTemp_style = void 0;
const skill_1 = require("./../../../shared/game/skill");
/**
 * 转化战斗日志数据模板
 */
const __1 = require("../../..");
const skill_2 = require("../../../shared/game/skill");
const prop_1 = require("../../../shared/game/prop");
class text_battleTemp_style {
    constructor() {
        this.skillHurtLog = ['', ''];
        this.hurtLotTitle_me = `┏┄未设置我方伤害统计标题━┄`;
        this.hurtLotTitle_enemy = `┏┄未设置敌方伤害统计标题━┄`;
        this.rewardKey_str = ``;
        this.battleConfig = {
            hurtLog: {
                me: true,
                enemy: true
            },
            killLog: {
                open: true,
            }
        };
    }
    sendData(data) {
        this.data = data;
        let battleList = data.log;
        for (let index = 0; index < battleList.length; index++) {
            const item = battleList[index];
            let itemLog = '';
            itemLog += item.icon + item.name;
            for (let index = 0; index < item.list.length; index++) {
                const free_skill = item.list[index];
                if (free_skill.val == 0) {
                    continue;
                }
                itemLog += `│▌${free_skill.name}${free_skill.val}`;
                itemLog += skill_2.SKILL_UNITY_CN[skill_1.SKILL_UNITY[free_skill.unit]];
            }
            itemLog += '\n';
            this.skillHurtLog[item.group] += itemLog;
        }
        // 设置战斗奖励
        if (data.reward.length > 0) {
            data.reward.forEach(item => {
                this.rewardKey_str += `${prop_1.rewardKey_CN[prop_1.rewardKey[item.key]]}${item.val > 0 ? '+' : ''}${item.val}`;
            });
        }
        return this;
    }
    /**
     * 设置我方伤害统计标题
     */
    setHurtLotTitle_me(str) {
        this.hurtLotTitle_me = str;
    }
    /**
     * 设置敌方伤害统计标题
     */
    setHurtLotTitle_enemy(str) {
        this.hurtLotTitle_enemy = str;
    }
    /**
     * 获取本次战斗的奖励
     */
    getReward() {
        if (this.rewardKey_str.length <= 0) {
            return undefined;
        }
        return this.rewardKey_str;
    }
    sendMsg(channelId) {
    }
    /**
     * 获取战斗过程文字
     */
    getKillProcess() {
        if (!this.data) {
            (0, __1.info)('未设置战斗格式数据');
            return '';
        }
        let str = '';
        for (let index = 0; index < this.data.kill_log.length; index++) {
            const kill_item = this.data.kill_log[index];
            str += `${kill_item.round}回合${kill_item.body.name}击杀了${kill_item.die_body.name}\n`;
        }
        return str;
    }
    /**
     * 获取技能伤害文本
     */
    getSkillHurt(index) {
        let str = '';
        if (index == 0) {
            if (this.battleConfig.hurtLog.me) {
                if (this.skillHurtLog[index].length > 0)
                    str += `${this.hurtLotTitle_me}\n`;
                str += `${this.skillHurtLog[index]}`;
            }
        }
        else if (index == 1) {
            if (this.battleConfig.hurtLog.enemy) {
                if (this.skillHurtLog[index].length > 0)
                    str += `${this.hurtLotTitle_enemy}\n`;
                str += `${this.skillHurtLog[index]}`;
            }
        }
        else {
            console.error('错误的调用！');
        }
        return str;
    }
}
exports.text_battleTemp_style = text_battleTemp_style;