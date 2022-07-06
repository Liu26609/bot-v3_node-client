import { ResRank_leve } from "./PtlRank_leve";

/**
 * 无尽回廊排行榜
 * 全部内容放在name内
 */
export interface ReqRank_Challenge_infinte {
    userId: string
}

export interface ResRank_Challenge_infinte  extends ResRank_leve {}

// export const conf = {}