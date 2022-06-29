import { ResBattle } from "../Battle";
/**
 * 攻击当前位置怪物
 */
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