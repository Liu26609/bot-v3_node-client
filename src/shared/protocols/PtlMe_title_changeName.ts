import { payRes } from "../game/prop";
import { userSetUpCfg } from "../game/setUp";

export interface ReqMe_title_changeName {
    changeName:string,
    userId:string
}

export interface ResMe_title_changeName {
    userCfg:userSetUpCfg,
    pay:payRes,
}

// export const conf = {}