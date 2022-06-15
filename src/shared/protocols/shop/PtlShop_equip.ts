import {store_equip } from '../../game/prop';
import { userSetUpCfg } from '../../game/setUp';
/**
 * 黑市商店
 */
export interface ReqShop_equip {
    userId:string
}

export interface ResShop_equip extends store_equip {
    userCfg:userSetUpCfg
}

// export const conf = {}