import { payRes } from './../../game/prop';
import { lottery } from "../../game/minGame";
/**
 * 小游戏:猜数魔改版
 */
export interface ReqMinGame_lottery {
    userId: string,
    guessNum:number,
}

export interface ResMinGame_lottery {
    info:lottery,
    guessJude:boolean,
    pay:payRes,
    reward:number
}

// export const conf = {}