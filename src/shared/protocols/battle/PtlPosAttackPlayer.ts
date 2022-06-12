import { SKILL_RES } from "../../game/skill";
import { ResBattle } from "../PtlBattle";

export interface ReqPosAttackPlayer {
    userId: string,
    attackId:number
}

export interface ResPosAttackPlayer extends ResBattle {}

// export const conf = {}