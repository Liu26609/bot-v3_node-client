import { payRes } from "../../game/prop";
import { userSetUpCfg } from "../../game/setUp";

export interface ReqShop_equip_buy {
    userId:string
}

export interface ResShop_equip_buy  {pay:payRes,userCfg:userSetUpCfg}

// export const conf = {}