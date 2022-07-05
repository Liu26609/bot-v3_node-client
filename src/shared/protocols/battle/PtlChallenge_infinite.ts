import { ResBattle } from "../Battle";

export interface ReqChallenge_infinite {
    userId: string,
    isStart: boolean
}

export interface ResChallenge_infinite {
    battle?: ResBattle,
    /**
     * 当前层数
     */
    layers:number,
    
}

// export const conf = {}