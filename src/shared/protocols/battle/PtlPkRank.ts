import { ResBattle } from "../PtlBattle";

export interface ReqPkRank {
    userId:string,
    attackId:string[]
}

export interface ResPkRank  extends ResBattle {}

// export const conf = {}