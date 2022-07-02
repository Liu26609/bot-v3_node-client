import { DNA_Leve } from "../../game/body";
import { ResBattle } from "../Battle";

/**
 * 强者挑战
 */
export interface ReqChallenge_downUser {
    userId: string,
    isStart: boolean
}

export interface ResChallenge_downUser {
    battle?: ResBattle,
    /**
    * 下一级基因锁
    */
    nextDNA: DNA_Leve,
    /**
  * 挑战胜利将增幅属性
  */
    winAdd: number,
    /**
   * 失败将扣除等级
   */
    failDel: number,
    isMax:boolean,
    /**
     * 挑战的玩家数量
     */
    challenge_cont:number
}

// export const conf = {}