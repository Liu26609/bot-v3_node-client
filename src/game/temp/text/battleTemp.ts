import { SKILL_UNITY } from './../../../shared/game/skill';
/**
 * 转化战斗日志数据模板
 */
import { err, info, log } from "../../..";
import { SKILL_UNITY_CN } from "../../../shared/game/skill";
import bot from "../../../unity/bot";
import common from "../../../shared/game/common";
import { rewardKey_CN, rewardKey } from '../../../shared/game/prop';
import { ResBattle } from '../../../shared/protocols/Battle';
import { userCfg, USER_CFG_MSGTEMPLATE, USER_CFG_TEXTSTRSTYLE } from '../../../interface/userCfg';

export class text_battleTemp_style {
    data?: ResBattle;
    /**
     * 技能伤害统计
     */
    skillHurtLog:string[];
    /**
     * 我方伤害统计标题
     */
    private hurtLotTitle_me:string;
    /**
     * 敌方伤害统计标题
     */
    private hurtLotTitle_enemy: string;
    private rewardKey_str:string;
    private battleConfig: userCfg;
    constructor(cfg?:userCfg) {
        this.skillHurtLog = ['','']
        this.hurtLotTitle_me = `┏┄未设置我方伤害统计标题━┄`;
        this.hurtLotTitle_enemy = `┏┄未设置敌方伤害统计标题━┄`;
        this.rewardKey_str = ``;

        this.battleConfig = cfg || {
            textStrStyle:USER_CFG_TEXTSTRSTYLE.default,
            // 消息模板
            msgTemplate:USER_CFG_MSGTEMPLATE.text
        }
    }
    sendData(data: ResBattle) {
        console.log(data)
        this.data = data;
        let battleList = data.log
        for (let index = 0; index < battleList.length; index++) {
            const item = battleList[index];
            let itemLog = ''
            itemLog += item.icon + item.name;
            for (let index = 0; index < item.list.length; index++) {
                const free_skill = item.list[index];
                // if(free_skill.val == 0){
                //     continue;
                // }
                itemLog += `│▌${free_skill.name}${common.BN(free_skill.val)}`;
                itemLog += SKILL_UNITY_CN[SKILL_UNITY[free_skill.unit]]
            }

            itemLog += '\n';

            this.skillHurtLog[item.group] += itemLog;
        }


        // 设置战斗奖励

        if(data.reward && data.reward.length > 0){
            data.reward.forEach(item => {
                this.rewardKey_str += `${rewardKey_CN[rewardKey[item.key]]}${item.val > 0?'+':''}${common.BN(item.val)}`
            });
        }
        return this;
    }
    /**
     * 设置我方伤害统计标题
     */
    setHurtLotTitle_me(str:string){
        this.hurtLotTitle_me = str;
    }
    /**
     * 设置敌方伤害统计标题
     */
    setHurtLotTitle_enemy(str:string){
        this.hurtLotTitle_enemy = str;
    }
    /**
     * 获取本次战斗的奖励
     */
    getReward():string | undefined{
        if(this.rewardKey_str.length <= 0){
            return undefined;
        }
        return this.rewardKey_str
    }
    sendMsg(channelId: string) {
        
    }
    /**
     * 获取战斗过程文字
     */
    getKillProcess():string{
        if(!this.data){
            info('未设置战斗格式数据')
            return ''
        }
        let str = `<emoji:224>本次战斗总伤害:${common.BN(this.data.hurt)}\n`;
        if(!this.battleConfig.isHideKill_Log){
            for (let index = 0; index < this.data.kill_log.length; index++) {
                const kill_item = this.data.kill_log[index];
                str += `${kill_item.round}回合${kill_item.body.name}击杀了${kill_item.die_body.name}\n`
            }
        }
        return str;
    }
    /**
     * 获取技能伤害文本
     */
    getSkillHurt(index:number){
        let str = '';
        if(index == 0){
            if (!this.battleConfig.isHideSkill_Log) {
                if(this.skillHurtLog[index].length > 0) str += `${this.hurtLotTitle_me}\n`;
                str += `${this.skillHurtLog[index]}`;
            }
        }else if(index == 1){
            if (!this.battleConfig.isHideSkill_Log) {
                if(this.skillHurtLog[index].length > 0) str += `${this.hurtLotTitle_enemy}\n`;
                str += `${this.skillHurtLog[index]}`;
            }
        }else{
            console.error('错误的调用！')
        }
        return str
    }
}