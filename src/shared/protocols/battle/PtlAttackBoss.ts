import { ResBattle } from "../PtlBattle";

export interface ReqAttackBoss {
    userId:string,
}

export interface ResAttackBoss extends ResBattle {
    isWin:boolean,
    hp:number,
    hp_max:number
}

// export const conf = {}