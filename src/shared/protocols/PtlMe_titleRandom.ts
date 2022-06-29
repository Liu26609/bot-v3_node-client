import { payRes } from './../game/prop';
import { base_attribute } from "../game/body";

export interface ReqMe_titleRandom {
    userId:string,
    randomCont:number,
}

export interface ResMe_titleRandom {
    pay:payRes,
    bf:base_attribute,
    now:base_attribute
}

// export const conf = {}