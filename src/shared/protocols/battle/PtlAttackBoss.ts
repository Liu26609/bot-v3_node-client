import { ResBattle } from "../Battle";

/**
 * 攻击世界BOSS
 */
export interface ReqAttackBoss {
    userId:string,
}

export interface ResAttackBoss extends ResBattle {
    isWin:boolean,
    hp:number,
    /**
     * 伤害贡献
     */
    hurt:number,
    hp_max:number
}

// export const conf = {}