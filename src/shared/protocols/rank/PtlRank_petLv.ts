import { ResRank_leve } from "./PtlRank_leve";
/**
 * 宠物等级排行榜
 */
export interface ReqRank_petLv {
    userId: string
}

export interface ResRank_petLv extends ResRank_leve {}

// export const conf = {}