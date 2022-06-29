import { equip } from './../game/equip';
/**
 * 背包查看
 */
export interface ReqBag {
    userId: string
}
/**
 * 用户装备背包
 */
export interface ResBag {
    bag:equip[],
}

// export const conf = {}