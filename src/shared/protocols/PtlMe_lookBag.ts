import { equip } from './../game/equip';
export interface ReqMe_lookBag {
    userId: string,
    lookId: number
}

export interface ResMe_lookBag extends equip {
}

// export const conf = {}