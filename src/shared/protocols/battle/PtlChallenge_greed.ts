import { rewardKey } from "../../game/prop";
import { ResBattle } from "../Battle";

/**
 * 贪婪洞窟
 */
export interface ReqChallenge_greed {
    userId: string,
    /**
     * 0为查看
     * 1为进入
     * 2为探索
     * 3为结束
     */
    type: number
}

export interface ResChallenge_greed {
    /**
     * 探索遇到敌人不为空
     */
    battle?: ResBattle,
    /**
     * 探索累计奖励
     */
    reward?:{key:rewardKey,val:number}[],
    /**
     * 当前探索累计奖励
     */
    nowReward?:{key:rewardKey,val:number}[],
}

// export const conf = {}