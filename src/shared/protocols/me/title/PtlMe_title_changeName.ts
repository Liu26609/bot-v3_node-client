import { payRes } from "../../../game/prop";
import { userSetUpCfg } from "../../../game/setUp";
/**
 * 称号改名
 */
export interface ReqMe_title_changeName {
    /**
     * 修改的名称
     */
    changeName:string,
    userId:string
}

export interface ResMe_title_changeName {
    userCfg:userSetUpCfg,
    pay:payRes,
}

// export const conf = {}