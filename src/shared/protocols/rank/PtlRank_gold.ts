import { ResRank_leve } from "./PtlRank_leve";
/**
 * 金币排行榜
 */
export interface ReqRank_gold {
    userId: string
}

export interface ResRank_gold  extends ResRank_leve {}

// export const conf = {}