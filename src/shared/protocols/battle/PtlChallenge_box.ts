import { ResBattle } from '../PtlBattle';
import { DNA_Leve } from './../../game/body';
export interface ReqChallenge_box {
    userId:string,
    /**
     * 0为查看
     * 1为开启
     * 2为挑战
     */
    type:number
}

export interface ResChallenge_box {
    battle?:ResBattle,
    /**
     * 开启副本限制
     * 这里为基因锁限制
     */
    openlimit:DNA_Leve,
    /**
     * 胜利奖励
     */
    win:string,
    /**
     * 失败
     */
    fail:string,
}

// export const conf = {}