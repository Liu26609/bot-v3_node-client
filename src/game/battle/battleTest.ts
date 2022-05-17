import { err, info, log } from '../..';
import { SKILL_ACTIVE, SKILL_ACTIVE_RES, SKILL_ACTIVE_RES_TAG, SKILL_ACTIVE_RES_TYPE, SKILL_TYPE } from '../../shared/game/skill';
import bot from '../../unity/bot';
import common from '../../unity/common';
import { task_base } from './../task_base';
export class battleTest extends task_base {
    constructor(...args) {
        super(...args)
        this.render()
    }
    render() {
        bot.sendText(this.channel_id, '666')
        let skill = {
            id: 1,
            // 技能名称
            name: '普通攻击',
            // 技能描述
            tips: '故事',
            // 技能故事
            story: '故事',
            // 技能类型
            type: SKILL_TYPE.attack_Magic_fixed,
            //技能频率
            speed: 10,
            // 技能参数
            _data: '',
            data: []
        }
        // 进行一次测试战斗
        let aGroup = [
            { hp: 100, hp_max: 100, leve: 1, name: '楚轩', skill: [skill] },
            { hp: 100, hp_max: 100, leve: 1, name: '楚轩的宠物', skill: [skill] },
        ];
        let bGroup = [
            { hp: 10000, hp_max: 100, leve: 1, name: '复制体楚轩', skill: [skill] }
        ];

        let isNextRound = this.checkGroupAllDie(aGroup) && this.checkGroupAllDie(bGroup);
        let round = 1;
        while (isNextRound && round < 200) {
            this.battleOne(aGroup, bGroup)
            this.battleOne(bGroup, aGroup)
            round++;
            isNextRound = this.checkGroupAllDie(aGroup) && this.checkGroupAllDie(bGroup);
        }
        log(`战斗${round}回合`)
    }
    battleOne(attackGroup, hotGroup) {
        for (let attack_index = 0; attack_index < attackGroup.length; attack_index++) {
            const attackBody = attackGroup[attack_index];
            if (attackBody.hp < 0) {
                continue;
            }
            // 攻击者随机一个技能
            let attackSkill = this.getActiveSkill(attackBody);

            // 附加上相关被动技能
            let hotBody;

            for (let hot_index = 0; hot_index < hotGroup.length; hot_index++) {
                const hotItem = hotGroup[hot_index];
                if (hotItem.hp < 0) {
                    continue;
                }
                hotBody = hotItem;
                break;
            }
            if (!hotBody) {
                err('没有受击目标')
                break;
            }
            // 受击者相关被动技能触发
            // 得到最终结果
            hotBody.hp -= attackSkill.val;
            info(`${attackBody.name}使用${attackSkill.name}攻击了${hotBody.name}造成${attackSkill.val}`)
        }
    }
    getMissSkill():SKILL_ACTIVE {
        return {
            id: 0,
            // 技能名称
            name: '攻击失手',
            // 技能描述
            tips: '故事',
            // 技能故事
            story: '故事',
            // 技能类型
            type: SKILL_TYPE.miss,
            //技能频率
            speed: 0,
            // 技能参数
            _data: '',
            data: []
        }
    }
    getActiveSkill(freeUnit): SKILL_ACTIVE_RES {
        let allProbability = 0;//总频率
        let bodySkillList = freeUnit.skill;
        let skillRange: Array<{ max: number, min: number, id: number, skill: any }> = [];
        // 将拥有的全部技能总和频率并记录频率段所属技能
        for (let index = 0; index < bodySkillList.length; index++) {
            const skill_item = bodySkillList[index];
            let min = allProbability + (allProbability > 0 ? 1 : 0)
            let max = allProbability + skill_item.speed;
            allProbability += skill_item.speed;

            skillRange.push({ min: min, max: max, id: skill_item.id, skill: skill_item })
        }
        // 加入固定失手概率
        let miss = 10 / 100;
        allProbability += Math.ceil(allProbability * miss * 2);

        let randomIdx = common.random(0, allProbability);//在总的概率范围内的一个随机数
        let randomSkill;
        // 寻找此技能
        for (let i = 0; i < skillRange.length; i++) {
            const itemInfo = skillRange[i];
            if (itemInfo.min <= randomIdx && itemInfo.max >= randomIdx) {
                randomSkill = itemInfo.skill
                break;
            }
        }
        // 如果没寻找到技能则为攻击失手
        if (!randomSkill) {
            randomSkill = this.getMissSkill()
        }
        let res = {
            name:randomSkill.name,
            type: SKILL_ACTIVE_RES_TYPE.none,
            val: 0,
            tag: SKILL_ACTIVE_RES_TAG.none
        }
        // 分析技能输出值
        switch (randomSkill.type) {
            case SKILL_TYPE.miss:
                break;
            case SKILL_TYPE.attack_Magic_fixed:
                res.val = 100;
                res.type = SKILL_ACTIVE_RES_TYPE.hurt;
                res.tag = SKILL_ACTIVE_RES_TAG.enemy;
                break;
            case SKILL_TYPE.attack_Physics_fixed:
                res.val = 200;
                res.type = SKILL_ACTIVE_RES_TYPE.hurt;
                res.tag = SKILL_ACTIVE_RES_TAG.enemy;
                break;
            default:
                break;
        }
        return res;
    }

    // 检测是否有一方全部死亡
    checkGroupAllDie(group: Array<any>): boolean {
        let isOneLife = false;
        for (let index = 0; index < group.length; index++) {
            const body = group[index];
            if (body.hp > 0) {
                isOneLife = true
            }
        }
        return isOneLife;
    }
}