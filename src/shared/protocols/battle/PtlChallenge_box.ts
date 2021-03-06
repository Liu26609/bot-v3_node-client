import { ResBattle } from '../Battle';
import { DNA_Leve } from './../../game/body';
/**
 * 破壁计划:挑战完成将会获得奖励和切换地图
 */
export interface ReqChallenge_box {
    userId: string,
    /**
     * 0为查看
     * 1为开启
     * 2为挑战
     */
    type: number
}

export interface ResChallenge_box {
    battle?: ResBattle,
    isMax:boolean,
    /**
     * 开启副本限制
     * 这里为基因锁限制
     */
    openlimit: DNA_Leve,
    /**
     * 胜利奖励
     */
    win: string,
    /**
     * 失败
     */
    fail: string,
    /**
     * 计划完成度
     */
    completion: number,
    /**
     * 参与度
     */
    partakeCont: number,
    /**
     * 挑战次数
     */
    challengeCont: number,
    /**
     * 本次伤害
     */
    hurt: number
}

// export const conf = {}