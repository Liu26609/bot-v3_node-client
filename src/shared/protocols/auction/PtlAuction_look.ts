import { auction } from "../../game/prop";
import { userSetUpCfg } from "../../game/setUp";

export interface ReqAuction_look {
    userId: string
}

export interface ResAuction_look {
    info:auction,
    userCfg:userSetUpCfg
}

// export const conf = {}