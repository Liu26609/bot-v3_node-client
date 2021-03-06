import { BASE_BODYS, BattleKillLog } from "../game/body";
import { rewardKey } from "../game/prop";
import { SKILL_RES } from "../game/skill";

export interface ReqBattle {

}

export interface ResBattle {
    /**
     * 战斗回合
     */
    battleRound:number,
    /**
     * 技能释放记录
     */
    log: {
        /**
         * 释放者头像
         */
        icon:string,
        /**
         * 释放者ID
         */
        id:string,
        /**
         * 释放者名称
         */
        name: string,
        /**
         * 组
         * 0.先手组
         * 1.后手组
         */
        group:number,
        /**
         * 技能反馈
         */
        list: SKILL_RES[]
    }[]
    kill_log:BattleKillLog[],
    reward?:{key:rewardKey,val:number}[],
    /**
     * 总伤害
     */
    hurt:number
}

// export const conf = {}