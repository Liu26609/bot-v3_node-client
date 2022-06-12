import { ResRank_leve } from "./PtlRank_leve";

/**
 * 血统等级排行榜
 */
export interface ReqRank_ancestry {
    userId: string
}
export interface ResRank_ancestry   extends ResRank_leve {}
// export const conf = {}