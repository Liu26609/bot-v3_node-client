import { DNA_Leve } from "../../game/body";
import { ResBattle } from "../Battle";

export interface ReqChallenge_power {
    userId: string,
    isStart: boolean
}

export interface ResChallenge_power {
    battle?: ResBattle,
    /**
     * 下一级基因锁
     */
    nextDNA: DNA_Leve,
    /**
    * 所需伤害
    */
    needHit: number,
    /**
     * 战斗回合数
     */
    battle_round: number,
    /**
     * 挑战胜利将增幅属性
     */
    winAdd: number,
    /**
     * 失败将扣除等级
     */
    failDel: number,
    isMax:boolean
}

// export const conf = {}