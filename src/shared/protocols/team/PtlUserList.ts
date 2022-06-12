import { posV2 } from './../../game/body';
import { body } from "../../game/body"

export interface ReqUserList {
    userId: string
}

export interface ResUserList {
    list:{name:string,leve:number,pos:posV2}[]
}

// export const conf = {}