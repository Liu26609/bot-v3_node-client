import { ResRank_leve } from "./PtlRank_leve";
/**
 * 签到天数排行榜
 */
export interface ReqRank_sign {
    userId: string
}

export interface ResRank_sign  extends ResRank_leve {}

// export const conf = {}