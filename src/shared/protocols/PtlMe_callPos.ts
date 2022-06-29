import { payRes } from "../game/prop";
/**
 * 坐标传送
 */
export interface ReqMe_callPos {
    userId:string,
    x:number,
    y:number
}
/**
 * 传送
 */
export interface ResMe_callPos {
    mapName:string,
    callPos:{x:number,y:number},
    pay:payRes,
}

// export const conf = {}