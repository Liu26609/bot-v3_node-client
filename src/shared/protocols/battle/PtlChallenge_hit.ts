import { ResBattle } from "../Battle";

/**
 * 伤害挑战
 */
export interface ReqChallenge_hit {
    userId:string,
}

export interface ResChallenge_hit extends ResBattle {}

// export const conf = {}