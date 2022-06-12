import { ResRank_leve } from "./PtlRank_leve";
/**
 * 排位声望排行榜
 */
export interface ReqRank_rankscore {
    userId: string
}

export interface ResRank_rankscore  extends ResRank_leve {}

// export const conf = {}