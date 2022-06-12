import { rewardKey } from "../game/prop"
import { userSetUpCfg } from "../game/setUp"

/**
 * 用户签到接口
 */
export interface ReqSign {
    userId: string
}

export interface ResSign {
    /** 今天是否重复签到 */
    isRepeat: boolean,
    /** 累计签到 */
    cont: number,
    /** 一言 */
    oneWord: string,
    /** 上次签到时间
     * 1665841521
     */
    lastSignTime: number,
    userCfg:userSetUpCfg,
    reward:{key:rewardKey,val:number}[]
}