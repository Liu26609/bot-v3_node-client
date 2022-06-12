import { ResBattle } from "../PtlBattle";

export interface ReqPosAttackEnemy {
    userId: string,
    /**
     * -1为攻击全部怪物
     * -2为攻击胜率最高怪物
     */
    attackId:number
}

export interface ResPosAttackEnemy  extends ResBattle {}

// export const conf = {}