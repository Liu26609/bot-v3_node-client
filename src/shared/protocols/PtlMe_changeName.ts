import { payRes } from './../game/prop';
import { rewardKey } from "../game/prop"

export interface ReqMe_changeName {
    userId: string,
    changeName:string
}

export interface ResMe_changeName {
    pay:payRes,
    lastName:string,
    newName:string,
}

// export const conf = {}