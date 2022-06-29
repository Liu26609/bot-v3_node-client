import { payRes } from '../../game/prop';
/**
 * 技能商店购买
 */
export interface ReqShop_skill_buy {
    userId:string
}

export interface ResShop_skill_buy {
    pay:payRes,
}

// export const conf = {}