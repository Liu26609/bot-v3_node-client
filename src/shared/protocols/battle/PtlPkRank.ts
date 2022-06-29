import { ResBattle } from "../Battle";
/**
 * 攻击频道内指定玩家
 */
export interface ReqPkRank {
    userId:string,
    attackId:string[]
}

export interface ResPkRank  extends ResBattle {}

// export const conf = {}