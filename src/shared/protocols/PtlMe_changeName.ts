import { payRes } from './../game/prop';
import { rewardKey } from "../game/prop"
import { userSetUpCfg } from "../game/setUp"

export interface ReqMe_changeName {
    userId: string,
    changeName:string
}

export interface ResMe_changeName {
    pay:payRes,
    lastName:string,
    newName:string,
    userCfg:userSetUpCfg
}

// export const conf = {}