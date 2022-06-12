import { payRes } from "../../game/prop";
import { userSetUpCfg } from "../../game/setUp";

/**
 * 头像商店购买
 */
export interface ReqShop_icon_buy {
    userId: string
}

export interface ResShop_icon_buy { pay: payRes, userCfg: userSetUpCfg }

// export const conf = {}