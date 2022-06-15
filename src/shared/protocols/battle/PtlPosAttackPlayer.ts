import { ResBattle } from "../PtlBattle";
/**
 * 攻击当前位置玩家
 */
export interface ReqPosAttackPlayer {
    userId: string,
    attackId:number
}

export interface ResPosAttackPlayer extends ResBattle {}

// export const conf = {}